// Respaldo de leads y conversaciones del chat.
//
// Capa 1 (siempre activa): log estructurado [LEAD-BACKUP]/[CHAT-LOG] en
//   consola — visible en Vercel → Logs. Retención corta: configurar un
//   Log Drain (Axiom/Betterstack, tier gratis) para retención larga.
// Capa 2 (durable): Postgres serverless. Se activa sola cuando existe
//   DATABASE_URL (Neon o Vercel Postgres). Crea sus tablas al primer uso.
//
// Recuperación: SELECT * FROM leads_backup WHERE hubspot_ok IS NOT TRUE
// devuelve todos los leads que no llegaron al CRM, con datos de contacto.

import { neon } from "@neondatabase/serverless";

type Sql = ReturnType<typeof neon>;

let ensured = false;

function db(): Sql | null {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  return neon(url);
}

/**
 * Reintenta la operación con backoff corto (400 ms, 1.2 s). Cubre el caso
 * de Neon suspendido por inactividad: el primer intento puede fallar o
 * tardar mientras la BD despierta; el segundo casi siempre entra.
 */
async function withRetry<T>(fn: () => Promise<T>, attempts = 3): Promise<T> {
  let lastErr: unknown;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      if (i < attempts - 1) {
        await new Promise((r) => setTimeout(r, 400 * Math.pow(3, i)));
      }
    }
  }
  throw lastErr;
}

/**
 * Cota de tiempo total: si la BD no responde, devolvemos fallback y el
 * funnel (HubSpot/email) continúa — el respaldo nunca debe tirar al resto.
 */
function withTimeout<T>(p: Promise<T>, ms: number, fallback: T): Promise<T> {
  return Promise.race([p, new Promise<T>((r) => setTimeout(() => r(fallback), ms))]);
}

async function ensureTables(sql: Sql): Promise<void> {
  if (ensured) return;
  await sql`
    CREATE TABLE IF NOT EXISTS leads_backup (
      id         SERIAL PRIMARY KEY,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      email      TEXT,
      name       TEXT,
      company    TEXT,
      phone      TEXT,
      quote_type TEXT,
      payload    JSONB NOT NULL,
      hubspot_ok BOOLEAN,
      email_ok   BOOLEAN
    )`;
  await sql`
    CREATE TABLE IF NOT EXISTS chat_logs (
      id              SERIAL PRIMARY KEY,
      created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
      session_id      TEXT,
      user_message    TEXT,
      assistant_reply TEXT,
      full_history    JSONB
    )`;
  ensured = true;
}

export interface LeadBackupInput {
  quoteType?: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  [key: string]: unknown;
}

/**
 * Guarda el lead ANTES de intentar HubSpot/email. Nunca lanza: si falla,
 * queda al menos el log estructurado. Devuelve el id del respaldo o null.
 */
export async function saveLeadBackup(lead: LeadBackupInput): Promise<number | null> {
  console.info("[LEAD-BACKUP]", JSON.stringify(lead));
  const sql = db();
  if (!sql) {
    console.warn("[LEAD-BACKUP] DATABASE_URL no configurada — respaldo solo en logs");
    return null;
  }
  try {
    return await withTimeout(
      withRetry(async () => {
        await ensureTables(sql);
        const rows = (await sql`
          INSERT INTO leads_backup (email, name, company, phone, quote_type, payload)
          VALUES (${lead.email}, ${lead.name}, ${lead.company}, ${lead.phone},
                  ${lead.quoteType ?? "calibracion"}, ${JSON.stringify(lead)}::jsonb)
          RETURNING id`) as { id: number }[];
        return rows[0]?.id ?? null;
      }),
      8000, // cota total: con Neon despertando de suspensión sobra; si no, seguimos sin bloquear
      null
    );
  } catch (err) {
    console.error("[LEAD-BACKUP] Error al persistir:", err);
    return null;
  }
}

/** Marca cómo terminó la entrega a HubSpot/email para facilitar la recuperación. */
export async function markLeadDelivery(
  id: number | null,
  hubspotOk: boolean,
  emailOk: boolean
): Promise<void> {
  if (id == null) return;
  const sql = db();
  if (!sql) return;
  try {
    await withTimeout(
      withRetry(
        async () =>
          sql`UPDATE leads_backup SET hubspot_ok = ${hubspotOk}, email_ok = ${emailOk} WHERE id = ${id}`,
        2 // el insert ya despertó la BD; con 2 intentos basta
      ),
      4000,
      undefined
    );
  } catch (err) {
    console.error("[LEAD-BACKUP] Error al marcar entrega:", err);
  }
}

/** Registra un intercambio del chat (pregunta del usuario + respuesta de Eve). */
export async function saveChatLog(entry: {
  sessionId?: string;
  userMessage: string;
  assistantReply: string;
  history?: unknown;
}): Promise<void> {
  console.info(
    "[CHAT-LOG]",
    JSON.stringify({ sessionId: entry.sessionId, user: entry.userMessage, eve: entry.assistantReply })
  );
  const sql = db();
  if (!sql) return;
  try {
    await withTimeout(
      withRetry(async () => {
        await ensureTables(sql);
        await sql`
          INSERT INTO chat_logs (session_id, user_message, assistant_reply, full_history)
          VALUES (${entry.sessionId ?? null}, ${entry.userMessage}, ${entry.assistantReply},
                  ${JSON.stringify(entry.history ?? null)}::jsonb)`;
      }, 2),
      5000,
      undefined
    );
  } catch (err) {
    console.error("[CHAT-LOG] Error al persistir:", err);
  }
}

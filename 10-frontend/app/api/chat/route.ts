import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// ─── System prompt ─────────────────────────────────────────────────────────
// To improve precision: update 40-ai/knowledge-base/ files.
// For production with large knowledge bases, replace this with a RAG system
// that retrieves relevant chunks based on the user's query.
const SYSTEM_PROMPT = `Eres Emma, Especialista en Atención a Clientes de INyMET — laboratorio de calibración de instrumentos con acreditación ISO 17025 (IAS CL-101) en México.

## PERSONALIDAD
- Profesional, cálida y empática. Trato de "usted" pero accesible y directa.
- Respuestas concisas: máximo 3-4 oraciones cortas o 4-5 bullets. Nada de monólogos.
- Termina SIEMPRE con una pregunta o llamada a acción concreta.
- Emojis con moderación (máximo 1-2 por mensaje, solo cuando añaden calidez natural).
- Si el cliente escribe informal, tú también puedes ser un poco más informal.

## EMPRESA — INyMET
- Acreditación IAS CL-101, trazabilidad a CENAM (Centro Nacional de Metrología de México)
- +9 años de experiencia · +189 empresas certificadas · certificados en <9 horas · 4 laboratorios acreditados
- Industrias: Automotriz (IATF 16949 · PPAP · MSA), Farmacéutica (GMP · FDA · COFEPRIS), Alimentos (BRC · FSSC22000 · HACCP)
- Teléfono: (55) 5754-3087 | Email ventas: ventas@inymet.com.mx | Email servicio: servicios@inymet.com.mx
- WhatsApp: +52 55 5754-3087

## SERVICIOS DE CALIBRACIÓN (11 laboratorios)
1. Eléctrica — multímetros, fuentes, osciloscopios, analizadores
2. Temperatura — termómetros, termopares, PT100, hornos, autoclaves, data loggers
3. Presión — manómetros, transmisores, vacuómetros, presostatos
4. Dimensional — calibradores, micrómetros, altímetros, bloques patrón
5. Humedad — higrómetros, data loggers, transmisores de humedad
6. Par Torsional — torquímetros de palanca, digitales, llaves de torque
7. Frecuencia y Tiempo — cronómetros, frecuencímetros
8. Vibraciones — vibrómetros, acelerómetros, analizadores
9. Volumen — pipetas automáticas/manuales, buretas, matraces, dispensadores
10. Caudal de Líquidos — medidores de flujo másico/volumétrico, rotámetros
11. Caudal de Gases — flujómetros, controladores de flujo másico

Marcas que distribuimos: Fluke · DRUCK · Rotronic · Alicat Scientific · Chroma · Teledyne LeCroy · Delta OHM · Hart Scientific · Pearson Electronics · Rion

## PROCESO
1. Cotización en <24 horas (sin costo)
2. Recolección o envío del equipo (servicio a domicilio disponible)
3. Calibración en laboratorio certificado con patrones trazables a CENAM
4. Certificado digital en <9 horas
5. Alerta automática de próxima calibración

## PRECIOS — POLÍTICA OBLIGATORIA
NUNCA des precios exactos. Di siempre:
"Los precios dependen del tipo y cantidad de instrumentos. Le damos cotización sin costo en menos de 24 horas."

## HERRAMIENTA consultar_folio
- Úsala SIEMPRE que el cliente mencione un número de folio o código de equipo
- Formatos de folio: INY-XXXX-XXXX, INY2024XXXX, o cualquier combinación alfanumérica que el cliente identifique como su folio

## GUARDRAILS
- Si no sabes algo específico: "Para ese detalle le pongo en contacto con un especialista, ¿tiene preferencia por teléfono o email?"
- Para cotizaciones de +20 equipos o urgentes: sugiere llamar al (55) 5754-3087
- Si el cliente está molesto: empatiza primero ("Entiendo la urgencia, eso es importante") luego resuelve
- No menciones competidores ni hagas comparaciones
- Si preguntan si eres humana: responde con honestidad que eres Emma, el asistente virtual de INyMET, pero que hay especialistas humanos disponibles

## ACCIONES QUE PUEDES OFRECER AL FINAL DE TUS MENSAJES
- "¿Le envío una solicitud de cotización?" (cuando preguntan por servicios)
- "¿Tiene el número de folio a la mano?" (cuando preguntan por estado de equipo)
- "¿Prefiere que le llame un especialista?" (para casos complejos)
- "Le dejo el contacto directo: (55) 5754-3087" (para urgencias)`;

// ─── Tool definitions ───────────────────────────────────────────────────────
const tools: Anthropic.Messages.Tool[] = [
  {
    name: "consultar_folio",
    description:
      "Consulta el estado actual de un equipo enviado a calibración usando su número de folio. Úsala cuando el cliente proporcione cualquier código o folio de equipo.",
    input_schema: {
      type: "object" as const,
      properties: {
        folio: {
          type: "string",
          description:
            "Número de folio del equipo, tal como lo proporciona el cliente (ej: INY-2024-0123, INY20240123, etc.)",
        },
      },
      required: ["folio"],
    },
  },
];

// ─── Tool executor ──────────────────────────────────────────────────────────
// TODO: Replace the mock below with a real Prisma query:
//
//   import { prisma } from "@/lib/prisma";
//
//   const calibracion = await prisma.calibracion.findFirst({
//     where: { folio: { equals: folio.toUpperCase().trim(), mode: "insensitive" } },
//     select: { folio: true, estado: true, instrumento: true, empresa: true,
//               fechaIngreso: true, fechaEstimada: true, tecnico: true }
//   });
//   if (!calibracion) return JSON.stringify({ encontrado: false });
//   return JSON.stringify({ encontrado: true, ...calibracion });
//
// Required Prisma schema (add to schema.prisma):
//   model Calibracion {
//     id             String   @id @default(cuid())
//     folio          String   @unique
//     estado         Estado
//     instrumento    String
//     marca          String?
//     modelo         String?
//     serie          String?
//     empresa        String
//     fechaIngreso   DateTime @default(now())
//     fechaEstimada  DateTime?
//     fechaEntrega   DateTime?
//     tecnico        String?
//     observaciones  String?
//   }
//   enum Estado { RECIBIDO EN_PROCESO LISTO ENTREGADO CANCELADO }

async function executeTool(
  name: string,
  input: Record<string, string>
): Promise<string> {
  if (name === "consultar_folio") {
    const { folio } = input;

    // --- MOCK: remove when real DB is connected ---
    return JSON.stringify({
      encontrado: false,
      mensaje: `El folio "${folio}" no se encontró en el sistema. Es posible que el número sea diferente o que el equipo aún no esté registrado.`,
      sugerencia:
        "Por favor verifique el número de folio en su recibo de entrada, o contáctenos al (55) 5754-3087 o servicios@inymet.com.mx para rastreo inmediato.",
    });
    // --- END MOCK ---
  }

  return JSON.stringify({ error: "Herramienta no disponible" });
}

// ─── Request handler ────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: "Servicio de chat no configurado." },
      { status: 503 }
    );
  }

  try {
    const body = await req.json();
    const messages: Anthropic.Messages.MessageParam[] = body.messages ?? [];

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Mensajes inválidos." }, { status: 400 });
    }

    // Limit history to last 20 messages to control token usage
    const trimmedMessages = messages.slice(-20);

    // First call — may trigger tool use
    const response = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      tools,
      messages: trimmedMessages,
    });

    // Handle tool use
    if (response.stop_reason === "tool_use") {
      const toolResults: Anthropic.Messages.ToolResultBlockParam[] = [];

      for (const block of response.content) {
        if (block.type === "tool_use") {
          const result = await executeTool(
            block.name,
            block.input as Record<string, string>
          );
          toolResults.push({
            type: "tool_result",
            tool_use_id: block.id,
            content: result,
          });
        }
      }

      // Second call with tool results
      const finalResponse = await anthropic.messages.create({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        tools,
        messages: [
          ...trimmedMessages,
          { role: "assistant", content: response.content },
          { role: "user", content: toolResults },
        ],
      });

      const text = finalResponse.content
        .filter((b): b is Anthropic.Messages.TextBlock => b.type === "text")
        .map((b) => b.text)
        .join("");

      return NextResponse.json({ content: text });
    }

    // No tool use — return text directly
    const text = response.content
      .filter((b): b is Anthropic.Messages.TextBlock => b.type === "text")
      .map((b) => b.text)
      .join("");

    return NextResponse.json({ content: text });
  } catch (err) {
    console.error("[chat/route] Error:", err);
    return NextResponse.json(
      {
        content:
          "En este momento tengo un problema de conexión. Por favor llámenos al (55) 5754-3087 o escríbanos a ventas@inymet.com.mx.",
      },
      { status: 200 } // Return 200 so the UI shows the fallback message
    );
  }
}

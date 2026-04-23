# INyMET Chatbot — Especificación Técnica Completa
**Versión**: 1.0  
**Fecha**: 2026-04-21  
**Estado**: MVP implementado — listo para configurar API key y conectar BD

---

## 1. Arquitectura

```
Usuario (browser)
  │
  ├─ ChatWidget.tsx (components/ui/ChatWidget.tsx)
  │     "use client" — React con framer-motion
  │     Gestiona UI, estado de mensajes, quick replies
  │
  └─ POST /api/chat
        app/api/chat/route.ts
        Next.js Server Route (no expone API key al cliente)
             │
             └─ Anthropic API (claude-haiku-4-5-20251001)
                   Sistema: SYSTEM_PROMPT con knowledge base incrustada
                   Herramienta: consultar_folio → Base de datos
```

### Flujo de una conversación
1. Usuario escribe o hace clic en quick reply
2. `ChatWidget` construye el array de mensajes (historial completo)
3. `POST /api/chat` recibe mensajes
4. Claude procesa con el system prompt + tools
5. Si Claude necesita consultar un folio → ejecuta `consultar_folio` → obtiene datos de BD → responde
6. La respuesta regresa al `ChatWidget` como JSON `{ content: string }`
7. El widget muestra la respuesta con animación de entrada

---

## 2. Archivos del sistema

| Archivo | Propósito |
|---------|-----------|
| `components/ui/ChatWidget.tsx` | UI completa del chatbot |
| `app/api/chat/route.ts` | Backend: llama a Claude, ejecuta tools |
| `40-ai/knowledge-base/*.md` | Fuente de conocimiento (actualizable) |
| `00-docs/CHATBOT_SPEC.md` | Este documento |

---

## 3. Cómo mejorar la precisión de las respuestas

### Nivel 1 — Actualizar la Knowledge Base (sin código)
Los archivos en `40-ai/knowledge-base/` se usan para construir el system prompt.

**Impacto alto, esfuerzo bajo:**
- **`faq.md`**: Agrega preguntas reales de clientes con respuestas exactas. Cada pregunta nueva que se responda bien → agrégala al FAQ.
- **`servicios.md`**: Completa los rangos de medición exactos, incertidumbres y capacidades de cada laboratorio.
- **`empresa.md`**: Actualiza datos reales: dirección, horarios, número de técnicos, países donde opera.

**Proceso recomendado:**
1. Cada semana, revisar las conversaciones del chatbot (desde los logs)
2. Identificar preguntas que el chatbot respondió incorrectamente o de forma genérica
3. Escribir la respuesta correcta en el archivo correspondiente
4. El chatbot mejora automáticamente en la siguiente recarga

### Nivel 2 — Refinar el System Prompt (requiere código)
Archivo: `app/api/chat/route.ts` → constante `SYSTEM_PROMPT`

**Cuándo tocar el system prompt:**
- Si el chatbot habla demasiado (reducir max_tokens o agregar "máximo 3 oraciones")
- Si el tono no es el correcto (agregar ejemplos de tono)
- Si no está ofreciendo las CTAs correctas
- Si maneja mal ciertos casos (agregar guardrails específicos)

**Few-shot examples** (agregar en el system prompt para casos difíciles):
```
EJEMPLO — Cliente que pregunta precio exacto:
Usuario: "¿Cuánto cuesta calibrar un manómetro?"
Emma: "El precio depende del rango y número de puntos de calibración. Para darle un precio exacto necesito un par de datos más, ¿me permite hacerle unas preguntas rápidas? O si prefiere, le enviamos cotización en menos de 24 horas. ¿Cuántos manómetros necesita calibrar?"

EJEMPLO — Folio no encontrado:
Usuario: "Mi folio es INY-0091 y no puedo encontrar mi equipo"
Emma: "Revisé el sistema y el folio INY-0091 no aparece todavía. Esto puede ser porque el registro aún está en proceso. Le recomiendo contactar directamente a servicios@inymet.com.mx con el folio y le darán seguimiento inmediato. Disculpe el inconveniente."
```

### Nivel 3 — RAG (Retrieval-Augmented Generation) — Futuro
Para cuando el knowledge base crezca más de ~50 páginas, implementar RAG:

```
Arquitectura RAG:
40-ai/knowledge-base/*.md
        ↓
Chunking (LangChain / custom)
        ↓
Embeddings (OpenAI text-embedding-3-small o Anthropic)
        ↓
Vector Store (Pinecone, pgvector en PostgreSQL, o Qdrant)
        ↓
Query time: user question → retrieve top-K chunks → inject en system prompt
```

**Cuándo implementar RAG:**
- Cuando haya más de 30 preguntas frecuentes únicas
- Cuando el knowledge base supere ~15,000 tokens (límite práctico del system prompt)
- Cuando la precisión por industria empiece a sufrir por conflicto de información

**Stack recomendado para INyMET:**
- `pgvector` (extensión de PostgreSQL ya disponible en Railway)
- `langchain` o `llamaindex` para chunking y retrieval
- Embeddings: `text-embedding-3-small` de OpenAI (económico y rápido)

---

## 4. Integración con Base de Datos (equipos en calibración)

### Estado actual
El tool `consultar_folio` en `app/api/chat/route.ts` tiene un **mock** que siempre responde "folio no encontrado". Para conectarlo con datos reales:

### Paso 1 — Agregar tabla al esquema Prisma

```prisma
// En 20-backend/prisma/schema.prisma
model Calibracion {
  id             String    @id @default(cuid())
  folio          String    @unique
  estado         EstadoCalibracion
  instrumento    String    // ej: "Multímetro Fluke 87V"
  marca          String?
  modelo         String?
  serie          String?
  empresa        String    // nombre del cliente
  fechaIngreso   DateTime  @default(now())
  fechaEstimada  DateTime?
  fechaEntrega   DateTime?
  tecnico        String?
  observaciones  String?
  createdAt      DateTime  @default(now())
  updatedAt      DateTime  @updatedAt
}

enum EstadoCalibracion {
  RECIBIDO       // El equipo llegó al laboratorio
  EN_PROCESO     // En calibración activa
  LISTO          // Calibración terminada, pendiente entrega
  ENTREGADO      // Certificado y equipo entregados
  CANCELADO      // Proceso cancelado
}
```

### Paso 2 — Crear el cliente Prisma en el frontend
Si el chatbot va en Vercel (Next.js) y necesita acceso a DB:

```typescript
// 10-frontend/lib/prisma.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

**Alternativa más segura:** Crear un endpoint en el backend Express:
```
GET /api/calibracion/:folio → { encontrado, estado, instrumento, fechaEstimada }
```
Y desde `route.ts` hacer fetch a ese endpoint interno.

### Paso 3 — Reemplazar el mock en route.ts

```typescript
// En app/api/chat/route.ts, función executeTool:
if (name === "consultar_folio") {
  const { folio } = input;
  
  // Opción A: Query directa con Prisma
  const calibracion = await prisma.calibracion.findFirst({
    where: { folio: { equals: folio.toUpperCase().trim() } },
    select: {
      folio: true, estado: true, instrumento: true, empresa: true,
      fechaIngreso: true, fechaEstimada: true, fechaEntrega: true
    }
  });
  
  if (!calibracion) {
    return JSON.stringify({
      encontrado: false,
      mensaje: `El folio "${folio}" no se encontró. Verifique el número o contacte a servicios@inymet.com.mx`
    });
  }
  
  return JSON.stringify({
    encontrado: true,
    folio: calibracion.folio,
    estado: calibracion.estado,
    instrumento: calibracion.instrumento,
    empresa: calibracion.empresa,
    fechaIngreso: calibracion.fechaIngreso?.toLocaleDateString('es-MX'),
    fechaEstimada: calibracion.fechaEstimada?.toLocaleDateString('es-MX') ?? "Por confirmar",
    fechaEntrega: calibracion.fechaEntrega?.toLocaleDateString('es-MX') ?? null
  });
}
```

### Paso 4 — Variables de entorno adicionales

```env
# 10-frontend/.env.local
DATABASE_URL=postgresql://user:pass@host:5432/inymet_prod
```

### Cómo se ve la respuesta para el cliente (cuando funcione la BD)

> "Su equipo **Multímetro Fluke 87V** (folio INY-2024-0891) está actualmente **en proceso de calibración**. La entrega estimada es el **jueves 24 de abril**. Le enviaremos el certificado por email cuando esté listo. ¿Tiene alguna otra pregunta?"

---

## 5. Variables de entorno requeridas

```env
# 10-frontend/.env.local
ANTHROPIC_API_KEY=sk-ant-api03-...    # Obtener en console.anthropic.com
# Opcional para consulta de folios:
DATABASE_URL=postgresql://...
```

**Cómo obtener la API key:**
1. Ir a https://console.anthropic.com
2. "API Keys" → "Create Key"
3. Nombre sugerido: "inymet-chatbot-prod"
4. Copiar y pegar en `.env.local` y en los environment variables de Vercel

**Costo estimado (claude-haiku-4-5):**
- Input: $0.80 / 1M tokens
- Output: $4 / 1M tokens
- Conversación promedio (~500 tokens): ~$0.003 USD
- 1,000 conversaciones/mes: ~$3 USD

---

## 6. Monitoreo y mejora continua

### Logs de conversación (implementar en Fase 2)
Guardar todas las conversaciones en BD para análisis:

```prisma
model ChatConversacion {
  id        String   @id @default(cuid())
  sessionId String
  role      String   // "user" | "assistant"
  content   String
  createdAt DateTime @default(now())
  // Opcional: rating, resolved, lead_captured
}
```

### Métricas a rastrear
- **Tasa de conversión a cotización**: ¿Cuántos chats terminan en solicitud de cotización?
- **Preguntas sin respuesta satisfactoria**: Detectar por ratings bajos o frases como "no entendiste"
- **Folios consultados**: ¿Cuántos clientes rastrean sus equipos?
- **Tiempo promedio de conversación**: Conversaciones muy cortas = insatisfacción o respuesta incorrecta

### A/B Testing sugerido
- Versión A: Respuestas cortas (máx 3 oraciones)
- Versión B: Respuestas con más detalle técnico
- Métrica: tasa de solicitud de cotización

---

## 7. Personalización de Emma (futura)

### Cambiar nombre/persona
En `ChatWidget.tsx`: cambiar la constante `WELCOME_MESSAGE` y el texto "Emma".  
En `route.ts`: cambiar la línea "Eres Emma..." en `SYSTEM_PROMPT`.

### Cambiar idioma a inglés
Modificar `SYSTEM_PROMPT` para responder en inglés y actualizar los textos del widget.

### Agregar una foto/avatar real
Reemplazar el componente `EmmaAvatar` con `<Image>` que cargue una foto desde `/public/images/ana-avatar.jpg`.

### Agregar integración con HubSpot
Cuando el usuario proporcione su nombre/email en el chat, hacer POST a la API de HubSpot para crear un contacto automáticamente:

```typescript
// Al detectar un email en la conversación:
await fetch("https://api.hubapi.com/contacts/v1/contact", {
  method: "POST",
  headers: { "Authorization": `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}` },
  body: JSON.stringify({ properties: [{ property: "email", value: email }] })
});
```

---

## 8. Checklist de implementación

- [x] ChatWidget.tsx — UI completa con framer-motion
- [x] app/api/chat/route.ts — Integración con Claude claude-haiku-4-5
- [x] app/layout.tsx — Widget agregado al layout
- [x] Knowledge base files en 40-ai/knowledge-base/
- [x] Tool use: consultar_folio (mock — listo para conectar BD)
- [ ] **REQUERIDO**: Agregar `ANTHROPIC_API_KEY` en `.env.local`
- [ ] **REQUERIDO**: Agregar `ANTHROPIC_API_KEY` en variables de Vercel (producción)
- [ ] OPCIONAL: Conectar consultar_folio a base de datos real (ver Sección 4)
- [ ] OPCIONAL: Guardar conversaciones en BD para análisis
- [ ] OPCIONAL: Integración con HubSpot para capture de leads
- [ ] OPCIONAL: A/B testing con diferentes prompts

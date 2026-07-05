---
name: qa-funnel-leads
description: QA del funnel de leads y chatbot de INyMET. Úsalo después de tocar QuoteForm, /api/leads, /api/chat, lib/hubspot.ts, lib/email.ts o el ChatWidget, y antes de cada deploy para verificar el flujo completo de captura de leads.
---

Eres el QA del funnel de conversión de INyMET. El sitio existe para generar leads B2B; si el funnel se rompe, el sitio no sirve.

## Arquitectura del funnel (verificada en código)
- `components/forms/QuoteForm.tsx` → POST `/api/leads` (ruta relativa del propio Next; el backend Express de 20-backend/ NO está conectado).
- El formulario es DUAL: `quoteType: "calibracion" | "instrumentos"`. Venta de instrumentos incluye campo `brand` (11 marcas) y se preselecciona vía URL `?tipo=instrumentos&marca=<slug>` (enlaces desde /instrumentacion).
- `/api/leads` (app/api/leads/route.ts): valida con Zod → `Promise.allSettled` de [createHubSpotContact, sendLeadNotification, sendLeadConfirmation] → createHubSpotDeal (no crítico). `lead_source` distingue `website_form_instrumentos` / `website_form_calibracion`; el dealname lleva el tipo y la marca.
- `lib/hubspot.ts`: fetch puro contra api.hubapi.com (requiere `HUBSPOT_ACCESS_TOKEN`).
- `lib/email.ts`: nodemailer SMTP (requiere `SMTP_HOST/USER/PASS`, opcional `NOTIFY_EMAIL`). Asunto distingue [VENTA]/[CALIBRACIÓN].
- Chatbot "Eve": `components/ui/ChatWidget.tsx` → POST `/api/chat` → Claude (claude-haiku, requiere `ANTHROPIC_API_KEY`, max 2 llamadas con tool `consultar_folio` — mock, sin DB real). Sin streaming: responde JSON completo.
- GA4: evento `form_submit` con `quote_type` e `industry` (requiere `NEXT_PUBLIC_GA4_ID`).

## Checklist de verificación
1. **Validación**: el schema Zod del cliente (QuoteForm) y del servidor (/api/leads) deben aceptar los mismos campos — si uno cambia y el otro no, los leads fallan silenciosamente.
2. **Ambos tipos**: probar submit de calibración Y de instrumentos (con y sin marca).
3. **Preselección URL**: `/contacto?tipo=instrumentos&marca=fluke` debe abrir el form en modo venta con Fluke elegido.
4. **Degradación**: sin env vars, el form debe mostrar error amable y el chat el mensaje de fallback con teléfono (nunca stack traces al usuario).
5. **HubSpot 409**: email duplicado debe actualizar el contacto existente, no fallar.
6. **GA4**: el evento se dispara solo en submit exitoso.
7. **Riesgo conocido**: /api/chat y /api/leads NO tienen rate limiting — es un proxy abierto a APIs de pago. Señálalo en cada auditoría hasta que se resuelva (Turnstile o límite por IP).

## Cómo probar localmente
`cd 10-frontend && npm run dev` y usar fetch/curl contra localhost:3000/api/leads con payloads válidos e inválidos. Sin env vars reales, verificar que los errores se manejan con gracia.

Reporta: qué probaste, qué pasó, qué falló (con archivo:línea) y el fix propuesto.

# INyMET — Pendientes para Producción (documento maestro)
**Actualizado:** 2026-07-05
**Estado:** v4.0 — Tema Clásico default real · `/calibracion` = Sistema Solar (SEO completo) · cotización dual · CTAs telefónicos adaptativos · video publicitario v4 producido · guías YouTube y LinkedIn listas

---

## 📌 DECISIONES TOMADAS

| Fecha | Decisión |
|---|---|
| 2026-07-05 | **Hosting: Vercel Pro.** Re-evaluar Azure SWA Free + Functions en ~2 meses (refactor ~9-14 h documentado). `20-backend/` (Railway) NO está conectado — el frontend hace todo vía `/api/*`; Railway se elimina del plan |
| 2026-07-05 | **Tema default: "Clásico INyMET"** (solo azules del sitio actual). El cliente rechazó el naranja |
| 2026-07-05 | **Chatbot: HubSpot Chat en producción** (portal 2870195). Eve (Claude) queda desactivada en `layout.tsx` hasta cumplir los requisitos de la sección "Chatbot Eve" abajo |
| 2026-07-05 | `/calibracion` = Sistema Solar Metrológico con las 11 secciones indexables; la versión clásica quedó en `/calibracion-v2` (noindex) |

---

## 🔴 CRÍTICO — Bloquea que el sitio genere leads (esta semana)

| # | Pendiente | Detalle |
|---|-----------|---------|
| C1 | **Env vars en Vercel** | `HUBSPOT_ACCESS_TOKEN` (leads del formulario al CRM), `SMTP_HOST/USER/PASS/NOTIFY_EMAIL` (emails de cotización), `NEXT_PUBLIC_GA4_ID` + `NEXT_PUBLIC_GTM_ID` (medición). Sin esto el sitio se ve bien pero **no captura ni mide** |
| C2 | **Migrar dominio inymet.com.mx → Vercel** | Cambio de DNS + redirects 301 de las rutas del sitio viejo a las nuevas. Hasta entonces, todo el SEO trabaja para inymet-web.vercel.app (URL temporal) |
| C3 | **Rate limiting en `/api/leads`** | Endpoint abierto sin protección anti-spam. Agregar límite por IP o Cloudflare Turnstile. (`/api/chat` también, pero solo importa si se reactiva Eve) |
| C4 | **Prueba end-to-end del funnel** | Submit del formulario (ambos tipos: calibración y venta) → verificar contacto+deal en HubSpot → verificar emails de notificación |
| C5 | **`DATABASE_URL` en Vercel (respaldo de leads)** | El código ya persiste cada lead/chat en Postgres ANTES de HubSpot/email (`lib/leadStore.ts`, crea sus tablas solo). Falta: crear BD gratis en Vercel Marketplace → Neon y pegar la connection string. Recuperación: `SELECT * FROM leads_backup WHERE hubspot_ok IS NOT TRUE`. Sin BD, el respaldo mínimo son los logs `[LEAD-BACKUP]` de Vercel (retención corta — considerar Log Drain a Axiom gratis) |

## 🟡 IMPORTANTE — Conversión (2-4 semanas)

| # | Pendiente | Detalle |
|---|-----------|---------|
| I1 | **Testimonios reales** | Los 3 de `TestimonialsSection` son placeholders. Conseguir quotes firmados (automotriz, farmacéutica, alimentos) |
| I2 | **Casos de éxito reales** | `/casos-de-exito` tiene datos inventados. Reemplazar con casos medibles reales |
| I3 | **Unificar cifras oficiales** | ⚠️ La homepage dice "+500 empresas / <24 h" y `/calibracion` dice "+189 / <9 h". Decidir los números reales y unificar en todo el sitio, el chatbot y el video |
| I4 | **PDF de acreditación IAS** | Subirlo a `/public/docs/` + link verificable al portal de IAS para auditores |
| I5 | **Fotos propias del laboratorio** | Las actuales son banners del sitio viejo; fotos reales generan más confianza |
| I6 | **WhatsApp Business verificado** | Confirmar que +52 55 5754-3087 tiene WhatsApp Business activo (setup en `40-ai/redes-sociales/03-whatsapp-business.md`) |

## 🟢 SEO / Autoridad — 90 días (KPI principal: +500% tráfico orgánico)

| # | Pendiente | Detalle |
|---|-----------|---------|
| S1 | **Google Search Console** | Verificar propiedad y enviar sitemap (después de C2) |
| S2 | **Más artículos de blog** | Hay 5 publicados; el keyword research de `30-seo/` da para 15-20 más. Usar el agente `redactor-blog-inymet` |
| S3 | **OG images por página** | Imágenes 1200×630 personalizadas para industrias y servicios |
| S4 | ~~Sitemap~~ / ~~robots.txt~~ | ✅ Ya existen (`app/sitemap.ts`, `app/robots.ts`) |

## 🤖 Chatbot Eve (Claude) — requisitos para reactivarla

Hoy el chat en producción es **HubSpot** (gratis, cae en el inbox del CRM, con handoff humano). Eve se reactiva descomentándola en `app/layout.tsx` **solo cuando**:
1. `ANTHROPIC_API_KEY` configurada en Vercel.
2. **Rate limiting** en `/api/chat` (es un proxy a una API de pago).
3. **Logging de conversaciones/leads a HubSpot** implementado (spec en `00-docs/CHATBOT_SPEC.md`) — si no, las conversaciones no llegan al CRM y ventas no las ve.
4. Idealmente: herramienta `consultar_folio` conectada a BD real (hoy es mock; el esquema Prisma está en `app/api/chat/route.ts`).
⚠️ Nunca tener los dos chats activos a la vez (dos burbujas flotantes).

## 🔵 Funcionalidades futuras

| # | Feature |
|---|---------|
| F1 | Alertas automáticas de vencimiento de calibración (tabla `instruments` + cron) |
| F2 | Sanity CMS para blog sin código (ya está en dependencias) |
| F3 | Cotización con PDF automático por email |
| F4 | Versión en inglés (clientes multinacionales) |
| F5 | Portal interno de clientes (hoy redirect a sitio externo) |

## 📣 Ejecución comercial (material ya producido, falta ejecutar)

| # | Acción | Material |
|---|--------|---------|
| M1 | Alta de canal de YouTube + publicar video | Guía: `40-ai/redes-sociales/06-guia-alta-youtube-publicacion.md` · Video: `E:\ClaudePersonal\inymet\video-youtube\INyMET-video-youtube-v4.mp4` · Miniatura: `miniatura-youtube.png` · Subtítulos CC: `subs2.srt` |
| M2 | Página institucional de LinkedIn (páginas viejas irrecuperables → reportar y crear nueva) | Guía: `40-ai/redes-sociales/07-guia-linkedin-pagina-institucional.md` |
| M3 | WhatsApp Business | `40-ai/redes-sociales/03-whatsapp-business.md` |
| M4 | Carruseles LinkedIn (5 guionizados) + thought leadership directivos | `01-linkedin-carruseles.md` · `04-thought-leadership-directivos.md` |

---

## 📁 Env vars requeridas en Vercel

```env
HUBSPOT_ACCESS_TOKEN=pat-na1-XXXXXXXX        # leads al CRM
SMTP_HOST=smtp.gmail.com
SMTP_USER=ventas@inymet.com.mx
SMTP_PASS=...
NOTIFY_EMAIL=ventas@inymet.com.mx
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=2870195        # ✅ ya configurada (chat HubSpot activo)
NEXT_PUBLIC_SITE_URL=https://inymet.com.mx
ANTHROPIC_API_KEY=sk-ant-...                 # solo al reactivar Eve
NEXT_PUBLIC_LINKEDIN=...                     # solo si la URL final no es /company/inymet
```

## 🚀 Checklist de lanzamiento

```
[ ] Env vars C1 en Vercel + redeploy
[ ] Prueba end-to-end del formulario (calibración + venta) → HubSpot + emails
[ ] Rate limiting / Turnstile en /api/leads
[ ] DNS inymet.com.mx → Vercel + 301s del sitio viejo
[ ] Google Search Console + sitemap
[ ] Verificar GA4 recibiendo eventos (form_submit con quote_type)
[ ] Publicar video en YouTube (guía 06)
[ ] Resolver LinkedIn (guía 07)
[ ] Unificar cifras oficiales (+189 vs +500 / <9h vs <24h)
```

## 🛑 No hacer en producción sin autorización

- Modificar estructura de rutas existentes sin redirects 301
- Cambiar canonical URLs
- Activar Eve sin cumplir los 3 requisitos de la sección Chatbot
- Reintroducir colores fuera del tema Clásico (solo azules)

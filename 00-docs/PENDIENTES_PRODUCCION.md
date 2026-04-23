# INyMET — Pendientes para Producción
**Actualizado:** 2026-04-21  
**Estado del redesign:** v3.4 — Sistema Solar Metrológico (preview `/calibracion-v2`) + v3.3 completo (Emma + SocialSidebar + WhatsApp integrado). TypeScript limpio (0 errores)

---

## ✅ COMPLETADO — Sesión 2026-04-21 (v3.4: Solar System + chatbot + redes)

| # | Tarea | Detalles |
|---|-------|---------|
| D1 | **Sistema de 5 paletas de color** | `globals.css` con 5 themes (Marina, Logotipo, Prestige, Industrial, Océano). `tailwind.config.ts` usa CSS variables para cambio en tiempo real sin reload |
| D2 | **ThemePicker widget** | `components/ui/ThemePicker.tsx` — botón flotante bottom-left, panel con swatches, persiste en localStorage |
| D3 | **Anti-FOUC** | Script inline en `<head>` restaura tema guardado antes del primer paint |
| D4 | **Iconos en submenús** | Header reescrito con icons de lucide-react en los 3 dropdowns (Calibración, Industrias, Instrumentación) |
| D5 | **Color reduction** | Todos los colores hardcoded eliminados — todas las páginas usan exclusivamente `brand-*` y `accent-*` |
| D6 | **TypeScript verificado** | `npx tsc --noEmit` pasa con 0 errores |
| D7 | **Screenshots de los 5 temas** | Guardados en `00-docs/screenshots/theme-*.png` |
| D8 | **Chatbot "Emma" con Claude** | `components/ui/ChatWidget.tsx` + `app/api/chat/route.ts` — framer-motion, tool use `consultar_folio`, quick replies. Renombrado Ana→Emma en v3.3 |
| D9 | **Knowledge base chatbot** | `40-ai/knowledge-base/` — 6 archivos MD actualizables sin código |
| D10 | **Spec técnica chatbot** | `00-docs/CHATBOT_SPEC.md` — arquitectura, mejora precisión, esquema DB, integración HubSpot |
| D11 | **Redes sociales en Footer** | LinkedIn + YouTube + WhatsApp Business con SVG inline y hover en brand colors |
| D12 | **Artefactos Estrategia de Redes** | `40-ai/redes-sociales/` — 5 archivos: carruseles LinkedIn (5 completos), canal YouTube (setup + 2 scripts + 8 outlines), WhatsApp Business (setup + 8 quick replies + flujo), thought leadership directivos (10 templates), biblioteca de hashtags |
| D13 | **SocialSidebar — redes visibles en desktop** | `components/ui/SocialSidebar.tsx` — tabs fijos en borde izquierdo, top-1/2 centrado, expand-on-hover (LinkedIn/YouTube/WhatsApp). WhatsApp unificado aquí (reemplaza botón flotante). Solo visible en lg+; Footer cubre móvil |
| D14 | **Sistema Solar Metrológico (preview)** | `app/calibracion-v2/page.tsx` + `components/sections/SolarSystem.tsx` — 11 labs como esferas en órbita (4 anillos, 500×500px). Native rAF loop (sin framer-motion). Tooltips hover con nombre/desc/badges ISO. Fallback card-grid en móvil. `robots: noindex`. **Decisión pendiente: sustituir `/calibracion` o mantener experimental** |

---

## 🔴 CRÍTICO — Bloquea el lanzamiento (nuevo item para chatbot)

| # | Pendiente | Detalle |
|---|-----------|---------|
| C0 | **`ANTHROPIC_API_KEY` en `.env.local`** | Sin esto el chatbot retorna error 503. Obtener en console.anthropic.com → API Keys |
| C0b | **`ANTHROPIC_API_KEY` en Vercel** | Agregar como variable de entorno en Vercel Dashboard antes del deploy |

## 🔴 CRÍTICO — Bloquea el lanzamiento

| # | Pendiente | Detalle |
|---|-----------|---------|
| C1 | **Variable `NEXT_PUBLIC_API_URL`** | Sin esto, el formulario de cotización falla silenciosamente. Debe apuntar al backend en Railway (ej: `https://api.inymet.com.mx`) |
| C2 | **Variable `NEXT_PUBLIC_GA4_ID`** | Sin tracking no se puede medir qué páginas convierten ni de dónde vienen los leads |
| C3 | **Variable `NEXT_PUBLIC_GTM_ID`** | Google Tag Manager para eventos avanzados |
| C4 | **Backend en Railway** | El servicio `20-backend/` debe estar corriendo para recibir leads desde el formulario y enviarlos a HubSpot |
| C5 | **`HUBSPOT_ACCESS_TOKEN` en backend** | El token real de HubSpot para que los leads lleguen al CRM |
| C6 | **`prisma db push`** | Ejecutar en la base de datos de producción para crear las tablas |

---

## 🟡 IMPORTANTE — Afecta conversión directa

| # | Pendiente | Detalle |
|---|-----------|---------|
| I1 | **Testimoniales reales** | Los 3 testimonios en `TestimonialsSection` son placeholders. Conseguir quotes firmados de clientes reales (automotriz, farmacéutica, alimentos) |
| I2 | **Casos de éxito con datos** | `/casos-de-exito` tiene datos inventados. Reemplazar con casos reales: empresa, reto, resultado medible (ej: "evitó 2 no conformidades en auditoría IATF 2024") |
| I3 | **PDF de acreditación descargable** | `/recursos` promete descarga del certificado IAS. Subir el PDF real a `/public/docs/acreditacion-ias.pdf` |
| ~~I4~~ | ~~**ChatWidget**~~ | ✅ Implementado como chatbot "Emma" (D8 + D13) |
| I5 | **Fotos propias del laboratorio** | Las imágenes actuales (lab-tecnico-multimetros.jpg, etc.) funcionan pero fotos reales del laboratorio INyMET generan más confianza |
| I6 | **Número de WhatsApp verificado** | El botón WA usa +525557543087. Confirmar que este número tiene WhatsApp Business activo |

---

## 🟢 SEO / Autoridad — Para los primeros 90 días

| # | Pendiente | Detalle |
|---|-----------|---------|
| S1 | **Artículos de blog reales** | Las páginas `/blog` y `/blog/[slug]` ya existen. Publicar los primeros 3–5 artículos siguiendo los templates de `30-seo/` |
| S2 | **Sitemap automático** | Agregar `generateSitemaps` o `sitemap.ts` en `app/` para que Next.js lo genere. Luego enviarlo en Google Search Console |
| S3 | **Google Search Console** | Verificar la propiedad y enviar sitemap una vez en producción |
| S4 | **Open Graph images personalizadas** | Las páginas de industria usan la imagen genérica. Crear OG images 1200×630 por página |
| S5 | **Robots.txt** | Crear `public/robots.txt` con directivas básicas |
| S6 | **Link de acreditación verificable** | Poner link directo al número de acreditación en el portal IAS (ias.org) para que auditores puedan verificarlo |

---

## 🔵 FUNCIONALIDADES FUTURAS

| # | Feature | Descripción |
|---|---------|-------------|
| F1 | **Alertas de vencimiento** | El paso 4 del proceso promete alertas automáticas de vencimiento. Requiere tabla `instruments` en BD + cron job en backend |
| F2 | **Área de clientes** | `/Clientes/` en el header apunta al sitio externo. Integrar portal interno o mantener redirect |
| F3 | **Cotización con PDF automático** | Al completar el form, generar PDF de propuesta y enviarlo por email |
| F4 | **Multilenguaje EN** | Para clientes de empresas multinacionales (Ford, Nissan, J&J) que solicitan documentación en inglés |
| F5 | **Blog CMS (Sanity)** | Conectar Sanity para que el equipo pueda publicar artículos sin tocar código. Ya está en las dependencias |

---

## 📁 Archivos de entorno requeridos

### `10-frontend/.env.local`
```env
NEXT_PUBLIC_SITE_URL=https://inymet.com.mx
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=XXXXXXX
NEXT_PUBLIC_API_URL=https://api.inymet.com.mx
```

### `20-backend/.env`
```env
PORT=3001
DATABASE_URL=postgresql://user:pass@host:5432/inymet_prod
HUBSPOT_ACCESS_TOKEN=pat-na1-XXXXXXXX
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
SMTP_HOST=smtp.gmail.com
SMTP_USER=ventas@inymet.com.mx
SMTP_PASS=...
```

---

## 🚀 Checklist de deploy (Vercel + Railway)

```
[ ] Subir repositorio a GitHub (privado)
[ ] Conectar 10-frontend con Vercel
[ ] Configurar variables de entorno en Vercel dashboard
[ ] Conectar 20-backend con Railway
[ ] Configurar variables de entorno en Railway
[ ] Ejecutar: prisma db push (en Railway)
[ ] Apuntar dominio inymet.com.mx → Vercel (cambio de DNS)
[ ] Verificar HTTPS automático (Vercel lo genera)
[ ] Enviar sitemap en Google Search Console
[ ] Prueba completa del formulario de cotización en producción
[ ] Verificar que leads llegan a HubSpot
[ ] Activar GA4 y verificar eventos
```

---

## 🛑 No hacer en producción sin autorización

- Modificar estructura de rutas existentes (afecta SEO del dominio actual)
- Cambiar canonical URL sin redireccionamientos 301
- Forzar push a rama `main` sin PR review

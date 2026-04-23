# INyMET – Growth Operating System (GOS)
**Claude Code Project Context**

---

## PROYECTO

INyMET es una empresa de metrología y calibración certificada (ISO 17025) en México.
Este repositorio implementa el **Growth Operating System v2.0**: transformar la web de INyMET
en una plataforma de generación de leads B2B de alta autoridad.

**Value prop (NO cambiar):**
> "Reducimos riesgos críticos en auditorías ISO mediante calibración certificada con tiempos de respuesta líderes en México."

---

## STACK TECNOLÓGICO

| Capa | Tecnología |
|------|-----------|
| Frontend | Next.js 14 (App Router) + TypeScript + Tailwind CSS |
| Backend | Node.js + Express + TypeScript |
| CMS | Sanity (headless) |
| CRM | HubSpot |
| AI | OpenAI API + Claude API |
| Analytics | GA4 + GTM |
| DB | PostgreSQL (via Prisma) |
| Deploy | Vercel (FE) + Railway (BE) |

---

## ESTRUCTURA DEL REPOSITORIO

```
inymet/
├── 00-docs/          # Blueprints estratégicos (NO modificar)
├── 10-frontend/      # Next.js 14 website
├── 20-backend/       # Node.js Express API
├── 30-seo/           # Keywords, templates de artículos, schema
├── 40-ai/            # Prompts library, chatbot, automatización
└── 99-otros/         # Assets, recursos varios
```

---

## ARQUITECTURA FRONTEND (10-frontend)

```
10-frontend/
├── app/
│   ├── layout.tsx           # Layout raíz con metadata global
│   ├── page.tsx             # Homepage
│   ├── calibracion/
│   ├── metrologia/
│   ├── industrias/
│   │   ├── automotriz/
│   │   ├── farmaceutica/
│   │   └── alimentos/
│   ├── blog/
│   ├── recursos/
│   ├── casos-de-exito/
│   └── contacto/
├── components/
│   ├── layout/              # Header, Footer, Navigation
│   ├── sections/            # Hero, Trust, Services, CTA
│   ├── forms/               # LeadForm, QuoteForm, ChatWidget
│   └── ui/                  # Componentes base (Button, Card, etc.)
├── lib/
│   ├── analytics.ts         # GA4 events
│   ├── hubspot.ts           # HubSpot client
│   └── utils.ts
└── public/
```

---

## ARQUITECTURA BACKEND (20-backend)

```
20-backend/
├── src/
│   ├── server.ts
│   ├── routes/
│   │   ├── leads.ts         # POST /api/leads
│   │   ├── chatbot.ts       # POST /api/chatbot
│   │   └── content.ts       # POST /api/content/generate
│   ├── services/
│   │   ├── hubspot.ts       # HubSpot CRM integration
│   │   ├── openai.ts        # OpenAI/Claude AI integration
│   │   └── email.ts         # Email notifications
│   ├── middleware/
│   │   ├── validation.ts    # Zod schemas
│   │   └── rateLimit.ts
│   └── db/
│       └── schema.ts        # Prisma schema
└── prisma/
```

---

## ICP (NO olvidar en todo el copy)

**Industrias**: Automotriz · Farmacéutica · Alimentos
**Roles**: Gerente de Calidad · Responsable de Metrología · Director de Operaciones

**Dolores clave** (siempre vincular contenido a estos):
- Riesgo en auditorías ISO
- Incumplimiento normativo
- Paros de producción
- Costos ocultos por mala calibración

---

## REGLAS DE DESARROLLO

1. **App Router only** — No usar Pages Router en Next.js
2. **TypeScript estricto** — `strict: true` en tsconfig
3. **Tailwind only** — No CSS modules ni styled-components
4. **Server Components por defecto** — Solo usar `"use client"` cuando sea necesario
5. **SEO en cada página** — Metadata en cada `page.tsx` con keywords objetivo
6. **Schema.org en servicios** — JSON-LD en páginas de servicios y blog
7. **Formularios → HubSpot** — Todo lead va a HubSpot via backend API
8. **GA4 events** — Track: form_submit, cta_click, scroll_depth, page_view
9. **No mock data en prod** — Solo datos reales o variables de entorno
10. **Mobile-first** — Diseñar desde 375px hacia arriba

---

## VARIABLES DE ENTORNO REQUERIDAS

```env
# Frontend (.env.local)
NEXT_PUBLIC_SITE_URL=https://inymet.com
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=XXXXXXX
NEXT_PUBLIC_CHATBOT_API_URL=http://localhost:3001

# Backend (.env)
PORT=3001
DATABASE_URL=postgresql://...
HUBSPOT_ACCESS_TOKEN=pat-...
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
SMTP_HOST=smtp.gmail.com
SMTP_USER=...
SMTP_PASS=...
```

---

## KEYWORDS SEO PRIORITARIAS

| Tipo | Keywords |
|------|---------|
| Primary | calibración de instrumentos México, laboratorio metrología ISO 17025 |
| Secondary | calibración temperatura, calibración presión, calibración multímetros |
| Long-tail | cada cuánto calibrar equipos industriales, costos mala calibración |
| Por industria | calibración instrumentos automotriz, metrología farmacéutica México |

---

## KPIs DEL PROYECTO

- Tráfico orgánico (+500% en 12 meses)
- Leads calificados (+300%)
- Tasa de conversión (+40%)
- Tiempo de respuesta a leads (< 5 min con IA)
- Tasa de cierre

---

## COMANDOS ÚTILES

```bash
# Frontend
cd 10-frontend && npm run dev      # Dev server :3000
cd 10-frontend && npm run build    # Build producción
cd 10-frontend && npm run lint     # ESLint check

# Backend
cd 20-backend && npm run dev       # Dev server :3001
cd 20-backend && npm run build     # Compilar TypeScript

# Ambos
npm run dev  # (desde raíz si hay workspace configurado)
```

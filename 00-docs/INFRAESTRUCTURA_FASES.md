# INyMET — Evolución de Infraestructura

**Principio rector:** Lanzar rápido, validar con datos reales, escalar solo lo que el tráfico justifique.

---

## Fase 0 — Deploy inmediato (actual)

**Trigger:** Desde día 1

| Capa | Tecnología | Costo |
|------|-----------|-------|
| Frontend + API serverless | Vercel (free) | $0 |
| CRM + Chat embed | HubSpot (free) | $0 |
| Email notificaciones | SMTP Gmail | $0 |
| Backend | Sin backend | — |

### Arquitectura

```
Usuario
  └─► Vercel (Next.js)
        ├─ /api/leads    → HubSpot REST API + Nodemailer
        ├─ /api/chat     → Anthropic API (desactivado en fase 0)
        └─ páginas SSG   → estáticas, CDN global de Vercel
```

### Qué resuelve
- Deploy en minutos, sin infraestructura que mantener
- Captura de leads directo a HubSpot CRM
- Chat de soporte vía HubSpot embed (sin costo de IA)
- SEO técnico completo desde el inicio

### Limitaciones conocidas
- Sin persistencia de datos propia (sin base de datos)
- Sin chatbot IA (Claude desactivado)
- Vercel free: límite 100 GB bandwidth/mes, funciones con timeout 10s

---

## Fase 1 — Validación (primer backend)

**Trigger:** Tráfico orgánico > 500 visitas/mes o primeros 20 leads

| Capa | Tecnología | Costo estimado |
|------|-----------|----------------|
| Frontend | Vercel (Pro si aplica) | $0–20/mes |
| Backend simple | Railway / Render (free tier) | $0–7/mes |
| Base de datos | PostgreSQL (Railway) | $0–5/mes |
| CRM | HubSpot (free) | $0 |

### Arquitectura

```
Usuario
  └─► Vercel (Next.js)
        ├─ /api/*    → Railway (Express + Prisma + PostgreSQL)
        │               ├─ POST /leads  → DB + HubSpot + Email
        │               └─ GET  /folio  → consulta estado equipo
        └─ páginas   → SSG/ISR
```

### Qué se agrega
- Base de datos propia: historial de leads, folios de calibración
- Endpoint `consultar_folio` (herramienta del chatbot Emma, actualmente mock)
- Rate limiting en Redis (en lugar de memoria)
- Logs estructurados (Winston → servicio externo)

### Criterio de paso a Fase 2
- Tráfico sostenido > 500 visitas/mes, o
- Necesidad documentada de IA conversacional para calificar leads

---

## Fase 2 — Crecimiento (IA + RAG)

**Trigger:** Validación de negocio confirmada, demanda de respuestas automatizadas

| Capa | Tecnología | Costo estimado |
|------|-----------|----------------|
| Frontend | Vercel Pro | ~$20/mes |
| Backend | VPS (DigitalOcean / Hetzner) | $12–24/mes |
| IA conversacional | Claude API (Haiku) | ~$5–30/mes según uso |
| RAG / embeddings | pgvector en PostgreSQL | $0 extra |
| Base de datos | PostgreSQL en VPS | incluido |

### Arquitectura

```
Usuario
  └─► Vercel (Next.js)
        ├─ /api/chat  → VPS Backend
        │               ├─ Claude claude-haiku (con RAG)
        │               │   └─ pgvector: docs técnicos, precios, FAQs
        │               └─ Tool: consultar_folio → PostgreSQL real
        └─ /api/leads → VPS Backend → HubSpot + DB + Email
```

### Qué se agrega
- Chatbot Emma reactivado con Claude API
- RAG con documentos técnicos de INyMET (catálogos, normas, FAQs)
- `consultar_folio` conectado a base de datos real
- Calificación automática de leads por urgencia
- Alertas automáticas (auditoría próxima → prioridad alta → notificación inmediata)

### Criterio de paso a Fase 3
- Latencia > 2s en horas pico, o
- Tráfico > 10,000 visitas/mes

---

## Fase 3 — Escala (infraestructura distribuida)

**Trigger:** Crecimiento sostenido que justifica inversión en infraestructura robusta

| Capa | Tecnología | Costo estimado |
|------|-----------|----------------|
| Frontend | Vercel Enterprise o CDN propio | $150+/mes |
| Backend | VPS multi-región o K8s | $50–200/mes |
| IA | Claude API (Sonnet) + caché de prompts | variable |
| Base de datos | PostgreSQL + réplica de lectura | $30–80/mes |
| CDN media | Cloudflare R2 | ~$5/mes |
| Observabilidad | Datadog / Grafana Cloud | $20–50/mes |

### Arquitectura

```
CloudFlare CDN
  └─► Vercel (Next.js, SSG agresivo)
        └─► Load Balancer
              ├─ Backend A (región MX)
              │   ├─ Claude API + prompt cache
              │   ├─ PostgreSQL primario
              │   └─ Redis (rate limit + caché)
              └─ Backend B (réplica)
                  └─ PostgreSQL réplica lectura
```

### Qué se agrega
- Prompt caching de Anthropic (reducción de costo IA ~90% en mensajes largos)
- ISR (Incremental Static Regeneration) para páginas de blog/servicios
- Multi-región para clientes fuera de CDMX
- SLA de disponibilidad > 99.9%

---

## Matriz de decisión de escala

| Señal | Acción |
|-------|--------|
| > 500 visitas/mes | Activar Fase 1 |
| > 20 leads/mes | Evaluar backend propio |
| Leads sin respuesta < 5 min | Activar Claude chatbot (Fase 2) |
| > 10,000 visitas/mes | Evaluar Fase 3 |
| Costo IA > $50/mes | Activar prompt caching |
| Timeout en API Vercel | Migrar endpoint a VPS |

---

## Conclusión

Este setup permite:

1. **Lanzar demo inmediato** — sin infraestructura que configurar ni costos fijos
2. **Validar el negocio** — captura de leads real desde el primer día en HubSpot
3. **Capturar leads** — formulario serverless + HubSpot CRM + email automático
4. **Escalar sin rehacer arquitectura** — cada fase extiende la anterior; nada se descarta

La arquitectura modular garantiza que el código de Fase 0 sigue funcionando en Fase 3.
El único componente que cambia de ubicación entre fases es el backend (serverless → Railway → VPS);
el frontend y el CRM permanecen estables durante toda la evolución.

---

*Documento generado: 2026-04-23 | Proyecto: INyMET Growth Operating System v4.0*

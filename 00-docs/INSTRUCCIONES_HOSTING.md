# INyMET GOS — Instrucciones de Uso y Hosting

## Uso Local (Desarrollo)

### Requisitos previos

| Requisito | Versión | Notas |
|-----------|---------|-------|
| Node.js | v20.20.2 (LTS) | Usar nvm. v24+ no es compatible con Next.js 14 |
| npm | v10.x (incluido con Node 20) | No usar npm v11 |
| PostgreSQL | v15+ | Solo para backend con Prisma |
| Git | cualquier | |

> **Importante (Windows):** Si usas nvm-windows, activa la versión correcta antes de instalar:
> ```bash
> nvm use 20.20.2
> ```

### 1. Clonar el repositorio

```bash
git clone <url-repositorio>
cd inymet
```

### 2. Frontend (Next.js)

```bash
cd 10-frontend
npm install
cp .env.local.example .env.local   # Crear y rellenar variables
npm run dev                          # http://localhost:3000
```

#### Variables de entorno frontend (`.env.local`)

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### 3. Backend (Node.js + Express)

```bash
cd 20-backend
npm install
cp .env.example .env    # Crear y rellenar variables
npx prisma db push       # Crear tablas en PostgreSQL
npm run dev              # http://localhost:4000
```

#### Variables de entorno backend (`.env`)

```env
NODE_ENV=development
PORT=4000
DATABASE_URL=postgresql://user:password@localhost:5432/inymet
ALLOWED_ORIGINS=http://localhost:3000

# HubSpot
HUBSPOT_ACCESS_TOKEN=pat-na1-xxxxxxxx

# AI
ANTHROPIC_API_KEY=sk-ant-xxxxxxxx
OPENAI_API_KEY=sk-xxxxxxxx

# Email (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu@email.com
SMTP_PASS=xxxxxx
NOTIFICATION_EMAIL=ventas@inymet.com.mx
```

### Scripts disponibles

| Directorio | Comando | Acción |
|------------|---------|--------|
| `10-frontend` | `npm run dev` | Servidor desarrollo |
| `10-frontend` | `npm run build` | Build producción |
| `10-frontend` | `npm run lint` | TypeScript + ESLint |
| `20-backend` | `npm run dev` | Servidor con ts-node |
| `20-backend` | `npm run build` | Compilar TypeScript |
| `20-backend` | `npm start` | Ejecutar JS compilado |
| `20-backend` | `npx prisma studio` | UI para la base de datos |

---

## Hosting Recomendado

### Opción A: Vercel + Railway (Recomendada para INyMET)

**Mejor para:** Velocidad de deployment, mantenimiento mínimo, buen rendimiento en México

| Servicio | Usa para | Costo aprox./mes | CDN en México |
|----------|----------|------------------|---------------|
| [Vercel](https://vercel.com) | Frontend Next.js | $0–$20 USD (Pro recomendado) | ✅ Edge en CDMX |
| [Railway](https://railway.app) | Backend Express + PostgreSQL | $5–$20 USD | 🟡 US-West (baja latencia desde MX) |

**Latencia típica desde México:**
- Vercel Edge → ~15–30 ms (CDN en CDMX/GDL)
- Railway US-West → ~60–90 ms (aceptable para API calls)

---

### Opción B: Vercel + Neon (Más económico)

| Servicio | Usa para | Costo aprox./mes |
|----------|----------|------------------|
| [Vercel](https://vercel.com) | Frontend + API Routes | $0 (Hobby) / $20 (Pro) |
| [Neon](https://neon.tech) | PostgreSQL serverless | $0–$19 USD |

**Ventaja:** Costo casi $0 al inicio. Puedes mover el backend a Vercel API Routes para eliminar Railway.  
**Desventaja:** Neon serverless tiene cold starts; no ideal para alta concurrencia.

---

### Opción C: VPS en DigitalOcean / Hetzner (Máximo control)

| Proveedor | Plan recomendado | Costo | Latencia desde MX |
|-----------|-----------------|-------|-------------------|
| DigitalOcean | Droplet 2GB/2CPU (NYC) | $18 USD/mes | ~80 ms |
| Hetzner Cloud | CX22 (Nuremberg) | ~$5 EUR/mes | ~180 ms ⚠️ |
| DigitalOcean | Droplet NYC + CDN | $18 + $5/mes | ~50 ms con CDN |

> **Nota Hetzner:** Muy económico pero los servidores están en Europa. Para clientes en México la latencia es alta. Solo recomendado con Cloudflare CDN enfrente.

---

### Opción D: AWS / Google Cloud (Enterprise)

Solo si INyMET escala a >50,000 visitas/mes o requiere cumplimiento de datos en México (Ley Federal de Protección de Datos).

| Servicio | Región | Latencia MX | Costo estimado |
|----------|--------|-------------|----------------|
| AWS Amplify | us-east-1 | ~40 ms | $10–$50 USD/mes |
| Google Cloud Run | us-central1 | ~30 ms | Variable |
| AWS + CloudFront | us-east-1 + MX edge | ~15 ms | $20–$80 USD/mes |

---

## Guía de Deploy: Vercel + Railway (Opción A)

### Frontend en Vercel

1. **Conectar repositorio:**
   - Ir a [vercel.com](https://vercel.com) → New Project → Import Git Repository
   - Seleccionar el repositorio de INyMET

2. **Configurar build:**
   ```
   Root Directory: 10-frontend
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

3. **Variables de entorno en Vercel:**
   ```
   NEXT_PUBLIC_API_URL = https://tu-backend.railway.app
   NEXT_PUBLIC_GTM_ID = GTM-XXXXXXX
   ```

4. **Dominio personalizado:**
   - Settings → Domains → Add `inymet.com.mx`
   - Agregar registro DNS tipo CNAME en tu proveedor: `www → cname.vercel-dns.com`
   - Para el apex (`inymet.com.mx`): registro A → `76.76.21.21`

5. **Deploy:** Automático en cada push a `main`

---

### Backend en Railway

1. **Crear proyecto:**
   - Ir a [railway.app](https://railway.app) → New Project → Deploy from GitHub
   - Seleccionar el repositorio

2. **Agregar base de datos:**
   - New Service → Database → PostgreSQL
   - Railway genera `DATABASE_URL` automáticamente

3. **Configurar servicio backend:**
   ```
   Root Directory: 20-backend
   Build Command: npm run build
   Start Command: npm start
   ```

4. **Variables de entorno en Railway:**
   Copiar todas las variables de `.env` (excepto `DATABASE_URL`, que Railway inyecta automáticamente)

5. **Dominio Railway:**
   - Settings → Networking → Generate Domain → `api.inymet.com.mx` (CNAME)

6. **Migraciones:**
   ```bash
   # En Railway Shell o desde local apuntando a prod:
   DATABASE_URL=<prod-url> npx prisma db push
   ```

---

## Consideraciones para Clientes en México

### Latencia y Rendimiento

- **Vercel Edge Network** tiene nodos en Ciudad de México (MAA) y São Paulo. El frontend carga en < 1s desde cualquier ciudad de México.
- **Railway** tiene regiones en `us-west` y `us-east`. Seleccionar `us-west` (Oregon) para menor latencia desde el norte del país.
- **Imágenes:** Usar `next/image` con optimización automática. Evitar imágenes > 200 KB sin comprimir.

### Dominio `.com.mx`

- Registrar en [NIC México](https://www.nic.mx) o Namecheap con extensión `.mx`
- Costo aprox: $350–$500 MXN/año para `.com.mx`
- Tiempo de propagación DNS: 24–48 horas

### SSL / HTTPS

- Vercel y Railway incluyen certificados SSL gratuitos vía Let's Encrypt. Sin costo adicional.

### Cumplimiento LFPDPPP

Si INyMET recopila datos personales (nombre, empresa, email via formulario de contacto):
- Publicar **Aviso de Privacidad** en el sitio (obligatorio por Ley Federal de Protección de Datos)
- Los datos de HubSpot se almacenan en servidores de EE.UU. (HubSpot cumple con GDPR/ISO 27001)
- Recomendado: agregar casilla de aceptación en el formulario de contacto

### Pagos (futuro)

Si se integra pago en línea, considerar:
- **Conekta** o **OpenPay** para pagos en MXN con tarjetas mexicanas
- **Stripe** acepta MXN pero cobra comisión adicional por conversión

---

## Checklist Pre-Launch

- [ ] Variables de entorno configuradas en Vercel y Railway
- [ ] Dominio `inymet.com.mx` apuntando a Vercel
- [ ] SSL activo y redireccionamiento HTTP → HTTPS
- [ ] Google Analytics 4 verificado (GA4 receiving events)
- [ ] GTM container publicado
- [ ] HubSpot pipeline configurado (etapas del deal)
- [ ] Formulario de contacto probado end-to-end
- [ ] Aviso de Privacidad publicado en el sitio
- [ ] Google Search Console configurado con sitemap
- [ ] Sitemap enviado: `inymet.com.mx/sitemap.xml`
- [ ] Meta tags OG verificados con Facebook Debugger
- [ ] Core Web Vitals > 90 en Lighthouse
- [ ] Prueba de formulario desde dispositivo móvil
- [ ] Email de notificación de lead recibido correctamente

---

## Costos Estimados Mensuales (Opción A)

| Servicio | Plan | Costo USD | Costo MXN aprox. |
|----------|------|-----------|-----------------|
| Vercel Pro | $20/mes | $20 | $380 MXN |
| Railway Starter | $5/mes | $5 | $95 MXN |
| Dominio `.com.mx` | anual | $2 | $40 MXN |
| HubSpot CRM | Starter | $20 | $380 MXN |
| Total estimado | | **$47/mes** | **~$900 MXN/mes** |

> El plan Hobby de Vercel ($0) es suficiente para iniciar. Subir a Pro cuando el tráfico supere 100 GB/mes de ancho de banda.

---

*Actualizado: 2026-04-20 | INyMET GOS v1.0*

# INyMET — Guía de Hosting y Deploy
**Actualizado:** 2026-04-20

---

## Respuesta corta

El sitio se puede publicar **completamente gratis** usando **Vercel** (frontend) + **Railway** (backend).  
El dominio `inymet.com.mx` se queda donde está — solo se cambia el DNS para apuntarlo a Vercel.

---

## Opción recomendada: Vercel + Railway (costo $0)

### Frontend — Vercel (Next.js)

Vercel es la empresa que creó Next.js. Su plan gratuito incluye todo lo necesario:

| Característica | Vercel Gratis (Hobby) |
|---------------|----------------------|
| Dominio personalizado | ✅ inymet.com.mx |
| HTTPS automático | ✅ |
| CDN global (rápido en México) | ✅ |
| Deploy automático desde GitHub | ✅ push → deploy en ~30 seg |
| Ancho de banda | 100 GB/mes |
| Variables de entorno | ✅ panel visual |
| Proyectos | Ilimitados |
| **Costo mensual** | **$0** |

### Backend — Railway

El servicio `20-backend/` (Node.js + Express) se despliega en Railway:

| Característica | Railway Free |
|---------------|-------------|
| Crédito mensual | $5 USD |
| Memoria | 512 MB RAM |
| Suficiente para | ~500–1,000 leads/mes |
| PostgreSQL incluido | ✅ |
| **Costo mensual** | **$0** (dentro del crédito gratuito) |

> Si el volumen de leads crece, Railway Starter cuesta $5/mes y elimina los límites.

---

## ¿Sirve el hosting actual de inymet.com.mx?

**No directamente**, pero **no hay que abandonarlo ni pagarlo de más**.

El sitio actual está en hosting compartido (probablemente cPanel, Plesk, Hostinger o GoDaddy Hosting). El problema: Next.js App Router requiere un proceso Node.js corriendo permanentemente — algo que el hosting compartido no permite.

### Comparativa de opciones

| Opción | Funciona | Costo | Veredicto |
|--------|----------|-------|-----------|
| Dejar dominio donde está + apuntar DNS a Vercel | ✅ | $0 | ✅ **Recomendado** |
| Exportar como sitio estático (`next export`) | ⚠️ Parcial | $0 | ❌ Pierde formulario y SSR |
| Contratar VPS en el mismo proveedor | ✅ | ~$10/mes | ❌ Innecesario |
| Subir archivos al hosting actual via FTP | ❌ No aplica | $0 | ❌ No compatible |

---

## Pasos para hacer el deploy

### Paso 1 — Subir código a GitHub
```bash
# En la raíz del proyecto
git init
git add .
git commit -m "INyMET GOS v3.0 — redesign completo"
git remote add origin https://github.com/tu-usuario/inymet-gos.git
git push -u origin main
```

### Paso 2 — Conectar con Vercel
1. Ir a [vercel.com](https://vercel.com) → crear cuenta gratuita
2. "Add New Project" → importar el repositorio de GitHub
3. En la configuración del proyecto:
   - **Root Directory:** `10-frontend`
   - **Framework Preset:** Next.js (lo detecta automático)
4. Agregar las variables de entorno (ver sección abajo)
5. Click "Deploy" → listo en ~2 minutos

### Paso 3 — Conectar Railway para el backend
1. Ir a [railway.app](https://railway.app) → crear cuenta gratuita
2. "New Project" → Deploy from GitHub repo
3. Seleccionar la carpeta `20-backend` como root
4. Agregar variables de entorno del backend
5. Railway asigna una URL pública automáticamente (ej: `https://inymet-backend.railway.app`)
6. Usar esa URL como valor de `NEXT_PUBLIC_API_URL` en Vercel

### Paso 4 — Cambiar el DNS del dominio
En el panel donde está registrado `inymet.com.mx` (GoDaddy, Hostinger, Namecheap, etc.):

```
Tipo: A
Nombre: @
Valor: 76.76.21.21   ← IP de Vercel

Tipo: CNAME
Nombre: www
Valor: cname.vercel-dns.com
```

> Vercel muestra exactamente qué registros DNS configurar cuando agregas el dominio personalizado en su panel.

Tiempo de propagación DNS: entre 10 minutos y 48 horas (normalmente menos de 1 hora).

### Paso 5 — Apuntar el dominio en Vercel
1. En Vercel → tu proyecto → Settings → Domains
2. Agregar `inymet.com.mx` y `www.inymet.com.mx`
3. Vercel genera el certificado HTTPS automáticamente (Let's Encrypt)

### Paso 6 — Base de datos en producción
```bash
# Desde tu máquina, con DATABASE_URL de Railway en el .env
cd 20-backend
npx prisma db push
```

---

## Variables de entorno requeridas

### En Vercel (frontend)
```env
NEXT_PUBLIC_SITE_URL=https://inymet.com.mx
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=XXXXXXX
NEXT_PUBLIC_API_URL=https://inymet-backend.railway.app
```

### En Railway (backend)
```env
PORT=3001
DATABASE_URL=postgresql://...   ← Railway lo genera automático
HUBSPOT_ACCESS_TOKEN=pat-na1-XXXXXXXX
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
SMTP_HOST=smtp.gmail.com
SMTP_USER=ventas@inymet.com.mx
SMTP_PASS=...
```

---

## Correo electrónico — no se afecta

Si el correo `ventas@inymet.com.mx` está configurado con registros MX en el hosting actual, cambiar los registros A y CNAME del DNS **no afecta el correo**. Los registros MX son independientes.

> Antes de cambiar DNS: anotar los registros MX actuales para asegurarse de que no se toquen.

---

## Preguntas frecuentes

**¿Se puede tener el sitio de prueba en Vercel y el actual en el hosting al mismo tiempo?**  
Sí. Vercel asigna una URL de preview gratuita (ej: `inymet-gos.vercel.app`) donde se puede revisar todo antes de apuntar el dominio real. El sitio actual sigue funcionando hasta que se cambia el DNS.

**¿Qué pasa si el tráfico crece mucho?**  
El plan gratuito de Vercel aguanta volúmenes considerables. Si supera los 100 GB/mes de bandwidth o necesita funciones de equipo, el plan Pro cuesta $20/mes. Para un sitio B2B de metrología, el plan gratuito es suficiente durante años.

**¿Se puede usar otro dominio mientras tanto?**  
Sí. La URL de preview `*.vercel.app` funciona inmediatamente después del deploy y se puede compartir con el dueño para revisión sin afectar el sitio actual.

**¿El correo de Gmail de ventas@inymet.com.mx sigue funcionando?**  
Depende de cómo está configurado. Si usa Google Workspace o correo del proveedor de hosting, los registros MX se mantienen intactos y el correo no se interrumpe.

---

## Screenshots del rediseño

Los screenshots del sitio rediseñado están en:
```
00-docs/screenshots/
  00-homepage.png
  01-calibracion.png
  02-metrologia.png
  03-instrumentacion.png
  04-industrias.png
  05-automotriz.png
  06-farmaceutica.png
  07-alimentos.png
  08-nosotros.png
  09-casos-de-exito.png
  10-blog.png
  11-recursos.png
  12-contacto.png

  prod-00-homepage.png      ← sitio actual para comparar
  prod-01-calibracion.png
  prod-02-instrumentacion.png
  prod-03-clientes.png
```

## Pendientes antes del deploy

Ver archivo: `00-docs/PENDIENTES_PRODUCCION.md`

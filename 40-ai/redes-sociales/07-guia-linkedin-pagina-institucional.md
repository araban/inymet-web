# Guía paso a paso — Página institucional de INyMET en LinkedIn
**Fecha:** 2026-07-05 (actualizada tras confirmar situación)
**Situación confirmada:** existen 2–3 páginas huérfanas **irrecuperables** (no se sabe ni desde qué correo se crearon) → la ruta es **reportarlas para eliminación y crear página nueva**. Quien opera esto es un **consultor externo** (no empleado de INyMET) con correo del dominio ya creado.
**Documentos relacionados:** `01-linkedin-carruseles.md` (contenido), `04-thought-leadership-directivos.md` (perfiles personales), `05-hashtags-biblioteca.md`

---

## ⭐ RUTA RECOMENDADA PARA ESTE CASO (consultor externo)

LinkedIn **no permite crear páginas de empresa sin un perfil personal** — no existen "cuentas de empresa" independientes, y crear un perfil ficticio viola sus términos y pone en riesgo la página. Dos opciones honestas:

**Opción A (recomendada): que la cree un empleado real de INyMET.**
1. El director o la persona de marketing/ventas de INyMET crea la página desde SU perfil personal (con INyMET en su Experiencia y el correo del dominio verificado).
2. Una vez creada, **te agrega a ti como administrador** — los administradores NO necesitan declarar empleo en la empresa; las agencias externas administran páginas de clientes así todos los días. Tu perfil solo necesita ser conexión de 1er grado de quien te invita.
3. Resultado: tú operas la página sin que tu perfil diga que trabajas en INyMET.

**Opción B: crearla tú, declarando la relación real de consultoría.**
Si nadie interno puede hacerlo, agrega en tu Experiencia una posición **veraz**: puesto "Consultor de Tecnología / Marketing Digital", empresa "Grupo INyMET", tipo de empleo **"Contrato" o "Profesional independiente"** (LinkedIn tiene ese campo justamente para esto). Eso no afirma que seas empleado — declara una relación de servicios que sí existe, y puedes cerrarla con fecha fin cuando termine el proyecto. Con eso + el correo del dominio verificado puedes crear la página.

En ambas opciones, aplica después la regla de gobernanza (sección 0.4): mínimo 2 admins, siempre incluyendo a alguien de INyMET.

---

## PARTE 0 — Resolver las páginas huérfanas

> ✅ Confirmado que son irrecuperables (no se conoce correo ni cuenta creadora) → **saltar la sección 0.2** e ir directo al reporte de duplicados (0.3). El reporte puede correr en paralelo a la creación de la página nueva; solo verifica primero si alguna huérfana ocupa la URL `linkedin.com/company/inymet`.

### 0.1 Inventario
1. Busca en LinkedIn: `INyMET`, `Grupo INyMET`, `Inymet calibración`.
2. Anota de cada página encontrada: URL exacta (`linkedin.com/company/...`), número de seguidores, si tiene publicaciones y logo.
3. Elige la "mejor" (más seguidores/completa) como candidata a recuperar.

### 0.2 Intentar recuperar acceso de administrador
Requisitos previos en tu perfil personal (quien hará el trámite):
- Tu perfil debe tener a **INyMET como empleo actual** en la sección Experiencia (puesto real, ej. "Responsable de Tecnología").
- Agrega y **verifica tu correo del dominio** (`@inymet.com.mx` o `@brivesoluciones.com` si es el operador) en Ajustes → Inicio de sesión y seguridad → Direcciones de correo.

Proceso:
1. Entra a la página huérfana → busca el botón **"Solicitar acceso de administrador"** (aparece en Más/⋯ cuando la página no tiene admins activos y tu perfil declara empleo en la empresa).
2. LinkedIn valida y suele conceder el acceso en 3–10 días hábiles (a veces pide confirmación por el correo del dominio).
3. Si obtienes acceso: esa se convierte en la página oficial → salta a la PARTE 2 (configuración) y usa la PARTE 0.3 solo para las demás.

### 0.3 Reportar los duplicados restantes
1. Ve a **linkedin.com/help** → busca "Eliminar una página duplicada" → abre un caso con soporte.
2. Indica: que representas a la empresa, las URLs de las páginas duplicadas/abandonadas, cuál debe permanecer, y que nadie de la organización conserva acceso.
3. Adjunta prueba de representación: correo del dominio corporativo y, si lo piden, documento de la empresa. Soporte puede fusionar seguidores o eliminar las páginas.
4. Tiempo típico: 1–3 semanas. **No bloquea** el resto del trabajo si decidiste crear página nueva.

### 0.4 Regla para que no vuelva a pasar (la causa raíz del problema actual)
- La página debe tener **mínimo 2 administradores** en todo momento (ej. dirección + marketing/tecnología).
- Los admins acceden con perfiles personales cuyo correo corporativo esté verificado.
- Documentar en el gestor de contraseñas de la empresa: quiénes son admins y con qué correos.
- Al salir un empleado admin: transferir el rol ANTES de desactivar su correo.

---

## PARTE 1 — Requisitos para crear la página (si no se recuperó ninguna)

LinkedIn exige que quien crea una página de empresa tenga un perfil personal con:
- Antigüedad mayor a 7 días y varias conexiones (perfil real, no recién creado).
- **INyMET listada como empleo actual** en Experiencia.
- Correo del dominio verificado (esto habilita además la insignia de verificación de la página).

---

## PARTE 2 — Crear la página

1. En LinkedIn (sesión iniciada) → icono **"Para empresas"** (arriba a la derecha) → **"Crear una página de empresa"**.
2. Tipo: **Empresa** (pequeña/mediana).
3. Datos:
   - **Nombre:** `Grupo INyMET`
   - **URL pública:** `linkedin.com/company/inymet` — ⚠️ importante: el sitio web ya enlaza a esa URL (Footer y barra social). Si está tomada por una página huérfana aún no eliminada, usa `grupo-inymet` **y avísale a Claude Code** para actualizar la variable `NEXT_PUBLIC_LINKEDIN` en Vercel (o el default en `10-frontend/lib/contact.ts`).
   - **Sitio web:** `https://inymet.com.mx`
   - **Sector:** Servicios de pruebas y calibración (o "Automatización industrial")
   - **Tamaño:** 11–50 empleados
   - **Tipo:** Empresa privada
4. Marca la casilla de que estás autorizado a representar a la empresa → **Crear página**.

### 2.1 Identidad visual
| Asset | Especificación | Fuente |
|---|---|---|
| Logo | 300×300 px | `10-frontend/public/images/logo-inymet.png` cuadrado sobre fondo blanco |
| Portada | 1128×191 px | Logo + "Calibración ISO 17025 · IAS CL-101 · Certificados en <9 h" con los azules del sitio (#127AB8 / #43BEEB) |

### 2.2 Descripción (copiar y pegar)
```
Laboratorio mexicano de metrología y calibración acreditado ISO/IEC 17025 (IAS CL-101) con trazabilidad al CENAM.

✔ 11 laboratorios acreditados: temperatura, presión, eléctrica, dimensional, humedad, par torsional y más
✔ Certificados en menos de 9 horas
✔ +189 empresas de las industrias automotriz, farmacéutica y de alimentos
✔ Distribuidores autorizados de Fluke, DRUCK, Rotronic, Chroma, Alicat y más

Reducimos riesgos críticos en auditorías ISO mediante calibración certificada con tiempos de respuesta líderes en México.

📋 Cotización sin costo: https://inymet.com.mx/contacto
📞 (55) 5754-3087 · ✉ ventas@inymet.com.mx
```
- **Especialidades:** calibración de instrumentos, metrología industrial, ISO 17025, calibración temperatura, calibración presión, instrumentación, automatización.
- **Ubicación:** Salvatierra 32, San Bartolo Atepehuacan, CDMX 07730.
- **Botón de la página:** "Visitar sitio web" → `https://inymet.com.mx/contacto?utm_source=linkedin&utm_medium=social&utm_campaign=page`

### 2.3 Gobernanza (obligatorio antes de publicar)
1. Página → Configuración → **Administradores** → agrega al segundo admin (mínimo).
2. Solicita la **verificación de página** (Configuración → Verificación) con el correo del dominio.
3. Registra todo en el gestor de contraseñas.

---

## PARTE 3 — Lanzamiento (primeros 30 días)

| Semana | Acción |
|---|---|
| 1 | Publicar post de presentación (quiénes somos + foto del equipo `grupo-inymet.jpg`) y el **video de YouTube** ya producido (subirlo NATIVO a LinkedIn, no solo el link — el video nativo tiene mucho más alcance) |
| 1 | Invitar a todos los empleados a seguir la página (cada admin puede invitar a sus conexiones; pedir a los ~40 empleados que agreguen INyMET como empleador y sigan la página) |
| 2 | Primer carrusel: "5 errores de calibración que matan auditorías ISO" (ya guionizado slide por slide en `01-linkedin-carruseles.md`) |
| 3 | Primer post de thought leadership desde el perfil de un directivo (plantillas listas en `04-thought-leadership-directivos.md`) mencionando a la página |
| 4 | Segundo carrusel + compartir un artículo del blog de inymet.com.mx |

**Ritmo permanente** (según estrategia ya definida): 2 carruseles/mes + 1-2 posts de texto/semana + thought leadership de directivos desde sus perfiles. Horario: Lun–Jue, 7–9 a.m. o 12–1 p.m. CDMX. Hashtags de `05-hashtags-biblioteca.md`.

---

## Checklist rápido

- [ ] Inventario de páginas huérfanas (URLs + seguidores)
- [ ] Perfil personal con INyMET como empleo + correo de dominio verificado
- [ ] Intento de "Solicitar acceso de administrador" en la mejor página
- [ ] Caso abierto en soporte LinkedIn para eliminar/fusionar duplicados
- [ ] Página creada (o recuperada): nombre, URL, sector, tamaño
- [ ] Si la URL no es /company/inymet → actualizar NEXT_PUBLIC_LINKEDIN en Vercel
- [ ] Logo 300×300 + portada 1128×191 con azules del sitio
- [ ] Descripción + especialidades + ubicación + botón con UTM
- [ ] ≥2 administradores + verificación de página + registro en gestor de contraseñas
- [ ] Post de presentación + video nativo + invitación a empleados
- [ ] Carrusel #1 publicado (semana 2)

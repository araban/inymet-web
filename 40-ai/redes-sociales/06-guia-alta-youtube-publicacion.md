# Guía paso a paso — Alta del canal de YouTube de INyMET y publicación del primer video
**Fecha:** 2026-07-05
**Video a publicar:** `E:\ClaudePersonal\inymet\video-youtube\INyMET-video-youtube.mp4` (1:29 min, 1080p)
**Miniatura lista:** `E:\ClaudePersonal\inymet\video-youtube\miniatura-youtube.png` (1280×720)
**Subtítulos aparte:** `E:\ClaudePersonal\inymet\video-youtube\subs.srt` (ya van incrustados en el video; el .srt es para la pista CC)
**Estrategia de canal de referencia:** `40-ai/redes-sociales/02-youtube-canal.md`

---

## PARTE 1 — Crear la cuenta de Google de la empresa

> ⚠️ **No uses una cuenta personal.** El canal debe vivir en una cuenta corporativa para que no dependa de una persona.

1. Abre una ventana de incógnito y entra a **accounts.google.com/signup**.
2. Elige **"Para gestionar mi empresa"** (For my business).
3. Datos recomendados:
   - **Nombre:** Grupo INyMET
   - **Correo:** crea una cuenta Gmail dedicada, p. ej. `inymet.marketing@gmail.com`, **o** usa "Prefiero usar mi dirección actual" con un correo del dominio, p. ej. `marketing@inymet.com.mx` (recomendado: correo del dominio — más profesional y recuperable por el administrador del correo corporativo).
4. **Teléfono de verificación:** usa el celular de la persona responsable de marketing (se necesitará de nuevo en el paso de verificación del canal).
5. **Correo de recuperación:** `ventas@inymet.com.mx` (o el del director). Esto evita perder la cuenta si el responsable cambia.
6. Termina el registro y entra a **myaccount.google.com → Seguridad**:
   - Activa la **verificación en dos pasos** (obligatorio para una cuenta de empresa).
   - Guarda los **códigos de respaldo** en el gestor de contraseñas de la empresa (o impresos en la carpeta de dirección).

---

## PARTE 2 — Crear el canal de YouTube

1. Con la sesión iniciada, entra a **youtube.com** → clic en el avatar (arriba a la derecha) → **"Crear un canal"**.
2. Cuando pida nombre y foto, usa (según la estrategia ya definida en `02-youtube-canal.md`):
   - **Nombre del canal:** `INyMET — Calibración y Metrología Industrial`
   - **Identificador (handle):** `@inymet` — si está ocupado, intenta `@inymetmx` o `@grupoinymet`. **Resérvalo cuanto antes.**
3. Clic en **"Crear canal"**.

### 2.1 Verificar el canal (indispensable antes de subir)
1. Ve a **youtube.com/verify**.
2. Ingresa el teléfono → recibe SMS → captura el código.
3. Esto desbloquea: videos de más de 15 min, **miniaturas personalizadas** (la necesitamos) y transmisiones en vivo.

### 2.2 Personalización del canal
Entra a **YouTube Studio (studio.youtube.com) → Personalización**:

**Pestaña "Marca":**
| Asset | Especificación | Fuente |
|---|---|---|
| Foto de perfil | 800×800 px | Logo INyMET sobre fondo blanco (partir de `10-frontend/public/images/logo-inymet.png`; cuadrarlo en Canva o Paint) |
| Banner | 2560×1440 px (zona segura central 1546×423) | Logo + tagline "Calibración ISO 17025 · Certificados en <9 h" (hacerlo en Canva con los azules del sitio: #127AB8 / #43BEEB) |
| Marca de agua de video | 150×150 px | Versión mini del logo |

**Pestaña "Información básica":**
- **Descripción del canal** — copiar la ya redactada en `02-youtube-canal.md` (sección "Descripción del canal").
- **Enlaces:** `https://inymet.com.mx` · `https://inymet.com.mx/contacto` · LinkedIn de la empresa.
- **Correo de contacto:** `ventas@inymet.com.mx`
- **País:** México · **Idioma:** Español (Latinoamérica).

### 2.3 Ajustes generales del canal (una sola vez)
En **Studio → Configuración**:
1. **Canal → Información básica:** país México, palabras clave del canal: `calibración, metrología, ISO 17025, laboratorio de calibración, CENAM, calibración de instrumentos, México`.
2. **Canal → Configuración avanzada:** en "¿Este canal es para niños?" marca **"No, este canal no es contenido para niños"** (aplica a todo el canal, es B2B).
3. **Valores predeterminados de subida:** idioma del video **Español (Latinoamérica)**, categoría **Ciencia y tecnología**.

---

## PARTE 3 — Publicar el video

### 3.1 Subida
1. En YouTube Studio → botón **CREAR → Subir videos**.
2. Selecciona `INyMET-video-youtube.mp4`.
3. Mientras procesa, llena los campos siguientes (copiar y pegar).

### 3.2 Título (92 caracteres, keyword al inicio)
```
Calibración de Instrumentos ISO 17025 en México — Certificados en menos de 9 horas | INyMET
```

### 3.3 Descripción (copiar completa)
```
¿Se acerca una auditoría ISO y sus instrumentos aún no están calibrados? En INyMET reducimos riesgos críticos en auditorías ISO mediante calibración certificada con tiempos de respuesta líderes en México.

✔ Laboratorio acreditado ISO/IEC 17025 — IAS CL-101
✔ Trazabilidad al CENAM
✔ 11 laboratorios acreditados: temperatura, presión, eléctrica, dimensional, humedad, par torsional y más
✔ Certificados en menos de 9 horas
✔ Más de 189 empresas de las industrias automotriz, farmacéutica y de alimentos confían en nosotros

📋 Cotización gratuita (respuesta en menos de 24 horas):
🌐 https://inymet.com.mx/contacto
📞 (55) 5754-3087
📧 ventas@inymet.com.mx

Capítulos:
0:00 El riesgo de una mala calibración
0:15 Acreditación ISO 17025 (IAS CL-101) y trazabilidad CENAM
0:34 Nuestros 11 laboratorios y marcas que distribuimos
0:51 +189 empresas confían en nosotros
1:04 Solicite su cotización sin costo

#Calibración #Metrología #ISO17025 #MetrologíaIndustrial #CalibraciónDeInstrumentos
```

### 3.4 Miniatura
- Clic en **"Subir miniatura"** → selecciona `miniatura-youtube.png`.
- (Si no aparece la opción, falta la verificación del paso 2.1.)

### 3.5 Audiencia y restricciones
- **¿Es contenido para niños?** → **No** (ya quedó como default del canal, verificar).
- Restricción de edad: No.

### 3.6 "Mostrar más" (campos avanzados)
- **Etiquetas (tags):**
  ```
  calibración de instrumentos, calibración de instrumentos México, laboratorio de calibración, ISO 17025, IAS CL-101, CENAM, metrología industrial, calibración temperatura, calibración presión, calibración multímetros, auditoría ISO, IATF 16949, laboratorio metrología México, INyMET
  ```
- **Idioma del video:** Español (Latinoamérica).
- **Certificación de subtítulos:** "Este contenido nunca se ha emitido en TV en EE. UU."
- **Fecha y lugar de grabación:** Ciudad de México (opcional).
- **Categoría:** Ciencia y tecnología.
- **Licencia:** Licencia estándar de YouTube. ✅ Permitir inserción (para poder incrustarlo en inymet.com.mx).

### 3.7 Subtítulos (pista CC adicional)
El video ya trae subtítulos "quemados", pero subir la pista CC ayuda al SEO (YouTube indexa el texto):
1. En el flujo de subida, paso **"Elementos del video" → Agregar subtítulos**.
2. Idioma: Español → **Subir archivo** → "Con tiempos" → selecciona `subs.srt`.

### 3.8 Pantalla final y tarjetas
- **Pantalla final** (últimos 10 s): agrega elemento **"Suscribirse"** + enlace al video/canal. El cierre del video (logo + contacto sobre blanco) deja espacio de sobra.
- **Tarjeta** (a los ~64 s, cuando la voz dice "Solicite hoy su cotización"): enlace... las tarjetas solo permiten enlaces externos con el Programa de Partners; mientras tanto usa tarjeta de video/canal. El link a inymet.com.mx ya va en la descripción.

### 3.9 Visibilidad y publicación
1. Selecciona **"Público"**.
   - Alternativa: **"Programado"** — martes o miércoles 8:00–10:00 a.m. (horario CDMX) suele rendir mejor para B2B.
2. Clic en **PUBLICAR**.
3. Copia la URL del video para los siguientes pasos.

---

## PARTE 4 — Después de publicar (mismo día)

1. **Playlist:** crea la playlist `📊 Casos de éxito y casos reales` (o `Conoce INyMET`) y agrega el video (las 5 playlists planeadas están en `02-youtube-canal.md`).
2. **Fíjalo en el canal:** Personalización → Diseño → "Video destacado para nuevos suscriptores" → este video. También como tráiler del canal.
3. **Difusión (primeras 48 h importan para el algoritmo):**
   - Publicar en el **LinkedIn** de la empresa (usar template de `40-ai/redes-sociales/01-linkedin-carruseles.md`, formato post con video nativo + link).
   - Enviar por **WhatsApp Business** a clientes activos (plantilla en `03-whatsapp-business.md`).
   - Firma de correo de ventas: agregar link "▶ Conozca INyMET en 90 segundos".
4. **Incrustar en el sitio web:** agregar el video en `/nosotros` o en la homepage (sección Hero o Trust). Pedirle a Claude Code: *"incrusta el video de YouTube <URL> en la página nosotros"* — el agente `seo-inymet` cuidará el schema VideoObject.
5. **Google Search Console:** cuando el video esté en el sitio, solicitar re-indexación de esa página.

---

## PARTE 5 — Qué medir el primer mes (YouTube Studio → Estadísticas)

| Métrica | Dónde | Qué esperar / hacer |
|---|---|---|
| % de retención | Contenido → Interacción | Si cae fuerte antes de 0:15, el gancho necesita ajuste en el próximo video |
| CTR de impresiones | Contenido | <2%: probar otra miniatura (Studio permite A/B "Probar y comparar") |
| Fuentes de tráfico | Público | Ver si llega por búsqueda (keywords funcionando) o solo por difusión propia |
| Clics al sitio | Descripción/tarjetas | Cruzar con GA4: sesiones con `utm` o referral youtube.com |
| Suscriptores | Panel | Secundario en B2B; el KPI real son visitas → cotizaciones |

> 💡 **Siguiente video:** el guion completo del VIDEO #1 de la estrategia ("¿Cómo interpretar tu certificado de calibración?") ya está escrito en `02-youtube-canal.md` — ese es el que posiciona por búsqueda orgánica.

---

## Checklist rápido (imprimible)

- [ ] Cuenta Google corporativa creada (correo del dominio o Gmail dedicado)
- [ ] 2FA activada + códigos de respaldo guardados + correo de recuperación
- [ ] Canal creado: `INyMET — Calibración y Metrología Industrial` / `@inymet`
- [ ] Canal verificado por SMS (youtube.com/verify)
- [ ] Foto de perfil 800×800 + banner 2560×1440 subidos
- [ ] Descripción del canal + enlaces + correo de contacto
- [ ] "No es contenido para niños" como default del canal
- [ ] Video subido con título/descripción/tags de esta guía
- [ ] Miniatura `miniatura-youtube.png` aplicada
- [ ] `subs.srt` subido como pista CC en español
- [ ] Pantalla final con botón de suscripción
- [ ] Publicado (o programado martes/miércoles a.m.)
- [ ] Agregado a playlist + fijado como tráiler del canal
- [ ] Difundido en LinkedIn + WhatsApp + firma de correo
- [ ] Incrustado en inymet.com.mx

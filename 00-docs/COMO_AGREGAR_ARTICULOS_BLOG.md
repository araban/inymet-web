# Cómo Agregar Artículos al Blog de INyMET
**Sistema**: Markdown estático · No requiere base de datos ni CMS

---

## Proceso en 3 pasos

### Paso 1 — Crear el archivo

Crea un nuevo archivo `.md` dentro de la carpeta:
```
10-frontend/content/blog/
```

El nombre del archivo se convierte en la URL del artículo.  
**Ejemplo**: `calibracion-fluke-multimetros.md` → `inymet.com.mx/blog/calibracion-fluke-multimetros`

**Reglas para el nombre**:
- Solo letras minúsculas, números y guiones `-`
- Sin espacios, acentos ni caracteres especiales
- Describir el tema del artículo

---

### Paso 2 — Escribir el frontmatter (encabezado del archivo)

Todo artículo **debe comenzar** con este bloque entre `---`:

```markdown
---
title: "Título completo del artículo"
excerpt: "Descripción breve de 1-2 oraciones que aparece en la lista del blog"
category: "Nombre de la categoría"
readTime: "7 min"
date: "2026-05-10"
featured: false
image: "/images/nombre-de-imagen.jpg"
---
```

| Campo | Requerido | Descripción |
|-------|-----------|-------------|
| `title` | ✅ | Título H1 del artículo |
| `excerpt` | ✅ | Resumen visible en lista del blog y en Google |
| `category` | ✅ | Etiqueta de categoría (ej: "Calibración", "ISO 17025", "Auditorías") |
| `readTime` | ✅ | Tiempo estimado de lectura (ej: "5 min") |
| `date` | ✅ | Fecha en formato YYYY-MM-DD |
| `featured` | No | `true` para que sea el artículo destacado en la portada del blog. Solo uno a la vez. |
| `image` | No | Ruta a imagen en `/public/images/`. Si se omite, no aparece imagen |

---

### Paso 3 — Escribir el contenido

Debajo del segundo `---`, escribe el artículo en formato Markdown:

```markdown
---
title: "Cómo Calibrar un Termómetro Industrial"
excerpt: "Guía práctica para calibrar termómetros tipo J, K y RTD Pt100 en planta."
category: "Gestión de Calibración"
readTime: "6 min"
date: "2026-05-10"
featured: false
---

La calibración de termómetros industriales es uno de los puntos más revisados en auditorías ISO 9001 e IATF 16949. En esta guía explicamos el proceso paso a paso.

## ¿Por qué es crítica la calibración de temperatura?

Los errores en temperatura afectan directamente la calidad del producto...

## Tipos de termómetros que calibramos

- **Termocoplas tipo J** — Rango -40°C a +750°C
- **Termocoplas tipo K** — Rango -200°C a +1,200°C
- **RTD Pt100** — Alta precisión en procesos farmacéuticos

## Proceso de calibración en 5 pasos

1. Verificar estado físico del instrumento
2. Seleccionar patrón de referencia trazable a CENAM
...
```

**Elementos Markdown disponibles**:

| Sintaxis | Resultado |
|----------|-----------|
| `## Título` | Subtítulo H2 |
| `### Subtítulo` | Subtítulo H3 |
| `**negrita**` | **negrita** |
| `*cursiva*` | *cursiva* |
| `- elemento` | Lista con viñeta |
| `1. elemento` | Lista numerada |
| `[texto](url)` | Enlace |
| línea en blanco | Separador de párrafo |

---

## Publicar el artículo

### Opción A — Via Git (recomendada)
```bash
git add content/blog/nombre-del-articulo.md
git commit -m "Blog: agregar artículo sobre [tema]"
git push
```
Vercel detecta el push y **publica automáticamente en ~2 minutos**. No requiere acceso al servidor.

### Opción B — Via GitHub.com (sin instalar nada)
1. Ir a `github.com/[tu-repo]/tree/main/10-frontend/content/blog`
2. Click en **"Add file" → "Create new file"**
3. Escribir nombre del archivo (ej: `mi-articulo.md`)
4. Pegar el contenido completo con frontmatter
5. Click en **"Commit changes"**
6. Vercel despliega automáticamente

---

## Agregar una imagen al artículo

1. Subir la imagen a `10-frontend/public/images/` (JPG o PNG, máx 500KB recomendado)
2. Nombrar con el slug del artículo: `calibracion-termometros.jpg`
3. Referenciar en el frontmatter: `image: "/images/calibracion-termometros.jpg"`

La imagen aparecerá en:
- La tarjeta del artículo en la lista del blog
- El header del artículo individual
- Open Graph (previsualización al compartir en WhatsApp/LinkedIn)

---

## Categorías recomendadas

Para mantener consistencia, usar estas categorías existentes:

| Categoría | Temas |
|-----------|-------|
| `Auditorías ISO` | No conformidades, preparación, checklist |
| `Gestión de Calibración` | Frecuencias, programas, buenas prácticas |
| `Análisis de Costos` | ROI de calibración, costos de no calidad |
| `ISO 17025` | Requisitos, trazabilidad, incertidumbre |
| `Mejora Continua` | MSA, sistemas de medición, optimización |
| `Instrumentación` | Equipos específicos, marcas, aplicaciones |

---

## Artículo destacado (featured)

Solo **un artículo** debe tener `featured: true`. Este aparece en el banner grande de la portada del blog.

Al crear un nuevo artículo destacado, cambiar el anterior a `featured: false`.

---

## Preguntas frecuentes

**¿Cuándo se publica?**  
~2 minutos después del push a main. Vercel rebuilds automáticamente.

**¿Puedo editar un artículo ya publicado?**  
Sí. Edita el archivo `.md` y haz push. La URL no cambia mientras no cambies el nombre del archivo.

**¿Puedo borrar un artículo?**  
Sí. Eliminar el archivo `.md` y hacer push lo remueve del blog. Considera redirigir la URL si ya tenía tráfico.

**¿Necesito re-compilar el código?**  
No manualmente. Vercel lo hace automáticamente con cada push.

**¿Puedo programar publicaciones?**  
No nativamente. Para publicación programada, hacer el push en la fecha deseada, o usar una rama y hacer merge ese día.

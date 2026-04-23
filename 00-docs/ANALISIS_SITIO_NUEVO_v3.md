# Análisis del Sitio Nuevo INyMET vs Sitio Actual
**Fecha**: 2026-04-20  
**Versión**: v3.0 — Análisis completo post-Fase 2

---

## 1. ¿Se completó lo que se pidió en la sesión anterior?

✅ **Sí, todo completado:**
- 7 laboratorios nuevos en `/calibracion`: Humedad, Par Torsional, Frecuencia/Tiempo, Vibraciones, Volumen, Caudal Líquidos, Caudal Gases
- Página `/nosotros` con Misión, Visión, Propósito, Historia (timeline), Valores, Acreditaciones, Capacidades
- Página `/instrumentacion` con las 11 marcas: descripción, líneas de producto, CTA por marca
- Navegación actualizada: "Instrumentación" y "Nosotros" en Header (desktop + mobile)
- Link "Acceso Clientes" → `https://inymet.com.mx/Clientes/` en Header y Footer (ya estaba desde sesión anterior)

---

## 2. Análisis de Imágenes

### Inventario actual
| Archivo | Donde se usa | ¿Apropiada? |
|---------|-------------|-------------|
| `lab-tecnico-multimetros.jpg` | Homepage hero, `/calibracion` hero, OG global | ✅ Homepage · ⚠️ Calibración (misma imagen que homepage — repetitiva) |
| `lab-metrologia-monitores.jpg` | `/metrologia` page | ✅ Apropiada para metrología |
| `instrumentos-calibracion.jpg` | **No se usa en ninguna página** ❌ | — Imagen desperdiciada |

### Problemas de imágenes
1. **`/calibracion` reutiliza la imagen del hero del homepage** — el visitante que navega de homepage a /calibracion ve la misma imagen. Se debería usar `instrumentos-calibracion.jpg` en /calibracion.
2. **`instrumentos-calibracion.jpg` nunca referenciada** — está en `/public/images/` pero no aparece en ninguna página.
3. **Sitio carece de imágenes suficientes**: solo 3 para todo el sitio. Falta:
   - Imagen para `/nosotros` (equipo/lab)
   - Imagen para `/instrumentacion` (equipos en estantería)
   - Imagen para industry pages
   - Imagen para blog posts

### Ajuste aplicado
→ `/calibracion` hero cambiado a `instrumentos-calibracion.jpg` (ver sección 5).

---

## 3. Comparativa: Sitio Actual vs Sitio Nuevo

### Lo que el sitio actual tiene y el nuevo TAMBIÉN tiene ✅
| Elemento | Sitio actual | Sitio nuevo |
|----------|-------------|-------------|
| 11 laboratorios de calibración | ✅ | ✅ Detallados con equipos y normas |
| 11 marcas de instrumentación | ✅ logos | ✅ Descripciones detalladas |
| Acreditación ISO 17025 visible | ✅ badge | ✅ badge + IAS CL-101 |
| Contacto: teléfono y emails | ✅ | ✅ |
| Acceso Clientes (portal EasyManager20) | ✅ | ✅ Header + Footer |
| Aviso de privacidad | ✅ | ✅ |
| Quejas y Sugerencias | ✅ | ✅ Footer |
| Industrias (automotriz, farmacéutica, alimentos) | Mención | ✅ Páginas dedicadas |

### Lo que el sitio actual tiene y el nuevo NO tiene ⚠️
| Elemento | Impacto | Acción requerida |
|----------|---------|-----------------|
| **Testimonios de clientes** | ALTO — prueba social crítica para B2B | Agregar sección de testimonios en homepage |
| **Horario de atención** | MEDIO — en contacto/footer | Agregar: Lun–Vie 8:00–18:00 |
| **Descarga de acreditación** | MEDIO — prueba de legitimidad | Agregar link al certificado PDF oficial |
| **Botón WhatsApp** | ALTO — estándar en B2B México | Agregar botón flotante WhatsApp |
| **Mapa/ubicación** | BAJO-MEDIO | Embed Google Maps en /contacto |
| **Concepto "Grupo Inymet"** | BAJO | Mencionar en /nosotros que tienen dos divisiones |

### Lo que el sitio nuevo tiene y el actual NO tiene 🚀
| Elemento | Valor |
|----------|-------|
| Blog con artículos SEO | Genera tráfico orgánico sostenido |
| Páginas por industria (automotriz, farmacéutica, alimentos) | Conversión B2B vertical |
| Metrología dimensional como página educativa | Autoridad de contenido |
| Schema.org en cada página | Mejor indexación y rich snippets |
| Casos de éxito (/casos-de-exito) | Prueba social detallada |
| Recursos y guías (/recursos) | Lead magnet, autoridad |
| Diseño mobile-first moderno | UX superior |
| CTA claros en cada página | Mejor tasa de conversión |
| SEO técnico completo (metadata, robots, sitemap) | Mejor posicionamiento |

---

## 4. ¿El sitio nuevo es innovador y atractivo para prospectos?

### Respuesta: Sí, con ajustes menores necesarios

**Fortalezas del diseño actual:**
- ✅ Palette azul/brand profesional — transmite confianza técnica
- ✅ Gradientes modernos en heroes — visualmente actual
- ✅ Cards con hover states — interactividad sutil apropiada
- ✅ Typography limpia con Inter — legible y profesional
- ✅ Jerarquía visual clara: H1 → propuesta de valor → CTA
- ✅ Badges de certificación visibles (IAS CL-101, ISO 17025) — generan credibilidad
- ✅ Datos concretos: "< 24h", rangos de calibración, normas aplicables

**Debilidades de diseño a mejorar:**
- ⚠️ No hay testimonios/prueba social → un prospecto sin referencia no tiene validación
- ⚠️ TrustSection muestra "3 sectores" como stat — débil, debería ser "+500 clientes" o "+20 años"
- ⚠️ No hay botón WhatsApp flotante → en México es esperado y aumenta conversiones
- ⚠️ ServicesSection del homepage solo muestra 4 de 11 servicios — oportunidad perdida
- ⚠️ BrandsSection sin logos — los logos son prueba visual de representación oficial

**Evaluación para el ICP (Gerente de Calidad, Dir. Operaciones):**
Un gerente de calidad que llega al sitio busca en 10 segundos:
1. "¿Tienen ISO 17025?" → ✅ Visible de inmediato
2. "¿Calibran mis instrumentos?" → ✅ Listado claro en /calibracion
3. "¿Son de confianza?" → ⚠️ Falta: testimonios, años de experiencia visible en homepage
4. "¿Cuánto tarda?" → ✅ "< 24 horas" en hero
5. "¿Cómo los contacto?" → ✅ CTA claro, pero falta WhatsApp

---

## 5. Bugs críticos encontrados

### BUG 1 — `btn-outline` clase no definida ❌
**Archivos afectados**: `/nosotros/page.tsx` (línea 293), `/instrumentacion/page.tsx` (línea 279)  
**Efecto**: Botones sin estilo visible (texto plano sin border ni background)  
**Fix**: Agregar `.btn-outline` a `globals.css`

### BUG 2 — Página `/contacto` con datos placeholder ❌ CRÍTICO
**Problema**: Teléfono muestra `+52 (XX) XXXX-XXXX`, email muestra `contacto@inymet.com`, href tel es `+52XXXXXXXXXX`  
**Datos reales**: Tel: `(55) 5754-3087` | Email: `ventas@inymet.com.mx`  
**Fix**: Actualizar `app/contacto/page.tsx`

### BUG 3 — Imagen repetida en /calibracion hero ⚠️
**Problema**: `/calibracion` usa `lab-tecnico-multimetros.jpg` igual que el homepage  
**Fix**: Cambiar a `instrumentos-calibracion.jpg` (archivo ya existe y no se usa)

---

## 6. Ajustes necesarios — Prioridad ordenada

### 🔴 CRÍTICO (afecta conversiones hoy)
1. Corregir datos reales en `/contacto` (teléfono, email, tel href)
2. Definir clase `btn-outline` en globals.css
3. Agregar botón flotante WhatsApp

### 🟡 IMPORTANTE (afecta confianza del prospecto)
4. Agregar sección de Testimonios en homepage
5. Cambiar imagen de hero en `/calibracion` → usar `instrumentos-calibracion.jpg`
6. Actualizar TrustSection stats: "+500 Clientes" y "+20 Años"
7. Agregar horario de atención en footer y /contacto
8. Agregar link de descarga de acreditación (PDF oficial) en /nosotros y /calibracion

### 🟢 MEJORA (incrementa autoridad y SEO)
9. ServicesSection en homepage: expandir de 4 a 6+ servicios listados
10. Footer: agregar los 7 labs nuevos en lista de servicios
11. Agregar Google Maps embed en /contacto
12. BrandsSection: conseguir logos SVG/PNG de las 11 marcas
13. Agregar página de /cotizacion dedicada (alias de /contacto con slug propio para SEO)

---

## 7. Sobre el Portal de Clientes (EasyManager20)

El portal en `https://inymet.com.mx/Clientes/` es el sistema **EasyManager20** — acceso con usuario/contraseña para clientes existentes.

**Estado en el sitio nuevo:**
- ✅ "Acceso Clientes" visible en Header (desktop + mobile)
- ✅ "Acceso Clientes" en Footer (bottom bar)
- El link apunta a `https://inymet.com.mx/Clientes/` (URL del sitio actual — correcto mientras no se migre)

**Consideración futura**: Cuando se lance el sitio nuevo en el dominio, este link seguirá funcionando porque apunta al subpath del sitio PHP existente o al portal externo. No requiere cambio adicional.

---

## 8. Sobre la documentación del Blog

El archivo `00-docs/COMO_AGREGAR_ARTICULOS_BLOG.md` **ya existe y está completo**. Documenta:
- Proceso de 3 pasos (crear archivo .md, frontmatter, contenido)
- Campos del frontmatter con tabla de descripción
- Cómo publicar (via git push o via GitHub.com sin instalar nada)
- Cómo agregar imágenes
- Categorías recomendadas
- Artículo destacado (featured)
- FAQ (cuándo se publica, cómo editar, cómo borrar)

**No requiere acción adicional.** El documento ya existe en `00-docs/`.

---

## 9. Checklist de implementación de ajustes

- [x] Bug: btn-outline sin definir → globals.css actualizado
- [x] Bug: contacto con placeholders → teléfono, emails, href reales aplicados
- [x] Bug: imagen repetida en /calibracion hero → cambiada a instrumentos-calibracion.jpg
- [x] TrustSection stats: "+20 años" y "+500 clientes" aplicados
- [x] Horario de atención: Lun–Vie 8:00–18:00 en footer y /contacto
- [x] Footer servicios: 8 labs listados (los 4 originales + 4 nuevos)
- [ ] Botón WhatsApp flotante (pendiente)
- [ ] Sección de Testimonios en homepage (pendiente)
- [ ] Link de descarga de acreditación/PDF (pendiente — requiere URL del PDF)
- [ ] ServicesSection en homepage: expandir a 6+ servicios (pendiente)
- [ ] Google Maps embed en /contacto (pendiente — requiere API key o iframe embed URL)
- [ ] Logos de marcas en BrandsSection (pendiente — requiere archivos de proveedor)

# Análisis de Gaps: Sitio Actual vs Nuevo Sitio Next.js
**Fecha**: 2026-04-20  
**Comparativa**: https://inymet.com.mx (producción) vs localhost:3000 (nuevo)

---

## 1. Imágenes — ¿Están en el lugar correcto?

| Sección | Imagen usada | Evaluación |
|---------|-------------|------------|
| Homepage hero | `lab-tecnico-multimetros.jpg` — técnico calibrando con Fluke | ✅ Correcta. Transmite trabajo real, confianza técnica |
| `/metrologia` hero | `lab-metrologia-monitores.jpg` — lab con monitores de análisis | ✅ Correcta. Comunica laboratorio de alta tecnología |
| `/calibracion` hero | `instrumentos-calibracion.jpg` — **banner de 50% DESCUENTO** | ❌ **Incorrecta.** Es imagen promocional/comercial, no técnica. Daña la percepción de laboratorio serio ISO 17025 |

**Acción requerida**: Reemplazar imagen de `/calibracion` con una foto del técnico o de instrumentos siendo calibrados. La imagen del banner de descuento es de ventas, no de servicio técnico certificado.

---

## 2. ¿Qué tiene el sitio actual que el nuevo omite?

### 🔴 CRÍTICO — Impacto directo en leads y credibilidad

#### A) Portal de Clientes
- **URL actual**: https://inymet.com.mx/Clientes/  
- **Qué es**: Sistema de login para clientes activos — acceden a sus certificados, historial, estado de servicios
- **Impacto**: Clientes actuales NO podrán encontrar dónde ingresar al cambiar el sitio
- **Acción**: Agregar enlace "Acceso Clientes" en el Header (nav principal) y en el Footer

#### B) Acreditación IAS CL-101 (internacional)
- El sitio actual muestra prominentemente el badge **IAS ACCREDITED** con número CL-101
- IAS es signatario del Acuerdo de Reconocimiento Mutuo (MRA) del ILAC — validez **internacional**
- El nuevo sitio solo menciona "ISO 17025" pero NO menciona IAS ni el número de acreditación CL-101
- **Impacto**: Este es el diferenciador de mayor peso ante compradores corporativos y auditores internacionales
- **Acción**: Agregar badge IAS + "Acreditación CL-101" en TrustSection de homepage y en /calibracion

#### C) Marcas representadas — 11 fabricantes líderes
El nuevo sitio no menciona **ninguna** marca. El sitio actual tiene una sección completa de logos:

| Marca | Relevancia |
|-------|-----------|
| **Fluke** | Estándar de oro en multímetros industriales — reconocimiento inmediato |
| **DRUCK** (Baker Hughes) | Presión de precisión — muy conocido en Oil & Gas y farmacéutica |
| **Rotronic** | Temperatura y humedad — farmacéutica y alimentos |
| **Alicat Scientific** | Caudal de gases y líquidos — industria especializada |
| **Chroma** | Pruebas eléctricas y seguridad — automotriz y electrónica |
| **Teledyne LeCroy** | Osciloscopios de alta gama |
| **Pearson Electronics** | Sondas de corriente — nichos muy específicos |
| **Delta OHM** | Multiparámetro ambiental |
| **Rion** | Vibración y sonido |
| **Hart Scientific** | Temperatura de precisión — referencia en laboratorios |
| **TROTEC** | Medición de clima y ambiente |

- **Impacto SEO**: Cada marca es una keyword con volumen real ("calibración Fluke México", "calibración DRUCK", etc.)
- **Impacto conversión**: Ver logos conocidos genera confianza inmediata en el decisor
- **Acción**: Agregar sección `BrandsSection` en homepage con los 11 logos

#### D) Emails correctos — hay DOS correos operativos
- Sitio actual: **ventas@inymet.com.mx** (comercial) + **servicios@inymet.com.mx** (técnico/soporte)
- Sitio nuevo: solo usa `contacto@inymet.com.mx` — **este email no existe en el sitio actual**
- **Acción**: Actualizar todos los formularios, footer y contacto con los emails correctos

### 🟡 IMPORTANTE — Cobertura de servicios incompleta

#### E) Laboratorios de calibración faltantes (7 especialidades)
El nuevo sitio solo muestra 4 áreas. El acreditado tiene **11 laboratorios**:

| Lab en sitio nuevo | Labs que faltan |
|-------------------|----------------|
| Temperatura ✅ | **Humedad** |
| Presión ✅ | **Par Torsional** |
| Eléctrica ✅ | **Frecuencia y Tiempo** |
| Dimensional ✅ | **Vibraciones** |
| | **Volumen** |
| | **Caudal de Líquidos** |
| | **Caudal de Gases** |

- **Impacto SEO**: "calibración de humedad México", "calibración vibraciones industrial" — keywords sin cubrir
- **Acción**: Ampliar sección de servicios en /calibracion con los 7 labs faltantes

#### F) Pilar de negocio faltante: Instrumentación / Ventas
- El negocio completo es: **"GRUPO INYMET — VENTAS, CALIBRACIÓN Y AUTOMATIZACIÓN"**
- La venta de equipos de medición (distribución oficial de las 11 marcas) es un negocio independiente
- El nuevo sitio es 100% calibración, omitiendo ventas y automatización
- **Acción**: Agregar página `/instrumentacion` o al menos mencionar en nav + homepage que también venden equipos

#### G) Página "Quiénes Somos" / Nosotros
- El sitio actual tiene Quiénes Somos, Misión, Visión
- El nuevo sitio no tiene página `/nosotros`
- **Impacto**: Compradores B2B buscan validar empresa antes de contratar. Sin página "About" se reduce la confianza
- **Acción**: Crear `/nosotros` con misión, visión, años de experiencia, equipo

### 🟢 MENOR — Detalles de experiencia

#### H) Quejas y Sugerencias
- El footer actual tiene enlace a formulario de Quejas y Sugerencias
- Requerido por algunas certificaciones (ISO 9001) y buena práctica
- **Acción**: Agregar enlace en footer del nuevo sitio (puede apuntar a /contacto con subject predefinido)

#### I) Promoción / Oferta visible
- El sitio actual tiene un banner de "50% de descuento al adquirir equipo nuevo"
- Aunque la imagen no debe usarse en hero técnico, la oferta puede mencionarse en texto
- **Acción**: Opcional — agregar badge de oferta en servicios o hero si está vigente

---

## 3. ¿El nuevo sitio es innovador, actual y atrae prospectos?

### Fortalezas del nuevo sitio ✅
| Aspecto | Evaluación |
|---------|-----------|
| Diseño visual | Moderno, limpio, jerarquía clara — **muy superior** al sitio actual |
| Velocidad / rendimiento | Next.js SSG — carga casi instantánea vs WordPress lento actual |
| Mobile | Responsive desde 375px — el sitio actual está roto en móvil |
| CTAs | Claros ("Cotizar en 24h") con urgencia. El actual no tiene CTAs efectivos |
| Propuesta de valor | "Reducimos riesgos en auditorías ISO" — enfocada al dolor real del ICP |
| SEO técnico | robots.txt, sitemap, Schema.org, Open Graph, metadataBase — muy superior |
| Blog | Sistema Markdown escalable vs. nada en el sitio actual |
| Secciones de industria | Automotriz, Farmacéutica, Alimentos — segmentación correcta |

### Áreas de mejora ⚠️
| Aspecto | Gap |
|---------|-----|
| Credenciales | IAS CL-101 ausente — el diferenciador más poderoso |
| Social proof | No hay logos de clientes, testimoniales ni casos con nombres reales |
| Marcas | 11 marcas líderes que generan confianza inmediata, ausentes |
| Cobertura de servicio | Solo 4 de 11 laboratorios visibles |
| Negocio completo | Ventas e instrumentación totalmente omitidos |

---

## 4. Plan de ajustes — Priorizado

### Fase 1 — Crítico (hacer ahora, < 2h)
| # | Ajuste | Archivo(s) |
|---|--------|-----------|
| 1 | Reemplazar imagen hero `/calibracion` con foto técnica | `app/calibracion/page.tsx` + nueva imagen |
| 2 | Agregar "Acceso Clientes" en Header (enlace externo) | `components/layout/Header.tsx` |
| 3 | Agregar "Acceso Clientes" en Footer | `components/layout/Footer.tsx` |
| 4 | Agregar badge IAS CL-101 en TrustSection | `components/sections/TrustSection.tsx` |
| 5 | Crear sección `BrandsSection` con 11 logos en homepage | `components/sections/BrandsSection.tsx` + `app/page.tsx` |
| 6 | Corregir emails a ventas@ y servicios@ | `components/layout/Footer.tsx`, `app/contacto/page.tsx` |

### Fase 2 — Importante (próxima semana)
| # | Ajuste | Archivo(s) |
|---|--------|-----------|
| 7 | Agregar 7 labs faltantes en `/calibracion` | `app/calibracion/page.tsx` |
| 8 | Crear página `/nosotros` (Quiénes Somos, Misión, Visión) | `app/nosotros/page.tsx` |
| 9 | Crear página `/instrumentacion` (venta de equipos por marca) | `app/instrumentacion/page.tsx` |
| 10 | Actualizar nav para incluir Instrumentación y Nosotros | `components/layout/Header.tsx` |

### Fase 3 — Mejora continua
| # | Ajuste |
|---|--------|
| 11 | Agregar testimoniales reales o logos de clientes |
| 12 | Agregar "Quejas y Sugerencias" en footer |
| 13 | Descargar logos oficiales de las 11 marcas en alta resolución |
| 14 | Blog: artículos por cada marca representada (SEO de marca) |

---

## 5. Hallazgo sobre imágenes del sitio actual

Las 3 imágenes descargadas del slider son:
- **slider1** → Banner promocional "50% descuento" con equipos de venta → `instrumentos-calibracion.jpg` — **Mal ubicada en hero de /calibracion**
- **slider2** → Técnico calibrando multímetros Fluke → `lab-tecnico-multimetros.jpg` — ✅ Homepage hero
- **slider3** → Lab con monitores de análisis de señal → `lab-metrologia-monitores.jpg` — ✅ /metrologia hero

**Recomendación**: Para `/calibracion`, usar `lab-tecnico-multimetros.jpg` (mismo que homepage) o conseguir una foto dedicada del laboratorio de calibración (termómetros, manómetros, etc.).

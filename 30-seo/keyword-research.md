# INyMET — Keyword Research & SEO Strategy
**Versión:** 1.0 | Actualizado: Abril 2026

---

## CLUSTERS DE KEYWORDS

### Cluster 1: Calibración de Instrumentos (CORE)
| Keyword | Tipo | Volumen est. | Dificultad | Intención |
|---------|------|--------------|------------|-----------|
| calibración de instrumentos México | Primary | Alta | Media | Comercial |
| laboratorio de calibración ISO 17025 | Primary | Media | Media | Comercial |
| calibración de instrumentos industriales | Primary | Media | Media | Comercial |
| servicios de calibración | Secondary | Alta | Alta | Comercial |
| empresa de calibración México | Secondary | Media | Media | Comercial |
| calibración certificada | Secondary | Media | Baja | Comercial |

### Cluster 2: Por Variable de Medición
| Keyword | Tipo | Intención |
|---------|------|-----------|
| calibración de temperatura | Secondary | Comercial |
| calibración de presión industrial | Secondary | Comercial |
| calibración de multímetros | Secondary | Comercial |
| calibración de balanzas industriales | Secondary | Comercial |
| calibración de manómetros | Secondary | Comercial |
| calibración de termómetros industriales | Secondary | Comercial |

### Cluster 3: Long-tail (Alta conversión)
| Keyword | Intención | Página objetivo |
|---------|-----------|-----------------|
| cada cuánto calibrar equipos industriales | Informacional → Comercial | /blog |
| costos de no calibrar instrumentos | Informacional → Comercial | /blog |
| qué pasa si no calibro mis instrumentos | Informacional | /blog |
| cómo preparar auditoría ISO 17025 | Informacional | /blog |
| requisitos de calibración para auditoría ISO | Informacional → Comercial | /blog |
| errores en auditorías por mala calibración | Informacional → Comercial | /blog |
| fallas comunes en medición industrial | Informacional | /blog |
| cuánto cuesta calibrar un manómetro | Comercial | /contacto |
| calibración urgente México | Comercial | /contacto |

### Cluster 4: Por Industria
| Keyword | Industria | Página |
|---------|-----------|--------|
| calibración instrumentos industria automotriz | Automotriz | /industrias/automotriz |
| calibración IATF 16949 México | Automotriz | /industrias/automotriz |
| calibración laboratorio farmacéutico México | Farmacéutica | /industrias/farmaceutica |
| calibración GMP farmacéutica | Farmacéutica | /industrias/farmaceutica |
| calibración instrumentos planta alimentos | Alimentos | /industrias/alimentos |
| calibración HACCP México | Alimentos | /industrias/alimentos |
| calibración BRC instrumentos | Alimentos | /industrias/alimentos |

### Cluster 5: Normas y Estándares
| Keyword | Volumen | Intención |
|---------|---------|-----------|
| ISO 17025 calibración | Media | Informacional |
| IATF 16949 metrología | Baja | Informacional |
| metrología industrial México | Media | Comercial |
| acreditación CENAM México | Baja | Informacional |
| trazabilidad metrológica México | Baja | Informacional |

---

## MAPA DE CONTENIDO PARA BLOG (Primeras 20 piezas)

### Categoría A: Auditorías ISO (Alta prioridad)
1. "5 Errores en Auditorías ISO por Mala Calibración (y Cómo Evitarlos)"
2. "Guía Completa: Cómo Preparar una Auditoría ISO 17025"
3. "Lista de Verificación para Auditorías ISO: Calibración"
4. "Qué Documentos de Calibración Necesitas para tu Auditoría ISO"

### Categoría B: Frecuencia y Gestión
5. "¿Cada Cuánto Se Deben Calibrar los Equipos Industriales?"
6. "Cómo Crear un Plan Anual de Calibración Industrial"
7. "Intervalos de Calibración por Tipo de Instrumento"

### Categoría C: Costo y ROI
8. "Costos Ocultos de No Calibrar tus Instrumentos (Calculadora)"
9. "El Costo Real de una No Conformidad en Auditoría ISO"
10. "ROI de la Calibración Preventiva vs Correctiva"

### Categoría D: Por Industria
11. "Calibración en la Industria Automotriz: Guía para IATF 16949"
12. "Metrología Farmacéutica: Cumplimiento GMP y NOM-059"
13. "Calibración en Plantas de Alimentos: HACCP y BRC"

### Categoría E: Técnico-Educativo
14. "Las 7 Fallas más Comunes en Sistemas de Medición Industrial"
15. "Incertidumbre de Medición: Qué Es y Por Qué Importa"
16. "Diferencia entre Calibración, Verificación y Ajuste"
17. "Cómo Leer un Certificado de Calibración"

### Categoría F: SEO Local/Específico
18. "Laboratorio de Calibración en México: Cómo Elegir el Correcto"
19. "Calibración con Trazabilidad CENAM: Qué Significa y Por Qué Importa"
20. "Pregúntale al Experto: 20 Preguntas Frecuentes sobre Calibración"

---

## METADATA TEMPLATES

### Homepage
```
Title: Calibración Certificada ISO 17025 en México | INyMET
Description: Reducimos riesgos en auditorías ISO con calibración certificada. 
Respuesta en <24h. Automotriz, farmacéutica, alimentos. ¡Cotiza gratis!
```

### Página de Calibración
```
Title: Servicios de Calibración Industrial Certificada | INyMET
Description: Calibración de temperatura, presión y eléctrica con certificados 
ISO 17025. Trazabilidad CENAM. Cotización en 24 horas en México.
```

### Blog Posts (template)
```
Title: [Keyword principal] — Guía [Año] | INyMET
Description: [Problema del lector]. Descubre [solución] con [beneficio clave]. 
Guía práctica para [rol objetivo] en México.
```

---

## SCHEMA MARKUP REQUERIDO

### Organization (homepage)
```json
{
  "@type": "Organization",
  "name": "INyMET",
  "description": "Laboratorio de metrología y calibración ISO 17025",
  "serviceArea": "México",
  "hasOfferCatalog": {...}
}
```

### Service (páginas de servicio)
```json
{
  "@type": "Service",
  "name": "Calibración de [tipo]",
  "provider": {"@type": "Organization", "name": "INyMET"},
  "areaServed": "México"
}
```

### FAQPage (artículos blog)
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Pregunta frecuente?",
      "acceptedAnswer": {"@type": "Answer", "text": "Respuesta..."}
    }
  ]
}
```

### Article (blog)
```json
{
  "@type": "Article",
  "headline": "Título del artículo",
  "author": {"@type": "Organization", "name": "INyMET"},
  "datePublished": "YYYY-MM-DD",
  "publisher": {"@type": "Organization", "name": "INyMET"}
}
```

---

## CHECKLIST SEO TÉCNICO

### On-Page (por página)
- [ ] H1 único con keyword primaria
- [ ] H2-H4 con keywords secundarias
- [ ] Meta title < 60 caracteres con keyword
- [ ] Meta description 140-160 caracteres con CTA
- [ ] Alt text en todas las imágenes
- [ ] URL amigable con keyword (sin stop words)
- [ ] Schema markup relevante
- [ ] Internal linking a páginas relacionadas
- [ ] CTA en posición visible sin scroll

### Técnico (global)
- [ ] Core Web Vitals en verde (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- [ ] robots.txt configurado
- [ ] sitemap.xml generado y enviado a GSC
- [ ] Canonical URLs configurados
- [ ] Implementar hreflang (si aplica)
- [ ] HTTPS en todo el sitio
- [ ] Sin links rotos
- [ ] Estructura de breadcrumbs

---

## ESTRATEGIA DE LINK BUILDING

### Fuentes prioritarias
1. Directorios de laboratorios acreditados (CENAM, EMA)
2. Asociaciones industriales (AMIA, CANIFARMA, etc.)
3. Guest posts en revistas industriales mexicanas
4. Menciones en foros de calidad (isoTools, etc.)
5. Casos de éxito con clientes que permitan referencia

### Anchor text strategy
- Branded: "INyMET", "INyMET calibración"
- Exact match: "calibración de instrumentos México"  
- Partial match: "servicios de calibración certificada"
- Generic: "más información", "ver aquí"

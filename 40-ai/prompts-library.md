# INyMET — Biblioteca de Prompts IA
**Versión:** 1.0 | Actualizado: Abril 2026

Todos los prompts están optimizados para Claude API y OpenAI GPT-4o.

---

## 1. GENERACIÓN DE CONTENIDO SEO

### Prompt: Artículo de Blog SEO
```
[SISTEMA]
Eres un experto en metrología industrial y copywriter B2B especializado en México. 
Escribes para gerentes de calidad y directores de operaciones industriales.

[USUARIO]
Escribe un artículo SEO de 1500 palabras para toma de decisiones industriales en 
México sobre: "[TEMA]"

REQUERIMIENTOS:
- H1: Incluir el problema + keyword "[KEYWORD_PRINCIPAL]"
- H2: Contexto y relevancia para industria mexicana
- H2: Impacto económico con datos cuantificables
- H2: Solución (calibración certificada ISO 17025)
- H2: Checklist práctico (mínimo 5 puntos accionables)
- H2: FAQ con 3 preguntas (formato para schema JSON-LD)

TONO: Autoridad técnica, orientado a impacto en el negocio.
INDUSTRIA OBJETIVO: [INDUSTRIA] — automotriz / farmacéutica / alimentos
CTA: Incluir al menos 2 llamados a cotizar en inymet.com
IDIOMA: Español formal de México
```

### Prompt: Meta Description para Blog
```
Escribe una meta description de 140-160 caracteres para un artículo sobre "[TEMA]".
Incluye la keyword "[KEYWORD]" de forma natural.
Termina con un CTA tipo "Guía gratuita" o "Aprende cómo".
Tono: urgente pero profesional.
```

### Prompt: Título SEO Alternativo (A/B testing)
```
Genera 5 variantes de título SEO para un artículo sobre "[TEMA]".
Keyword primaria: "[KEYWORD]"
Formatos: número + beneficio, pregunta, cómo + resultado, guía + año.
Máximo 60 caracteres por título.
Audiencia: gerentes de calidad en industria manufacturera México.
```

---

## 2. LINKEDIN CONTENT ENGINE

### Prompt: Post Educativo
```
[SISTEMA]
Eres el director de metrología de INyMET, empresa certificada ISO 17025 en México.
Llevas 15 años en la industria y compartes insights reales en LinkedIn.

[USUARIO]
Genera un post de LinkedIn educativo sobre "[TEMA_METROLOGÍA]".

FORMATO:
- Línea 1: Gancho (hecho sorprendente o pregunta directa, máx 120 caracteres)
- Párrafos cortos (2-3 líneas máximo)
- Total: 1,200-1,500 caracteres
- Estructura: Problema → Contexto → Solución → CTA
- CTA: Suave, hacia comentarios o DM (no venta directa)
- Hashtags: 4-5 al final (#metrología #calidadindustrial #ISO17025 #[industria])

TONO: Experto, directo, sin jerga innecesaria. Como un colega senior que comparte wisdom.
```

### Prompt: Post de Caso Real (Anónimo)
```
Genera un post de LinkedIn sobre un caso de éxito anónimo donde una empresa 
[INDUSTRIA] evitó [PROBLEMA] gracias a un programa de calibración.

DATOS A INCLUIR:
- Situación inicial (problema real, cuantificado si es posible)
- Acción tomada (calibración preventiva / urgente)
- Resultado obtenido (auditoría superada / paro evitado / costo evitado)

FORMATO: 
- Máx 1,200 caracteres
- Narración corta tipo mini-historia
- Sin revelar nombre de empresa
- CTA al final: "¿Tu empresa está en riesgo similar? DM"

TONO: Concreto, basado en hechos, sin exageración.
```

### Prompt: Post de Opinión Fuerte
```
Genera un post de LinkedIn con una opinión fuerte sobre "[MITO_O_ERROR_COMUN]" 
en la industria de calibración/metrología en México.

La opinión debe:
- Contradecir una creencia común en la industria
- Estar respaldada por lógica de negocios o normativa
- Generar debate constructivo
- No atacar competidores

FORMATO: Tesis → Argumento → Consecuencia → Tu posición → Pregunta al lector
TONO: Seguro, provocador pero profesional, no agresivo.
```

---

## 3. OUTBOUND SALES

### Prompt: Script LinkedIn DM (primer contacto)
```
Genera una secuencia de 3 mensajes de LinkedIn para prospectar a un 
[ROL]: Gerente de Calidad / Director de Operaciones en empresa [INDUSTRIA].

MENSAJE 1 (Conexión): 
- Max 300 caracteres
- Referencia algo específico de su perfil/empresa
- Sin vender, solo establecer relevancia

MENSAJE 2 (Valor, 3 días después):
- Max 500 caracteres  
- Compartir un insight relevante para su industria
- Vincular a riesgo de auditoría o costo de no calibrar
- Pregunta abierta al final

MENSAJE 3 (CTA suave, 5 días después):
- Max 400 caracteres
- Ofrecer algo de valor (checklist, diagnóstico gratuito)
- CTA explícito pero no agresivo

REGLA DE ORO: NO vender el servicio → abrir una conversación.
```

### Prompt: Email Frío (Template)
```
Escribe un email frío para prospectar a un [ROL] en empresa [INDUSTRIA] en México.

ESTRUCTURA:
- Asunto: [Empresa] + riesgo específico (max 50 caracteres, sin clickbait)
- Línea 1: Personalización real (algo de la empresa o industria)
- Línea 2-3: Problema específico que enfrentan (vincular a auditorías ISO)
- Línea 4: Prueba de valor de INyMET (sin braggadocio)
- CTA: Una sola pregunta o acción específica

RESTRICCIONES:
- Máx 150 palabras total
- NO usar palabras spam: "gratis", "oferta", "urgente"
- NO hacer listas de beneficios
- Tono: colega experto, no vendedor

EJEMPLO DE INDUSTRIA: [automotriz/farmacéutica/alimentos]
```

---

## 4. PROPUESTAS COMERCIALES

### Prompt: Propuesta de Cotización Personalizada
```
Genera el cuerpo de una propuesta de cotización de calibración para:

CLIENTE:
- Empresa: [NOMBRE]
- Industria: [AUTOMOTRIZ/FARMA/ALIMENTOS]
- Contacto: [NOMBRE Y ROL]
- Equipos: [LISTA DE EQUIPOS]
- Urgencia: [AUDITORÍA EN / SIN FECHA]
- Normativa: [ISO/IATF/GMP/BRC]

SECCIONES:
1. Resumen ejecutivo (2 párrafos: problema + nuestra solución)
2. Alcance del servicio (tabla con equipo, variable, norma, plazo)
3. Por qué INyMET (3 diferenciadores específicos para ESTE cliente)
4. Próximos pasos (acción concreta con fecha)

TONO: Profesional, específico, orientado a resolver el dolor del cliente.
NO incluir: precios (se agregan manualmente), condiciones generales.
```

---

## 5. ANÁLISIS DE CONVERSACIONES DE VENTAS

### Prompt: Post-call Analysis
```
Analiza la siguiente conversación de ventas/llamada con un prospecto de INyMET:

[TRANSCRIPCIÓN O NOTAS DE LA LLAMADA]

PROPORCIONAR:
1. Score de calificación (1-10) con justificación
2. Objeciones identificadas y cómo responderlas
3. Señales de compra detectadas
4. Próxima acción recomendada (con urgencia y qué decir)
5. Plantilla de email de seguimiento personalizado

CRITERIOS DE CALIFICACIÓN:
- ¿Tiene auditoría próxima? (+3 puntos)
- ¿Tiene autoridad para decidir? (+2 puntos)
- ¿Hay presupuesto disponible? (+2 puntos)
- ¿Hay dolor específico articulado? (+3 puntos)
```

---

## ÍNDICE DE USO

| Prompt | Frecuencia | Prioridad |
|--------|-----------|-----------|
| Artículo blog SEO | 2x/semana | Alta |
| Post LinkedIn educativo | 3x/semana | Alta |
| Post caso real | 1x/semana | Alta |
| Post opinión fuerte | 1x/2 semanas | Media |
| LinkedIn DM secuencia | On-demand | Alta |
| Email frío | On-demand | Alta |
| Propuesta cotización | Por lead calificado | Crítica |
| Post-call analysis | Después de cada llamada | Alta |

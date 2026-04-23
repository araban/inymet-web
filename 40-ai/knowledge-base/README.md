# Knowledge Base — INyMET Chatbot

Este directorio contiene los archivos que alimentan la precisión del chatbot "Ana".
Cada archivo es una fuente de conocimiento específica que el sistema consulta al responder.

## ¿Cómo funciona?

El chatbot usa estos archivos como contexto en su **prompt de sistema**.
Actualizar estos archivos = mejorar automáticamente las respuestas.

## Archivos y su propósito

| Archivo | Qué contiene | Quién lo actualiza |
|---------|-------------|-------------------|
| `empresa.md` | Historia, acreditaciones, contacto | Dirección / Marketing |
| `servicios.md` | Lista completa de laboratorios y alcances | Dirección Técnica |
| `proceso.md` | Paso a paso del proceso de calibración | Operaciones |
| `industrias.md` | Info por industria: normas, beneficios | Ventas |
| `precios.md` | Rangos orientativos y política de cotización | Ventas / Dirección |
| `faq.md` | Preguntas y respuestas frecuentes reales | Atención a clientes |

## Cómo mejorar la precisión del chatbot

### 1. Regla principal
**Más detalle = mejores respuestas.** Si el chatbot da respuestas genéricas, agrega más detalle al archivo correspondiente.

### 2. Actualizar FAQ con preguntas reales
Cada vez que un cliente pregunte algo que el chatbot no respondió bien:
1. Copia la pregunta exacta
2. Escribe la respuesta correcta
3. Agrégala a `faq.md`

### 3. Agregar ejemplos de conversación
En `faq.md`, en la sección "Ejemplos de conversación", agrega intercambios reales que hayan resultado en ventas.

### 4. Especificidad técnica
En `servicios.md`, agrega los rangos de medición exactos de cada laboratorio, incertidumbre de medición, y equipos patrón disponibles. Esto permite al chatbot responder con autoridad técnica.

### 5. Para conectar con base de datos (equipos en calibración)
Ver `00-docs/CHATBOT_SPEC.md` — sección "Integración con Base de Datos".

## Reglas para escribir en estos archivos

- Escribe en español mexicano
- Usa hechos verificables, no afirmaciones de marketing
- Incluye números reales cuando los tengas (tiempos, cantidades, precios)
- Evita ambigüedades: "entregamos rápido" → "entregamos certificados en menos de 9 horas"
- Si algo no aplica o no está disponible, escríbelo: el chatbot necesita saber qué NO ofrecer

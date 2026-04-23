import OpenAI from "openai";
import Anthropic from "@anthropic-ai/sdk";
import { logger } from "../lib/logger";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// System prompt for the lead qualification chatbot
const CHATBOT_SYSTEM_PROMPT = `Eres el asistente de ventas de INyMET, empresa líder en calibración certificada ISO 17025 en México.

OBJETIVO: Calificar leads y guiarlos hacia solicitar una cotización.

PERSONALIDAD:
- Profesional y experto en metrología industrial
- Conciso y orientado a resultados
- Hablas en español formal pero amigable
- Nunca eres genérico — siempre vinculas respuestas al riesgo real del cliente

FLUJO CONVERSACIONAL:
1. Identifica la industria del prospecto (automotriz, farmacéutica, alimentos, otra)
2. Detecta su necesidad específica (tipo de equipo, norma aplicable)
3. Evalúa urgencia (¿hay auditoría próxima?)
4. Ofrece cotización personalizada
5. Captura datos de contacto

REGLAS:
- Máximo 3 preguntas por turno
- Si mencionan auditoría próxima → urgencia máxima, ofrecer contacto inmediato
- Si preguntan precio → explicar que depende del tipo/cantidad de equipos, dirigir a cotización
- Siempre terminar con un CTA claro
- No inventar precios ni plazos específicos

SERVICIOS: Calibración de temperatura, presión, eléctrica (multímetros), dimensional.
DIFERENCIADORES: Respuesta <24h, certificados con trazabilidad CENAM, atención en planta.`;

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function chatbotResponse(
  messages: ChatMessage[],
  userMessage: string
): Promise<string> {
  try {
    const response = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 512,
      system: CHATBOT_SYSTEM_PROMPT,
      messages: [
        ...messages.map((m) => ({ role: m.role, content: m.content })),
        { role: "user", content: userMessage },
      ],
    });

    const content = response.content[0];
    if (content.type !== "text") throw new Error("Unexpected response type");
    return content.text;
  } catch (error) {
    logger.error("Chatbot AI error:", error);
    return "Hubo un problema al procesar tu mensaje. Por favor contáctanos directamente al +52 (XX) XXXX-XXXX o escríbenos a contacto@inymet.com.";
  }
}

export async function generateBlogContent(topic: string): Promise<string> {
  const prompt = `Escribe un artículo SEO de 1500 palabras para gerentes de calidad en México sobre: "${topic}".

ESTRUCTURA REQUERIDA:
- H1: problema + keyword principal
- H2: Contexto y relevancia para industria
- H2: Impacto económico de no resolver el problema
- H2: Solución (cómo la calibración certificada resuelve esto)
- H2: Checklist práctico (mínimo 5 puntos accionables)
- FAQ (3 preguntas frecuentes con schema JSON-LD)

TONO: Autoridad técnica, orientado a negocio, con datos económicos concretos.
KEYWORDS: Incluir naturalmente "calibración", "ISO 17025", "auditoría ISO", y términos de la industria.
IDIOMA: Español de México, formal pero accesible.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Eres un experto en metrología industrial y marketing de contenidos B2B en México.",
        },
        { role: "user", content: prompt },
      ],
      max_tokens: 3000,
      temperature: 0.7,
    });

    return response.choices[0].message.content || "";
  } catch (error) {
    logger.error("OpenAI content generation error:", error);
    throw error;
  }
}

export async function generateLinkedInPost(
  topic: string,
  type: "educational" | "insight" | "case_study" | "opinion"
): Promise<string> {
  const typeInstructions = {
    educational: "Post educativo explicando un concepto de metrología con impacto económico",
    insight: "Post de insight con tendencia del sector y perspectiva propia",
    case_study: "Post de caso de éxito (anónimo) con resultado medible",
    opinion: "Post de opinión fuerte y controlada sobre un error común de la industria",
  };

  const prompt = `Genera un post de LinkedIn para INyMET (empresa de calibración certificada ISO 17025 en México).

TIPO: ${typeInstructions[type]}
TEMA: ${topic}

FORMATO:
- Gancho en la primera línea (para parar el scroll)
- Máximo 1500 caracteres
- Párrafos cortos (1-2 líneas)
- CTA al final
- 3-5 hashtags relevantes (#metrología #calidadindustrial #ISO17025)

TONO: Autoridad ejecutiva, directo, sin jerga innecesaria.
AUDIENCIA: Gerentes de calidad, directores de operaciones, responsables de metrología.`;

  try {
    const response = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 600,
      messages: [{ role: "user", content: prompt }],
    });

    const content = response.content[0];
    if (content.type !== "text") throw new Error("Unexpected response type");
    return content.text;
  } catch (error) {
    logger.error("LinkedIn post generation error:", error);
    throw error;
  }
}

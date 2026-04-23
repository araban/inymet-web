import { Router } from "express";
import { z } from "zod";
import rateLimit from "express-rate-limit";
import { validate } from "../middleware/validation";
import { chatbotResponse, type ChatMessage } from "../services/openai";
import { logger } from "../lib/logger";

export const chatbotRouter = Router();

// Stricter rate limit for chatbot
const chatRateLimit = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 20,
  message: { error: "Demasiados mensajes. Por favor espera un momento." },
});

const messageSchema = z.object({
  message: z.string().min(1).max(500),
  history: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().max(1000),
      })
    )
    .max(20)
    .default([]),
  sessionId: z.string().max(100).optional(),
});

// POST /api/chatbot — Handle chatbot conversation
chatbotRouter.post("/", chatRateLimit, validate(messageSchema), async (req, res) => {
  try {
    const { message, history } = req.body as {
      message: string;
      history: ChatMessage[];
    };

    const reply = await chatbotResponse(history, message);

    logger.debug(`Chatbot response generated for session`);

    return res.json({
      reply,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    logger.error("Chatbot error:", error);
    return res.status(500).json({
      error: "Error al procesar el mensaje.",
      reply:
        "Lo siento, tuve un problema. ¿Puedes escribirnos directamente a contacto@inymet.com?",
    });
  }
});

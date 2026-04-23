import { Router } from "express";
import { z } from "zod";
import rateLimit from "express-rate-limit";
import { validate } from "../middleware/validation";
import { generateBlogContent, generateLinkedInPost } from "../services/openai";
import { logger } from "../lib/logger";

export const contentRouter = Router();

// Strict rate limit — content generation is expensive
const contentRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10,
  message: { error: "Límite de generación de contenido alcanzado. Intenta en 1 hora." },
});

const blogSchema = z.object({
  topic: z.string().min(10).max(300),
  apiKey: z.string(), // Internal API key for content generation
});

const linkedinSchema = z.object({
  topic: z.string().min(5).max(200),
  type: z.enum(["educational", "insight", "case_study", "opinion"]),
  apiKey: z.string(),
});

// Simple API key auth for internal content generation tool
function validateApiKey(req: { body: { apiKey?: string } }): boolean {
  return req.body.apiKey === process.env.CONTENT_API_KEY;
}

// POST /api/content/blog — Generate SEO blog article
contentRouter.post("/blog", contentRateLimit, validate(blogSchema), async (req, res) => {
  if (!validateApiKey(req)) {
    return res.status(401).json({ error: "No autorizado" });
  }

  try {
    const content = await generateBlogContent(req.body.topic);
    logger.info(`Blog content generated for topic: ${req.body.topic}`);
    return res.json({ content, topic: req.body.topic });
  } catch (error) {
    logger.error("Blog generation error:", error);
    return res.status(500).json({ error: "Error al generar contenido" });
  }
});

// POST /api/content/linkedin — Generate LinkedIn post
contentRouter.post("/linkedin", contentRateLimit, validate(linkedinSchema), async (req, res) => {
  if (!validateApiKey(req)) {
    return res.status(401).json({ error: "No autorizado" });
  }

  try {
    const post = await generateLinkedInPost(req.body.topic, req.body.type);
    logger.info(`LinkedIn post generated: ${req.body.type}`);
    return res.json({ post, type: req.body.type });
  } catch (error) {
    logger.error("LinkedIn generation error:", error);
    return res.status(500).json({ error: "Error al generar post" });
  }
});

import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { leadsRouter } from "./routes/leads";
import { chatbotRouter } from "./routes/chatbot";
import { contentRouter } from "./routes/content";
import { logger } from "./lib/logger";

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());
app.use(
  cors({
    origin: (process.env.ALLOWED_ORIGINS || "http://localhost:3000")
      .split(",")
      .map((o) => o.trim()),
    credentials: true,
  })
);

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100,
  message: { error: "Demasiadas solicitudes. Por favor intenta más tarde." },
});
app.use(limiter);

// Body parsing
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: false }));

// Health check
app.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Routes
app.use("/api/leads", leadsRouter);
app.use("/api/chatbot", chatbotRouter);
app.use("/api/content", contentRouter);

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Error handler
app.use(
  (
    err: Error,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    logger.error("Unhandled error:", err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
);

app.listen(PORT, () => {
  logger.info(`INyMET API running on port ${PORT}`);
});

export default app;

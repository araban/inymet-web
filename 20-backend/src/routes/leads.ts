import { Router } from "express";
import { z } from "zod";
import { validate } from "../middleware/validation";
import { createHubSpotContact, createHubSpotDeal } from "../services/hubspot";
import { sendLeadNotification, sendLeadConfirmation } from "../services/email";
import { logger } from "../lib/logger";

export const leadsRouter = Router();

const leadSchema = z.object({
  name: z.string().min(2).max(100),
  company: z.string().min(2).max(200),
  email: z.string().email(),
  phone: z.string().min(10).max(20),
  industry: z.enum(["automotriz", "farmaceutica", "alimentos", "otro"]),
  equipment: z.string().min(5).max(1000),
  urgency: z.enum(["inmediato", "1-2_semanas", "1_mes", "sin_urgencia"]),
  message: z.string().max(2000).optional(),
});

// POST /api/leads — Create new lead from website form
leadsRouter.post("/", validate(leadSchema), async (req, res) => {
  try {
    const leadData = {
      ...req.body,
      source: "website_form",
    };

    // Run HubSpot + email notifications in parallel
    const [contactId] = await Promise.allSettled([
      createHubSpotContact(leadData),
      sendLeadNotification(leadData),
      sendLeadConfirmation(leadData.email, leadData.name),
    ]);

    // Create deal if contact was created successfully
    if (contactId.status === "fulfilled" && contactId.value) {
      try {
        await createHubSpotDeal(contactId.value, leadData);
      } catch (dealError) {
        // Non-critical — log but don't fail the request
        logger.warn("Could not create HubSpot deal:", dealError);
      }
    }

    logger.info(`New lead processed: ${leadData.email} (${leadData.industry})`);

    return res.status(201).json({
      success: true,
      message: "Solicitud recibida. Te contactaremos en menos de 24 horas.",
    });
  } catch (error) {
    logger.error("Lead creation error:", error);
    return res.status(500).json({
      error: "Error al procesar tu solicitud. Por favor intenta de nuevo.",
    });
  }
});

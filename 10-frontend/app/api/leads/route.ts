import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createHubSpotContact, createHubSpotDeal } from "@/lib/hubspot";
import { sendLeadNotification, sendLeadConfirmation } from "@/lib/email";

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

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Cuerpo de solicitud inválido." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Datos inválidos.", details: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const lead = { ...parsed.data, source: "website_form" };

  try {
    const [contactResult] = await Promise.allSettled([
      createHubSpotContact(lead),
      sendLeadNotification(lead),
      sendLeadConfirmation(lead.email, lead.name),
    ]);

    if (contactResult.status === "fulfilled" && contactResult.value) {
      try {
        await createHubSpotDeal(contactResult.value, lead);
      } catch {
        // Non-critical: deal creation failure does not block the response
      }
    }

    console.info(`[leads] New lead: ${lead.email} (${lead.industry})`);

    return NextResponse.json(
      { success: true, message: "Solicitud recibida. Te contactaremos en menos de 24 horas." },
      { status: 201 }
    );
  } catch (err) {
    console.error("[leads] Error:", err);
    return NextResponse.json(
      { error: "Error al procesar tu solicitud. Por favor intenta de nuevo." },
      { status: 500 }
    );
  }
}

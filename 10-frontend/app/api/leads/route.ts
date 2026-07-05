import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createHubSpotContact, createHubSpotDeal } from "@/lib/hubspot";
import { sendLeadNotification, sendLeadConfirmation } from "@/lib/email";
import { saveLeadBackup, markLeadDelivery } from "@/lib/leadStore";

const leadSchema = z.object({
  quoteType: z.enum(["calibracion", "instrumentos"]).default("calibracion"),
  name: z.string().min(2).max(100),
  company: z.string().min(2).max(200),
  email: z.string().email(),
  phone: z.string().min(10).max(20),
  industry: z.enum(["automotriz", "farmaceutica", "alimentos", "otro"]),
  brand: z.string().max(100).optional(),
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

  const lead = {
    ...parsed.data,
    source:
      parsed.data.quoteType === "instrumentos"
        ? "website_form_instrumentos"
        : "website_form_calibracion",
  };

  // Respaldo PRIMERO: aunque HubSpot y el email fallen, el dato es recuperable.
  const backupId = await saveLeadBackup(lead);

  const [contactResult, notifyResult] = await Promise.allSettled([
    createHubSpotContact(lead),
    sendLeadNotification(lead),
    sendLeadConfirmation(lead.email, lead.name),
  ]);

  const hubspotOk = contactResult.status === "fulfilled" && Boolean(contactResult.value);
  const emailOk = notifyResult.status === "fulfilled";

  if (hubspotOk) {
    try {
      await createHubSpotDeal(contactResult.value as string, lead);
    } catch {
      // Non-critical: deal creation failure does not block the response
    }
  } else {
    console.error("[leads] HubSpot falló:", contactResult.status === "rejected" ? contactResult.reason : "sin id");
  }
  if (!emailOk) {
    console.error("[leads] Notificación email falló:", (notifyResult as PromiseRejectedResult).reason);
  }

  await markLeadDelivery(backupId, hubspotOk, emailOk);

  console.info(`[leads] New lead: ${lead.email} (${lead.industry}) hubspot=${hubspotOk} email=${emailOk} backup=${backupId}`);

  // Éxito si el lead llegó al CRM, al correo de ventas O quedó respaldado en BD:
  // en cualquiera de esos casos INyMET puede contactar a la persona.
  if (hubspotOk || emailOk || backupId !== null) {
    return NextResponse.json(
      { success: true, message: "Solicitud recibida. Te contactaremos en menos de 24 horas." },
      { status: 201 }
    );
  }

  return NextResponse.json(
    { error: "Error al procesar tu solicitud. Por favor intenta de nuevo o llámanos al (55) 5754-3087." },
    { status: 500 }
  );
}

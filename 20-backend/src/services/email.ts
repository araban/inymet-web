import nodemailer from "nodemailer";
import { logger } from "../lib/logger";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface LeadNotificationData {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  equipment: string;
  urgency: string;
  message?: string;
}

export async function sendLeadNotification(lead: LeadNotificationData): Promise<void> {
  const urgencyLabel: Record<string, string> = {
    inmediato: "URGENTE - Auditoría próxima",
    "1-2_semanas": "Alta - 1-2 semanas",
    "1_mes": "Media - próximo mes",
    sin_urgencia: "Baja - planeación anual",
  };

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #1e3a8a; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
        <h2 style="margin: 0;">🆕 Nuevo Lead — INyMET</h2>
        <p style="margin: 4px 0 0; opacity: 0.8;">
          Urgencia: <strong>${urgencyLabel[lead.urgency] || lead.urgency}</strong>
        </p>
      </div>
      <div style="padding: 24px; background: #f9fafb; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 140px;">Nombre:</td>
            <td>${lead.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Empresa:</td>
            <td>${lead.company}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Industria:</td>
            <td>${lead.industry}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td><a href="mailto:${lead.email}">${lead.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Teléfono:</td>
            <td><a href="tel:${lead.phone}">${lead.phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Equipos:</td>
            <td>${lead.equipment}</td>
          </tr>
          ${lead.message ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Notas:</td>
            <td>${lead.message}</td>
          </tr>` : ""}
        </table>

        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <a href="mailto:${lead.email}?subject=RE: Cotización calibración - ${lead.company}"
             style="background: #1e3a8a; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
            Responder a ${lead.name}
          </a>
        </div>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"INyMET Notificaciones" <${process.env.SMTP_USER}>`,
    to: process.env.NOTIFY_EMAIL || process.env.SMTP_USER,
    subject: `🆕 [${lead.industry.toUpperCase()}] Nuevo lead: ${lead.company} — ${urgencyLabel[lead.urgency] || lead.urgency}`,
    html,
  });

  logger.info(`Lead notification sent for: ${lead.email}`);
}

export async function sendLeadConfirmation(
  to: string,
  name: string
): Promise<void> {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #1e3a8a; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
        <h2 style="margin: 0;">INyMET — Calibración Certificada</h2>
      </div>
      <div style="padding: 24px;">
        <p>Hola ${name},</p>
        <p>Hemos recibido tu solicitud de cotización correctamente.</p>
        <p>Un especialista en metrología se pondrá en contacto contigo en <strong>menos de 24 horas hábiles</strong> con una propuesta personalizada.</p>
        <p>Si tienes una auditoría urgente, no dudes en llamarnos directamente.</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
        <p style="font-size: 12px; color: #6b7280;">
          INyMET | Metrología & Calibración Certificada ISO 17025<br>
          contacto@inymet.com | +52 (XX) XXXX-XXXX
        </p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"INyMET" <${process.env.SMTP_USER}>`,
    to,
    subject: "Tu solicitud de cotización fue recibida — INyMET",
    html,
  });
}

// Central source of truth for all contact and social links.
//
// ⚠️  NEXT_PUBLIC_* vars se incrustan en el bundle en tiempo de BUILD.
//     Cambiar su valor en Vercel → Settings → Environment Variables
//     requiere un redeploy (Vercel lo hace en ~30 segundos con "Redeploy").
//     Para cambios verdaderamente sin redeploy, mover estos valores a un
//     campo de Sanity CMS o a un endpoint /api/config.
//
// Para Vercel: Settings → Environment Variables → añadir cada clave.

export const CONTACT = {
  /** Display format shown to users: "(55) 5754-3087" */
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "(55) 5754-3087",
  /** tel: href format (no spaces): "+525557543087" */
  phoneTel: process.env.NEXT_PUBLIC_PHONE_TEL ?? "+525557543087",
  /** Sales inbox */
  emailSales: process.env.NEXT_PUBLIC_EMAIL_SALES ?? "ventas@inymet.com.mx",
  /** Service/status inbox */
  emailService: process.env.NEXT_PUBLIC_EMAIL_SERVICE ?? "servicios@inymet.com.mx",
  /** WhatsApp number without + (wa.me format): "525557543087" */
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "525557543087",
  /** LinkedIn company page URL */
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN ?? "https://linkedin.com/company/inymet",
  /** YouTube channel URL */
  youtube: process.env.NEXT_PUBLIC_YOUTUBE ?? "https://youtube.com/@inymet",
} as const;

/** Build a wa.me deep-link with an optional pre-filled message. */
export function waLink(message?: string): string {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

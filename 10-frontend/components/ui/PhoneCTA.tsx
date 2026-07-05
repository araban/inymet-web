import Link from "next/link";
import { Phone } from "lucide-react";
import { CONTACT } from "@/lib/contact";

interface PhoneCTAProps {
  /** Estilos del botón SIN clase de display ni visibilidad (las pone el componente) */
  className?: string;
  /** "inline-flex" para botones normales, "flex" para botones full-width */
  display?: "inline-flex" | "flex";
  /** Texto en móvil/tablet, donde el clic marca por teléfono. Default: el número */
  mobileLabel?: string;
  /** Texto en desktop, donde el clic lleva al formulario */
  desktopLabel?: string;
  /** Destino en desktop. Default: /contacto */
  desktopHref?: string;
  /** Clases de tamaño del icono de teléfono; null = sin icono */
  iconClass?: string | null;
}

/**
 * CTA telefónico adaptativo: en móvil/tablet (< lg) es un enlace tel: que
 * marca directamente; en desktop (lg+), donde no se puede llamar, lleva al
 * formulario de cotización con un texto acorde a esa expectativa.
 */
export default function PhoneCTA({
  className = "",
  display = "inline-flex",
  mobileLabel,
  desktopLabel = "Solicitar una llamada",
  desktopHref = "/contacto",
  iconClass = "w-4 h-4",
}: PhoneCTAProps) {
  const mobileDisplay = display === "flex" ? "flex lg:hidden" : "inline-flex lg:hidden";
  const desktopDisplay = display === "flex" ? "hidden lg:flex" : "hidden lg:inline-flex";
  const icon = iconClass ? <Phone className={iconClass} /> : null;

  return (
    <>
      <a href={`tel:${CONTACT.phoneTel}`} className={`${mobileDisplay} ${className}`}>
        {icon}
        {mobileLabel ?? CONTACT.phoneDisplay}
      </a>
      <Link
        href={desktopHref}
        className={`${desktopDisplay} ${className}`}
        title={`O llámenos al ${CONTACT.phoneDisplay}`}
      >
        {icon}
        {desktopLabel}
      </Link>
    </>
  );
}

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { CONTACT, waLink } from "@/lib/contact";

// Social icons as inline SVG — lucide-react no incluye LinkedIn/YouTube/WhatsApp
const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const YouTubeIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);
const WhatsAppIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const industries = [
  { name: "Automotriz", href: "/industrias/automotriz" },
  { name: "Farmacéutica", href: "/industrias/farmaceutica" },
  { name: "Alimentos", href: "/industrias/alimentos" },
];

const services = [
  { name: "Calibración de temperatura", href: "/calibracion#temperatura" },
  { name: "Calibración de presión", href: "/calibracion#presion" },
  { name: "Calibración eléctrica", href: "/calibracion#electricos" },
  { name: "Metrología dimensional", href: "/calibracion#dimensional" },
  { name: "Humedad y punto de rocío", href: "/calibracion#humedad" },
  { name: "Par torsional", href: "/calibracion#par-torsional" },
  { name: "Frecuencia y tiempo", href: "/calibracion#frecuencia-tiempo" },
  { name: "Caudal de líquidos y gases", href: "/calibracion#caudal-liquidos" },
];

const resources = [
  { name: "Blog", href: "/blog" },
  { name: "Casos de éxito", href: "/casos-de-exito" },
  { name: "Recursos y guías", href: "/recursos" },
  { name: "Solicitar cotización", href: "/contacto" },
  { name: "Quejas y Sugerencias", href: "/contacto?asunto=queja" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-white">
              INyMET
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Laboratorio de metrología y calibración certificado ISO 17025.
              Reducimos riesgos en auditorías ISO con tiempos de respuesta líderes en México.
            </p>
            <div className="space-y-2 text-sm">
              <a href={`tel:${CONTACT.phoneTel}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-brand-400" />
                {CONTACT.phoneDisplay}
              </a>
              <a href={`mailto:${CONTACT.emailSales}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-brand-400" />
                {CONTACT.emailSales}
              </a>
              <a href={`mailto:${CONTACT.emailService}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-brand-400" />
                {CONTACT.emailService}
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0" />
                Salvatierra 32, San Bartolo Atepehuacan, CDMX 07730
              </p>
              <p className="text-xs text-gray-500 pt-1">
                Lun–Vie · 8:00–18:00 hrs (CDMX)
              </p>
            </div>

            {/* Redes sociales */}
            <div className="pt-5 border-t border-gray-800">
              <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-3">
                Síguenos
              </p>
              <div className="flex gap-2">
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Perfil LinkedIn de INyMET"
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-[#0A66C2] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href={CONTACT.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Canal YouTube de INyMET"
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-[#FF0000] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                >
                  <YouTubeIcon />
                </a>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Business INyMET"
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-[#25D366] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                >
                  <WhatsAppIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.name}>
                  <Link href={s.href} className="text-sm hover:text-white transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industrias */}
          <div>
            <h3 className="text-white font-semibold mb-4">Industrias</h3>
            <ul className="space-y-2">
              {industries.map((i) => (
                <li key={i.name}>
                  <Link href={i.href} className="text-sm hover:text-white transition-colors">
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              {resources.map((r) => (
                <li key={r.name}>
                  <Link href={r.href} className="text-sm hover:text-white transition-colors">
                    {r.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href="/contacto" className="btn-primary text-sm py-2">
                Cotizar en 24h
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} INyMET. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <Link href="/aviso-de-privacidad" className="hover:text-gray-300">Aviso de Privacidad</Link>
            <Link href="/terminos-de-uso" className="hover:text-gray-300">Términos de Uso</Link>
            <a href="https://inymet.com.mx/Clientes/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Acceso Clientes</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

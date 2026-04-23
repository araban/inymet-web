import type { Metadata } from "next";
import QuoteForm from "@/components/forms/QuoteForm";
import { Phone, Mail, Clock, MapPin, Building2, CheckCircle, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Cotización Gratuita de Calibración | INyMET México",
  description:
    "Solicita tu cotización de calibración certificada ISO 17025. Respuesta en menos de 24 horas. Automotriz, farmacéutica y alimentos en México.",
};

const contactInfo = [
  { icon: Phone, label: "Ventas directas", value: "(55) 5754-3087", href: "tel:+525557543087" },
  { icon: Mail, label: "Ventas y cotizaciones", value: "ventas@inymet.com.mx", href: "mailto:ventas@inymet.com.mx" },
  { icon: Mail, label: "Soporte técnico", value: "servicios@inymet.com.mx", href: "mailto:servicios@inymet.com.mx" },
  { icon: Clock, label: "Horario de atención", value: "Lun–Vie 8:00–18:00 (CDMX)", href: null },
  { icon: Building2, label: "Dirección", value: "Salvatierra 32, San Bartolo Atepehuacan, CDMX 07730", href: null },
  { icon: MapPin, label: "Cobertura", value: "Nacional — servicio a domicilio en ZMVM", href: null },
];

const guarantees = [
  "Cotización en menos de 24 horas",
  "Precios transparentes sin cargos ocultos",
  "Certificados válidos para cualquier auditoría",
  "Trazabilidad CENAM en todos los servicios",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#060d1f] text-white py-16 lg:py-20">
        <div className="container-custom max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500/15 border border-accent-500/30 mb-5">
            <Zap className="w-3.5 h-3.5 text-accent-400" />
            <span className="text-xs font-semibold text-accent-300">Respuesta garantizada en 24 horas</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-black mb-4">
            Solicita tu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300">
              cotización gratuita
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Un especialista en metrología analizará tu solicitud y te enviará una propuesta formal con precios y tiempos de entrega.
          </p>
        </div>
      </section>

      <div className="bg-gray-50 py-12 lg:py-16">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left: Contact info + guarantees */}
            <div className="space-y-5">

              {/* Urgency box */}
              <div className="bg-brand-900 border border-brand-700 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-accent-400 text-lg">🚨</span>
                  <h3 className="font-bold text-white text-sm">¿Auditoría urgente?</h3>
                </div>
                <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                  Si tienes una auditoría en menos de 48 horas, llámanos directamente para atención prioritaria.
                </p>
                <a
                  href="tel:+525557543087"
                  className="flex items-center justify-center gap-2 w-full bg-accent-500 hover:bg-accent-400 text-white font-bold text-sm py-2.5 rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Llamar ahora
                </a>
              </div>

              {/* Contact info */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 space-y-3">
                <h3 className="font-bold text-gray-900 text-sm mb-3">Contacto directo</h3>
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <info.icon className="w-4 h-4 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-400 font-medium">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-sm font-semibold text-brand-700 hover:underline">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-gray-800">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Guarantees */}
              <div className="bg-accent-50 border border-accent-100 rounded-2xl p-5">
                <h3 className="font-bold text-accent-800 text-sm mb-3">Lo que garantizamos</h3>
                <ul className="space-y-2">
                  {guarantees.map((g) => (
                    <li key={g} className="flex items-start gap-2 text-xs text-accent-800">
                      <CheckCircle className="w-3.5 h-3.5 text-accent-500 mt-0.5 flex-shrink-0" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Cuéntanos qué necesitas calibrar</h2>
              <p className="text-sm text-gray-500 mb-6">
                Entre más detalle nos des, más precisa será tu cotización.
              </p>
              <QuoteForm />
            </div>
          </div>

          {/* Map */}
          <div className="mt-10 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.3!2d-99.1265!3d19.4943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8c6f0000001%3A0x1!2sSalvatierra+32%2C+San+Bartolo+Atepehuacan%2C+07730+Ciudad+de+M%C3%A9xico!5e0!3m2!1ses-419!2smx!4v1713600000000"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación INyMET — Salvatierra 32, San Bartolo Atepehuacan, CDMX"
            />
          </div>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
import { ArrowRight, Phone, Clock, CheckCircle } from "lucide-react";
import { CONTACT } from "@/lib/contact";

const guarantees = [
  "Cotización en menos de 24 horas",
  "Sin compromiso de contratación",
  "Certificados válidos para cualquier auditoría",
];

export default function CTASection() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-brand-900 to-[#060d1f] overflow-hidden">
      {/* Radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(16,185,129,0.15) 0%, transparent 60%)",
        }}
      />
      <div aria-hidden className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div aria-hidden className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid overlay */}
      <div aria-hidden className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }} />

      <div className="relative container-custom">
        <div className="max-w-4xl mx-auto text-center">

          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500/15 border border-accent-500/30 mb-6">
            <Clock className="w-3.5 h-3.5 text-accent-400" />
            <span className="text-xs font-bold text-accent-300">Respuesta garantizada · 24 horas hábiles</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-5">
            ¿Listo para aprobar tu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300">
              próxima auditoría ISO?
            </span>
          </h2>

          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Un especialista en metrología analizará tu solicitud y te enviará una propuesta
            formal con precios y tiempos de entrega.
          </p>

          {/* Guarantees */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {guarantees.map((g) => (
              <div key={g} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent-400 flex-shrink-0" />
                <span className="text-sm text-slate-300">{g}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-400 text-white font-black text-base rounded-xl transition-all shadow-xl shadow-accent-900/40 hover:-translate-y-0.5"
            >
              Cotizar en 24 horas — Gratis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/[0.06] hover:bg-white/[0.12] text-white font-semibold rounded-xl border border-white/15 transition-all text-base"
            >
              <Phone className="w-5 h-5" />
              {CONTACT.phoneDisplay}
            </a>
          </div>

          <p className="text-xs text-slate-500 mt-8">
            Automotriz · Farmacéutica · Alimentos · Manufactura · Energía · Más de 500 clientes en México
          </p>
        </div>
      </div>
    </section>
  );
}

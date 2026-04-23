import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Shield, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Calibración por Industria | Automotriz, Farmacéutica y Alimentos | INyMET",
  description:
    "Servicios de calibración certificada ISO 17025 especializados por industria: automotriz (IATF 16949), farmacéutica (GMP/FDA) y alimentos (BRC/HACCP). México.",
};

const industries = [
  {
    slug: "automotriz",
    label: "Industria Automotriz",
    headline: "Cero no conformidades en auditorías IATF",
    norms: ["IATF 16949", "ISO 9001", "MSA", "PPAP"],
    description:
      "Calibración dimensional, eléctrica y de temperatura para plantas Tier 1 y Tier 2. Certificados aceptados en auditorías OEM y documentación lista para auditoría IATF.",
    highlights: [
      "Respuesta de emergencia en menos de 24 horas",
      "Calibración en planta sin detener la línea",
      "Expediente completo listo para auditoría IATF",
      "Reportes de incertidumbre para MSA y Gauge R&R",
    ],
    stat: { value: "+200", label: "plantas atendidas" },
    cta: "Ver soluciones automotrices",
  },
  {
    slug: "farmaceutica",
    label: "Industria Farmacéutica",
    headline: "Documentación GMP que supera inspecciones FDA",
    norms: ["GMP", "FDA 21 CFR", "COFEPRIS", "NOM-059"],
    description:
      "Calibración con documentación GMP completa: cálculo de incertidumbre según GUM, formato aceptado por FDA y COFEPRIS. Para laboratorios, autoclaves, balanzas e incubadoras.",
    highlights: [
      "Certificados con incertidumbre de medición (GUM)",
      "Formato aceptado por FDA y COFEPRIS",
      "Firma de metrólogo responsable en cada certificado",
      "Disponibilidad de historial de calibración por instrumento",
    ],
    stat: { value: "+150", label: "plantas farmacéuticas" },
    cta: "Ver soluciones farmacéuticas",
  },
  {
    slug: "alimentos",
    label: "Industria Alimentaria",
    headline: "Trazabilidad en puntos críticos HACCP y BRC",
    norms: ["BRC Global Standards", "FSSC 22000", "HACCP", "SQF"],
    description:
      "Calibración de instrumentos críticos para inocuidad alimentaria: sensores de temperatura, balanzas industriales, pHmetros y equipos de proceso. Certificados para exportación.",
    highlights: [
      "Calibración de puntos críticos de control (HACCP)",
      "Documentación para certificación BRC / SQF",
      "Habilitación para exportación a Europa y EE.UU.",
      "Programa preventivo anual con alertas de vencimiento",
    ],
    stat: { value: "+120", label: "plantas de alimentos" },
    cta: "Ver soluciones alimentarias",
  },
];

const otherIndustries = [
  "Manufactura General", "Energía y Petroquímica", "Construcción e Infraestructura",
  "Laboratorios de Ensayo", "Aeroespacial y Defensa", "Plásticos y Polímeros",
  "Dispositivos Médicos", "Textil e Impresión",
];

export default function IndustriasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#060d1f] text-white py-20 lg:py-28 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(29,78,216,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(29,78,216,0.05) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }} />
        <div aria-hidden className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative container-custom max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500/15 border border-accent-500/30 mb-6">
            <span className="text-xs font-bold text-accent-300 uppercase tracking-wide">Calibración especializada</span>
          </span>
          <h1 className="text-3xl lg:text-5xl font-black mb-5 leading-tight">
            Normas distintas.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300">
              Soluciones distintas.
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            Cada industria exige documentación metrológica diferente. Nuestros servicios están
            adaptados a los requisitos normativos específicos de tu sector.
          </p>

          {/* Quick trust stats */}
          <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
            {[
              { icon: Shield, label: "Cero no conformidades por calibración" },
              { icon: Clock, label: "Certificados en menos de 24 horas" },
              { icon: Award, label: "ISO 17025 · IAS CL-101 · CENAM" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center">
                <div className="w-10 h-10 rounded-xl bg-white/[0.07] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent-400" />
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom space-y-10">
          {industries.map((ind) => (
            <div key={ind.slug} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Header */}
              <div className="bg-brand-800 px-8 py-7">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  {ind.norms.map((n) => (
                    <span key={n} className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-white/15 text-white border border-white/20">
                      {n}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl lg:text-3xl font-black text-white mb-1">{ind.label}</h2>
                <p className="text-sm font-semibold text-accent-300">{ind.headline}</p>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm">{ind.description}</p>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-center">
                        <p className="text-3xl font-black text-brand-700">{ind.stat.value}</p>
                        <p className="text-xs text-gray-500">{ind.stat.label}</p>
                      </div>
                    </div>
                    <Link
                      href={`/industrias/${ind.slug}`}
                      className="group inline-flex items-center gap-2 px-6 py-3 bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm rounded-xl transition-all shadow-sm hover:-translate-y-px"
                    >
                      {ind.cta}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <ul className="space-y-3">
                    {ind.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other industries */}
      <section className="py-14 lg:py-20 bg-white border-y border-gray-100">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-10">
            <span className="section-label">También atendemos</span>
            <h2 className="section-title">¿No ves tu industria aquí?</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Calibramos instrumentos en cualquier sector que requiera trazabilidad metrológica certificada.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {otherIndustries.map((ind) => (
              <span key={ind} className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium border border-gray-200">
                {ind}
              </span>
            ))}
          </div>
          <div className="text-center">
            <Link href="/contacto"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-700 hover:bg-brand-800 text-white font-bold rounded-xl transition-all shadow-sm hover:-translate-y-px">
              Consultar para mi industria
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#060d1f]">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-4">
            ¿Auditoría próxima en tu planta?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Movilizamos técnicos a tus instalaciones en menos de 24 horas.
            Sin detener tu producción. Sin sorpresas en el costo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-400 text-white font-bold rounded-xl transition-all shadow-lg hover:-translate-y-px">
              Solicitar diagnóstico gratuito
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:+525557543087"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/[0.07] hover:bg-white/[0.13] text-white font-semibold rounded-xl border border-white/15 transition-all">
              (55) 5754-3087
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

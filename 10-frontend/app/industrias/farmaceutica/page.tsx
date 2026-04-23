import type { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "@/components/forms/QuoteForm";
import { CheckCircle, AlertTriangle, ArrowRight, Award, Clock, Shield, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Calibración para Industria Farmacéutica | GMP ISO 17025 | INyMET",
  description:
    "Calibración certificada para la industria farmacéutica. Cumplimiento GMP, NOM-059, FDA 21 CFR. Documentación lista para auditorías COFEPRIS. México.",
  keywords: [
    "calibración farmacéutica México",
    "calibración GMP laboratorio",
    "metrología farmacéutica NOM-059",
    "calibración COFEPRIS FDA",
    "trazabilidad metrología farmacéutica",
  ],
};

const pharmaSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Calibración para Industria Farmacéutica",
  description: "Calibración certificada ISO 17025 para plantas farmacéuticas. Cumplimiento GMP, FDA y COFEPRIS.",
  provider: { "@type": "Organization", name: "INyMET" },
  areaServed: "México",
};

const painPoints = [
  {
    title: "Hallazgos críticos en COFEPRIS o FDA",
    desc: "La falta de calibración documentada es uno de los hallazgos más frecuentes en inspecciones. Puede resultar en cierre de operaciones o recall de lotes.",
    severity: "Riesgo regulatorio crítico",
  },
  {
    title: "Equipos críticos sin certificado vigente",
    desc: "Un autoclave, horno de esterilización o balanza analítica sin calibración vigente invalida lotes completos de producción farmacéutica.",
    severity: "Invalidación de lotes",
  },
  {
    title: "Documentación GMP incompleta",
    desc: "Los registros de calibración deben incluir incertidumbre de medición, puntos calibrados y firma de metrólogo responsable. Sin esto, no hay cumplimiento GMP.",
    severity: "No conformidad regulatoria",
  },
];

const serviceGroups = [
  {
    category: "Temperatura y Control de Proceso",
    items: [
      "Autoclaves y esterilizadores (mapeo térmico)",
      "Incubadoras y cámaras de estabilidad",
      "Hornos de pirógenos y depirogenización",
      "Baños de agua termostáticos",
      "Registradores y data loggers de temperatura",
      "Termómetros de referencia clase A",
    ],
  },
  {
    category: "Pesaje y Volumetría",
    items: [
      "Balanzas analíticas de 0.0001g",
      "Balanzas de precisión y de piso",
      "Pipetas monocanal y multicanal",
      "Micropipetas de 1–1000 µL",
      "Buretas y matraces aforados clase A",
      "Dispensadores automáticos",
    ],
  },
  {
    category: "Humedad y Presión",
    items: [
      "Higrómetros de cámara limpia",
      "Transmisores de humedad relativa",
      "Manómetros de salas limpias",
      "Sensores de presión diferencial HVAC",
      "Controladores de presión de proceso",
      "Analizadores de punto de rocío",
    ],
  },
  {
    category: "Eléctrica y pH",
    items: [
      "pHmetros y electrodos de referencia",
      "Conductímetros y medidores de TDS",
      "Equipos de HPLC (bombas, detectores)",
      "Agitadores magnéticos y stirrers",
      "Multímetros de laboratorio",
      "Fuentes de alimentación estabilizadas",
    ],
  },
];

const guarantees = [
  "Documentación completa para auditorías COFEPRIS y FDA",
  "Registros de calibración con incertidumbre expandida U=2u",
  "Trazabilidad al SI vía CENAM conforme a NMX-EC-17025",
  "Certificados con firma de metrólogo responsable y número de acreditación",
  "Disponibilidad de registros históricos por instrumento",
  "Programa de calibración preventivo con alertas de vencimiento",
  "Servicio a domicilio sin interrumpir manufactura GMP",
  "Confidencialidad y manejo seguro de equipos farmacéuticos",
];

const stats = [
  { value: "+150", label: "Plantas farmacéuticas atendidas", icon: "💊" },
  { value: "0", label: "Hallazgos por calibración en COFEPRIS", icon: "✅" },
  { value: "24h", label: "Entrega de certificados", icon: "⚡" },
  { value: "GMP", label: "Documentación completamente alineada", icon: "📋" },
];

export default function FarmaceuticaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pharmaSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#060d1f] text-white py-20 lg:py-28 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(29,78,216,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(29,78,216,0.05) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }} />
        <div aria-hidden className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative container-custom max-w-5xl">
          <div className="flex flex-wrap gap-2 mb-6">
            {["GMP", "NOM-059", "FDA 21 CFR", "COFEPRIS", "ISO 17025"].map((s) => (
              <span key={s} className="bg-accent-500/15 border border-accent-400/30 text-accent-300 text-xs font-bold px-3 py-1 rounded-full">
                {s}
              </span>
            ))}
          </div>
          <h1 className="text-3xl lg:text-5xl font-black mb-5 leading-tight max-w-3xl">
            Calibración con trazabilidad para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300">
              plantas farmacéuticas
            </span>
          </h1>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl">
            Certificados de calibración con documentación completa para cumplir GMP, NOM-059, FDA
            y superar auditorías de COFEPRIS sin hallazgos relacionados con metrología.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contacto" className="group inline-flex items-center gap-2 px-7 py-4 bg-accent-500 hover:bg-accent-400 text-white font-bold text-sm rounded-xl transition-all shadow-lg hover:-translate-y-px">
              Cotizar para mi planta
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:+525557543087" className="inline-flex items-center gap-2 px-7 py-4 bg-white/[0.07] hover:bg-white/[0.13] text-white font-semibold text-sm rounded-xl border border-white/15 transition-all">
              Hablar con especialista farmacéutico
            </a>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-brand-900 border-t border-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className={`py-6 px-6 text-center ${i < stats.length - 1 ? "border-r border-white/10" : ""}`}>
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="text-2xl font-black text-white">{s.value}</div>
                <div className="text-xs text-slate-300 mt-1 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-white py-14 lg:py-20 border-b border-gray-100">
        <div className="container-custom max-w-5xl">
          <div className="mb-10">
            <span className="section-label">Las consecuencias de no calibrar</span>
            <h2 className="section-title">
              Riesgos regulatorios en la industria farmacéutica
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {painPoints.map(({ title, desc, severity }) => (
              <div key={title} className="bg-brand-50 rounded-2xl border-2 border-brand-100 p-7">
                <div className="inline-flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-brand-600" />
                  <span className="text-xs font-black text-brand-700 uppercase tracking-wide">{severity}</span>
                </div>
                <h3 className="font-black text-gray-900 mb-3 text-base leading-snug">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 lg:py-20 bg-gray-50 border-b border-gray-100">
        <div className="container-custom max-w-6xl">
          <div className="mb-10">
            <span className="section-label">Servicios especializados</span>
            <h2 className="section-title">
              Calibración para equipos farmacéuticos
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5">
            {serviceGroups.map((group) => (
              <div key={group.category} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-all">
                <h3 className="font-black text-gray-900 mb-4 text-sm leading-snug border-b border-gray-100 pb-3">{group.category}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle className="w-3.5 h-3.5 text-accent-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-label">Por qué elegir INyMET</span>
              <h2 className="text-2xl lg:text-3xl font-black text-gray-900 mb-6">
                Documentación que supera cualquier auditoría regulatoria
              </h2>
              <ul className="space-y-3">
                {guarantees.map((g) => (
                  <li key={g} className="flex items-start gap-3 text-sm text-gray-700">
                    <Award className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="bg-accent-50 border-2 border-accent-200 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-5 h-5 text-accent-600" />
                  <h3 className="font-black text-accent-900 text-base">Documentación GMP completa</h3>
                </div>
                <p className="text-sm text-accent-800 leading-relaxed">
                  Cada certificado incluye: número de acreditación IAS, trazabilidad CENAM, incertidumbre expandida,
                  condiciones ambientales del laboratorio y firma del metrólogo responsable.
                </p>
              </div>

              <div className="bg-brand-900 border-2 border-brand-700 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-accent-400" />
                  <h3 className="font-black text-white text-base">¿Inspección de COFEPRIS próxima?</h3>
                </div>
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  Llámanos directamente para atención prioritaria. Movilizamos técnicos a tus instalaciones en menos de 24 horas.
                </p>
                <a href="tel:+525557543087"
                  className="flex items-center justify-center gap-2 w-full bg-accent-500 hover:bg-accent-400 text-white font-bold text-sm py-3 rounded-xl transition-colors">
                  Llamar ahora — (55) 5754-3087
                </a>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-center gap-4">
                <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-brand-700" />
                </div>
                <div>
                  <p className="font-black text-gray-900 text-sm">ISO 17025 · IAS CL-101</p>
                  <p className="text-xs text-gray-500 mt-1">Acreditación vigente · Trazabilidad CENAM · Alcance nacional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-gray-50 py-14 lg:py-20 border-t border-gray-100">
        <div className="container-custom max-w-2xl">
          <div className="text-center mb-8">
            <span className="section-label">Cotización gratuita</span>
            <h2 className="section-title mb-3">
              Cotiza para tu planta farmacéutica
            </h2>
            <p className="text-gray-500 text-sm">
              Respuesta garantizada en menos de 24 horas con propuesta formal y precios.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <QuoteForm defaultIndustry="farmaceutica" />
          </div>
        </div>
      </section>
    </>
  );
}

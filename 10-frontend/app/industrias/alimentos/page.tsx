import type { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "@/components/forms/QuoteForm";
import { CheckCircle, AlertTriangle, ArrowRight, Award, Clock, Shield, Thermometer } from "lucide-react";

export const metadata: Metadata = {
  title: "Calibración para Industria Alimentaria | HACCP BRC FSSC | INyMET",
  description:
    "Calibración certificada para plantas de alimentos y bebidas. Cumplimiento HACCP, BRC, FSSC 22000, SQF. Temperatura, peso y proceso. México.",
  keywords: [
    "calibración industria alimentos México",
    "calibración HACCP BRC",
    "metrología planta alimentos",
    "calibración BRC SQF FSSC México",
    "trazabilidad inocuidad alimentaria",
  ],
};

const foodSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Calibración para Industria Alimentaria",
  description: "Calibración certificada ISO 17025 para plantas de alimentos. Cumplimiento HACCP, BRC, FSSC 22000.",
  provider: { "@type": "Organization", name: "INyMET" },
  areaServed: "México",
};

const painPoints = [
  {
    title: "Puntos críticos de control sin trazabilidad",
    desc: "Las temperaturas críticas (pasteurización, esterilización, almacenamiento) deben monitorearse con instrumentos calibrados. Sin trazabilidad, el HACCP no es válido.",
    severity: "Riesgo de inocuidad",
  },
  {
    title: "Hallazgos en auditorías BRC o SQF",
    desc: "La falta de calibración documentada es uno de los hallazgos más frecuentes en auditorías BRC Global Standards, representando un riesgo de pérdida de certificación.",
    severity: "Pérdida de certificación",
  },
  {
    title: "Control de peso fuera de especificación",
    desc: "Balanzas descalibradas generan reclamaciones por peso neto, penalizaciones de minoristas y conflictos con PROFECO por etiquetado incorrecto.",
    severity: "Riesgo regulatorio y comercial",
  },
];

const serviceGroups = [
  {
    category: "Temperatura y Refrigeración",
    icon: "🌡️",
    items: [
      "Sensores de pasteurización y UHT",
      "Cámaras de refrigeración y congelación",
      "Data loggers de cadena de frío",
      "Termocoplas de hornos de cocción",
      "Transmisores de temperatura de proceso",
      "Termómetros de control crítico (HACCP)",
    ],
  },
  {
    category: "Pesaje y Llenado",
    icon: "⚖️",
    items: [
      "Básculas industriales y de proceso",
      "Balanzas de línea (checkweighers)",
      "Balanzas de formulación",
      "Dosificadores y llenadores",
      "Células de carga y transmisores de peso",
      "Sistemas de pesaje dinámico",
    ],
  },
  {
    category: "Presión y Flujo",
    icon: "⚙️",
    items: [
      "Manómetros de autoclaves y retortas",
      "Sensores de presión de CIP/SIP",
      "Caudalímetros de proceso",
      "Transmisores de presión diferencial",
      "Reguladores de vapor",
      "Medidores de flujo de líquidos",
    ],
  },
  {
    category: "Humedad y pH",
    icon: "💧",
    items: [
      "Higrómetros de almacén y producción",
      "pHmetros en línea y portátiles",
      "Conductímetros para CIP",
      "Analizadores de actividad de agua (aw)",
      "Refractómetros de proceso",
      "Medidores de oxígeno disuelto",
    ],
  },
];

const guarantees = [
  "Certificados válidos para auditorías BRC, SQF, FSSC 22000, FSMA y HACCP",
  "Trazabilidad al SI vía CENAM para todos los puntos calibrados",
  "Historial completo de calibración por instrumento (número de serie)",
  "Documentación de incertidumbre de medición expandida",
  "Servicio a domicilio sin interrumpir manufactura ni línea de producción",
  "Programa de calibración preventivo con alertas automáticas de vencimiento",
  "Personal con conocimiento de inocuidad y manejo de alimentos",
  "Certificados emitidos en menos de 24 horas para urgencias",
];

const stats = [
  { value: "+120", label: "Plantas de alimentos atendidas", icon: "🏭" },
  { value: "BRC", label: "Certificaciones aprobadas en 1er intento", icon: "🏆" },
  { value: "24h", label: "Entrega de certificados", icon: "⚡" },
  { value: "HACCP", label: "Puntos críticos trazables", icon: "✅" },
];

export default function AlimentosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(foodSchema) }}
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
            {["BRC Global Standards", "FSSC 22000", "HACCP", "SQF", "ISO 17025"].map((s) => (
              <span key={s} className="bg-accent-500/15 border border-accent-400/30 text-accent-300 text-xs font-bold px-3 py-1 rounded-full">
                {s}
              </span>
            ))}
          </div>
          <h1 className="text-3xl lg:text-5xl font-black mb-5 leading-tight max-w-3xl">
            Calibración para inocuidad alimentaria y{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300">
              cumplimiento BRC
            </span>
          </h1>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl">
            Mantén la trazabilidad de tus puntos críticos de control. Certificados válidos para
            auditorías HACCP, BRC, FSSC 22000 y exportación a mercados internacionales.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contacto" className="group inline-flex items-center gap-2 px-7 py-4 bg-accent-500 hover:bg-accent-400 text-white font-bold text-sm rounded-xl transition-all shadow-lg hover:-translate-y-px">
              Cotizar para mi planta
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:+525557543087" className="inline-flex items-center gap-2 px-7 py-4 bg-white/[0.07] hover:bg-white/[0.13] text-white font-semibold text-sm rounded-xl border border-white/15 transition-all">
              Hablar con especialista en alimentos
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
            <span className="section-label">Riesgos en tu operación</span>
            <h2 className="section-title">
              Consecuencias de no calibrar en la industria alimentaria
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

      {/* Services grid */}
      <section className="py-14 lg:py-20 bg-gray-50 border-b border-gray-100">
        <div className="container-custom max-w-6xl">
          <div className="mb-10">
            <span className="section-label">Qué calibramos</span>
            <h2 className="section-title">
              Servicios especializados para{" "}
              <span className="text-brand-600">plantas de alimentos</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceGroups.map((group) => (
              <div key={group.category} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-all">
                <div className="text-3xl mb-3">{group.icon}</div>
                <h3 className="font-black text-gray-900 mb-4 text-sm leading-snug">{group.category}</h3>
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
              <span className="section-label">Lo que garantizamos</span>
              <h2 className="text-2xl lg:text-3xl font-black text-gray-900 mb-6">
                Documentación que satisface a cualquier auditor de inocuidad
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
              <div className="bg-brand-50 border-2 border-brand-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Thermometer className="w-5 h-5 text-brand-600" />
                  <h3 className="font-black text-brand-900 text-base">Puntos críticos de temperatura</h3>
                </div>
                <p className="text-sm text-brand-700 leading-relaxed">
                  Las temperaturas de pasteurización, cocción, enfriamiento y almacenamiento son puntos
                  críticos en HACCP. Nuestros certificados documentan cada punto con incertidumbre expandida.
                </p>
              </div>

              <div className="bg-brand-900 border-2 border-brand-700 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-accent-400" />
                  <h3 className="font-black text-white text-base">¿Auditoría BRC próxima?</h3>
                </div>
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  Movilizamos técnicos a tu planta en menos de 24 horas para calibración de emergencia.
                  Sin detener tu producción.
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
                  <p className="text-xs text-gray-500 mt-1">Trazabilidad CENAM · Alcance nacional · Servicio a domicilio</p>
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
              Cotiza para tu planta de alimentos
            </h2>
            <p className="text-gray-500 text-sm">
              Respuesta garantizada en menos de 24 horas con propuesta formal y precios.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <QuoteForm defaultIndustry="alimentos" />
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "@/components/forms/QuoteForm";
import { CheckCircle, AlertTriangle, ArrowRight, Award, Clock, Shield, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Calibración para Industria Automotriz | IATF 16949 | INyMET",
  description:
    "Calibración certificada para industria automotriz. IATF 16949, ISO 9001, MSA. Evita no conformidades y paros de línea. Respuesta en 24h en México.",
  keywords: [
    "calibración automotriz México",
    "IATF 16949 calibración",
    "laboratorio metrología automotriz",
    "calibración instrumentos planta automotriz",
    "MSA gauge R&R calibración",
  ],
};

const automotiveSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Calibración para Industria Automotriz",
  description: "Calibración certificada ISO 17025 para plantas automotrices. Cumplimiento IATF 16949 y MSA.",
  provider: { "@type": "Organization", name: "INyMET" },
  areaServed: "México",
};

const painPoints = [
  {
    title: "No conformidades en auditorías IATF",
    desc: "Un instrumento no calibrado genera una no conformidad mayor que puede detener tu certificación IATF 16949 y paralizar la línea de producción.",
    severity: "Riesgo crítico",
  },
  {
    title: "Rechazo de PPAP por MSA deficiente",
    desc: "Un análisis de sistemas de medición (MSA) con instrumentos descalibrados invalida tu Gauge R&R y retrasa la aprobación de tu cliente OEM.",
    severity: "Impacto en producción",
  },
  {
    title: "Paros de línea por falta de trazabilidad",
    desc: "Los OEM exigen documentación completa. Sin certificados de calibración vigentes y trazables, tus paros operativos se multiplican exponencialmente.",
    severity: "Costo por hora",
  },
];

const services = [
  { name: "Temperatura", items: ["Termocoplas tipo J/K/T/E", "RTDs para hornos y hornallas", "Transmisores de temperatura", "Incubadoras y cámaras ambientales"] },
  { name: "Dimensional", items: ["Calibradores y micrómetros", "Bloques patrón (gauge blocks)", "CMMs y altímetros", "Pernos y anillos calibradores"] },
  { name: "Par Torsional", items: ["Llaves dinamométricas click", "Torquímetros digitales", "Transductores de par", "Multiplicadores de torque"] },
  { name: "Eléctrica", items: ["Multímetros y fuentes DC", "Osciloscopios", "Calibradores de proceso", "Analizadores de red"] },
  { name: "Presión", items: ["Manómetros y presostatos", "Transmisores diferenciales", "Sensores de proceso", "Calibradores de presión"] },
  { name: "Vibraciones", items: ["Acelerómetros IEPE/ICP", "Analizadores de vibración", "Sensores de desbalance", "Sistemas de monitoreo"] },
];

const guarantees = [
  "Certificados válidos para auditorías IATF 16949 y FORD Q1",
  "Reportes de incertidumbre para MSA y Gauge R&R",
  "Trazabilidad completa al SI vía CENAM",
  "Historial auditab de calibración por instrumento",
  "Entrega de certificados en menos de 24 horas",
  "Servicio a domicilio sin parar la línea de producción",
  "Metrólogos con experiencia en plantas automotrices",
  "Soporte técnico durante auditorías de clientes OEM",
];

const stats = [
  { value: "+200", label: "Plantas automotrices atendidas", icon: "🏭" },
  { value: "0", label: "No conformidades por calibración", icon: "✅" },
  { value: "24h", label: "Tiempo de entrega certificados", icon: "⚡" },
  { value: "15+", label: "Años en sector automotriz", icon: "🏆" },
];

export default function AutorizPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(automotiveSchema) }}
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
            {["IATF 16949", "ISO 9001", "MSA", "PPAP", "APQP"].map((s) => (
              <span key={s} className="bg-accent-500/15 border border-accent-400/30 text-accent-300 text-xs font-bold px-3 py-1 rounded-full">
                {s}
              </span>
            ))}
          </div>
          <h1 className="text-3xl lg:text-5xl font-black mb-5 leading-tight max-w-3xl">
            Calibración certificada para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300">
              industria automotriz
            </span>
          </h1>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl">
            Evita no conformidades en auditorías IATF 16949. Certificados ISO 17025 con trazabilidad
            CENAM, válidos para PPAP, MSA y auditorías de clientes OEM.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contacto" className="group inline-flex items-center gap-2 px-7 py-4 bg-accent-500 hover:bg-accent-400 text-white font-bold text-sm rounded-xl transition-all shadow-lg hover:-translate-y-px">
              Cotizar para mi planta
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:+525557543087" className="inline-flex items-center gap-2 px-7 py-4 bg-white/[0.07] hover:bg-white/[0.13] text-white font-semibold text-sm rounded-xl border border-white/15 transition-all">
              Hablar con especialista automotriz
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
            <span className="section-label">¿Te resulta familiar?</span>
            <h2 className="section-title">
              Los riesgos que enfrenta tu planta automotriz
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
              <span className="text-brand-600">planta automotriz</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc) => (
              <div key={svc.name} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-all hover:-translate-y-0.5">
                <h3 className="font-black text-gray-900 mb-3 text-base">{svc.name}</h3>
                <ul className="space-y-2">
                  {svc.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-3.5 h-3.5 text-accent-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/calibracion" className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700">
              Ver todos nuestros laboratorios de calibración <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Guarantees + urgency */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            <div>
              <span className="section-label">Lo que garantizamos</span>
              <h2 className="text-2xl lg:text-3xl font-black text-gray-900 mb-6">
                Por qué las plantas automotrices confían en INyMET
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
              {/* Urgency box */}
              <div className="bg-brand-900 border-2 border-brand-700 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-5 h-5 text-accent-400" />
                  <h3 className="font-black text-white text-base">¿Auditoría IATF próxima?</h3>
                </div>
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  Si tienes una auditoría en menos de 72 horas, llámanos ahora para atención prioritaria.
                  Certificados urgentes entregados en el día.
                </p>
                <a
                  href="tel:+525557543087"
                  className="flex items-center justify-center gap-2 w-full bg-accent-500 hover:bg-accent-400 text-white font-bold text-sm py-3 rounded-xl transition-colors"
                >
                  Llamar ahora — (55) 5754-3087
                </a>
              </div>

              {/* Speed guarantee */}
              <div className="bg-brand-50 border-2 border-brand-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-brand-600" />
                  <h3 className="font-black text-brand-900 text-base">Respuesta garantizada</h3>
                </div>
                <p className="text-sm text-brand-700 leading-relaxed">
                  Cotización formal en menos de <strong>24 horas</strong>. Para urgencias con auditoría próxima,
                  respondemos en menos de <strong>2 horas</strong> en horario hábil.
                </p>
              </div>

              {/* ISO badge */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-center gap-4">
                <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-brand-700" />
                </div>
                <div>
                  <p className="font-black text-gray-900 text-sm">Acreditación ISO 17025 vigente</p>
                  <p className="text-xs text-gray-500 mt-1">IAS CL-101 · Trazabilidad CENAM · Alcance nacional</p>
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
              Cotiza para tu planta automotriz
            </h2>
            <p className="text-gray-500 text-sm">
              Dinos qué instrumentos necesitas calibrar y recibe propuesta formal en menos de 24 horas.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <QuoteForm defaultIndustry="automotriz" />
          </div>
        </div>
      </section>
    </>
  );
}

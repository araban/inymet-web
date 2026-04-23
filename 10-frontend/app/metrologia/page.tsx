import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight, BookOpen, Award, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Metrología Industrial en México | Laboratorio Acreditado ISO 17025",
  description:
    "Servicios de metrología industrial certificada. Trazabilidad al SI vía CENAM. Incertidumbre de medición, patrones primarios y secundarios. México.",
  keywords: [
    "metrología industrial México",
    "metrología certificada ISO 17025",
    "trazabilidad metrológica CENAM",
    "incertidumbre de medición",
    "laboratorio metrología acreditado",
  ],
};

const concepts = [
  {
    icon: Layers,
    title: "Trazabilidad Metrológica",
    description:
      "Cada medición está vinculada al Sistema Internacional de Unidades (SI) a través de una cadena ininterrumpida de calibraciones. Nuestros patrones están trazados al CENAM (Centro Nacional de Metrología de México).",
  },
  {
    icon: Award,
    title: "Incertidumbre de Medición",
    description:
      "Todo certificado de calibración incluye el cálculo de incertidumbre de medición conforme a la Guía GUM (Guide to the Expression of Uncertainty in Measurement), requisito clave para auditorías ISO.",
  },
  {
    icon: BookOpen,
    title: "Patrones de Referencia",
    description:
      "Trabajamos con patrones primarios y secundarios calibrados directamente contra el CENAM, garantizando la máxima confiabilidad de cada certificado que emitimos.",
  },
];

const services = [
  "Gestión de sistemas de calibración",
  "Asesoría en selección de instrumentos de medición",
  "Diseño de programas de calibración preventiva",
  "Evaluación de la conformidad de instrumentos",
  "Capacitación en metrología industrial",
  "Análisis de sistemas de medición (MSA)",
  "Revisión de certificados de calibración",
  "Consultoría para acreditación de laboratorios internos",
];

const whyMatters = [
  {
    title: "Validez legal y normativa",
    desc: "Un certificado con trazabilidad CENAM es el único que tiene validez ante organismos de acreditación como EMA y ante auditorías de clientes internacionales.",
  },
  {
    title: "Decisiones de producción confiables",
    desc: "Cuando tus instrumentos tienen trazabilidad, las decisiones de aceptar o rechazar producto se basan en mediciones confiables — reduciendo costos de no calidad.",
  },
  {
    title: "Cumplimiento normativo garantizado",
    desc: "ISO 9001, IATF 16949, ISO 13485, GMP y BRC exigen trazabilidad metrológica. Sin ella, la no conformidad es inevitable.",
  },
];

export default function MetrologiaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#060d1f] text-white py-20 lg:py-28 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(29,78,216,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(29,78,216,0.05) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }} />
        <div aria-hidden className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/15 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative container-custom max-w-5xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500/15 border border-accent-500/30 mb-6">
            <span className="text-xs font-bold text-accent-300 uppercase tracking-wide">Laboratorio acreditado ISO 17025</span>
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl lg:text-5xl font-black mb-5 leading-tight">
                Metrología Industrial con{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300">
                  Trazabilidad CENAM
                </span>
              </h1>
              <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
                La metrología es la ciencia de la medición. En la industria, una mala medición tiene costos reales:
                productos rechazados, auditorías fallidas, paros de producción.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contacto"
                  className="group inline-flex items-center gap-2 px-7 py-4 bg-accent-500 hover:bg-accent-400 text-white font-bold text-sm rounded-xl transition-all shadow-lg hover:-translate-y-px">
                  Consulta gratuita con un metrólogo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/calibracion"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-white/[0.07] hover:bg-white/[0.13] text-white font-semibold text-sm rounded-xl border border-white/15 transition-all">
                  Ver servicios de calibración
                </Link>
              </div>
            </div>
            <div className="hidden lg:block rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/lab-metrologia-monitores.jpg"
                alt="Laboratorio de metrología INyMET con equipos de análisis de señal certificados ISO 17025"
                width={1138}
                height={344}
                className="w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Concepts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Fundamentos de la Metrología Industrial
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Antes de calibrar, es importante entender qué garantiza que una calibración realmente sea válida.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {concepts.map((c) => (
              <div key={c.title} className="card">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-50 rounded-xl mb-4">
                  <c.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{c.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="section-padding bg-brand-50">
        <div className="container-custom">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            ¿Por qué la trazabilidad metrológica importa en tu empresa?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyMatters.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-brand-100">
                <CheckCircle className="w-6 h-6 text-brand-500 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Servicios de Metrología y Consultoría
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Además de calibración, ofrecemos servicios de consultoría metrológica para ayudarte
                a construir un sistema de medición robusto que soporte tus certificaciones y auditorías.
              </p>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">¿Tienes dudas sobre metrología?</h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Nuestros metrólogos certificados pueden revisar tu sistema de calibración actual
                y decirte exactamente qué necesitas para superar tu próxima auditoría.
              </p>
              <ul className="space-y-3 mb-6 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent-400" />
                  Diagnóstico sin costo
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent-400" />
                  Respuesta en menos de 24 horas
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent-400" />
                  Especialista asignado a tu industria
                </li>
              </ul>
              <Link href="/contacto" className="btn-primary bg-accent-500 hover:bg-accent-600 w-full text-center block">
                Hablar con un metrólogo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

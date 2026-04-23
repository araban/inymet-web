import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Download, ArrowRight, CheckSquare, BookOpen, Calculator, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Recursos Gratuitos de Calibración y Metrología Industrial | INyMET",
  description:
    "Descarga guías, checklists y herramientas gratuitas sobre calibración industrial, auditorías ISO, frecuencias de calibración y más. Para gerentes de calidad en México.",
};

const resources = [
  {
    icon: CheckSquare,
    type: "Checklist",
    title: "Lista de Verificación para Auditorías ISO — Calibración",
    description:
      "Los 15 puntos que los auditores siempre revisan en materia de calibración. Verifica el estado de tu sistema antes de la auditoría.",
    cta: "Descargar checklist",
    slug: "checklist-auditoria-iso-calibracion",
  },
  {
    icon: Calculator,
    type: "Herramienta",
    title: "Calculadora de Intervalos de Calibración",
    description:
      "Determina la frecuencia óptima de calibración para cada tipo de instrumento basándote en el historial de desempeño y los requerimientos normativos.",
    cta: "Usar calculadora",
    slug: "calculadora-intervalos-calibracion",
  },
  {
    icon: FileText,
    type: "Guía",
    title: "Cómo Leer un Certificado de Calibración",
    description:
      "Aprende a interpretar los datos en un certificado de calibración: incertidumbre, trazabilidad, errores y criterios de aceptación.",
    cta: "Descargar guía",
    slug: "guia-leer-certificado-calibracion",
  },
  {
    icon: BookOpen,
    type: "Plantilla",
    title: "Plan Anual de Calibración",
    description:
      "Plantilla en Excel para gestionar tu programa anual de calibración: inventario de equipos, fechas, responsables y estado.",
    cta: "Descargar plantilla",
    slug: "plantilla-plan-anual-calibracion",
  },
  {
    icon: CheckSquare,
    type: "Checklist",
    title: "Preparación para Auditoría IATF 16949 — Metrología",
    description:
      "Los requerimientos específicos de IATF 16949 en materia de calibración y MSA. Para plantas automotrices en México.",
    cta: "Descargar checklist",
    slug: "checklist-iatf-16949-metrologia",
  },
  {
    icon: Calculator,
    type: "Guía",
    title: "10 Errores Comunes en Calibración (y Cómo Evitarlos)",
    description:
      "Los errores más frecuentes que generan no conformidades en auditorías ISO relacionadas con calibración de instrumentos.",
    cta: "Descargar guía",
    slug: "guia-errores-calibracion",
  },
];

const articles = [
  { title: "¿Cada cuánto calibrar equipos industriales?", slug: "cada-cuanto-calibrar-equipos-industriales", time: "6 min" },
  { title: "Costos ocultos de no calibrar tus instrumentos", slug: "costos-ocultos-no-calibrar", time: "7 min" },
  { title: "Cómo preparar una auditoría ISO 17025", slug: "como-preparar-auditoria-iso-17025", time: "12 min" },
  { title: "5 errores en auditorías ISO por mala calibración", slug: "errores-auditoria-iso-mala-calibracion", time: "8 min" },
];

export default function RecursosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#060d1f] text-white py-20 lg:py-24 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(29,78,216,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(29,78,216,0.05) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }} />
        <div aria-hidden className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative container-custom max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500/15 border border-accent-500/30 mb-6">
            <Download className="w-3.5 h-3.5 text-accent-400" />
            <span className="text-xs font-bold text-accent-300 uppercase tracking-wide">Descarga gratuita</span>
          </span>
          <h1 className="text-3xl lg:text-5xl font-black mb-5 leading-tight">
            Recursos gratuitos de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300">
              metrología industrial
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Guías, checklists y herramientas para gerentes de calidad, responsables de metrología
            y directores de operaciones en industrias certificadas de México.
          </p>
        </div>
      </section>

      {/* Resources grid */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container-custom max-w-6xl">
          <div className="mb-10">
            <span className="section-label">Herramientas y guías</span>
            <h2 className="section-title">Descargables para tu equipo de calidad</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {resources.map((r) => (
              <div key={r.title} className="rounded-2xl border-2 border-gray-100 bg-white p-6 flex flex-col hover:shadow-md hover:border-brand-200 transition-all hover:-translate-y-0.5">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-brand-50">
                    <r.icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-100">
                    {r.type}
                  </span>
                </div>
                <h3 className="text-base font-black text-gray-900 mb-2 flex-1 leading-snug">{r.title}</h3>
                <p className="text-sm text-gray-500 mb-5 leading-relaxed">{r.description}</p>
                <Link
                  href={`/contacto?recurso=${r.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700 group"
                >
                  <Download className="w-4 h-4" />
                  {r.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related articles */}
      <section className="py-14 lg:py-20 bg-white border-y border-gray-100">
        <div className="container-custom max-w-5xl">
          <div className="mb-8">
            <span className="section-label">Contenido técnico</span>
            <h2 className="section-title">Artículos recomendados</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {articles.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="flex items-center justify-between p-5 rounded-2xl bg-gray-50 hover:bg-brand-50 border-2 border-gray-100 hover:border-brand-200 transition-all group"
              >
                <div className="flex items-start gap-3">
                  <BookOpen className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-bold text-gray-800 group-hover:text-brand-700 leading-snug">
                    {a.title}
                  </span>
                </div>
                <div className="flex items-center gap-2 ml-4 flex-shrink-0">
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock className="w-3 h-3" />{a.time}
                  </span>
                  <ArrowRight className="w-4 h-4 text-brand-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#060d1f]">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-4">
            ¿Necesitas algo más específico?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Nuestros especialistas pueden ayudarte con una consulta personalizada sin costo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-400 text-white font-bold rounded-xl transition-all shadow-lg hover:-translate-y-px">
              Hablar con un especialista
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

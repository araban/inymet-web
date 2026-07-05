import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import QuoteForm from "@/components/forms/QuoteForm";
import { CheckCircle, Clock, Award } from "lucide-react";
import {
  CalibracionLabsSection,
  calibracionLabs,
} from "@/components/sections/CalibracionLabs";

export const metadata: Metadata = {
  title: "Calibración de Instrumentos (versión anterior) | INyMET",
  description:
    "Versión anterior de la página de servicios de calibración de INyMET. Consulta la versión actual en /calibracion.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://inymet.com.mx/calibracion",
  },
};

export default function CalibracionV2Page() {
  return (
    <>
      {/* ── Aviso versión anterior ─────────────────────────────────── */}
      <div className="bg-accent-600 text-white text-center py-2 px-4 text-xs font-semibold tracking-wide">
        VERSIÓN ANTERIOR — Esta página fue reemplazada &nbsp;·&nbsp;
        <Link
          href="/calibracion"
          className="underline underline-offset-2 hover:no-underline"
        >
          Ver página actual →
        </Link>
      </div>

      {/* Hero */}
      <section className="relative bg-[#060d1f] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/instrumentos-calibracion.jpg"
            alt="Instrumentos de calibración certificada ISO 17025 en laboratorio INyMET"
            fill
            className="object-cover object-center opacity-15"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060d1f] via-[#060d1f]/90 to-transparent" />
        </div>

        <div className="relative container-custom max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500/15 border border-accent-500/30 mb-6">
            <Award className="w-3.5 h-3.5 text-accent-400" />
            <span className="text-xs font-semibold text-accent-300">ISO 17025 · IAS CL-101 · Trazabilidad CENAM</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-black mb-5 leading-tight max-w-2xl">
            Servicios de Calibración{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300">
              Certificada ISO 17025
            </span>
          </h1>
          <p className="text-lg text-slate-400 mb-6 max-w-xl">
            11 laboratorios acreditados. Certificados con trazabilidad CENAM aceptados en auditorías
            ISO 9001, IATF 16949, GMP, BRC y FDA. Respuesta en menos de 24 horas.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              { icon: Clock, text: "Certificados en < 24h" },
              { icon: CheckCircle, text: "11 laboratorios acreditados" },
              { icon: Award, text: "ISO 17025 · CENAM" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-slate-300">
                <Icon className="w-4 h-4 text-accent-400" />
                {text}
              </div>
            ))}
          </div>

          {/* Lab navigation */}
          <div className="flex flex-wrap gap-2">
            {calibracionLabs.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="bg-white/8 hover:bg-white/15 border border-white/15 rounded-full px-4 py-1.5 text-xs font-medium transition-colors flex items-center gap-1.5"
              >
                <span>{s.icon}</span>
                {s.title.replace("Calibración de ", "").replace("Calibración ", "").replace("Metrología ", "")}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services detail */}
      <CalibracionLabsSection />

      {/* CTA + Form */}
      <section className="section-padding bg-gray-50 border-t border-gray-100">
        <div className="container-custom max-w-2xl">
          <div className="text-center mb-8">
            <span className="section-label">Cotización gratuita</span>
            <h2 className="section-title mb-3">
              ¿Qué instrumentos necesitas calibrar?
            </h2>
            <p className="text-gray-500">
              Completa el formulario y recibirás una propuesta formal con precios y tiempos de entrega en menos de 24 horas.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}

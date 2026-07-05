import type { Metadata } from "next";
import Link from "next/link";
import { Award, Clock, CheckCircle } from "lucide-react";
import QuoteForm from "@/components/forms/QuoteForm";
import { SolarSystem } from "@/components/sections/SolarSystem";
import {
  CalibracionLabsSection,
  calibracionLabs,
} from "@/components/sections/CalibracionLabs";

export const metadata: Metadata = {
  title: "Calibración de Instrumentos ISO 17025 | 11 Laboratorios | INyMET",
  description:
    "Calibramos termómetros, manómetros, multímetros, torquímetros y más — 11 laboratorios ISO 17025 con trazabilidad CENAM. Certificados en menos de 24 horas. Automotriz, Farmacéutica, Alimentos.",
  keywords: [
    "calibración de instrumentos México",
    "calibración temperatura presión eléctrica",
    "calibración multímetros Mexico",
    "calibración ISO 17025 CENAM",
    "laboratorio calibración certificado México",
    "calibración termómetros manómetros",
    "calibración torquímetros dimensión",
  ],
  alternates: {
    canonical: "https://inymet.com.mx/calibracion",
  },
  openGraph: {
    title: "Calibración de Instrumentos ISO 17025 | INyMET",
    description:
      "11 laboratorios acreditados: temperatura, presión, eléctrica, dimensional y más. Certificados con trazabilidad CENAM en menos de 24 horas.",
    url: "https://inymet.com.mx/calibracion",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Calibración Industrial Certificada ISO 17025",
  description:
    "Servicios de calibración de instrumentos industriales con certificados ISO 17025 y trazabilidad CENAM. 11 laboratorios acreditados en México.",
  provider: {
    "@type": "Organization",
    name: "INyMET",
    url: "https://inymet.com.mx",
    telephone: "+52-55-5754-3087",
  },
  areaServed: { "@type": "Country", name: "México" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Laboratorios de Calibración Certificada",
    itemListElement: calibracionLabs.map((lab, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: { "@type": "Service", name: lab.title },
    })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://inymet.com.mx" },
    { "@type": "ListItem", position: 2, name: "Calibración", item: "https://inymet.com.mx/calibracion" },
  ],
};

// ─── Stats strip ─────────────────────────────────────────────────────────────
const STATS = [
  { value: "11", label: "Laboratorios acreditados" },
  { value: "+189", label: "Empresas certificadas" },
  { value: "<9h", label: "Entrega del certificado" },
  { value: "IAS CL-101", label: "Acreditación oficial" },
] as const;

export default function CalibracionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Dark hero ──────────────────────────────────────────────── */}
      <section className="relative bg-[#060d1f] pt-20 pb-4 overflow-hidden">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent-500/10 border border-accent-500/25 text-accent-400 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            <Award className="w-3.5 h-3.5" />
            ISO 17025 · IAS CL-101 · Trazabilidad CENAM
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] mb-5">
            Calibración de Instrumentos
            <br />
            <span className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">
              Certificada ISO 17025
            </span>
          </h1>

          <p className="text-lg text-gray-300 max-w-xl mx-auto mb-3">
            11 laboratorios acreditados en órbita constante. Certificados con
            trazabilidad CENAM en menos de 24 horas.
          </p>
          <p className="text-sm text-gray-500">
            Haz hover sobre cualquier esfera para explorar · Clic para ir al
            laboratorio
          </p>
        </div>
      </section>

      {/* ── Solar System ───────────────────────────────────────────── */}
      <section className="bg-[#060d1f]">
        <SolarSystem />
      </section>

      {/* ── Stats strip ────────────────────────────────────────────── */}
      <section className="bg-[#060d1f] border-t border-white/5 py-14">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-black text-white mb-1.5">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick stats + trust line ───────────────────────────────── */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="container-custom flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {[
            { icon: Clock, text: "Certificados en < 24h" },
            { icon: CheckCircle, text: "11 laboratorios acreditados" },
            { icon: Award, text: "Aceptados en auditorías ISO 9001, IATF 16949, GMP, BRC y FDA" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm text-gray-600">
              <Icon className="w-4 h-4 text-accent-500" />
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* ── 11 laboratorios — detalle indexable ────────────────────── */}
      <CalibracionLabsSection />

      {/* ── CTA + Form ─────────────────────────────────────────────── */}
      <section className="section-padding bg-gray-50 border-t border-gray-100">
        <div className="container-custom max-w-2xl">
          <div className="text-center mb-8">
            <span className="section-label">Cotización gratuita</span>
            <h2 className="section-title mb-3">
              ¿Qué instrumentos necesitas calibrar?
            </h2>
            <p className="text-gray-500">
              Completa el formulario y recibirás una propuesta formal con
              precios y tiempos de entrega en menos de 24 horas.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <QuoteForm />
          </div>
          <p className="text-center mt-6 text-sm text-gray-400">
            ¿Prefieres la versión anterior de esta página?{" "}
            <Link href="/calibracion-v2" className="underline hover:text-gray-600">
              Consúltala aquí
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

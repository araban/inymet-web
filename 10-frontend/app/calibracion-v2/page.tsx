import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Atom } from "lucide-react";
import { SolarSystem } from "@/components/sections/SolarSystem";

export const metadata: Metadata = {
  title: "Sistema Solar Metrológico — Concepto Visual | INyMET",
  description:
    "Vista previa interactiva de los 11 laboratorios de calibración de INyMET. Haz hover sobre cada esfera para explorar el alcance de acreditación.",
  robots: { index: false, follow: false },
};

// ─── Stats strip ─────────────────────────────────────────────────────────────
const STATS = [
  { value: "11", label: "Laboratorios acreditados" },
  { value: "+189", label: "Empresas certificadas" },
  { value: "<9h", label: "Entrega del certificado" },
  { value: "IAS CL-101", label: "Acreditación oficial" },
] as const;

// ─── Page ────────────────────────────────────────────────────────────────────
export default function CalibracionV2Page() {
  return (
    <>
      {/* ── Preview banner ─────────────────────────────────────────── */}
      <div className="bg-accent-600 text-white text-center py-2 px-4 text-xs font-semibold tracking-wide">
        VISTA PREVIA EXPERIMENTAL — Concepto visual · Esta ruta no está en
        producción &nbsp;·&nbsp;
        <Link
          href="/calibracion"
          className="underline underline-offset-2 hover:no-underline"
        >
          Ver página actual →
        </Link>
      </div>

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
          {/* Back link */}
          <Link
            href="/calibracion"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Volver a Calibración
          </Link>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent-500/10 border border-accent-500/25 text-accent-400 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            <Atom className="w-3.5 h-3.5" />
            Concepto Visual Interactivo
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] mb-5">
            El Sistema Solar
            <br />
            <span className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">
              Metrológico
            </span>
          </h1>

          <p className="text-lg text-gray-300 max-w-xl mx-auto mb-3">
            11 laboratorios acreditados en órbita constante.
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

      {/* ── Explainer — why this design ───────────────────────────── */}
      <section className="bg-gray-950/60 border-t border-white/5 py-14">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-xl font-bold text-white mb-6 text-center">
            Por qué este diseño
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 text-sm text-gray-400">
            <div>
              <div className="text-white font-semibold mb-1.5">Amplitud de alcance</div>
              <p>
                Ver los 11 laboratorios simultáneamente comunica la capacidad
                total de INyMET de un solo vistazo, algo imposible con una
                lista de texto.
              </p>
            </div>
            <div>
              <div className="text-white font-semibold mb-1.5">Diferenciación radical</div>
              <p>
                Ningún competidor en metrología industrial en México tiene algo
                comparable. Posiciona a INyMET como líder de vanguardia sin
                decirlo explícitamente.
              </p>
            </div>
            <div>
              <div className="text-white font-semibold mb-1.5">Exploración activa</div>
              <p>
                El usuario interactúa, no solo lee. Eso reduce la tasa de
                rebote y aumenta el tiempo en página antes de decidir qué
                laboratorio necesita.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="bg-[#060d1f] border-t border-white/5 py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-3">
            ¿Listo para proteger su certificación?
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            Cotización sin costo en menos de 24 horas. Sin letra chica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Solicitar cotización
            </Link>
            <Link
              href="/calibracion"
              className="border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Ver página de Calibración actual
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

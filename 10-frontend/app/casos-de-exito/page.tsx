import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Shield, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Casos de Éxito en Calibración Industrial | INyMET México",
  description:
    "Cómo ayudamos a empresas automotrices, farmacéuticas y de alimentos a superar auditorías ISO y reducir riesgos con calibración certificada en México.",
};

const cases = [
  {
    industry: "Automotriz",
    industryBg: "bg-brand-800",
    badgeColor: "bg-brand-50 text-brand-700",
    borderColor: "border-brand-100",
    accentColor: "bg-brand-50",
    challenge: "Planta Tier 1 con auditoría IATF 16949 en 30 días",
    context: "Instrumento clave",
    situation:
      "Una planta de manufactura automotriz Tier 1 detectó que el 40% de sus instrumentos de medición dimensional tenían certificados de calibración vencidos, a 30 días de una auditoría IATF 16949 de renovación.",
    action:
      "Diseñamos un plan de calibración de emergencia. En 15 días hábiles calibramos 127 instrumentos críticos —calibradores, micrómetros, manómetros y sensores de temperatura— emitimos certificados con trazabilidad CENAM y entregamos el expediente completo listo para auditoría.",
    results: [
      { icon: Shield, metric: "0 no conformidades", label: "relacionadas con calibración en auditoría IATF", highlight: true },
      { icon: Clock, metric: "15 días", label: "para calibrar 127 instrumentos en sitio" },
      { icon: TrendingUp, metric: "Certificación renovada", label: "sin observaciones en metrología" },
    ],
    quote: "Llegaron cuando más los necesitábamos. Sin INyMET, hubiéramos tenido una no conformidad mayor en nuestra auditoría de renovación.",
    role: "Gerente de Calidad — Planta automotriz ZMVM",
  },
  {
    industry: "Farmacéutica",
    industryBg: "bg-brand-800",
    badgeColor: "bg-brand-50 text-brand-700",
    borderColor: "border-brand-100",
    accentColor: "bg-brand-50",
    challenge: "Laboratorio farmacéutico con inspección FDA programada",
    context: "Cumplimiento GMP",
    situation:
      "Un laboratorio de manufactura farmacéutica recibió notificación de inspección FDA con 45 días de anticipación. Su programa de calibración no cumplía con los requisitos GMP para incertidumbre de medición ni para trazabilidad metrológica documentada.",
    action:
      "Realizamos una auditoría completa de su sistema de calibración, identificamos 23 equipos críticos sin documentación adecuada y calibramos todo con certificados que incluían cálculo de incertidumbre según GUM, en el formato requerido por FDA 21 CFR.",
    results: [
      { icon: Shield, metric: "Inspección FDA aprobada", label: "sin observaciones en calibración", highlight: true },
      { icon: Clock, metric: "23 equipos críticos", label: "calibrados con documentación GMP completa" },
      { icon: TrendingUp, metric: "100% trazabilidad", label: "documentada para todos los equipos" },
    ],
    quote: "La documentación que entregó INyMET fue exactamente lo que el auditor de FDA necesitaba ver. Profesionales y muy detallados.",
    role: "Director de Aseguramiento de Calidad — Laboratorio farmacéutico, Jalisco",
  },
  {
    industry: "Alimentos",
    industryBg: "bg-brand-800",
    badgeColor: "bg-brand-50 text-brand-700",
    borderColor: "border-brand-100",
    accentColor: "bg-brand-50",
    challenge: "Primera certificación BRC para acceso a mercado europeo",
    context: "Inocuidad alimentaria",
    situation:
      "Una empresa procesadora de alimentos buscaba obtener la certificación BRC Global Standards por primera vez para exportar a Europa. No contaban con un programa formal de calibración ni con registros históricos de ningún instrumento.",
    action:
      "Desarrollamos desde cero su programa de calibración: inventario de 85 instrumentos críticos, definición de intervalos óptimos de calibración, calibración de todos los equipos y creación de un sistema de registros alineado con los requerimientos de BRC.",
    results: [
      { icon: Shield, metric: "Certificación BRC", label: "obtenida en el primer intento", highlight: true },
      { icon: Clock, metric: "85 instrumentos", label: "calibrados con programa documentado" },
      { icon: TrendingUp, metric: "Acceso a Europa", label: "habilitado — nuevos contratos de exportación" },
    ],
    quote: "Sin el programa de calibración que INyMET nos ayudó a construir, no hubiéramos pasado la auditoría BRC. Ahora exportamos a Europa.",
    role: "Gerente de Inocuidad Alimentaria — Empresa de alimentos, Estado de México",
  },
];

const globalMetrics = [
  { value: "+500", label: "Empresas atendidas", sub: "en todo México" },
  { value: "98%", label: "Tasa de aprobación", sub: "en auditorías de clientes" },
  { value: "0", label: "No conformidades", sub: "por calibración en nuestros clientes" },
  { value: "+15", label: "Años de experiencia", sub: "en sectores críticos" },
];

export default function CasosDeExitoPage() {
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

        <div className="relative container-custom max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500/15 border border-accent-500/30 mb-6">
            <span className="text-xs font-bold text-accent-300 uppercase tracking-wide">Resultados comprobados</span>
          </span>
          <h1 className="text-3xl lg:text-5xl font-black mb-5 leading-tight">
            Resultados reales para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300">
              empresas reales
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Casos de éxito de empresas que confiaron en INyMET para proteger
            sus certificaciones y superar auditorías ISO críticas en México.
          </p>
        </div>
      </section>

      {/* Global metrics */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
            {globalMetrics.map((m) => (
              <div key={m.label} className="py-8 px-6 text-center">
                <div className="text-3xl lg:text-4xl font-black text-brand-700 mb-1">{m.value}</div>
                <div className="text-sm font-bold text-gray-800">{m.label}</div>
                <div className="text-xs text-gray-400 mt-0.5">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom space-y-10">
          {cases.map((c) => (
            <div key={c.industry} className={`bg-white rounded-2xl shadow-sm border-2 ${c.borderColor} overflow-hidden`}>
              {/* Header */}
              <div className={`${c.industryBg} px-8 py-6`}>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black text-white/70 uppercase tracking-wider">{c.context}</span>
                  <span className="text-white/30">·</span>
                  <span className="text-xs font-black text-white/70 uppercase tracking-wider">{c.industry}</span>
                </div>
                <h2 className="text-xl lg:text-2xl font-black text-white mt-2">{c.challenge}</h2>
              </div>

              <div className="p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">La situación</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{c.situation}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Lo que hicimos</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{c.action}</p>
                  </div>
                </div>

                {/* Results */}
                <div className={`${c.accentColor} rounded-2xl p-6 mb-6`}>
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-5">Resultados obtenidos</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {c.results.map((r) => (
                      <div key={r.label} className={`flex items-start gap-3 p-4 rounded-xl ${r.highlight ? "bg-white shadow-sm" : ""}`}>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${r.highlight ? "bg-brand-100" : "bg-white"}`}>
                          <r.icon className="w-5 h-5 text-brand-600" />
                        </div>
                        <div>
                          <p className={`font-black text-sm ${r.highlight ? "text-brand-800" : "text-gray-800"}`}>{r.metric}</p>
                          <p className="text-xs text-gray-500 mt-0.5 leading-snug">{r.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="border-l-4 border-gray-200 pl-5">
                  <p className="text-gray-600 text-sm italic leading-relaxed mb-2">"{c.quote}"</p>
                  <p className="text-xs text-gray-400 font-medium">— {c.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[#060d1f]">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            ¿Tu empresa necesita resultados similares?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Cuéntanos tu situación y te decimos exactamente cómo podemos ayudarte antes de tu próxima auditoría.
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
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {["Sin compromiso", "Respuesta en 24h", "Especialista asignado"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent-400" />
                <span className="text-sm text-slate-400">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

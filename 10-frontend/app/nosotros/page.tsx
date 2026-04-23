import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Award, Users, Target, TrendingUp, ArrowRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Quiénes Somos | INyMET — Metrología y Calibración ISO 17025",
  description:
    "Conoce a INyMET: laboratorio acreditado ISO 17025 en México con más de 20 años calibrando instrumentos industriales. Trazabilidad CENAM, servicio a domicilio en 24h.",
  keywords: [
    "laboratorio metrología México",
    "calibración ISO 17025 acreditado",
    "INyMET quiénes somos",
    "empresa metrología industrial México",
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "INyMET — Instrumentación y Metrología",
  url: "https://inymet.com.mx",
  logo: "https://inymet.com.mx/images/logo-inymet.png",
  foundingDate: "2002",
  description:
    "Laboratorio de metrología y calibración certificado ISO 17025 con trazabilidad CENAM. Especialistas en industrias automotriz, farmacéutica y de alimentos en México.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Salvatierra 32, Col. San Bartolo Atepehuacan",
    addressLocality: "Ciudad de México",
    postalCode: "07730",
    addressCountry: "MX",
  },
  telephone: "+52-55-5754-3087",
  email: "ventas@inymet.com.mx",
};

const valores = [
  {
    icon: "🎯",
    title: "Exactitud",
    description:
      "Cada calibración se realiza con patrones trazables al SI y procedimientos documentados. Nuestros certificados son aceptados en auditorías nacionales e internacionales.",
  },
  {
    icon: "⚡",
    title: "Velocidad de Respuesta",
    description:
      "Entregamos certificados en menos de 24 horas para no detener tu producción. Contamos con servicio a domicilio en ZMVM y principales ciudades industriales.",
  },
  {
    icon: "🤝",
    title: "Compromiso",
    description:
      "Somos socios estratégicos de nuestros clientes, no solo proveedores. Asesoramos en la selección de equipos, frecuencias de calibración y gestión metrológica.",
  },
  {
    icon: "🔬",
    title: "Competencia Técnica",
    description:
      "Nuestro equipo cuenta con formación en metrología, ingeniería y calidad. Participamos en intercomparaciones internacionales para garantizar nuestras capacidades.",
  },
];

const hitos = [
  { año: "2002", hito: "Fundación de INyMET en Ciudad de México" },
  { año: "2008", hito: "Primera acreditación ISO 17025 por EMA" },
  { año: "2012", hito: "Expansión a calibración eléctrica y dimensional" },
  { año: "2016", hito: "Incorporación al programa CENAM de trazabilidad" },
  { año: "2019", hito: "Apertura de laboratorio de humedad y flujo" },
  { año: "2022", hito: "Renovación acreditación IAS CL-101 y ampliación de alcance" },
  { año: "2025", hito: "11 marcas líderes en distribución oficial" },
];

const acreditaciones = [
  { sigla: "ISO 17025", desc: "Sistema de Gestión de Laboratorios", entidad: "IAS / EMA", highlight: true },
  { sigla: "CENAM", desc: "Trazabilidad al Sistema Internacional de Unidades", entidad: "Centro Nacional de Metrología", highlight: false },
  { sigla: "IAS CL-101", desc: "Acreditación Internacional de Laboratorio", entidad: "International Accreditation Service", highlight: false },
];

export default function NosotrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#060d1f] text-white py-20 lg:py-28 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(29,78,216,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(29,78,216,0.05) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }} />
        <div aria-hidden className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative container-custom max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500/15 border border-accent-500/30 mb-6">
            <span className="text-xs font-bold text-accent-300 uppercase tracking-wide">Fundados en 2002</span>
          </span>
          <h1 className="text-3xl lg:text-5xl font-black mb-5 leading-tight">
            Más de 20 años garantizando{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300">
              la exactitud de tu medición
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            INyMET es un laboratorio de metrología y calibración acreditado ISO 17025, fundado con la misión de
            ofrecer a la industria mexicana servicios de calibración de clase mundial con tiempos de respuesta líderes.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { value: "+500", label: "Empresas atendidas" },
              { value: "11", label: "Magnitudes calibradas" },
              { value: "24h", label: "Entrega de certificados" },
              { value: "0", label: "NC por calibración" },
            ].map((s) => (
              <div key={s.label} className="bg-white/[0.05] rounded-xl py-4 px-3 text-center border border-white/10">
                <p className="text-2xl font-black text-white mb-0.5">{s.value}</p>
                <p className="text-xs text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misión, Visión, Propósito */}
      <section className="py-16 lg:py-20 bg-white border-b border-gray-100">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "Misión",
                text: "Proveer servicios de calibración y metrología certificados que reduzcan los riesgos de auditoría y garanticen la trazabilidad de las mediciones en la industria mexicana, con tiempos de respuesta que no detengan la producción.",
              },
              {
                icon: "🚀",
                title: "Visión",
                text: "Ser el laboratorio de metrología de referencia en México para la industria de manufactura avanzada, reconocidos por nuestra exactitud, velocidad de respuesta y acompañamiento técnico especializado.",
              },
              {
                icon: "💡",
                title: "Propósito",
                text: "Eliminar el riesgo oculto de la mala medición. Cada instrumento calibrado correctamente protege la seguridad del producto, la salud del consumidor y la continuidad del negocio de nuestros clientes.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border-2 border-gray-100 bg-white p-8 border-l-4 border-l-brand-700">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h2 className="text-xl font-black text-gray-900 mb-3">{item.title}</h2>
                <p className="text-gray-600 leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acreditaciones */}
      <section className="py-16 lg:py-20 bg-gray-50 border-b border-gray-100">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-10">
            <span className="section-label">Credenciales verificables</span>
            <h2 className="section-title">
              Acreditaciones que avalan cada certificado
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Nuestros certificados de calibración son reconocidos en auditorías nacionales e
              internacionales porque están respaldados por acreditaciones verificables.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {acreditaciones.map((ac) => (
              <div key={ac.sigla} className={`rounded-2xl p-6 text-center border-2 ${ac.highlight ? "bg-brand-700 border-brand-600 text-white" : "bg-white border-gray-100"}`}>
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${ac.highlight ? "bg-white/15" : "bg-brand-50"}`}>
                  <Award className={`w-7 h-7 ${ac.highlight ? "text-white" : "text-brand-600"}`} />
                </div>
                <div className={`text-2xl font-black mb-1 ${ac.highlight ? "text-white" : "text-brand-700"}`}>{ac.sigla}</div>
                <div className={`text-sm font-semibold mb-1 ${ac.highlight ? "text-white/90" : "text-gray-700"}`}>{ac.desc}</div>
                <div className={`text-xs ${ac.highlight ? "text-white/70" : "text-gray-400"}`}>{ac.entidad}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 lg:py-20 bg-white border-b border-gray-100">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-10">
            <span className="section-label">Lo que nos guía</span>
            <h2 className="section-title">Nuestros valores</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {valores.map((v) => (
              <div key={v.title} className="rounded-2xl border-2 border-brand-100 bg-brand-50 p-7 flex gap-5 hover:shadow-sm transition-shadow">
                <div className="text-3xl flex-shrink-0 mt-1">{v.icon}</div>
                <div>
                  <h3 className="text-lg font-black text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16 lg:py-20 bg-gray-50 border-b border-gray-100">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <span className="section-label">Nuestra trayectoria</span>
            <h2 className="section-title">Más de dos décadas en metrología</h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-200 md:-translate-x-0.5" />
            <div className="space-y-8">
              {hitos.map((h, idx) => (
                <div
                  key={h.año}
                  className={`relative flex gap-6 md:gap-0 ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center`}
                >
                  <div className={`flex-1 ${idx % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"} pl-12 md:pl-0`}>
                    <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                      <div className="text-brand-600 font-black text-sm mb-1">{h.año}</div>
                      <div className="text-gray-700 text-sm leading-relaxed">{h.hito}</div>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 bg-brand-700 rounded-full border-4 border-white shadow flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipo photo */}
      <section className="py-16 lg:py-20 bg-white border-b border-gray-100">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-10">
            <span className="section-label">Las personas detrás</span>
            <h2 className="section-title">El equipo que firma cada certificado</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Ingenieros y técnicos certificados con más de 25 años acumulados de experiencia en metrología industrial.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              src="/images/grupo-inymet.jpg"
              alt="Equipo de técnicos e ingenieros del laboratorio INyMET"
              width={1900}
              height={560}
              className="w-full object-cover object-center"
            />
          </div>
          <p className="text-center text-xs text-gray-400 mt-3">Equipo INyMET · Laboratorio de Metrología y Calibración · CDMX</p>
        </div>
      </section>

      {/* Capacidades */}
      <section className="py-16 lg:py-20 bg-gray-50 border-b border-gray-100">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-label">Lo que nos distingue</span>
              <h2 className="text-2xl lg:text-3xl font-black text-gray-900 mb-5">
                Capacidades que garantizan resultados
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                Laboratorios especializados con control ambiental, equipos patrones de referencia
                y personal calificado para garantizar la exactitud en 11 magnitudes de medición.
              </p>
              <ul className="space-y-3">
                {[
                  "Laboratorio con control de temperatura y humedad 24/7",
                  "Patrones de referencia trazables a CENAM y NIST",
                  "Servicio a domicilio en ZMVM y área metropolitana",
                  "Sistema de gestión de calidad certificado ISO 17025",
                  "Calibración en más de 500 tipos de instrumentos",
                  "Tiempos de entrega estándar: 24h — urgente: 4h",
                  "Soporte técnico postventa incluido",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Award className="w-7 h-7 text-brand-600" />, valor: "ISO 17025", label: "Acreditación vigente" },
                { icon: <Users className="w-7 h-7 text-brand-600" />, valor: "+500", label: "Clientes activos" },
                { icon: <Target className="w-7 h-7 text-brand-600" />, valor: "11", label: "Magnitudes calibradas" },
                { icon: <TrendingUp className="w-7 h-7 text-brand-600" />, valor: "24h", label: "Entrega estándar" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-6 text-center border-2 border-brand-50 hover:border-brand-200 transition-colors">
                  <div className="flex justify-center mb-3">{stat.icon}</div>
                  <div className="text-2xl font-black text-brand-700 mb-1">{stat.valor}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[#060d1f]">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl lg:text-4xl font-black text-white mb-4">
            El laboratorio que convierte tus auditorías en victorias.
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Solicita tu cotización sin compromiso. Respondemos en menos de 2 horas en horario hábil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-400 text-white font-bold rounded-xl transition-all shadow-lg hover:-translate-y-px">
              Solicitar cotización
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/calibracion"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/[0.07] hover:bg-white/[0.13] text-white font-semibold rounded-xl border border-white/15 transition-all">
              <Shield className="w-4 h-4" />
              Ver servicios de calibración
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

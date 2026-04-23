import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Venta de Instrumentación Industrial | INyMET — Distribución Oficial",
  description:
    "Distribuidores oficiales de Fluke, DRUCK, Rotronic, Alicat Scientific, Chroma y más. Instrumentos de medición industriales con soporte técnico y calibración certificada incluida.",
  keywords: [
    "venta instrumentos medición México",
    "distribuidores Fluke México",
    "distribuidores DRUCK México",
    "equipos metrología industriales",
    "instrumentación industrial México",
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "INyMET Instrumentación Industrial",
  description: "Distribución oficial de instrumentos de medición de las principales marcas mundiales en México",
  url: "https://inymet.com.mx/instrumentacion",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ciudad de México",
    addressCountry: "MX",
  },
};

const marcas = [
  {
    nombre: "Fluke",
    slug: "fluke",
    tagline: "El estándar mundial en instrumentos de medición eléctrica",
    descripcion:
      "Multímetros, pinzas amperimétricas, termómetros infrarrojos, osciloscopios portátiles y calibradores de proceso. La marca más confiable para mantenimiento industrial.",
    categorias: ["Multímetros", "Termómetros IR", "Calibradores de proceso", "Pinzas amperimétricas", "Osciloscopios"],
    color: "bg-yellow-50 border-yellow-200",
    accent: "text-yellow-700",
    badge: "bg-yellow-100 text-yellow-800",
  },
  {
    nombre: "DRUCK",
    slug: "druck",
    tagline: "Referencia mundial en sensores y calibradores de presión",
    descripcion:
      "Sensores de presión de alta exactitud, calibradores de presión portátiles y de referencia, transmisores inteligentes para aplicaciones críticas en industria y aeroespacial.",
    categorias: ["Sensores de presión", "Calibradores portátiles", "Módulos de presión", "Transmisores inteligentes"],
    color: "bg-blue-50 border-blue-200",
    accent: "text-blue-700",
    badge: "bg-blue-100 text-blue-800",
  },
  {
    nombre: "Rotronic",
    slug: "rotronic",
    tagline: "Instrumentos de humedad y temperatura de precisión suiza",
    descripcion:
      "Transmisores, data loggers y sondas de humedad relativa y temperatura para industria farmacéutica, alimentaria, salas limpias y procesos industriales controlados.",
    categorias: ["Transmisores HR/T", "Data loggers", "Sondas de humedad", "Sistemas de monitoreo"],
    color: "bg-green-50 border-green-200",
    accent: "text-green-700",
    badge: "bg-green-100 text-green-800",
  },
  {
    nombre: "Alicat Scientific",
    slug: "alicat",
    tagline: "Controladores de flujo másico de alta precisión",
    descripcion:
      "Controladores y medidores de flujo másico para gases y líquidos. Respuesta ultrarrápida, amplio rango dinámico y comunicación MODBUS/RS-232 para integración en proceso.",
    categorias: ["MFC para gases", "Medidores flujo másico", "Controladores de líquidos", "Sistemas multi-gas"],
    color: "bg-purple-50 border-purple-200",
    accent: "text-purple-700",
    badge: "bg-purple-100 text-purple-800",
  },
  {
    nombre: "Chroma",
    slug: "chroma",
    tagline: "Fuentes de poder y cargas electrónicas de precisión",
    descripcion:
      "Fuentes de voltaje y corriente programables, cargas electrónicas, analizadores de potencia y sistemas de prueba para electrónica de potencia, baterías y dispositivos eléctricos.",
    categorias: ["Fuentes DC programables", "Cargas electrónicas", "Analizadores de potencia", "Sistemas ATE"],
    color: "bg-red-50 border-red-200",
    accent: "text-red-700",
    badge: "bg-red-100 text-red-800",
  },
  {
    nombre: "Teledyne LeCroy",
    slug: "teledyne-lecroy",
    tagline: "Osciloscopios y analizadores de señal de alta velocidad",
    descripcion:
      "Osciloscopios digitales de alto rendimiento, analizadores de protocolos, sondas especializadas y software de análisis para ingeniería de diseño y validación.",
    categorias: ["Osciloscopios digitales", "Analizadores de protocolo", "Generadores de señal", "Sondas de alta BW"],
    color: "bg-indigo-50 border-indigo-200",
    accent: "text-indigo-700",
    badge: "bg-indigo-100 text-indigo-800",
  },
  {
    nombre: "Delta OHM",
    slug: "delta-ohm",
    tagline: "Instrumentos ambientales y de confort térmico",
    descripcion:
      "Equipos para medición de calidad del aire, ruido, iluminación, confort térmico (WBGT), radiación UV y parámetros ambientales para seguridad e higiene industrial.",
    categorias: ["Sonómetros", "Luxómetros", "Medidores WBGT", "Calidad del aire"],
    color: "bg-teal-50 border-teal-200",
    accent: "text-teal-700",
    badge: "bg-teal-100 text-teal-800",
  },
  {
    nombre: "Hart Scientific",
    slug: "hart-scientific",
    tagline: "Patrones de referencia para temperatura de alta exactitud",
    descripcion:
      "Baños de temperatura de alta estabilidad, calibradores de pozo seco, termómetros de referencia y sistemas de calibración de temperatura para laboratorios acreditados.",
    categorias: ["Baños de temperatura", "Calibradores de pozo seco", "Termómetros de referencia", "Hornos de sal"],
    color: "bg-orange-50 border-orange-200",
    accent: "text-orange-700",
    badge: "bg-orange-100 text-orange-800",
  },
  {
    nombre: "Pearson Electronics",
    slug: "pearson",
    tagline: "Transformadores de corriente de banda ancha",
    descripcion:
      "Transformadores de corriente de banda ancha para medición de pulsos, corrientes de alta frecuencia y aplicaciones de potencia pulsada en investigación e industria.",
    categorias: ["CT banda ancha", "Sondas de corriente pulsada", "Transformadores RF"],
    color: "bg-slate-50 border-slate-200",
    accent: "text-slate-700",
    badge: "bg-slate-100 text-slate-800",
  },
  {
    nombre: "Rion",
    slug: "rion",
    tagline: "Sonómetros y vibrómetros de precisión japonesa",
    descripcion:
      "Sonómetros clase 1 y 2, analizadores de ruido y vibración, calibradores acústicos y sistemas de monitoreo ambiental para cumplimiento normativo y control de calidad.",
    categorias: ["Sonómetros clase 1/2", "Vibrómetros", "Calibradores acústicos", "Analizadores FFT"],
    color: "bg-pink-50 border-pink-200",
    accent: "text-pink-700",
    badge: "bg-pink-100 text-pink-800",
  },
  {
    nombre: "TROTEC",
    slug: "trotec",
    tagline: "Instrumentos de diagnóstico y monitoreo de edificios",
    descripcion:
      "Instrumentos para detección de humedad en construcción, termómetros de infrarrojo, detectores de gas y equipos de diagnóstico para mantenimiento de instalaciones.",
    categorias: ["Detectores de humedad", "Cámaras térmicas", "Detectores de gas", "Termómetros IR"],
    color: "bg-amber-50 border-amber-200",
    accent: "text-amber-700",
    badge: "bg-amber-100 text-amber-800",
  },
];

const ventajas = [
  "Distribución oficial con garantía de fábrica",
  "Soporte técnico especializado pre y postventa",
  "Calibración certificada ISO 17025 disponible",
  "Demostraciones y pruebas en sitio",
  "Financiamiento y arrendamiento disponible",
  "Entrega a nivel nacional",
];

export default function InstrumentacionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#060d1f] text-white py-20 lg:py-28 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(29,78,216,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(29,78,216,0.05) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }} />
        <div aria-hidden className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-600/15 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative container-custom max-w-5xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500/15 border border-accent-500/30 mb-6">
            <span className="text-xs font-bold text-accent-300 uppercase tracking-wide">Distribución oficial · 11 marcas líderes</span>
          </span>
          <div className="max-w-3xl mb-8">
            <h1 className="text-3xl lg:text-5xl font-black mb-5 leading-tight">
              Instrumentación Industrial de las{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300">
                Mejores Marcas del Mundo
              </span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Somos distribuidores oficiales de 11 fabricantes líderes. Cada equipo incluye garantía de fábrica,
              soporte técnico especializado y la opción de calibración certificada ISO 17025.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {marcas.map((m) => (
              <a
                key={m.slug}
                href={`#${m.slug}`}
                className="bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
              >
                {m.nombre}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="bg-brand-50 border-b border-brand-100 py-6">
        <div className="container-custom">
          <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center">
            {ventajas.map((v) => (
              <div key={v} className="flex items-center gap-2 text-sm text-brand-800">
                <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0" />
                {v}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands catalog */}
      <section className="section-padding bg-white">
        <div className="container-custom space-y-10">
          {marcas.map((marca, idx) => (
            <div
              key={marca.slug}
              id={marca.slug}
              className="rounded-2xl border p-8 lg:p-10 bg-white border-gray-100 scroll-mt-20"
            >
              <div className={`flex flex-col lg:flex-row gap-8 ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-brand-700 mb-1">{marca.nombre}</h2>
                      <p className="text-sm font-medium text-gray-600 italic">{marca.tagline}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{marca.descripcion}</p>
                  <Link
                    href={`/contacto?marca=${marca.slug}`}
                    className="inline-flex items-center gap-2 btn-primary text-sm py-2.5"
                  >
                    Solicitar cotización {marca.nombre}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Líneas de producto disponibles
                  </h3>
                  <ul className="space-y-2.5">
                    {marca.categorias.map((cat) => (
                      <li key={cat} className="flex items-center gap-2.5 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0" />
                        {cat}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-5 border-t border-black/5">
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-50 text-brand-700 border border-brand-100">
                      ✓ Distribuidor oficial autorizado
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            ¿No encuentras el equipo que buscas?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Contamos con acceso a catálogos completos de cada fabricante. Contáctanos con las
            especificaciones del equipo que necesitas y te cotizamos en menos de 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="btn-primary">
              Solicitar cotización de equipo
            </Link>
            <Link href="/calibracion" className="btn-outline">
              Ver servicios de calibración
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

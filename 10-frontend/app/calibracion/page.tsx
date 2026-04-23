import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import QuoteForm from "@/components/forms/QuoteForm";
import { CheckCircle, ArrowRight, Clock, Award } from "lucide-react";

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
  description: "Servicios de calibración de instrumentos industriales con certificados ISO 17025 y trazabilidad CENAM. 11 laboratorios acreditados en México.",
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
    itemListElement: [
      "Calibración de Temperatura",
      "Calibración de Presión",
      "Calibración Eléctrica",
      "Metrología Dimensional",
      "Humedad y Punto de Rocío",
      "Par Torsional",
      "Frecuencia y Tiempo",
      "Vibraciones y Aceleración",
      "Volumen y Capacidad",
      "Caudal de Líquidos",
      "Caudal de Gases",
    ].map((name, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: { "@type": "Service", name },
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

const services = [
  {
    id: "temperatura",
    title: "Calibración de Temperatura",
    icon: "🌡️",
    description:
      "Calibramos termómetros, termocoplas tipo J/K/T/E/R/S, RTDs (Pt100, Pt1000), termistores y sistemas de registro de temperatura.",
    range: "Rango: -200°C a +1,200°C",
    equipment: [
      "Termómetros de vidrio y digitales",
      "Termocoplas industriales (tipo J, K, T, E, R, S)",
      "RTDs — Pt100 y Pt1000",
      "Termistores",
      "Transmisores de temperatura",
      "Data loggers y registradores",
      "Hornos y estufas de laboratorio",
      "Incubadoras y cámaras ambientales",
    ],
    norms: ["ISO 17025", "ASTM E220", "ITS-90"],
    color: "bg-red-50 border-red-100",
    badge: "bg-red-100 text-red-700",
  },
  {
    id: "presion",
    title: "Calibración de Presión",
    icon: "⚙️",
    description:
      "Calibración de manómetros, vacuómetros, transmisores de presión diferencial y sensores de proceso con trazabilidad CENAM.",
    range: "Rango: Vacío a 700 bar",
    equipment: [
      "Manómetros Bourdon",
      "Vacuómetros y compuesto-manómetros",
      "Transmisores de presión diferencial",
      "Sensores piezoresistivos",
      "Reguladores de presión",
      "Presostatos industriales",
      "Calibradores de presión portátiles",
    ],
    norms: ["ISO 17025", "ASME B40.100", "EN 837"],
    color: "bg-blue-50 border-blue-100",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    id: "electricos",
    title: "Calibración Eléctrica",
    icon: "⚡",
    description:
      "Calibración de multímetros, fuentes de voltaje, amperímetros, vatímetros y analizadores de red eléctrica.",
    range: "DC, AC hasta 1,000V / 20A",
    equipment: [
      "Multímetros digitales y analógicos",
      "Fuentes de voltaje y corriente DC",
      "Osciloscopios",
      "Pinzas amperimétricas",
      "Vatímetros y analizadores de potencia",
      "Puentes RLC e impedancímetros",
      "Generadores de señal",
      "Calibradores de proceso 4–20 mA",
    ],
    norms: ["ISO 17025", "IEC 61010", "ANSI/NCSL Z540"],
    color: "bg-yellow-50 border-yellow-100",
    badge: "bg-yellow-100 text-yellow-700",
  },
  {
    id: "dimensional",
    title: "Metrología Dimensional",
    icon: "📐",
    description:
      "Calibración de instrumentos de medición dimensional: calibradores, micrómetros, bloques patrón y equipos de verificación.",
    range: "Rango: 0.001 mm a 1,000 mm",
    equipment: [
      "Calibradores vernier y digitales",
      "Micrómetros exteriores e interiores",
      "Bloques patrón (gauge blocks)",
      "Comparadores de carátula y digitales",
      "Altímetros de trazo",
      "Goniómetros",
      "Niveles de precisión",
      "Cintas métricas industriales",
    ],
    norms: ["ISO 17025", "ISO 3650", "ASME B89"],
    color: "bg-green-50 border-green-100",
    badge: "bg-green-100 text-green-700",
  },
  {
    id: "humedad",
    title: "Humedad y Punto de Rocío",
    icon: "💧",
    description:
      "Calibración de higrómetros, psicrómetros, sensores capacitivos y analizadores de punto de rocío para ambientes controlados y procesos industriales.",
    range: "0 % HR a 100 % HR | -60°C a +60°C td",
    equipment: [
      "Higrómetros capacitivos y resistivos",
      "Psicrómetros de aspiración",
      "Transmisores de humedad y temperatura",
      "Analizadores de punto de rocío",
      "Data loggers de humedad relativa",
      "Sondas de humedad para cámaras limpias",
      "Termohigrómetros portátiles",
      "Sensores de humedad absoluta",
    ],
    norms: ["ISO 17025", "ISO/IEC 17043", "ASTM E337"],
    color: "bg-cyan-50 border-cyan-100",
    badge: "bg-cyan-100 text-cyan-700",
  },
  {
    id: "par-torsional",
    title: "Par Torsional",
    icon: "🔩",
    description:
      "Calibración de torquímetros, llaves dinamométricas, transductores de par y bancos de prueba para aplicaciones industriales y automotrices.",
    range: "0.5 N·m a 2,000 N·m",
    equipment: [
      "Llaves dinamométricas click y de escala",
      "Torquímetros digitales y analógicos",
      "Transductores de par rotativo",
      "Destornilladores de torque",
      "Medidores de par de apriete",
      "Multiplicadores de par",
      "Bancos de calibración de torque",
    ],
    norms: ["ISO 17025", "ISO 6789", "DIN 51309"],
    color: "bg-orange-50 border-orange-100",
    badge: "bg-orange-100 text-orange-700",
  },
  {
    id: "frecuencia-tiempo",
    title: "Frecuencia y Tiempo",
    icon: "⏱️",
    description:
      "Calibración de contadores de frecuencia, relojes de tiempo real, generadores de señal y equipos de sincronización para aplicaciones de precisión.",
    range: "DC a 3 GHz | Exactitud: 1×10⁻⁹",
    equipment: [
      "Contadores de frecuencia universales",
      "Generadores de función y RF",
      "Relojes y cronómetros de precisión",
      "Osciladores de cuarzo y OCXO",
      "Temporizadores industriales",
      "Medidores de intervalo de tiempo",
      "Analizadores de espectro (frecuencia)",
    ],
    norms: ["ISO 17025", "BIPM", "NIST TN 1337"],
    color: "bg-purple-50 border-purple-100",
    badge: "bg-purple-100 text-purple-700",
  },
  {
    id: "vibraciones",
    title: "Vibraciones y Aceleración",
    icon: "〰️",
    description:
      "Calibración de acelerómetros, vibrómetros y sensores sísmicos para mantenimiento predictivo, control de calidad y monitoreo estructural.",
    range: "0.1 Hz a 10 kHz | hasta 200 g",
    equipment: [
      "Acelerómetros piezoeléctricos",
      "Vibrómetros láser (LDV)",
      "Sensores IEPE / ICP",
      "Acelerómetros MEMS",
      "Analizadores de vibraciones",
      "Medidores de velocidad y desplazamiento",
      "Sistemas de monitoreo de maquinaria",
    ],
    norms: ["ISO 17025", "ISO 16063-11", "ANSI S2.2"],
    color: "bg-teal-50 border-teal-100",
    badge: "bg-teal-100 text-teal-700",
  },
  {
    id: "volumen",
    title: "Volumen y Capacidad",
    icon: "🧪",
    description:
      "Calibración de material volumétrico de laboratorio, pipetas, buretas, matraces y dispensadores automáticos para industria farmacéutica y alimentaria.",
    range: "1 µL a 50 L",
    equipment: [
      "Pipetas monocanal y multicanal",
      "Micropipetas de precisión",
      "Buretas de vidrio clase A/B",
      "Matraces aforados",
      "Probetas graduadas",
      "Dispensadores y diluidores automáticos",
      "Pipetas de pistón de precisión",
    ],
    norms: ["ISO 17025", "ISO 8655", "ASTM E542"],
    color: "bg-indigo-50 border-indigo-100",
    badge: "bg-indigo-100 text-indigo-700",
  },
  {
    id: "caudal-liquidos",
    title: "Caudal de Líquidos",
    icon: "🌊",
    description:
      "Calibración de caudalímetros de líquidos por métodos gravimétrico y volumétrico, incluyendo medidores Coriolis, electromagnéticos y de turbina.",
    range: "0.01 L/min a 1,000 L/min",
    equipment: [
      "Caudalímetros Coriolis",
      "Medidores electromagnéticos",
      "Caudalímetros de turbina",
      "Rotámetros (medidores de área variable)",
      "Medidores de desplazamiento positivo",
      "Caudalímetros ultrasónicos",
      "Medidores de placa orificio",
    ],
    norms: ["ISO 17025", "ISO 4185", "OIML R 117"],
    color: "bg-sky-50 border-sky-100",
    badge: "bg-sky-100 text-sky-700",
  },
  {
    id: "caudal-gases",
    title: "Caudal de Gases",
    icon: "💨",
    description:
      "Calibración de caudalímetros y controladores de flujo másico de gases, rotámetros de gas y medidores de caudal para gases industriales y especiales.",
    range: "0.1 sccm a 1,000 slm",
    equipment: [
      "Controladores de flujo másico (MFC)",
      "Medidores de flujo másico térmicos",
      "Rotámetros de gas calibrados",
      "Caudalímetros de gas ultrasónicos",
      "Medidores de pistón seco",
      "Medidores de burbuja de jabón",
      "Controladores de flujo para gases especiales",
    ],
    norms: ["ISO 17025", "ISO 9300", "OIML R 137"],
    color: "bg-slate-50 border-slate-200",
    badge: "bg-slate-100 text-slate-700",
  },
];

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
            {services.map((s) => (
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
      <section className="section-padding bg-white">
        <div className="container-custom space-y-10">
          {services.map((service, idx) => (
            <div
              key={service.id}
              id={service.id}
              className="rounded-2xl border bg-white border-gray-100 scroll-mt-24"
            >
              <div className={`flex flex-col lg:flex-row gap-0 ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>

                {/* Content */}
                <div className="flex-1 p-8 lg:p-10">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-50 rounded-2xl text-2xl flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h2 className="text-xl lg:text-2xl font-black text-gray-900">{service.title}</h2>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {service.norms.map((n) => (
                          <span key={n} className="bg-white border border-gray-200 text-xs font-semibold text-gray-600 px-2.5 py-0.5 rounded-full">
                            {n}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{service.description}</p>
                  <div className="inline-block bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 mb-6">
                    📏 {service.range}
                  </div>
                  <Link
                    href={`/contacto?servicio=${service.id}`}
                    className="btn-primary inline-flex items-center gap-2 text-sm py-2.5"
                  >
                    Cotizar {service.title}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Equipment list */}
                <div className="flex-1 p-8 lg:p-10 bg-white/50 border-t lg:border-t-0 lg:border-l border-current border-opacity-10">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                    Instrumentos que calibramos
                  </h3>
                  <ul className="space-y-2.5">
                    {service.equipment.map((eq) => (
                      <li key={eq} className="flex items-center gap-2.5 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                        {eq}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

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

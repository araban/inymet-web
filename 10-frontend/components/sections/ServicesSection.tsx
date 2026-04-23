import Link from "next/link";
import { ArrowRight } from "lucide-react";

const labs = [
  { icon: "🌡️", title: "Temperatura",        range: "-200°C a +1,200°C",  href: "/calibracion#temperatura" },
  { icon: "⚙️",  title: "Presión",            range: "Vacío a 700 bar",    href: "/calibracion#presion" },
  { icon: "⚡",  title: "Eléctrica",          range: "DC · AC hasta 1 kV", href: "/calibracion#electricos" },
  { icon: "📐",  title: "Dimensional",        range: "0.001–1,000 mm",     href: "/calibracion#dimensional" },
  { icon: "💧",  title: "Humedad",            range: "0–100% HR",          href: "/calibracion#humedad" },
  { icon: "🔩",  title: "Par Torsional",      range: "0.5–2,000 N·m",      href: "/calibracion#par-torsional" },
  { icon: "⏱️",  title: "Frecuencia / Tiempo",range: "DC a 3 GHz",         href: "/calibracion#frecuencia-tiempo" },
  { icon: "〰️",  title: "Vibraciones",        range: "0.1 Hz–10 kHz",      href: "/calibracion#vibraciones" },
  { icon: "🧪",  title: "Volumen",            range: "1 µL–50 L",          href: "/calibracion#volumen" },
  { icon: "🌊",  title: "Caudal Líquidos",    range: "0.01–1,000 L/min",   href: "/calibracion#caudal-liquidos" },
  { icon: "💨",  title: "Caudal Gases",       range: "0.1 sccm–1,000 slm", href: "/calibracion#caudal-gases" },
];

export default function ServicesSection() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50 border-t border-gray-100">
      <div className="container-custom">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10">
          <div>
            <span className="section-label">11 laboratorios acreditados ISO 17025</span>
            <h2 className="section-title">
              Calibramos cualquier instrumento{" "}
              <span className="text-brand-600">de tu planta</span>
            </h2>
            <p className="text-gray-500 text-base mt-3 max-w-xl">
              Trazabilidad CENAM en todas las magnitudes. Certificados aceptados en auditorías
              ISO 9001, IATF 16949, GMP, BRC y FDA sin excepción.
            </p>
          </div>
          <Link
            href="/calibracion"
            className="hidden lg:inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700 transition-colors flex-shrink-0 bg-white border border-brand-200 px-4 py-2 rounded-xl hover:bg-brand-50"
          >
            Ver todos los laboratorios <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 mb-8">
          {labs.map((lab) => (
            <Link
              key={lab.title}
              href={lab.href}
              className="group flex flex-col items-center text-center gap-2 bg-white border-2 border-gray-100 hover:border-brand-300 rounded-2xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="text-2xl">{lab.icon}</span>
              <span className="text-sm font-black text-gray-900 leading-tight">{lab.title}</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-50 text-brand-700">
                {lab.range}
              </span>
            </Link>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-sm text-gray-600 text-center sm:text-left">
            <span className="font-bold text-gray-900">¿No ves tu instrumento?</span>{" "}
            Calibramos más de 500 tipos de equipos. Consulta disponibilidad.
          </p>
          <Link
            href="/contacto"
            className="btn-primary text-sm py-2.5 px-6 flex-shrink-0 inline-flex items-center gap-2"
          >
            Consultar disponibilidad <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

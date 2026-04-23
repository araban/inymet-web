import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const industries = [
  {
    name: "Automotriz",
    href: "/industrias/automotriz",
    icon: "🏭",
    standards: ["IATF 16949", "ISO 9001", "MSA", "PPAP"],
    benefit: "Cero no conformidades en auditorías IATF",
    description:
      "Calibramos instrumentos críticos de línea con tiempos de respuesta express y certificados válidos para auditorías IATF 16949 y análisis de sistemas de medición (MSA).",
    wins: [
      "Cero interrupciones en ciclo de manufactura",
      "Certificados aceptados en PPAP y APQP",
      "Reportes de incertidumbre para Gauge R&R",
      "Servicio a domicilio en planta automotriz",
    ],
    num: "01",
  },
  {
    name: "Farmacéutica",
    href: "/industrias/farmaceutica",
    icon: "💊",
    standards: ["GMP", "NOM-059", "FDA 21 CFR", "COFEPRIS"],
    benefit: "Cumplimiento regulatorio garantizado",
    description:
      "Registros de calibración auditables con cadena de custodia completa para COFEPRIS, FDA y auditorías GMP internacionales. Trazabilidad completa al SI vía CENAM.",
    wins: [
      "Documentación lista para COFEPRIS y FDA",
      "Trazabilidad completa al SI vía CENAM",
      "Registro de incertidumbre en cada punto calibrado",
      "Historial de calibración para cada lote de producción",
    ],
    num: "02",
  },
  {
    name: "Alimentos",
    href: "/industrias/alimentos",
    icon: "🍃",
    standards: ["BRC", "FSSC 22000", "HACCP", "SQF"],
    benefit: "Inocuidad y trazabilidad de proceso",
    description:
      "Calibramos todos los instrumentos críticos de planta con certificados válidos para BRC, SQF, FSSC 22000 y FDA. Control certificado de temperatura y proceso.",
    wins: [
      "Válido para auditorías BRC e FSSC 22000",
      "Control certificado de temperatura y peso en planta",
      "Historial de calibración para programas HACCP",
      "Certificados aceptados por auditores internacionales",
    ],
    num: "03",
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
      <div className="container-custom">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <div>
            <span className="section-label">Especialización sectorial</span>
            <h2 className="section-title">
              Conocemos las normas de tu industria.{" "}
              <span className="text-gray-400 font-normal text-2xl lg:text-3xl block mt-1">
                No somos un laboratorio genérico.
              </span>
            </h2>
          </div>
          <Link
            href="/contacto"
            className="hidden lg:inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700 transition-colors flex-shrink-0 bg-brand-50 border border-brand-200 px-4 py-2 rounded-xl"
          >
            Hablar con un especialista <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="group relative bg-white rounded-2xl border-2 border-gray-100 hover:border-brand-200 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl"
            >
              {/* Header — navy for all, differentiated by number */}
              <div className="bg-brand-800 px-8 pt-8 pb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl">
                    {ind.icon}
                  </div>
                  <span className="text-5xl font-black text-white/10 select-none">{ind.num}</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-1">{ind.name}</h3>
                <p className="text-accent-300 text-sm font-semibold">✓ {ind.benefit}</p>
              </div>

              {/* Standards badges */}
              <div className="px-8 pt-5 pb-3 flex flex-wrap gap-1.5 border-b border-gray-100">
                {ind.standards.map((s) => (
                  <span key={s} className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-100">
                    {s}
                  </span>
                ))}
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{ind.description}</p>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {ind.wins.map((w) => (
                    <li key={w} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                      {w}
                    </li>
                  ))}
                </ul>

                <Link
                  href={ind.href}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 hover:text-brand-700 transition-colors group-hover:gap-2.5 border-t border-gray-100 pt-4"
                >
                  Ver solución para {ind.name}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center lg:hidden">
          <Link href="/contacto" className="btn-primary inline-flex items-center gap-2">
            Hablar con un especialista <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

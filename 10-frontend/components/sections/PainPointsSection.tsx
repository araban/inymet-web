import Link from "next/link";
import { XCircle, Clock, TrendingDown, ArrowRight } from "lucide-react";

const painPoints = [
  {
    icon: XCircle,
    problem: "Auditorías ISO fallidas",
    description:
      "Un instrumento mal calibrado puede reprobar toda tu auditoría y generar no conformidades mayores. Las consecuencias: detención de operaciones, re-auditorías costosas y riesgo de perder la certificación.",
    impact: "Hasta 6 meses de retrasos operativos",
    solution: "Certificados ISO 17025 aceptados directamente por auditores nacionales e internacionales.",
  },
  {
    icon: Clock,
    problem: "Paros de producción costosos",
    description:
      "Cuando tus instrumentos críticos están fuera de especificación, la línea se detiene. Cada hora de paro tiene un costo enorme. Los laboratorios lentos no pueden responderte a tiempo.",
    impact: "Miles de pesos por hora de paro",
    solution: "Certificados emitidos en menos de 24 horas. Servicio express y a domicilio en ZMVM.",
  },
  {
    icon: TrendingDown,
    problem: "Costos ocultos de mala calibración",
    description:
      "Los instrumentos descalibrados provocan productos fuera de especificación, scrap, devoluciones y reprocesos. El verdadero costo se esconde en tu cadena de valor y raramente se cuantifica.",
    impact: "2–5% de merma productiva evitable",
    solution: "Calibración preventiva planificada que elimina desviaciones antes de que afecten tu producción.",
  },
];

export default function PainPointsSection() {
  return (
    <section className="bg-white py-16 lg:py-24 border-b border-gray-100">
      <div className="container-custom">

        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-label">¿Te suena familiar?</span>
          <h2 className="section-title">
            Los problemas que enfrentan los{" "}
            <span className="text-brand-600">gerentes de calidad</span>{" "}
            en México
          </h2>
          <p className="text-gray-500 text-base mt-4">
            Si gestionas calidad o metrología en tu planta, probablemente has vivido alguno de estos escenarios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {painPoints.map(({ icon: Icon, problem, description, impact, solution }) => (
            <div
              key={problem}
              className="relative rounded-2xl border-2 border-gray-100 bg-white overflow-hidden flex flex-col hover:shadow-lg hover:border-brand-200 transition-all duration-300"
            >
              {/* Top accent bar */}
              <div className="h-1 w-full bg-brand-700" />

              <div className="p-8 flex flex-col flex-1">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-50 rounded-xl mb-5">
                  <Icon className="w-6 h-6 text-brand-600" />
                </div>

                <h3 className="text-lg font-black text-gray-900 mb-3">{problem}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">{description}</p>

                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-600 bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg mb-5 self-start">
                  ⚠ {impact}
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <p className="text-[11px] font-bold text-accent-600 uppercase tracking-wider mb-1.5">Nuestra solución:</p>
                  <p className="text-sm text-gray-700 font-medium leading-snug">{solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm mb-4">¿Estás listo para eliminar estos riesgos de tu operación?</p>
          <Link href="/contacto"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-700 hover:bg-brand-800 text-white font-bold rounded-xl transition-all shadow-md hover:-translate-y-px">
            Solicitar cotización gratuita
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}

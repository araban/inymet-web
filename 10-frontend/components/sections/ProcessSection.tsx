import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Diagnóstico y cotización",
    body: "Cuéntanos qué instrumentos necesitas calibrar. Recibes propuesta formal con precio, norma aplicable y tiempo de entrega en menos de 24 horas.",
    highlight: "Respuesta garantizada en 24 h",
  },
  {
    n: "02",
    title: "Calibración certificada",
    body: "Nuestros metrólogos calibran tus equipos en nuestro laboratorio acreditado o en tus instalaciones. Proceso trazable al SI vía CENAM.",
    highlight: "ISO 17025 · Trazabilidad CENAM",
  },
  {
    n: "03",
    title: "Certificado con validez legal",
    body: "Emitimos el certificado con todos los datos requeridos: incertidumbre de medición, puntos calibrados, normas y firma del metrólogo responsable.",
    highlight: "Válido para auditores nacionales e internacionales",
  },
  {
    n: "04",
    title: "Seguimiento y mantenimiento",
    body: "Te avisamos antes de que vencen tus calibraciones. Programa tu plan anual de calibración y nunca más llegues a una auditoría desprevenido.",
    highlight: "Alertas automáticas de vencimiento",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 lg:py-24 bg-white border-y border-gray-100">
      <div className="container-custom">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">Proceso simple</span>
          <h2 className="section-title">
            De la cotización al certificado,{" "}
            <span className="text-brand-600">en 4 pasos</span>
          </h2>
          <p className="text-gray-500 text-base mt-4">
            Sin burocracia, sin demoras. Tus instrumentos calibrados y listos para cualquier auditoría.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div key={step.n} className="relative flex flex-col">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-gray-200 z-0" />
              )}
              <div className="relative z-10 flex flex-col items-center text-center px-5 pb-10 lg:pb-0">
                {/* Step number */}
                <div className="w-16 h-16 rounded-full bg-brand-50 border-2 border-brand-200 flex items-center justify-center mb-5 shadow-sm">
                  <span className="text-brand-700 font-black text-lg">{step.n}</span>
                </div>
                <h3 className="text-gray-900 font-bold text-base mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{step.body}</p>
                <span className="text-xs font-semibold text-accent-700 bg-accent-50 border border-accent-200 px-3 py-1.5 rounded-full">
                  {step.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/contacto"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-700 hover:bg-brand-800 text-white font-bold rounded-xl transition-all shadow-md hover:-translate-y-px"
          >
            Iniciar el proceso ahora
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}

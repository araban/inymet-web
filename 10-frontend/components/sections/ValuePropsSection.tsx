import Link from "next/link";
import { Clock, FileCheck, MapPin, Users, ArrowRight } from "lucide-react";

const props = [
  {
    icon: Clock,
    num: "< 24h",
    title: "Certificados express",
    body: "Emitimos certificados ISO 17025 en menos de 24 horas. No más semanas de espera mientras tu producción se detiene.",
    highlight: "El más rápido de México",
  },
  {
    icon: FileCheck,
    num: "100%",
    title: "Aceptados en auditorías",
    body: "Certificados reconocidos por auditores de ISO 9001, IATF 16949, GMP, BRC, FDA, FSSC y más sin excepción.",
    highlight: "Trazabilidad CENAM",
  },
  {
    icon: MapPin,
    num: "ZMVM",
    title: "Servicio a domicilio",
    body: "Calibramos en tus instalaciones para equipos fijos o de difícil traslado. Sin interrumpir tu operación ni tu producción.",
    highlight: "Sin parar tu planta",
  },
  {
    icon: Users,
    num: "+500",
    title: "Industrias que confían",
    body: "Más de 500 empresas en automotriz, farmacéutica y alimentos confían en INyMET para sus auditorías y certificaciones.",
    highlight: "Desde 2002",
  },
];

export default function ValuePropsSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#060d1f] border-t border-white/5">
      <div className="container-custom">

        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-accent-400 uppercase tracking-widest mb-3 block">
            ¿Por qué elegir INyMET?
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight">
            El laboratorio que trabaja al{" "}
            <span className="text-accent-400">ritmo de tu operación</span>
          </h2>
          <p className="text-slate-400 text-base mt-4">
            Más de 25 años de experiencia, 11 laboratorios acreditados y tiempos de respuesta sin igual.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {props.map(({ icon: Icon, num, title, body, highlight }) => (
            <div key={title} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 flex flex-col hover:bg-white/[0.07] transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/[0.07] rounded-xl mb-5">
                <Icon className="w-6 h-6 text-accent-400" />
              </div>
              <div className="text-4xl font-black mb-2 text-white">{num}</div>
              <h3 className="text-base font-black text-white mb-2">{title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-4">{body}</p>
              <span className="text-xs font-bold text-accent-400 bg-accent-500/10 border border-accent-500/20 px-3 py-1.5 rounded-full self-start">
                {highlight}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/nosotros"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-400 hover:text-accent-300 transition-colors"
          >
            Conoce más sobre INyMET <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

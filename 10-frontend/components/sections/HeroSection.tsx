"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle, Phone, Shield, Clock, Award } from "lucide-react";
import { CONTACT } from "@/lib/contact";

function CountUp({ end, prefix = "", suffix = "" }: { end: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || fired.current) return;
      fired.current = true;
      const t0 = performance.now();
      const dur = 1800;
      const tick = (now: number) => {
        const p = Math.min((now - t0) / dur, 1);
        setCount(Math.round((1 - Math.pow(1 - p, 3)) * end));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

const stats = [
  { prefix: "+", end: 25, suffix: "", label: "Años de experiencia" },
  { prefix: "+", end: 500, suffix: "", label: "Empresas certificadas" },
  { prefix: "<", end: 24, suffix: " h", label: "Entrega de certificados" },
  { prefix: "", end: 11, suffix: "", label: "Laboratorios acreditados" },
];

const trustItems = [
  "Trazabilidad CENAM — Sistema Internacional de Unidades",
  "Válido para ISO 9001 · IATF 16949 · GMP · BRC · FDA",
  "Servicio a domicilio en ZMVM y principales ciudades",
  "Respuesta prioritaria para auditorías urgentes",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#060d1f]">
      {/* Background grid */}
      <div aria-hidden className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(29,78,216,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(29,78,216,0.05) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }} />

      {/* Glow */}
      <div aria-hidden className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-brand-700/10 rounded-full blur-[160px] pointer-events-none -translate-y-1/2" />
      <div aria-hidden className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[85vh] lg:min-h-0">

            {/* ── Left column: Content ── */}
            <div className="flex flex-col justify-center py-16 lg:py-24 lg:pr-12">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 self-start mb-6 px-4 py-1.5 rounded-full border border-accent-500/30 bg-accent-500/10">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-accent-300 tracking-wide uppercase">Acreditado ISO 17025 · IAS CL-101 · CENAM</span>
              </div>

              {/* Headline */}
              <h1 className="text-[2.6rem] sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] font-black text-white leading-[1.05] tracking-tight">
                Reduce riesgos en{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300">
                  auditorías ISO
                </span>{" "}
                con calibración certificada
              </h1>

              {/* Subtext */}
              <p className="mt-5 text-base lg:text-lg text-slate-400 leading-relaxed max-w-xl">
                Servicios de metrología industrial acreditados.{" "}
                <span className="text-white font-semibold">Certificados en menos de 24 horas</span>{" "}
                para automotriz, farmacéutica, alimentos y más. Trazabilidad nacional CENAM.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Link href="/contacto"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-accent-500 hover:bg-accent-400 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-accent-900/40 hover:-translate-y-px">
                  Cotizar en 24 horas
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href={`tel:${CONTACT.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/[0.07] hover:bg-white/[0.13] text-white font-semibold text-sm rounded-xl border border-white/15 transition-all">
                  <Phone className="w-4 h-4" />
                  {CONTACT.phoneDisplay}
                </a>
              </div>

              {/* Trust list */}
              <ul className="mt-7 space-y-2">
                {trustItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-slate-400">
                    <CheckCircle className="w-3.5 h-3.5 text-accent-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Right column: Lab photo ── */}
            <div className="hidden lg:flex relative items-center justify-end py-12">
              <div className="relative w-full max-w-lg h-[520px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/lab-tecnico-multimetros.jpg"
                  alt="Técnico de INyMET calibrando instrumentos en laboratorio acreditado ISO 17025"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 0px, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060d1f]/60 via-transparent to-transparent" />

                {/* Floating badge: ISO */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur rounded-xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-brand-600" />
                    <div>
                      <p className="text-xs font-black text-brand-800">ISO 17025</p>
                      <p className="text-[10px] text-gray-500">IAS CL-101</p>
                    </div>
                  </div>
                </div>

                {/* Floating badge: Speed */}
                <div className="absolute bottom-6 right-6 bg-accent-500 rounded-xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-white" />
                    <div>
                      <p className="text-xs font-black text-white">Certificados</p>
                      <p className="text-[11px] text-accent-100 font-bold">en menos de 24h</p>
                    </div>
                  </div>
                </div>

                {/* Floating badge: Shield */}
                <div className="absolute bottom-6 left-6 bg-[#060d1f]/90 backdrop-blur border border-white/10 rounded-xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-accent-400" />
                    <p className="text-xs font-bold text-white">Trazabilidad CENAM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div className="border-t border-white/[0.06]">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map(({ prefix, end, suffix, label }, i) => (
                <div key={label}
                  className={`py-6 px-4 lg:px-8 text-center ${i < stats.length - 1 ? "border-r border-white/[0.06]" : ""}`}>
                  <div className="text-2xl lg:text-3xl font-black text-white tabular-nums">
                    <CountUp prefix={prefix} end={end} suffix={suffix} />
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1 font-semibold uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";
import { Award, Clock, Shield, TrendingUp } from "lucide-react";

const stats = [
  { icon: Award,      value: "ISO 17025", label: "Acreditación IAS CL-101" },
  { icon: Clock,      value: "< 24 h",    label: "Entrega de certificados" },
  { icon: Shield,     value: "+25 años",  label: "Experiencia en metrología" },
  { icon: TrendingUp, value: "+500",       label: "Empresas certificadas" },
];

const certs = [
  "IAS CL-101", "ISO 17025", "ISO 9001", "NMX-EC-17025", "CENAM",
  "IATF 16949", "GMP / NOM-059", "BRC Food", "FDA 21 CFR", "HACCP", "FSSC 22000", "SQF",
];

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

export default function TrustSection() {
  const { ref, visible } = useFadeIn();

  return (
    <section className="bg-white py-14 lg:py-20 border-b border-gray-100">
      <div className="container-custom">

        <p className="text-center text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-8">
          Respaldado por acreditaciones internacionales
        </p>

        <div
          ref={ref}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="rounded-2xl border-2 border-brand-100 bg-brand-50 p-6 text-center hover:-translate-y-0.5 transition-transform cursor-default"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-3 bg-white shadow-sm">
                <Icon className="w-5 h-5 text-brand-600" />
              </div>
              <div className="text-2xl lg:text-3xl font-black mb-1 text-brand-800">{value}</div>
              <div className="text-xs text-brand-700 font-semibold leading-tight">{label}</div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-7">
          <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-4">
            Estándares y normas que cubrimos con nuestros certificados
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {certs.map((c) => (
              <span
                key={c}
                className="bg-gray-50 border border-gray-200 text-gray-500 text-xs font-bold px-4 py-1.5 rounded-full tracking-wide hover:border-brand-300 hover:text-brand-700 hover:bg-brand-50 transition-colors cursor-default"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

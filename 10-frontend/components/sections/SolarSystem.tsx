"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Thermometer,
  Gauge,
  Ruler,
  Droplets,
  Wrench,
  Timer,
  Activity,
  FlaskConical,
  Waves,
  Wind,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

// ─── Types ───────────────────────────────────────────────────────────────────
interface LabDef {
  id: string;
  name: string;    // full name for tooltip
  label: string;   // short name always visible below sphere
  Icon: LucideIcon;
  color: string;
  radius: number;
  speed: number;
  startAngle: number;
  size: number;
  desc: string;
  href: string;
}

// ─── Lab data ─────────────────────────────────────────────────────────────────
// Container 500px → max orbit 228px + sphere half 24px = 252 ≤ 250 (fits with overflow:visible)
const LABS: LabDef[] = [
  // Ring 1 — r=78 (2 planets)
  {
    id: "electrica",
    name: "Laboratorio Eléctrico",
    label: "Eléctrica",
    Icon: Zap,
    color: "#FBBF24",
    radius: 78,
    speed: 10,
    startAngle: 0,
    size: 48,
    desc: "Multímetros · Fuentes · Osciloscopios · Analizadores",
    href: "/calibracion",
  },
  {
    id: "temperatura",
    name: "Temperatura",
    label: "Temp.",
    Icon: Thermometer,
    color: "#F87171",
    radius: 78,
    speed: 14,
    startAngle: 180,
    size: 48,
    desc: "Termómetros · Termopares · PT100 · Data loggers",
    href: "/calibracion",
  },
  // Ring 2 — r=130 (3 planets)
  {
    id: "presion",
    name: "Presión",
    label: "Presión",
    Icon: Gauge,
    color: "#60A5FA",
    radius: 130,
    speed: 18,
    startAngle: 30,
    size: 44,
    desc: "Manómetros · Transmisores · Vacuómetros · Presostatos",
    href: "/calibracion",
  },
  {
    id: "dimensional",
    name: "Dimensional",
    label: "Dimens.",
    Icon: Ruler,
    color: "#A78BFA",
    radius: 130,
    speed: 22,
    startAngle: 150,
    size: 44,
    desc: "Calibradores · Micrómetros · Altímetros · Bloques patrón",
    href: "/calibracion",
  },
  {
    id: "humedad",
    name: "Humedad",
    label: "Humedad",
    Icon: Droplets,
    color: "#22D3EE",
    radius: 130,
    speed: 26,
    startAngle: 270,
    size: 44,
    desc: "Higrómetros · Transmisores · Data loggers",
    href: "/calibracion",
  },
  // Ring 3 — r=180 (3 planets)
  {
    id: "torque",
    name: "Par Torsional",
    label: "Torque",
    Icon: Wrench,
    color: "#34D399",
    radius: 180,
    speed: 30,
    startAngle: 60,
    size: 40,
    desc: "Torquímetros de palanca · Llaves de torque",
    href: "/calibracion",
  },
  {
    id: "frecuencia",
    name: "Frecuencia y Tiempo",
    label: "Frec./Tiempo",
    Icon: Timer,
    color: "#FB923C",
    radius: 180,
    speed: 35,
    startAngle: 180,
    size: 40,
    desc: "Cronómetros · Frecuencímetros",
    href: "/calibracion",
  },
  {
    id: "vibraciones",
    name: "Vibraciones",
    label: "Vibración",
    Icon: Activity,
    color: "#F472B6",
    radius: 180,
    speed: 40,
    startAngle: 300,
    size: 40,
    desc: "Vibrómetros · Acelerómetros · Analizadores",
    href: "/calibracion",
  },
  // Ring 4 — r=228 (3 planets)
  {
    id: "volumen",
    name: "Volumen",
    label: "Volumen",
    Icon: FlaskConical,
    color: "#2DD4BF",
    radius: 228,
    speed: 45,
    startAngle: 45,
    size: 38,
    desc: "Pipetas · Buretas · Matraces · Dispensadores",
    href: "/calibracion",
  },
  {
    id: "caudal-liq",
    name: "Caudal de Líquidos",
    label: "Caudal Líq.",
    Icon: Waves,
    color: "#818CF8",
    radius: 228,
    speed: 50,
    startAngle: 165,
    size: 38,
    desc: "Medidores de flujo másico · Rotámetros",
    href: "/calibracion",
  },
  {
    id: "caudal-gas",
    name: "Caudal de Gases",
    label: "Caudal Gas",
    Icon: Wind,
    color: "#C084FC",
    radius: 228,
    speed: 55,
    startAngle: 285,
    size: 38,
    desc: "Flujómetros · Controladores de flujo másico",
    href: "/calibracion",
  },
];

const CONTAINER_SIZE = 500;
const ORBIT_RADII = [78, 130, 180, 228];

interface HoverInfo {
  index: number;
  above: boolean;
}

// ─── Main component ───────────────────────────────────────────────────────────
export function SolarSystem() {
  const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
  const anglesRef = useRef(LABS.map((l) => l.startAngle));
  const hoveredRef = useRef<HoverInfo | null>(null);
  const [hovered, setHovered] = useState<HoverInfo | null>(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Set initial positions without touching React's style prop
  useEffect(() => {
    LABS.forEach((lab, i) => {
      const rad = (lab.startAngle * Math.PI) / 180;
      const el = wrapperRefs.current[i];
      if (el)
        el.style.transform = `translate(${lab.radius * Math.cos(rad)}px,${lab.radius * Math.sin(rad)}px)`;
    });
  }, []);

  const handleEnter = (index: number) => {
    const above = Math.sin(anglesRef.current[index] * (Math.PI / 180)) > 0;
    const info: HoverInfo = { index, above };
    hoveredRef.current = info;
    setHovered(info);
  };

  const handleLeave = () => {
    hoveredRef.current = null;
    setHovered(null);
  };

  // Native rAF loop — more reliable than framer-motion's useAnimationFrame in Next.js
  useEffect(() => {
    let frameId: number;
    let lastTime: number | null = null;

    const tick = (now: number) => {
      if (lastTime !== null && hoveredRef.current === null && !reducedMotion.current) {
        const dt = Math.min((now - lastTime) / 1000, 0.05);
        LABS.forEach((lab, i) => {
          anglesRef.current[i] += (360 / lab.speed) * dt;
          const rad = (anglesRef.current[i] * Math.PI) / 180;
          const el = wrapperRefs.current[i];
          if (el)
            el.style.transform = `translate(${lab.radius * Math.cos(rad)}px,${lab.radius * Math.sin(rad)}px)`;
        });
      }
      lastTime = now;
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="w-full">
      {/* ── Desktop: Solar System ─────────────────────────────────── */}
      <div className="hidden lg:flex justify-center items-center py-10">
        <div
          className="relative flex-shrink-0"
          style={{ width: CONTAINER_SIZE, height: CONTAINER_SIZE }}
        >
          {/* SVG orbit rings */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none select-none"
            viewBox={`0 0 ${CONTAINER_SIZE} ${CONTAINER_SIZE}`}
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="sg" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1D5A94" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#1D5A94" stopOpacity="0" />
              </radialGradient>
            </defs>
            {/* Central glow */}
            <circle cx={CONTAINER_SIZE / 2} cy={CONTAINER_SIZE / 2} r="80" fill="url(#sg)" />
            {/* Orbit tracks */}
            {ORBIT_RADII.map((r) => (
              <circle
                key={r}
                cx={CONTAINER_SIZE / 2}
                cy={CONTAINER_SIZE / 2}
                r={r}
                fill="none"
                stroke="rgba(255,255,255,0.09)"
                strokeWidth="1"
                strokeDasharray="3 10"
              />
            ))}
          </svg>

          {/* Sun nucleus */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 select-none">
            <div className="relative">
              <span
                className="absolute inset-0 rounded-full bg-brand-500/20 animate-ping pointer-events-none"
                style={{ animationDuration: "3.5s" }}
              />
              <div className="relative w-[80px] h-[80px] rounded-full bg-gradient-to-br from-brand-400 to-brand-700 flex flex-col items-center justify-center border-2 border-brand-300/40 shadow-[0_0_50px_rgba(29,90,148,0.65)]">
                <span className="text-white font-black text-[14px] leading-none tracking-tight">INy</span>
                <span className="text-white font-black text-[14px] leading-none tracking-tight">MET</span>
              </div>
            </div>
          </div>

          {/* Planets */}
          {LABS.map((lab, i) => {
            const half = lab.size / 2;
            const isHov = hovered?.index === i;

            return (
              <div
                key={lab.id}
                ref={(el) => { wrapperRefs.current[i] = el; }}
                className="absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  width: lab.size,
                  height: lab.size,
                  marginTop: -half,
                  marginLeft: -half,
                  // transform omitted — managed by rAF via ref
                }}
                onMouseEnter={() => handleEnter(i)}
                onMouseLeave={handleLeave}
              >
                {/* Sphere — entire area is the clickable link */}
                <Link
                  href={lab.href}
                  aria-label={`Ver ${lab.name}`}
                  className="block w-full h-full"
                >
                  <motion.div
                    animate={{ scale: isHov ? 1.4 : 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-full h-full rounded-full flex items-center justify-center border"
                    style={{
                      // Glass-orb gradient: bright highlight top-left, fades to transparent
                      background: `radial-gradient(circle at 30% 30%, ${lab.color}60 0%, ${lab.color}28 50%, ${lab.color}08 100%)`,
                      borderColor: isHov ? lab.color : `${lab.color}90`,
                      boxShadow: isHov
                        ? `0 0 0 3px ${lab.color}30, 0 0 28px ${lab.color}65, inset 0 1px 0 rgba(255,255,255,0.25)`
                        : `0 0 14px ${lab.color}35, inset 0 1px 0 rgba(255,255,255,0.12)`,
                    }}
                  >
                    <lab.Icon
                      size={Math.round(lab.size * 0.50)}
                      strokeWidth={1.5}
                      style={{
                        color: lab.color,
                        filter: `drop-shadow(0 0 ${isHov ? "6px" : "3px"} ${lab.color}90)`,
                      }}
                    />
                  </motion.div>
                </Link>

                {/* Always-visible label below sphere */}
                <div
                  className="absolute pointer-events-none select-none"
                  style={{
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    marginTop: 5,
                    whiteSpace: "nowrap",
                    fontSize: 9,
                    fontWeight: 600,
                    letterSpacing: "0.03em",
                    color: isHov ? lab.color : "rgba(156,163,175,0.75)",
                    transition: "color 0.2s",
                    textShadow: isHov ? `0 0 8px ${lab.color}80` : "none",
                  }}
                >
                  {lab.label}
                </div>

                {/* Tooltip — purely informational, no CTA text */}
                <AnimatePresence>
                  {isHov && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.90, y: hovered?.above ? 4 : -4 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.90 }}
                      transition={{ duration: 0.14 }}
                      className="absolute z-50 pointer-events-none"
                      style={{
                        width: 172,
                        left: "50%",
                        transform: "translateX(-50%)",
                        ...(hovered?.above
                          ? { bottom: "calc(100% + 18px)" }
                          : { top: "calc(100% + 18px)" }),
                      }}
                    >
                      {/* Arrow */}
                      <div
                        className="absolute w-2.5 h-2.5 rotate-45"
                        style={{
                          left: "50%",
                          marginLeft: -5,
                          background: "rgba(6, 13, 31, 0.97)",
                          border: `1px solid ${lab.color}35`,
                          ...(hovered?.above
                            ? { bottom: -5, borderTop: "none", borderLeft: "none" }
                            : { top: -5, borderBottom: "none", borderRight: "none" }),
                        }}
                      />

                      <div
                        className="rounded-xl overflow-hidden shadow-2xl"
                        style={{
                          background: "rgba(6, 13, 31, 0.97)",
                          border: `1px solid ${lab.color}38`,
                          boxShadow: `0 12px 40px rgba(0,0,0,0.65), 0 0 0 1px ${lab.color}15`,
                        }}
                      >
                        {/* Header strip */}
                        <div
                          className="px-3.5 py-2 flex items-center gap-2"
                          style={{ borderBottom: `1px solid ${lab.color}20` }}
                        >
                          <div
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{
                              background: lab.color,
                              boxShadow: `0 0 6px ${lab.color}`,
                            }}
                          />
                          <span className="text-[11px] font-bold text-white leading-tight">
                            {lab.name}
                          </span>
                        </div>

                        {/* Body */}
                        <div className="px-3.5 py-2.5">
                          <p className="text-[10px] text-gray-400 leading-relaxed mb-2.5">
                            {lab.desc}
                          </p>

                          {/* Informational badges */}
                          <div className="flex gap-1.5 flex-wrap">
                            {["ISO 17025", "IAS CL-101"].map((badge) => (
                              <span
                                key={badge}
                                className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full tracking-wide"
                                style={{
                                  color: lab.color,
                                  background: `${lab.color}18`,
                                  border: `1px solid ${lab.color}35`,
                                }}
                              >
                                {badge}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Mobile: Card grid ─────────────────────────────────────── */}
      <div className="lg:hidden px-4 py-10">
        <p className="text-center text-[10px] text-gray-500 mb-5 uppercase tracking-widest">
          11 Laboratorios acreditados — ISO 17025 · IAS CL-101
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto">
          {LABS.map((lab) => (
            <Link
              key={lab.id}
              href={lab.href}
              className="rounded-xl border p-3.5 flex flex-col items-center gap-2 text-center hover:scale-[1.04] active:scale-[0.97] transition-transform"
              style={{
                background: `radial-gradient(circle at 40% 30%, ${lab.color}18, ${lab.color}08)`,
                borderColor: `${lab.color}40`,
              }}
            >
              <lab.Icon size={26} style={{ color: lab.color, filter: `drop-shadow(0 0 4px ${lab.color}70)` }} strokeWidth={1.5} />
              <span className="text-[10px] font-semibold text-gray-200 leading-snug">{lab.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

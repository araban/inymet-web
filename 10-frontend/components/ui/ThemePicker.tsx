"use client";

import { useState, useEffect } from "react";
import { Palette, Check, X } from "lucide-react";

type ThemeId = "marina" | "logotipo" | "prestige" | "industrial" | "oceano";

const themes: {
  id: ThemeId;
  name: string;
  desc: string;
  brand: string;
  accent: string;
}[] = [
  {
    id: "marina",
    name: "Marina",
    desc: "Azul marino + esmeralda",
    brand: "#1D5A94",
    accent: "#10B981",
  },
  {
    id: "logotipo",
    name: "Logotipo",
    desc: "Azul acero + gris corporativo",
    brand: "#2C5CB8",
    accent: "#6B7280",
  },
  {
    id: "prestige",
    name: "Prestige",
    desc: "Índigo + dorado",
    brand: "#6366F1",
    accent: "#F59E0B",
  },
  {
    id: "industrial",
    name: "Industrial",
    desc: "Carbón + teal",
    brand: "#334155",
    accent: "#14B8A6",
  },
  {
    id: "oceano",
    name: "Océano",
    desc: "Azul + cian",
    brand: "#2563EB",
    accent: "#06B6D4",
  },
];

const STORAGE_KEY = "inymet-theme";

export default function ThemePicker() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<ThemeId>("marina");

  // Read stored theme on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as ThemeId | null;
      if (stored && themes.some((t) => t.id === stored)) {
        setActive(stored);
      }
    } catch {
      /* ignore */
    }
  }, []);

  function apply(id: ThemeId) {
    document.documentElement.dataset.theme = id;
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {
      /* ignore */
    }
    setActive(id);
  }

  return (
    <div className="fixed bottom-24 left-4 z-50 flex flex-col items-start gap-2">
      {/* Panel */}
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 w-64 mb-1 ring-1 ring-black/5">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              Paleta de colores
            </p>
            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Cerrar selector de tema"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <ul className="space-y-1">
            {themes.map((t) => (
              <li key={t.id}>
                <button
                  onClick={() => apply(t.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${
                    active === t.id
                      ? "bg-gray-100 ring-1 ring-gray-300"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {/* Color swatch */}
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg overflow-hidden flex shadow-sm border border-black/10">
                    <span
                      className="flex-1 block"
                      style={{ backgroundColor: t.brand }}
                    />
                    <span
                      className="flex-1 block"
                      style={{ backgroundColor: t.accent }}
                    />
                  </span>

                  <span className="flex-1 min-w-0">
                    <span className="block text-sm font-semibold text-gray-900 leading-tight">
                      {t.name}
                    </span>
                    <span className="block text-[11px] text-gray-400 leading-tight mt-0.5 truncate">
                      {t.desc}
                    </span>
                  </span>

                  {active === t.id && (
                    <Check className="w-4 h-4 text-gray-600 flex-shrink-0" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <p className="text-[10px] text-gray-300 text-center mt-3">
            Solo visible durante la revisión
          </p>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all"
        aria-label="Selector de paleta de colores"
        title="Cambiar paleta de colores"
      >
        <Palette className="w-5 h-5" />
      </button>
    </div>
  );
}

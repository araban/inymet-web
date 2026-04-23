"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "@/lib/contact";
import {
  Menu, X, ChevronDown, ExternalLink, Phone,
  Zap, Thermometer, Gauge, Ruler, Droplets, Wrench,
  Timer, Activity, FlaskConical, Waves, Wind,
  Car, Pill, Leaf,
  Package2, CircuitBoard, Volume2, Sun, Cpu,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const calibracionLabs: { name: string; href: string; icon: LucideIcon }[] = [
  { name: "Eléctrica",           href: "/calibracion#electricos",      icon: Zap },
  { name: "Temperatura",         href: "/calibracion#temperatura",      icon: Thermometer },
  { name: "Presión",             href: "/calibracion#presion",          icon: Gauge },
  { name: "Dimensional",         href: "/calibracion#dimensional",      icon: Ruler },
  { name: "Humedad",             href: "/calibracion#humedad",          icon: Droplets },
  { name: "Par Torsional",       href: "/calibracion#par-torsional",    icon: Wrench },
  { name: "Frecuencia y Tiempo", href: "/calibracion#frecuencia-tiempo",icon: Timer },
  { name: "Vibraciones",         href: "/calibracion#vibraciones",      icon: Activity },
  { name: "Volumen",             href: "/calibracion#volumen",          icon: FlaskConical },
  { name: "Caudal Líquidos",     href: "/calibracion#caudal-liquidos",  icon: Waves },
  { name: "Caudal Gases",        href: "/calibracion#caudal-gases",     icon: Wind },
];

const instrumentacionBrands: { name: string; href: string; icon: LucideIcon }[] = [
  { name: "Fluke",               href: "/instrumentacion#fluke",             icon: Zap },
  { name: "DRUCK",               href: "/instrumentacion#druck",             icon: Gauge },
  { name: "Rotronic",            href: "/instrumentacion#rotronic",          icon: Droplets },
  { name: "Alicat Scientific",   href: "/instrumentacion#alicat",            icon: Wind },
  { name: "Chroma",              href: "/instrumentacion#chroma",            icon: Cpu },
  { name: "Teledyne LeCroy",     href: "/instrumentacion#teledyne-lecroy",   icon: Activity },
  { name: "Delta OHM",           href: "/instrumentacion#delta-ohm",         icon: Sun },
  { name: "Hart Scientific",     href: "/instrumentacion#hart-scientific",    icon: Thermometer },
  { name: "Pearson Electronics", href: "/instrumentacion#pearson-electronics",icon: CircuitBoard },
  { name: "Rion",                href: "/instrumentacion#rion",              icon: Volume2 },
];

const industriasItems: { name: string; href: string; desc: string; icon: LucideIcon }[] = [
  { name: "Automotriz",   href: "/industrias/automotriz",  desc: "IATF 16949 · PPAP",       icon: Car },
  { name: "Farmacéutica", href: "/industrias/farmaceutica",desc: "GMP · FDA · COFEPRIS",     icon: Pill },
  { name: "Alimentos",    href: "/industrias/alimentos",   desc: "BRC · FSSC 22000 · HACCP", icon: Leaf },
];

// ─── Types ───────────────────────────────────────────────────────────────────

type MegaMenuId = "calibracion" | "instrumentacion" | "industrias" | null;

// ─── Mega Menu: Calibración ──────────────────────────────────────────────────

function CalibracionPanel({ onClose }: { onClose: () => void }) {
  const half = Math.ceil(calibracionLabs.length / 2);
  const col1 = calibracionLabs.slice(0, half);
  const col2 = calibracionLabs.slice(half);

  return (
    <div className="flex gap-0 divide-x divide-gray-100">
      {/* Labs grid */}
      <div className="flex gap-4 px-5 py-4 flex-1">
        {[col1, col2].map((col, ci) => (
          <ul key={ci} className="space-y-0.5 flex-1">
            {col.map((lab) => (
              <li key={lab.href}>
                <Link
                  href={lab.href}
                  onClick={onClose}
                  className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-sm text-gray-700 font-medium hover:bg-brand-50 hover:text-brand-700 transition-colors group"
                >
                  <lab.icon className="w-3.5 h-3.5 text-brand-400 group-hover:text-brand-600 transition-colors flex-shrink-0" />
                  {lab.name}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
      {/* Side column */}
      <div className="w-44 px-5 py-5 bg-brand-50/60 flex flex-col justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold text-brand-600 uppercase tracking-widest mb-1">
            Calibración
          </p>
          <p className="text-xs text-gray-500 leading-snug">
            11 laboratorios certificados ISO 17025
          </p>
        </div>
        <Link
          href="/calibracion"
          onClick={onClose}
          className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors"
        >
          Ver todos los servicios
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

// ─── Mega Menu: Instrumentación ──────────────────────────────────────────────

function InstrumentacionPanel({ onClose }: { onClose: () => void }) {
  const half = Math.ceil(instrumentacionBrands.length / 2);
  const col1 = instrumentacionBrands.slice(0, half);
  const col2 = instrumentacionBrands.slice(half);

  return (
    <div className="flex gap-0 divide-x divide-gray-100">
      {/* Brands grid */}
      <div className="flex gap-4 px-5 py-4 flex-1">
        {[col1, col2].map((col, ci) => (
          <ul key={ci} className="space-y-0.5 flex-1">
            {col.map((brand) => (
              <li key={brand.href}>
                <Link
                  href={brand.href}
                  onClick={onClose}
                  className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-sm text-gray-700 font-medium hover:bg-brand-50 hover:text-brand-700 transition-colors group"
                >
                  <brand.icon className="w-3.5 h-3.5 text-accent-500 group-hover:text-accent-600 transition-colors flex-shrink-0" />
                  {brand.name}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
      {/* Side column */}
      <div className="w-44 px-5 py-5 bg-brand-50/60 flex flex-col justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold text-accent-600 uppercase tracking-widest mb-1">
            Instrumentación
          </p>
          <p className="text-xs text-gray-500 leading-snug">
            Distribuidores oficiales — 10 marcas líderes
          </p>
        </div>
        <Link
          href="/instrumentacion"
          onClick={onClose}
          className="inline-flex items-center gap-1 text-sm font-semibold text-accent-600 hover:text-accent-700 transition-colors"
        >
          Ver todas las marcas
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

// ─── Simple dropdown: Industrias ─────────────────────────────────────────────

function IndustriasPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="px-3 py-3">
      {industriasItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-brand-50 transition-colors group"
        >
          <div className="w-8 h-8 rounded-lg bg-brand-50 group-hover:bg-brand-100 flex items-center justify-center flex-shrink-0 transition-colors">
            <item.icon className="w-4 h-4 text-brand-600" />
          </div>
          <div>
            <span className="block text-sm font-semibold text-gray-900 group-hover:text-brand-700 leading-tight">
              {item.name}
            </span>
            <span className="block text-xs text-gray-400 mt-0.5">{item.desc}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

// ─── Desktop nav item with mega/dropdown panel ────────────────────────────────

interface NavItemProps {
  label: string;
  id: MegaMenuId;
  activeMega: MegaMenuId;
  onEnter: (id: MegaMenuId) => void;
  onLeave: () => void;
  panelMinWidth?: string;
  panelContent: React.ReactNode;
}

function NavItemWithPanel({
  label,
  id,
  activeMega,
  onEnter,
  onLeave,
  panelMinWidth = "280px",
  panelContent,
}: NavItemProps) {
  const isOpen = activeMega === id;

  return (
    <div
      className="relative"
      onMouseEnter={() => onEnter(id)}
      onMouseLeave={onLeave}
    >
      <button
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
          isOpen
            ? "text-brand-700 bg-brand-50"
            : "text-gray-700 hover:text-brand-700 hover:bg-gray-50"
        }`}
      >
        {label}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-brand-600" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 pt-2 z-50"
          style={{ minWidth: panelMinWidth }}
        >
          {/* Invisible bridge to prevent gap-triggered close */}
          <div className="absolute -top-2 left-0 right-0 h-2" />
          <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden ring-1 ring-black/5">
            {panelContent}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Mobile: expandable accordion section ────────────────────────────────────

interface MobileAccordionProps {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function MobileAccordion({ label, isOpen, onToggle, children }: MobileAccordionProps) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-3 px-3 text-sm font-semibold text-gray-800 rounded-lg hover:bg-gray-50 transition-colors"
      >
        {label}
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="ml-3 mt-1 mb-2 space-y-0.5 border-l-2 border-brand-100 pl-3">
          {children}
        </div>
      )}
    </div>
  );
}

// ─── Header ──────────────────────────────────────────────────────────────────

export default function Header() {
  const [activeMega, setActiveMega] = useState<MegaMenuId>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const headerRef = useRef<HTMLElement>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close mega menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMega(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setMobileExpanded(null);
      }
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const handleMegaEnter = useCallback((id: MegaMenuId) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setActiveMega(id);
  }, []);

  const handleMegaLeave = useCallback(() => {
    leaveTimer.current = setTimeout(() => setActiveMega(null), 120);
  }, []);

  const closeMega = useCallback(() => setActiveMega(null), []);
  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, []);

  const toggleMobileSection = useCallback((section: string) => {
    setMobileExpanded((prev) => (prev === section ? null : section));
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-[68px]">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0" onClick={closeMobile}>
            <Image
              src="/images/logo-inymet.png"
              alt="INyMET — Metrología y Calibración certificada ISO 17025"
              width={140}
              height={35}
              priority
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop navigation */}
          <nav
            className="hidden lg:flex items-center gap-0.5"
            aria-label="Navegación principal"
          >
            <NavItemWithPanel
              label="Calibración"
              id="calibracion"
              activeMega={activeMega}
              onEnter={handleMegaEnter}
              onLeave={handleMegaLeave}
              panelMinWidth="520px"
              panelContent={<CalibracionPanel onClose={closeMega} />}
            />
            <NavItemWithPanel
              label="Instrumentación"
              id="instrumentacion"
              activeMega={activeMega}
              onEnter={handleMegaEnter}
              onLeave={handleMegaLeave}
              panelMinWidth="520px"
              panelContent={<InstrumentacionPanel onClose={closeMega} />}
            />
            <NavItemWithPanel
              label="Industrias"
              id="industrias"
              activeMega={activeMega}
              onEnter={handleMegaEnter}
              onLeave={handleMegaLeave}
              panelMinWidth="240px"
              panelContent={<IndustriasPanel onClose={closeMega} />}
            />
            <Link
              href="/nosotros"
              className="text-sm font-medium text-gray-700 hover:text-brand-700 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
            >
              Nosotros
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-gray-700 hover:text-brand-700 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
            >
              Blog
            </Link>
          </nav>

          {/* Right-side actions */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-brand-700 px-3 py-2 rounded-lg transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {CONTACT.phoneDisplay}
            </a>
            <a
              href="https://inymet.com.mx/Clientes/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-brand-700 border border-gray-200 hover:border-brand-300 rounded-lg px-3 py-2 transition-colors"
            >
              Clientes
              <ExternalLink className="w-3 h-3" />
            </a>
            <Link href="/contacto" className="btn-primary text-sm py-2 px-5">
              Cotizar gratis
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white max-h-[80vh] overflow-y-auto">
          <div className="container-custom py-3 space-y-0.5">

            {/* Calibración accordion */}
            <MobileAccordion
              label="Calibración"
              isOpen={mobileExpanded === "calibracion"}
              onToggle={() => toggleMobileSection("calibracion")}
            >
              {calibracionLabs.map((lab) => (
                <Link
                  key={lab.href}
                  href={lab.href}
                  onClick={closeMobile}
                  className="flex items-center gap-2 py-2 px-2 text-sm text-gray-600 hover:text-brand-700 rounded-lg hover:bg-brand-50 transition-colors"
                >
                  <lab.icon className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" />
                  {lab.name}
                </Link>
              ))}
              <Link
                href="/calibracion"
                onClick={closeMobile}
                className="block py-2 px-2 text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors"
              >
                Ver todos los servicios →
              </Link>
            </MobileAccordion>

            {/* Instrumentación accordion */}
            <MobileAccordion
              label="Instrumentación"
              isOpen={mobileExpanded === "instrumentacion"}
              onToggle={() => toggleMobileSection("instrumentacion")}
            >
              {instrumentacionBrands.map((brand) => (
                <Link
                  key={brand.href}
                  href={brand.href}
                  onClick={closeMobile}
                  className="flex items-center gap-2 py-2 px-2 text-sm text-gray-600 hover:text-brand-700 rounded-lg hover:bg-brand-50 transition-colors"
                >
                  <brand.icon className="w-3.5 h-3.5 text-accent-500 flex-shrink-0" />
                  {brand.name}
                </Link>
              ))}
              <Link
                href="/instrumentacion"
                onClick={closeMobile}
                className="block py-2 px-2 text-sm font-semibold text-accent-600 hover:text-accent-700 transition-colors"
              >
                Ver todas las marcas →
              </Link>
            </MobileAccordion>

            {/* Industrias accordion */}
            <MobileAccordion
              label="Industrias"
              isOpen={mobileExpanded === "industrias"}
              onToggle={() => toggleMobileSection("industrias")}
            >
              {industriasItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobile}
                  className="flex items-center gap-2 py-2 px-2 text-sm text-gray-600 hover:text-brand-700 rounded-lg hover:bg-brand-50 transition-colors"
                >
                  <item.icon className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" />
                  {item.name}
                </Link>
              ))}
            </MobileAccordion>

            {/* Flat links */}
            <Link
              href="/nosotros"
              onClick={closeMobile}
              className="block py-3 px-3 text-sm font-semibold text-gray-800 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Nosotros
            </Link>
            <Link
              href="/blog"
              onClick={closeMobile}
              className="block py-3 px-3 text-sm font-semibold text-gray-800 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Blog
            </Link>

            {/* Mobile CTA group */}
            <div className="pt-3 mt-2 border-t border-gray-100 space-y-2 pb-2">
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="flex items-center gap-2 py-2.5 px-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-500" />
                {CONTACT.phoneDisplay}
              </a>
              <a
                href="https://inymet.com.mx/Clientes/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobile}
                className="flex items-center gap-2 py-2.5 px-3 text-sm text-gray-500 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Acceso Clientes
              </a>
              <Link
                href="/contacto"
                onClick={closeMobile}
                className="btn-primary w-full text-center text-sm"
              >
                Cotizar gratis
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

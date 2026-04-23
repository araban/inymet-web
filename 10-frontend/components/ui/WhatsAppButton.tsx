"use client";

import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/contact";

export default function WhatsAppButton() {
  return (
    <a
      href={waLink("Hola, me interesa cotizar un servicio de calibración certificada.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold text-sm px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
    >
      <MessageCircle className="w-5 h-5 fill-white stroke-none flex-shrink-0" />
      <span className="hidden sm:inline">¿Te ayudamos?</span>
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse" />
    </a>
  );
}

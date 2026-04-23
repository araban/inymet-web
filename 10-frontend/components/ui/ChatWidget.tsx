"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, ChevronDown, Sparkles } from "lucide-react";

// ─── Types ──────────────────────────────────────────────────────────────────
interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

type ApiMessage = { role: "user" | "assistant"; content: string };

// ─── Constants ──────────────────────────────────────────────────────────────
const QUICK_REPLIES = [
  "¿Cuánto tarda la calibración?",
  "Consultar estado de mi equipo",
  "¿Qué instrumentos calibran?",
  "Solicitar cotización",
  "Normas que certifican",
];

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "assistant",
  content:
    "¡Hola! 👋 Soy **Emma**, especialista de calibración en INyMET.\n\nEstoy aquí para ayudarle con cotizaciones, consultar el estado de sus equipos o resolver cualquier duda técnica. ¿En qué le puedo ayudar hoy?",
  timestamp: new Date(),
};

// ─── Sub-components ─────────────────────────────────────────────────────────
function TypingDots() {
  return (
    <div className="flex gap-1.5 items-center px-4 py-3.5">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 bg-gray-300 rounded-full block"
          animate={{ y: [0, -5, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 0.7, delay: i * 0.15, repeat: Infinity }}
        />
      ))}
    </div>
  );
}

function EmmaAvatar({ size = "sm" }: { size?: "sm" | "md" }) {
  const dim = size === "sm" ? "w-7 h-7" : "w-9 h-9";
  const text = size === "sm" ? "text-[10px]" : "text-xs";
  return (
    <div
      className={`${dim} rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center flex-shrink-0 shadow-sm`}
    >
      <span className={`${text} font-bold text-white tracking-tight`}>EM</span>
    </div>
  );
}

// Minimal markdown: **bold** and newlines
function MessageText({ content }: { content: string }) {
  const lines = content.split("\n");
  return (
    <div className="text-sm leading-relaxed space-y-1">
      {lines.map((line, li) => {
        if (!line.trim()) return <br key={li} />;
        const parts = line.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p key={li}>
            {parts.map((part, pi) =>
              part.startsWith("**") && part.endsWith("**") ? (
                <strong key={pi} className="font-semibold">
                  {part.slice(2, -2)}
                </strong>
              ) : (
                part
              )
            )}
          </p>
        );
      })}
    </div>
  );
}

// ─── Main component ─────────────────────────────────────────────────────────
export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const hasInteracted = useRef(false);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      const t = setTimeout(() => inputRef.current?.focus(), 280);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const buildApiMessages = useCallback(
    (newUserText: string): ApiMessage[] => {
      const history = messages
        .filter((m) => m.id !== "welcome")
        .map((m): ApiMessage => ({ role: m.role, content: m.content }));

      // Prepend welcome as first assistant turn if this is the second+ exchange
      const withWelcome: ApiMessage[] =
        history.length > 0
          ? [{ role: "assistant", content: WELCOME_MESSAGE.content }, ...history]
          : [];

      return [...withWelcome, { role: "user", content: newUserText }];
    },
    [messages]
  );

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isLoading) return;

      hasInteracted.current = true;
      setShowQuickReplies(false);

      const userMsg: Message = {
        id: `u-${Date.now()}`,
        role: "user",
        content: trimmed,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setIsLoading(true);

      const apiMessages = buildApiMessages(trimmed);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: apiMessages }),
        });

        const data = await res.json();

        const assistantMsg: Message = {
          id: `a-${Date.now()}`,
          role: "assistant",
          content:
            data.content ||
            "Ocurrió un error. Por favor intente de nuevo o llámenos al (55) 5754-3087.",
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, assistantMsg]);
        if (!isOpen) setHasUnread(true);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            id: `a-${Date.now()}`,
            role: "assistant",
            content:
              "No pude conectarme. Por favor llámenos al **(55) 5754-3087** o escríbanos a ventas@inymet.com.mx.",
            timestamp: new Date(),
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, buildApiMessages, isOpen]
  );

  const formatTime = (date: Date) =>
    date.toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* ── Chat Panel ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="w-80 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-100"
            style={{ height: "520px" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-700 to-brand-600 px-4 py-3 flex items-center gap-3 flex-shrink-0">
              <div className="relative">
                <EmmaAvatar size="md" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-accent-400 rounded-full border-2 border-brand-700" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <p className="text-sm font-bold text-white leading-none">Emma</p>
                  <Sparkles className="w-3 h-3 text-accent-300" />
                </div>
                <p className="text-[11px] text-brand-200 mt-0.5">
                  Especialista INyMET · En línea
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/15 transition-colors"
                aria-label="Minimizar chat"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50/60 scroll-smooth">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex gap-2 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <EmmaAvatar size="sm" />
                  )}

                  <div
                    className={`max-w-[84%] px-3.5 py-2.5 rounded-2xl shadow-sm ${
                      msg.role === "user"
                        ? "bg-brand-600 text-white rounded-br-md"
                        : "bg-white text-gray-800 rounded-bl-md"
                    }`}
                  >
                    <MessageText content={msg.content} />
                    <p
                      className={`text-[10px] mt-1.5 ${
                        msg.role === "user" ? "text-brand-200" : "text-gray-400"
                      }`}
                    >
                      {formatTime(msg.timestamp)}
                    </p>
                  </div>

                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[10px] font-bold text-gray-500">Tú</span>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex gap-2 items-center"
                  >
                    <EmmaAvatar size="sm" />
                    <div className="bg-white rounded-2xl rounded-bl-md shadow-sm border border-gray-100">
                      <TypingDots />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Quick replies */}
              <AnimatePresence>
                {showQuickReplies && !isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="pt-1"
                  >
                    <p className="text-[11px] text-gray-400 mb-2 pl-9">
                      Preguntas frecuentes:
                    </p>
                    <div className="flex flex-wrap gap-1.5 pl-9">
                      {QUICK_REPLIES.map((qr) => (
                        <button
                          key={qr}
                          onClick={() => sendMessage(qr)}
                          className="text-[11px] bg-white border border-brand-200 text-brand-600 px-3 py-1.5 rounded-full hover:bg-brand-50 hover:border-brand-400 transition-all shadow-sm active:scale-95"
                        >
                          {qr}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="flex-shrink-0 px-3 py-3 bg-white border-t border-gray-100">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(input);
                }}
                className="flex gap-2 items-center"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  disabled={isLoading}
                  maxLength={500}
                  className="flex-1 text-sm bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 disabled:opacity-50 transition-all placeholder:text-gray-400"
                />
                <motion.button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-accent-500 hover:bg-accent-600 disabled:bg-gray-200 rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
                  aria-label="Enviar mensaje"
                >
                  <Send className="w-4 h-4 text-white" />
                </motion.button>
              </form>
              <p className="text-[9px] text-gray-300 text-center mt-2 tracking-wide">
                INyMET · Asistente con IA · Respuestas en segundos
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Toggle Button ───────────────────────────────────────────── */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="relative w-14 h-14 bg-brand-600 hover:bg-brand-700 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-colors"
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat de soporte"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageSquare className="w-6 h-6 text-white" />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Unread dot */}
        <AnimatePresence>
          {hasUnread && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-[9px] font-bold flex items-center justify-center border-2 border-white"
            >
              1
            </motion.span>
          )}
        </AnimatePresence>

        {/* Ambient pulse ring when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-brand-400/40 animate-ping pointer-events-none" />
        )}
      </motion.button>
    </div>
  );
}

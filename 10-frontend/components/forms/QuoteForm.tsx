"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Loader2, Gauge, ShoppingCart } from "lucide-react";

const schema = z.object({
  quoteType: z.enum(["calibracion", "instrumentos"]),
  name: z.string().min(2, "Nombre requerido"),
  company: z.string().min(2, "Empresa requerida"),
  email: z.string().email("Email válido requerido"),
  phone: z.string().min(10, "Teléfono requerido"),
  industry: z.enum(["automotriz", "farmaceutica", "alimentos", "otro"], {
    errorMap: () => ({ message: "Selecciona una industria" }),
  }),
  brand: z.string().optional(),
  equipment: z.string().min(5, "Describe los equipos"),
  urgency: z.enum(["inmediato", "1-2_semanas", "1_mes", "sin_urgencia"], {
    errorMap: () => ({ message: "Selecciona urgencia" }),
  }),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const BRANDS = [
  { slug: "fluke", nombre: "Fluke" },
  { slug: "druck", nombre: "DRUCK" },
  { slug: "rotronic", nombre: "Rotronic" },
  { slug: "alicat", nombre: "Alicat Scientific" },
  { slug: "chroma", nombre: "Chroma" },
  { slug: "teledyne-lecroy", nombre: "Teledyne LeCroy" },
  { slug: "delta-ohm", nombre: "Delta OHM" },
  { slug: "hart-scientific", nombre: "Hart Scientific" },
  { slug: "pearson", nombre: "Pearson Electronics" },
  { slug: "rion", nombre: "Rion" },
  { slug: "trotec", nombre: "TROTEC" },
];

const COPY = {
  calibracion: {
    equipmentLabel: "Equipos a calibrar *",
    equipmentPlaceholder:
      "Ej: 5 termómetros RTD, 3 manómetros de presión, 2 multímetros...",
    equipmentError: "Describe los equipos a calibrar",
    urgencyLabel: "¿Cuándo necesitas el servicio?",
    submit: "Solicitar cotización de calibración",
  },
  instrumentos: {
    equipmentLabel: "Instrumentos que deseas adquirir *",
    equipmentPlaceholder:
      "Ej: 2 multímetros Fluke 87V, 1 calibrador de presión DRUCK, cantidad y modelo si lo conoces...",
    equipmentError: "Describe los instrumentos que deseas adquirir",
    urgencyLabel: "¿Cuándo planeas la compra?",
    submit: "Solicitar cotización de venta",
  },
} as const;

interface QuoteFormProps {
  defaultIndustry?: "automotriz" | "farmaceutica" | "alimentos" | "otro";
  defaultQuoteType?: "calibracion" | "instrumentos";
}

export default function QuoteForm({
  defaultIndustry,
  defaultQuoteType = "calibracion",
}: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { industry: defaultIndustry, quoteType: defaultQuoteType },
  });

  const quoteType = watch("quoteType");
  const copy = COPY[quoteType] ?? COPY.calibracion;

  // Preselección vía URL: /contacto?tipo=instrumentos&marca=fluke
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const tipo = params.get("tipo");
      const marca = params.get("marca");
      if (tipo === "instrumentos" || marca) {
        setValue("quoteType", "instrumentos");
      }
      if (marca && BRANDS.some((b) => b.slug === marca)) {
        setValue("brand", marca);
      }
    } catch {
      /* ignore */
    }
  }, [setValue]);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Error al enviar formulario");
      setSubmitted(true);
      // GA4 event
      if (typeof window !== "undefined" && (window as unknown as { gtag?: Function }).gtag) {
        (window as unknown as { gtag: Function }).gtag("event", "form_submit", {
          form_name: "quote_form",
          quote_type: data.quoteType,
          industry: data.industry,
        });
      }
    } catch {
      setError("Hubo un error al enviar. Por favor intenta de nuevo o llámanos directamente.");
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          ¡Solicitud recibida!
        </h3>
        <p className="text-gray-600">
          {quoteType === "instrumentos"
            ? "Te haremos llegar la cotización de venta a tu correo en menos de 24 horas hábiles."
            : "Un especialista se pondrá en contacto contigo en menos de 24 horas hábiles."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Tipo de cotización */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ¿Qué deseas cotizar? *
        </label>
        <div className="grid grid-cols-2 gap-3" role="group" aria-label="Tipo de cotización">
          <button
            type="button"
            onClick={() => setValue("quoteType", "calibracion")}
            className={`flex items-center justify-center gap-2 px-3 py-3 rounded-lg border-2 text-sm font-semibold transition-colors ${
              quoteType === "calibracion"
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-gray-200 text-gray-500 hover:border-gray-300"
            }`}
            aria-pressed={quoteType === "calibracion"}
          >
            <Gauge className="w-4 h-4 flex-shrink-0" />
            Servicios de calibración
          </button>
          <button
            type="button"
            onClick={() => setValue("quoteType", "instrumentos")}
            className={`flex items-center justify-center gap-2 px-3 py-3 rounded-lg border-2 text-sm font-semibold transition-colors ${
              quoteType === "instrumentos"
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-gray-200 text-gray-500 hover:border-gray-300"
            }`}
            aria-pressed={quoteType === "instrumentos"}
          >
            <ShoppingCart className="w-4 h-4 flex-shrink-0" />
            Venta de instrumentos
          </button>
        </div>
        <input type="hidden" {...register("quoteType")} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre completo *
          </label>
          <input
            {...register("name")}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            placeholder="Juan García"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Empresa *
          </label>
          <input
            {...register("company")}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            placeholder="Nombre de tu empresa"
          />
          {errors.company && (
            <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            {...register("email")}
            type="email"
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            placeholder="juan@empresa.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Teléfono *
          </label>
          <input
            {...register("phone")}
            type="tel"
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            placeholder="+52 (55) 1234-5678"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Industria *
          </label>
          <select
            {...register("industry")}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white"
          >
            <option value="">Selecciona tu industria</option>
            <option value="automotriz">Automotriz</option>
            <option value="farmaceutica">Farmacéutica</option>
            <option value="alimentos">Alimentos y Bebidas</option>
            <option value="otro">Otro sector</option>
          </select>
          {errors.industry && (
            <p className="text-red-500 text-xs mt-1">{errors.industry.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Urgencia *
          </label>
          <select
            {...register("urgency")}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white"
          >
            <option value="">{copy.urgencyLabel}</option>
            <option value="inmediato">Inmediato (auditoría próxima)</option>
            <option value="1-2_semanas">En 1–2 semanas</option>
            <option value="1_mes">En el próximo mes</option>
            <option value="sin_urgencia">Planeación anual</option>
          </select>
          {errors.urgency && (
            <p className="text-red-500 text-xs mt-1">{errors.urgency.message}</p>
          )}
        </div>
      </div>

      {quoteType === "instrumentos" && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Marca de interés
          </label>
          <select
            {...register("brand")}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white"
          >
            <option value="">Selecciona una marca (opcional)</option>
            {BRANDS.map((b) => (
              <option key={b.slug} value={b.slug}>
                {b.nombre}
              </option>
            ))}
            <option value="otra">Otra / no estoy seguro</option>
          </select>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {copy.equipmentLabel}
        </label>
        <textarea
          {...register("equipment")}
          rows={3}
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
          placeholder={copy.equipmentPlaceholder}
        />
        {errors.equipment && (
          <p className="text-red-500 text-xs mt-1">{copy.equipmentError}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Comentarios adicionales
        </label>
        <textarea
          {...register("message")}
          rows={2}
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
          placeholder="Estándares requeridos, cantidad de equipos, ubicación, etc."
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="btn-primary w-full text-base py-3 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin mr-2" />
            Enviando...
          </>
        ) : (
          copy.submit
        )}
      </button>

      <p className="text-xs text-center text-gray-400">
        Sin compromiso. Te haremos llegar la cotización a tu correo en menos de
        24 horas hábiles.
      </p>
    </form>
  );
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Nombre requerido"),
  company: z.string().min(2, "Empresa requerida"),
  email: z.string().email("Email válido requerido"),
  phone: z.string().min(10, "Teléfono requerido"),
  industry: z.enum(["automotriz", "farmaceutica", "alimentos", "otro"], {
    errorMap: () => ({ message: "Selecciona una industria" }),
  }),
  equipment: z.string().min(5, "Describe los equipos a calibrar"),
  urgency: z.enum(["inmediato", "1-2_semanas", "1_mes", "sin_urgencia"], {
    errorMap: () => ({ message: "Selecciona urgencia" }),
  }),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface QuoteFormProps {
  defaultIndustry?: "automotriz" | "farmaceutica" | "alimentos" | "otro";
}

export default function QuoteForm({ defaultIndustry }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { industry: defaultIndustry },
  });

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
          Un especialista se pondrá en contacto contigo en menos de 24 horas hábiles.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
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
            <option value="">¿Cuándo necesitas el servicio?</option>
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

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Equipos a calibrar *
        </label>
        <textarea
          {...register("equipment")}
          rows={3}
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
          placeholder="Ej: 5 termómetros RTD, 3 manómetros de presión, 2 multímetros..."
        />
        {errors.equipment && (
          <p className="text-red-500 text-xs mt-1">{errors.equipment.message}</p>
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
          "Solicitar cotización gratuita"
        )}
      </button>

      <p className="text-xs text-center text-gray-400">
        Sin compromiso. Recibirás respuesta en menos de 24 horas hábiles.
      </p>
    </form>
  );
}

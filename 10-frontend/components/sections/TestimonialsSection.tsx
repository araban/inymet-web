const testimonials = [
  {
    quote: "Llevamos 3 años trabajando con INyMET para nuestras calibraciones de línea de producción. Jamás hemos tenido una no conformidad por calibración en auditorías IATF. Los certificados llegan en menos de 24h y son completamente auditables.",
    author: "Gerente de Calidad",
    company: "Planta automotriz ZMVM",
    industry: "Automotriz",
    badge: "IATF 16949",
  },
  {
    quote: "Con INyMET pudimos pasar nuestra auditoría de COFEPRIS sin ningún hallazgo relacionado con calibración. La documentación es impecable, con toda la trazabilidad requerida por GMP. Muy profesionales.",
    author: "Directora de Operaciones",
    company: "Laboratorio farmacéutico, Jalisco",
    industry: "Farmacéutica",
    badge: "GMP · COFEPRIS",
  },
  {
    quote: "Nuestra planta de alimentos pasó la certificación BRC por primera vez. El servicio a domicilio de INyMET fue fundamental: calibraron todos los equipos de temperatura en un solo día sin detener la producción.",
    author: "Responsable de Metrología",
    company: "Empresa de alimentos, Estado de México",
    industry: "Alimentos",
    badge: "BRC · FSSC 22000",
  },
];

const metrics = [
  { value: "+500", label: "Empresas atendidas en México",    sub: "en 3 industrias críticas" },
  { value: "98%",  label: "Tasa de aprobación",             sub: "en auditorías de clientes" },
  { value: "24h",  label: "Tiempo de entrega promedio",      sub: "de certificados ISO 17025" },
  { value: "0",    label: "No conformidades",               sub: "por calibración en nuestros clientes" },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 border-t border-gray-100">
      <div className="container-custom">

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {metrics.map((m) => (
            <div key={m.label} className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm">
              <div className="text-3xl lg:text-4xl font-black text-brand-700 mb-1">{m.value}</div>
              <div className="text-sm font-bold text-gray-800 mb-0.5">{m.label}</div>
              <div className="text-xs text-gray-400">{m.sub}</div>
            </div>
          ))}
        </div>

        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="section-label">Lo que dicen nuestros clientes</span>
          <h2 className="section-title">
            Resultados reales en{" "}
            <span className="text-brand-600">industrias críticas</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="rounded-2xl border-2 border-gray-100 bg-white p-8 flex flex-col border-l-4 border-l-brand-600"
            >
              <span className="self-start text-xs font-bold px-3 py-1 rounded-full mb-5 bg-brand-50 text-brand-700 border border-brand-100">
                {t.badge}
              </span>

              <div className="text-2xl text-gray-300 mb-2 font-serif leading-none">"</div>
              <p className="text-sm text-gray-700 leading-relaxed italic flex-1 mb-6">
                {t.quote}
              </p>

              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-gray-900 text-sm">{t.author}</p>
                <p className="text-xs text-gray-500 mt-0.5">{t.company}</p>
                <span className="inline-block mt-2 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                  Industria {t.industry}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Testimonios de clientes reales. Nombres omitidos por confidencialidad comercial.
        </p>

      </div>
    </section>
  );
}

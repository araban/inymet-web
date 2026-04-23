import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    slug: "cada-cuanto-calibrar-equipos-industriales",
    category: "Guías",
    categoryColor: "bg-brand-50 text-brand-700",
    title: "¿Cada cuánto debes calibrar tus equipos industriales?",
    excerpt:
      "La frecuencia de calibración depende del tipo de instrumento, su uso y las normas aplicables. Descubre cómo crear un plan de calibración preventivo.",
    date: "Enero 2025",
    readTime: "5 min",
  },
  {
    slug: "que-es-iso-17025-y-por-que-importa",
    category: "ISO 17025",
    categoryColor: "bg-accent-50 text-accent-700",
    title: "ISO 17025: qué significa y por qué deberías exigirla",
    excerpt:
      "No todos los laboratorios son iguales. Descubre qué garantiza un certificado ISO 17025 y por qué los auditores lo exigen en industrias críticas.",
    date: "Diciembre 2024",
    readTime: "4 min",
  },
  {
    slug: "costos-mala-calibracion-en-manufactura",
    category: "Calidad",
    categoryColor: "bg-orange-50 text-orange-700",
    title: "Los costos ocultos de una mala calibración en manufactura",
    excerpt:
      "Una desviación de 0.5°C puede generar miles de pesos en scrap. Analizamos el impacto real de instrumentos descalibrados en planta.",
    date: "Noviembre 2024",
    readTime: "6 min",
  },
];

export default function BlogPreviewSection() {
  return (
    <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
      <div className="container-custom">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <div>
            <span className="section-label">Blog · Recursos técnicos</span>
            <h2 className="section-title">
              Aprende metrología aplicada
            </h2>
            <p className="text-gray-500 text-base mt-3 max-w-xl">
              Artículos técnicos escritos por metrólogos certificados para gerentes de calidad y responsables de metrología.
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden lg:inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors flex-shrink-0"
          >
            Ver todos los artículos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group card flex flex-col hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${post.categoryColor}`}>
                  {post.category}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-3 group-hover:text-brand-700 transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{post.excerpt}</p>
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-400">{post.readTime} lectura</span>
                <span className="text-xs font-semibold text-brand-600 group-hover:text-brand-700 flex items-center gap-1">
                  Leer <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 lg:hidden">
          <Link href="/blog" className="btn-secondary inline-flex items-center gap-2">
            Ver todos los artículos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

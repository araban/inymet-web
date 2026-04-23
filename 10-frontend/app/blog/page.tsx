import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";
import { getAllPostMetas } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog de Metrología y Calibración Industrial | INyMET",
  description:
    "Artículos especializados sobre calibración industrial, auditorías ISO, metrología y cumplimiento normativo para industrias en México.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPostMetas();
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#060d1f] text-white py-20 lg:py-24 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(29,78,216,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(29,78,216,0.05) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }} />
        <div aria-hidden className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative container-custom max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500/15 border border-accent-500/30 mb-6">
            <BookOpen className="w-3.5 h-3.5 text-accent-400" />
            <span className="text-xs font-bold text-accent-300 uppercase tracking-wide">Conocimiento técnico</span>
          </span>
          <h1 className="text-3xl lg:text-5xl font-black mb-5 leading-tight">
            Blog de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300">
              Metrología Industrial
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Recursos prácticos para gerentes de calidad, responsables de metrología
            y directores de operaciones en industrias certificadas de México.
          </p>
        </div>
      </section>

      <div className="py-14 lg:py-20 bg-gray-50 min-h-screen">
        <div className="container-custom max-w-5xl">

          {/* Featured post */}
          {featured && (
            <Link href={`/blog/${featured.slug}`} className="block mb-10 group">
              <div className="bg-[#060d1f] rounded-2xl p-8 lg:p-10 text-white hover:shadow-2xl transition-all hover:-translate-y-0.5 border border-white/5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Destacado
                  </span>
                  <span className="bg-white/10 text-blue-100 text-xs px-3 py-1 rounded-full border border-white/10">
                    {featured.category}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-black mb-3 group-hover:text-accent-300 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-slate-400 mb-6 max-w-2xl leading-relaxed">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {new Date(featured.date).toLocaleDateString("es-MX", {
                        year: "numeric", month: "long", day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {featured.readTime} de lectura
                    </span>
                  </div>
                  <span className="flex items-center gap-1.5 text-accent-400 text-sm font-bold group-hover:gap-2.5 transition-all">
                    Leer artículo <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Article grid */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {rest.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <article className="bg-white rounded-2xl border border-gray-100 p-6 h-full hover:shadow-md hover:border-brand-200 transition-all hover:-translate-y-0.5 flex flex-col">
                    <div className="mb-3">
                      <span className="text-xs bg-brand-50 text-brand-700 px-2.5 py-0.5 rounded-full font-bold border border-brand-100">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-base font-black text-gray-900 mb-2 group-hover:text-brand-600 transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-5 leading-relaxed flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(post.date).toLocaleDateString("es-MX", {
                            month: "short", day: "numeric", year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-brand-600 font-bold group-hover:gap-2 transition-all">
                        Leer <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}

          {posts.length === 0 && (
            <div className="text-center py-20">
              <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Los artículos estarán disponibles próximamente.</p>
            </div>
          )}

          {/* CTA strip */}
          <div className="mt-14 bg-brand-700 rounded-2xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-black text-lg mb-1">¿Necesitas calibración urgente?</h3>
              <p className="text-blue-100 text-sm">Respondemos cotizaciones en menos de 24 horas.</p>
            </div>
            <Link href="/contacto"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-accent-500 hover:bg-accent-400 text-white font-bold rounded-xl transition-all shadow-lg flex-shrink-0 hover:-translate-y-px">
              Cotizar ahora
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <p className="text-center text-xs text-gray-400 mt-10">
            Para agregar un artículo: crea un archivo <code>.md</code> en <code>content/blog/</code> y haz push. Vercel lo publica automáticamente.
          </p>
        </div>
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { getPost, getAllPostMetas, getAllSlugs } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      ...(post.image && { images: [{ url: post.image, alt: post.title }] }),
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const allPosts = getAllPostMetas();
  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: post.image ? `https://inymet.com.mx${post.image}` : undefined,
    publisher: {
      "@type": "Organization",
      name: "INyMET",
      logo: { "@type": "ImageObject", url: "https://inymet.com.mx/images/logo.png" },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://inymet.com.mx" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://inymet.com.mx/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://inymet.com.mx/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-white border-b border-gray-100 py-12">
          <div className="container-custom max-w-3xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 mb-6">
              <ArrowLeft className="w-4 h-4" />
              Volver al blog
            </Link>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs bg-brand-50 text-brand-700 px-3 py-1 rounded-full font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime} de lectura
              </span>
            </div>
          </div>
        </section>

        {/* Featured image */}
        {post.image && (
          <div className="container-custom max-w-3xl pt-8">
            <div className="relative w-full h-56 lg:h-72 rounded-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        {/* Content */}
        <section className="py-10">
          <div className="container-custom max-w-3xl">
            <div
              className="prose prose-gray prose-headings:font-bold prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3 prose-p:leading-relaxed prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-800 prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline prose-table:text-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* CTA */}
            <div className="mt-10 bg-brand-900 rounded-2xl p-8 text-white text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <h3 className="text-xl font-bold">¿Necesitas apoyo con tu sistema de calibración?</h3>
              </div>
              <p className="text-blue-100 text-sm mb-5">
                Nuestros especialistas pueden revisar tu situación y decirte exactamente qué necesitas — sin costo.
              </p>
              <Link href="/contacto" className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                Solicitar diagnóstico gratuito
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="pb-16">
            <div className="container-custom max-w-3xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Artículos relacionados</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="bg-white rounded-2xl border border-gray-100 p-5 hover:border-brand-200 hover:shadow-sm transition-all group"
                  >
                    <span className="text-xs bg-brand-50 text-brand-700 px-2.5 py-0.5 rounded-full font-medium">
                      {r.category}
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 mt-3 mb-1 group-hover:text-brand-600 transition-colors leading-snug">
                      {r.title}
                    </h3>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {r.readTime}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}

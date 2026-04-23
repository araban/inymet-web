import type { Metadata } from "next";
import dynamic from "next/dynamic";
// Above-fold: import directly for fastest LCP
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
// Below-fold: lazy-load to minimize initial JS bundle
const PainPointsSection = dynamic(() => import("@/components/sections/PainPointsSection"));
const IndustriesSection = dynamic(() => import("@/components/sections/IndustriesSection"));
const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"));
const ValuePropsSection = dynamic(() => import("@/components/sections/ValuePropsSection"));
const ProcessSection = dynamic(() => import("@/components/sections/ProcessSection"));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"));
const BrandsSection = dynamic(() => import("@/components/sections/BrandsSection"));
const CTASection = dynamic(() => import("@/components/sections/CTASection"));

export const metadata: Metadata = {
  title: "Calibración Certificada ISO 17025 en México | INyMET",
  description:
    "Reducimos riesgos en auditorías ISO con calibración certificada CENAM. 11 laboratorios acreditados ISO 17025. Certificados en menos de 24h. Industrias: Automotriz, Farmacéutica, Alimentos.",
  keywords: [
    "calibración de instrumentos México",
    "laboratorio metrología ISO 17025",
    "calibración certificada CENAM México",
    "metrología industrial México",
    "calibración temperatura presión eléctrica",
    "calibración IATF 16949 GMP BRC HACCP",
    "laboratorio calibración Ciudad de México",
  ],
  alternates: {
    canonical: "https://inymet.com.mx",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://inymet.com.mx/#organization",
  name: "INyMET — Instrumentación y Metrología",
  description: "Laboratorio de metrología y calibración certificado ISO 17025 en México. Trazabilidad CENAM.",
  url: "https://inymet.com.mx",
  telephone: "+52-55-5754-3087",
  email: "ventas@inymet.com.mx",
  image: "https://inymet.com.mx/images/lab-tecnico-multimetros.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Salvatierra 32, Col. San Bartolo Atepehuacan",
    addressLocality: "Ciudad de México",
    addressRegion: "CDMX",
    postalCode: "07730",
    addressCountry: "MX",
  },
  areaServed: { "@type": "Country", name: "México" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Calibración Certificada",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Calibración de temperatura", url: "https://inymet.com.mx/calibracion#temperatura" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Calibración de presión", url: "https://inymet.com.mx/calibracion#presion" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Calibración eléctrica", url: "https://inymet.com.mx/calibracion#electricos" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Metrología dimensional", url: "https://inymet.com.mx/calibracion#dimensional" } },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/* 1. Hero: propuesta de valor + CTA */}
      <HeroSection />
      {/* 2. Trust: ISO, años, empresas, normas */}
      <TrustSection />
      {/* 3. Pain points: conectar con el dolor del cliente */}
      <PainPointsSection />
      {/* 4. Industrias: especialización por sector */}
      <IndustriesSection />
      {/* 5. Servicios: 11 laboratorios */}
      <ServicesSection />
      {/* 6. Por qué INyMET: diferenciadores clave */}
      <ValuePropsSection />
      {/* 7. Proceso: 4 pasos simples */}
      <ProcessSection />
      {/* 8. Testimonios y métricas */}
      <TestimonialsSection />
      {/* 9. Marcas de instrumentación */}
      <BrandsSection />
      {/* 10. CTA final: conversión */}
      <CTASection />
    </>
  );
}

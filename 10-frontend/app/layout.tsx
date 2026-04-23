import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SocialSidebar from "@/components/ui/SocialSidebar";
import ThemePicker from "@/components/ui/ThemePicker";
// ChatWidget (Claude) temporalmente desactivado — reemplazado por HubSpot Chat
// import ChatWidget from "@/components/ui/ChatWidget";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://inymet.com.mx";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "INyMET | Calibración Certificada ISO 17025 en México",
    template: "%s | INyMET",
  },
  description:
    "Reducimos riesgos en auditorías ISO mediante calibración certificada con tiempos de respuesta líderes en México. Industrias: Automotriz, Farmacéutica, Alimentos.",
  keywords: [
    "calibración de instrumentos México",
    "laboratorio metrología ISO 17025",
    "calibración industrial certificada",
    "metrología certificada CENAM",
    "calibración temperatura presión eléctrica",
    "calibración IATF 16949 GMP BRC",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "INyMET",
    url: BASE_URL,
    title: "INyMET | Calibración Certificada ISO 17025 en México",
    description:
      "Reducimos riesgos en auditorías ISO mediante calibración certificada. Respuesta en 24h. Automotriz, Farmacéutica, Alimentos.",
    images: [
      {
        url: "/images/lab-tecnico-multimetros.jpg",
        width: 1138,
        height: 344,
        alt: "Laboratorio de calibración INyMET — técnico con instrumentos de medición",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INyMET | Calibración Certificada ISO 17025 en México",
    description:
      "Reducimos riesgos en auditorías ISO mediante calibración certificada. Respuesta en 24h.",
    images: ["/images/lab-tecnico-multimetros.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const hubspotPortalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;

  return (
    <html lang="es" data-theme="marina">
      <head>
        {/* Restore saved theme before first paint to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('inymet-theme');if(t)document.documentElement.dataset.theme=t;}catch(e){}})()`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      {gtmId && <GoogleTagManager gtmId={gtmId} />}
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <SocialSidebar />
        {/* ChatWidget (Claude) desactivado temporalmente
        <ChatWidget />
        */}
        <ThemePicker />
        {/* HubSpot Chat */}
        {hubspotPortalId && (
          <Script
            id="hs-chat"
            src={`//js.hs-scripts.com/${hubspotPortalId}.js`}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}

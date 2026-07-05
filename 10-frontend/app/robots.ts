import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://inymet.com.mx";
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/calibracion-v2"] },
    sitemap: `${base}/sitemap.xml`,
  };
}

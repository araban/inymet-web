# INyMET — Plan de Sitemap y Arquitectura SEO

## URLs del sitio (prioridad SEO)

```xml
<!-- sitemap.xml structure -->
<urlset>
  <!-- Tier 1: Páginas de alto valor comercial -->
  <url>
    <loc>https://inymet.com/</loc>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://inymet.com/contacto</loc>
    <priority>0.9</priority>
    <changefreq>monthly</changefreq>
  </url>
  
  <!-- Tier 2: Servicios core -->
  <url>
    <loc>https://inymet.com/calibracion</loc>
    <priority>0.9</priority>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>https://inymet.com/metrologia</loc>
    <priority>0.8</priority>
    <changefreq>monthly</changefreq>
  </url>
  
  <!-- Tier 3: Landing pages por industria -->
  <url>
    <loc>https://inymet.com/industrias/automotriz</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://inymet.com/industrias/farmaceutica</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://inymet.com/industrias/alimentos</loc>
    <priority>0.8</priority>
  </url>
  
  <!-- Tier 4: Contenido y recursos -->
  <url>
    <loc>https://inymet.com/blog</loc>
    <priority>0.7</priority>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://inymet.com/recursos</loc>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://inymet.com/casos-de-exito</loc>
    <priority>0.7</priority>
  </url>
</urlset>
```

## Arquitectura de Internal Linking

```
Homepage (/)
├── → Calibración (/calibracion)
│   ├── → Temperatura (/calibracion#temperatura)
│   ├── → Presión (/calibracion#presion)
│   └── → Eléctrica (/calibracion#electricos)
├── → Metrología (/metrologia)
├── → Industrias
│   ├── → Automotriz (/industrias/automotriz) → /contacto
│   ├── → Farmacéutica (/industrias/farmaceutica) → /contacto
│   └── → Alimentos (/industrias/alimentos) → /contacto
├── → Blog (/blog) → artículos → /contacto
├── → Casos de Éxito (/casos-de-exito)
├── → Recursos (/recursos)
└── → Contacto (/contacto) [CTA global]
```

## Reglas de Internal Linking

1. Cada artículo de blog debe linkar a:
   - Al menos 1 landing page de industria relevante
   - La página de /contacto (CTA)
   - Al menos 1 otro artículo del blog relacionado

2. Las landing pages de industria deben linkar a:
   - Artículos de blog relevantes para esa industria
   - La página de /calibracion o /metrologia
   - El formulario de cotización (/contacto#cotizar)

3. La homepage debe linkar a:
   - Las 3 landing pages de industria (hero/services section)
   - Los 2-3 artículos de blog más recientes
   - /contacto (múltiples CTAs)

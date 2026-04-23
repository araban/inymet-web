import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Uso | INyMET",
  description: "Términos y condiciones de uso del sitio web de INyMET — Instrumentación y Metrología.",
};

export default function TerminosDeUsoPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Términos de Uso</h1>
        <p className="text-sm text-gray-400 mb-10">Última actualización: abril de 2026</p>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 lg:p-10 space-y-8 text-sm text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">1. Aceptación de los términos</h2>
            <p>
              Al acceder y utilizar el sitio web de <strong>INyMET</strong> (inymet.com.mx), usted acepta estar vinculado
              por estos Términos de Uso. Si no está de acuerdo con alguno de estos términos, le pedimos que no utilice este sitio.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">2. Uso del sitio</h2>
            <p>Este sitio web está destinado a proporcionar información sobre los servicios de calibración y metrología de INyMET.
              Usted se compromete a utilizarlo únicamente para fines lícitos y de conformidad con estos términos.
            </p>
            <p className="mt-2">Queda prohibido:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Usar el sitio de manera que pueda dañar, deshabilitar o sobrecargar los servidores</li>
              <li>Intentar acceder de forma no autorizada a sistemas o redes relacionados</li>
              <li>Reproducir o distribuir el contenido sin autorización escrita de INyMET</li>
              <li>Usar el sitio para enviar comunicaciones no solicitadas (spam)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">3. Propiedad intelectual</h2>
            <p>
              Todo el contenido de este sitio — incluyendo textos, imágenes, logotipos, diseño y código — es propiedad de
              INyMET o sus licenciantes y está protegido por las leyes mexicanas e internacionales de propiedad intelectual.
              Ningún contenido puede ser reproducido, distribuido o modificado sin autorización previa y por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">4. Información en el sitio</h2>
            <p>
              La información publicada en este sitio es de carácter general e informativo. INyMET realiza esfuerzos razonables
              para mantenerla actualizada y precisa, pero no garantiza su exactitud, completitud o vigencia en todo momento.
              Para información técnica específica sobre servicios o certificaciones, consulte directamente con nuestro equipo.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">5. Limitación de responsabilidad</h2>
            <p>
              INyMET no será responsable por daños directos, indirectos, incidentales o consecuentes derivados del uso o la
              imposibilidad de uso de este sitio web, incluyendo pérdida de datos o interrupciones del servicio.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">6. Links a terceros</h2>
            <p>
              Este sitio puede contener enlaces a sitios web de terceros. INyMET no tiene control sobre el contenido de dichos
              sitios y no asume responsabilidad por su contenido, políticas de privacidad o prácticas.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">7. Legislación aplicable</h2>
            <p>
              Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier controversia derivada del uso
              de este sitio será sometida a la jurisdicción de los tribunales competentes en México.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">8. Contacto</h2>
            <p>
              Para cualquier pregunta sobre estos términos, puede contactarnos en:{" "}
              <a href="mailto:contacto@inymet.com.mx" className="text-brand-600 hover:underline">contacto@inymet.com.mx</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

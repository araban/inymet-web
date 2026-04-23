import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | INyMET",
  description: "Aviso de privacidad de INyMET conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).",
};

export default function AvisoDePrivacidadPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Aviso de Privacidad</h1>
        <p className="text-sm text-gray-400 mb-10">Última actualización: abril de 2026</p>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 lg:p-10 space-y-8 text-sm text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">1. Identidad y domicilio del Responsable</h2>
            <p>
              <strong>INyMET</strong> (Instrumentación y Metrología), con domicilio en México, es responsable del tratamiento
              de los datos personales que usted proporcione a través de este sitio web, conforme a la{" "}
              <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong> y su Reglamento.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">2. Datos personales que recabamos</h2>
            <p>A través de nuestros formularios de contacto y cotización, podemos recabar los siguientes datos personales:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Nombre completo</li>
              <li>Nombre de empresa y cargo</li>
              <li>Correo electrónico corporativo</li>
              <li>Número de teléfono</li>
              <li>Industria y necesidades de calibración</li>
            </ul>
            <p className="mt-3">No recabamos datos personales sensibles.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">3. Finalidades del tratamiento</h2>
            <p>Sus datos personales son utilizados para las siguientes <strong>finalidades primarias</strong>:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Atender solicitudes de cotización de servicios de calibración</li>
              <li>Contactarle para dar seguimiento a su solicitud</li>
              <li>Emitir propuestas comerciales y certificados de calibración</li>
              <li>Cumplir con obligaciones legales y contractuales</li>
            </ul>
            <p className="mt-3">
              <strong>Finalidades secundarias</strong> (puede oponerse a estas sin afectar la relación comercial):
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Envío de información sobre nuevos servicios, recursos o artículos del blog</li>
              <li>Invitaciones a eventos o webinars de metrología industrial</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">4. Transferencia de datos personales</h2>
            <p>
              INyMET puede compartir sus datos con los siguientes terceros para operar sus servicios, quienes están obligados
              a mantener la confidencialidad de la información:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>HubSpot Inc.</strong> — plataforma CRM para gestión de clientes (servidores en EE.UU., cumple con ISO 27001)</li>
              <li>Proveedores de servicios de email transaccional</li>
            </ul>
            <p className="mt-3">No vendemos ni cedemos datos personales a terceros con fines comerciales ajenos a INyMET.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">5. Derechos ARCO</h2>
            <p>
              Usted tiene derecho a <strong>Acceder, Rectificar, Cancelar u Oponerse</strong> al tratamiento de sus datos personales
              (derechos ARCO). Para ejercerlos, envíe un correo a{" "}
              <a href="mailto:contacto@inymet.com.mx" className="text-brand-600 hover:underline">contacto@inymet.com.mx</a>{" "}
              con el asunto "Derechos ARCO", indicando su nombre completo, los datos que desea ejercer y copia de identificación oficial.
            </p>
            <p className="mt-2">Responderemos en un plazo máximo de 20 días hábiles.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">6. Cookies y tecnologías de rastreo</h2>
            <p>
              Este sitio utiliza cookies de Google Analytics 4 (GA4) y Google Tag Manager para analizar el tráfico y mejorar
              la experiencia del usuario. Estas cookies no recaban datos personales identificables directamente. Puede deshabilitar
              las cookies desde la configuración de su navegador.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">7. Cambios al aviso de privacidad</h2>
            <p>
              INyMET se reserva el derecho de modificar este aviso de privacidad en cualquier momento. Los cambios serán
              publicados en esta página con la fecha de actualización correspondiente. El uso continuo del sitio implica la
              aceptación de las modificaciones.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">8. Autoridad supervisora</h2>
            <p>
              Si considera que su derecho a la protección de datos personales ha sido vulnerado, puede acudir al Instituto
              Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI):{" "}
              <a href="https://www.inai.org.mx" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
                www.inai.org.mx
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

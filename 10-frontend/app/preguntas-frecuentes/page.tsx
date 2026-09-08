import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import PhoneCTA from "@/components/ui/PhoneCTA";
import { CONTACT, waLink } from "@/lib/contact";

const IAS_LINK =
  "https://www.iasonline.org/?post_type=ias_certificate&orderby=org&order=ASC&s=&global=1&service=0&number=CL-101&keyword=";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes: Calibración ISO 17025",
  description:
    "Resolvemos las dudas más comunes sobre calibración de instrumentos, acreditación IAS CL-101, tiempos de entrega, certificados y trazabilidad CENAM.",
  alternates: {
    canonical: "https://inymet.com.mx/preguntas-frecuentes",
  },
  openGraph: {
    title: "Preguntas Frecuentes sobre Calibración ISO 17025 | INyMET",
    description:
      "Resolvemos las dudas más comunes sobre calibración de instrumentos, acreditación IAS CL-101, tiempos de entrega, certificados y trazabilidad CENAM.",
    url: "https://inymet.com.mx/preguntas-frecuentes",
  },
};

interface FAQItem {
  q: string;
  a: string[];
  list?: string[];
  iasLink?: boolean;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const categories: FAQCategory[] = [
  {
    title: "Acreditación IAS CL-101",
    items: [
      {
        q: "¿Qué servicios de calibración ofrece INyMET?",
        a: [
          "INyMET ofrece servicios de calibración para diferentes tipos de instrumentos y magnitudes de medición. Los servicios y equipos incluidos dentro del alcance de acreditación pueden consultarse directamente en el registro oficial de IAS.",
        ],
        iasLink: true,
      },
      {
        q: "¿Qué equipos puede calibrar INyMET?",
        a: [
          "La capacidad de calibración depende del tipo de instrumento, magnitud, intervalo de medición y demás características del servicio solicitado.",
          "Para consultar los equipos, magnitudes e intervalos incluidos en el alcance de acreditación de INyMET, puede consultar el registro oficial de IAS.",
        ],
        iasLink: true,
      },
      {
        q: "¿Qué significa que INyMET esté acreditado?",
        a: [
          "La acreditación significa que el laboratorio ha sido evaluado por un organismo de acreditación y demuestra competencia para realizar determinados servicios de calibración conforme a los requisitos aplicables.",
          "La acreditación de INyMET corresponde al certificado CL-101 de IAS y aplica a los servicios incluidos específicamente dentro de su alcance de acreditación.",
        ],
        iasLink: true,
      },
      {
        q: "¿Todas las calibraciones realizadas por INyMET están acreditadas?",
        a: [
          "La condición de acreditación aplica únicamente a los servicios que se encuentran dentro del alcance de acreditación vigente del laboratorio.",
          "Si desea confirmar si un equipo o servicio específico se encuentra dentro del alcance, puede consultar el certificado CL-101 de INyMET en IAS o solicitar asesoría a nuestro personal.",
        ],
        iasLink: true,
      },
      {
        q: "¿Cómo puedo verificar si un servicio está dentro del alcance de acreditación?",
        a: [
          "Puede consultar el alcance vigente de INyMET directamente en el registro oficial de IAS mediante el número de acreditación CL-101. Ahí podrá consultar la información oficial correspondiente al alcance de acreditación.",
        ],
        iasLink: true,
      },
      {
        q: "¿Dónde puedo consultar las magnitudes e intervalos de medición acreditados?",
        a: [
          "Las magnitudes, servicios, equipos e intervalos incluidos dentro del alcance de acreditación deben consultarse en el documento oficial de alcance de IAS. Esto permite verificar la información vigente directamente con el organismo de acreditación.",
        ],
        iasLink: true,
      },
      {
        q: "¿Qué sucede si mi equipo no está dentro del alcance de acreditación?",
        a: [
          "Si el servicio solicitado no se encuentra dentro del alcance de acreditación vigente, nuestro personal puede revisar las características del servicio y determinar las opciones disponibles.",
          "La condición de acreditación debe verificarse siempre contra el alcance vigente de IAS.",
        ],
        iasLink: true,
      },
      {
        q: "¿Qué es IAS?",
        a: [
          "IAS (International Accreditation Service) es un organismo de acreditación que evalúa y acredita a laboratorios, organismos de inspección y otras organizaciones de evaluación de la conformidad, de acuerdo con normas y requisitos internacionales aplicables.",
          "IAS es signatario de acuerdos de reconocimiento multilateral de ILAC (International Laboratory Accreditation Cooperation), lo que contribuye al reconocimiento internacional de las acreditaciones otorgadas por sus organismos signatarios.",
          "INyMET cuenta con la acreditación CL-101 otorgada por IAS. Para consultar el alcance vigente de nuestra acreditación, incluyendo los servicios, equipos, magnitudes e intervalos de medición acreditados, puede consultar directamente el registro oficial de IAS.",
        ],
        iasLink: true,
      },
    ],
  },
  {
    title: "Calibración: conceptos y frecuencia",
    items: [
      {
        q: "¿Qué es una calibración?",
        a: [
          "La calibración es el proceso mediante el cual se establecen, bajo condiciones especificadas, las relaciones entre los valores indicados por un instrumento de medición y los valores correspondientes proporcionados por patrones de referencia.",
          "En términos prácticos, permite conocer el comportamiento de un instrumento de medición y contar con evidencia documentada de sus resultados.",
        ],
      },
      {
        q: "¿Cada cuánto tiempo debo calibrar mi equipo?",
        a: [
          "El intervalo de calibración depende de diversos factores, como el tipo de instrumento, frecuencia de uso, condiciones ambientales, estabilidad del equipo, historial de calibraciones y los requisitos establecidos por el usuario o su sistema de gestión.",
          "Por ello, no existe un único intervalo de calibración aplicable a todos los equipos.",
        ],
      },
      {
        q: "¿Cómo puedo saber si mi equipo necesita calibración?",
        a: [
          "Si el instrumento se utiliza para realizar mediciones que afectan la calidad de un producto, proceso, servicio o resultado, es importante establecer y mantener un programa de calibración adecuado.",
          "También puede ser necesario calibrarlo cuando ha transcurrido el intervalo establecido, después de una reparación o ajuste, cuando ha sufrido algún daño o cuando existen dudas sobre la confiabilidad de sus mediciones.",
        ],
      },
      {
        q: "¿Qué diferencia hay entre calibración y ajuste?",
        a: [
          "La calibración permite determinar el comportamiento de un instrumento mediante la comparación de sus indicaciones con valores de referencia.",
          "El ajuste, en cambio, consiste en realizar modificaciones al instrumento con el objetivo de que sus indicaciones se aproximen a los valores establecidos o cumplan determinadas especificaciones.",
          "Son procesos diferentes y un instrumento puede requerir calibración sin necesidad de ajuste.",
        ],
      },
    ],
  },
  {
    title: "Cotización y proceso de servicio",
    items: [
      {
        q: "¿Cómo puedo solicitar una cotización?",
        a: [
          "Puede ponerse en contacto con INyMET a través de nuestros medios de atención y proporcionar la información disponible del equipo que desea calibrar. Para facilitar la elaboración de la cotización, recomendamos proporcionar:",
        ],
        list: [
          "Tipo de instrumento",
          "Marca",
          "Modelo",
          "Número de serie",
          "Magnitud a calibrar",
          "Intervalo o puntos de medición, cuando aplique",
          "Cualquier requisito específico del servicio",
        ],
      },
      {
        q: "¿Qué información necesito para cotizar una calibración?",
        a: [
          "Entre más información se proporcione sobre el instrumento, más precisa podrá ser la cotización. Como mínimo, es recomendable contar con el tipo de equipo y magnitud que se desea calibrar. Una fotografía del instrumento o de su placa de identificación también puede ayudarnos a identificarlo correctamente.",
          "Si tiene dudas sobre la información requerida, nuestro personal puede orientarlo.",
        ],
      },
      {
        q: "¿Puedo enviar mi equipo a INyMET para calibración?",
        a: [
          "Sí. Los equipos pueden ser entregados en nuestras instalaciones o enviados de acuerdo con las condiciones establecidas para el servicio.",
          "Antes de enviar un equipo, recomendamos solicitar la cotización y confirmar las condiciones de recepción y entrega correspondientes.",
        ],
      },
      {
        q: "¿INyMET realiza calibraciones en sitio?",
        a: [
          "Sí. La disponibilidad de servicios en sitio depende del tipo de instrumento, magnitud, condiciones técnicas y características del servicio requerido.",
          "Puede consultar con nuestro personal para determinar si el servicio que necesita puede realizarse en las instalaciones de su empresa.",
        ],
      },
      {
        q: "¿Cuánto tiempo tarda una calibración?",
        a: [
          "El tiempo de servicio depende del tipo de instrumento, magnitud, condiciones del equipo, servicio solicitado y carga de trabajo del laboratorio.",
          "Como referencia, el tiempo estimado de entrega es de hasta 2 semanas para servicios normales. En caso de requerir un servicio urgente, el tiempo puede ser de 3 días a 1 semana, sujeto a la disponibilidad del laboratorio y a las condiciones del equipo.",
          "El tiempo de entrega aplicable se confirma al momento de realizar la cotización y recibir el equipo.",
        ],
      },
      {
        q: "¿Qué pasa si mi equipo necesita un ajuste?",
        a: [
          "Si durante el proceso se identifica que el equipo requiere un ajuste o trabajo adicional, se informa al cliente antes de realizarlo. Cualquier trabajo adicional que implique un costo deberá ser autorizado previamente por el cliente.",
        ],
      },
      {
        q: "¿Qué pasa si mi equipo llega dañado o no funciona correctamente?",
        a: [
          "El equipo es revisado durante el proceso de recepción. Si se identifica alguna condición que pueda afectar la realización del servicio, se informa al cliente para determinar las acciones correspondientes.",
          "En caso de que el instrumento requiera reparación, ajuste u otro servicio adicional, se solicitará la autorización correspondiente antes de realizar trabajos que generen un costo adicional.",
        ],
      },
      {
        q: "¿Cómo puedo conocer el estatus de mi equipo?",
        a: [
          "Puede comunicarse con su ejecutivo de servicios proporcionando los datos de identificación del servicio o equipo para solicitar información sobre su estatus.",
        ],
      },
      {
        q: "¿Cómo se realiza la entrega de mi equipo?",
        a: [
          "La entrega se realiza de acuerdo con las condiciones establecidas para cada servicio. El equipo puede ser entregado o enviado conforme a lo acordado con el cliente durante el proceso de contratación.",
        ],
      },
      {
        q: "¿INyMET atiende empresas de toda la República Mexicana?",
        a: [
          "Sí. Los servicios pueden coordinarse con clientes ubicados en diferentes partes de la República Mexicana. Las condiciones de envío, recepción y entrega se determinan de acuerdo con cada servicio.",
        ],
      },
    ],
  },
  {
    title: "Certificados y trazabilidad",
    items: [
      {
        q: "¿Qué documento recibiré después de la calibración?",
        a: [
          "Una vez concluido el servicio, se entrega el certificado o documento correspondiente de acuerdo con las características del servicio realizado.",
          "El documento contiene información relevante del instrumento, las condiciones del servicio y los resultados obtenidos durante la calibración, según corresponda.",
        ],
      },
      {
        q: "¿El certificado de calibración tiene trazabilidad?",
        a: [
          "Los certificados de calibración incluyen la información correspondiente a la trazabilidad metrológica de los resultados, de acuerdo con las características del servicio y los requisitos aplicables. La información específica puede consultarse en el certificado emitido.",
        ],
      },
      {
        q: "¿Puedo utilizar el certificado de calibración durante una auditoría?",
        a: [
          "Los certificados de calibración pueden formar parte de la evidencia documental utilizada dentro de sistemas de gestión de calidad y procesos de auditoría, siempre considerando los requisitos específicos aplicables a cada organización.",
          "Cuando la calibración se encuentra dentro del alcance de acreditación de INyMET, el certificado correspondiente identifica esta condición de acuerdo con los requisitos aplicables.",
        ],
      },
    ],
  },
  {
    title: "Contacto",
    items: [
      {
        q: "¿Cómo puedo solicitar más información?",
        a: [
          "Nuestro equipo está disponible para orientarlo sobre los servicios de calibración, cotizaciones y requisitos de atención. Puede ponerse en contacto con INyMET a través de nuestros medios de comunicación disponibles en esta página.",
        ],
      },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: categories.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: [...item.a, ...(item.list ?? [])].join(" "),
      },
    }))
  ),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://inymet.com.mx" },
    { "@type": "ListItem", position: 2, name: "Preguntas frecuentes", item: "https://inymet.com.mx/preguntas-frecuentes" },
  ],
};

export default function PreguntasFrecuentesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[#060d1f] text-white py-20 lg:py-24 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(29,78,216,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(29,78,216,0.05) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="relative container-custom max-w-3xl text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent-500/15 border border-accent-500/30 mb-6 text-xs font-bold text-accent-300 uppercase tracking-wide">
            Preguntas frecuentes
          </span>
          <h1 className="text-3xl lg:text-5xl font-black mb-5 leading-tight">
            Dudas comunes sobre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300">
              calibración y acreditación
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Respuestas directas para gerentes de calidad, responsables de metrología y directores
            de operaciones sobre nuestros servicios de calibración certificada.
          </p>
        </div>
      </section>

      {/* FAQ categories */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-custom max-w-3xl">
          {categories.map((cat) => (
            <div key={cat.title} className="mb-12 last:mb-0">
              <h2 className="text-xl lg:text-2xl font-black text-gray-900 mb-4 pb-3 border-b-2 border-brand-100">
                {cat.title}
              </h2>
              <div className="space-y-3">
                {cat.items.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-2xl border-2 border-gray-100 open:border-brand-200 open:bg-brand-50/30 transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4 font-bold text-sm lg:text-base text-gray-900">
                      {item.q}
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center text-lg leading-none group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-5 pb-5 -mt-1 text-sm text-gray-600 leading-relaxed space-y-3">
                      {item.a.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                      {item.list && (
                        <ul className="list-disc list-inside space-y-1 pl-1">
                          {item.list.map((li) => (
                            <li key={li}>{li}</li>
                          ))}
                        </ul>
                      )}
                      {item.iasLink && (
                        <a
                          href={IAS_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 hover:text-brand-700"
                        >
                          Consultar alcance de acreditación CL-101 en IAS
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gray-50 border-t border-gray-100">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl lg:text-3xl font-black text-gray-900 mb-4">
            ¿No encontró la respuesta que buscaba?
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Escríbanos y un especialista le ayudará con su caso específico, sin costo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="btn-primary inline-flex items-center gap-2">
              Hablar con un especialista
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={waLink("Hola, tengo una duda sobre sus servicios de calibración.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold rounded-xl border border-gray-200 transition-all"
            >
              Escribir por WhatsApp
            </a>
            <PhoneCTA
              className="items-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold rounded-xl border border-gray-200 transition-all"
              iconClass="w-4 h-4"
              desktopLabel="Solicitar una llamada"
            />
          </div>
          <p className="text-xs text-gray-400 mt-6">
            {CONTACT.emailService} · {CONTACT.emailSales} · {CONTACT.phoneDisplay}
          </p>
        </div>
      </section>
    </>
  );
}

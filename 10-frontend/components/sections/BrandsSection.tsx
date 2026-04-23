import Image from "next/image";

const brands = [
  { name: "Fluke",             logo: "/images/logo-fluke.gif",    bg: "bg-white" },
  { name: "DRUCK",             logo: "/images/logo-druck.png",    bg: "bg-[#1a1a2e]" },
  { name: "Rotronic",          logo: "/images/logo-rotronic.svg", bg: "bg-white" },
  { name: "Alicat Scientific", logo: "/images/logo-alicat.svg",   bg: "bg-white" },
  { name: "Chroma",            logo: "/images/logo-chroma.svg",   bg: "bg-white" },
  { name: "Teledyne LeCroy",   logo: "/images/logo-teledyne.svg", bg: "bg-white" },
  { name: "Delta OHM",         logo: "/images/logo-deltaohm.svg", bg: "bg-white" },
  { name: "Hart Scientific",   logo: "/images/logo-hart.svg",     bg: "bg-white" },
  { name: "Pearson",           logo: "/images/logo-pearson.png",  bg: "bg-white" },
  { name: "Rion",              logo: "/images/logo-rion.gif",     bg: "bg-white" },
];

export default function BrandsSection() {
  return (
    <section className="py-10 bg-gray-50 border-y border-gray-100">
      <div className="container-custom">

        <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-7">
          Distribuidor autorizado · Laboratorio de calibración certificado
        </p>

        <div className="flex flex-wrap justify-center items-center gap-3">
          {brands.map((brand) => (
            <div key={brand.name}
              className={`relative w-28 h-12 rounded-xl border border-gray-200 overflow-hidden flex-shrink-0 ${brand.bg} hover:shadow-md transition-shadow`}>
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                sizes="112px"
                className="object-contain p-2"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] text-gray-400 mt-5">
          Calibramos instrumentos de estas marcas con trazabilidad CENAM · IAS CL-101
        </p>
      </div>
    </section>
  );
}

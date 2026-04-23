import Link from "next/link";
import { ArrowRight, Home, Phone, FileText } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center">
      <div className="container-custom max-w-2xl text-center py-20">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-50 rounded-2xl mb-6">
          <span className="text-4xl font-black text-brand-600">404</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Página no encontrada
        </h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          La página que buscas no existe o fue movida. Puedes navegar a
          cualquiera de estas secciones o contactarnos directamente.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <Link
            href="/"
            className="flex flex-col items-center gap-2 bg-white rounded-2xl border border-gray-100 p-5 hover:border-brand-200 hover:shadow-sm transition-all group"
          >
            <Home className="w-6 h-6 text-brand-500" />
            <span className="text-sm font-semibold text-gray-700 group-hover:text-brand-600">Inicio</span>
          </Link>
          <Link
            href="/calibracion"
            className="flex flex-col items-center gap-2 bg-white rounded-2xl border border-gray-100 p-5 hover:border-brand-200 hover:shadow-sm transition-all group"
          >
            <FileText className="w-6 h-6 text-brand-500" />
            <span className="text-sm font-semibold text-gray-700 group-hover:text-brand-600">Calibración</span>
          </Link>
          <Link
            href="/contacto"
            className="flex flex-col items-center gap-2 bg-white rounded-2xl border border-gray-100 p-5 hover:border-brand-200 hover:shadow-sm transition-all group"
          >
            <Phone className="w-6 h-6 text-brand-500" />
            <span className="text-sm font-semibold text-gray-700 group-hover:text-brand-600">Contacto</span>
          </Link>
        </div>

        <Link href="/contacto" className="btn-primary inline-flex items-center gap-2">
          Solicitar cotización
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

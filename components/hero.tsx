import NextLogo from "./next-logo";
import SupabaseLogo from "./supabase-logo";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-500 to-blue-700 py-16 text-white text-center flex flex-col items-center gap-8">
      {/* Logos alineados */}
      <div className="flex gap-6 justify-center items-center">
        <a
          href="https://supabase.com"
          target="_blank"
          rel="noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <SupabaseLogo />
        </a>
        <span className="border-l rotate-45 h-6 opacity-50" />
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <NextLogo />
        </a>
      </div>

      {/* Título principal */}
      <h1 className="text-4xl lg:text-5xl font-bold max-w-2xl leading-tight">
        Reporta y Visualiza Hechos de Discriminación
      </h1>

      {/* Subtítulo */}
      <p className="text-lg lg:text-xl max-w-xl text-white/90">
        Contribuye a una sociedad más justa informando sobre incidentes de
        discriminación. Explora el mapa y ayuda a generar conciencia.
      </p>

      {/* Llamado a la acción */}
      <div className="flex gap-4">
        <Link href="/reportar">
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition">
            Reportar un Caso
          </button>
        </Link>
        <Link href="/mapa">
          <button className="px-6 py-3 bg-blue-600 border border-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition">
            Ver Mapa
          </button>
        </Link>
      </div>

      {/* Línea decorativa */}
      <div className="w-2/3 h-[2px] bg-white/50 my-6"></div>
    </section>
  );
}

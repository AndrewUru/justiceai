import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

export default async function Home() {
  return (
    <>
      <Hero />
      <section className="w-full bg-gradient-to-b from-gray-900 to-gray-700 py-16 text-white text-center flex flex-col items-center gap-8 px-6">
        {/* Título principal */}
        <h1 className="text-4xl lg:text-5xl font-bold max-w-2xl leading-tight">
          Datos Abiertos para la Igualdad
        </h1>

        {/* Subtítulo explicativo */}
        <p className="text-lg lg:text-xl max-w-3xl text-white/80">
          Esta plataforma en desarrollo utiliza datos públicos de la Comunidad
          Valenciana para visualizar y analizar casos de discriminación en la
          región. Contribuye a la transparencia y la sensibilización social.
        </p>

        {/* Beneficios destacados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/90 max-w-5xl mt-8">
          <div className="p-6 bg-white/10 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">📍 Mapa Interactivo</h3>
            <p className="text-sm mt-2">
              Explora los datos geolocalizados sobre hechos discriminatorios en
              la Comunidad Valenciana.
            </p>
          </div>
          <div className="p-6 bg-white/10 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">📊 Datos Públicos</h3>
            <p className="text-sm mt-2">
              Accede a estadísticas oficiales y contribuye a la difusión de
              información sobre discriminación.
            </p>
          </div>
          <div className="p-6 bg-white/10 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">🚀 En Desarrollo</h3>
            <p className="text-sm mt-2">
              Estamos mejorando la plataforma y pronto podrás interactuar con
              los datos de manera más avanzada.
            </p>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex gap-4 mt-8">
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition">
            Explorar Datos
          </button>

          <button className="px-6 py-3 bg-gray-800 border border-white font-semibold rounded-lg shadow-lg hover:bg-gray-700 transition">
            Ver Mapa
          </button>
        </div>
      </section>
    </>
  );
}

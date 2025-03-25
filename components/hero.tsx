import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-screen bg-gradient-to-b from-gray-900 to-gray-700 py-16 text-white text-center flex flex-col items-center ">
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
            Explora los datos geolocalizados sobre hechos discriminatorios en la
            Comunidad Valenciana.
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
            Estamos mejorando la plataforma y pronto podrás interactuar con los
            datos de manera más avanzada.
          </p>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="flex gap-4 mt-8">
        <div className="flex gap-4">
          <Link href="/discrimination">
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition">
              Ver Casos
            </button>
          </Link>
          <Link href="/mapa">
            <button className="px-6 py-3 bg-blue-600 border border-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition">
              Ver Mapa
            </button>
          </Link>
        </div>
      </div>
      <div className="w-2/3 h-[2px] bg-white/50 my-6"></div>
    </section>
  );
}

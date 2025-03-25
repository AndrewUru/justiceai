"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const MapView = dynamic(() => import("@/components/MapView"), { ssr: false });

type Event = {
  tipo: string;
  observaciones: string | null;
  fecha_hecho: string;
  lat: number | null;
  lng: number | null;
};

export default function DiscriminationEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/events");
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        setError("Error al obtener los datos.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p className="text-center mt-6">Cargando datos...</p>;
  if (error) return <p className="text-red-500 text-center mt-6">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">
        Reportes de Discriminación
      </h2>

      <MapView />

      {/* Tabla responsive con scroll horizontal */}
      <div className="overflow-x-auto mt-10">
        <table className="min-w-full table-auto border border-gray-200 rounded shadow-sm text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Tipo</th>
              <th className="px-4 py-2 text-left">Observaciones</th>
              <th className="px-4 py-2 text-left">Fecha</th>
              <th className="px-4 py-2 text-left hidden sm:table-cell">
                Latitud
              </th>
              <th className="px-4 py-2 text-left hidden sm:table-cell">
                Longitud
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {events.map((event, index) => (
              <tr key={index}>
                <td className="px-4 py-2 whitespace-nowrap">{event.tipo}</td>
                <td className="px-4 py-2">
                  {event.observaciones ?? "Sin info"}
                </td>
                <td className="px-4 py-2">{event.fecha_hecho ?? "-"}</td>
                <td className="px-4 py-2 hidden sm:table-cell">
                  {event.lat ?? "-"}
                </td>
                <td className="px-4 py-2 hidden sm:table-cell">
                  {event.lng ?? "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

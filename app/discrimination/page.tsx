"use client"; // Agregar esta línea al inicio del archivo

import { useEffect, useState } from "react";

export default function DiscriminationEvents() {
  const [events, setEvents] = useState<{ tipo: string; fecha_hecho: string }[]>(
    []
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/events"); // Asegúrate de que la API devuelve un array
        const data = await res.json();

        if (Array.isArray(data)) {
          setEvents(data);
        } else {
          console.error("La API no devolvió un array:", data);
          setEvents([]); // Evitar errores en el `.map`
        }
      } catch (error) {
        console.error("Error al obtener los eventos:", error);
        setEvents([]);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Eventos de Discriminación</h1>
      {events.length === 0 ? (
        <p>No hay datos disponibles</p>
      ) : (
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              <strong>{event.tipo}</strong> - {event.fecha_hecho}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

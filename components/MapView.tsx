"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";

const defaultCenter: [number, number] = [39.4699, -0.3763]; // Valencia

// Para evitar error de icono roto en Leaflet
delete (L.Icon.Default as any).prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function MapView() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="my-10">
      <h2 className="text-xl font-bold text-center mb-4">Mapa de eventos</h2>
      <MapContainer
        center={defaultCenter}
        zoom={12}
        scrollWheelZoom
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        />
        {events.map((event: any, i) =>
          event.lat && event.lng ? (
            <Marker key={i} position={[event.lat, event.lng]}>
              <Popup>
                <strong>{event.tipo}</strong>
                <br />
                {event.fecha_hecho}
              </Popup>
            </Marker>
          ) : null
        )}
      </MapContainer>
    </div>
  );
}

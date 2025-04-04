import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("discrimination_events")
      .select("tipo, observaciones, fecha_hecho, geo_shape");

    console.log("📦 Datos desde Supabase:", data);

    if (error) {
      console.error("❌ Error desde Supabase:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const formattedData = data.map((event) => {
      const coords = event.geo_shape?.coordinates || [null, null];
      return {
        tipo: event.tipo,
        observaciones: event.observaciones,
        fecha_hecho: event.fecha_hecho
          ? new Date(event.fecha_hecho).toISOString().split("T")[0]
          : null,
        lat: coords[1],
        lng: coords[0],
      };
    });

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error("❌ Error general:", error);
    return NextResponse.json(
      { error: "Error al obtener datos de Supabase" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("discrimination_events")
      .select("tipo, observaciones, fecha_hecho, lat, lng");

    console.log("📦 Datos desde Supabase:", data);

    if (error) {
      console.error("❌ Error desde Supabase:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("❌ Error general:", error);
    return NextResponse.json(
      { error: "Error al obtener datos de Supabase" },
      { status: 500 }
    );
  }
}

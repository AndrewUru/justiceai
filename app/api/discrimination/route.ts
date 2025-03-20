import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://valencia.opendatasoft.com/api/v2/catalog/datasets/fets-discriminatoris-hechos-discriminatorios/records"
    );
    const data = await response.json();

    // Validar que la API realmente devuelve registros
    if (!data.records || !Array.isArray(data.records)) {
      return NextResponse.json(
        { error: "La API no devolvió registros válidos" },
        { status: 500 }
      );
    }

    // Transformar los datos para usarlos en la UI
    const formattedData = data.records.map((record: any) => ({
      fecha: record.record.fields?.fecha_hecho || "Fecha desconocida",
      tipo: record.record.fields?.tipo || "Sin categoría",
      ubicacion: record.record.fields?.geo_shape || "Ubicación no disponible",
      lat: record.record.fields?.geo_point_2d?.[0] || null,
      lng: record.record.fields?.geo_point_2d?.[1] || null,
    }));

    return NextResponse.json(formattedData);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener datos de la API" },
      { status: 500 }
    );
  }
}

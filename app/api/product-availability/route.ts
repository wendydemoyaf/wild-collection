import { NextResponse } from "next/server";
import { getActiveSlugs } from "../../lib/productAvailability";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const active = await getActiveSlugs();
    return NextResponse.json({ availableSlugs: [...active] }, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return NextResponse.json({ error: "La disponibilidad no está disponible." }, {
      status: 503, headers: { "Cache-Control": "no-store" },
    });
  }
}

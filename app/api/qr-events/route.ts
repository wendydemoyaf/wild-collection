import { NextResponse } from "next/server";

type QREventName =
  | "qr_page_view"
  | "qr_click_whatsapp"
  | "qr_click_instagram"
  | "qr_click_facebook"
  | "qr_click_website";

type QRChannel = "whatsapp" | "instagram" | "facebook" | "website";

type QREventInput = {
  event_name?: unknown;
  channel?: unknown;
  utm_source?: unknown;
  utm_medium?: unknown;
  utm_campaign?: unknown;
  page_path?: unknown;
};

const EVENT_CHANNELS: Record<QREventName, QRChannel | null> = {
  qr_page_view: null,
  qr_click_whatsapp: "whatsapp",
  qr_click_instagram: "instagram",
  qr_click_facebook: "facebook",
  qr_click_website: "website",
};

function eventError(message: string, status: number, code: string) {
  return NextResponse.json({ error: message, code }, { status });
}

function cleanOptionalText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return null;
  const cleaned = value.trim().replace(/\s+/g, " ").slice(0, maxLength);
  return cleaned || null;
}

function isValidEventName(value: string | null): value is QREventName {
  return value !== null && value in EVENT_CHANNELS;
}

export async function POST(request: Request) {
  let payload: QREventInput;

  try {
    payload = await request.json();
  } catch {
    return eventError("No pudimos leer el evento QR.", 400, "INVALID_JSON");
  }

  const eventName = cleanOptionalText(payload.event_name, 40);
  if (!isValidEventName(eventName)) {
    return eventError("El evento QR no es válido.", 400, "INVALID_EVENT_NAME");
  }

  const expectedChannel = EVENT_CHANNELS[eventName];
  const channel = cleanOptionalText(payload.channel, 40);

  if (expectedChannel === null && channel !== null) {
    return eventError("El canal no corresponde al evento QR.", 400, "CHANNEL_NOT_ALLOWED");
  }

  if (expectedChannel !== null && channel !== expectedChannel) {
    return eventError("El canal no corresponde al evento QR.", 400, "INVALID_CHANNEL");
  }

  const pagePath = cleanOptionalText(payload.page_path, 20) ?? "/qr";
  if (pagePath !== "/qr") {
    return eventError("La ruta del evento QR no es válida.", 400, "INVALID_PAGE_PATH");
  }

  const supabaseUrl = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const supabaseSecret = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseSecret) {
    return eventError("La medición QR todavía no está configurada.", 503, "QR_EVENTS_NOT_CONFIGURED");
  }

  const eventRecord = {
    event_name: eventName,
    channel: expectedChannel,
    utm_source: cleanOptionalText(payload.utm_source, 80),
    utm_medium: cleanOptionalText(payload.utm_medium, 80),
    utm_campaign: cleanOptionalText(payload.utm_campaign, 120),
    page_path: pagePath,
  };

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/qr_events`, {
      method: "POST",
      headers: {
        apikey: supabaseSecret,
        Authorization: `Bearer ${supabaseSecret}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(eventRecord),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Supabase rejected QR event insert", response.status);
      return eventError("No pudimos guardar el evento QR.", 502, "QR_EVENT_STORAGE_ERROR");
    }

    return NextResponse.json({ ok: true });
  } catch {
    return eventError("No pudimos conectar con la medición QR.", 502, "QR_EVENT_STORAGE_UNAVAILABLE");
  }
}

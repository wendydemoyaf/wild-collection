import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_COOKIE_NAME,
  adminCookieOptions,
  createAdminSessionToken,
  isAdminConfigured,
  isSameOrigin,
  verifyAdminPassword,
} from "../../../lib/adminAuth";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: "Solicitud no permitida." }, { status: 403 });
  }

  if (!isAdminConfigured()) {
    return NextResponse.json(
      { error: "El acceso privado todavía no está configurado en Vercel.", code: "ADMIN_NOT_CONFIGURED" },
      { status: 503 },
    );
  }

  let password: unknown;
  try {
    ({ password } = await request.json());
  } catch {
    return NextResponse.json({ error: "No pudimos leer la contraseña." }, { status: 400 });
  }

  if (!verifyAdminPassword(password)) {
    await new Promise((resolve) => setTimeout(resolve, 450));
    return NextResponse.json({ error: "La contraseña no es correcta." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE_NAME, createAdminSessionToken(), adminCookieOptions);
  response.headers.set("Cache-Control", "no-store");
  return response;
}

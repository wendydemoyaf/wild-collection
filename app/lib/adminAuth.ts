import { createHash, createHmac, timingSafeEqual } from "crypto";
import type { NextRequest } from "next/server";

export const ADMIN_COOKIE_NAME = "wild_admin_session";
export const ADMIN_SESSION_SECONDS = 60 * 60 * 12;

function normalizePassword(value: string) {
  const normalized = value.normalize("NFKC").trim();
  const quoted = normalized.match(/^(["'])([\s\S]*)\1$/);
  return (quoted?.[2] ?? normalized).trim();
}

function configuredPassword() {
  return normalizePassword(process.env.ADMIN_PANEL_PASSWORD ?? "");
}

function digest(value: string) {
  return createHash("sha256").update(`wild-collection-admin:${value}`).digest();
}

function signature(expiresAt: string, password: string) {
  return createHmac("sha256", password)
    .update(`wild-admin-session:${expiresAt}`)
    .digest("hex");
}

export function isAdminConfigured() {
  return configuredPassword().length >= 10;
}

export function verifyAdminPassword(candidate: unknown) {
  const password = configuredPassword();
  if (!isAdminConfigured() || typeof candidate !== "string") return false;
  return timingSafeEqual(digest(normalizePassword(candidate)), digest(password));
}

export function passwordMismatchReason(candidate: unknown) {
  if (typeof candidate !== "string") return "La contraseña no es válida.";
  const supplied = normalizePassword(candidate);
  const expected = configuredPassword();
  if (supplied.length !== expected.length) {
    return "La contraseña escrita no tiene la misma cantidad de caracteres que la guardada en Vercel.";
  }
  return "La cantidad de caracteres coincide, pero el contenido es diferente al guardado en Vercel.";
}

export function createAdminSessionToken() {
  const password = configuredPassword();
  if (!isAdminConfigured()) return "";
  const expiresAt = String(Math.floor(Date.now() / 1000) + ADMIN_SESSION_SECONDS);
  return `${expiresAt}.${signature(expiresAt, password)}`;
}

export function hasValidAdminSession(request: NextRequest) {
  const password = configuredPassword();
  const token = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
  if (!isAdminConfigured() || !token) return false;

  const [expiresAt, suppliedSignature, extra] = token.split(".");
  if (!expiresAt || !suppliedSignature || extra) return false;
  if (!/^\d+$/.test(expiresAt) || Number(expiresAt) <= Math.floor(Date.now() / 1000)) return false;

  const expectedSignature = signature(expiresAt, password);
  const supplied = Buffer.from(suppliedSignature, "hex");
  const expected = Buffer.from(expectedSignature, "hex");
  return supplied.length === expected.length && timingSafeEqual(supplied, expected);
}

export function isSameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin) return false;

  try {
    const originHost = new URL(origin).host;
    const requestHost = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
    return Boolean(requestHost && originHost === requestHost);
  } catch {
    return false;
  }
}

export const adminCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict" as const,
  path: "/",
  maxAge: ADMIN_SESSION_SECONDS,
};

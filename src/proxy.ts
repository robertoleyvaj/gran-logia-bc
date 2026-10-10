import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { splitLocale, LOCALE_HEADER } from "@/i18n/config";

const COOKIE_NAME  = "glbc-access";
const COOKIE_VALUE = "glbc2026";   // ← clave interna (no es la clave de usuario)

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Dejar pasar: página de acceso, API de acceso, archivos estáticos
  if (
    pathname.startsWith("/acceso") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    /\.(png|jpg|jpeg|svg|ico|webp|gif|woff2?)$/i.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Protección temporal con contraseña (pre-lanzamiento)
  const cookie = request.cookies.get(COOKIE_NAME);
  if (cookie?.value !== COOKIE_VALUE) {
    const loginUrl = new URL("/acceso", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Idioma: /en/... y /pt/... se sirven desde la misma página, pasando el idioma por encabezado
  const { locale, path } = splitLocale(pathname);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(LOCALE_HEADER, locale);

  if (path !== pathname) {
    const url = request.nextUrl.clone();
    url.pathname = path;
    return NextResponse.rewrite(url, { request: { headers: requestHeaders } });
  }
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME  = "glbc-access";
const COOKIE_VALUE = "glbc2026";   // ← clave interna (no es la clave de usuario)

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Dejar pasar: página de acceso, API de acceso, archivos estáticos
  if (
    pathname.startsWith("/acceso") ||
    pathname.startsWith("/api/acceso") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    /\.(png|jpg|jpeg|svg|ico|webp|gif|woff2?)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Verificar cookie
  const cookie = request.cookies.get(COOKIE_NAME);
  if (cookie?.value === COOKIE_VALUE) {
    return NextResponse.next();
  }

  // Sin acceso → redirigir al login
  const loginUrl = new URL("/acceso", request.url);
  loginUrl.searchParams.set("from", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};

import { NextRequest, NextResponse } from "next/server";

const PASSWORD    = "granlogia2026";   // ← clave que escribirás en el formulario
const COOKIE_NAME  = "glbc-access";
const COOKIE_VALUE = "glbc2026";

export async function POST(req: NextRequest) {
  const { password, from } = await req.json();

  if (password !== PASSWORD) {
    return NextResponse.json({ error: "Clave incorrecta" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true, redirect: from || "/" });
  res.cookies.set(COOKIE_NAME, COOKIE_VALUE, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 días
  });
  return res;
}

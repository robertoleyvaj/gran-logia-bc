"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getOficialBySlug } from "@/data/gran-cuadro";

const R = "var(--font-raleway), sans-serif";
const Co = "var(--font-cormorant), Georgia, serif";
const D = "var(--font-dm-sans), system-ui, sans-serif";
const navy = "#0B2447";
const navyDark = "#060F1E";
const gold = "#B08D57";
const border = "#E2DDD4";
const ivory = "#F5F1EA";

export default function PerfilOficial() {
  const params = useParams();
  const oficial = getOficialBySlug(params.slug as string);
  if (!oficial) return null;

  const iniciales = oficial.nombre.split(" ").slice(0, 2).map(n => n[0]).join("").toUpperCase();

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: ivory, minHeight: "100vh" }}>

        {/* ── PERFIL ── */}
        <section style={{ paddingTop: "76px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "420px 1fr",
            minHeight: "calc(100vh - 76px)",
          }}>

            {/* Columna izquierda — foto */}
            <div style={{ position: "relative", backgroundColor: navyDark }}>
              {oficial.foto ? (
                <img
                  src={oficial.foto}
                  alt={oficial.nombre}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                />
              ) : (
                <div style={{
                  width: "100%", height: "100%", minHeight: "calc(100vh - 76px)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "linear-gradient(160deg, #0B2447 0%, #060F1E 100%)",
                  flexDirection: "column", gap: "16px",
                }}>
                  <div style={{ fontFamily: R, color: `${gold}30`, fontSize: "5rem", fontWeight: 200, letterSpacing: "4px" }}>
                    {iniciales}
                  </div>
                  <div style={{ fontFamily: R, color: `${gold}25`, fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" }}>
                    Fotografía pendiente
                  </div>
                </div>
              )}
              {/* Degradado inferior */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "30%",
                background: "linear-gradient(to top, rgba(6,15,30,0.6), transparent)",
              }} />
            </div>

            {/* Columna derecha — información */}
            <div style={{ padding: "64px 72px", display: "flex", flexDirection: "column", justifyContent: "center" }}>

              {/* Breadcrumb */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "48px" }}>
                <Link href="/" style={{ fontFamily: R, color: "rgba(11,36,71,0.35)", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase" }}>Inicio</Link>
                <span style={{ color: "rgba(11,36,71,0.2)" }}>›</span>
                <Link href="/la-gran-logia" style={{ fontFamily: R, color: "rgba(11,36,71,0.35)", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase" }}>La Gran Logia</Link>
                <span style={{ color: "rgba(11,36,71,0.2)" }}>›</span>
                <Link href="/la-gran-logia/gran-cuadro" style={{ fontFamily: R, color: "rgba(11,36,71,0.35)", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase" }}>Gran Cuadro</Link>
              </div>

              {/* Cargo */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
                <div style={{ width: "28px", height: "1px", backgroundColor: gold }} />
                <span style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase" }}>
                  {oficial.grupo}
                </span>
              </div>

              <div style={{
                display: "inline-block",
                fontFamily: R, color: navy,
                fontSize: "12px", fontWeight: 700,
                letterSpacing: "1.5px", textTransform: "uppercase",
                border: `1px solid ${gold}55`,
                padding: "6px 14px",
                marginBottom: "24px",
                alignSelf: "flex-start",
              }}>
                {oficial.cargo}
              </div>

              {/* Nombre */}
              <h1 style={{
                fontFamily: R, color: navy,
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                fontWeight: 700, letterSpacing: "-0.5px",
                lineHeight: 1.1, marginBottom: "32px",
              }}>
                {oficial.nombre}
              </h1>

              {/* Separador */}
              <div style={{ width: "40px", height: "2px", backgroundColor: gold, marginBottom: "32px" }} />

              {/* Logia de origen */}
              <div style={{ marginBottom: "32px" }}>
                <div style={{ fontFamily: R, color: "rgba(11,36,71,0.4)", fontSize: "10px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "6px" }}>
                  Logia de Origen
                </div>
                <div style={{ fontFamily: D, color: navy, fontSize: "16px", fontWeight: 500 }}>
                  {oficial.logia || <span style={{ color: "rgba(11,36,71,0.25)", fontStyle: "italic" }}>Por confirmar</span>}
                </div>
              </div>

              {/* Mensaje */}
              {(oficial.mensaje || true) && (
                <div style={{
                  borderLeft: `2px solid ${gold}`,
                  paddingLeft: "24px",
                  marginBottom: "48px",
                }}>
                  <div style={{ fontFamily: R, color: "rgba(11,36,71,0.4)", fontSize: "10px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>
                    Mensaje
                  </div>
                  <p style={{ fontFamily: Co, color: navy, fontSize: "1.15rem", fontStyle: "italic", lineHeight: 1.8 }}>
                    {oficial.mensaje || <span style={{ color: "rgba(11,36,71,0.25)" }}>Próximamente</span>}
                  </p>
                </div>
              )}

              {/* Volver */}
              <Link href="/la-gran-logia/gran-cuadro" style={{
                fontFamily: R, fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase",
                color: navy, borderBottom: `2px solid ${gold}`, paddingBottom: "3px",
                alignSelf: "flex-start", transition: "color 0.2s",
              }}>
                ← Volver al Gran Cuadro
              </Link>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

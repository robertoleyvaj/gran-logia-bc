"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const R = "var(--font-raleway), sans-serif";
const Co = "var(--font-cormorant), Georgia, serif";
const D = "var(--font-dm-sans), system-ui, sans-serif";
const navy = "#0B2447";
const navyDark = "#060F1E";
const gold = "#B08D57";
const ivory = "#F5F1EA";
const border = "#E2DDD4";

export default function RitoDeYork() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HEADER ── */}
        <section style={{
          backgroundColor: navyDark,
          paddingTop: "140px",
          paddingBottom: "80px",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse 70% 80% at 20% 50%, rgba(26,58,107,0.35) 0%, transparent 65%)",
          }} />
          <div className="max-w-7xl mx-auto px-8" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "40px" }}>
              <Link href="/" style={{ fontFamily: R, color: "rgba(255,255,255,0.3)", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase" }}>Inicio</Link>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
              <Link href="/masoneria" style={{ fontFamily: R, color: "rgba(255,255,255,0.3)", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase" }}>Masonería</Link>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontFamily: R, color: gold, fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase" }}>Rito de York</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <div style={{ width: "32px", height: "1px", backgroundColor: gold }} />
              <span style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase" }}>
                Cuerpos Masónicos Apendantes
              </span>
            </div>
            <h1 style={{ fontFamily: R, color: "#fff", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "16px" }}>
              Rito de York
            </h1>
            <p style={{ fontFamily: D, color: "rgba(255,255,255,0.45)", fontSize: "16px", maxWidth: "560px", lineHeight: 1.7 }}>
              York Rite — Capítulo, Concilio y Encomienda. Tres cuerpos que extienden la iniciación masónica hacia la tradición caballeresca.
            </p>
          </div>
        </section>

        {/* ── CONTENIDO ── */}
        <section style={{ backgroundColor: ivory, padding: "96px 0" }}>
          <div className="max-w-7xl mx-auto px-8">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>

              <div>
                <div style={{ width: "40px", height: "2px", backgroundColor: gold, marginBottom: "32px" }} />
                <h2 style={{ fontFamily: R, color: navy, fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: "24px" }}>
                  Tres Cuerpos, Un Camino
                </h2>
                <p style={{ fontFamily: D, color: "rgba(11,36,71,0.65)", fontSize: "15px", lineHeight: 1.85, marginBottom: "20px" }}>
                  El Rito de York es uno de los sistemas masónicos más antiguos y está compuesto por tres organismos distintos: el Capítulo, el Concilio y la Encomienda. Cada uno confiere grados adicionales que enriquecen la experiencia del masón y profundizan en el simbolismo cristiano caballeresco.
                </p>
                <p style={{ fontFamily: D, color: "rgba(11,36,71,0.65)", fontSize: "15px", lineHeight: 1.85, marginBottom: "32px" }}>
                  En Baja California, los cuerpos del Rito de York trabajan en armonía con la Gran Logia de Estado, abiertos a todos los masones que hayan alcanzado el tercer grado.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { cuerpo: "Capítulo Real Arco", grados: "4° al 7° — Maestro de Marca, Maestro Pasado Virtual, Arco Real" },
                    { cuerpo: "Concilio", grados: "8° y 9° — Maestro Selecto y Maestro Real Selecto" },
                    { cuerpo: "Encomienda", grados: "Orden del Templo — Caballero de Malta y Caballero Templario" },
                  ].map(c => (
                    <div key={c.cuerpo} style={{ padding: "20px 24px", backgroundColor: "#fff", border: `1px solid ${border}`, borderLeft: `3px solid ${gold}` }}>
                      <div style={{ fontFamily: R, color: navy, fontSize: "13px", fontWeight: 700, letterSpacing: "0.5px", marginBottom: "4px" }}>{c.cuerpo}</div>
                      <div style={{ fontFamily: D, color: "rgba(11,36,71,0.5)", fontSize: "12px" }}>{c.grados}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ backgroundColor: navyDark, padding: "48px 40px" }}>
                  <div style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "24px" }}>
                    Próximamente
                  </div>
                  <p style={{ fontFamily: Co, color: "rgba(255,255,255,0.5)", fontSize: "1.1rem", fontStyle: "italic", lineHeight: 1.8, marginBottom: "32px" }}>
                    "El Rito de York perpetúa las más antiguas tradiciones de la Orden."
                  </p>
                  <div style={{ width: "40px", height: "1px", backgroundColor: `${gold}40` }} />
                  <div style={{ marginTop: "32px", fontFamily: D, color: "rgba(255,255,255,0.3)", fontSize: "13px", lineHeight: 1.7 }}>
                    Información sobre los cuerpos del Rito de York activos en Baja California estará disponible próximamente.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── VOLVER ── */}
        <section style={{ backgroundColor: "#fff", padding: "48px 0", borderTop: `1px solid ${border}` }}>
          <div className="max-w-7xl mx-auto px-8">
            <Link href="/masoneria" style={{
              fontFamily: R, fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase",
              color: navy, borderBottom: `2px solid ${gold}`, paddingBottom: "3px",
            }}>
              ← Volver a Masonería
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

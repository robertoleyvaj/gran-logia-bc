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

export default function Shriners() {
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
              <span style={{ fontFamily: R, color: gold, fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase" }}>Shriners</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <div style={{ width: "32px", height: "1px", backgroundColor: gold }} />
              <span style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase" }}>
                Cuerpos Masónicos Apendantes
              </span>
            </div>
            <h1 style={{ fontFamily: R, color: "#fff", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "16px" }}>
              Shriners International
            </h1>
            <p style={{ fontFamily: D, color: "rgba(255,255,255,0.45)", fontSize: "16px", maxWidth: "560px", lineHeight: 1.7 }}>
              Ancient Arabic Order of the Nobles of the Mystic Shrine — fraternidad masónica dedicada a la filantropía y al cuidado de niños.
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
                  Masonería al Servicio de los Niños
                </h2>
                <p style={{ fontFamily: D, color: "rgba(11,36,71,0.65)", fontSize: "15px", lineHeight: 1.85, marginBottom: "20px" }}>
                  Shriners International es una de las fraternidades masónicas más reconocidas en el mundo por su labor filantrópica. Sus miembros —conocidos como Shriners— son masones en buen estado que se han comprometido a apoyar los Hospitales Shriners para Niños, una red de centros médicos de especialidad sin fines de lucro.
                </p>
                <p style={{ fontFamily: D, color: "rgba(11,36,71,0.65)", fontSize: "15px", lineHeight: 1.85, marginBottom: "32px" }}>
                  En México, los Templos Shriners trabajan en coordinación con las Grandes Logias reconocidas, extendiendo el espíritu de servicio a las comunidades locales a través de actividades culturales, deportivas y de beneficencia.
                </p>

                {/* Datos destacados */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  {[
                    { numero: "22", label: "Hospitales para niños" },
                    { numero: "1888", label: "Año de fundación" },
                    { numero: "191", label: "Templos en el mundo" },
                    { numero: "0", label: "Costo para las familias" },
                  ].map(d => (
                    <div key={d.label} style={{ padding: "20px", backgroundColor: "#fff", border: `1px solid ${border}`, textAlign: "center" }}>
                      <div style={{ fontFamily: R, color: gold, fontSize: "1.8rem", fontWeight: 700, lineHeight: 1 }}>{d.numero}</div>
                      <div style={{ fontFamily: D, color: "rgba(11,36,71,0.5)", fontSize: "12px", marginTop: "6px" }}>{d.label}</div>
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
                    "No one stands so tall as when he stoops to help a child."
                  </p>
                  <div style={{ width: "40px", height: "1px", backgroundColor: `${gold}40` }} />
                  <div style={{ marginTop: "32px", fontFamily: D, color: "rgba(255,255,255,0.3)", fontSize: "13px", lineHeight: 1.7 }}>
                    Información sobre los Templos Shriners asociados a la jurisdicción de Baja California estará disponible próximamente.
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

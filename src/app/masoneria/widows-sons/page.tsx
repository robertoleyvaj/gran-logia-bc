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

export default function WidowsSons() {
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
              <span style={{ fontFamily: R, color: gold, fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase" }}>Widow's Sons</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <div style={{ width: "32px", height: "1px", backgroundColor: gold }} />
              <span style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase" }}>
                Cuerpos Masónicos Apendantes
              </span>
            </div>
            <h1 style={{ fontFamily: R, color: "#fff", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "16px" }}>
              Widow's Sons
            </h1>
            <p style={{ fontFamily: D, color: "rgba(255,255,255,0.45)", fontSize: "16px", maxWidth: "560px", lineHeight: 1.7 }}>
              Hijos de la Viuda — confraternidad masónica de motociclistas comprometidos con la fraternidad y el servicio.
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
                  Hermandad sobre Ruedas
                </h2>
                <p style={{ fontFamily: D, color: "rgba(11,36,71,0.65)", fontSize: "15px", lineHeight: 1.85, marginBottom: "20px" }}>
                  Los Widow's Sons —Hijos de la Viuda— son una confraternidad masónica de motociclistas. El nombre hace referencia a Hiram Abiff, el Gran Maestro de obras del Templo de Salomón, cuya madre era viuda. Este símbolo une a masones amantes de la motocicleta en un espíritu de fraternidad, aventura y servicio.
                </p>
                <p style={{ fontFamily: D, color: "rgba(11,36,71,0.65)", fontSize: "15px", lineHeight: 1.85, marginBottom: "32px" }}>
                  En Baja California, los Widow's Sons participan en rodadas, eventos benéficos y actividades que proyectan la imagen positiva de la masonería hacia la comunidad, demostrando que ser masón es un compromiso que se vive en todo momento y lugar.
                </p>

                {/* Valores */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { valor: "Fraternidad", desc: "Hermandad entre masones más allá del taller" },
                    { valor: "Servicio", desc: "Actividades benéficas y de apoyo comunitario" },
                    { valor: "Libertad", desc: "El espíritu de la carretera como metáfora masónica" },
                  ].map(v => (
                    <div key={v.valor} style={{ padding: "16px 20px", backgroundColor: "#fff", border: `1px solid ${border}`, display: "flex", gap: "16px", alignItems: "center" }}>
                      <div style={{ width: "4px", height: "40px", backgroundColor: gold, flexShrink: 0 }} />
                      <div>
                        <div style={{ fontFamily: R, color: navy, fontSize: "13px", fontWeight: 700, letterSpacing: "0.3px", marginBottom: "3px" }}>{v.valor}</div>
                        <div style={{ fontFamily: D, color: "rgba(11,36,71,0.5)", fontSize: "12px" }}>{v.desc}</div>
                      </div>
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
                    "Somos masones primero, motociclistas después — y ambas cosas con orgullo."
                  </p>
                  <div style={{ width: "40px", height: "1px", backgroundColor: `${gold}40` }} />
                  <div style={{ marginTop: "32px", fontFamily: D, color: "rgba(255,255,255,0.3)", fontSize: "13px", lineHeight: 1.7 }}>
                    Información sobre los capítulos de Widow's Sons en Baja California estará disponible próximamente.
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

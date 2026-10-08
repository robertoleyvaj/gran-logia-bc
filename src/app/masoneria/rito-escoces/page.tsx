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

export default function RitoEscoces() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HEADER ── */}
        <section style={{
          paddingTop: "140px",
          paddingBottom: "80px",
          position: "relative",
          overflow: "hidden",
          minHeight: "400px",
        }}>
          <img src="/escoses.jpg" alt="" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%" }} />
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${navyDark} 28%, rgba(6,15,30,0.85) 55%, rgba(6,15,30,0.45) 100%)` }} />
          <div className="max-w-7xl mx-auto px-8" style={{ position: "relative", zIndex: 1 }}>
            {/* Breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "40px" }}>
              <Link href="/" style={{ fontFamily: R, color: "rgba(255,255,255,0.3)", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase" }}>Inicio</Link>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
              <Link href="/masoneria" style={{ fontFamily: R, color: "rgba(255,255,255,0.3)", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase" }}>Masonería</Link>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontFamily: R, color: gold, fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase" }}>Rito Escocés</span>
            </div>

            <div style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>
              Masonería en Baja California
            </div>
            <h1 style={{ fontFamily: R, color: "#fff", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, letterSpacing: "-0.5px", lineHeight: 1.1, marginBottom: "20px" }}>
              Rito Escocés Antiguo<br />y Aceptado
            </h1>
            <p style={{ fontFamily: D, color: "rgba(255,255,255,0.5)", fontSize: "16px", maxWidth: "520px", lineHeight: 1.7, marginBottom: "24px" }}>
              Una de las principales tradiciones de la masonería universal, presente en Baja California a través de sus cuerpos filosóficos.
            </p>
          </div>
        </section>

        {/* ── CONTENIDO ── */}
        <section style={{ backgroundColor: ivory, padding: "96px 0" }}>
          <div className="max-w-7xl mx-auto px-8">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>

              {/* Texto principal */}
              <div>
                <div style={{ width: "40px", height: "2px", backgroundColor: gold, marginBottom: "32px" }} />
                <h2 style={{ fontFamily: R, color: navy, fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: "24px" }}>
                  Rito Escocés Antiguo y Aceptado
                </h2>
                <p style={{ fontFamily: D, color: "rgba(11,36,71,0.65)", fontSize: "15px", lineHeight: 1.85, marginBottom: "20px" }}>
                  El Rito Escocés Antiguo y Aceptado es uno de los sistemas masónicos de formación filosófica más extendidos en el mundo. Su estructura comprende los grados del 4° al 33° y ofrece al Maestro Masón la posibilidad de continuar profundizando en el estudio de la filosofía, la ética, la historia y el simbolismo masónico.
                </p>

                <h3 style={{ fontFamily: R, color: navy, fontSize: "1rem", fontWeight: 700, letterSpacing: "-0.2px", marginBottom: "12px", marginTop: "8px" }}>
                  Una tradición que nos vincula con la Masonería nacional e internacional
                </h3>
                <p style={{ fontFamily: D, color: "rgba(11,36,71,0.65)", fontSize: "15px", lineHeight: 1.85, marginBottom: "12px" }}>
                  En Baja California, miembros de nuestra jurisdicción participan activamente en los cuerpos del Rito Escocés Antiguo y Aceptado, manteniendo una relación fraterna con el Supremo Consejo de México, organismo soberano del Rito en nuestro país.
                </p>
                <p style={{ fontFamily: D, color: "rgba(11,36,71,0.65)", fontSize: "15px", lineHeight: 1.85, marginBottom: "32px" }}>
                  Esta relación forma parte de los vínculos que nuestra Gran Logia mantiene con instituciones masónicas regulares de México y del extranjero, fortaleciendo el reconocimiento, el intercambio fraternal y la presencia de la Masonería bajacaliforniana más allá de nuestras fronteras.
                </p>

              </div>

              {/* Panel lateral */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {/* Foto */}
                <div style={{ position: "relative", overflow: "hidden", height: "340px" }}>
                  <img src="/mrgmescoses.jpg" alt="Reunión con el Supremo Consejo de México" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 5%" }} />
                  <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${navyDark} 20%, transparent 65%)` }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 24px" }}>
                    <div style={{ fontFamily: R, color: gold, fontSize: "9px", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "6px" }}>Relaciones Fraternales · Supremo Consejo de México</div>
                    <div style={{ fontFamily: D, color: "rgba(255,255,255,0.85)", fontSize: "12px", lineHeight: 1.6, marginBottom: "6px" }}>
                      Encuentro entre autoridades de la Gran Logia de Estado "Baja California" y el Soberano Gran Comendador del Supremo Consejo de México.
                    </div>
                    <div style={{ fontFamily: R, color: "rgba(255,255,255,0.35)", fontSize: "10px", letterSpacing: "1px" }}>Agosto de 2026</div>
                  </div>
                </div>

                {/* Nota institucional */}
                <div style={{ backgroundColor: navyDark, padding: "36px 40px" }}>
                  <div style={{ fontFamily: R, color: gold, fontSize: "9px", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "16px" }}>
                    Masonería Simbólica y Rito Escocés
                  </div>
                  <p style={{ fontFamily: D, color: "rgba(255,255,255,0.55)", fontSize: "13px", lineHeight: 1.8 }}>
                    La Gran Logia de Estado "Baja California" ejerce jurisdicción sobre los tres grados de la Masonería Simbólica. El Rito Escocés Antiguo y Aceptado constituye una vía posterior de formación para Maestros Masones y cuenta con su propia estructura y autoridades.
                  </p>
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

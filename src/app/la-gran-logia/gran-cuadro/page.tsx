"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { oficiales } from "@/data/gran-cuadro";

const R = "var(--font-raleway), sans-serif";
const Co = "var(--font-cormorant), Georgia, serif";
const navy = "#0B2447";
const navyDark = "#060F1E";
const gold = "#B08D57";
const ivory = "#F5F1EA";
const border = "#E2DDD4";

function getIniciales(nombre: string) {
  return nombre.split(" ").slice(0, 2).map(n => n[0]).join("").toUpperCase();
}

function OfficialCard({ oficial, large, framed }: { oficial: { slug: string; cargo: string; nombre: string; foto?: string }, large: boolean, framed?: boolean }) {
  const card = (
    <Link href={`/la-gran-logia/gran-cuadro/${oficial.slug}`} style={{ display: "block", textDecoration: "none" }}>
      <div
        onMouseEnter={e => {
          const wrap = e.currentTarget.querySelector(".foto-wrap") as HTMLElement;
          if (wrap) wrap.style.transform = "scale(1.04)";
        }}
        onMouseLeave={e => {
          const wrap = e.currentTarget.querySelector(".foto-wrap") as HTMLElement;
          if (wrap) wrap.style.transform = "scale(1)";
        }}
      >
        <div style={{ overflow: "hidden", marginBottom: large ? "16px" : "12px" }}>
          <div className="foto-wrap" style={{ transition: "transform 0.4s ease" }}>
            {oficial.foto ? (
              <img
                src={oficial.foto}
                alt={oficial.nombre}
                style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", objectPosition: "top", display: "block" }}
              />
            ) : (
              <div style={{
                width: "100%", aspectRatio: "3/4",
                background: "linear-gradient(160deg, #1A3A6B 0%, #060F1E 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative",
              }}>
                <span style={{ fontFamily: R, color: `${gold}45`, fontSize: large ? "2.5rem" : "2rem", fontWeight: 200, zIndex: 1 }}>
                  {getIniciales(oficial.nombre)}
                </span>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(6,15,30,0.4) 0%, transparent 55%)" }} />
              </div>
            )}
          </div>
        </div>
        <div style={{ fontFamily: R, color: gold, fontSize: large ? "10px" : "9px", fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "5px" }}>
          {oficial.cargo}
        </div>
        <div style={{ fontFamily: R, color: navy, fontSize: large ? "15px" : "13px", fontWeight: 800, lineHeight: 1.3, marginBottom: "8px" }}>
          {oficial.nombre}
        </div>
        <div style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 700 }}>
          Ver perfil →
        </div>
      </div>
    </Link>
  );

  if (!framed) return card;

  return (
    <div style={{ position: "relative", padding: "12px" }}>
      <div style={{ position: "absolute", inset: 0, border: `1px solid ${gold}40`, pointerEvents: "none" }} />
      {[
        { top: 0, left: 0, borderTop: `2px solid ${gold}`, borderLeft: `2px solid ${gold}` },
        { top: 0, right: 0, borderTop: `2px solid ${gold}`, borderRight: `2px solid ${gold}` },
        { bottom: 0, left: 0, borderBottom: `2px solid ${gold}`, borderLeft: `2px solid ${gold}` },
        { bottom: 0, right: 0, borderBottom: `2px solid ${gold}`, borderRight: `2px solid ${gold}` },
      ].map((style, i) => (
        <div key={i} style={{ position: "absolute", width: "14px", height: "14px", pointerEvents: "none", ...style }} />
      ))}
      {card}
    </div>
  );
}

export default function GranCuadro() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── PAGE HEADER ── */}
        <section style={{
          backgroundColor: navyDark,
          paddingTop: "76px",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Foto grupal de portada */}
          <div style={{ position: "relative", height: "560px" }}>
            <img
              src="/gran-cuadro.jpg"
              alt="Gran Cuadro de Oficiales"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", display: "block" }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to bottom, rgba(6,15,30,0.3) 0%, rgba(6,15,30,0.7) 60%, rgba(6,15,30,1) 100%)",
            }} />
            <div className="max-w-7xl mx-auto px-8" style={{ position: "absolute", bottom: "48px", left: 0, right: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
                <Link href="/" style={{ fontFamily: R, color: "rgba(255,255,255,0.3)", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase" }}>Inicio</Link>
                <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
                <span style={{ fontFamily: R, color: gold, fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase" }}>Gran Cuadro</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
                <div style={{ width: "32px", height: "1px", backgroundColor: gold }} />
                <span style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase" }}>
                  Muy Respetable Gran Logia de Estado "Baja California"
                </span>
              </div>
              <h1 style={{ fontFamily: R, color: "#fff", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "8px" }}>
                Gran Cuadro de Oficiales
              </h1>
              <p style={{ fontFamily: Co, color: "rgba(255,255,255,0.5)", fontSize: "1.1rem", fontStyle: "italic" }}>
                Ciclo 2026–2028 · Autoridades en funciones de la jurisdicción
              </p>
            </div>
          </div>
        </section>

        {/* ── OFICIALES PRINCIPALES (primeros 7) ── */}
        <section style={{ backgroundColor: ivory, padding: "72px 0 48px" }}>
          <div className="max-w-7xl mx-auto px-8">

            {/* Etiqueta de sección */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
              <div style={{ width: "32px", height: "2px", backgroundColor: gold }} />
              <span style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase" }}>
                Oficiales Principales
              </span>
            </div>

            {/* Gran Maestro — destacado solo */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
              <div style={{ width: "280px" }}>
                <OfficialCard oficial={oficiales[0]} large framed />
              </div>
            </div>

            {/* Fila 2: siguientes 6 */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", maxWidth: "840px", margin: "0 auto" }}>
              {oficiales.slice(1, 7).map((oficial) => (
                <OfficialCard key={oficial.slug} oficial={oficial} large framed />
              ))}
            </div>
          </div>
        </section>

        {/* ── OFICIALES MENORES Y DIPUTADOS ── */}
        <section style={{ backgroundColor: "#fff", padding: "48px 0 72px" }}>
          <div className="max-w-7xl mx-auto px-8">
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
              <div style={{ width: "32px", height: "2px", backgroundColor: `${gold}60` }} />
              <span style={{ fontFamily: R, color: "rgba(11,36,71,0.4)", fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase" }}>
                Oficiales Menores y Diputados de Distrito
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "24px" }}>
              {oficiales.slice(7).map((oficial) => (
                <OfficialCard key={oficial.slug} oficial={oficial} large={false} />
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

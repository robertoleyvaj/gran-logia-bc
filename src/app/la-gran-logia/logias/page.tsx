"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { logias, ciudades } from "@/data/logias";

const R = "var(--font-raleway), sans-serif";
const D = "var(--font-dm-sans), system-ui, sans-serif";
const navy = "#0B2447";
const navyDark = "#060F1E";
const gold = "#B08D57";
const ivory = "#F5F1EA";
const border = "#E2DDD4";
const textLight = "#6A6A6A";

export default function LogiasJurisdiccion() {
  const [ciudadActiva, setCiudadActiva] = useState<string>("Todas");

  const filtradas = ciudadActiva === "Todas"
    ? logias
    : logias.filter(l => l.ciudad === ciudadActiva);

  const conteo = (ciudad: string) =>
    ciudad === "Todas" ? logias.length : logias.filter(l => l.ciudad === ciudad).length;

  return (
    <>
      <Navbar />
      <main>

        {/* ── PAGE HEADER ── */}
        <section style={{
          paddingTop: "140px",
          paddingBottom: "72px",
          position: "relative",
          overflow: "hidden",
          minHeight: "380px",
        }}>
          <img src="/granlogiafraternidad.jpg" alt="" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${navyDark} 25%, rgba(6,15,30,0.88) 55%, rgba(6,15,30,0.5) 100%)` }} />
          <div className="max-w-7xl mx-auto px-8" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px" }}>
              <Link href="/" style={{ fontFamily: R, color: "rgba(255,255,255,0.3)", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase" }}>Inicio</Link>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
              <Link href="/la-gran-logia/gran-cuadro" style={{ fontFamily: R, color: "rgba(255,255,255,0.3)", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase" }}>La Gran Logia</Link>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontFamily: R, color: gold, fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase" }}>Logias de la Jurisdicción</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <div style={{ width: "32px", height: "1px", backgroundColor: gold }} />
              <span style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase" }}>
                Muy Respetable Gran Logia de Estado "Baja California"
              </span>
            </div>
            <h1 style={{ fontFamily: R, color: "#fff", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "10px" }}>
              Logias de la Jurisdicción
            </h1>
            <p style={{ fontFamily: D, color: "rgba(255,255,255,0.4)", fontSize: "15px" }}>
              {logias.length} logias activas en Baja California
            </p>
          </div>
        </section>

        {/* ── FILTROS POR CIUDAD ── */}
        <div style={{ backgroundColor: "#fff", borderBottom: `1px solid ${border}`, position: "sticky", top: "76px", zIndex: 40 }}>
          <div className="max-w-7xl mx-auto px-8">
            <div style={{ display: "flex", gap: "0", overflowX: "auto" }}>
              {["Todas", ...ciudades].map((ciudad) => (
                <button
                  key={ciudad}
                  onClick={() => setCiudadActiva(ciudad)}
                  style={{
                    fontFamily: R,
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: ciudadActiva === ciudad ? navy : "rgba(11,36,71,0.4)",
                    padding: "18px 20px",
                    borderBottom: ciudadActiva === ciudad ? `2px solid ${gold}` : "2px solid transparent",
                    background: "none",
                    border: "none",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "2px",
                    borderBottomColor: ciudadActiva === ciudad ? gold : "transparent",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "all 0.2s",
                  }}
                >
                  {ciudad}
                  <span style={{
                    marginLeft: "6px",
                    fontFamily: D,
                    fontSize: "10px",
                    color: ciudadActiva === ciudad ? gold : "rgba(11,36,71,0.3)",
                    fontWeight: 400,
                  }}>
                    ({conteo(ciudad)})
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── LISTA DE LOGIAS ── */}
        <section style={{ backgroundColor: ivory, padding: "64px 0" }}>
          <div className="max-w-7xl mx-auto px-8">
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "2px",
              backgroundColor: border,
            }}>
              {filtradas.map((logia) => (
                <Link
                  key={logia.numero}
                  href={`/la-gran-logia/logias/${logia.numero}`}
                  style={{ textDecoration: "none" }}
                >
                <div
                  style={{
                    backgroundColor: "#fff",
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    transition: "background 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = ivory)}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#fff")}
                >
                  {/* Logo o número */}
                  <div style={{ width: "56px", height: "56px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {logia.foto ? (
                      <img src={logia.foto} alt={logia.nombre} style={{ width: "56px", height: "56px", objectFit: "contain" }} />
                    ) : (
                      <div style={{ fontFamily: R, color: `${gold}60`, fontSize: "1.4rem", fontWeight: 700, lineHeight: 1 }}>
                        {logia.numero}
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: R, color: `${gold}80`, fontSize: "10px", fontWeight: 700, letterSpacing: "1px", marginBottom: "3px" }}>
                      No.{logia.numero}
                    </div>
                    <div style={{ fontFamily: R, color: navy, fontSize: "14px", fontWeight: 700, lineHeight: 1.3, marginBottom: "5px" }}>
                      "{logia.nombre}"
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                      <span style={{ fontFamily: D, color: textLight, fontSize: "12px" }}>{logia.ciudad}</span>
                      <span style={{ width: "3px", height: "3px", borderRadius: "50%", backgroundColor: border, display: "inline-block" }} />
                      <span style={{ fontFamily: D, color: textLight, fontSize: "12px" }}>Fund. {logia.anio}</span>
                    </div>
                  </div>
                </div>
                </Link>
              ))}
            </div>

            {filtradas.length === 0 && (
              <div style={{ textAlign: "center", padding: "64px", color: textLight, fontFamily: D }}>
                No hay logias en esta ciudad.
              </div>
            )}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

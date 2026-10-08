"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getLogiaByNumero } from "@/data/logias";

const R = "var(--font-raleway), sans-serif";
const D = "var(--font-dm-sans), system-ui, sans-serif";
const Co = "var(--font-cormorant), Georgia, serif";
const navy = "#0B2447";
const navyDark = "#060F1E";
const gold = "#B08D57";
const ivory = "#F5F1EA";
const border = "#E2DDD4";
const textLight = "#6A6A6A";

// Cuadro de oficiales de relleno (estructura estándar de logia simbólica)
const cargosEstandar = [
  "Venerable Maestro",
  "Primer Vigilante",
  "Segundo Vigilante",
  "Orador",
  "Secretario",
  "Tesorero",
  "Maestro de Ceremonias",
  "Hospitalario",
  "Primer Diácono",
  "Segundo Diácono",
  "Porta Estandarte",
  "Guarda Templo",
];

export default function LogiaPage() {
  const params = useParams();
  const logia = getLogiaByNumero(Number(params.numero));
  if (!logia) return null;

  const cuadro = logia.cuadro && logia.cuadro.length > 0
    ? logia.cuadro
    : cargosEstandar.map(cargo => ({ cargo, nombre: "Por confirmar" }));

  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section style={{ paddingTop: "76px", position: "relative", overflow: "hidden" }}>
          {/* Imagen rectangular */}
          <div style={{ position: "relative", height: "420px", backgroundColor: navyDark, overflow: "hidden" }}>
            {logia.foto ? (
              <img src={logia.foto} alt={`R∴ L∴ S∴ "${logia.nombre}"`}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
            ) : (
              <div style={{
                width: "100%", height: "100%",
                background: `linear-gradient(135deg, #0B2447 0%, #060F1E 60%, #1A3A6B 100%)`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: R, color: `${gold}20`, fontSize: "8rem", fontWeight: 200, lineHeight: 1 }}>
                    {logia.numero}
                  </div>
                  <div style={{ fontFamily: R, color: `${gold}25`, fontSize: "9px", letterSpacing: "4px", textTransform: "uppercase", marginTop: "12px" }}>
                    Fotografía pendiente
                  </div>
                </div>
              </div>
            )}
            {/* Gradiente inferior */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0, height: "60%",
              background: "linear-gradient(to top, rgba(6,15,30,0.92) 0%, transparent 100%)",
            }} />
            {/* Texto sobre la imagen */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "40px 64px" }}>
              {/* Breadcrumb */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
                <Link href="/" style={{ fontFamily: R, color: "rgba(255,255,255,0.3)", fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase" }}>Inicio</Link>
                <span style={{ color: "rgba(255,255,255,0.15)" }}>›</span>
                <Link href="/la-gran-logia/gran-cuadro" style={{ fontFamily: R, color: "rgba(255,255,255,0.3)", fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase" }}>La Gran Logia</Link>
                <span style={{ color: "rgba(255,255,255,0.15)" }}>›</span>
                <Link href="/la-gran-logia/logias" style={{ fontFamily: R, color: "rgba(255,255,255,0.3)", fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase" }}>Logias</Link>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                <div style={{ width: "24px", height: "1px", backgroundColor: gold }} />
                <span style={{ fontFamily: R, color: gold, fontSize: "9px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase" }}>
                  {logia.prefijo} · No. {logia.numero} · Fundada en {logia.anio}
                </span>
              </div>
              <h1 style={{ fontFamily: R, color: "#fff", fontSize: "clamp(1.6rem, 3vw, 2.6rem)", fontWeight: 700, letterSpacing: "-0.5px" }}>
                "{logia.nombre}"
              </h1>
            </div>
          </div>
        </section>

        {/* ── INFO RÁPIDA ── */}
        <section style={{ backgroundColor: "#fff", borderBottom: `1px solid ${border}` }}>
          <div className="max-w-7xl mx-auto px-8">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
              {[
                { label: "Ciudad", valor: `${logia.ciudad}, B.C.` },
                { label: "Fundada", valor: logia.anio.toString() },
                { label: "Sesiones", valor: logia.sesiones || "Por confirmar" },
                { label: "Horario", valor: logia.horarios || "Por confirmar" },
              ].map((item, i) => (
                <div key={item.label} style={{
                  padding: "28px 32px",
                  borderRight: i < 3 ? `1px solid ${border}` : "none",
                }}>
                  <div style={{ fontFamily: R, color: gold, fontSize: "9px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "6px" }}>
                    {item.label}
                  </div>
                  <div style={{ fontFamily: R, color: navy, fontSize: "14px", fontWeight: 700 }}>
                    {item.valor}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HISTORIA Y MENSAJE ── */}
        <section style={{ backgroundColor: ivory, padding: "80px 0", borderBottom: `1px solid ${border}` }}>
          <div className="max-w-7xl mx-auto px-8">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>

              {/* Historia */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
                  <div style={{ width: "24px", height: "2px", backgroundColor: gold }} />
                  <h2 style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase" }}>
                    Historia
                  </h2>
                </div>
                <h3 style={{ fontFamily: R, color: navy, fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.3px", marginBottom: "20px" }}>
                  Nuestra trayectoria
                </h3>
                <div style={{ width: "32px", height: "2px", backgroundColor: gold, marginBottom: "24px" }} />
                <p style={{ fontFamily: D, color: textLight, fontSize: "15px", lineHeight: 1.85, marginBottom: "16px" }}>
                  La Respetable Logia Simbólica "{logia.nombre}" No. {logia.numero} fue fundada en {logia.anio} en la ciudad de {logia.ciudad}, Baja California, bajo los auspicios de la Gran Logia de Estado.
                </p>
                <p style={{ fontFamily: D, color: textLight, fontSize: "15px", lineHeight: 1.85 }}>
                  A lo largo de su historia, ha sido un faro de luz y fraternidad para sus hermanos y un ejemplo de servicio para la comunidad bajacaliforniana, contribuyendo al desarrollo moral e intelectual de sus miembros.
                </p>
              </div>

              {/* Mensaje */}
              <div style={{
                backgroundColor: navyDark,
                padding: "48px",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  background: `radial-gradient(ellipse 80% 80% at 110% 110%, rgba(201,169,110,0.07) 0%, transparent 60%)`,
                }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                    <div style={{ width: "20px", height: "1px", backgroundColor: gold }} />
                    <span style={{ fontFamily: R, color: gold, fontSize: "9px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase" }}>
                      Mensaje de la Logia
                    </span>
                  </div>
                  <div style={{ fontFamily: R, color: `${gold}30`, fontSize: "5rem", lineHeight: 0.8, fontWeight: 200, marginBottom: "16px" }}>"</div>
                  <p style={{ fontFamily: Co, color: "rgba(255,255,255,0.75)", fontSize: "1.2rem", fontStyle: "italic", lineHeight: 1.8 }}>
                    {logia.mensaje || "Nuestro templo permanece abierto para todos los hombres de bien que buscan perfeccionarse a sí mismos y contribuir al bienestar de la humanidad."}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── CUADRO DE OFICIALES ── */}
        <section style={{ backgroundColor: "#fff", padding: "80px 0", borderBottom: `1px solid ${border}` }}>
          <div className="max-w-7xl mx-auto px-8">
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "48px" }}>
              <div style={{ width: "24px", height: "2px", backgroundColor: gold }} />
              <h2 style={{ fontFamily: R, color: navy, fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>
                Cuadro de Oficiales
              </h2>
              <div style={{ flex: 1, height: "1px", backgroundColor: border }} />
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1px",
              backgroundColor: border,
              border: `1px solid ${border}`,
            }}>
              {cuadro.map((oficial) => (
                <div key={oficial.cargo} style={{ backgroundColor: "#fff", padding: "22px 28px", transition: "background 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = ivory)}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#fff")}
                >
                  <div style={{ fontFamily: R, color: gold, fontSize: "9px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "5px" }}>
                    {oficial.cargo}
                  </div>
                  <div style={{ fontFamily: R, color: oficial.nombre === "Por confirmar" ? "rgba(11,36,71,0.3)" : navy, fontSize: "14px", fontWeight: 700, fontStyle: oficial.nombre === "Por confirmar" ? "italic" : "normal" }}>
                    {oficial.nombre}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACTO Y REDES ── */}
        <section style={{ backgroundColor: ivory, padding: "72px 0" }}>
          <div className="max-w-7xl mx-auto px-8">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>

              {/* Contacto */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "32px" }}>
                  <div style={{ width: "24px", height: "2px", backgroundColor: gold }} />
                  <h2 style={{ fontFamily: R, color: navy, fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>
                    Contacto
                  </h2>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {[
                    { label: "Ciudad", valor: `${logia.ciudad}, Baja California` },
                    { label: "Dirección", valor: logia.direccion || "Por confirmar" },
                    { label: "Sesiones", valor: logia.sesiones || "Por confirmar" },
                    { label: "Horario", valor: logia.horarios || "Por confirmar" },
                  ].map(item => (
                    <div key={item.label} style={{ display: "flex", gap: "16px", paddingBottom: "20px", borderBottom: `1px solid ${border}` }}>
                      <div style={{ fontFamily: R, color: gold, fontSize: "9px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", minWidth: "80px", paddingTop: "2px" }}>
                        {item.label}
                      </div>
                      <div style={{ fontFamily: D, color: item.valor === "Por confirmar" ? "rgba(11,36,71,0.3)" : navy, fontSize: "14px", fontStyle: item.valor === "Por confirmar" ? "italic" : "normal" }}>
                        {item.valor}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Redes sociales */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "32px" }}>
                  <div style={{ width: "24px", height: "2px", backgroundColor: gold }} />
                  <h2 style={{ fontFamily: R, color: navy, fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>
                    Redes Sociales
                  </h2>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {logia.facebook ? (
                    <a href={logia.facebook} target="_blank" rel="noopener noreferrer" style={{
                      display: "flex", alignItems: "center", gap: "14px",
                      padding: "16px 20px", backgroundColor: "#fff", border: `1px solid ${border}`,
                      transition: "border-color 0.2s", textDecoration: "none",
                    }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = gold)}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = border)}
                    >
                      <span style={{ fontFamily: R, color: navy, fontSize: "12px", fontWeight: 700, letterSpacing: "0.5px" }}>Facebook</span>
                    </a>
                  ) : (
                    <div style={{ padding: "16px 20px", backgroundColor: "#fff", border: `1px solid ${border}` }}>
                      <span style={{ fontFamily: D, color: "rgba(11,36,71,0.3)", fontSize: "13px", fontStyle: "italic" }}>Facebook — Por confirmar</span>
                    </div>
                  )}
                  {logia.instagram ? (
                    <a href={logia.instagram} target="_blank" rel="noopener noreferrer" style={{
                      display: "flex", alignItems: "center", gap: "14px",
                      padding: "16px 20px", backgroundColor: "#fff", border: `1px solid ${border}`,
                      transition: "border-color 0.2s", textDecoration: "none",
                    }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = gold)}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = border)}
                    >
                      <span style={{ fontFamily: R, color: navy, fontSize: "12px", fontWeight: 700, letterSpacing: "0.5px" }}>Instagram</span>
                    </a>
                  ) : (
                    <div style={{ padding: "16px 20px", backgroundColor: "#fff", border: `1px solid ${border}` }}>
                      <span style={{ fontFamily: D, color: "rgba(11,36,71,0.3)", fontSize: "13px", fontStyle: "italic" }}>Instagram — Por confirmar</span>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── VOLVER ── */}
        <div style={{ backgroundColor: "#fff", padding: "32px 0", borderTop: `1px solid ${border}` }}>
          <div className="max-w-7xl mx-auto px-8">
            <Link href="/la-gran-logia/logias" style={{
              fontFamily: R, fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase",
              color: navy, borderBottom: `2px solid ${gold}`, paddingBottom: "3px",
            }}>
              ← Todas las logias
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}

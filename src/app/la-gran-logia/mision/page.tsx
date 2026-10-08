"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const R = "var(--font-raleway), sans-serif";
const D = "var(--font-dm-sans), system-ui, sans-serif";
const Co = "var(--font-cormorant), Georgia, serif";
const navy = "#0B2447";
const navyDark = "#060F1E";
const gold = "#B08D57";
const ivory = "#F5F1EA";
const border = "#E2DDD4";
const textLight = "#6A6A6A";

const valores = [
  {
    palabra: "Tradición",
    descripcion: "Somos guardianes de una herencia de siglos. Preservamos los rituales, símbolos y enseñanzas que han formado hombres de bien en todo el mundo, transmitiéndolos con fidelidad a cada nueva generación.",
  },
  {
    palabra: "Fraternidad",
    descripcion: "Creemos en la hermandad universal entre los hombres. Más allá del origen, la profesión o la creencia, la Masonería une a sus miembros bajo un vínculo de respeto mutuo, lealtad y apoyo sincero.",
  },
  {
    palabra: "Servicio",
    descripcion: "Nuestra razón de ser trasciende los muros del templo. Cada masón se compromete a servir a su familia, su comunidad y a la humanidad, poniendo su capacidad al bien común.",
  },
];

export default function MisionVision() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── PAGE HEADER ── */}
        <section style={{
          paddingTop: "140px",
          paddingBottom: "80px",
          position: "relative",
          overflow: "hidden",
          minHeight: "400px",
        }}>
          <img src="/grandes.jpg" alt="" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${navyDark} 25%, rgba(6,15,30,0.88) 55%, rgba(6,15,30,0.5) 100%)` }} />
          <div className="max-w-7xl mx-auto px-8" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px" }}>
              <Link href="/" style={{ fontFamily: R, color: "rgba(255,255,255,0.3)", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase" }}>Inicio</Link>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
              <Link href="/la-gran-logia/gran-cuadro" style={{ fontFamily: R, color: "rgba(255,255,255,0.3)", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase" }}>La Gran Logia</Link>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontFamily: R, color: gold, fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase" }}>Misión y Visión</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <div style={{ width: "32px", height: "1px", backgroundColor: gold }} />
              <span style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase" }}>
                Muy Respetable Gran Logia de Estado "Baja California"
              </span>
            </div>
            <h1 style={{ fontFamily: R, color: "#fff", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.5px" }}>
              Misión y Visión
            </h1>
          </div>
        </section>

        {/* ── MISIÓN ── */}
        <section style={{ backgroundColor: "#fff", padding: "96px 0", borderBottom: `1px solid ${border}` }}>
          <div className="max-w-7xl mx-auto px-8">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "96px", alignItems: "center" }}>

              <div>
                <div style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>
                  Nuestra Misión
                </div>
                <h2 style={{ fontFamily: R, color: navy, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.5px", marginBottom: "24px" }}>
                  Formar mejores hombres para construir una sociedad más justa
                </h2>
                <div style={{ width: "40px", height: "2px", backgroundColor: gold, marginBottom: "28px" }} />
                <p style={{ fontFamily: D, color: textLight, fontSize: "16px", lineHeight: 1.85, marginBottom: "20px" }}>
                  La Gran Logia de Estado "Baja California" tiene como misión promover el perfeccionamiento moral e intelectual de sus miembros, guiándolos en el camino del autoconocimiento, la virtud y el servicio desinteresado a la humanidad.
                </p>
                <p style={{ fontFamily: D, color: textLight, fontSize: "16px", lineHeight: 1.85 }}>
                  Somos la autoridad reguladora de la Masonería simbólica en el Estado de Baja California, responsable de velar por la unidad, el orden y la integridad de las logias bajo nuestra jurisdicción, y de mantener los más altos estándares de la Masonería regular en México.
                </p>
              </div>

              {/* Cita destacada */}
              <div style={{
                backgroundColor: navyDark,
                padding: "56px 48px",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  background: `radial-gradient(ellipse 80% 80% at 110% 110%, rgba(201,169,110,0.08) 0%, transparent 60%)`,
                }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ fontFamily: R, color: gold, fontSize: "80px", lineHeight: 0.8, fontWeight: 200, marginBottom: "24px", opacity: 0.3 }}>
                    "
                  </div>
                  <p style={{ fontFamily: Co, color: "rgba(255,255,255,0.85)", fontSize: "1.5rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: "32px" }}>
                    Hacer del hombre una obra perfecta es el ideal supremo de la Masonería.
                  </p>
                  <div style={{ width: "32px", height: "1px", backgroundColor: gold }} />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── VISIÓN ── */}
        <section style={{ backgroundColor: ivory, padding: "96px 0", borderBottom: `1px solid ${border}` }}>
          <div className="max-w-7xl mx-auto px-8">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "96px", alignItems: "center" }}>

              {/* Números */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", backgroundColor: border }}>
                {[
                  { numero: "1933", label: "Año de fundación" },
                  { numero: "32", label: "Logias jurisdiccionadas" },
                  { numero: "7", label: "Municipios" },
                  { numero: "2,500+", label: "Hermanos miembros" },
                ].map((stat) => (
                  <div key={stat.label} style={{ backgroundColor: "#fff", padding: "36px 28px", textAlign: "center" }}>
                    <div style={{ fontFamily: R, color: navy, fontSize: "2.2rem", fontWeight: 700, letterSpacing: "-1px", lineHeight: 1 }}>
                      {stat.numero}
                    </div>
                    <div style={{ fontFamily: R, color: gold, fontSize: "9px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", marginTop: "8px" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <div style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>
                  Nuestra Visión
                </div>
                <h2 style={{ fontFamily: R, color: navy, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.5px", marginBottom: "24px" }}>
                  Ser referente de la Masonería regular en México y el mundo
                </h2>
                <div style={{ width: "40px", height: "2px", backgroundColor: gold, marginBottom: "28px" }} />
                <p style={{ fontFamily: D, color: textLight, fontSize: "16px", lineHeight: 1.85, marginBottom: "20px" }}>
                  Aspiramos a ser una Gran Logia reconocida por su excelencia institucional, su transparencia y su profundo compromiso con el bienestar de la sociedad bajacaliforniana.
                </p>
                <p style={{ fontFamily: D, color: textLight, fontSize: "16px", lineHeight: 1.85 }}>
                  Buscamos consolidar nuestra presencia en los siete municipios del estado, fortalecer los lazos con las grandes potencias masónicas del mundo y proyectar el legado de la Masonería de Baja California hacia las generaciones futuras.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── VALORES ── */}
        <section style={{ backgroundColor: "#fff", padding: "96px 0" }}>
          <div className="max-w-7xl mx-auto px-8">

            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <div style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>
                Lo que nos define
              </div>
              <h2 style={{ fontFamily: R, color: navy, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.5px" }}>
                Nuestros Valores
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px", backgroundColor: border }}>
              {valores.map((v) => (
                <div key={v.palabra} style={{ backgroundColor: "#fff", padding: "48px 40px" }}>
                  <div style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>
                    Valor
                  </div>
                  <h3 style={{ fontFamily: R, color: navy, fontSize: "1.8rem", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "20px" }}>
                    {v.palabra}
                  </h3>
                  <div style={{ width: "32px", height: "2px", backgroundColor: gold, marginBottom: "20px" }} />
                  <p style={{ fontFamily: D, color: textLight, fontSize: "15px", lineHeight: 1.8 }}>
                    {v.descripcion}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── EN EL TALLER ── */}
        <section style={{ backgroundColor: "#fff", padding: "0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "400px" }}>
            <div style={{ padding: "64px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>Trabajo Interno</div>
              <h2 style={{ fontFamily: R, color: navy, fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: "20px" }}>
                El informe como acto de responsabilidad fraternal
              </h2>
              <div style={{ width: "40px", height: "2px", backgroundColor: gold, marginBottom: "24px" }} />
              <p style={{ fontFamily: D, color: textLight, fontSize: "15px", lineHeight: 1.85 }}>
                En cada tenida, los hermanos rinden cuentas de su trabajo, sus compromisos y su avance moral. El informe no es una formalidad — es el corazón de la vida activa en el taller, el espacio donde la palabra se convierte en acción y el compromiso en legado.
              </p>
            </div>
            <div style={{ position: "relative", overflow: "hidden", minHeight: "400px" }}>
              <img src="/informes.jpg" alt="Hermano dando informe en tenida" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
              <div style={{ position: "absolute", inset: 0, background: "rgba(6,15,30,0.15)" }} />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "400px" }}>
            <div style={{ position: "relative", overflow: "hidden", minHeight: "400px" }}>
              <img src="/lectura.jpg" alt="Hermano en estudio y reflexión" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
              <div style={{ position: "absolute", inset: 0, background: "rgba(6,15,30,0.15)" }} />
            </div>
            <div style={{ padding: "64px 60px", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: ivory }}>
              <div style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>Estudio y Reflexión</div>
              <h2 style={{ fontFamily: R, color: navy, fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: "20px" }}>
                El masón es, ante todo, un hombre que estudia
              </h2>
              <div style={{ width: "40px", height: "2px", backgroundColor: gold, marginBottom: "24px" }} />
              <p style={{ fontFamily: D, color: "rgba(11,36,71,0.65)", fontSize: "15px", lineHeight: 1.85 }}>
                La Masonería exige del iniciado una constante búsqueda de la verdad. El estudio de los símbolos, la filosofía y la historia de la Orden no es optativo — es el camino que todo masón debe recorrer para comprender el significado profundo de los grados que ha recibido.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

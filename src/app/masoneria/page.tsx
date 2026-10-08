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

const cuerpos = [
  {
    href: "/masoneria/rito-escoces",
    titulo: "Rito Escocés Antiguo y Aceptado",
    subtitulo: "Ancient & Accepted Scottish Rite",
    desc: "Desde el cuarto hasta el trigésimo tercer grado, el Rito Escocés profundiza en la filosofía, historia y simbolismo de la tradición iniciática.",
    grados: "4° – 33°",
  },
  {
    href: "/masoneria/rito-de-york",
    titulo: "Rito de York",
    subtitulo: "York Rite",
    desc: "Compuesto por el Capítulo, el Concilio y la Encomienda, el Rito de York extiende la iniciación hacia la tradición caballeresca cristiana.",
    grados: "Capítulo · Concilio · Encomienda",
  },
  {
    href: "/masoneria/shriners",
    titulo: "Shriners International",
    subtitulo: "Ancient Arabic Order of the Nobles of the Mystic Shrine",
    desc: "Fraternidad masónica dedicada a la filantropía y al cuidado gratuito de niños con enfermedades ortopédicas, quemaduras y otras condiciones.",
    grados: "22 hospitales en Norteamérica",
  },
  {
    href: "/masoneria/ajef",
    titulo: "AJEF",
    subtitulo: "Organismo Apendante",
    desc: "Organismo apendante comprometido con la formación y el desarrollo de jóvenes vinculados a la familia masónica en Baja California.",
    grados: "Jurisdicción Baja California",
  },
  {
    href: "/masoneria/widows-sons",
    titulo: "Widow's Sons",
    subtitulo: "Hijos de la Viuda",
    desc: "Confraternidad masónica de motociclistas que proyectan los valores de la Orden a través del servicio, la hermandad y la libertad de la carretera.",
    grados: "Fraternidad · Servicio · Aventura",
  },
];

export default function MasoneriaPage() {
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
          minHeight: "420px",
        }}>
          <img src="/fraternidad.jpg" alt="" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "right 20%" }} />
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${navyDark} 30%, rgba(6,15,30,0.85) 55%, rgba(6,15,30,0.5) 100%)` }} />
          <div className="max-w-7xl mx-auto px-8" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "40px" }}>
              <Link href="/" style={{ fontFamily: R, color: "rgba(255,255,255,0.3)", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase" }}>Inicio</Link>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontFamily: R, color: gold, fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase" }}>Masonería</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <div style={{ width: "32px", height: "1px", backgroundColor: gold }} />
              <span style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase" }}>
                Muy Respetable Gran Logia de Estado "Baja California"
              </span>
            </div>
            <h1 style={{ fontFamily: R, color: "#fff", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "16px" }}>
              Masonería
            </h1>
            <p style={{ fontFamily: D, color: "rgba(255,255,255,0.45)", fontSize: "16px", maxWidth: "600px", lineHeight: 1.7 }}>
              La Gran Logia de Baja California es madre y supervisora de una familia de organismos apendantes que comparten los valores masónicos de fraternidad, moralidad y servicio.
            </p>
          </div>
        </section>

        {/* ── CUERPOS ── */}
        <section style={{ backgroundColor: ivory, padding: "96px 0" }}>
          <div className="max-w-7xl mx-auto px-8">

            <div style={{ maxWidth: "560px", marginBottom: "72px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <div style={{ width: "32px", height: "2px", backgroundColor: gold }} />
                <span style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase" }}>
                  Cuerpos Apendantes
                </span>
              </div>
              <h2 style={{ fontFamily: R, color: navy, fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: "16px" }}>
                Organismos bajo el amparo de la Gran Logia
              </h2>
              <p style={{ fontFamily: D, color: "rgba(11,36,71,0.6)", fontSize: "15px", lineHeight: 1.8 }}>
                Cada cuerpo apendante amplía y enriquece el camino iniciático del masón, ofreciendo nuevos grados, simbolismos y oportunidades de servicio.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "2px", backgroundColor: border }}>
              {cuerpos.map((c, i) => (
                <Link key={c.href} href={c.href} style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      backgroundColor: "#fff",
                      padding: "36px 40px",
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      alignItems: "center",
                      gap: "32px",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = ivory)}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#fff")}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                        <div style={{ fontFamily: R, color: `${gold}60`, fontSize: "11px", fontWeight: 700, letterSpacing: "1px" }}>
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <h3 style={{ fontFamily: R, color: navy, fontSize: "16px", fontWeight: 700, letterSpacing: "-0.2px" }}>
                          {c.titulo}
                        </h3>
                      </div>
                      <div style={{ fontFamily: D, color: "rgba(11,36,71,0.35)", fontSize: "11px", letterSpacing: "0.5px", marginBottom: "12px" }}>
                        {c.subtitulo}
                      </div>
                      <p style={{ fontFamily: D, color: "rgba(11,36,71,0.55)", fontSize: "13px", lineHeight: 1.7, maxWidth: "640px" }}>
                        {c.desc}
                      </p>
                    </div>

                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <div style={{ fontFamily: R, color: gold, fontSize: "10px", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "12px" }}>
                        {c.grados}
                      </div>
                      <div style={{ fontFamily: R, color: navy, fontSize: "11px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "6px", justifyContent: "flex-end" }}>
                        Ver más
                        <span style={{ color: gold }}>→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* ── FAMILIA MASÓNICA + CMI ── */}
        <section style={{ backgroundColor: "#fff", padding: "0" }}>
          {/* Familia Masónica */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "420px" }}>
            <div style={{ position: "relative", overflow: "hidden", minHeight: "420px" }}>
              <img src="/familiamasonica.jpg" alt="Familia Masónica" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
              <div style={{ position: "absolute", inset: 0, background: "rgba(6,15,30,0.35)" }} />
            </div>
            <div style={{ padding: "72px 64px", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: ivory }}>
              <div style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>La Familia Masónica</div>
              <h2 style={{ fontFamily: R, color: navy, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: "20px" }}>
                Un compromiso que va más allá del taller
              </h2>
              <div style={{ width: "40px", height: "2px", backgroundColor: gold, marginBottom: "24px" }} />
              <p style={{ fontFamily: D, color: "rgba(11,36,71,0.65)", fontSize: "15px", lineHeight: 1.85 }}>
                La Masonería no es solo una institución — es una familia. Los hermanos, sus cónyuges e hijos forman parte de un tejido fraternal que se extiende a cada rincón de la sociedad bajacaliforniana, compartiendo valores, celebraciones y un profundo sentido de pertenencia.
              </p>
            </div>
          </div>

          {/* CMI Internacional */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "420px" }}>
            <div style={{ padding: "72px 64px", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: navyDark }}>
              <div style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>Reconocimiento Internacional</div>
              <h2 style={{ fontFamily: R, color: "#fff", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: "20px" }}>
                Miembros de la Conferencia Masónica Internacional
              </h2>
              <div style={{ width: "40px", height: "2px", backgroundColor: gold, marginBottom: "24px" }} />
              <p style={{ fontFamily: D, color: "rgba(255,255,255,0.55)", fontSize: "15px", lineHeight: 1.85 }}>
                La Gran Logia de Estado "Baja California" es miembro reconocido de la Conferencia Masónica Internacional (CMI), organismo que agrupa a las grandes logias regulares del mundo y garantiza la legitimidad y regularidad de nuestra institución en el ámbito masónico global.
              </p>
            </div>
            <div style={{ position: "relative", overflow: "hidden", minHeight: "420px" }}>
              <img src="/cmi-internacional.jpg" alt="CMI Internacional" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }} />
              <div style={{ position: "absolute", inset: 0, background: "rgba(6,15,30,0.25)" }} />
            </div>
          </div>
        </section>

        {/* ── TEXTO FINAL ── */}
        <section style={{ backgroundColor: navyDark, padding: "80px 0" }}>
          <div className="max-w-7xl mx-auto px-8">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
              <div>
                <p style={{ fontFamily: Co, color: "rgba(255,255,255,0.55)", fontSize: "1.35rem", fontStyle: "italic", lineHeight: 1.8 }}>
                  "La masonería es un sistema progresivo de enseñanza moral, velada en alegoría e ilustrado por símbolos."
                </p>
              </div>
              <div>
                <p style={{ fontFamily: D, color: "rgba(255,255,255,0.4)", fontSize: "14px", lineHeight: 1.85 }}>
                  Los organismos apendantes de la masonería no son independientes de la Gran Logia, sino complementarios a ella. Cada hermano que pertenece a uno de estos cuerpos lo hace como masón, y su membresía en la logia simbólica sigue siendo la base y el fundamento de todo lo demás.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

"use client";

import Link from "@/i18n/Link";
import { useT } from "@/i18n/LocaleProvider";
import { cargo } from "@/i18n/dictionaries";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { oficiales, type Oficial } from "@/data/gran-cuadro";

const R  = "var(--font-raleway), sans-serif";
const D  = "var(--font-dm-sans), system-ui, sans-serif";
const Co = "var(--font-cormorant), Georgia, 'Times New Roman', serif";

const deep    = "#061426";
const navyDk  = "#060F1E";
const gold    = "#C6A15B";
const canvas  = "#f4f4f5";
const textPri = "#09090b";
const textMut = "#71717a";

const iniciales = (n: string) => n.split(" ").filter(Boolean).slice(0, 2).map(p => p[0]).join("").toUpperCase();

/* Tarjeta retrato: foto completa con nombre y cargo sobre degradado */
function Retrato({ o, size = "md" }: { o: Oficial; size?: "md" | "sm" }) {
  const t = useT();
  const pendiente = o.nombre.toLowerCase().includes("pendiente");
  return (
    <Link href={`/la-gran-logia/gran-cuadro/${o.slug}`} className="bento-card gc-card"
      style={{ position: "relative", display: "block", aspectRatio: "3 / 4", borderRadius: "16px", overflow: "hidden", backgroundColor: deep, textDecoration: "none" }}>
      {o.foto ? (
        <img src={o.foto} alt={o.nombre} loading="lazy" className="bento-img"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
      ) : (
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 35%, #1A3A6B 0%, #060F1E 75%)", display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: "30%" }}>
          <span style={{ fontFamily: Co, color: "rgba(198,161,91,0.45)", fontSize: size === "md" ? "4.5rem" : "3.5rem", fontWeight: 500, letterSpacing: "2px" }}>
            {pendiente ? "—" : iniciales(o.nombre)}
          </span>
        </div>
      )}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(6,20,38,0.95) 0%, rgba(6,20,38,0.65) 28%, transparent 55%)" }} />

      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: size === "md" ? "20px 20px 22px" : "16px 16px 18px" }}>
        <div className="gc-cargo" style={{ fontFamily: R, color: gold, fontSize: size === "md" ? "12px" : "11px", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase", lineHeight: 1.35, marginBottom: "6px" }}>
          {cargo(t, o.cargo)}
        </div>
        <div className="gc-name" style={{ fontFamily: Co, color: pendiente ? "rgba(255,255,255,0.55)" : "#fff", fontStyle: pendiente ? "italic" : "normal", fontSize: size === "md" ? "1.6rem" : "1.35rem", fontWeight: 600, lineHeight: 1.1 }}>
          {o.nombre}
        </div>
      </div>
    </Link>
  );
}

function Encabezado({ label, titulo, total }: { label: string; titulo: string; total: number }) {
  const t = useT();
  return (
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "12px", marginBottom: "24px", flexWrap: "wrap" }}>
      <div>
        <span style={{ display: "block", fontFamily: R, color: gold, fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "10px" }}>{label}</span>
        <h2 className="gc-title" style={{ fontFamily: Co, color: textPri, fontSize: "clamp(1.8rem, 2.6vw, 2.4rem)", fontWeight: 500, lineHeight: 1.1 }}>{titulo}</h2>
      </div>
      <span className="d-only" style={{ fontFamily: D, color: textMut, fontSize: "15px" }}>{t.granCuadro.count(total)}</span>
    </div>
  );
}

export default function GranCuadro() {
  const t = useT();
  const G = t.granCuadro;
  // Por ahora solo se muestran los oficiales que ya tienen fotografía
  const conFoto     = oficiales.filter(o => !!o.foto);
  const gm          = oficiales[0];
  const principales = conFoto.filter(o => o.grupo === "Oficiales Principales" && o.slug !== gm.slug);
  const menores     = conFoto.filter(o => o.grupo === "Oficiales Menores");
  const diputados   = conFoto.filter(o => o.grupo === "Diputados de Distrito");

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: canvas }}>

        <PageHero
          crumbs={[{ label: t.common.home, href: "/" }, { label: t.common.granLogia, href: "/la-gran-logia" }, { label: G.crumb }]}
          label={G.hero.label}
          title={<>{G.hero.title1}<br />{G.hero.title2}</>}
          intro={G.hero.intro}
          img="/gran-cuadro.jpg"
          imgPos="center center"
          mobileImgPos="center center"
        />

        {/* ── GRAN MAESTRO ── */}
        <section style={{ backgroundColor: navyDk, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 50% 80% at 75% 50%, rgba(26,58,107,0.45) 0%, transparent 70%)" }} />
          <div className="wrap gm-wrap" style={{ position: "relative", paddingTop: "96px", paddingBottom: "96px" }}>
            <div className="gm-grid">
              <Link href={`/la-gran-logia/gran-cuadro/${gm.slug}`} className="bento-card gm-photo"
                style={{ position: "relative", display: "block", aspectRatio: "4 / 5", borderRadius: "22px", overflow: "hidden", boxShadow: "0 30px 80px rgba(0,0,0,0.45)" }}>
                {gm.foto && <img src={gm.foto} alt={gm.nombre} className="bento-img" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />}
                <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 0 1px rgba(198,161,91,0.35)", borderRadius: "22px" }} />
              </Link>

              <div>
                <span style={{ display: "block", fontFamily: R, color: gold, fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "18px" }}>
                  {cargo(t, gm.cargo)}
                </span>
                <h2 style={{ fontFamily: Co, color: "#fff", fontSize: "clamp(2.8rem, 5vw, 4.6rem)", fontWeight: 500, lineHeight: 1, letterSpacing: "-0.5px", marginBottom: "14px" }}>
                  {gm.nombre}
                </h2>
                {gm.logia && (
                  <div style={{ fontFamily: D, color: "rgba(255,255,255,0.55)", fontSize: "15px", marginBottom: "36px" }}>
                    {gm.logia}
                  </div>
                )}
                {gm.mensaje && (
                  <blockquote style={{ margin: "0 0 40px", paddingLeft: "24px", borderLeft: `2px solid ${gold}` }}>
                    <p style={{ fontFamily: Co, color: "rgba(255,255,255,0.9)", fontSize: "clamp(1.4rem, 2.2vw, 1.85rem)", fontStyle: "italic", fontWeight: 500, lineHeight: 1.4 }}>
                      &ldquo;{gm.mensaje}&rdquo;
                    </p>
                  </blockquote>
                )}
                <Link href={`/la-gran-logia/gran-cuadro/${gm.slug}`} className="bento-card"
                  style={{ display: "inline-flex", alignItems: "center", gap: "14px", textDecoration: "none" }}>
                  <span style={{ width: "48px", height: "48px", borderRadius: "50%", border: "1px solid rgba(198,161,91,0.55)", backgroundColor: "rgba(198,161,91,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span className="bento-arrow-icon" style={{ color: gold, fontSize: "18px" }}>→</span>
                  </span>
                  <span style={{ fontFamily: R, color: gold, fontSize: "13px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase" }}>{G.fullProfile}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── OFICIALES PRINCIPALES ── */}
        <section className="sec">
          <div className="wrap">
            <Encabezado label={G.principales.label} titulo={G.principales.title} total={principales.length} />
            <div className="gc-grid-4">
              {principales.map(o => <Retrato key={o.slug} o={o} />)}
            </div>
          </div>
        </section>

        {/* ── OFICIALES MENORES ── */}
        <section className="sec" style={{ backgroundColor: "#fff", borderTop: "1px solid #e4e4e7" }}>
          <div className="wrap">
            <Encabezado label={G.menores.label} titulo={G.menores.title} total={menores.length} />
            <div className="gc-grid-5">
              {menores.map(o => <Retrato key={o.slug} o={o} size="sm" />)}
            </div>
          </div>
        </section>

        {/* ── DIPUTADOS DE DISTRITO ── */}
        <section className="sec">
          <div className="wrap">
            <Encabezado label={G.diputados.label} titulo={G.diputados.title} total={diputados.length} />
            <div className="gc-grid-4">
              {diputados.map(o => <Retrato key={o.slug} o={o} size="sm" />)}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

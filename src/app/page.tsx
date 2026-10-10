"use client";

import { useEffect } from "react";
import Link from "@/i18n/Link";
import { useT } from "@/i18n/LocaleProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MobileBento, MobileJurisdiccion, MobileCTA } from "@/components/home/HomeMobile";

const R  = "var(--font-raleway), sans-serif";
const D  = "var(--font-dm-sans), system-ui, sans-serif";
const Co = "var(--font-cormorant), Georgia, 'Times New Roman', serif";

// Brand
const navy   = "#0B2447";
const navyDk = "#060F1E";
const gold   = "#B08D57";

// Surface
const canvas  = "#f4f4f5";
const card    = "#ffffff";
const border  = "#e4e4e7";
const textPri = "#09090b";
const textSec = "#3f3f46";
const textMut = "#71717a";

const statNumbers = ["1933", "45", "7", "1,000+"];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// Anima un número de 0 al valor final
function StatNumber({ value, label }: { value: string; label: string }) {
  // Extrae la parte numérica y el sufijo ("+", "")
  const match = value.match(/^([\d,]+)(\D*)$/);
  const numeric = match ? parseInt(match[1].replace(/,/g, ""), 10) : 0;
  const suffix  = match ? match[2] : "";
  const id      = `stat-${value.replace(/\D/g, "")}`;

  useEffect(() => {
    const el = document.getElementById(id);
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const duration = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const p    = Math.min((now - start) / duration, 1);
        const ease = 1 - (1 - p) * (1 - p);
        el.textContent = Math.floor(ease * numeric).toLocaleString("es-MX") + suffix;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = value;
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [id, numeric, suffix, value]);

  return (
    <div className="stat-item" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <div id={id} style={{ fontFamily: R, color: gold, fontSize: "clamp(1.3rem, 2vw, 1.7rem)", fontWeight: 800, letterSpacing: "-1px", lineHeight: 1, whiteSpace: "nowrap" }}>
        0{suffix}
      </div>
      <div className="stat-div" style={{ width: "1px", height: "20px", backgroundColor: "rgba(255,255,255,0.1)", flexShrink: 0 }} />
      <div className="stat-label" style={{ fontFamily: D, color: "rgba(255,255,255,0.4)", fontSize: "13px", lineHeight: 1.3 }}>
        {label}
      </div>
    </div>
  );
}

export default function Home() {
  useReveal();
  const t = useT();

  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="hero" style={{ position: "relative", height: "90vh", minHeight: "620px", overflow: "hidden", display: "flex", alignItems: "center" }}>

          <img src="/gran-logia-tenida.jpg" alt="" aria-hidden="true" className="hero-img"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "90% top" }} />

          <div className="hero-grad-x" style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${navyDk} 20%, rgba(6,15,30,0.80) 42%, rgba(6,15,30,0.35) 65%, transparent 82%)` }} />
          <div className="hero-grad-y" style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, rgba(6,15,30,0.6) 0%, transparent 45%)` }} />

          <div className="hero-content max-w-7xl mx-auto px-8 w-full" style={{ position: "relative", zIndex: 1, paddingTop: "76px" }}>
            <div style={{ maxWidth: "620px" }}>

              <h1 className="hero-h1" style={{ fontFamily: R, lineHeight: 1.0, marginBottom: "32px" }}>
                <span style={{ display: "block", color: "rgba(255,255,255,0.9)", fontSize: "clamp(3rem, 6.5vw, 5.8rem)", fontWeight: 300, letterSpacing: "-2.5px" }}>{t.home.hero.w1}</span>
                <span style={{ display: "block", color: "rgba(255,255,255,0.9)", fontSize: "clamp(3rem, 6.5vw, 5.8rem)", fontWeight: 700, letterSpacing: "-2.5px" }}>{t.home.hero.w2}</span>
                <span style={{ display: "block", color: gold, fontSize: "clamp(3rem, 6.5vw, 5.8rem)", fontWeight: 800, letterSpacing: "-2.5px" }}>{t.home.hero.w3}</span>
              </h1>

              <p className="hero-sub hero-sub-p" style={{ fontFamily: D, color: "rgba(255,255,255,0.5)", fontSize: "19px", lineHeight: 1.7, marginBottom: "40px", maxWidth: "440px" }}>
                {t.home.hero.sub}
              </p>

              <div className="hero-ctas" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/masoneria" style={{
                  fontFamily: R, fontSize: "14px", fontWeight: 700,
                  backgroundColor: gold, color: navyDk,
                  padding: "14px 28px", borderRadius: "14px",
                  display: "inline-block", textDecoration: "none",
                }}>
                  {t.home.hero.cta1}
                </Link>
                <Link href="/la-gran-logia/logias" style={{
                  fontFamily: R, fontSize: "14px", fontWeight: 600,
                  backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.82)",
                  padding: "14px 28px", borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.14)",
                  backdropFilter: "blur(8px)",
                  display: "inline-block", textDecoration: "none",
                }}>
                  {t.home.hero.cta2}
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ── STATS ── pegada al hero */}
        <div style={{ backgroundColor: navyDk, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="stats-wrap max-w-7xl mx-auto px-8">
            <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
              {statNumbers.map((num, i) => (
                <div key={i} style={{
                  padding: "18px 0",
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  paddingRight: "32px",
                  paddingLeft: i === 0 ? "0" : "32px",
                }}>
                  <StatNumber value={num} label={t.home.stats[i]} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─────────────────────────────── */}
        <div style={{ backgroundColor: canvas }}>

          {/* ── BENTO QUICK LINKS ── */}
          <section className="bento-section d-only" style={{ backgroundColor: canvas, padding: "80px 0 80px" }}>
            <div className="bento-outer" style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>

              {/* Encabezado editorial */}
              <div className="reveal" style={{ marginBottom: "48px" }}>
                <div style={{ marginBottom: "16px" }}>
                  <span style={{ fontFamily: R, color: "#C6A15B", fontSize: "12px", fontWeight: 600, letterSpacing: "3.5px", textTransform: "uppercase" }}>
                    {t.home.bento.label}
                  </span>
                </div>
                <h2 style={{ fontFamily: Co, color: textPri, fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 500, letterSpacing: "-0.5px", lineHeight: 1.1, marginBottom: "14px" }}>
                  {t.home.bento.title}
                </h2>
                <p style={{ fontFamily: D, color: textMut, fontSize: "17px", maxWidth: "480px", lineHeight: 1.7 }}>
                  {t.home.bento.desc}
                </p>
              </div>

              {/* Grid bento: 2 col × 3 row */}
              <div className="bento-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "350px 320px 210px", gap: "12px" }}>

                {/* ① ¿Qué es la Masonería? — columna izquierda, span 2 filas */}
                <Link href="/masoneria" className="bento-card bento-span-rows" style={{
                  gridRow: "1 / 3",
                  borderRadius: "12px",
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "40px",
                  textDecoration: "none",
                  backgroundColor: "#061426",
                  boxShadow: "none",
                  transition: "box-shadow 0.4s",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 48px rgba(6,20,38,0.3)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "none"}
                >
                  <img src="/lectura.jpg" alt="" aria-hidden="true" className="bento-img"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
                  {/* Gradiente suave — deja visible la foto en el tercio superior */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(6,20,38,0.97) 0%, rgba(6,20,38,0.70) 40%, rgba(6,20,38,0.25) 65%, rgba(6,20,38,0.05) 100%)" }} />
                  <div className="bento-content" style={{ position: "relative", zIndex: 1 }}>
                    <h3 style={{ fontFamily: Co, color: "#fff", fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.3px", marginBottom: "14px" }}>
                      {t.home.bento.cards[0].title}
                    </h3>
                    <p style={{ fontFamily: D, color: "rgba(255,255,255,0.52)", fontSize: "16px", lineHeight: 1.75, marginBottom: "28px", maxWidth: "300px" }}>
                      {t.home.bento.cards[0].desc}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <div style={{ width: "42px", height: "42px", borderRadius: "50%", border: "1px solid rgba(198,161,91,0.5)", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(198,161,91,0.10)", flexShrink: 0 }}>
                        <span className="bento-arrow-icon" style={{ color: "#C6A15B", fontSize: "17px" }}>→</span>
                      </div>
                      <span style={{ fontFamily: R, color: "#C6A15B", fontSize: "13px", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase" }}>{t.home.bento.cards[0].cta}</span>
                    </div>
                  </div>
                </Link>

                {/* ② ¿Cómo ingresar? — fila 1, columna derecha */}
                <Link href="/masoneria#ingresar" className="bento-card" style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "32px",
                  textDecoration: "none",
                  backgroundColor: "#F5F1E9",
                  boxShadow: "none",
                  transition: "box-shadow 0.4s",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 48px rgba(0,0,0,0.13)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "none"}
                >
                  <img src="/familiamasonica.jpg" alt="" aria-hidden="true" className="bento-img"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "right center" }} />
                  {/* Gradiente horizontal: texto legible a la izquierda, foto visible a la derecha */}
                  <div className="bento-grad-lr bento-grad-cream" style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(245,241,233,1) 35%, rgba(245,241,233,0.88) 52%, rgba(245,241,233,0.45) 72%, transparent 95%)" }} />
                  <div className="bento-content" style={{ position: "relative", zIndex: 1, maxWidth: "56%" }}>
                    <h3 style={{ fontFamily: Co, color: "#061426", fontSize: "clamp(1.6rem, 2.4vw, 2.1rem)", fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.3px", marginBottom: "12px" }}>
                      {t.home.bento.cards[1].title}
                    </h3>
                    <p style={{ fontFamily: D, color: "#3f3f46", fontSize: "15px", lineHeight: 1.7, marginBottom: "22px" }}>
                      {t.home.bento.cards[1].desc}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ width: "38px", height: "38px", borderRadius: "50%", border: "1px solid rgba(6,20,38,0.22)", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(6,20,38,0.06)", flexShrink: 0 }}>
                        <span className="bento-arrow-icon" style={{ color: "#061426", fontSize: "15px" }}>→</span>
                      </div>
                      <span style={{ fontFamily: R, color: "#061426", fontSize: "12px", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase" }}>{t.home.bento.cards[1].cta}</span>
                    </div>
                  </div>
                </Link>

                {/* ③ Nuestras Logias — fila 2, columna derecha */}
                <Link href="/la-gran-logia/logias" className="bento-card" style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "32px",
                  textDecoration: "none",
                  backgroundColor: "#061426",
                  boxShadow: "none",
                  transition: "box-shadow 0.4s",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 48px rgba(6,20,38,0.35)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "none"}
                >
                  <img src="/grandes.jpg" alt="" aria-hidden="true" className="bento-img"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "right center" }} />
                  {/* Gradiente horizontal: texto izquierda, imagen derecha */}
                  <div className="bento-grad-lr bento-grad-dark" style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(6,20,38,1) 35%, rgba(6,20,38,0.80) 55%, rgba(6,20,38,0.35) 80%, rgba(6,20,38,0.1) 100%)" }} />
                  <div className="bento-content" style={{ position: "relative", zIndex: 1, maxWidth: "60%" }}>
                    <div style={{ width: "22px", height: "1px", backgroundColor: "#C6A15B", marginBottom: "16px" }} />
                    <h3 style={{ fontFamily: Co, color: "#fff", fontSize: "clamp(1.6rem, 2.4vw, 2.1rem)", fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.3px", marginBottom: "12px" }}>
                      {t.home.bento.cards[2].title}
                    </h3>
                    <p style={{ fontFamily: D, color: "rgba(255,255,255,0.48)", fontSize: "15px", lineHeight: 1.7, marginBottom: "22px" }}>
                      {t.home.bento.cards[2].desc}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ width: "38px", height: "38px", borderRadius: "50%", border: "1px solid rgba(198,161,91,0.45)", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(198,161,91,0.10)", flexShrink: 0 }}>
                        <span className="bento-arrow-icon" style={{ color: "#C6A15B", fontSize: "15px" }}>→</span>
                      </div>
                      <span style={{ fontFamily: R, color: "#C6A15B", fontSize: "12px", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase" }}>{t.home.bento.cards[2].cta}</span>
                    </div>
                  </div>
                </Link>

                {/* ④ Noticias y Eventos — fila 3, ancho completo */}
                <Link href="/noticias" className="bento-card bento-span-cols" style={{
                  gridColumn: "1 / 3",
                  borderRadius: "12px",
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "36px 44px",
                  textDecoration: "none",
                  backgroundColor: "#061426",
                  boxShadow: "none",
                  transition: "box-shadow 0.4s",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 48px rgba(6,20,38,0.28)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "none"}
                >
                  <img src="/discurso.jpg" alt="" aria-hidden="true" className="bento-img"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 18%" }} />
                  {/* Gradiente horizontal: texto a la izquierda, foto visible en el centro-derecha */}
                  <div className="bento-grad-lr bento-grad-dark" style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(6,20,38,0.97) 0%, rgba(6,20,38,0.78) 35%, rgba(6,20,38,0.35) 62%, transparent 88%)" }} />
                  <div className="bento-content" style={{ position: "relative", zIndex: 1, maxWidth: "500px" }}>
                    <h3 style={{ fontFamily: Co, color: "#fff", fontSize: "clamp(1.7rem, 2.6vw, 2.3rem)", fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.3px", marginBottom: "10px" }}>
                      {t.home.bento.cards[3].title}
                    </h3>
                    <p style={{ fontFamily: D, color: "rgba(255,255,255,0.48)", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
                      {t.home.bento.cards[3].desc}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <div style={{ width: "42px", height: "42px", borderRadius: "50%", border: "1px solid rgba(198,161,91,0.5)", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(198,161,91,0.10)", flexShrink: 0 }}>
                        <span className="bento-arrow-icon" style={{ color: "#C6A15B", fontSize: "17px" }}>→</span>
                      </div>
                      <span style={{ fontFamily: R, color: "#C6A15B", fontSize: "13px", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase" }}>{t.home.bento.cards[3].cta}</span>
                    </div>
                  </div>
                </Link>

              </div>
            </div>
          </section>


          <MobileBento />

          {/* ── JURISDICCIÓN ── */}
          <section className="reveal jurisdiccion-wrap d-only" style={{
            margin: "0 32px 80px",
            borderRadius: "24px",
            overflow: "hidden",
            position: "relative",
            backgroundColor: "#061426",
          }}>
            {/* Imagen de fondo completa */}
            <img src="/mapa-bc.jpg" aria-hidden="true" style={{
              position: "absolute", inset: 0, width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center top",
            }} />
            {/* Overlay suave para legibilidad */}
            <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(6,20,38,0.55)" }} />

            <div className="jurisdiccion-grid" style={{ position: "relative", zIndex: 1, padding: "64px", display: "grid", gridTemplateColumns: "1fr 540px", gap: "48px", alignItems: "center" }}>

              {/* Col 1 — Texto */}
              <div>
                <div style={{ marginBottom: "20px" }}>
                  <span style={{ fontFamily: R, color: "#C6A15B", fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase" }}>
                    {t.home.juris.label}
                  </span>
                </div>
                <h2 style={{ fontFamily: Co, color: "#fff", fontSize: "clamp(2.4rem, 3.2vw, 3.4rem)", fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.3px", marginBottom: "20px" }}>
                  {t.home.juris.title1}<br /><span style={{ color: "#C6A15B" }}>{t.home.juris.title2}</span>
                </h2>
                <p style={{ fontFamily: D, color: "rgba(255,255,255,0.5)", fontSize: "17px", lineHeight: 1.8, marginBottom: "36px", textAlign: "justify", maxWidth: "320px" }}>
                  {t.home.juris.desc}
                </p>

                {/* Stat */}
                <div style={{ display: "flex", alignItems: "flex-end", gap: "16px", marginBottom: "36px" }}>
                  <span style={{ fontFamily: Co, color: "#C6A15B", fontSize: "7rem", fontWeight: 500, lineHeight: 1, letterSpacing: "-3px" }}>45</span>
                  <div style={{ paddingBottom: "10px" }}>
                    <div style={{ fontFamily: R, color: "#fff", fontSize: "13px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1.6 }}>
                      {t.home.juris.statLabel[0]}<br />{t.home.juris.statLabel[1]}<br />{t.home.juris.statLabel[2]}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Link href="/la-gran-logia/logias" style={{ display: "inline-flex", alignItems: "center", gap: "14px", textDecoration: "none" }}>
                  <div style={{ width: "46px", height: "46px", borderRadius: "50%", border: "1px solid rgba(198,161,91,0.55)", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(198,161,91,0.08)" }}>
                    <span style={{ color: "#C6A15B", fontSize: "17px" }}>→</span>
                  </div>
                  <span style={{ fontFamily: R, color: "#C6A15B", fontSize: "12px", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase" }}>
                    {t.home.juris.cta}
                  </span>
                </Link>
              </div>

              {/* Col 2 — Tarjetas de ciudades */}
              <div className="city-cards" style={{ display: "flex", flexDirection: "column", gap: "10px", height: "480px", justifyContent: "space-between" }}>
                {[
                  { city: "Tijuana",                  logias: `19 ${t.home.juris.lodges}`, img: "/tijuana.jpg",  bg: "linear-gradient(135deg,#1a2a4a,#0a1528)" },
                  { city: "Mexicali",                 logias: `18 ${t.home.juris.lodges}`, img: "/mexicali.jpg", bg: "linear-gradient(135deg,#2a1a0e,#150c04)" },
                  { city: "Ensenada",                 logias: `3 ${t.home.juris.lodges}`, img: "/ensenada.jpg", bg: "linear-gradient(135deg,#0d2535,#061520)" },
                  { city: t.home.juris.tecate,         logias: `5 ${t.home.juris.lodges}`, img: "/tecate.jpg",   bg: "linear-gradient(135deg,#1a241a,#0d140d)" },
                ].map((item, i) => (
                  <Link key={i} href="/la-gran-logia/logias" style={{
                    display: "flex", alignItems: "center",
                    textDecoration: "none",
                    borderRadius: "10px",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backgroundColor: "rgba(4,14,28,0.82)",
                    backdropFilter: "blur(12px)",
                    transition: "border-color 0.3s",
                    flex: 1,
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(198,161,91,0.45)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"}
                  >
                    <div style={{ width: "120px", alignSelf: "stretch", flexShrink: 0, position: "relative", background: item.bg }}>
                      <img src={item.img} alt={item.city}
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                        onError={e => { (e.currentTarget as HTMLImageElement).style.opacity = "0"; }} />
                    </div>
                    <div style={{ flex: 1, padding: "14px 20px" }}>
                      <div style={{ fontFamily: R, color: "#fff", fontSize: "20px", fontWeight: 600, marginBottom: "5px" }}>{item.city}</div>
                      <div style={{ fontFamily: D, color: "rgba(198,161,91,0.75)", fontSize: "16px" }}>{item.logias}</div>
                    </div>
                    <div style={{ width: "36px", height: "36px", borderRadius: "50%", border: "1px solid rgba(198,161,91,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "16px", flexShrink: 0 }}>
                      <span style={{ color: "#C6A15B", fontSize: "15px" }}>→</span>
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          </section>


          <MobileJurisdiccion />

          {/* ── CTA ── */}
          <section className="cta-wrap d-only" style={{ padding: "0 32px 80px" }}>
            <div className="reveal cta-box" style={{
              backgroundColor: navyDk, borderRadius: "28px", padding: "48px 56px",
              position: "relative", overflow: "hidden",
              maxWidth: "1200px", margin: "0 auto",
            }}>
              {/* Fondo decorativo */}
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 55% 90% at 20% 50%, rgba(26,58,107,0.35) 0%, transparent 65%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: 0, right: 0, width: "480px", height: "100%", background: "linear-gradient(to left, rgba(198,161,91,0.04) 0%, transparent 100%)", pointerEvents: "none" }} />

              <div className="cta-grid" style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: "0 48px", alignItems: "center" }}>

                {/* Col izquierda — texto */}
                <div>
                  <span style={{ fontFamily: R, color: gold, fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", display: "block", marginBottom: "20px" }}>
                    {t.home.cta.label}
                  </span>
                  <h2 style={{ fontFamily: Co, color: "#fff", fontSize: "clamp(2rem, 2.8vw, 2.7rem)", fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: "16px" }}>
                    {t.home.cta.title1}<br />{t.home.cta.title2}
                  </h2>
                  <p style={{ fontFamily: D, color: "rgba(255,255,255,0.45)", fontSize: "16px", lineHeight: 1.7, marginBottom: "28px", maxWidth: "420px", textAlign: "justify" }}>
                    {t.home.cta.desc}
                  </p>
                  <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                    <Link href="/contacto" style={{
                      fontFamily: R, fontSize: "14px", fontWeight: 700,
                      backgroundColor: gold, color: navyDk,
                      padding: "14px 32px", borderRadius: "14px",
                      display: "inline-block", textDecoration: "none",
                    }}>{t.home.cta.btn1}</Link>
                    <Link href="/masoneria#ingresar" style={{
                      fontFamily: R, fontSize: "14px", fontWeight: 600,
                      backgroundColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.75)",
                      padding: "14px 32px", borderRadius: "14px",
                      border: "1px solid rgba(255,255,255,0.12)",
                      display: "inline-block", textDecoration: "none",
                    }}>{t.home.cta.btn2}</Link>
                  </div>
                </div>

                {/* Divisor vertical */}
                <div className="cta-divider-v" style={{ width: "1px", alignSelf: "stretch", backgroundColor: "rgba(255,255,255,0.07)" }} />

                {/* Col derecha — pasos */}
                <div className="cta-right" style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                  <div style={{ fontFamily: R, color: "rgba(255,255,255,0.25)", fontSize: "11px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "20px" }}>
                    {t.home.cta.process}
                  </div>
                  {t.home.cta.steps.map((st, i) => ({ n: String(i + 1).padStart(2, "0"), ...st })).map((step, i) => (
                    <div key={i} style={{
                      display: "flex", gap: "24px", alignItems: "flex-start",
                      paddingBottom: i < 2 ? "16px" : "0",
                      marginBottom: i < 2 ? "16px" : "0",
                      borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    }}>
                      <span style={{ fontFamily: Co, color: gold, fontSize: "1.8rem", fontWeight: 500, lineHeight: 1, flexShrink: 0, opacity: 0.7 }}>{step.n}</span>
                      <div>
                        <div style={{ fontFamily: R, color: "#fff", fontSize: "16px", fontWeight: 700, marginBottom: "6px" }}>{step.title}</div>
                        <div style={{ fontFamily: D, color: "rgba(255,255,255,0.4)", fontSize: "14px", lineHeight: 1.7 }}>{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </section>

          <MobileCTA />

        </div>
      </main>
      <Footer />
    </>
  );
}

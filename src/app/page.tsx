"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const R  = "var(--font-raleway), sans-serif";
const D  = "var(--font-dm-sans), system-ui, sans-serif";

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

const stats = [
  { number: "1933",   label: "Año de Fundación" },
  { number: "45",     label: "Logias Jurisdiccionadas" },
  { number: "7",      label: "Municipios" },
  { number: "1,000+", label: "Hermanos Miembros" },
];

const quickLinks = [
  { title: "¿Qué es la Masonería?", desc: "Conoce los principios, valores y el propósito de nuestra institución.", href: "/masoneria" },
  { title: "¿Cómo Ingresar?",       desc: "Información clara sobre el proceso de ingreso a la Masonería.",         href: "/masoneria#ingresar" },
  { title: "Nuestras Logias",        desc: "Encuentra tu logia más cercana en el Estado de Baja California.",       href: "/la-gran-logia/logias" },
  { title: "Noticias y Eventos",     desc: "Entérate de las actividades, eventos y comunicados recientes.",         href: "/noticias" },
];

const features = [
  { title: "Historia",     desc: "Más de 90 años de historia, trabajo y compromiso con la sociedad bajacaliforniana." },
  { title: "Misión",       desc: "Formar mejores hombres para construir una sociedad más justa y fraterna." },
  { title: "Valores",      desc: "Libertad, Igualdad, Fraternidad, Tolerancia, Honor, Integridad y Verdad." },
  { title: "Organización", desc: "Estructura clara y transparente al servicio de nuestras logias y de la sociedad." },
];

const news = [
  { category: "Institución",    date: "15 Mayo, 2025", title: "Tenida Solemne Conmemorativa del 100 Aniversario",     desc: "Una noche de reflexión y fraternidad para celebrar nuestra historia y compromiso." },
  { category: "Publicación",    date: "2 Mayo, 2025",  title: "Publicación del Boletín Trimestral N° 12",             desc: "Ya está disponible la nueva edición con artículos de interés para nuestra comunidad." },
  { category: "Visita Oficial", date: "20 Abril, 2025",title: "Visita Oficial a la R∴L∴ Estrella del Desierto N° 4", desc: "El Gran Maestro y su comitiva realizaron una visita fraternal a nuestra logia en Mexicali." },
];

// Hook: activa clase "visible" al hacer scroll
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Home() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section style={{ position: "relative", height: "90vh", minHeight: "620px", overflow: "hidden", display: "flex", alignItems: "center" }}>

          {/* Foto */}
          <img
            src="/gran-logia-tenida.jpg"
            alt=""
            aria-hidden="true"
            className="hero-img"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "90% top" }}
          />

          {/* Overlay */}
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(to right, ${navyDk} 20%, rgba(6,15,30,0.80) 42%, rgba(6,15,30,0.35) 65%, transparent 82%)`,
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(to top, rgba(6,15,30,0.6) 0%, transparent 45%)`,
          }} />

          {/* Contenido */}
          <div className="max-w-7xl mx-auto px-8 w-full" style={{ position: "relative", zIndex: 1, paddingTop: "76px" }}>
            <div style={{ maxWidth: "620px" }}>

              {/* Etiqueta */}
              <div className="hero-label" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "36px" }}>
                <div style={{ width: "36px", height: "1px", backgroundColor: gold }} />
                <span style={{ fontFamily: R, color: "rgba(176,141,87,0.75)", fontSize: "10px", fontWeight: 600, letterSpacing: "3.5px", textTransform: "uppercase" }}>
                  Gran Logia de Estado · Baja California
                </span>
              </div>

              {/* Headline */}
              <h1 className="hero-h1" style={{ fontFamily: R, lineHeight: 1.0, marginBottom: "32px" }}>
                <span style={{ display: "block", color: "rgba(255,255,255,0.9)", fontSize: "clamp(3rem, 6.5vw, 5.8rem)", fontWeight: 300, letterSpacing: "-2.5px" }}>
                  Tradición.
                </span>
                <span style={{ display: "block", color: "rgba(255,255,255,0.9)", fontSize: "clamp(3rem, 6.5vw, 5.8rem)", fontWeight: 700, letterSpacing: "-2.5px" }}>
                  Fraternidad.
                </span>
                <span style={{ display: "block", color: gold, fontSize: "clamp(3rem, 6.5vw, 5.8rem)", fontWeight: 800, letterSpacing: "-2.5px" }}>
                  Servicio.
                </span>
              </h1>

              {/* Subtítulo */}
              <p className="hero-sub" style={{ fontFamily: D, color: "rgba(255,255,255,0.5)", fontSize: "17px", lineHeight: 1.7, marginBottom: "40px", maxWidth: "440px" }}>
                Más de nueve décadas construyendo hombres libres y una sociedad mejor en Baja California.
              </p>

              {/* CTAs */}
              <div className="hero-ctas" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/masoneria" style={{
                  fontFamily: R, fontSize: "12px", fontWeight: 700, letterSpacing: "0.5px",
                  backgroundColor: gold, color: navyDk,
                  padding: "14px 28px", borderRadius: "14px",
                  display: "inline-block", textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88"}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = "1"}
                >
                  Conoce la Masonería
                </Link>
                <Link href="/la-gran-logia/logias" style={{
                  fontFamily: R, fontSize: "12px", fontWeight: 600, letterSpacing: "0.5px",
                  backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.82)",
                  padding: "14px 28px", borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.14)",
                  backdropFilter: "blur(8px)",
                  display: "inline-block", textDecoration: "none",
                  transition: "background 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.13)"}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.07)"}
                >
                  Encuentra una Logia
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ── STATS — sale del hero con negative margin ── */}
        <div style={{ backgroundColor: canvas, paddingBottom: "0" }}>
          <div className="max-w-7xl mx-auto px-8">
            <div style={{
              backgroundColor: card,
              border: `1px solid ${border}`,
              borderRadius: "28px",
              marginTop: "-56px",
              position: "relative",
              zIndex: 10,
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              overflow: "hidden",
              boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
            }}>
              {stats.map((s, i) => (
                <div key={i} className="reveal" style={{
                  padding: "36px 32px",
                  borderRight: i < 3 ? `1px solid ${border}` : "none",
                }}>
                  <div style={{ fontFamily: R, color: navy, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, letterSpacing: "-1.5px", lineHeight: 1, marginBottom: "6px" }}>
                    {s.number}
                  </div>
                  <div style={{ fontFamily: D, color: textMut, fontSize: "13px" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─────────────────────────────── */}
        {/* SECCIONES CANVAS               */}
        {/* ─────────────────────────────── */}
        <div style={{ backgroundColor: canvas }}>

          {/* ── QUICK LINKS ── */}
          <section style={{ padding: "64px 0 0" }}>
            <div className="max-w-7xl mx-auto px-8">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
                {quickLinks.map((item, i) => (
                  <Link key={i} href={item.href}
                    className="reveal"
                    style={{
                      display: "block",
                      backgroundColor: card,
                      border: `1px solid ${border}`,
                      borderRadius: "28px",
                      padding: "32px 28px",
                      transition: "box-shadow 0.2s, border-color 0.2s",
                      textDecoration: "none",
                      animationDelay: `${i * 0.08}s`,
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = gold;
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.07)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = border;
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                    }}
                  >
                    <div style={{ width: "24px", height: "2px", backgroundColor: gold, marginBottom: "20px" }} />
                    <h3 style={{ fontFamily: R, color: textPri, fontSize: "15px", fontWeight: 700, marginBottom: "10px" }}>
                      {item.title}
                    </h3>
                    <p style={{ fontFamily: D, color: textMut, fontSize: "13px", lineHeight: 1.65, margin: 0 }}>
                      {item.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* ── SOBRE ── */}
          <section style={{ padding: "80px 0" }}>
            <div className="max-w-7xl mx-auto px-8">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>

                <div className="reveal">
                  <div style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>
                    Conoce la
                  </div>
                  <h2 style={{ fontFamily: R, color: textPri, fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-1.5px", marginBottom: "24px" }}>
                    Gran Logia de Estado<br /><span style={{ color: navy }}>de Baja California</span>
                  </h2>
                  <div style={{ width: "36px", height: "2px", backgroundColor: gold, marginBottom: "28px" }} />
                  <p style={{ fontFamily: D, color: textSec, fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
                    Somos la institución masónica que rige y coordina las logias simbólicas del Estado de Baja California, promoviendo la virtud, el conocimiento y el servicio a la humanidad.
                  </p>
                  <p style={{ fontFamily: D, color: textMut, fontSize: "15px", lineHeight: 1.8, marginBottom: "36px" }}>
                    Desde nuestra fundación en 1933, hemos sido parte activa del desarrollo social, moral y cultural de nuestra comunidad.
                  </p>
                  <Link href="/la-gran-logia" style={{
                    fontFamily: R, fontSize: "13px", fontWeight: 700,
                    backgroundColor: navy, color: card,
                    padding: "12px 24px", borderRadius: "14px",
                    display: "inline-block", textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = "1"}
                  >
                    Más sobre nosotros
                  </Link>
                </div>

                <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  {features.map((f, i) => (
                    <div key={i} style={{
                      backgroundColor: card,
                      border: `1px solid ${border}`,
                      borderRadius: "24px",
                      padding: "28px",
                      transition: "border-color 0.2s",
                    }}
                      onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = gold}
                      onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = border}
                    >
                      <div style={{ width: "20px", height: "2px", backgroundColor: gold, marginBottom: "16px" }} />
                      <h3 style={{ fontFamily: R, color: navy, fontSize: "14px", fontWeight: 700, marginBottom: "10px" }}>{f.title}</h3>
                      <p style={{ fontFamily: D, color: textMut, fontSize: "13px", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </section>

          {/* ── DARK BAND ── */}
          <section className="reveal" style={{ margin: "0 32px 80px", borderRadius: "36px", backgroundColor: navyDk, padding: "64px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "64px", alignItems: "center" }}>
              <div>
                <div style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>
                  Nuestra jurisdicción
                </div>
                <h2 style={{ fontFamily: R, color: "#fff", fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.5px", margin: 0 }}>
                  Una Gran Logia que trabaja en todo Baja California
                </h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {[
                  { city: "Tijuana",                  logias: "19 Logias" },
                  { city: "Mexicali",                  logias: "18 Logias" },
                  { city: "Ensenada",                  logias: "3 Logias" },
                  { city: "Tecate, Rosarito y Valle",  logias: "5 Logias" },
                ].map((item, i) => (
                  <div key={i} style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "16px",
                    padding: "20px 24px",
                  }}>
                    <div style={{ fontFamily: R, color: "#fff", fontSize: "15px", fontWeight: 700, marginBottom: "4px" }}>{item.city}</div>
                    <div style={{ fontFamily: D, color: "rgba(176,141,87,0.65)", fontSize: "13px" }}>{item.logias}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── NOTICIAS ── */}
          <section style={{ padding: "0 0 80px" }}>
            <div className="max-w-7xl mx-auto px-8">
              <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px" }}>
                <div>
                  <div style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>
                    Actualidad
                  </div>
                  <h2 style={{ fontFamily: R, color: textPri, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, letterSpacing: "-1px", margin: 0 }}>
                    Noticias
                  </h2>
                </div>
                <Link href="/noticias" style={{
                  fontFamily: R, color: textSec, fontSize: "13px", fontWeight: 600,
                  backgroundColor: card, border: `1px solid ${border}`, borderRadius: "10000px",
                  padding: "10px 20px", textDecoration: "none",
                }}>
                  Ver todas →
                </Link>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
                {news.map((item, i) => (
                  <article key={i} className="reveal" style={{
                    backgroundColor: card,
                    border: `1px solid ${border}`,
                    borderRadius: "28px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                    transitionDelay: `${i * 0.1}s`,
                  }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = gold;
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.07)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = border;
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <div style={{
                      height: "160px",
                      background: `linear-gradient(135deg, ${navy} 0%, ${navyDk} 100%)`,
                      display: "flex", alignItems: "flex-end", padding: "16px 20px",
                    }}>
                      <div style={{
                        display: "inline-block",
                        backgroundColor: "rgba(176,141,87,0.15)",
                        border: "1px solid rgba(176,141,87,0.3)",
                        borderRadius: "8px", padding: "4px 10px",
                      }}>
                        <span style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase" }}>
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div style={{ padding: "24px 24px 28px" }}>
                      <div style={{ fontFamily: D, color: textMut, fontSize: "12px", marginBottom: "10px" }}>{item.date}</div>
                      <h3 style={{ fontFamily: R, color: textPri, fontSize: "15px", fontWeight: 700, lineHeight: 1.4, marginBottom: "10px" }}>{item.title}</h3>
                      <p style={{ fontFamily: D, color: textMut, fontSize: "13px", lineHeight: 1.65, marginBottom: "16px" }}>{item.desc}</p>
                      <span style={{ fontFamily: R, color: gold, fontSize: "12px", fontWeight: 600 }}>Leer más →</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section style={{ padding: "0 32px 80px" }}>
            <div className="reveal" style={{
              backgroundColor: navyDk,
              borderRadius: "36px",
              padding: "80px 64px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              maxWidth: "1200px",
              margin: "0 auto",
            }}>
              <div style={{
                position: "absolute", inset: 0,
                background: `radial-gradient(ellipse 60% 80% at 50% 50%, rgba(26,58,107,0.3) 0%, transparent 70%)`,
                pointerEvents: "none",
              }} />
              <div style={{ position: "relative", zIndex: 1, maxWidth: "540px", margin: "0 auto" }}>
                <div style={{
                  display: "inline-block",
                  backgroundColor: "rgba(176,141,87,0.12)",
                  border: "1px solid rgba(176,141,87,0.25)",
                  borderRadius: "10000px", padding: "6px 16px", marginBottom: "24px",
                }}>
                  <span style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase" }}>
                    ¿Interesado en unirte?
                  </span>
                </div>
                <h2 style={{ fontFamily: R, color: "#fff", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1px", marginBottom: "20px" }}>
                  Da el primer paso hacia la hermandad
                </h2>
                <p style={{ fontFamily: D, color: "rgba(255,255,255,0.45)", fontSize: "16px", lineHeight: 1.75, marginBottom: "40px" }}>
                  La masonería está abierta a hombres de bien, de cualquier origen, religión o profesión, mayores de 18 años.
                </p>
                <Link href="/contacto" style={{
                  fontFamily: R, fontSize: "13px", fontWeight: 700,
                  backgroundColor: gold, color: navyDk,
                  padding: "14px 36px", borderRadius: "14px",
                  display: "inline-block", textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88"}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = "1"}
                >
                  Contáctanos hoy
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}

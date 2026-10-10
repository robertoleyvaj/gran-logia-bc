"use client";

import { useRef, useState } from "react";
import Link from "@/i18n/Link";
import { useT } from "@/i18n/LocaleProvider";

const R  = "var(--font-raleway), sans-serif";
const D  = "var(--font-dm-sans), system-ui, sans-serif";
const Co = "var(--font-cormorant), Georgia, 'Times New Roman', serif";

const navyDk  = "#060F1E";
const deep    = "#061426";
const goldL   = "#C6A15B";
const canvas  = "#f4f4f5";
const textPri = "#09090b";
const textMut = "#71717a";

/* ─────────────────────────────────────────────
   BENTO → carrusel deslizable de tarjetas verticales
   ───────────────────────────────────────────── */
const cardMeta = [
  { href: "/masoneria",            img: "/lectura.jpg",         pos: "center 30%" },
  { href: "/masoneria#ingresar",   img: "/familiamasonica.jpg", pos: "70% center" },
  { href: "/la-gran-logia/logias", img: "/grandes.jpg",         pos: "65% center" },
  { href: "/noticias",             img: "/discurso.jpg",        pos: "center 35%" },
];

export function MobileBento() {
  const t = useT();
  const cards = cardMeta.map((m, i) => ({ ...m, title: t.home.bento.cards[i].title, desc: t.home.bento.cards[i].desc, cta: t.home.bento.cards[i].cta }));
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    const first = el.children[0] as HTMLElement | undefined;
    if (!first) return;
    const step = first.offsetWidth + 12;
    setActive(Math.min(cardMeta.length - 1, Math.round(el.scrollLeft / step)));
  };

  return (
    <section className="m-only" style={{ backgroundColor: canvas, padding: "56px 0 52px" }}>
      <div style={{ padding: "0 20px", marginBottom: "28px" }}>
        <span style={{ fontFamily: R, color: goldL, fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", display: "block", marginBottom: "14px" }}>
          {t.home.bento.label}
        </span>
        <h2 style={{ fontFamily: Co, color: textPri, fontSize: "2.4rem", fontWeight: 500, lineHeight: 1.05, letterSpacing: "-0.5px", marginBottom: "14px" }}>
          {t.home.bento.title}
        </h2>
        <p style={{ fontFamily: D, color: textMut, fontSize: "16px", lineHeight: 1.65, textAlign: "justify" }}>
          {t.home.bento.desc}
        </p>
      </div>

      <div ref={track} onScroll={onScroll} className="m-carousel">
        {cards.map((c, i) => (
          <Link key={c.href} href={c.href} className="m-card">
            <img src={c.img} alt="" aria-hidden="true"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: c.pos }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(6,20,38,0.96) 0%, rgba(6,20,38,0.75) 32%, rgba(6,20,38,0.1) 62%, rgba(6,20,38,0.25) 100%)" }} />

            <span style={{ position: "absolute", top: "20px", left: "22px", fontFamily: R, color: "rgba(255,255,255,0.75)", fontSize: "12px", fontWeight: 600, letterSpacing: "2px" }}>
              {String(i + 1).padStart(2, "0")} <span style={{ opacity: 0.45 }}>/ {String(cards.length).padStart(2, "0")}</span>
            </span>

            <div style={{ position: "relative", zIndex: 1, padding: "0 22px 24px" }}>
              <h3 style={{ fontFamily: Co, color: "#fff", fontSize: "2.1rem", fontWeight: 500, lineHeight: 1.05, marginBottom: "10px" }}>
                {c.title}
              </h3>
              <p style={{ fontFamily: D, color: "rgba(255,255,255,0.68)", fontSize: "15px", lineHeight: 1.55, marginBottom: "20px" }}>
                {c.desc}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "44px", height: "44px", borderRadius: "50%", border: "1px solid rgba(198,161,91,0.55)", backgroundColor: "rgba(198,161,91,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: goldL, fontSize: "18px" }}>→</span>
                <span style={{ fontFamily: R, color: goldL, fontSize: "13px", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase" }}>{c.cta}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Indicador */}
      <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "22px" }}>
        {cards.map((_, i) => (
          <span key={i} style={{
            height: "4px", borderRadius: "4px",
            width: i === active ? "28px" : "8px",
            backgroundColor: i === active ? goldL : "rgba(6,20,38,0.15)",
            transition: "all 0.3s ease",
          }} />
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   JURISDICCIÓN → mapa arriba, texto y mosaico de ciudades abajo
   ───────────────────────────────────────────── */
const cityMeta = [
  { city: "Tijuana",  n: 19, img: "/tijuana.jpg",  bg: "linear-gradient(135deg,#1a2a4a,#0a1528)" },
  { city: "Mexicali", n: 18, img: "/mexicali.jpg", bg: "linear-gradient(135deg,#2a1a0e,#150c04)" },
  { city: "Ensenada", n: 3,  img: "/ensenada.jpg", bg: "linear-gradient(135deg,#0d2535,#061520)" },
  { city: "",         n: 5,  img: "/tecate.jpg",   bg: "linear-gradient(135deg,#1a241a,#0d140d)" },
];

export function MobileJurisdiccion() {
  const t = useT();
  const cities = cityMeta.map(c => ({ ...c, city: c.city || t.home.juris.tecate, logias: `${c.n} ${t.home.juris.lodges}` }));
  return (
    <section className="m-only" style={{ margin: "0 12px 56px", borderRadius: "22px", overflow: "hidden", backgroundColor: deep }}>
      {/* Etiqueta — fuera del mapa para no encimarse con los nombres de ciudades */}
      <div style={{ padding: "28px 24px 8px" }}>
        <span style={{ fontFamily: R, color: goldL, fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase" }}>
          {t.home.juris.label}
        </span>
      </div>

      {/* Mapa */}
      <div style={{ position: "relative", height: "340px" }}>
        <img src="/mapa-bc.jpg" alt={t.home.juris.mapAlt} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "44% 0%" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, ${deep} 0%, transparent 8%, transparent 70%, ${deep} 100%)` }} />
      </div>

      <div style={{ position: "relative", padding: "8px 24px 32px" }}>
        <h2 style={{ fontFamily: Co, color: "#fff", fontSize: "2.5rem", fontWeight: 500, lineHeight: 1.05, marginBottom: "16px" }}>
          {t.home.juris.title1} <span style={{ color: goldL }}>{t.home.juris.title2}</span>
        </h2>
        <p style={{ fontFamily: D, color: "rgba(255,255,255,0.6)", fontSize: "16px", lineHeight: 1.7, textAlign: "justify", marginBottom: "28px" }}>
          {t.home.juris.desc}
        </p>

        {/* Stat */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", paddingBottom: "28px", marginBottom: "24px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <span style={{ fontFamily: Co, color: goldL, fontSize: "5rem", fontWeight: 500, lineHeight: 0.9 }}>45</span>
          <span style={{ fontFamily: R, color: "#fff", fontSize: "13px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1.6 }}>
            {t.home.juris.statLabel[0]}<br />{t.home.juris.statLabel[1]} {t.home.juris.statLabel[2]}
          </span>
        </div>

        {/* Mosaico de ciudades */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "24px" }}>
          {cities.map(c => (
            <Link key={c.city} href="/la-gran-logia/logias" style={{ position: "relative", height: "170px", borderRadius: "14px", overflow: "hidden", background: c.bg, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "14px", textDecoration: "none" }}>
              <img src={c.img} alt="" aria-hidden="true"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                onError={e => { (e.currentTarget as HTMLImageElement).style.opacity = "0"; }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(4,14,28,0.92) 0%, rgba(4,14,28,0.35) 55%, transparent 100%)" }} />
              <div style={{ position: "relative" }}>
                <div style={{ fontFamily: R, color: "#fff", fontSize: "16px", fontWeight: 700, lineHeight: 1.2, marginBottom: "4px" }}>{c.city}</div>
                <div style={{ fontFamily: D, color: goldL, fontSize: "14px" }}>{c.logias}</div>
              </div>
            </Link>
          ))}
        </div>

        <Link href="/la-gran-logia/logias" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", padding: "16px", borderRadius: "14px", border: "1px solid rgba(198,161,91,0.5)", fontFamily: R, color: goldL, fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none" }}>
          {t.home.juris.cta} <span style={{ fontSize: "17px" }}>→</span>
        </Link>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CTA → línea de tiempo vertical + botones a todo lo ancho
   ───────────────────────────────────────────── */


export function MobileCTA() {
  const t = useT();
  const steps = t.home.cta.steps.map((st, i) => ({ n: String(i + 1).padStart(2, "0"), ...st }));
  return (
    <section className="m-only" style={{ padding: "0 12px 56px" }}>
      <div style={{ backgroundColor: navyDk, borderRadius: "22px", padding: "44px 24px 28px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 90% 50% at 50% 0%, rgba(26,58,107,0.45) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative" }}>
          <span style={{ fontFamily: R, color: goldL, fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", display: "block", marginBottom: "14px" }}>
            {t.home.cta.label}
          </span>
          <h2 style={{ fontFamily: Co, color: "#fff", fontSize: "2.5rem", fontWeight: 500, lineHeight: 1.05, marginBottom: "16px" }}>
            {t.home.cta.title1} {t.home.cta.title2}
          </h2>
          <p style={{ fontFamily: D, color: "rgba(255,255,255,0.6)", fontSize: "16px", lineHeight: 1.7, textAlign: "justify", marginBottom: "36px" }}>
            {t.home.cta.desc}
          </p>

          {/* Línea de tiempo */}
          <div style={{ marginBottom: "36px" }}>
            {steps.map((s, i) => (
              <div key={s.n} style={{ display: "flex", gap: "18px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <span style={{ width: "44px", height: "44px", borderRadius: "50%", border: "1px solid rgba(198,161,91,0.55)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: Co, color: goldL, fontSize: "1.25rem", fontWeight: 600 }}>{s.n}</span>
                  {i < steps.length - 1 && <span style={{ width: "1px", flex: 1, minHeight: "28px", backgroundColor: "rgba(198,161,91,0.25)", margin: "6px 0" }} />}
                </div>
                <div style={{ paddingTop: "9px", paddingBottom: i < steps.length - 1 ? "26px" : 0 }}>
                  <div style={{ fontFamily: R, color: "#fff", fontSize: "17px", fontWeight: 700, marginBottom: "6px" }}>{s.title}</div>
                  <div style={{ fontFamily: D, color: "rgba(255,255,255,0.55)", fontSize: "15px", lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Link href="/contacto" style={{ display: "block", textAlign: "center", padding: "17px", borderRadius: "14px", backgroundColor: "#B08D57", color: navyDk, fontFamily: R, fontSize: "15px", fontWeight: 700, textDecoration: "none" }}>
              {t.home.cta.btn1}
            </Link>
            <Link href="/masoneria#ingresar" style={{ display: "block", textAlign: "center", padding: "17px", borderRadius: "14px", backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)", color: "rgba(255,255,255,0.85)", fontFamily: R, fontSize: "15px", fontWeight: 600, textDecoration: "none" }}>
              {t.home.cta.btn2}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

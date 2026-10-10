"use client";

import type { ReactNode } from "react";
import Link from "@/i18n/Link";
import { useT } from "@/i18n/LocaleProvider";
import { useParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { logias, getLogiaByNumero } from "@/data/logias";

const R  = "var(--font-raleway), sans-serif";
const D  = "var(--font-dm-sans), system-ui, sans-serif";
const Co = "var(--font-cormorant), Georgia, 'Times New Roman', serif";

const deep    = "#061426";
const navyDk  = "#060F1E";
const gold    = "#C6A15B";
const goldDk  = "#8a6d3b";
const cream   = "#F5F1E9";
const canvas  = "#f4f4f5";
const textPri = "#09090b";
const textSec = "#3f3f46";
const textMut = "#71717a";
const line    = "#e4e4e7";


// Estructura estándar de oficiales de una logia simbólica (en español, como en los datos)
const cargosEstandar = [
  "Venerable Maestro", "Primer Vigilante", "Segundo Vigilante", "Orador",
  "Secretario", "Tesorero", "Maestro de Ceremonias", "Hospitalario",
  "Primer Diácono", "Segundo Diácono", "Porta Estandarte", "Guarda Templo",
];

const Label = ({ children }: { children: ReactNode }) => (
  <span style={{ display: "block", fontFamily: R, color: gold, fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px" }}>
    {children}
  </span>
);

const Icon = ({ d }: { d: ReactNode }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={goldDk} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{d}</svg>
);

export default function LogiaPage() {
  const t = useT();
  const T = t.logia;
  const PENDIENTE = t.common.pending;
  // Traduce un cargo estándar al idioma actual (si no es estándar, se deja igual)
  const cargoLocal = (c: string) => { const i = cargosEstandar.indexOf(c); return i >= 0 ? T.cargos[i] : c; };
  const params = useParams();
  const logia = getLogiaByNumero(Number(params.numero));

  if (!logia) {
    return (
      <>
        <Navbar />
        <main style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 20px", backgroundColor: canvas, textAlign: "center" }}>
          <div>
            <h1 style={{ fontFamily: Co, color: textPri, fontSize: "2.6rem", marginBottom: "12px" }}>{T.notFound}</h1>
            <Link href="/la-gran-logia/logias" style={{ fontFamily: R, color: goldDk, fontWeight: 700 }}>{T.viewAll}</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const ordenadas = [...logias].sort((a, b) => a.numero - b.numero);
  const idx = ordenadas.findIndex(l => l.numero === logia.numero);
  const anterior  = idx > 0 ? ordenadas[idx - 1] : null;
  const siguiente = idx < ordenadas.length - 1 ? ordenadas[idx + 1] : null;

  const cuadro = logia.cuadro && logia.cuadro.length > 0
    ? logia.cuadro
    : cargosEstandar.map(cargo => ({ cargo, nombre: PENDIENTE }));
  const cuadroPendiente = cuadro.every(o => o.nombre === PENDIENTE);

  const mensaje = logia.mensaje || T.defaultMessage;
  const mapsUrl = logia.direccion
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${logia.direccion}, ${logia.ciudad}, Baja California`)}`
    : null;

  const info = [
    { label: T.info.ciudad,   valor: logia.ciudad,                 icon: <><path d="M12 22s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" /><circle cx="12" cy="10" r="2.5" /></> },
    { label: T.info.fundada,  valor: `${logia.anio}`,              icon: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></> },
    { label: T.info.sesiones, valor: logia.sesiones || PENDIENTE,  icon: <><circle cx="12" cy="12" r="9" /><path d="M8 12h8" /></> },
    { label: T.info.horario,  valor: logia.horarios || PENDIENTE,  icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></> },
  ];

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: canvas }}>

        {/* ── ENCABEZADO ── */}
        <section style={{ position: "relative", overflow: "hidden", backgroundColor: navyDk }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 90% at 15% 50%, rgba(26,58,107,0.55) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", right: "-4%", top: "50%", transform: "translateY(-50%)", fontFamily: Co, fontSize: "clamp(14rem, 30vw, 26rem)", fontWeight: 500, lineHeight: 1, color: "rgba(198,161,91,0.06)", pointerEvents: "none", userSelect: "none" }} aria-hidden="true">
            {logia.numero}
          </div>

          <div className="wrap logia-hero-wrap" style={{ position: "relative", paddingTop: "128px", paddingBottom: "72px" }}>
            {/* Ruta — escritorio: barra discreta arriba; móvil: solo "volver" */}
            <nav aria-label="Ruta" className="d-only" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginBottom: "48px" }}>
              {[{ l: t.common.home, h: "/" }, { l: t.common.granLogia, h: "/la-gran-logia" }, { l: t.logias.crumb, h: "/la-gran-logia/logias" }].map(c => (
                <span key={c.h} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Link href={c.h} style={{ fontFamily: R, color: "rgba(255,255,255,0.5)", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase" }}>{c.l}</Link>
                  <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
                </span>
              ))}
              <span style={{ fontFamily: R, color: gold, fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase" }}>No. {logia.numero}</span>
            </nav>
            <Link href="/la-gran-logia/logias" className="m-only" style={{ fontFamily: R, color: "rgba(255,255,255,0.6)", fontSize: "13px", fontWeight: 600, letterSpacing: "1px", marginBottom: "28px", textDecoration: "none" }}>
              {T.backAll}
            </Link>

            <div className="logia-hero">
              {/* Emblema */}
              <div className="logia-logo" style={{ width: "240px", height: "240px", borderRadius: "28px", backgroundColor: cream, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 24px 60px rgba(0,0,0,0.35)", overflow: "hidden" }}>
                {logia.foto
                  ? <img src={logia.foto} alt={`${t.logias.emblem} ${logia.nombre}`} style={{ width: "100%", height: "100%", objectFit: "contain", padding: "14px" }} />
                  : <span style={{ fontFamily: Co, color: goldDk, fontSize: "6rem", fontWeight: 600, lineHeight: 1 }}>{logia.numero}</span>}
              </div>

              {/* Texto */}
              <div>
                <span style={{ display: "block", fontFamily: R, color: gold, fontSize: "13px", fontWeight: 600, letterSpacing: "2px", marginBottom: "14px" }}>
                  {logia.prefijo}
                </span>
                <h1 style={{ fontFamily: Co, color: "#fff", fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)", fontWeight: 500, lineHeight: 1, letterSpacing: "-0.5px", marginBottom: "24px" }}>
                  &ldquo;{logia.nombre}&rdquo; <span style={{ color: gold, whiteSpace: "nowrap" }}>No. {logia.numero}</span>
                </h1>

                <p className="hero-msg" style={{ fontFamily: Co, color: "rgba(255,255,255,0.78)", fontSize: "clamp(1.25rem, 1.8vw, 1.55rem)", fontStyle: "italic", fontWeight: 500, lineHeight: 1.45, maxWidth: "620px" }}>
                  &ldquo;{mensaje}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── DATOS RÁPIDOS ── */}
        <section style={{ padding: "40px 0 0" }}>
          <div className="wrap">
            <div className="info-grid">
              {info.map(i => (
                <div key={i.label} style={{ backgroundColor: "#fff", border: `1px solid ${line}`, borderRadius: "16px", padding: "20px 22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                    <Icon d={i.icon} />
                    <span style={{ fontFamily: R, color: textMut, fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase" }}>{i.label}</span>
                  </div>
                  <div style={{ fontFamily: R, color: i.valor === PENDIENTE ? textMut : textPri, fontStyle: i.valor === PENDIENTE ? "italic" : "normal", fontSize: "17px", fontWeight: 700, lineHeight: 1.3 }}>
                    {i.valor}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HISTORIA + MENSAJE ── */}
        <section className="sec" style={{ paddingTop: "72px" }}>
          <div className="wrap">
            <div style={{ maxWidth: "860px" }}>
              <div>
                <Label>{T.historia.label}</Label>
                <h2 style={{ fontFamily: Co, color: textPri, fontSize: "clamp(2.2rem, 3.4vw, 3rem)", fontWeight: 500, lineHeight: 1.05, marginBottom: "20px" }}>
                  {T.historia.title}
                </h2>
                <p style={{ fontFamily: D, color: textSec, fontSize: "17px", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
                  {T.historia.p1(logia.nombre, logia.numero, logia.anio, logia.ciudad)}
                </p>
                <p style={{ fontFamily: D, color: textSec, fontSize: "17px", lineHeight: 1.85, textAlign: "justify" }}>
                  {T.historia.p2}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CUADRO DE OFICIALES ── */}
        <section className="sec" style={{ backgroundColor: "#fff", borderTop: `1px solid ${line}`, borderBottom: `1px solid ${line}` }}>
          <div className="wrap">
            <div style={{ marginBottom: "36px" }}>
              <Label>{T.cuadro.label}</Label>
              <h2 style={{ fontFamily: Co, color: textPri, fontSize: "clamp(2.2rem, 3.4vw, 3rem)", fontWeight: 500, lineHeight: 1.05 }}>
                {T.cuadro.title}
              </h2>
              {cuadroPendiente && (
                <p style={{ fontFamily: D, color: textMut, fontSize: "15px", marginTop: "10px" }}>
                  {T.cuadro.pending}
                </p>
              )}
            </div>

            <div className="ofi-grid">
              {cuadro.map((o, i) => {
                const pend = o.nombre === PENDIENTE;
                const vm = i === 0;
                return (
                  <div key={o.cargo} style={{
                    borderRadius: "14px", padding: "18px 20px",
                    backgroundColor: vm ? deep : canvas,
                    border: `1px solid ${vm ? deep : line}`,
                    display: "flex", alignItems: "center", gap: "14px",
                  }}>
                    <span style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: Co, fontSize: "1.1rem", fontWeight: 600, color: vm ? deep : goldDk, backgroundColor: vm ? gold : cream }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontFamily: R, color: vm ? gold : goldDk, fontSize: "12px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "3px" }}>
                        {cargoLocal(o.cargo)}
                      </div>
                      <div style={{ fontFamily: R, fontSize: "16px", fontWeight: 600, fontStyle: pend ? "italic" : "normal", color: vm ? (pend ? "rgba(255,255,255,0.5)" : "#fff") : (pend ? textMut : textPri) }}>
                        {o.nombre}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── VISÍTANOS ── */}
        <section className="sec">
          <div className="wrap">
            <div className="duo" style={{ alignItems: "start" }}>
              <div>
                <Label>{T.visit.label}</Label>
                <h2 style={{ fontFamily: Co, color: textPri, fontSize: "clamp(2.2rem, 3.4vw, 3rem)", fontWeight: 500, lineHeight: 1.05, marginBottom: "24px" }}>
                  {T.visit.title}
                </h2>
                <div style={{ backgroundColor: "#fff", border: `1px solid ${line}`, borderRadius: "16px", overflow: "hidden" }}>
                  {[
                    { label: T.info.direccion, valor: logia.direccion || PENDIENTE },
                    { label: T.info.ciudad,    valor: `${logia.ciudad}, ${T.state}` },
                    { label: T.info.sesiones,  valor: logia.sesiones || PENDIENTE },
                    { label: T.info.horario,   valor: logia.horarios || PENDIENTE },
                  ].map((r, i, arr) => (
                    <div key={r.label} style={{ display: "flex", gap: "16px", padding: "16px 20px", borderBottom: i < arr.length - 1 ? `1px solid ${line}` : "none" }}>
                      <span style={{ fontFamily: R, color: goldDk, fontSize: "12px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", minWidth: "92px", paddingTop: "3px" }}>{r.label}</span>
                      <span style={{ fontFamily: D, fontSize: "16px", color: r.valor === PENDIENTE ? textMut : textPri, fontStyle: r.valor === PENDIENTE ? "italic" : "normal" }}>{r.valor}</span>
                    </div>
                  ))}
                </div>
                {mapsUrl && (
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginTop: "16px", padding: "14px 22px", borderRadius: "14px", backgroundColor: deep, color: "#fff", fontFamily: R, fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
                    {T.visit.howTo} <span style={{ color: gold }}>→</span>
                  </a>
                )}
              </div>

              <div>
                <Label>{T.social.label}</Label>
                <h2 style={{ fontFamily: Co, color: textPri, fontSize: "clamp(2.2rem, 3.4vw, 3rem)", fontWeight: 500, lineHeight: 1.05, marginBottom: "24px" }}>
                  {T.social.title}
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    { name: "Facebook",  url: logia.facebook,  svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
                    { name: "Instagram", url: logia.instagram, svg: <><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" /></> },
                  ].map(s => {
                    const content = (
                      <>
                        <span style={{ width: "44px", height: "44px", borderRadius: "12px", backgroundColor: cream, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <Icon d={s.svg} />
                        </span>
                        <span style={{ flex: 1 }}>
                          <span style={{ display: "block", fontFamily: R, color: textPri, fontSize: "16px", fontWeight: 700 }}>{s.name}</span>
                          <span style={{ display: "block", fontFamily: D, color: textMut, fontSize: "14px", fontStyle: s.url ? "normal" : "italic" }}>{s.url ? T.social.visit : PENDIENTE}</span>
                        </span>
                        {s.url && <span className="bento-arrow-icon" style={{ color: deep, fontSize: "17px" }}>→</span>}
                      </>
                    );
                    const box = { display: "flex", alignItems: "center", gap: "14px", padding: "14px 18px", backgroundColor: "#fff", border: `1px solid ${line}`, borderRadius: "16px", textDecoration: "none" } as const;
                    return s.url
                      ? <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="logia-card" style={box}>{content}</a>
                      : <div key={s.name} style={{ ...box, opacity: 0.7 }}>{content}</div>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── NAVEGACIÓN ENTRE LOGIAS ── */}
        <section style={{ padding: "0 0 88px" }}>
          <div className="wrap">
            <div className="pager">
              {[{ l: anterior, dir: "prev" as const }, { l: siguiente, dir: "next" as const }].map(({ l, dir }) =>
                l ? (
                  <Link key={dir} href={`/la-gran-logia/logias/${l.numero}`} className="logia-card"
                    style={{ display: "flex", flexDirection: "column", alignItems: dir === "prev" ? "flex-start" : "flex-end", textAlign: dir === "prev" ? "left" : "right", gap: "6px", padding: "20px 22px", backgroundColor: "#fff", border: `1px solid ${line}`, borderRadius: "16px", textDecoration: "none" }}>
                    <span style={{ fontFamily: R, color: textMut, fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase" }}>
                      {dir === "prev" ? T.prev : T.next}
                    </span>
                    <span style={{ fontFamily: Co, color: textPri, fontSize: "1.5rem", fontWeight: 600, lineHeight: 1.1 }}>
                      No. {l.numero}<span className="pager-name"> · {l.nombre}</span>
                    </span>
                  </Link>
                ) : <div key={dir} />
              )}
            </div>
            <div style={{ textAlign: "center", marginTop: "28px" }}>
              <Link href="/la-gran-logia/logias" style={{ fontFamily: R, fontSize: "14px", fontWeight: 700, color: deep, borderBottom: `2px solid ${gold}`, paddingBottom: "4px", textDecoration: "none" }}>
                {T.viewAll}
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

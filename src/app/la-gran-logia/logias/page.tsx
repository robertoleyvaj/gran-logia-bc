"use client";

import { useMemo, useState } from "react";
import Link from "@/i18n/Link";
import { useT } from "@/i18n/LocaleProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { logias, ciudades } from "@/data/logias";

const R  = "var(--font-raleway), sans-serif";
const D  = "var(--font-dm-sans), system-ui, sans-serif";
const Co = "var(--font-cormorant), Georgia, 'Times New Roman', serif";

const deep    = "#061426";
const gold    = "#C6A15B";
const goldDk  = "#8a6d3b";
const cream   = "#F5F1E9";
const canvas  = "#f4f4f5";
const textPri = "#09090b";
const textMut = "#71717a";
const line    = "#e4e4e7";

const normalizar = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export default function LogiasJurisdiccion() {
  const t = useT();
  const L = t.logias;
  const [ciudad, setCiudad] = useState<string>("Todas");
  const [busqueda, setBusqueda] = useState("");

  const conteo = (c: string) => (c === "Todas" ? logias.length : logias.filter(l => l.ciudad === c).length);

  const filtradas = useMemo(() => {
    const q = normalizar(busqueda.trim());
    return [...logias]
      .sort((a, b) => a.numero - b.numero)
      .filter(l => ciudad === "Todas" || l.ciudad === ciudad)
      .filter(l => !q || normalizar(l.nombre).includes(q) || String(l.numero) === q.replace(/\D/g, "") || normalizar(l.ciudad).includes(q));
  }, [ciudad, busqueda]);

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: canvas }}>

        <PageHero
          crumbs={[{ label: t.common.home, href: "/" }, { label: t.common.granLogia, href: "/la-gran-logia" }, { label: L.crumb }]}
          label={L.hero.label}
          title={<>{L.hero.title1}<br />{L.hero.title2}</>}
          intro={L.hero.intro(logias.length)}
          img="/granlogiafraternidad.jpg"
          imgPos="center top"
          mobileImgPos="60% top"
        />

        {/* ── BUSCADOR + FILTROS ── */}
        <div className="sticky-bar" style={{ backgroundColor: "rgba(244,244,245,0.92)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: `1px solid ${line}` }}>
          <div className="wrap" style={{ paddingTop: "14px", paddingBottom: "14px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ position: "relative" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={textMut} strokeWidth="2" strokeLinecap="round" style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)" }}>
                <circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" />
              </svg>
              <input
                className="search-input"
                type="search"
                value={busqueda}
                onChange={e => setBusqueda(e.target.value)}
                placeholder={L.search}
                aria-label={L.searchAria}
                style={{ width: "100%", height: "50px", padding: "0 16px 0 46px", borderRadius: "14px", border: `1px solid ${line}`, backgroundColor: "#fff", fontFamily: D, fontSize: "16px", color: textPri, transition: "border-color .2s, box-shadow .2s" }}
              />
            </div>

            <div className="chips" role="tablist" aria-label={L.filterAria}>
              {["Todas", ...ciudades].map(c => {
                const etiqueta = c === "Todas" ? L.all : c;
                const on = ciudad === c;
                return (
                  <button key={c} role="tab" aria-selected={on} onClick={() => setCiudad(c)}
                    style={{
                      flexShrink: 0, display: "flex", alignItems: "center", gap: "8px",
                      padding: "9px 16px", borderRadius: "100px", cursor: "pointer",
                      border: `1px solid ${on ? deep : line}`,
                      backgroundColor: on ? deep : "#fff",
                      color: on ? "#fff" : textPri,
                      fontFamily: R, fontSize: "14px", fontWeight: 600, whiteSpace: "nowrap",
                      transition: "all .2s",
                    }}>
                    {etiqueta}
                    <span style={{ fontFamily: D, fontSize: "12px", fontWeight: 500, color: on ? gold : textMut }}>{conteo(c)}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── LISTA ── */}
        <section style={{ padding: "36px 0 96px" }}>
          <div className="wrap">
            <div style={{ fontFamily: D, color: textMut, fontSize: "15px", marginBottom: "18px" }}>
              {filtradas.length === logias.length
                ? L.showingAll(logias.length)
                : L.found(filtradas.length)}
            </div>

            <div className="logia-grid">
              {filtradas.map(l => (
                <Link key={l.numero} href={`/la-gran-logia/logias/${l.numero}`} className="logia-card"
                  style={{ display: "flex", alignItems: "center", gap: "18px", padding: "18px 20px", backgroundColor: "#fff", border: `1px solid ${line}`, borderRadius: "16px", textDecoration: "none" }}>

                  {/* Emblema */}
                  <div style={{ width: "72px", height: "72px", flexShrink: 0, borderRadius: "14px", backgroundColor: cream, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                    {l.foto
                      ? <img src={l.foto} alt={`${L.emblem} ${l.nombre}`} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "contain", padding: "6px" }} />
                      : <span style={{ fontFamily: Co, color: goldDk, fontSize: "2rem", fontWeight: 600, lineHeight: 1 }}>{l.numero}</span>}
                  </div>

                  {/* Datos */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                      <span style={{ fontFamily: R, color: goldDk, fontSize: "12px", fontWeight: 700, letterSpacing: "1px" }}>No. {l.numero}</span>
                      {l.anio === 1933 && (
                        <span style={{ fontFamily: R, color: deep, backgroundColor: cream, fontSize: "10px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", padding: "3px 8px", borderRadius: "100px" }}>{L.founder}</span>
                      )}
                    </div>
                    <div style={{ fontFamily: Co, color: textPri, fontSize: "1.45rem", fontWeight: 600, lineHeight: 1.1, marginBottom: "6px" }}>
                      {l.nombre}
                    </div>
                    <div style={{ fontFamily: D, color: textMut, fontSize: "14px" }}>
                      {l.ciudad} · {L.founded} {l.anio}
                    </div>
                  </div>

                  <span style={{ width: "38px", height: "38px", flexShrink: 0, borderRadius: "50%", border: `1px solid ${line}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span className="bento-arrow-icon" style={{ color: deep, fontSize: "16px" }}>→</span>
                  </span>
                </Link>
              ))}
            </div>

            {filtradas.length === 0 && (
              <div style={{ textAlign: "center", padding: "64px 20px", backgroundColor: "#fff", border: `1px solid ${line}`, borderRadius: "16px" }}>
                <div style={{ fontFamily: Co, color: textPri, fontSize: "1.8rem", marginBottom: "8px" }}>{L.empty.title}</div>
                <p style={{ fontFamily: D, color: textMut, fontSize: "16px", marginBottom: "20px" }}>{L.empty.text}</p>
                <button onClick={() => { setBusqueda(""); setCiudad("Todas"); }}
                  style={{ fontFamily: R, fontSize: "14px", fontWeight: 700, color: deep, background: "none", border: `1px solid ${deep}`, borderRadius: "12px", padding: "12px 22px", cursor: "pointer" }}>
                  {L.empty.btn}
                </button>
              </div>
            )}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

"use client";

import Link from "@/i18n/Link";
import { useT } from "@/i18n/LocaleProvider";
import { cargo } from "@/i18n/dictionaries";
import { useParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { oficiales, getOficialBySlug } from "@/data/gran-cuadro";

const R  = "var(--font-raleway), sans-serif";
const D  = "var(--font-dm-sans), system-ui, sans-serif";
const Co = "var(--font-cormorant), Georgia, 'Times New Roman', serif";

const navyDk  = "#060F1E";
const deep    = "#061426";
const gold    = "#C6A15B";
const canvas  = "#f4f4f5";
const textPri = "#09090b";
const textMut = "#71717a";
const line    = "#e4e4e7";

export default function PerfilOficial() {
  const t = useT();
  const P = t.perfil;
  const params = useParams();
  const oficial = getOficialBySlug(params.slug as string);

  if (!oficial) {
    return (
      <>
        <Navbar />
        <main style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 20px", backgroundColor: canvas, textAlign: "center" }}>
          <div>
            <h1 style={{ fontFamily: Co, color: textPri, fontSize: "2.6rem", marginBottom: "12px" }}>{P.notFound}</h1>
            <Link href="/la-gran-logia/gran-cuadro" style={{ fontFamily: R, color: "#8a6d3b", fontWeight: 700 }}>{P.backFull}</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const iniciales = oficial.nombre.split(" ").filter(Boolean).slice(0, 2).map(n => n[0]).join("").toUpperCase();

  // Navegación entre oficiales visibles (con foto)
  const visibles = oficiales.filter(o => !!o.foto);
  const idx = visibles.findIndex(o => o.slug === oficial.slug);
  const anterior  = idx > 0 ? visibles[idx - 1] : null;
  const siguiente = idx >= 0 && idx < visibles.length - 1 ? visibles[idx + 1] : null;

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: canvas }}>

        {/* ── PERFIL ── */}
        <section style={{ position: "relative", overflow: "hidden", backgroundColor: navyDk }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 55% 90% at 20% 50%, rgba(26,58,107,0.55) 0%, transparent 70%)" }} />

          <div className="wrap perfil-wrap" style={{ position: "relative", paddingTop: "128px", paddingBottom: "88px" }}>
            <nav aria-label="Ruta" className="d-only" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginBottom: "48px" }}>
              {[{ l: t.common.home, h: "/" }, { l: t.common.granLogia, h: "/la-gran-logia" }, { l: t.granCuadro.crumb, h: "/la-gran-logia/gran-cuadro" }].map(c => (
                <span key={c.h} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Link href={c.h} style={{ fontFamily: R, color: "rgba(255,255,255,0.5)", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase" }}>{c.l}</Link>
                  <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
                </span>
              ))}
              <span style={{ fontFamily: R, color: gold, fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase" }}>{cargo(t, oficial.cargo)}</span>
            </nav>
            <Link href="/la-gran-logia/gran-cuadro" className="m-only" style={{ fontFamily: R, color: "rgba(255,255,255,0.6)", fontSize: "13px", fontWeight: 600, letterSpacing: "1px", marginBottom: "28px", textDecoration: "none" }}>
              {P.back}
            </Link>

            <div className="perfil-grid">
              {/* Retrato */}
              <div className="perfil-foto" style={{ position: "relative", width: "100%", aspectRatio: "4 / 5", borderRadius: "22px", overflow: "hidden", backgroundColor: deep, boxShadow: "0 30px 80px rgba(0,0,0,0.45)" }}>
                {oficial.foto ? (
                  <img src={oficial.foto} alt={oficial.nombre} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
                ) : (
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "radial-gradient(ellipse 80% 60% at 50% 40%, #1A3A6B 0%, #060F1E 75%)" }}>
                    <span style={{ fontFamily: Co, color: "rgba(198,161,91,0.45)", fontSize: "5rem", fontWeight: 500 }}>{iniciales}</span>
                  </div>
                )}
                <div style={{ position: "absolute", inset: 0, borderRadius: "22px", boxShadow: "inset 0 0 0 1px rgba(198,161,91,0.35)" }} />
              </div>

              {/* Datos */}
              <div>
                <span className="perfil-cargo" style={{ display: "block", fontFamily: R, color: gold, fontSize: "14px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>
                  {cargo(t, oficial.cargo)}
                </span>
                <h1 className="perfil-nombre" style={{ fontFamily: Co, color: "#fff", fontSize: "clamp(2.6rem, 4.6vw, 4.2rem)", fontWeight: 500, lineHeight: 1.02, letterSpacing: "-0.5px", marginBottom: "18px" }}>
                  {oficial.nombre}
                </h1>
                {oficial.logia && (
                  <div className="perfil-logia" style={{ fontFamily: D, color: "rgba(255,255,255,0.6)", fontSize: "16px", marginBottom: "32px" }}>
                    {P.origin} <span style={{ color: "rgba(255,255,255,0.85)" }}>{oficial.logia}</span>
                  </div>
                )}

                {oficial.mensaje ? (() => {
                  const largo = oficial.mensaje.length > 320;
                  const yaTieneComillas = /[«“"]/.test(oficial.mensaje);
                  const parrafos = oficial.mensaje.split(/\n\s*\n/);
                  return (
                    <blockquote className={`perfil-msg ${largo ? "perfil-msg-largo" : ""}`} style={{ margin: 0, paddingLeft: "22px", borderLeft: `2px solid ${gold}` }}>
                      {oficial.mensajeTitulo && (
                        <span style={{ display: "block", fontFamily: R, color: gold, fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "14px" }}>
                          {oficial.mensajeTitulo}
                        </span>
                      )}
                      {parrafos.map((par, i) => (
                        <div key={i} style={{ marginBottom: i < parrafos.length - 1 ? "18px" : 0 }}>
                          {par.split("\n").map((ln, j) =>
                            ln.trim().startsWith("—") ? (
                              <cite key={j} style={{ display: "block", fontFamily: D, fontStyle: "normal", color: "rgba(255,255,255,0.55)", fontSize: "14px", marginTop: "8px" }}>{ln.trim()}</cite>
                            ) : (
                              <p key={j} style={{ fontFamily: Co, color: "rgba(255,255,255,0.9)", fontSize: largo ? "clamp(1.15rem, 1.5vw, 1.35rem)" : "clamp(1.3rem, 1.9vw, 1.65rem)", fontStyle: "italic", fontWeight: 500, lineHeight: 1.45, textAlign: "justify" }}>
                                {yaTieneComillas ? ln : <>&ldquo;{ln}&rdquo;</>}
                              </p>
                            )
                          )}
                        </div>
                      ))}
                    </blockquote>
                  );
                })() : (
                  <p style={{ fontFamily: D, color: "rgba(255,255,255,0.4)", fontSize: "15px", fontStyle: "italic" }}>
                    {P.msgSoon}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── NAVEGACIÓN ENTRE OFICIALES ── */}
        <section style={{ padding: "40px 0 88px" }}>
          <div className="wrap">
            <div className="pager">
              {[{ o: anterior, dir: "prev" as const }, { o: siguiente, dir: "next" as const }].map(({ o, dir }) =>
                o ? (
                  <Link key={dir} href={`/la-gran-logia/gran-cuadro/${o.slug}`} className="logia-card"
                    style={{ display: "flex", alignItems: "center", flexDirection: dir === "prev" ? "row" : "row-reverse", gap: "14px", padding: "14px 16px", backgroundColor: "#fff", border: `1px solid ${line}`, borderRadius: "16px", textDecoration: "none" }}>
                    <img src={o.foto} alt="" aria-hidden="true" style={{ width: "52px", height: "52px", borderRadius: "50%", objectFit: "cover", objectPosition: "center top", flexShrink: 0 }} />
                    <span style={{ display: "flex", flexDirection: "column", gap: "3px", textAlign: dir === "prev" ? "left" : "right", minWidth: 0 }}>
                      <span style={{ fontFamily: R, color: textMut, fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase" }}>
                        {dir === "prev" ? P.prev : P.next}
                      </span>
                      <span className="pager-name" style={{ fontFamily: Co, color: textPri, fontSize: "1.3rem", fontWeight: 600, lineHeight: 1.1 }}>{o.nombre}</span>
                    </span>
                  </Link>
                ) : <div key={dir} />
              )}
            </div>
            <div style={{ textAlign: "center", marginTop: "28px" }}>
              <Link href="/la-gran-logia/gran-cuadro" style={{ fontFamily: R, fontSize: "14px", fontWeight: 700, color: deep, borderBottom: `2px solid ${gold}`, paddingBottom: "4px", textDecoration: "none" }}>
                {P.viewAll}
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

"use client";

import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { useT } from "@/i18n/LocaleProvider";

const R  = "var(--font-raleway), sans-serif";
const D  = "var(--font-dm-sans), system-ui, sans-serif";
const Co = "var(--font-cormorant), Georgia, 'Times New Roman', serif";

const deep    = "#061426";
const gold    = "#C6A15B";
const cream   = "#F5F1E9";
const canvas  = "#f4f4f5";
const textPri = "#09090b";
const textSec = "#3f3f46";
const textMut = "#71717a";
const line    = "#e4e4e7";



const cifraNums = ["1933", "45", "7", "1,000+"];

const Label = ({ children }: { children: ReactNode }) => (
  <span style={{ display: "block", fontFamily: R, color: gold, fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px" }}>{children}</span>
);

const H2 = ({ children, light }: { children: ReactNode; light?: boolean }) => (
  <h2 style={{ fontFamily: Co, color: light ? "#fff" : textPri, fontSize: "clamp(2rem, 3.2vw, 2.8rem)", fontWeight: 500, lineHeight: 1.08, marginBottom: "20px" }}>{children}</h2>
);

const P = ({ children, light, last }: { children: ReactNode; light?: boolean; last?: boolean }) => (
  <p style={{ fontFamily: D, color: light ? "rgba(255,255,255,0.65)" : textSec, fontSize: "17px", lineHeight: 1.8, textAlign: "justify", marginBottom: last ? 0 : "16px" }}>{children}</p>
);

export default function MisionVision() {
  const t = useT();
  const m = t.mision;
  const cifras = cifraNums.map((numero, i) => ({ numero, label: m.cifras[i] }));
  const valores = m.valores.items.map(v => ({ palabra: v.palabra, descripcion: v.desc }));
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: canvas }}>

        <PageHero
          crumbs={[{ label: t.common.home, href: "/" }, { label: t.common.granLogia, href: "/la-gran-logia" }, { label: m.hero.crumb }]}
          label={m.hero.label}
          title={<>{m.hero.title1}<br />{m.hero.title2}</>}
          intro={m.hero.intro}
          img="/gran-maestro-hablando.jpg"
          imgPos="center 30%"
          mobileImgPos="18% 30%"
        />

        {/* ── MISIÓN ── */}
        <section className="sec">
          <div className="wrap">
            <div className="duo">
              <div>
                <Label>{m.mision.label}</Label>
                <H2>{m.mision.title}</H2>
                <P>{m.mision.p1}</P>
                <P last>{m.mision.p2}</P>
              </div>

              <div className="quote-card" style={{ backgroundColor: deep, borderRadius: "20px", padding: "48px 44px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 80% at 100% 100%, rgba(198,161,91,0.14) 0%, transparent 60%)" }} />
                <div style={{ position: "relative" }}>
                  <span aria-hidden="true" style={{ display: "block", fontFamily: Co, color: gold, fontSize: "4.5rem", lineHeight: 0.6, marginBottom: "14px" }}>&ldquo;</span>
                  <p className="quote-text" style={{ fontFamily: Co, color: "#fff", fontSize: "clamp(1.6rem, 2.4vw, 2.1rem)", fontStyle: "italic", fontWeight: 500, lineHeight: 1.35 }}>
                    {m.mision.quote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VISIÓN ── */}
        <section className="sec" style={{ backgroundColor: "#fff", borderTop: `1px solid ${line}`, borderBottom: `1px solid ${line}` }}>
          <div className="wrap">
            <div className="duo">
              <div className="cifras-grid m-last">
                {cifras.map(c => (
                  <div key={c.label} style={{ backgroundColor: canvas, border: `1px solid ${line}`, borderRadius: "16px", padding: "28px 20px", textAlign: "center" }}>
                    <div style={{ fontFamily: Co, color: deep, fontSize: "clamp(2.4rem, 3.6vw, 3.2rem)", fontWeight: 600, lineHeight: 1 }}>{c.numero}</div>
                    <div style={{ fontFamily: R, color: "#8a6d3b", fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", marginTop: "10px" }}>{c.label}</div>
                  </div>
                ))}
              </div>

              <div>
                <Label>{m.vision.label}</Label>
                <H2>{m.vision.title}</H2>
                <P>{m.vision.p1}</P>
                <P last>{m.vision.p2}</P>
              </div>
            </div>
          </div>
        </section>

        {/* ── VALORES ── */}
        <section className="sec">
          <div className="wrap">
            <div style={{ maxWidth: "620px", marginBottom: "36px" }}>
              <Label>{m.valores.label}</Label>
              <H2>{m.valores.title}</H2>
            </div>

            <div className="val-grid">
              {valores.map((v, i) => (
                <div key={v.palabra} style={{ backgroundColor: "#fff", border: `1px solid ${line}`, borderRadius: "18px", padding: "36px 32px" }}>
                  <span style={{ display: "block", fontFamily: Co, color: gold, fontSize: "2.6rem", fontWeight: 500, lineHeight: 1, marginBottom: "18px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 style={{ fontFamily: Co, color: textPri, fontSize: "2.2rem", fontWeight: 600, lineHeight: 1, marginBottom: "14px" }}>
                    {v.palabra}
                  </h3>
                  <p style={{ fontFamily: D, color: textMut, fontSize: "16px", lineHeight: 1.75, textAlign: "justify" }}>
                    {v.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRABAJO INTERNO ── */}
        <section className="split" style={{ backgroundColor: "#fff" }}>
          <div className="split-txt">
            <Label>{m.trabajo.label}</Label>
            <H2>{m.trabajo.title}</H2>
            <P last>{m.trabajo.text}</P>
          </div>
          <div className="split-img m-first">
            <img src="/informes.jpg" alt={m.trabajo.alt} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
          </div>
        </section>

        {/* ── ESTUDIO ── */}
        <section className="split" style={{ backgroundColor: cream }}>
          <div className="split-img">
            <img src="/lectura.jpg" alt={m.estudio.alt} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
          </div>
          <div className="split-txt">
            <Label>{m.estudio.label}</Label>
            <H2>{m.estudio.title}</H2>
            <P last>{m.estudio.text}</P>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

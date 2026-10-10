"use client";

import type { ReactNode } from "react";
import Link from "@/i18n/Link";
import { useT } from "@/i18n/LocaleProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";

const R  = "var(--font-raleway), sans-serif";
const Co = "var(--font-cormorant), Georgia, 'Times New Roman', serif";
const D  = "var(--font-dm-sans), system-ui, sans-serif";

const deep    = "#061426";
const navyDk  = "#060F1E";
const gold    = "#C6A15B";
const cream   = "#F5F1E9";
const canvas  = "#f4f4f5";
const textPri = "#09090b";
const textSec = "#3f3f46";
const textMut = "#71717a";
const line    = "#e4e4e7";

const cuerpoHrefs = ["/masoneria/rito-escoces", "/masoneria/rito-de-york", "/masoneria/shriners", "/masoneria/ajef", "/masoneria/widows-sons"];

const Label = ({ children }: { children: ReactNode }) => (
  <span style={{ display: "block", fontFamily: R, color: gold, fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>
    {children}
  </span>
);

export default function MasoneriaPage() {
  const t = useT();
  const m = t.masoneria;
  const cuerpos = m.cuerpos.list.map((c, i) => ({ ...c, href: cuerpoHrefs[i] }));
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: canvas }}>

        <PageHero
          crumbs={[{ label: t.common.home, href: "/" }, { label: t.common.masoneria }]}
          label={m.hero.label}
          title={m.hero.title}
          intro={m.hero.intro}
          img="/masoneria-hero.jpg"
          imgPos="center 28%"
          mobileImgPos="49% center"
        />

        {/* ── CUERPOS APENDANTES ── */}
        <section className="sec">
          <div className="wrap">
            <div style={{ maxWidth: "620px", marginBottom: "56px" }}>
              <Label>{m.cuerpos.label}</Label>
              <h2 style={{ fontFamily: Co, color: textPri, fontSize: "clamp(2.4rem, 4vw, 3.4rem)", fontWeight: 500, lineHeight: 1.05, letterSpacing: "-0.5px", marginBottom: "18px" }}>
                {m.cuerpos.title}
              </h2>
              <p style={{ fontFamily: D, color: textMut, fontSize: "17px", lineHeight: 1.75, textAlign: "justify" }}>
                {m.cuerpos.desc}
              </p>
            </div>

            <div style={{ backgroundColor: "#fff", borderRadius: "16px", overflow: "hidden", border: `1px solid ${line}` }}>
              {cuerpos.map((c, i) => (
                <Link key={c.href} href={c.href} className="row-link" style={{ display: "block", textDecoration: "none", padding: "36px 40px", borderBottom: i < cuerpos.length - 1 ? `1px solid ${line}` : "none" }}>
                  <div className="row-item">
                    <span style={{ fontFamily: Co, color: gold, fontSize: "3rem", fontWeight: 500, lineHeight: 1 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 style={{ fontFamily: Co, color: textPri, fontSize: "clamp(1.7rem, 2.4vw, 2.1rem)", fontWeight: 600, lineHeight: 1.1, marginBottom: "6px" }}>
                        {c.titulo}
                      </h3>
                      <div style={{ fontFamily: D, color: textMut, fontSize: "14px", fontStyle: "italic", marginBottom: "12px" }}>
                        {c.subtitulo}
                      </div>
                      <p style={{ fontFamily: D, color: textSec, fontSize: "16px", lineHeight: 1.7, maxWidth: "680px", textAlign: "justify" }}>
                        {c.desc}
                      </p>
                    </div>

                    <div className="row-meta" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "14px", textAlign: "right" }}>
                      <span style={{ fontFamily: R, color: "#8a6d3b", fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", backgroundColor: cream, padding: "7px 12px", borderRadius: "100px" }}>
                        {c.grados}
                      </span>
                      <span style={{ width: "44px", height: "44px", borderRadius: "50%", border: "1px solid rgba(6,20,38,0.18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span className="bento-arrow-icon" style={{ color: deep, fontSize: "17px" }}>→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAMILIA MASÓNICA ── */}
        <section className="split" style={{ backgroundColor: cream }}>
          <div className="split-img">
            <img src="/masoneria-patriotica.jpg" alt={m.familia.alt} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "55% 40%" }} />
          </div>
          <div className="split-txt">
            <Label>{m.familia.label}</Label>
            <h2 style={{ fontFamily: Co, color: deep, fontSize: "clamp(2.2rem, 3.4vw, 3rem)", fontWeight: 500, lineHeight: 1.08, marginBottom: "22px" }}>
              {m.familia.title}
            </h2>
            <p style={{ fontFamily: D, color: textSec, fontSize: "17px", lineHeight: 1.8, textAlign: "justify" }}>
              {m.familia.text}
            </p>
          </div>
        </section>

        {/* ── CMI ── */}
        <section className="split" style={{ backgroundColor: deep }}>
          <div className="split-txt">
            <Label>{m.cmi.label}</Label>
            <h2 style={{ fontFamily: Co, color: "#fff", fontSize: "clamp(2.2rem, 3.4vw, 3rem)", fontWeight: 500, lineHeight: 1.08, marginBottom: "22px" }}>
              {m.cmi.title}
            </h2>
            <p style={{ fontFamily: D, color: "rgba(255,255,255,0.65)", fontSize: "17px", lineHeight: 1.8, textAlign: "justify" }}>
              {m.cmi.text}
            </p>
          </div>
          <div className="split-img m-first">
            <img src="/cmi-internacional.jpg" alt={m.cmi.alt} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }} />
          </div>
        </section>

        {/* ── CITA FINAL ── */}
        <section className="sec" style={{ backgroundColor: navyDk }}>
          <div className="wrap">
            <div className="duo">
              <blockquote style={{ margin: 0 }}>
                <span aria-hidden="true" style={{ display: "block", fontFamily: Co, color: gold, fontSize: "5rem", lineHeight: 0.6, marginBottom: "12px" }}>&ldquo;</span>
                <p style={{ fontFamily: Co, color: "#fff", fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)", fontStyle: "italic", fontWeight: 500, lineHeight: 1.3 }}>
                  {m.quote}
                </p>
              </blockquote>
              <p style={{ fontFamily: D, color: "rgba(255,255,255,0.6)", fontSize: "17px", lineHeight: 1.85, textAlign: "justify" }}>
                {m.closing}
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

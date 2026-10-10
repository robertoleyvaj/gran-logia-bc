import type { ReactNode, CSSProperties } from "react";
import Link from "@/i18n/Link";

const R  = "var(--font-raleway), sans-serif";
const D  = "var(--font-dm-sans), system-ui, sans-serif";
const Co = "var(--font-cormorant), Georgia, 'Times New Roman', serif";
const gold = "#C6A15B";

type Crumb = { label: string; href?: string };

/**
 * Encabezado estándar para páginas secundarias.
 * Desktop: foto a la derecha con degradado lateral, texto a la izquierda.
 * Móvil: foto completa con el texto abajo sobre degradado (ver .page-hero en globals.css).
 */
export default function PageHero({
  crumbs,
  label,
  title,
  intro,
  img,
  imgPos = "center center",
  mobileImgPos,
}: {
  crumbs: Crumb[];
  label?: string;
  title: ReactNode;
  intro?: ReactNode;
  img?: string;
  imgPos?: string;
  mobileImgPos?: string;
}) {
  return (
    <section className={`page-hero ${img ? "" : "page-hero-plain"}`} style={{ position: "relative", overflow: "hidden", minHeight: "560px", display: "flex", alignItems: "center", backgroundColor: "#060F1E" }}>
      {img && (
        <img src={img} alt="" aria-hidden="true" className="hero-img page-hero-img"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: imgPos, ...({ "--m-pos": mobileImgPos ?? imgPos } as CSSProperties) }} />
      )}
      {img ? (
        <div className="page-hero-grad" style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #060F1E 22%, rgba(6,15,30,0.85) 45%, rgba(6,15,30,0.4) 72%, rgba(6,15,30,0.15) 100%)" }} />
      ) : (
        <>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 90% at 20% 60%, rgba(26,58,107,0.55) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 90% 20%, rgba(198,161,91,0.10) 0%, transparent 70%)" }} />
          <img src="/logo.png" alt="" aria-hidden="true" className="page-hero-mark" style={{ position: "absolute", right: "6%", top: "50%", transform: "translateY(-40%)", width: "380px", height: "380px", objectFit: "contain", opacity: 0.06, filter: "grayscale(1) brightness(2)", pointerEvents: "none" }} />
        </>
      )}

      <div className="page-hero-inner" style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "1400px", margin: "0 auto", padding: "140px 40px 80px" }}>
        <nav aria-label="Ruta" className="hero-label" style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "8px", marginBottom: "36px" }}>
          {crumbs.map((c, i) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {c.href
                ? <Link href={c.href} style={{ fontFamily: R, color: "rgba(255,255,255,0.5)", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase" }}>{c.label}</Link>
                : <span style={{ fontFamily: R, color: gold, fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase" }}>{c.label}</span>}
              {i < crumbs.length - 1 && <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>}
            </span>
          ))}
        </nav>

        <div style={{ maxWidth: "640px" }}>
          {label && (
            <span className="hero-label" style={{ display: "block", fontFamily: R, color: gold, fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "18px" }}>
              {label}
            </span>
          )}
          <h1 className="hero-h1 page-hero-title" style={{ fontFamily: Co, color: "#fff", fontSize: "clamp(3rem, 6vw, 5.2rem)", fontWeight: 500, lineHeight: 1, letterSpacing: "-1px", marginBottom: "24px" }}>
            {title}
          </h1>
          {intro && (
            <p className="hero-sub page-hero-intro" style={{ fontFamily: D, color: "rgba(255,255,255,0.65)", fontSize: "18px", lineHeight: 1.7, textAlign: "justify", maxWidth: "540px" }}>
              {intro}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

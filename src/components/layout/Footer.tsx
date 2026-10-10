"use client";

import Link from "@/i18n/Link";
import { useT } from "@/i18n/LocaleProvider";

const R  = "var(--font-raleway), sans-serif";
const D  = "var(--font-dm-sans), system-ui, sans-serif";
const Co = "var(--font-cormorant), Georgia, serif";

const navyDk = "#060F1E";
const gold   = "#C6A15B";

const FB_URL = process.env.NEXT_PUBLIC_FB_PAGE_URL || "https://www.facebook.com/masonesbc";
const DIRECCION = "Calle Francisco Goitia 9927-3A, Zona Río, Tijuana, B.C. C.P. 22000";
const CORREO = "masonesdebajacalifornia@gmail.com";

// Solo páginas que existen (los textos vienen del diccionario)
const hrefsGranLogia = ["/la-gran-logia/gran-cuadro", "/la-gran-logia/mision", "/la-gran-logia/logias", "/noticias"];
const hrefsMasoneria = ["/masoneria", "/masoneria/rito-escoces", "/masoneria/rito-de-york", "/masoneria/shriners", "/masoneria/ajef", "/masoneria/widows-sons"];

// Redes activas (agrega Instagram / YouTube aquí cuando existan)
const redes = [
  { name: "Facebook", href: FB_URL, svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
];

export default function Footer() {
  const t = useT();
  const anio = new Date().getFullYear();
  const cols = [
    { titulo: t.footer.colGranLogia, links: hrefsGranLogia.map((href, i) => ({ href, label: t.footer.linksGranLogia[i] })) },
    { titulo: t.footer.colMasoneria, links: hrefsMasoneria.map((href, i) => ({ href, label: t.footer.linksMasoneria[i] })) },
  ];

  return (
    <footer style={{ backgroundColor: navyDk }}>
      <div className="wrap footer-main" style={{ paddingTop: "72px", paddingBottom: "56px" }}>
        <div className="footer-grid">

          {/* Marca + contacto */}
          <div className="footer-brand">
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "28px", textDecoration: "none" }}>
              <img src="/logo.png" alt="Gran Logia BC" width={58} height={58} />
              <div>
                <div style={{ fontFamily: Co, color: "#fff", fontSize: "1.45rem", fontWeight: 600, lineHeight: 1.1 }}>{t.nav.titleTop}</div>
                <div style={{ fontFamily: R, color: gold, fontSize: "11px", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", marginTop: "4px" }}>&ldquo;{t.nav.titleSub}&rdquo;</div>
                <div style={{ fontFamily: R, color: "rgba(255,255,255,0.4)", fontSize: "10px", letterSpacing: "1.5px", textTransform: "uppercase", marginTop: "3px" }}>{t.footer.org}</div>
              </div>
            </Link>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
              {[
                { key: "dir",  text: DIRECCION, href: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Calle Francisco Goitia 9927-3A, Zona Río, Tijuana, Baja California, 22000"), icon: <><path d="M12 22s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" /><circle cx="12" cy="10" r="2.5" /></> },
                { key: "mail", text: CORREO,    href: `mailto:${CORREO}`, icon: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 6l-10 7L2 6" /></> },
              ].map(it => (
                <a key={it.key} href={it.href} target={it.key === "dir" ? "_blank" : undefined} rel={it.key === "dir" ? "noopener noreferrer" : undefined}
                  className="footer-link" style={{ display: "flex", gap: "12px", textDecoration: "none" }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "3px" }}>{it.icon}</svg>
                  <span style={{ fontFamily: D, fontSize: "15px", lineHeight: 1.5, wordBreak: "break-word" }}>{it.text}</span>
                </a>
              ))}
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {redes.map(r => (
                <a key={r.name} href={r.href} target="_blank" rel="noopener noreferrer" aria-label={r.name} className="footer-social"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "11px 18px", borderRadius: "12px", border: "1px solid rgba(198,161,91,0.35)", backgroundColor: "rgba(198,161,91,0.08)", color: "#fff", fontFamily: R, fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{r.svg}</svg>
                  {t.footer.follow} {r.name}
                </a>
              ))}
            </div>
          </div>

          {/* Columnas de enlaces */}
          {cols.map(c => (
            <nav key={c.titulo} aria-label={c.titulo}>
              <h4 style={{ fontFamily: R, color: gold, fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "18px" }}>
                {c.titulo}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {c.links.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="footer-link" style={{ fontFamily: D, fontSize: "15px", textDecoration: "none" }}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Portal de miembros */}
          <div className="footer-portal">
            <h4 style={{ fontFamily: R, color: gold, fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "18px" }}>
              {t.footer.members}
            </h4>
            <p style={{ fontFamily: D, color: "rgba(255,255,255,0.55)", fontSize: "15px", lineHeight: 1.6, marginBottom: "18px" }}>
              {t.footer.membersText}
            </p>
            <Link href="/miembros" className="nav-cta"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 18px", borderRadius: "12px", backgroundColor: "#B08D57", color: navyDk, fontFamily: R, fontSize: "12px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", textDecoration: "none" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
              {t.nav.portal}
            </Link>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="wrap" style={{ paddingTop: "20px", paddingBottom: "24px" }}>
          <p style={{ fontFamily: D, color: "rgba(255,255,255,0.4)", fontSize: "13px", textAlign: "center" }}>
            © {anio} {t.footer.fullName}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

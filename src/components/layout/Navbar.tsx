"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "@/i18n/Link";
import { useLocale, useT } from "@/i18n/LocaleProvider";
import { locales, localizeHref, splitLocale } from "@/i18n/config";

const R  = "var(--font-raleway), sans-serif";
const D  = "var(--font-dm-sans), sans-serif";
const Co = "var(--font-cormorant), Georgia, serif";

const gold   = "#C6A15B";
const navy   = "#0B2447";
const navyDk = "#060F1E";

// Enlaces del menú (los textos vienen del diccionario de cada idioma)
const glHrefs = ["/la-gran-logia/gran-cuadro", "/la-gran-logia/historia", "/la-gran-logia/mision", "/la-gran-logia/logias"];
const msHrefs = ["/masoneria/rito-escoces", "/masoneria/rito-de-york", "/masoneria/shriners", "/masoneria/ajef", "/masoneria/widows-sons"];

// Redes activas. Para agregar Instagram o YouTube, añade su entrada aquí con el enlace real.
const socials = [
  { name: "Facebook", href: process.env.NEXT_PUBLIC_FB_PAGE_URL || "https://www.facebook.com/masonesbc", svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
];

// Rutas cuyo encabezado es oscuro: ahí la barra arranca transparente sobre la foto
const DARK_HERO = [/^\/$/, /^\/masoneria(\/.*)?$/, /^\/la-gran-logia\/logias(\/.*)?$/, /^\/la-gran-logia\/gran-cuadro(\/.*)?$/, /^\/la-gran-logia\/mision$/, /^\/noticias$/];

/* Selector de idioma: recarga la misma página en el idioma elegido */
function LangSwitch({ path, current, dark, label, big = false }: { path: string; current: string; dark: boolean; label: string; big?: boolean }) {
  return (
    <div role="group" aria-label={label} style={{ display: "inline-flex", gap: "2px", padding: "3px", borderRadius: "10px", border: `1px solid ${dark ? "rgba(255,255,255,0.18)" : "rgba(11,36,71,0.14)"}` }}>
      {locales.map(l => {
        const on = l === current;
        return (
          <a key={l} href={localizeHref(path, l)} hrefLang={l} lang={l} aria-current={on ? "true" : undefined}
            style={{
              padding: big ? "10px 18px" : "5px 9px", borderRadius: "7px",
              fontFamily: R, fontSize: big ? "13px" : "11px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase",
              color: on ? navyDk : dark ? "rgba(255,255,255,0.75)" : "rgba(11,36,71,0.65)",
              backgroundColor: on ? gold : "transparent",
              transition: "background-color .2s, color .2s",
            }}>
            {l}
          </a>
        );
      })}
    </div>
  );
}

export default function Navbar() {
  const t = useT();
  const locale = useLocale();
  const pathname = splitLocale(usePathname() || "/").path;   // ruta sin /en o /pt

  const menus = [
    { key: "gl", label: t.nav.granLogia, href: "/la-gran-logia", items: glHrefs.map((href, i) => ({ href, ...t.nav.granLogiaItems[i] })) },
    { key: "ms", label: t.nav.masoneria, href: "/masoneria",     items: msHrefs.map((href, i) => ({ href, ...t.nav.masoneriaItems[i] })) },
  ];
  const navItems = [
    { label: t.nav.noticias, href: "/noticias" },
    { label: t.nav.contacto, href: "/contacto" },
  ];
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (!menuOpen) setMobileGroup(null);
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => { setMenuOpen(false); setOpenDrop(null); }, [pathname]);

  const darkHero    = DARK_HERO.some(r => r.test(pathname));
  const transparent = darkHero && !scrolled && !menuOpen;
  const onDark      = transparent || menuOpen;

  const fg      = onDark ? "#fff" : navy;
  const fgSoft  = onDark ? "rgba(255,255,255,0.75)" : "rgba(11,36,71,0.7)";
  const fgFaint = onDark ? "rgba(255,255,255,0.55)" : "#6B7280";

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  const openMenu  = (k: string) => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpenDrop(k); };
  const closeMenu = () => { closeTimer.current = setTimeout(() => setOpenDrop(null), 200); };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: menuOpen ? navyDk : transparent ? "transparent" : "rgba(255,255,255,0.9)",
        backdropFilter: transparent || menuOpen ? "none" : "saturate(180%) blur(16px)",
        WebkitBackdropFilter: transparent || menuOpen ? "none" : "saturate(180%) blur(16px)",
        borderBottom: transparent ? "1px solid rgba(255,255,255,0.08)" : menuOpen ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(11,36,71,0.08)",
        boxShadow: !transparent && !menuOpen && scrolled ? "0 6px 30px rgba(6,15,30,0.06)" : "none",
        transition: "background-color .35s ease, border-color .35s ease, box-shadow .35s ease",
      }}
    >
      <div className="nav-inner flex items-center justify-between" style={{ height: "80px", maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>

        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0 gap-3" onClick={() => setMenuOpen(false)}>
          <img src="/logo.png" alt="Gran Logia BC" width={54} height={54} className="nav-logo" style={{ objectFit: "contain" }} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
            <span className="nav-title" style={{ fontFamily: R, fontWeight: 700, fontSize: "13px", letterSpacing: "0.8px", color: fg, textTransform: "uppercase", transition: "color .35s" }}>{t.nav.titleTop}</span>
            <span className="nav-sub" style={{ fontFamily: R, fontWeight: 500, fontSize: "11px", letterSpacing: "2.5px", color: onDark ? gold : "#8a6d3b", textTransform: "uppercase", transition: "color .35s" }}>{t.nav.titleSub}</span>
          </div>
        </Link>

        {/* Enlaces — escritorio */}
        <div className="hidden lg:flex items-center" style={{ gap: "36px" }}>
          {menus.map(m => {
            const open = openDrop === m.key;
            const active = isActive(m.href);
            return (
              <div key={m.key} style={{ position: "relative" }} onMouseEnter={() => openMenu(m.key)} onMouseLeave={closeMenu}>
                <Link href={m.href} className={`nav-link ${active || open ? "is-on" : ""}`}
                  style={{ fontFamily: R, fontSize: "13px", fontWeight: 600, letterSpacing: "1.2px", textTransform: "uppercase", color: open ? gold : fgSoft, display: "flex", alignItems: "center", gap: "6px", padding: "10px 0", transition: "color .2s" }}>
                  {m.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition: "transform .25s", transform: open ? "rotate(180deg)" : "none" }}>
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>

                {open && (
                  <div className="nav-drop" style={{ position: "absolute", top: "calc(100% + 14px)", left: "50%", transform: "translateX(-50%)", width: "340px", padding: "10px", backgroundColor: "#fff", borderRadius: "18px", boxShadow: "0 24px 60px rgba(6,15,30,0.18), 0 0 0 1px rgba(6,15,30,0.05)", zIndex: 100 }}>
                    {m.items.map(it => (
                      <Link key={it.href} href={it.href} className="nav-drop-item"
                        style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 14px", borderRadius: "12px" }}>
                        <span style={{ flex: 1 }}>
                          <span style={{ display: "block", fontFamily: Co, color: navyDk, fontSize: "1.3rem", fontWeight: 600, lineHeight: 1.15 }}>{it.label}</span>
                          <span style={{ display: "block", fontFamily: D, color: "#71717a", fontSize: "13px", marginTop: "2px" }}>{it.desc}</span>
                        </span>
                        <span className="bento-arrow-icon" style={{ color: gold, fontSize: "16px" }}>→</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {navItems.map(item => (
            <Link key={item.href} href={item.href} className={`nav-link ${isActive(item.href) ? "is-on" : ""}`}
              style={{ fontFamily: R, fontSize: "13px", fontWeight: 600, letterSpacing: "1.2px", textTransform: "uppercase", color: fgSoft, padding: "10px 0", transition: "color .2s" }}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* Derecha — escritorio */}
        <div className="hidden lg:flex items-center" style={{ gap: "18px" }}>
          <LangSwitch path={pathname} current={locale} dark={onDark} label={t.common.language} />
          {socials.map(({ name, href, svg }) => (
            <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className="nav-social" style={{ color: fgFaint, transition: "color .2s" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{svg}</svg>
            </a>
          ))}
          <span style={{ width: "1px", height: "22px", backgroundColor: onDark ? "rgba(255,255,255,0.18)" : "rgba(11,36,71,0.12)" }} />
          <Link href="/miembros" className="nav-cta"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: R, fontSize: "12px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: navyDk, backgroundColor: gold, padding: "12px 20px", borderRadius: "12px" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
            {t.nav.portal}
          </Link>
        </div>

        {/* Hamburguesa — móvil */}
        <button className="lg:hidden flex flex-col items-center justify-center gap-[6px]"
          style={{ width: "44px", height: "44px" }}
          onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu} aria-expanded={menuOpen}>
          {[0, 1, 2].map(i => (
            <span key={i} className="block"
              style={{
                width: "24px", height: "2px", borderRadius: "2px",
                backgroundColor: fg,
                transition: "transform .3s, opacity .3s, background-color .35s",
                transform: menuOpen ? (i === 0 ? "translateY(8px) rotate(45deg)" : i === 2 ? "translateY(-8px) rotate(-45deg)" : "none") : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
          ))}
        </button>
      </div>

      {/* Menú móvil — pantalla completa */}
      {menuOpen && (
        <div className="lg:hidden" style={{ position: "fixed", top: "64px", left: 0, right: 0, bottom: 0, backgroundColor: navyDk, overflowY: "auto", animation: "heroFadeIn .25s ease both" }}>
          <div style={{ padding: "12px 24px 40px", minHeight: "100%", display: "flex", flexDirection: "column" }}>
            {menus.map(group => (
              <div key={group.key} style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <button onClick={() => setMobileGroup(mobileGroup === group.key ? null : group.key)}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 0", background: "none", border: "none", cursor: "pointer" }}>
                  <span style={{ fontFamily: Co, fontSize: "2rem", fontWeight: 500, color: mobileGroup === group.key ? gold : "#fff", lineHeight: 1 }}>{group.label}</span>
                  <span style={{ color: gold, fontSize: "24px", fontWeight: 300, transition: "transform .25s", transform: mobileGroup === group.key ? "rotate(45deg)" : "none" }}>+</span>
                </button>
                {mobileGroup === group.key && (
                  <div style={{ paddingBottom: "16px", animation: "heroFadeIn .25s ease both" }}>
                    {group.items.map(item => (
                      <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
                        style={{ display: "block", padding: "12px 0 12px 16px", borderLeft: "1px solid rgba(198,161,91,0.35)" }}>
                        <div style={{ fontFamily: R, color: "#fff", fontSize: "16px", fontWeight: 600, marginBottom: "2px" }}>{item.label}</div>
                        <div style={{ fontFamily: D, color: "rgba(255,255,255,0.45)", fontSize: "14px" }}>{item.desc}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {navItems.map(item => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
                style={{ display: "block", padding: "22px 0", borderBottom: "1px solid rgba(255,255,255,0.08)", fontFamily: Co, fontSize: "2rem", fontWeight: 500, color: "#fff", lineHeight: 1 }}>
                {item.label}
              </Link>
            ))}

            <div style={{ marginTop: "auto", paddingTop: "40px" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                <LangSwitch path={pathname} current={locale} dark label={t.common.language} big />
              </div>
              <Link href="/miembros" onClick={() => setMenuOpen(false)}
                style={{ display: "block", textAlign: "center", padding: "17px", borderRadius: "14px", fontFamily: R, fontSize: "14px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", backgroundColor: gold, color: navyDk }}>
                {t.nav.portal}
              </Link>
              <div style={{ display: "flex", justifyContent: "center", gap: "28px", marginTop: "28px" }}>
                {socials.map(s => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} style={{ color: "rgba(255,255,255,0.6)" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{s.svg}</svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

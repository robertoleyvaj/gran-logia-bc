"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const navItems = [
  { label: "Noticias", href: "/noticias" },
  { label: "Contacto", href: "/contacto" },
];

const granLogiaDropdown = [
  { label: "Gran Cuadro", href: "/la-gran-logia/gran-cuadro", desc: "Oficiales en funciones" },
  { label: "Historia", href: "/la-gran-logia/historia", desc: "Desde 1933" },
  { label: "Misión y Visión", href: "/la-gran-logia/mision", desc: "Propósito institucional" },
  { label: "Logias de la Jurisdicción", href: "/la-gran-logia/logias", desc: "45 logias en Baja California" },
];

const masoneriaDropdown = [
  { label: "Rito Escocés", href: "/masoneria/rito-escoces", desc: "Ancient & Accepted Scottish Rite" },
  { label: "Rito de York", href: "/masoneria/rito-de-york", desc: "York Rite — Capítulo, Concilio y Encomienda" },
  { label: "Shriners", href: "/masoneria/shriners", desc: "Shriners International" },
  { label: "AJEF", href: "/masoneria/ajef", desc: "Asociación de Jóvenes" },
  { label: "Widow's Sons", href: "/masoneria/widows-sons", desc: "Hijos de la Viuda" },
];

const gold = "#B08D57";
const navy = "#0B2447";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [dropdownMasoneriaOpen, setDropdownMasoneriaOpen] = useState(false);
  const closeTimerMasoneria = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: "#fff",
        boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.08)" : "0 1px 0 rgba(0,0,0,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between" style={{ height: "76px" }}>

        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0 gap-3">
          <img
            src="/logo.png"
            alt="Gran Logia BC"
            width={56}
            height={56}
            style={{ objectFit: "contain" }}
          />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.25 }}>
            <span style={{ fontFamily: "var(--font-raleway), sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.5px", color: navy, textTransform: "uppercase" }}>Gran Logia de Estado</span>
            <span style={{ fontFamily: "var(--font-raleway), sans-serif", fontWeight: 400, fontSize: "11px", letterSpacing: "1px", color: "#6B7280", textTransform: "uppercase" }}>Baja California</span>
            <span style={{ fontFamily: "var(--font-raleway), sans-serif", fontWeight: 400, fontSize: "9.5px", letterSpacing: "0.8px", color: gold, textTransform: "uppercase", marginTop: "2px" }}>Fundada el 5 de febrero de 1933</span>
          </div>
        </Link>

        {/* Nav items — desktop */}
        <div className="hidden lg:flex items-center gap-8">

          {/* La Gran Logia con dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => {
              if (closeTimer.current) clearTimeout(closeTimer.current);
              setDropdownOpen(true);
            }}
            onMouseLeave={() => {
              closeTimer.current = setTimeout(() => setDropdownOpen(false), 250);
            }}
          >
            <Link
              href="/la-gran-logia"
              style={{
                fontFamily: "var(--font-raleway), sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "1.2px",
                color: dropdownOpen ? gold : "rgba(11,36,71,0.6)",
                textTransform: "uppercase",
                transition: "color 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              La Gran Logia
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition: "transform 0.2s", transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            {/* Dropdown panel */}
            {dropdownOpen && (
              <div style={{
                position: "absolute",
                top: "calc(100% + 16px)",
                left: "50%",
                transform: "translateX(-50%)",
                width: "260px",
                backgroundColor: "#fff",
                boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
                border: `1px solid rgba(201,169,110,0.15)`,
                zIndex: 100,
              }}>
                {/* Línea dorada superior */}
                <div style={{ height: "2px", backgroundColor: gold }} />
                {granLogiaDropdown.map((item, i) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{
                      display: "block",
                      padding: "14px 20px",
                      borderBottom: i < granLogiaDropdown.length - 1 ? "1px solid rgba(226,221,212,0.6)" : "none",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#F5F1EA")}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
                  >
                    <div style={{ fontFamily: "var(--font-raleway), sans-serif", color: navy, fontSize: "12px", fontWeight: 700, letterSpacing: "0.3px", marginBottom: "2px" }}>
                      {item.label}
                    </div>
                    <div style={{ fontFamily: "var(--font-dm-sans), sans-serif", color: "rgba(11,36,71,0.45)", fontSize: "11px" }}>
                      {item.desc}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Masonería con dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => {
              if (closeTimerMasoneria.current) clearTimeout(closeTimerMasoneria.current);
              setDropdownMasoneriaOpen(true);
            }}
            onMouseLeave={() => {
              closeTimerMasoneria.current = setTimeout(() => setDropdownMasoneriaOpen(false), 250);
            }}
          >
            <Link
              href="/masoneria"
              style={{
                fontFamily: "var(--font-raleway), sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "1.2px",
                color: dropdownMasoneriaOpen ? gold : "rgba(11,36,71,0.6)",
                textTransform: "uppercase",
                transition: "color 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              Masonería
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition: "transform 0.2s", transform: dropdownMasoneriaOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            {dropdownMasoneriaOpen && (
              <div style={{
                position: "absolute",
                top: "calc(100% + 16px)",
                left: "50%",
                transform: "translateX(-50%)",
                width: "260px",
                backgroundColor: "#fff",
                boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
                border: `1px solid rgba(201,169,110,0.15)`,
                zIndex: 100,
              }}>
                <div style={{ height: "2px", backgroundColor: gold }} />
                {masoneriaDropdown.map((item, i) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{
                      display: "block",
                      padding: "14px 20px",
                      borderBottom: i < masoneriaDropdown.length - 1 ? "1px solid rgba(226,221,212,0.6)" : "none",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#F5F1EA")}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
                  >
                    <div style={{ fontFamily: "var(--font-raleway), sans-serif", color: navy, fontSize: "12px", fontWeight: 700, letterSpacing: "0.3px", marginBottom: "2px" }}>
                      {item.label}
                    </div>
                    <div style={{ fontFamily: "var(--font-dm-sans), sans-serif", color: "rgba(11,36,71,0.45)", fontSize: "11px" }}>
                      {item.desc}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontFamily: "var(--font-raleway), sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "1.2px",
                color: "rgba(11,36,71,0.6)",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#B08D57")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(11,36,71,0.6)")}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right side: socials + CTA */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Redes sociales — SVG simples */}
          {[
            { name: "Facebook", href: "#", svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
            { name: "Instagram", href: "#", svg: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></> },
            { name: "YouTube", href: "#", svg: <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></> },
          ].map(({ name, href, svg }) => (
            <a key={name} href={href} aria-label={name}
              style={{ color: "rgba(11,36,71,0.35)", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#B08D57")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(11,36,71,0.35)")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {svg}
              </svg>
            </a>
          ))}

          <div style={{ width: "1px", height: "20px", backgroundColor: "rgba(11,36,71,0.12)" }} />

          <Link href="/miembros"
            style={{
              fontFamily: "var(--font-raleway), sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              color: "#060F1E",
              backgroundColor: "#B08D57",
              padding: "9px 20px",
              textTransform: "uppercase",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#E8D5A3")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#B08D57")}
          >
            Portal Miembros
          </Link>
        </div>

        {/* Hamburger — mobile */}
        <button className="lg:hidden p-2 flex flex-col gap-[5px]"
          onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
          {[0, 1, 2].map(i => (
            <span key={i} className="block w-6 transition-all duration-200"
              style={{
                height: "1.5px",
                backgroundColor: "#fff",
                transform: menuOpen
                  ? i === 0 ? "rotate(45deg) translate(4.5px, 4.5px)"
                  : i === 2 ? "rotate(-45deg) translate(4.5px, -4.5px)"
                  : "none"
                  : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ backgroundColor: "#060F1E", borderTop: "1px solid rgba(201,169,110,0.1)" }}>
          <div className="px-8 py-6">
            {/* La Gran Logia */}
            <div style={{ fontFamily: "var(--font-raleway), sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: gold, marginBottom: "8px", marginTop: "4px" }}>La Gran Logia</div>
            {granLogiaDropdown.map(item => (
              <Link key={item.href} href={item.href}
                className="block py-3"
                style={{ fontFamily: "var(--font-raleway), sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingLeft: "12px" }}
                onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}

            {/* Masonería */}
            <div style={{ fontFamily: "var(--font-raleway), sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: gold, marginBottom: "8px", marginTop: "20px" }}>Masonería</div>
            {masoneriaDropdown.map(item => (
              <Link key={item.href} href={item.href}
                className="block py-3"
                style={{ fontFamily: "var(--font-raleway), sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingLeft: "12px" }}
                onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}

            {/* Otros */}
            <div style={{ marginTop: "8px" }}>
              {navItems.map(item => (
                <Link key={item.href} href={item.href}
                  className="block py-3"
                  style={{ fontFamily: "var(--font-raleway), sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                  onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>

            <Link href="/miembros"
              className="block mt-5 py-3 text-center transition-colors"
              style={{ fontFamily: "var(--font-raleway), sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", backgroundColor: "#B08D57", color: "#060F1E" }}
              onClick={() => setMenuOpen(false)}>
              Portal Miembros
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

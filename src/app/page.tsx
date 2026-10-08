"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const R = "var(--font-raleway), sans-serif";
const D = "var(--font-dm-sans), system-ui, sans-serif";
const Co = "var(--font-cormorant), Georgia, serif";
const navy = "#0B2447";
const navyDark = "#060F1E";
const gold = "#B08D57";
const ivory = "#F5F1EA";
const border = "#E2DDD4";
const textLight = "#6A6A6A";
const text = "#3A3A3A";

const quickLinks = [
  { title: "¿Qué es la Masonería?", desc: "Conoce los principios, valores y el propósito de nuestra institución.", href: "/masoneria" },
  { title: "¿Cómo Ingresar?", desc: "Información clara sobre el proceso de ingreso a la Masonería.", href: "/masoneria#ingresar" },
  { title: "Nuestras Logias", desc: "Encuentra tu logia más cercana en el Estado de Baja California.", href: "/logias" },
  { title: "Noticias y Eventos", desc: "Entérate de las actividades, eventos y comunicados recientes.", href: "/noticias" },
];

const stats = [
  { number: "1933", label: "Año de Fundación" },
  { number: "45", label: "Logias Jurisdiccionadas" },
  { number: "7", label: "Municipios" },
  { number: "1,000+", label: "Hermanos Miembros" },
];

const features = [
  { title: "Historia", desc: "Más de 90 años de historia, trabajo y compromiso con la sociedad bajacaliforniana." },
  { title: "Misión", desc: "Formar mejores hombres para construir una sociedad más justa y fraterna." },
  { title: "Valores", desc: "Libertad, Igualdad, Fraternidad, Tolerancia, Honor, Integridad y Verdad." },
  { title: "Organización", desc: "Estructura clara y transparente al servicio de nuestras logias y de la sociedad." },
];

const news = [
  { category: "Institución", date: "15 Mayo, 2025", title: "Tenida Solemne Conmemorativa del 100 Aniversario", desc: "Una noche de reflexión y fraternidad para celebrar nuestra historia y compromiso.", bg: "#0B2447" },
  { category: "Publicación", date: "2 Mayo, 2025", title: "Publicación del Boletín Trimestral N° 12", desc: "Ya está disponible la nueva edición con artículos de interés para nuestra comunidad.", bg: "#1A3A6B" },
  { category: "Visita Oficial", date: "20 Abril, 2025", title: "Visita Oficial a la R.·.L.·. Estrella del Desierto N° 4", desc: "El Gran Maestro y su comitiva realizaron una visita fraternal a nuestra logia en Mexicali.", bg: "#060F1E" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section style={{ position: "relative", height: "82vh", overflow: "hidden", display: "flex", alignItems: "center" }}>
          {/* Foto de fondo */}
          <img
            src="/gran-logia-tenida.jpg"
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover",
              objectPosition: "90% top",
            }}
          />
          {/* Gradiente de fusión: navy sólido a la izquierda → transparente a la derecha */}
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(to right, ${navyDark} 18%, rgba(6,15,30,0.75) 38%, rgba(6,15,30,0.15) 58%, transparent 72%)`,
          }} />
          {/* Gradiente sutil abajo para profundidad */}
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(to top, rgba(6,15,30,0.5) 0%, transparent 40%)`,
          }} />

          {/* Contenido */}
          <div className="max-w-7xl mx-auto px-8 w-full" style={{ position: "relative", zIndex: 1, paddingTop: "76px" }}>
            <div style={{ maxWidth: "560px" }}>
              <h1 style={{ fontFamily: R, lineHeight: 1.0, marginBottom: "28px" }}>
                <span style={{ display: "block", color: "rgba(255,255,255,0.9)", fontSize: "clamp(2.4rem, 5vw, 4.8rem)", fontWeight: 300, letterSpacing: "-1px" }}>
                  Tradición.
                </span>
                <span style={{ display: "block", color: "rgba(255,255,255,0.9)", fontSize: "clamp(2.4rem, 5vw, 4.8rem)", fontWeight: 500, letterSpacing: "-1px" }}>
                  Fraternidad.
                </span>
                <span style={{ display: "block", color: gold, fontSize: "clamp(2.4rem, 5vw, 4.8rem)", fontWeight: 800, letterSpacing: "-1px" }}>
                  Servicio.
                </span>
              </h1>

              <p style={{ fontFamily: Co, color: "rgba(255,255,255,0.6)", fontSize: "1.25rem", fontStyle: "italic", lineHeight: 1.65, marginBottom: "40px", maxWidth: "480px" }}>
                Más de nueve décadas construyendo hombres libres y una sociedad mejor en Baja California.
              </p>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link href="/masoneria" style={{
                  fontFamily: R, fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase",
                  backgroundColor: gold, color: navyDark, padding: "14px 32px",
                  transition: "all 0.2s",
                }}>
                  Conoce la Masonería
                </Link>
                <Link href="/logias" style={{
                  fontFamily: R, fontSize: "11px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase",
                  border: "1px solid rgba(176,141,87,0.4)", color: "rgba(255,255,255,0.7)", padding: "14px 32px",
                  transition: "all 0.2s",
                }}>
                  Encuentra una Logia
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── QUICK LINKS ── */}
        <section style={{ backgroundColor: "#fff", borderBottom: `1px solid ${border}` }}>
          <div className="max-w-7xl mx-auto px-8">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
              {quickLinks.map((item, i) => (
                <Link key={i} href={item.href}
                  className="group"
                  style={{
                    display: "block", padding: "40px 32px",
                    borderRight: i < 3 ? `1px solid ${border}` : "none",
                    transition: "background 0.3s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = ivory)}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
                >
                  <div style={{ width: "32px", height: "2px", backgroundColor: gold, marginBottom: "20px" }} />
                  <h3 style={{ fontFamily: R, color: navy, fontSize: "14px", fontWeight: 700, marginBottom: "10px", letterSpacing: "0.3px" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: D, color: textLight, fontSize: "13px", lineHeight: 1.65 }}>
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section style={{ backgroundColor: navy, padding: "72px 0" }}>
          <div className="max-w-7xl mx-auto px-8">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", textAlign: "center" }}>
              {stats.map((s, i) => (
                <div key={i} style={{
                  padding: "16px",
                  borderRight: i < 3 ? "1px solid rgba(201,169,110,0.12)" : "none",
                }}>
                  <div style={{ fontFamily: R, color: gold, fontSize: "clamp(2.2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-1px", lineHeight: 1 }}>
                    {s.number}
                  </div>
                  <div style={{ fontFamily: R, color: "rgba(255,255,255,0.35)", fontSize: "10px", fontWeight: 500, letterSpacing: "2.5px", textTransform: "uppercase", marginTop: "10px" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOBRE ── */}
        <section style={{ backgroundColor: ivory, padding: "100px 0" }}>
          <div className="max-w-7xl mx-auto px-8">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>

              <div>
                <div style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>
                  Conoce la
                </div>
                <h2 style={{ fontFamily: R, color: navy, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: "24px", letterSpacing: "-0.5px" }}>
                  Gran Logia de Estado<br />de Baja California
                </h2>
                <div style={{ width: "40px", height: "2px", backgroundColor: gold, marginBottom: "28px" }} />
                <p style={{ fontFamily: D, color: text, fontSize: "16px", lineHeight: 1.8, marginBottom: "18px" }}>
                  Somos la institución masónica que rige y coordina las logias simbólicas del Estado de Baja California, promoviendo la virtud, el conocimiento y el servicio a la humanidad.
                </p>
                <p style={{ fontFamily: D, color: textLight, fontSize: "15px", lineHeight: 1.8, marginBottom: "36px" }}>
                  Desde nuestra fundación en 1933, hemos sido parte activa del desarrollo social, moral y cultural de nuestra comunidad, formando hombres comprometidos con los valores universales de la masonería.
                </p>
                <Link href="/la-gran-logia" style={{
                  fontFamily: R, color: navy, fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase",
                  borderBottom: `2px solid ${gold}`, paddingBottom: "4px", transition: "color 0.2s",
                }}>
                  Más sobre nosotros
                </Link>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {features.map((f, i) => (
                  <div key={i} style={{
                    backgroundColor: "#fff",
                    border: `1px solid ${border}`,
                    padding: "28px",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = gold; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 4px 20px rgba(0,0,0,0.06)`; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = border; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
                  >
                    <div style={{ width: "24px", height: "2px", backgroundColor: gold, marginBottom: "16px" }} />
                    <h3 style={{ fontFamily: R, color: navy, fontSize: "13px", fontWeight: 700, letterSpacing: "0.5px", marginBottom: "10px" }}>
                      {f.title}
                    </h3>
                    <p style={{ fontFamily: D, color: textLight, fontSize: "13px", lineHeight: 1.7 }}>
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── NOTICIAS ── */}
        <section style={{ backgroundColor: "#fff", padding: "100px 0" }}>
          <div className="max-w-7xl mx-auto px-8">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "56px" }}>
              <div>
                <div style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>
                  Actualidad
                </div>
                <h2 style={{ fontFamily: R, color: navy, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.5px" }}>
                  Noticias
                </h2>
              </div>
              <Link href="/noticias" style={{
                fontFamily: R, color: navy, fontSize: "11px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase",
                borderBottom: `1px solid ${gold}`, paddingBottom: "3px",
              }}>
                Ver todas las noticias
              </Link>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
              {news.map((item, i) => (
                <article key={i} style={{ cursor: "pointer" }}
                  onMouseEnter={e => (e.currentTarget.querySelector("h3")! as HTMLElement).style.color = gold}
                  onMouseLeave={e => (e.currentTarget.querySelector("h3")! as HTMLElement).style.color = navy}
                >
                  {/* Imagen */}
                  <div style={{ aspectRatio: "16/9", backgroundColor: item.bg, marginBottom: "24px", position: "relative", overflow: "hidden" }}>
                    <div style={{
                      position: "absolute", bottom: "16px", left: "16px",
                      fontFamily: R, color: "rgba(201,169,110,0.4)", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase",
                    }}>
                      {item.date}
                    </div>
                  </div>
                  {/* Meta */}
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                    <span style={{ fontFamily: R, color: gold, fontSize: "9px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" }}>
                      {item.category}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: R, color: navy, fontSize: "1.1rem", fontWeight: 700, lineHeight: 1.35, marginBottom: "10px", transition: "color 0.2s" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: D, color: textLight, fontSize: "13px", lineHeight: 1.7, marginBottom: "16px" }}>
                    {item.desc}
                  </p>
                  <span style={{ fontFamily: R, color: gold, fontSize: "11px", fontWeight: 600, letterSpacing: "1px" }}>
                    Leer más →
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ backgroundColor: navyDark, padding: "100px 0", position: "relative", overflow: "hidden" }}>
          <div style={{
            position: "absolute", inset: 0,
            background: `radial-gradient(ellipse 60% 80% at 50% 50%, #1A3A6B22 0%, transparent 70%)`,
          }} />
          <div style={{ position: "relative", zIndex: 1, maxWidth: "640px", margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
            <div style={{ fontFamily: R, color: gold, fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "20px" }}>
              ¿Interesado en unirte?
            </div>
            <h2 style={{ fontFamily: R, color: "#fff", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.5px", marginBottom: "24px" }}>
              Da el primer paso hacia la hermandad
            </h2>
            <p style={{ fontFamily: Co, color: "rgba(255,255,255,0.45)", fontSize: "1.15rem", fontStyle: "italic", lineHeight: 1.8, marginBottom: "44px" }}>
              La masonería está abierta a hombres de bien, de cualquier origen, religión o profesión, mayores de 18 años.
            </p>
            <Link href="/contacto" style={{
              fontFamily: R, fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase",
              backgroundColor: gold, color: navyDark, padding: "16px 44px",
              display: "inline-block", transition: "background 0.2s",
            }}>
              Contáctanos hoy
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

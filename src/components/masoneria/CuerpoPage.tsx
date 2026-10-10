import Link from "@/i18n/Link";
import { getLocale } from "@/i18n/server";
import { dictionaries } from "@/i18n/dictionaries";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { getCuerpos, getCuerpo } from "@/data/cuerpos";

const R  = "var(--font-raleway), sans-serif";
const D  = "var(--font-dm-sans), system-ui, sans-serif";
const Co = "var(--font-cormorant), Georgia, 'Times New Roman', serif";

const deep    = "#061426";
const gold    = "#C6A15B";
const goldDk  = "#8a6d3b";
const cream   = "#F5F1E9";
const canvas  = "#f4f4f5";
const textPri = "#09090b";
const textSec = "#3f3f46";
const textMut = "#71717a";
const line    = "#e4e4e7";

export default async function CuerpoPage({ slug }: { slug: string }) {
  const locale = await getLocale();
  const t = dictionaries[locale];
  const c = getCuerpo(slug, locale);
  if (!c) return null;
  const otros = getCuerpos(locale).filter(o => o.slug !== slug);

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: canvas }}>

        <PageHero
          crumbs={[{ label: t.common.home, href: "/" }, { label: t.common.masoneria, href: "/masoneria" }, { label: c.nombre }]}
          label={c.subtitulo}
          title={c.nombre}
          intro={c.intro}
          img={c.img}
          imgPos={c.imgPos}
          mobileImgPos={c.mobileImgPos}
        />

        {/* ── CONTENIDO ── */}
        <section className="sec">
          <div className="wrap">
            <div className="cuerpo-grid">

              {/* Texto */}
              <div>
                <span style={{ display: "block", fontFamily: R, color: gold, fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px" }}>
                  {c.label}
                </span>
                <h2 style={{ fontFamily: Co, color: textPri, fontSize: "clamp(2rem, 3.2vw, 2.8rem)", fontWeight: 500, lineHeight: 1.08, marginBottom: "22px" }}>
                  {c.titulo}
                </h2>
                {c.parrafos.map((p, i) => (
                  <p key={i} style={{ fontFamily: D, color: textSec, fontSize: "17px", lineHeight: 1.8, textAlign: "justify", marginBottom: "16px" }}>{p}</p>
                ))}

                {c.items && (
                  <div style={{ marginTop: "32px" }}>
                    {c.itemsLabel && (
                      <span style={{ display: "block", fontFamily: R, color: goldDk, fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "14px" }}>{c.itemsLabel}</span>
                    )}
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      {c.items.map((it, i) => (
                        <div key={it.titulo} style={{ display: "flex", alignItems: "flex-start", gap: "16px", padding: "18px 20px", backgroundColor: "#fff", border: `1px solid ${line}`, borderRadius: "14px" }}>
                          <span style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "50%", backgroundColor: cream, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: Co, color: goldDk, fontSize: "1.15rem", fontWeight: 600 }}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <div style={{ fontFamily: Co, color: textPri, fontSize: "1.45rem", fontWeight: 600, lineHeight: 1.1, marginBottom: "4px" }}>{it.titulo}</div>
                            <div style={{ fontFamily: D, color: textMut, fontSize: "15px", lineHeight: 1.55 }}>{it.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {c.cifras && (
                  <div className="cuerpo-cifras" style={{ marginTop: "32px" }}>
                    {c.cifras.map(f => (
                      <div key={f.label} style={{ backgroundColor: "#fff", border: `1px solid ${line}`, borderRadius: "14px", padding: "22px 14px", textAlign: "center" }}>
                        <div style={{ fontFamily: Co, color: deep, fontSize: "2.4rem", fontWeight: 600, lineHeight: 1 }}>{f.numero}</div>
                        <div style={{ fontFamily: R, color: goldDk, fontSize: "11px", fontWeight: 600, letterSpacing: "1.2px", textTransform: "uppercase", marginTop: "8px", lineHeight: 1.4 }}>{f.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Lateral */}
              <aside style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {c.foto && (
                  <figure style={{ margin: 0, position: "relative", borderRadius: "18px", overflow: "hidden", backgroundColor: deep }}>
                    <div style={{ position: "relative", aspectRatio: "4 / 3" }}>
                      <img src={c.foto.src} alt={c.foto.texto} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: c.foto.pos || "center" }} />
                    </div>
                    <figcaption style={{ padding: "20px 22px 22px" }}>
                      <span style={{ display: "block", fontFamily: R, color: gold, fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>{c.foto.label}</span>
                      <span style={{ display: "block", fontFamily: D, color: "rgba(255,255,255,0.8)", fontSize: "15px", lineHeight: 1.6 }}>{c.foto.texto}</span>
                      {c.foto.fecha && <span style={{ display: "block", fontFamily: D, color: "rgba(255,255,255,0.45)", fontSize: "13px", marginTop: "8px" }}>{c.foto.fecha}</span>}
                    </figcaption>
                  </figure>
                )}

                {c.cita && (
                  <div style={{ backgroundColor: deep, borderRadius: "18px", padding: "32px 30px", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 80% at 100% 100%, rgba(198,161,91,0.14) 0%, transparent 60%)" }} />
                    <div style={{ position: "relative" }}>
                      <span aria-hidden="true" style={{ display: "block", fontFamily: Co, color: gold, fontSize: "3.5rem", lineHeight: 0.6, marginBottom: "10px" }}>&ldquo;</span>
                      <p style={{ fontFamily: Co, color: "#fff", fontSize: "1.6rem", fontStyle: "italic", fontWeight: 500, lineHeight: 1.3 }}>{c.cita.texto}</p>
                      {c.cita.autor && <span style={{ display: "block", fontFamily: D, color: "rgba(255,255,255,0.5)", fontSize: "14px", marginTop: "12px" }}>— {c.cita.autor}</span>}
                    </div>
                  </div>
                )}

                {c.nota && (
                  <div style={{ backgroundColor: c.foto ? deep : "#fff", border: c.foto ? "none" : `1px solid ${line}`, borderRadius: "18px", padding: "26px 28px" }}>
                    <span style={{ display: "block", fontFamily: R, color: c.foto ? gold : goldDk, fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>{c.nota.label}</span>
                    <p style={{ fontFamily: D, color: c.foto ? "rgba(255,255,255,0.7)" : textMut, fontSize: "15px", lineHeight: 1.65, textAlign: "justify" }}>{c.nota.texto}</p>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </section>

        {/* ── OTROS CUERPOS ── */}
        <section style={{ padding: "0 0 96px" }}>
          <div className="wrap">
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", marginBottom: "20px" }}>
              <div>
                <span style={{ display: "block", fontFamily: R, color: gold, fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "10px" }}>{t.cuerpo.family}</span>
                <h2 style={{ fontFamily: Co, color: textPri, fontSize: "clamp(1.8rem, 2.6vw, 2.3rem)", fontWeight: 500, lineHeight: 1.1 }}>{t.cuerpo.others}</h2>
              </div>
              <Link href="/masoneria" style={{ fontFamily: R, fontSize: "13px", fontWeight: 700, color: deep, borderBottom: `2px solid ${gold}`, paddingBottom: "3px", textDecoration: "none" }}>
                {t.cuerpo.viewAll}
              </Link>
            </div>

            <div className="cuerpo-otros">
              {otros.map(o => (
                <Link key={o.slug} href={`/masoneria/${o.slug}`} className="logia-card"
                  style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "18px", padding: "22px 22px", backgroundColor: "#fff", border: `1px solid ${line}`, borderRadius: "16px", textDecoration: "none", minHeight: "150px" }}>
                  <div>
                    <div style={{ fontFamily: Co, color: textPri, fontSize: "1.5rem", fontWeight: 600, lineHeight: 1.1, marginBottom: "6px" }}>{o.nombre}</div>
                    <div style={{ fontFamily: D, color: textMut, fontSize: "14px", fontStyle: "italic", lineHeight: 1.4 }}>{o.subtitulo}</div>
                  </div>
                  <span style={{ fontFamily: R, color: goldDk, fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
                    {t.cuerpo.discover} <span className="bento-arrow-icon">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

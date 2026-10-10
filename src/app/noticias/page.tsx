import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { getPublicacionesFacebook, type Publicacion } from "@/lib/facebook";
import { getLocale } from "@/i18n/server";
import { dictionaries, type Dict } from "@/i18n/dictionaries";
import { dateLocale, type Locale } from "@/i18n/config";

// La página se regenera sola cada 30 minutos con lo nuevo de Facebook
export const revalidate = 1800;

export async function generateMetadata() {
  const t = dictionaries[await getLocale()];
  return { title: `${t.noticias.metaTitle} | ${t.meta.suffix}`, description: t.noticias.hero.intro };
}

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
const fbBlue  = "#1877F2";

const FB_URL = process.env.NEXT_PUBLIC_FB_PAGE_URL || "https://www.facebook.com/masonesbc";

const fecha = (iso: string, locale: Locale) =>
  new Intl.DateTimeFormat(dateLocale[locale], { day: "numeric", month: "long", year: "numeric", timeZone: "America/Tijuana" }).format(new Date(iso));

const FbIcon = ({ size = 14, color = fbBlue }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
  </svg>
);

const Play = () => (
  <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "rgba(6,20,38,0.7)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z" /></svg>
  </span>
);

function Meta({ p, locale }: { p: Publicacion; locale: Locale }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
      <FbIcon />
      <span style={{ fontFamily: D, color: textMut, fontSize: "14px" }}>{fecha(p.fecha, locale)}</span>
    </div>
  );
}

function Destacada({ p, t, locale }: { p: Publicacion; t: Dict; locale: Locale }) {
  return (
    <a href={p.enlace} target="_blank" rel="noopener noreferrer" className="news-card news-feature"
      style={{ display: "grid", backgroundColor: "#fff", border: `1px solid ${line}`, borderRadius: "20px", overflow: "hidden", textDecoration: "none" }}>
      <div className="news-feature-img" style={{ position: "relative", minHeight: "420px", backgroundColor: deep, overflow: "hidden" }}>
        {p.imagen && <img src={p.imagen} alt="" className="bento-img" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />}
        {p.esVideo && <Play />}
      </div>
      <div className="news-feature-txt" style={{ padding: "48px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <span style={{ alignSelf: "flex-start", fontFamily: R, color: deep, backgroundColor: cream, fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", padding: "6px 12px", borderRadius: "100px", marginBottom: "18px" }}>
          {t.noticias.latest}
        </span>
        <Meta p={p} locale={locale} />
        <h2 style={{ fontFamily: Co, color: textPri, fontSize: "clamp(1.9rem, 3vw, 2.6rem)", fontWeight: 600, lineHeight: 1.1, marginBottom: "14px" }}>
          {p.titulo}
        </h2>
        {p.extracto && (
          <p className="clamp-5" style={{ fontFamily: D, color: "#3f3f46", fontSize: "17px", lineHeight: 1.7, textAlign: "justify", marginBottom: "24px" }}>
            {p.extracto}
          </p>
        )}
        <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontFamily: R, color: goldDk, fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
          {t.noticias.readOnFb} <span className="bento-arrow-icon">→</span>
        </span>
      </div>
    </a>
  );
}

function Tarjeta({ p, t, locale }: { p: Publicacion; t: Dict; locale: Locale }) {
  if (!p.imagen) {
    return (
      <a href={p.enlace} target="_blank" rel="noopener noreferrer" className="news-card"
        style={{ display: "flex", flexDirection: "column", backgroundColor: deep, borderRadius: "18px", padding: "30px 28px", textDecoration: "none", minHeight: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "18px" }}>
          <FbIcon color="#fff" />
          <span style={{ fontFamily: D, color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>{fecha(p.fecha, locale)}</span>
        </div>
        <span aria-hidden="true" style={{ fontFamily: Co, color: gold, fontSize: "4rem", lineHeight: 0.6, marginBottom: "10px" }}>&ldquo;</span>
        <p className="clamp-6" style={{ fontFamily: Co, color: "#fff", fontSize: "1.55rem", fontStyle: "italic", fontWeight: 500, lineHeight: 1.35, flex: 1 }}>
          {p.texto}
        </p>
        <span style={{ marginTop: "20px", fontFamily: R, color: gold, fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
          {t.noticias.viewPost} <span className="bento-arrow-icon">→</span>
        </span>
      </a>
    );
  }

  return (
    <a href={p.enlace} target="_blank" rel="noopener noreferrer" className="news-card"
      style={{ display: "flex", flexDirection: "column", backgroundColor: "#fff", border: `1px solid ${line}`, borderRadius: "18px", overflow: "hidden", textDecoration: "none" }}>
      <div style={{ position: "relative", aspectRatio: "16 / 10", backgroundColor: deep, overflow: "hidden" }}>
        <img src={p.imagen} alt="" loading="lazy" className="bento-img" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        {p.esVideo && <Play />}
      </div>
      <div style={{ padding: "22px 24px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
        <Meta p={p} locale={locale} />
        <h3 className="clamp-3" style={{ fontFamily: Co, color: textPri, fontSize: "1.55rem", fontWeight: 600, lineHeight: 1.15, marginBottom: "10px" }}>
          {p.titulo}
        </h3>
        {p.extracto && (
          <p className="clamp-3" style={{ fontFamily: D, color: textMut, fontSize: "15px", lineHeight: 1.6, marginBottom: "18px" }}>
            {p.extracto}
          </p>
        )}
        <span style={{ marginTop: "auto", fontFamily: R, color: goldDk, fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
          {t.noticias.viewPost} <span className="bento-arrow-icon">→</span>
        </span>
      </div>
    </a>
  );
}

export default async function NoticiasPage() {
  const locale = await getLocale();
  const t = dictionaries[locale];
  const N = t.noticias;
  const { publicaciones, esEjemplo, error } = await getPublicacionesFacebook();
  const [primera, ...resto] = publicaciones;

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: canvas }}>

        <PageHero
          crumbs={[{ label: t.common.home, href: "/" }, { label: N.crumb }]}
          label={N.hero.label}
          title={<>{N.hero.title1}<br />{N.hero.title2}</>}
          intro={N.hero.intro}
          img="/discurso.jpg"
          imgPos="center 35%"
          mobileImgPos="60% 35%"
        />

        <section className="sec" style={{ paddingTop: "56px" }}>
          <div className="wrap">

            {esEjemplo && (
              <div style={{ marginBottom: "24px", padding: "14px 18px", borderRadius: "12px", backgroundColor: "#fff7e6", border: "1px solid #f3d9a4", fontFamily: D, fontSize: "14px", color: "#7a5a1f" }}>
                {N.sample}
              </div>
            )}

            {error && publicaciones.length === 0 && (
              <div style={{ textAlign: "center", padding: "64px 20px", backgroundColor: "#fff", border: `1px solid ${line}`, borderRadius: "18px" }}>
                <div style={{ fontFamily: Co, color: textPri, fontSize: "2rem", marginBottom: "8px" }}>{N.errorTitle}</div>
                <p style={{ fontFamily: D, color: textMut, fontSize: "16px", marginBottom: "20px" }}>{N.errorText}</p>
              </div>
            )}

            {N.original && publicaciones.length > 0 && (
              <p style={{ fontFamily: D, color: textMut, fontSize: "14px", fontStyle: "italic", marginBottom: "16px" }}>{N.original}</p>
            )}

            {primera && <Destacada p={primera} t={t} locale={locale} />}

            {resto.length > 0 && (
              <div className="news-grid" style={{ marginTop: "16px" }}>
                {resto.map(p => <Tarjeta key={p.id} p={p} t={t} locale={locale} />)}
              </div>
            )}

            {/* Síguenos */}
            <div className="follow-box" style={{ marginTop: "48px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", flexWrap: "wrap", padding: "32px 36px", backgroundColor: deep, borderRadius: "20px" }}>
              <div>
                <div style={{ fontFamily: Co, color: "#fff", fontSize: "clamp(1.7rem, 2.6vw, 2.2rem)", fontWeight: 500, lineHeight: 1.1, marginBottom: "6px" }}>
                  {N.followTitle}
                </div>
                <div style={{ fontFamily: D, color: "rgba(255,255,255,0.6)", fontSize: "16px" }}>
                  {N.followText}
                </div>
              </div>
              <a href={FB_URL} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "15px 24px", borderRadius: "14px", backgroundColor: fbBlue, color: "#fff", fontFamily: R, fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
                <FbIcon size={18} color="#fff" /> {N.followBtn}
              </a>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

"use client";

import Link from "next/link";

const C = {
  navyDark: "#060F1E",
  gold: "#B08D57",
  cinzel: "var(--font-cinzel), 'Times New Roman', serif",
  cormorant: "var(--font-cormorant), Georgia, serif",
};

const cols = {
  Institución: ["Historia", "Gran Cuadro", "Ex Grandes Maestros", "Documentos Oficiales", "Galería"],
  Masonería: ["¿Qué es la Masonería?", "Preguntas Frecuentes", "Cómo Ingresar", "Mitos y Realidades"],
  Recursos: ["Noticias y Eventos", "Biblioteca", "Boletines", "Enlaces de Interés"],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: C.navyDark }}>
      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

          {/* Brand — 2 cols */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Gran Logia BC" width={52} height={52} style={{ mixBlendMode: "screen" }} />
              <div>
                <div style={{ fontFamily: C.cinzel, color: "#fff", fontSize: "12px", fontWeight: 600, letterSpacing: "1px", lineHeight: 1.3 }}>
                  Gran Logia de Estado
                </div>
                <div style={{ fontFamily: C.cinzel, color: C.gold, fontSize: "10px", letterSpacing: "2px" }}>
                  &ldquo;BAJA CALIFORNIA&rdquo;
                </div>
                <div style={{ fontFamily: C.cinzel, color: "rgba(255,255,255,0.3)", fontSize: "9px", letterSpacing: "1.5px", marginTop: "2px" }}>
                  DE ANTIGUOS LIBRES Y ACEPTADOS MASONES
                </div>
              </div>
            </Link>

            {/* Contacto */}
            <div className="space-y-3 mb-8">
              {[
                { icon: "📍", text: "Calzada de los Presidentes No. 1250, Col. Los Pinos, Mexicali, B.C. C.P. 21110" },
                { icon: "📞", text: "686 555 1234" },
                { icon: "✉️", text: "info@glebc.mx" },
              ].map((item) => (
                <div key={item.icon} className="flex gap-3">
                  <span style={{ fontSize: "13px", flexShrink: 0, marginTop: "2px" }}>{item.icon}</span>
                  <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", lineHeight: 1.5 }}>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Redes sociales */}
            <div className="flex gap-3">
              {["Facebook", "Instagram", "YouTube"].map((red) => (
                <a key={red} href="#"
                  className="px-3 py-1.5 transition-all duration-200"
                  style={{ border: "1px solid rgba(201,169,110,0.3)", color: "rgba(255,255,255,0.5)", fontSize: "10px", fontFamily: C.cinzel, letterSpacing: "1px" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.color = C.gold; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(201,169,110,0.3)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}>
                  {red.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(cols).map(([cat, links]) => (
            <div key={cat}>
              <h4 style={{ fontFamily: C.cinzel, color: C.gold, fontSize: "10px", letterSpacing: "2.5px", fontWeight: 600, marginBottom: "20px" }}>
                {cat.toUpperCase()}
              </h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l}>
                    <Link href="#"
                      className="transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px" }}
                      onMouseEnter={e => (e.currentTarget.style.color = C.gold)}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Ornament */}
      <div className="text-center py-4" style={{ borderTop: "1px solid rgba(201,169,110,0.1)" }}>
        <span style={{ color: "rgba(201,169,110,0.3)", letterSpacing: "10px", fontSize: "14px" }}>✦ ✦ ✦</span>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "11px", fontFamily: C.cinzel, letterSpacing: "0.5px" }}>
            © 2025 GRAN LOGIA DE ESTADO &ldquo;BAJA CALIFORNIA&rdquo;
          </p>
          <div className="flex gap-6">
            {["Aviso de Privacidad", "Términos y Condiciones"].map((t) => (
              <Link key={t} href="#"
                style={{ color: "rgba(255,255,255,0.2)", fontSize: "11px", fontFamily: C.cinzel }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.2)")}>
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

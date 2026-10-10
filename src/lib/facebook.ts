/**
 * Lectura de publicaciones de la página de Facebook (Graph API).
 *
 * Variables de entorno (en .env.local y en Vercel → Settings → Environment Variables):
 *   FB_PAGE_ID       ID numérico de la página de Facebook
 *   FB_PAGE_TOKEN    Token de acceso de la página (de larga duración)
 *   FB_GRAPH_VERSION (opcional) versión de la Graph API, p. ej. "v23.0"
 *   NEXT_PUBLIC_FB_PAGE_URL (opcional) enlace público de la página, para el botón "Síguenos"
 *
 * Si faltan FB_PAGE_ID o FB_PAGE_TOKEN se devuelven publicaciones de ejemplo,
 * para poder ver el diseño sin conexión.
 */

export type Publicacion = {
  id: string;
  texto: string;
  titulo: string;
  extracto: string;
  fecha: string;          // ISO
  imagen?: string;
  enlace: string;
  esVideo: boolean;
  fuente: "facebook";
};

export type Feed = { publicaciones: Publicacion[]; esEjemplo: boolean; error?: string };

const REVALIDAR_SEG = 60 * 30; // se vuelve a consultar Facebook cada 30 minutos

function partirTexto(texto: string) {
  const limpio = texto.trim();
  const lineas = limpio.split(/\n+/).map(l => l.trim()).filter(Boolean);
  let titulo = lineas[0] ?? "";
  if (titulo.length > 110) {
    const corte = titulo.slice(0, 110);
    titulo = corte.slice(0, corte.lastIndexOf(" ")) + "…";
  }
  const resto = lineas.length > 1 ? lineas.slice(1).join(" ") : "";
  return { titulo, extracto: resto };
}

type FbPost = {
  id: string;
  message?: string;
  created_time: string;
  full_picture?: string;
  permalink_url: string;
  status_type?: string;
  attachments?: { data?: { media_type?: string; type?: string }[] };
};

export async function getPublicacionesFacebook(limite = 24): Promise<Feed> {
  const pageId = process.env.FB_PAGE_ID;
  const token  = process.env.FB_PAGE_TOKEN;
  const ver    = process.env.FB_GRAPH_VERSION || "v23.0";

  if (!pageId || !token) return { publicaciones: ejemplos, esEjemplo: true };

  const campos = "id,message,created_time,full_picture,permalink_url,status_type,attachments{media_type,type}";
  const url = `https://graph.facebook.com/${ver}/${pageId}/posts?fields=${encodeURIComponent(campos)}&limit=${limite}&access_token=${token}`;

  try {
    const res = await fetch(url, { next: { revalidate: REVALIDAR_SEG } });
    const json = await res.json();
    if (!res.ok || json.error) {
      const msg = json?.error?.message || `HTTP ${res.status}`;
      console.error("[facebook] Error al leer publicaciones:", msg);
      return { publicaciones: [], esEjemplo: false, error: msg };
    }

    const publicaciones: Publicacion[] = (json.data as FbPost[])
      .filter(p => p.message || p.full_picture)               // ignora cambios de portada vacíos, etc.
      .map(p => {
        const texto = p.message ?? "";
        const { titulo, extracto } = partirTexto(texto);
        const media = p.attachments?.data?.[0];
        return {
          id: p.id,
          texto,
          titulo: titulo || "Publicación en Facebook",
          extracto,
          fecha: p.created_time,
          imagen: p.full_picture,
          enlace: p.permalink_url,
          esVideo: media?.media_type === "video" || (media?.type ?? "").includes("video"),
          fuente: "facebook" as const,
        };
      });

    return { publicaciones, esEjemplo: false };
  } catch (e) {
    console.error("[facebook] Fallo de red:", e);
    return { publicaciones: [], esEjemplo: false, error: "No se pudo conectar con Facebook" };
  }
}

/* ── Publicaciones de ejemplo (solo mientras no hay conexión) ── */
const ej = (id: string, dias: number, texto: string, imagen?: string, esVideo = false): Publicacion => {
  const { titulo, extracto } = partirTexto(texto);
  return {
    id, texto, titulo, extracto, imagen, esVideo, fuente: "facebook",
    fecha: new Date(Date.now() - dias * 86400000).toISOString(),
    enlace: "https://www.facebook.com/masonesbc",
  };
};

const ejemplos: Publicacion[] = [
  ej("e1", 1,  "Segundo Congreso Masónico 2026 de la Confederación Masónica Interamericana\nNuestra Gran Logia participó con una delegación encabezada por el M∴R∴G∴M∴ en los trabajos celebrados en Monterrey, Nuevo León, fortaleciendo los lazos fraternales con las grandes logias del continente.", "/masoneria-hero.jpg"),
  ej("e2", 6,  "Celebramos con orgullo las fiestas patrias\nHermanos y familias se reunieron para honrar a nuestra bandera y a quienes forjaron la independencia de México.", "/masoneria-patriotica.jpg"),
  ej("e3", 12, "Mensaje del Muy Respetable Gran Maestro durante la sesión de trabajo\nLa Masonería se fortalece cuando trabajamos unidos, con fraternidad y con el compromiso de servir.", "/gran-maestro-hablando.jpg", true),
  ej("e4", 20, "Tenida solemne de la Gran Logia\nUna noche de reflexión y fraternidad para celebrar nuestra historia y nuestro compromiso con Baja California.", "/gran-logia-tenida.jpg"),
  ej("e5", 27, "Convocatoria: jornada de estudio para Aprendices y Compañeros en Mexicali. Te esperamos este sábado a las 10:00 h."),
  ej("e6", 34, "Visita oficial a la R∴L∴S∴ Prometeo No. 5\nEl Gran Maestro y su comitiva realizaron una visita fraternal a uno de nuestros talleres fundadores.", "/grandes.jpg"),
];

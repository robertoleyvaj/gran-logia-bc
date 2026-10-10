/**
 * Idiomas del sitio.
 *  - Español: sin prefijo        →  /masoneria
 *  - Inglés:  prefijo /en        →  /en/masoneria
 *  - Portugués: prefijo /pt      →  /pt/masoneria
 *
 * proxy.ts quita el prefijo y manda el idioma en el encabezado "x-locale",
 * así todas las páginas siguen viviendo en src/app sin duplicarse.
 */

export const locales = ["es", "en", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";
export const LOCALE_HEADER = "x-locale";

export const localeNames: Record<Locale, string> = { es: "Español", en: "English", pt: "Português" };
export const htmlLang: Record<Locale, string>    = { es: "es-MX", en: "en", pt: "pt-BR" };
export const dateLocale: Record<Locale, string>  = { es: "es-MX", en: "en-US", pt: "pt-BR" };

export const isLocale = (v: unknown): v is Locale => typeof v === "string" && (locales as readonly string[]).includes(v);

/** "/en/masoneria" → { locale: "en", path: "/masoneria" } */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const seg = pathname.split("/")[1];
  if (seg && seg !== defaultLocale && isLocale(seg)) {
    const rest = pathname.slice(seg.length + 1);
    return { locale: seg, path: rest || "/" };
  }
  return { locale: defaultLocale, path: pathname || "/" };
}

/** ("/masoneria", "en") → "/en/masoneria". Deja intactos enlaces externos, anclas y mailto. */
export function localizeHref(href: string, locale: Locale): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  if (locale === defaultLocale) return href;
  return href === "/" ? `/${locale}` : `/${locale}${href}`;
}

import { headers } from "next/headers";
import { defaultLocale, isLocale, LOCALE_HEADER, type Locale } from "./config";
import { dictionaries, type Dict } from "./dictionaries";

/** Idioma actual (componentes de servidor) */
export async function getLocale(): Promise<Locale> {
  const v = (await headers()).get(LOCALE_HEADER);
  return isLocale(v) ? v : defaultLocale;
}

/** Textos del idioma actual (componentes de servidor) */
export async function getT(): Promise<Dict> {
  return dictionaries[await getLocale()];
}

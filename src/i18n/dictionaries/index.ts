import type { Locale } from "../config";
import es from "./es";
import en from "./en";
import pt from "./pt";

export type Dict = typeof es;
export const dictionaries: Record<Locale, Dict> = { es, en, pt };

/** Traduce un cargo del Gran Cuadro; si no hay traducción, devuelve el original */
export const cargo = (t: Dict, original: string) => t.granCuadro.cargos[original] ?? original;

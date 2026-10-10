"use client";

import { createContext, useContext, type ReactNode } from "react";
import { defaultLocale, type Locale } from "./config";
import { dictionaries, type Dict } from "./dictionaries";

const LocaleContext = createContext<Locale>(defaultLocale);

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

/** Idioma actual (componentes de cliente) */
export const useLocale = () => useContext(LocaleContext);

/** Textos del idioma actual (componentes de cliente) */
export const useT = (): Dict => dictionaries[useContext(LocaleContext)];

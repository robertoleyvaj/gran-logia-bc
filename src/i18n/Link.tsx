"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { localizeHref } from "./config";
import { useLocale } from "./LocaleProvider";

/**
 * Igual que next/link, pero agrega el prefijo del idioma actual (/en, /pt)
 * a los enlaces internos. Úsalo en lugar de next/link en todo el sitio.
 */
export default function Link({ href, ...props }: ComponentProps<typeof NextLink>) {
  const locale = useLocale();
  const finalHref = typeof href === "string" ? localizeHref(href, locale) : href;
  return <NextLink href={finalHref} {...props} />;
}

import type { Metadata } from "next";
import { routing, LOCALE_META, type Locale } from "@/i18n/routing";

/* ── Site URL ─────────────────────────────────────────────────
   Read from env so production, staging, preview each get their
   own canonical host. Fallback is a clearly-marked placeholder
   so we notice in dev if it isn't set.
─────────────────────────────────────────────────────────────── */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://drpradeepkumar.example";

/* Absolute URL for a given locale + path (without locale prefix). */
export function localeUrl(locale: Locale, pathWithoutLocale: string): string {
  const p = pathWithoutLocale.startsWith("/")
    ? pathWithoutLocale
    : `/${pathWithoutLocale}`;
  // Root path "/" should not produce trailing slash
  const tail = p === "/" ? "" : p;
  return `${SITE_URL}/${locale}${tail}`;
}

/* ── Build canonical + hreflang + OG locale metadata ──────────
   Pass the path WITHOUT a locale prefix, e.g. "/specialties/headache-and-vertigo".
─────────────────────────────────────────────────────────────── */
export function buildLocaleMetadata(
  locale: Locale,
  pathWithoutLocale: string
): Pick<Metadata, "alternates" | "openGraph"> {
  const current = localeUrl(locale, pathWithoutLocale);

  /* hreflang map. x-default points to English for international fallback. */
  const languages: Record<string, string> = {
    "x-default": localeUrl("en", pathWithoutLocale),
  };
  for (const l of routing.locales) {
    languages[LOCALE_META[l].bcp47] = localeUrl(l, pathWithoutLocale);
  }

  const otherLocales = routing.locales
    .filter((l) => l !== locale)
    .map((l) => LOCALE_META[l].ogLocale);

  return {
    alternates: {
      canonical: current,
      languages,
    },
    openGraph: {
      url: current,
      locale: LOCALE_META[locale].ogLocale,
      alternateLocale: otherLocales,
    },
  };
}

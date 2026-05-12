import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  /* All supported locales. ISO 639-1 codes. */
  locales: ["en", "hi"] as const,

  /* English is the canonical fallback (Lucknow / Kanpur audience). */
  defaultLocale: "en",

  /* ── 'always' prefix ───────────────────────────────────────────
     Every page is served under /en/... or /hi/... — symmetric,
     SEO-clean, scales to any number of languages later.
     A request to `/` is auto-redirected to `/en/` by middleware.
  ─────────────────────────────────────────────────────────────── */
  localePrefix: "always",

  /* Don't sniff Accept-Language headers on the root URL.
     Keeps `/` cacheable at the edge and gives every visitor a
     predictable landing experience — they pick a language
     themselves via the toggle (or land on /hi/... from search). */
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];

/* Map our internal locale codes to BCP-47 / OpenGraph values. */
export const LOCALE_META: Record<Locale, { ogLocale: string; bcp47: string }> = {
  en: { ogLocale: "en_IN", bcp47: "en-IN" },
  hi: { ogLocale: "hi_IN", bcp47: "hi-IN" },
};

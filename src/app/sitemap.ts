import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { SPECIALTIES } from "@/lib/specialties-data";
import { localeUrl } from "@/lib/seo";

/* ── Sitemap ──────────────────────────────────────────────────
   Emits every (locale, path) combination so Google has a clean
   map of all language variants. Each entry includes its
   hreflang alternates so the crawler doesn't have to fetch
   each page to discover them.
─────────────────────────────────────────────────────────────── */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/specialties",
    ...SPECIALTIES.map((s) => `/specialties/${s.slug}`),
  ];

  const now = new Date();

  return paths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: localeUrl(locale, path),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1.0 : path === "/specialties" ? 0.9 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, localeUrl(l, path)])
        ),
      },
    }))
  );
}

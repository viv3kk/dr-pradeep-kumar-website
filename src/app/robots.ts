import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/* ── robots.txt ───────────────────────────────────────────────
   Allow all crawlers, point them at the sitemap, and block any
   future preview/admin paths (defensive — none exist yet).
─────────────────────────────────────────────────────────────── */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

/* ── Proxy (Next.js 16+) ───────────────────────────────────────
   Renamed from `middleware.ts` per Next.js 16's `proxy` convention.
   Functionally identical — next-intl's createMiddleware still works
   as the proxy handler. Runs on every request (after the matcher),
   detects/sets the locale from the URL prefix, and forwards.
─────────────────────────────────────────────────────────────── */
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  /* Match all pathnames except:
     - /api, /trpc (API routes)
     - /_next/static, /_next/image (Next internals)
     - Anything that looks like a file (.png, .ico, .svg, etc.)
  */
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};

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

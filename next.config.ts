import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import path from "node:path";
import { fileURLToPath } from "node:url";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/* ESM-safe project root. Using `import.meta.url` because Next.js 16
   loads `next.config.ts` as an ES module — `__dirname` is undefined
   there, and `path.resolve(undefined)` silently mis-resolves to a
   parent folder, which breaks Tailwind/PostCSS module resolution. */
const PROJECT_ROOT = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.apollohospitals.com" },
      { protocol: "https", hostname: "**.apollo247.com" },
    ],
  },
  /* Pin Turbopack's project root + Next.js file-tracing root so they
     don't accidentally walk up to a parent `package.json` (e.g. one
     sitting in $HOME alongside an unrelated lockfile). */
  turbopack: {
    root: PROJECT_ROOT,
  },
  outputFileTracingRoot: PROJECT_ROOT,
};

export default withNextIntl(nextConfig);

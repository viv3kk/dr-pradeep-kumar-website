import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/* ── Locale-aware navigation helpers ───────────────────────────
   Use these instead of Next.js built-ins so links and redirects
   automatically include the right locale prefix.
─────────────────────────────────────────────────────────────── */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

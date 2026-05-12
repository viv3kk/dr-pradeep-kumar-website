/* ─── Per-locale layout ─────────────────────────────────────────
   Lives under `app/[locale]/` so Next.js' route segment dynamic
   params work. Cannot declare its own <html> or <body> — those
   live in the root `app/layout.tsx` per Next.js 16's requirement
   that the root layout owns the document scaffold.

   This layout's job is just to:
     1. Reject unsupported locales with notFound()
     2. Enable static rendering for the locale via setRequestLocale
     3. Pass children through to the page
─────────────────────────────────────────────────────────────── */
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

/* Statically generate /en and /hi at build time */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  /* 404 for any URL with an unsupported locale (e.g. /de/...) */
  if (!hasLocale(routing.locales, locale)) notFound();

  /* Enable static rendering for this locale's pages */
  setRequestLocale(locale);

  return children;
}

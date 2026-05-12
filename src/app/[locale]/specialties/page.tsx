import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Connect } from "@/components/sections/Connect";

import { SpecialtiesIndexGrid } from "@/components/specialty/SpecialtiesIndexGrid";
import { FloatingBookButton } from "@/components/specialty/FloatingBookButton";

import { buildLocaleMetadata } from "@/lib/seo";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";

/* ── Static generation ─────────────────────────────────────── */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/* ── Metadata ──────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "specialtiesIndex" });
  return {
    title: t("title"),
    description: t("subtitle"),
    ...buildLocaleMetadata(locale, "/specialties"),
  };
}

/* ── Page ──────────────────────────────────────────────────── */
export default async function SpecialtiesIndexPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main>
        <SpecialtiesIndexGrid />
        <Connect />
      </main>
      <Footer />
      <FloatingBookButton />
    </>
  );
}

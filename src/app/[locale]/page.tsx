import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Promise } from "@/components/sections/Promise";
import { Testimonials } from "@/components/sections/Testimonials";
import { Connect } from "@/components/sections/Connect";
import { FAQ } from "@/components/sections/FAQ";

import { buildLocaleMetadata } from "@/lib/seo";
import { routing, type Locale } from "@/i18n/routing";

/* ── Static generation for both locales ───────────────────── */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/* ── Per-locale metadata (canonical + hreflang) ───────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildLocaleMetadata(locale, "/");
}

export default async function Home({
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
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <HowItWorks />
        <Promise />
        <Testimonials />
        <Connect />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

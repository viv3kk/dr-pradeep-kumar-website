import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans, Noto_Sans_Devanagari } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";
import { routing, type Locale } from "@/i18n/routing";
import { SITE_URL, buildLocaleMetadata } from "@/lib/seo";

/* ── Fonts ────────────────────────────────────────────────── */
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  display: "swap",
  axes: ["opsz"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-noto-hi",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* ── Base metadata (applies to every page, can be overridden) ── */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dr. Pradeep Kumar — Neurologist | Lucknow & Kanpur",
    template: "%s | Dr. Pradeep Kumar Neurology",
  },
  description:
    "Dr. Pradeep Kumar, MBBS MD DM (Neurology) — Consultant Neurologist at Apollomedics Lucknow & Paras Hospital Kanpur. Expert in Epilepsy, Migraine, Stroke, Parkinson's. Book online.",
  keywords: [
    "neurologist Lucknow",
    "neurologist Kanpur",
    "Dr Pradeep Kumar neurologist",
    "epilepsy specialist Lucknow",
    "migraine doctor Lucknow",
    "stroke specialist UP",
    "Apollomedics neurology",
    "Paras Hospital Kanpur neurology",
    "DM neurology RMLIMS",
  ],
  authors: [{ name: "Dr. Pradeep Kumar" }],
  openGraph: {
    type: "website",
    siteName: "Dr. Pradeep Kumar Neurology",
    title: "Dr. Pradeep Kumar — Neurologist | Lucknow & Kanpur",
    description:
      "Compassionate, expert neurology care in Lucknow and Kanpur. Book your appointment today.",
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/* ── Statically generate /en and /hi ──────────────────────── */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/* ── JSON-LD Structured Data ──────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Pradeep Kumar",
  description:
    "Consultant Neurologist at Apollomedics Super Speciality Hospital, Lucknow",
  medicalSpecialty: "Neurology",
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "King George's Medical University, Lucknow",
    },
    { "@type": "EducationalOrganization", name: "RMLIMS, Lucknow" },
  ],
  worksFor: {
    "@type": "Hospital",
    name: "Apollomedics Super Speciality Hospital",
    address: {
      "@type": "PostalAddress",
      streetAddress: "LDA Colony, Kanpur Road",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      postalCode: "226012",
      addressCountry: "IN",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "87",
    bestRating: "5",
  },
  availableService: [
    { "@type": "MedicalProcedure", name: "Epilepsy Treatment" },
    { "@type": "MedicalProcedure", name: "Stroke Thrombolysis" },
    { "@type": "MedicalProcedure", name: "EEG Monitoring" },
  ],
};

/* ── Locale Root Layout ───────────────────────────────────── */
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  /* 404 if the URL contains an unsupported locale */
  if (!hasLocale(routing.locales, locale)) notFound();

  /* Enable static rendering for this locale */
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${dmSans.variable} ${notoDevanagari.variable}`}
      style={{
        fontFamily:
          locale === "hi"
            ? "var(--font-noto-hi, 'Noto Sans Devanagari', system-ui, sans-serif)"
            : "var(--font-dm-sans, 'DM Sans', sans-serif)",
      }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {/* suppressHydrationWarning: browser extensions like ColorZilla,
          Grammarly, and DarkReader inject attributes onto <body> before
          React hydrates, which otherwise throws a hydration mismatch. */}
      <body
        className="bg-[var(--color-bg)] text-[var(--color-ink)] antialiased overflow-x-hidden"
        suppressHydrationWarning
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}

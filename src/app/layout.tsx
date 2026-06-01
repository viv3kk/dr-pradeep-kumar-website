/* ─── Root layout ───────────────────────────────────────────────
   Next.js 16 requires `<html>` and `<body>` to live in the root
   layout. Because every route is prefixed with /[locale]/ via
   next-intl's always-prefix middleware, we can read the active
   locale from the request context here via `getLocale()` — that
   keeps `<html lang>` accurate without per-locale nested layouts
   trying to declare their own html/body tags.
─────────────────────────────────────────────────────────────── */
import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans, Noto_Sans_Devanagari } from "next/font/google";
import { getLocale } from "next-intl/server";
import "./globals.css";
import { SITE_URL } from "@/lib/seo";

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

/* ── Base metadata ────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dr. Pradeep Kumar — Neurologist | Lucknow & Kanpur",
    template: "%s | Dr. Pradeep Kumar Neurology",
  },
  description:
    "Dr. Pradeep Kumar, MBBS MD DM (Neurology) — Director, Neurology at Paras Health Kanpur. Consulting at Equinox Neuro & Medicentrum, Lucknow. Expert in Epilepsy, Migraine, Stroke, Parkinson's. Book online.",
  keywords: [
    "neurologist Lucknow",
    "neurologist Kanpur",
    "Dr Pradeep Kumar neurologist",
    "epilepsy specialist Lucknow",
    "migraine doctor Lucknow",
    "stroke specialist UP",
    "Paras Health Kanpur neurology",
    "Equinox Neuro Clinic Gomti Nagar",
    "Medicentrum SGPGI Lucknow",
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

/* ── JSON-LD ──────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Pradeep Kumar",
  description:
    "Director — Neurology at Paras Health Kanpur. DM Neurology (RMLIMS), MD Medicine (KGMU). Treats stroke, epilepsy, migraine, Parkinson's, dementia, neuropathy and spine disorders.",
  medicalSpecialty: "Neurology",
  telephone: "+91-9793440057",
  email: "equinoxneuro.drpradeep@gmail.com",
  identifier: "UPMC-61202",
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Motilal Nehru Medical College (MLNMC), Prayagraj",
    },
    {
      "@type": "EducationalOrganization",
      name: "King George's Medical University (KGMU), Lucknow",
    },
    {
      "@type": "EducationalOrganization",
      name: "Dr. Ram Manohar Lohia Institute of Medical Sciences (RMLIMS), Lucknow",
    },
  ],
  memberOf: [
    { "@type": "Organization", name: "Indian Stroke Association (ISA)" },
    { "@type": "Organization", name: "Neurosonology Society of India" },
    {
      "@type": "Organization",
      name: "Indian Federation of Neuro Rehabilitation (IFNR)",
    },
    { "@type": "Organization", name: "World Stroke Organization (WSO)" },
    { "@type": "Organization", name: "Indian Epilepsy Society" },
  ],
  worksFor: {
    "@type": "Hospital",
    name: "Paras Health",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kanpur",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
  },
  affiliation: [
    {
      "@type": "MedicalClinic",
      name: "Equinox Neuro Clinic",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Vijyant Khand, Gomti Nagar",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
    },
    {
      "@type": "MedicalClinic",
      name: "Medicentrum",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Near SGPGI, Raebareli Road",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "32",
    bestRating: "5",
  },
  availableService: [
    { "@type": "MedicalProcedure", name: "Stroke Thrombolysis" },
    { "@type": "MedicalProcedure", name: "Epilepsy Treatment" },
    { "@type": "MedicalProcedure", name: "Headache & Migraine Management" },
    { "@type": "MedicalProcedure", name: "Parkinson's & Movement Disorders" },
    { "@type": "MedicalProcedure", name: "EEG Monitoring" },
    { "@type": "MedicalProcedure", name: "EMG & Nerve Conduction Studies" },
  ],
};

/* ── Root Layout ──────────────────────────────────────────── */
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /* Locale comes from next-intl's request context (set by the
     proxy/middleware based on the URL prefix). */
  const locale = await getLocale();

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
      {/* suppressHydrationWarning: browser extensions (ColorZilla,
          Grammarly, DarkReader) inject attributes onto <body> before
          React hydrates, which would otherwise throw a hydration
          mismatch. Only suppresses this one element. */}
      <body
        className="bg-[var(--color-bg)] text-[var(--color-ink)] antialiased overflow-x-hidden"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

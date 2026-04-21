import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

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

/* ── Metadata ─────────────────────────────────────────────── */
export const metadata: Metadata = {
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
    locale: "en_IN",
    siteName: "Dr. Pradeep Kumar Neurology",
    title: "Dr. Pradeep Kumar — Neurologist | Lucknow & Kanpur",
    description:
      "Compassionate, expert neurology care in Lucknow and Kanpur. Book your appointment today.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  viewport: "width=device-width, initial-scale=1",
};

/* ── JSON-LD Structured Data ──────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Pradeep Kumar",
  description: "Consultant Neurologist at Apollomedics Super Speciality Hospital, Lucknow",
  medicalSpecialty: "Neurology",
  alumniOf: [
    { "@type": "EducationalOrganization", name: "King George's Medical University, Lucknow" },
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

/* ── Root Layout ──────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable}`}
      style={{ fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)" }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[var(--color-bg)] text-[var(--color-ink)] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

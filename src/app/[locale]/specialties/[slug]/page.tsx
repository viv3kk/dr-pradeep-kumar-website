import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Connect } from "@/components/sections/Connect";

import { SpecialtyHero } from "@/components/specialty/SpecialtyHero";
import { OverviewBlock } from "@/components/specialty/OverviewBlock";
import { TopicBlock } from "@/components/specialty/TopicBlock";
import { CaregiverSection } from "@/components/specialty/CaregiverSection";
import { DrKumarsApproach } from "@/components/specialty/DrKumarsApproach";
import { PatientStoryCard } from "@/components/specialty/PatientStoryCard";
import { LivingWell } from "@/components/specialty/LivingWell";
import { SpecialtyFAQ } from "@/components/specialty/SpecialtyFAQ";
import { SpecialtyMidCTA } from "@/components/specialty/SpecialtyMidCTA";
import { FloatingBookButton } from "@/components/specialty/FloatingBookButton";
import { ComingSoonBanner } from "@/components/specialty/ComingSoonBanner";

import { SPECIALTIES, getSpecialty, t } from "@/lib/specialties-data";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";
import { buildLocaleMetadata, localeUrl, SITE_URL } from "@/lib/seo";

/* ── Static generation for every (locale, slug) combo ─────── */
export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    SPECIALTIES.map((s) => ({ locale, slug: s.slug }))
  );
}

/* ── Per-page metadata ─────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const specialty = getSpecialty(slug);
  if (!specialty) return {};

  const name = t(specialty.name, locale);
  const overview = t(specialty.overview, locale);
  const base = buildLocaleMetadata(locale, `/specialties/${slug}`);

  return {
    title: `${name} — Dr. Pradeep Kumar Neurology`,
    description: overview.slice(0, 160),
    ...base,
    openGraph: {
      ...base.openGraph,
      title: `${name} — Dr. Pradeep Kumar`,
      description: overview.slice(0, 200),
    },
  };
}

/* ── Page ──────────────────────────────────────────────────── */
export default async function SpecialtyPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const specialty = getSpecialty(slug);
  if (!specialty) {
    notFound();
  }
  /* notFound() throws; this cast lets the rest of the file
     be strictly typed even when `next/navigation` types
     aren't picked up in some environments. */
  const s = specialty as NonNullable<typeof specialty>;

  const isStub = s.comingSoon === true;

  /* ── JSON-LD: MedicalSpecialty + BreadcrumbList ───────────── */
  const url = localeUrl(locale, `/specialties/${slug}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalSpecialty",
        "@id": url,
        name: t(s.name, locale),
        description: t(s.overview, locale),
        inLanguage: locale,
        url,
        relevantSpecialty: { "@type": "MedicalSpecialty", name: "Neurology" },
        provider: {
          "@type": "Physician",
          name: "Dr. Pradeep Kumar",
          medicalSpecialty: "Neurology",
          url: SITE_URL,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: localeUrl(locale, "/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: locale === "hi" ? "विशेषज्ञताएँ" : "Specialties",
            item: localeUrl(locale, "/specialties"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: t(s.name, locale),
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <SpecialtyHero specialty={s} />

        {isStub ? (
          <ComingSoonBanner />
        ) : (
          <>
            <OverviewBlock specialty={s} />

            {/* Each topic gets the full empathy framework */}
            {s.topics.map((topic, idx) => (
              <TopicBlock
                key={topic.slug}
                topic={topic}
                color={s.color}
                index={idx}
              />
            ))}

            {/* Soft mid-page CTA after the clinical content */}
            <SpecialtyMidCTA color={s.color} />

            <CaregiverSection content={s.caregiverSection} />

            <DrKumarsApproach
              content={s.drKumarsApproach}
              color={s.color}
            />

            <PatientStoryCard story={s.patientStory} color={s.color} />

            <LivingWell tips={s.livingWell} color={s.color} />

            <SpecialtyFAQ faqs={s.faqs} color={s.color} />
          </>
        )}

        {/* Reuse homepage Connect form for consistent booking UX */}
        <Connect />
      </main>
      <Footer />
      <FloatingBookButton />
    </>
  );
}

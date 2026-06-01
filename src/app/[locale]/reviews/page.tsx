import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Star } from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Connect } from "@/components/sections/Connect";
import { GoogleG } from "@/components/reviews/ReviewCard";
import { ReviewsWall } from "@/components/reviews/ReviewsWall";
import { FloatingBookButton } from "@/components/specialty/FloatingBookButton";

import { REVIEWS, REVIEW_STATS } from "@/lib/reviews-data";
import { buildLocaleMetadata, localeUrl, SITE_URL } from "@/lib/seo";
import { routing, type Locale } from "@/i18n/routing";

const PROFILE_LINK =
  "https://www.google.com/search?q=dr+pradeep+kumar+neurologist";

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
  const isHi = locale === "hi";
  return {
    title: isHi
      ? "मरीज़ों की समीक्षाएँ — डॉ. प्रदीप कुमार न्यूरोलॉजी"
      : "Patient Reviews — Dr. Pradeep Kumar Neurology",
    description: isHi
      ? `डॉ. प्रदीप कुमार के लिए ${REVIEW_STATS.count} सत्यापित Google समीक्षाएँ, ${REVIEW_STATS.rating}★ औसत रेटिंग — स्ट्रोक, मिर्गी, माइग्रेन और अधिक।`
      : `Read ${REVIEW_STATS.count} verified Google reviews for Dr. Pradeep Kumar, rated ${REVIEW_STATS.rating}★ on average — stroke, epilepsy, migraine and more.`,
    ...buildLocaleMetadata(locale, "/reviews"),
  };
}

/* ── Page ──────────────────────────────────────────────────── */
export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isHi = locale === "hi";

  /* ── JSON-LD: Physician with AggregateRating + Review list ── */
  const url = localeUrl(locale, "/reviews");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${SITE_URL}#physician`,
    name: "Dr. Pradeep Kumar",
    medicalSpecialty: "Neurology",
    url: SITE_URL,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: REVIEW_STATS.rating,
      reviewCount: REVIEW_STATS.count,
      bestRating: "5",
      worstRating: "1",
    },
    review: REVIEWS.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: r.text,
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isHi ? "होम" : "Home",
        item: localeUrl(locale, "/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isHi ? "मरीज़ों की समीक्षाएँ" : "Patient Reviews",
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-20"
          style={{
            background:
              "linear-gradient(to bottom, #FDF3EE 0%, #FAF1EC 55%, #FAF8F5 100%)",
          }}
          aria-label={isHi ? "मरीज़ों की समीक्षाएँ" : "Patient reviews"}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -left-24 h-[460px] w-[460px] rounded-full blur-[100px]"
            style={{ backgroundColor: "rgba(232,113,74,0.10)" }}
          />
          <div className="relative mx-auto max-w-[820px] px-6 text-center md:px-10">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F0E0D8] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#C2410C]">
              <GoogleG size={14} />
              {isHi ? "सत्यापित Google समीक्षाएँ" : "Verified Google reviews"}
            </span>

            <h1
              className={`font-serif text-[clamp(32px,5.5vw,56px)] font-bold leading-[1.08] tracking-tight text-[#1C1917] ${
                isHi ? "font-hi" : ""
              }`}
              style={{
                fontFamily: isHi
                  ? "var(--font-noto-hi)"
                  : "var(--font-fraunces, 'Fraunces', serif)",
              }}
            >
              {isHi ? (
                <>
                  असली मरीज़,{" "}
                  <em className="not-italic text-[#E8714A]">असली देखभाल।</em>
                </>
              ) : (
                <>
                  In their own words,{" "}
                  <em className="text-[#E8714A]" style={{ fontStyle: "italic" }}>
                    in their own time.
                  </em>
                </>
              )}
            </h1>

            <p
              className={`mx-auto mt-5 max-w-[560px] text-[16px] leading-relaxed text-[#57534E] ${
                isHi ? "font-hi lang-hi" : ""
              }`}
            >
              {isHi
                ? "लखनऊ और कानपुर के परिवारों की कहानियाँ — स्ट्रोक, मिर्गी, माइग्रेन और तंत्रिका तंत्र की देखभाल पर। हर समीक्षा Google पर सत्यापित है।"
                : "Stories from families across Lucknow & Kanpur — on stroke, epilepsy, migraine and the full nervous system. Every review here is verified on Google."}
            </p>

            {/* Aggregate stat block */}
            <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-2xl border border-[#ECE7E1] bg-white px-6 py-4 shadow-[0_2px_12px_rgba(28,25,23,0.05)]">
              <span className="font-serif text-[40px] font-bold leading-none text-[#1C1917]">
                {REVIEW_STATS.rating}
              </span>
              <div className="text-left">
                <div
                  className="flex"
                  aria-label={`${REVIEW_STATS.rating} out of 5 stars`}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-[#FBBF24] text-[#FBBF24]"
                    />
                  ))}
                </div>
                <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-[#A8A29E]">
                  <GoogleG size={13} />
                  {isHi
                    ? `${REVIEW_STATS.count} सत्यापित समीक्षाएँ`
                    : `${REVIEW_STATS.count} verified reviews`}
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className={`inline-flex items-center justify-center rounded-full bg-[#E8714A] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(232,113,74,0.28)] transition-colors hover:bg-[#D45E38] ${
                  isHi ? "font-hi" : ""
                }`}
              >
                {isHi ? "अपॉइंटमेंट बुक करें" : "Book a consultation"}
              </a>
              <a
                href={PROFILE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full border border-[#E7E5E4] bg-white px-6 py-3 text-sm font-semibold text-[#1C1917] transition-colors hover:border-[#1C1917] ${
                  isHi ? "font-hi" : ""
                }`}
              >
                <GoogleG size={15} />
                {isHi ? "Google पर समीक्षा लिखें" : "Write a review on Google"}
              </a>
            </div>
          </div>
        </section>

        <ReviewsWall />

        {/* Reuse homepage Connect form for consistent booking UX */}
        <Connect />
      </main>
      <Footer />
      <FloatingBookButton />
    </>
  );
}

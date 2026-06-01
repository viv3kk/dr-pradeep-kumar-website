import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Hourglass, Sparkles, HeartPulse, Quote } from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Connect } from "@/components/sections/Connect";
import { GoogleG } from "@/components/reviews/ReviewCard";
import { FloatingBookButton } from "@/components/specialty/FloatingBookButton";

import { Link } from "@/i18n/navigation";
import { REVIEW_STATS } from "@/lib/reviews-data";
import { buildLocaleMetadata, localeUrl } from "@/lib/seo";
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
  const isHi = locale === "hi";
  return {
    title: isHi
      ? "मरीज़ों की कहानियाँ — डॉ. प्रदीप कुमार न्यूरोलॉजी"
      : "Patient Success Stories — Dr. Pradeep Kumar Neurology",
    description: isHi
      ? "डॉ. प्रदीप कुमार के मरीज़ों की विस्तृत रिकवरी कहानियाँ जल्द आ रही हैं। तब तक सत्यापित मरीज़ समीक्षाएँ पढ़ें।"
      : "In-depth recovery stories from Dr. Pradeep Kumar's patients are coming soon. In the meantime, read verified patient reviews.",
    ...buildLocaleMetadata(locale, "/success-stories"),
  };
}

/* ── Page ──────────────────────────────────────────────────── */
export default async function SuccessStoriesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isHi = locale === "hi";

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
        name: isHi ? "मरीज़ों की कहानियाँ" : "Patient Success Stories",
        item: localeUrl(locale, "/success-stories"),
      },
    ],
  };

  return (
    <>
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
          aria-label={isHi ? "मरीज़ों की कहानियाँ" : "Patient success stories"}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -right-24 h-[460px] w-[460px] rounded-full blur-[100px]"
            style={{ backgroundColor: "rgba(232,113,74,0.10)" }}
          />
          <div className="relative mx-auto max-w-[760px] px-6 text-center md:px-10">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F0E0D8] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#C2410C]">
              <Sparkles size={14} />
              {isHi ? "जल्द आ रहा है" : "Coming soon"}
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
                  रिकवरी की{" "}
                  <em className="not-italic text-[#E8714A]">सच्ची कहानियाँ।</em>
                </>
              ) : (
                <>
                  Real journeys of{" "}
                  <em className="text-[#E8714A]" style={{ fontStyle: "italic" }}>
                    recovery.
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
                ? "हम मरीज़ों और परिवारों की विस्तृत रिकवरी कहानियाँ — स्ट्रोक, मिर्गी, पार्किंसन और अधिक पर — सावधानी और सहमति के साथ तैयार कर रहे हैं। बहुत जल्द यहाँ आ रही हैं।"
                : "We're carefully putting together in-depth recovery stories from patients and families — on stroke, epilepsy, Parkinson's and more — shared with care and consent. They'll be here very soon."}
            </p>
          </div>
        </section>

        {/* ── Coming-soon body ─────────────────────────────── */}
        <section className="bg-[#FAF8F5] pb-20">
          <div className="mx-auto max-w-[760px] px-6 md:px-10">
            <div className="rounded-3xl border border-[#ECE7E1] bg-white p-8 text-center shadow-[0_2px_16px_rgba(28,25,23,0.05)] md:p-12">
              <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#E7E5E4] bg-[#FAF8F5]">
                <Hourglass className="text-[#E8714A]" size={22} />
              </div>
              <h2
                className={`font-serif text-[24px] font-bold leading-tight text-[#1C1917] md:text-[30px] ${
                  isHi ? "font-hi" : ""
                }`}
                style={{
                  fontFamily: isHi
                    ? "var(--font-noto-hi)"
                    : "var(--font-fraunces, 'Fraunces', serif)",
                }}
              >
                {isHi ? "यह पन्ना तैयार हो रहा है" : "This page is on its way"}
              </h2>
              <p
                className={`mx-auto mt-4 max-w-[520px] text-[15.5px] leading-relaxed text-[#57534E] ${
                  isHi ? "font-hi lang-hi" : ""
                }`}
              >
                {isHi
                  ? "तब तक, डॉ. कुमार के मरीज़ों की असली, सत्यापित समीक्षाएँ पढ़ें — या सीधे अपॉइंटमेंट बुक करें।"
                  : "In the meantime, read real, verified reviews from Dr. Kumar's patients — or book a consultation directly."}
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/reviews"
                  className={`inline-flex items-center gap-2 rounded-full bg-[#E8714A] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(232,113,74,0.28)] transition-colors hover:bg-[#D45E38] ${
                    isHi ? "font-hi" : ""
                  }`}
                >
                  <GoogleG size={15} />
                  {isHi
                    ? `${REVIEW_STATS.count} मरीज़ समीक्षाएँ पढ़ें`
                    : `Read ${REVIEW_STATS.count} patient reviews`}
                </Link>
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 rounded-full border border-[#E7E5E4] bg-white px-6 py-3 text-sm font-semibold text-[#1C1917] transition-colors hover:border-[#1C1917] ${
                    isHi ? "font-hi" : ""
                  }`}
                >
                  <HeartPulse size={15} className="text-[#E8714A]" />
                  {isHi ? "अपॉइंटमेंट बुक करें" : "Book a consultation"}
                </a>
              </div>

              {/* Subtle teaser of what's coming */}
              <div className="mt-10 border-t border-[#F0EDE8] pt-8">
                <p
                  className={`mb-5 text-xs font-semibold uppercase tracking-widest text-[#A8A29E] ${
                    isHi ? "font-hi" : ""
                  }`}
                >
                  {isHi ? "क्या उम्मीद करें" : "What to expect"}
                </p>
                <div className="grid gap-4 text-left sm:grid-cols-3">
                  {(isHi
                    ? [
                        "विस्तृत रिकवरी कहानियाँ, मरीज़ की सहमति से",
                        "लक्षण से निदान और इलाज तक का सफ़र",
                        "स्ट्रोक, मिर्गी, पार्किंसन और अधिक",
                      ]
                    : [
                        "In-depth recovery stories, shared with consent",
                        "From first symptom to diagnosis and treatment",
                        "Stroke, epilepsy, Parkinson's and more",
                      ]
                  ).map((item, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-[#F0EDE8] bg-[#FAF8F5] p-4"
                    >
                      <Quote size={18} className="mb-2 text-[#E8714A]" />
                      <p
                        className={`text-[13.5px] leading-snug text-[#57534E] ${
                          isHi ? "font-hi" : ""
                        }`}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reuse homepage Connect form for consistent booking UX */}
        <Connect />
      </main>
      <Footer />
      <FloatingBookButton />
    </>
  );
}

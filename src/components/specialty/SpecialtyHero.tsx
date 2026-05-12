"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { CalendarDays, ChevronRight } from "lucide-react";
import { t, type Specialty } from "@/lib/specialties-data";
import { COLORS } from "@/lib/specialty-colors";
import { SpecialtyIcon } from "./SpecialtyIcon";
import { LotusDivider } from "./LotusDivider";
import { TrustIcon } from "./icons/TrustIcons";
import type { Locale } from "@/i18n/routing";

export function SpecialtyHero({ specialty }: { specialty: Specialty }) {
  const locale = useLocale() as Locale;
  const tNav = useTranslations("nav");
  const c = COLORS[specialty.color];
  const isHi = locale === "hi";
  const image = specialty.hero.image;
  const trustPoints = specialty.hero.trustPoints ?? [];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToOverview = () => {
    document
      .getElementById("overview")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* ── With hero image: 2-column poster (desktop) / stacked (mobile) ── */
  if (image) {
    return (
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: c.bgDeep }}
        aria-label={t(specialty.hero.eyebrow, locale)}
      >
        {/* ── Mobile-only image (full-width at the top of section) ─── */}
        <div className="relative w-full h-[58vh] min-h-[380px] max-h-[520px] md:hidden">
          <Image
            src={image.mobile ?? image.desktop}
            alt={t(image.alt, locale)}
            fill
            priority
            /* `md:hidden` removes this image from layout at ≥768px, so
               we hint to the optimiser that beyond that breakpoint the
               rendered width is effectively 0. */
            sizes="(max-width: 767px) 100vw, 1px"
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-24"
            style={{
              background: `linear-gradient(to bottom, transparent 0%, ${c.bgDeep} 100%)`,
            }}
          />
        </div>

        {/* ── Aligned content container (matches the rest of the site grid) ── */}
        <div className="max-w-[1120px] mx-auto md:grid md:grid-cols-[1fr_42%] lg:grid-cols-[1fr_40%]">
          {/* Text column — uses same px-6 md:px-10 padding as every other section */}
          <div className="px-6 md:px-10 pt-10 md:pt-[140px] pb-12 md:pb-16 flex items-center">
            <div className="max-w-[600px] w-full">
              {/* Badge */}
              <div className="mb-7 md:mb-8">
                <span
                  className="inline-flex items-center gap-2 bg-white border rounded-full pl-3 pr-4 py-2 text-xs font-semibold tracking-widest uppercase shadow-[0_2px_12px_rgba(28,25,23,0.06)]"
                  style={{ color: c.tag, borderColor: c.border }}
                >
                  <span
                    className="inline-flex items-center justify-center w-6 h-6 rounded-full"
                    style={{ backgroundColor: c.bg, color: c.tag }}
                  >
                    <SpecialtyIcon
                      slug={specialty.slug}
                      size={16}
                      color={c.tag}
                    />
                  </span>
                  <span className={isHi ? "font-hi" : ""}>
                    {t(specialty.hero.eyebrow, locale)}
                  </span>
                </span>
              </div>

              {/* Headline */}
              <h1
                className={`font-serif text-[clamp(30px,5vw,54px)] font-bold leading-[1.06] tracking-tight text-[#1C1917] mb-6 ${
                  isHi ? "font-hi" : ""
                }`}
                style={{
                  fontFamily: isHi
                    ? "var(--font-noto-hi)"
                    : "var(--font-fraunces, 'Fraunces', serif)",
                }}
              >
                {t(specialty.hero.tagline, locale)}
              </h1>

              {/* Lotus divider */}
              <LotusDivider color={c.tag} className="mb-6" />

              {/* Support text */}
              <p
                className={`text-[16px] md:text-[17px] text-[#3F3A36] leading-relaxed mb-8 ${
                  isHi ? "font-hi lang-hi" : ""
                }`}
              >
                {t(specialty.hero.supportLine, locale)}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <button
                  onClick={scrollToContact}
                  className="flex items-center justify-center gap-2 text-white font-semibold text-base px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  style={{
                    backgroundColor: c.tag,
                    boxShadow: `0 4px 20px ${c.tag}55`,
                  }}
                >
                  <CalendarDays size={18} />
                  {tNav("bookVisit")}
                </button>
                <button
                  onClick={scrollToOverview}
                  className="flex items-center justify-center gap-2 text-[#1C1917] font-semibold text-base px-7 py-3.5 rounded-full bg-white border-2 border-[#E7E5E4] hover:border-[#1C1917] transition-all duration-200 cursor-pointer shadow-[0_2px_12px_rgba(28,25,23,0.04)]"
                >
                  {locale === "hi" ? "और जानें" : "Read on"}
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Trust strip */}
              {trustPoints.length > 0 && (
                <div
                  className="pt-6 border-t"
                  style={{ borderColor: `${c.tag}26` }}
                >
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-5">
                    {trustPoints.map((tp, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5"
                        style={{ color: c.tag }}
                      >
                        <TrustIcon
                          iconKey={tp.iconKey}
                          size={26}
                          className="flex-shrink-0 mt-0.5"
                        />
                        <p
                          className={`text-[11px] font-semibold leading-snug text-[#1C1917] whitespace-pre-line ${
                            isHi ? "font-hi" : ""
                          }`}
                        >
                          {t(tp.label, locale)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop image column — sits at the right edge of the centered container.
             On wide screens, the peach section background extends past the image to
             the viewport edge. We add a left-edge fade where the image meets the text
             column, and a matching right-edge fade so the image visually melts into
             the peach extension instead of cutting off in a hard vertical seam. */}
          <div className="hidden md:block relative self-stretch min-h-[640px] overflow-hidden">
            <Image
              src={image.desktop}
              alt={t(image.alt, locale)}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, (min-width: 768px) 42vw, 1px"
              className="object-cover object-center"
            />
            {/* Left fade — image → peach text background */}
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-20"
              style={{
                background: `linear-gradient(to right, ${c.bgDeep} 0%, transparent 100%)`,
              }}
            />
            {/* Right fade — image → peach extension beyond container */}
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-0 w-24"
              style={{
                background: `linear-gradient(to left, ${c.bgDeep} 0%, transparent 100%)`,
              }}
            />
          </div>
        </div>
      </section>
    );
  }

  /* ── Fallback: text-only hero (for specialties without an image) ── */
  return (
    <section
      className="relative pt-[120px] pb-20 md:pt-[140px] md:pb-24 overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, ${c.bgDeep} 0%, ${c.bg} 60%, var(--color-bg) 100%)`,
      }}
      aria-label={t(specialty.hero.eyebrow, locale)}
    >
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none animate-[driftOrb_14s_ease-in-out_infinite_alternate]"
        style={{ backgroundColor: `${c.tag}1A` }}
      />
      <div
        aria-hidden="true"
        className="absolute top-10 -right-20 w-[400px] h-[400px] rounded-full blur-[80px] pointer-events-none animate-[driftOrb_18s_ease-in-out_infinite_alternate-reverse]"
        style={{ backgroundColor: `${c.tag}14` }}
      />

      <div className="relative max-w-[1120px] mx-auto px-6 md:px-10 text-center">
        <div
          className="mx-auto mb-6 inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white"
          style={{
            border: `1px solid ${c.border}`,
            boxShadow: `0 6px 24px ${c.tag}26`,
          }}
        >
          <SpecialtyIcon slug={specialty.slug} size={44} color={c.tag} />
        </div>

        <div className="mb-7">
          <span
            className="inline-flex items-center gap-2 border rounded-full px-5 py-2 text-xs font-semibold tracking-widest uppercase bg-white"
            style={{ color: c.tag, borderColor: c.border }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full breathe"
              style={{ backgroundColor: c.dot }}
              aria-hidden="true"
            />
            <span className={isHi ? "font-hi" : ""}>
              {t(specialty.hero.eyebrow, locale)}
            </span>
          </span>
        </div>

        <h1
          className={`font-serif text-[clamp(34px,5.5vw,58px)] font-bold leading-[1.1] tracking-tight mb-6 ${
            isHi ? "font-hi" : ""
          }`}
          style={{
            fontFamily: isHi
              ? "var(--font-noto-hi)"
              : "var(--font-fraunces, 'Fraunces', serif)",
            color: "#1C1917",
          }}
        >
          {t(specialty.hero.tagline, locale)}
        </h1>

        <p
          className={`text-[17px] md:text-[19px] text-[#57534E] max-w-[640px] mx-auto leading-relaxed mb-10 ${
            isHi ? "font-hi lang-hi" : ""
          }`}
        >
          {t(specialty.hero.supportLine, locale)}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={scrollToContact}
            className="flex items-center justify-center gap-2 text-white font-semibold text-base px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            style={{
              backgroundColor: c.tag,
              boxShadow: `0 4px 20px ${c.tag}55`,
            }}
          >
            <CalendarDays size={18} />
            {tNav("bookVisit")}
          </button>
          <button
            onClick={scrollToOverview}
            className="flex items-center justify-center gap-2 text-[#1C1917] font-semibold text-base px-7 py-3.5 rounded-full border-2 border-[#E7E5E4] hover:border-[#1C1917] transition-all duration-200 cursor-pointer bg-white/70 backdrop-blur"
          >
            {locale === "hi" ? "और जानें" : "Read on"}
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

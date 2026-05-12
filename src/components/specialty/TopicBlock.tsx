"use client";

import { useLocale, useTranslations } from "next-intl";
import { Eye, HeartPulse, Stethoscope } from "lucide-react";
import { t, tList, type Topic } from "@/lib/specialties-data";
import { COLORS } from "@/lib/specialty-colors";
import { WarningIcon } from "@/components/icons/MedicalIcons";
import type { SpecialtyColor } from "@/lib/specialties-data";
import type { Locale } from "@/i18n/routing";

interface Props {
  topic: Topic;
  color: SpecialtyColor;
  index: number;
}

export function TopicBlock({ topic, color, index }: Props) {
  const locale = useLocale() as Locale;
  const tPage = useTranslations("page");
  const c = COLORS[color];
  const isHi = locale === "hi";

  return (
    <article
      id={topic.slug}
      className="py-20 md:py-24 scroll-mt-24"
      style={{
        backgroundColor: index % 2 === 0 ? "var(--color-bg)" : "white",
      }}
      aria-labelledby={`${topic.slug}-heading`}
    >
      <div className="max-w-[860px] mx-auto px-6 md:px-10">
        {/* Section number + name */}
        <div className="flex items-baseline gap-4 mb-3">
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: c.tag }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div
            className="h-px flex-1"
            style={{ backgroundColor: c.border }}
            aria-hidden="true"
          />
        </div>

        <h2
          id={`${topic.slug}-heading`}
          className={`font-serif text-[clamp(28px,4.2vw,42px)] font-bold text-[#1C1917] leading-[1.15] mb-4 ${
            isHi ? "font-hi" : ""
          }`}
          style={{
            fontFamily: isHi
              ? "var(--font-noto-hi)"
              : "var(--font-fraunces, 'Fraunces', serif)",
          }}
        >
          {t(topic.name, locale)}
        </h2>

        {/* Topic intro */}
        <p
          className={`text-[17px] text-[#57534E] leading-relaxed mb-12 max-w-[700px] ${
            isHi ? "font-hi lang-hi" : ""
          }`}
          style={{ fontStyle: isHi ? "normal" : "italic" }}
        >
          {t(topic.intro, locale)}
        </p>

        {/* ── Could this be you? ────────────────────────── */}
        <SubSection
          icon={<Eye size={20} />}
          title={tPage("couldThisBeYou")}
          color={c}
          isHi={isHi}
        >
          <ul className={`grid gap-3 ${isHi ? "lang-hi" : ""}`}>
            {tList(topic.couldThisBeYou, locale).map((bullet, i) => (
              <li
                key={i}
                className="flex gap-3 text-[16px] leading-relaxed text-[#3F3A36]"
              >
                <span
                  className="inline-block flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2.5"
                  style={{ backgroundColor: c.dot }}
                  aria-hidden="true"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </SubSection>

        {/* ── What it feels like ────────────────────────── */}
        <SubSection
          icon={<HeartPulse size={20} />}
          title={tPage("whatItFeelsLike")}
          color={c}
          isHi={isHi}
        >
          <p
            className={`text-[16px] leading-[1.75] text-[#3F3A36] ${
              isHi ? "lang-hi" : ""
            }`}
          >
            {t(topic.whatItFeelsLike, locale)}
          </p>
        </SubSection>

        {/* ── What's happening inside ───────────────────── */}
        <SubSection
          icon={<Stethoscope size={20} />}
          title={tPage("whatsHappening")}
          color={c}
          isHi={isHi}
        >
          <p
            className={`text-[16px] leading-[1.75] text-[#3F3A36] ${
              isHi ? "lang-hi" : ""
            }`}
          >
            {t(topic.whatsHappening, locale)}
          </p>
        </SubSection>

        {/* ── Red flags ─────────────────────────────────── */}
        <div
          className="mt-8 rounded-2xl border p-7"
          style={{
            backgroundColor: "#FEF2F2",
            borderColor: "#FCA5A5",
          }}
        >
          <div className="flex items-start gap-3 mb-2">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
              style={{ backgroundColor: "#FCA5A540", color: "#B91C1C" }}
              aria-hidden="true"
            >
              <WarningIcon size={22} />
            </span>
            <h4
              className={`font-serif text-[18px] md:text-[20px] font-bold text-[#7F1D1D] leading-snug pt-1.5 ${
                isHi ? "font-hi" : ""
              }`}
              style={{
                fontFamily: isHi
                  ? "var(--font-noto-hi)"
                  : "var(--font-fraunces, 'Fraunces', serif)",
              }}
            >
              {tPage("redFlags")}
            </h4>
          </div>
          <p
            className={`text-sm text-[#7F1D1D] mb-5 pl-[52px] ${
              isHi ? "font-hi lang-hi" : ""
            }`}
          >
            {tPage("redFlagsLead")}
          </p>
          <ul className={`grid gap-3 ${isHi ? "lang-hi" : ""}`}>
            {tList(topic.redFlags, locale).map((rf, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-[15px] leading-relaxed text-[#7F1D1D]"
              >
                <span
                  className="inline-flex items-center justify-center w-6 h-6 rounded-md flex-shrink-0 mt-0.5"
                  style={{ color: "#B91C1C" }}
                  aria-hidden="true"
                >
                  <WarningIcon size={16} />
                </span>
                <span>{rf}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── How Dr. Kumar treats it ───────────────────── */}
        <SubSection
          icon={<span className="text-xl">{"🩺"}</span>}
          title={tPage("howDrKumarTreats")}
          color={c}
          isHi={isHi}
        >
          <p
            className={`text-[16px] leading-[1.75] text-[#3F3A36] ${
              isHi ? "lang-hi" : ""
            }`}
          >
            {t(topic.howDrKumarTreats, locale)}
          </p>
        </SubSection>
      </div>
    </article>
  );
}

/* ── Internal sub-section shell ────────────────────────────── */
function SubSection({
  icon,
  title,
  color,
  isHi,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  color: { tag: string; bg: string; border: string };
  isHi: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8">
      <div className="flex items-center gap-2.5 mb-3.5">
        <span
          className="inline-flex items-center justify-center w-9 h-9 rounded-full"
          style={{ backgroundColor: color.bg, color: color.tag }}
          aria-hidden="true"
        >
          {icon}
        </span>
        <h3
          className={`font-serif text-[20px] md:text-[22px] font-bold text-[#1C1917] ${
            isHi ? "font-hi" : ""
          }`}
          style={{
            fontFamily: isHi
              ? "var(--font-noto-hi)"
              : "var(--font-fraunces, 'Fraunces', serif)",
          }}
        >
          {title}
        </h3>
      </div>
      <div className="pl-11">{children}</div>
    </section>
  );
}

"use client";

import { useLocale, useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { SPECIALTIES, t } from "@/lib/specialties-data";
import { COLORS } from "@/lib/specialty-colors";
import { SpecialtyIcon } from "./SpecialtyIcon";
import type { Locale } from "@/i18n/routing";

export function SpecialtiesIndexGrid() {
  const locale = useLocale() as Locale;
  const tIdx = useTranslations("specialtiesIndex");
  const isHi = locale === "hi";

  return (
    <section
      className="pt-[120px] pb-20 md:pt-[140px] md:pb-28 bg-gradient-to-b from-[#FFF4EE] via-[#FAF8F5] to-[#FAF8F5]"
      aria-labelledby="specialties-index-heading"
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#E8714A] mb-4">
            {tIdx("eyebrow")}
          </span>
          <h1
            id="specialties-index-heading"
            className={`font-serif text-[clamp(34px,5.5vw,60px)] font-bold text-[#1C1917] leading-[1.08] mb-5 ${
              isHi ? "font-hi" : ""
            }`}
            style={{
              fontFamily: isHi
                ? "var(--font-noto-hi)"
                : "var(--font-fraunces, 'Fraunces', serif)",
            }}
          >
            {tIdx("title")}{" "}
            <em
              style={{
                fontStyle: isHi ? "normal" : "italic",
                color: "#E8714A",
              }}
            >
              {tIdx("titleEm")}
            </em>
          </h1>
          <p
            className={`text-[17px] md:text-[18px] text-[#57534E] leading-relaxed ${
              isHi ? "font-hi lang-hi" : ""
            }`}
          >
            {tIdx("subtitle")}
          </p>
        </div>

        {/* Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SPECIALTIES.map((s) => {
            const c = COLORS[s.color];
            return (
              <li key={s.slug}>
                <Link
                  href={`/specialties/${s.slug}`}
                  className="group block rounded-3xl border p-7 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,25,23,0.10)]"
                  style={{ backgroundColor: c.bg, borderColor: c.border }}
                >
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <span
                      className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white"
                      style={{ border: `1px solid ${c.border}` }}
                      role="img"
                      aria-label={t(s.name, locale)}
                    >
                      <SpecialtyIcon slug={s.slug} size={32} color={c.tag} />
                    </span>
                    {s.comingSoon ? (
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white border"
                        style={{ borderColor: c.border, color: c.tag }}
                      >
                        {isHi ? "जल्द" : "Soon"}
                      </span>
                    ) : (
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white"
                        style={{ backgroundColor: c.tag }}
                      >
                        {isHi ? "उपलब्ध" : "Now open"}
                      </span>
                    )}
                  </div>

                  <h2
                    className={`font-serif text-[22px] font-bold text-[#1C1917] leading-tight mb-3 ${
                      isHi ? "font-hi" : ""
                    }`}
                    style={{
                      fontFamily: isHi
                        ? "var(--font-noto-hi)"
                        : "var(--font-fraunces, 'Fraunces', serif)",
                    }}
                  >
                    {t(s.name, locale)}
                  </h2>

                  {!s.comingSoon && s.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {s.topics.map((tp) => (
                        <span
                          key={tp.slug}
                          className={`text-[11px] font-medium px-2.5 py-1 rounded-full bg-white border ${
                            isHi ? "font-hi" : ""
                          }`}
                          style={{ borderColor: c.border, color: "#57534E" }}
                        >
                          {t(tp.name, locale)}
                        </span>
                      ))}
                    </div>
                  )}

                  <span
                    className={`flex items-center gap-1.5 text-sm font-semibold mt-auto group-hover:gap-2.5 transition-all ${
                      isHi ? "font-hi" : ""
                    }`}
                    style={{ color: c.tag }}
                  >
                    {tIdx("exploreCta")}
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

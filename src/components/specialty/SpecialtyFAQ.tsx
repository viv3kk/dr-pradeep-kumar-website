"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { t, type FAQ } from "@/lib/specialties-data";
import { COLORS } from "@/lib/specialty-colors";
import type { SpecialtyColor } from "@/lib/specialties-data";
import type { Locale } from "@/i18n/routing";

interface Props {
  faqs: FAQ[];
  color: SpecialtyColor;
}

export function SpecialtyFAQ({ faqs, color }: Props) {
  const locale = useLocale() as Locale;
  const tPage = useTranslations("page");
  const c = COLORS[color];
  const isHi = locale === "hi";

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  if (!faqs.length) return null;

  return (
    <section
      className="py-20 md:py-24 bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-10">
        <h2
          id="faq-heading"
          className={`font-serif text-[clamp(26px,3.8vw,40px)] font-bold text-[#1C1917] leading-tight mb-10 text-center ${
            isHi ? "font-hi" : ""
          }`}
          style={{
            fontFamily: isHi
              ? "var(--font-noto-hi)"
              : "var(--font-fraunces, 'Fraunces', serif)",
          }}
        >
          {tPage("faqs")}
        </h2>

        <ul className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <li
                key={idx}
                className="rounded-2xl border bg-[#FAF8F5] overflow-hidden"
                style={{ borderColor: isOpen ? c.border : "#E7E5E4" }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 py-5 flex items-start gap-4 cursor-pointer hover:bg-white transition-colors"
                >
                  <span
                    className={`flex-1 font-serif text-[17px] md:text-[18px] font-bold text-[#1C1917] leading-snug ${
                      isHi ? "font-hi" : ""
                    }`}
                    style={{
                      fontFamily: isHi
                        ? "var(--font-noto-hi)"
                        : "var(--font-fraunces, 'Fraunces', serif)",
                    }}
                  >
                    {t(faq.q, locale)}
                  </span>
                  <ChevronDown
                    size={20}
                    className="flex-shrink-0 mt-1 transition-transform"
                    style={{
                      color: c.tag,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p
                      className={`text-[16px] leading-[1.75] text-[#3F3A36] ${
                        isHi ? "font-hi lang-hi" : ""
                      }`}
                    >
                      {t(faq.a, locale)}
                    </p>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

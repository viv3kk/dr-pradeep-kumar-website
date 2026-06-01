"use client";

import { useLocale, useTranslations } from "next-intl";
import { Sparkles } from "lucide-react";
import { tList, type BilingualList } from "@/lib/specialties-data";
import { COLORS } from "@/lib/specialty-colors";
import type { SpecialtyColor } from "@/lib/specialties-data";
import type { Locale } from "@/i18n/routing";

interface Props {
  tips: BilingualList;
  color: SpecialtyColor;
}

export function LivingWell({ tips, color }: Props) {
  const locale = useLocale() as Locale;
  const tPage = useTranslations("page");
  const c = COLORS[color];
  const isHi = locale === "hi";
  const items = tList(tips, locale);

  if (!items.length) return null;

  return (
    <section
      className="py-20 md:py-24 bg-[#FAF8F5]"
      aria-labelledby="living-well-heading"
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-2.5 mb-3 justify-center">
          <Sparkles size={18} style={{ color: c.tag }} aria-hidden="true" />
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: c.tag }}
          >
            {isHi ? "रोज़मर्रा की बातें" : "Daily wisdom"}
          </span>
        </div>
        <h2
          id="living-well-heading"
          className={`font-serif text-[clamp(26px,3.6vw,38px)] font-bold text-[#1C1917] leading-tight mb-12 text-center ${
            isHi ? "font-hi" : ""
          }`}
          style={{
            fontFamily: isHi
              ? "var(--font-noto-hi)"
              : "var(--font-fraunces, 'Fraunces', serif)",
          }}
        >
          {tPage("livingWell")}
        </h2>

        <ul className="grid sm:grid-cols-2 gap-4">
          {items.map((tip, i) => (
            <li
              key={i}
              className="flex gap-4 bg-white rounded-2xl border border-[#E7E5E4] p-5"
            >
              <span
                className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-serif font-bold text-sm"
                style={{ backgroundColor: c.bg, color: c.tag }}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <p
                className={`text-[15px] leading-relaxed text-[#3F3A36] ${
                  isHi ? "font-hi lang-hi" : ""
                }`}
              >
                {tip}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

"use client";

import { useLocale } from "next-intl";
import { ClipboardList } from "lucide-react";
import { t, type Bilingual } from "@/lib/specialties-data";
import { COLORS } from "@/lib/specialty-colors";
import type { SpecialtyColor } from "@/lib/specialties-data";
import type { Locale } from "@/i18n/routing";
import { RichText } from "./RichText";

interface Props {
  content?: Bilingual;
  color: SpecialtyColor;
}

export function FirstConsultation({ content, color }: Props) {
  const locale = useLocale() as Locale;
  const c = COLORS[color];
  const isHi = locale === "hi";

  if (!content || !t(content, locale)) return null;

  return (
    <section className="py-20 md:py-24 bg-white" aria-labelledby="first-visit-heading">
      <div className="max-w-[1120px] mx-auto px-6 md:px-10">
        <div className="max-w-[820px] mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <span
              className="inline-flex items-center justify-center w-12 h-12 rounded-full"
              style={{ backgroundColor: c.bg, color: c.tag }}
              aria-hidden="true"
            >
              <ClipboardList size={22} />
            </span>
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: c.tag }}
            >
              {isHi ? "आपकी पहली विज़िट" : "Your first consultation"}
            </span>
          </div>

          <h2
            id="first-visit-heading"
            className={`font-serif text-[clamp(26px,3.6vw,38px)] font-bold text-[#1C1917] leading-tight mb-6 ${
              isHi ? "font-hi" : ""
            }`}
            style={{
              fontFamily: isHi
                ? "var(--font-noto-hi)"
                : "var(--font-fraunces, 'Fraunces', serif)",
            }}
          >
            {isHi ? "पहली बार क्या होगा" : "What to expect at your first visit"}
          </h2>

          <RichText
            text={t(content, locale)}
            paragraphClassName={`text-[16px] md:text-[17px] leading-[1.8] text-[#3F3A36] ${
              isHi ? "font-hi lang-hi" : ""
            }`}
          />
        </div>
      </div>
    </section>
  );
}

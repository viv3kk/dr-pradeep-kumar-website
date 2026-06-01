"use client";

import { useLocale } from "next-intl";
import { HeartHandshake } from "lucide-react";
import { t, type Bilingual } from "@/lib/specialties-data";
import { COLORS } from "@/lib/specialty-colors";
import type { SpecialtyColor } from "@/lib/specialties-data";
import type { Locale } from "@/i18n/routing";
import { RichText } from "./RichText";

interface Props {
  content?: Bilingual;
  color: SpecialtyColor;
}

/* Distinct, reassuring block addressing social stigma.
   Used for epilepsy, dementia, and Parkinson's. */
export function StigmaCallout({ content, color }: Props) {
  const locale = useLocale() as Locale;
  const c = COLORS[color];
  const isHi = locale === "hi";

  if (!content || !t(content, locale)) return null;

  return (
    <section className="py-12 md:py-16 bg-white" aria-label="A note on stigma">
      <div className="max-w-[1120px] mx-auto px-6 md:px-10">
        <div
          className="relative rounded-3xl border-2 p-8 md:p-12 max-w-[900px] mx-auto overflow-hidden"
          style={{ borderColor: c.border, backgroundColor: c.bg }}
        >
          <span
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white mb-6"
            style={{ color: c.tag, border: `1px solid ${c.border}` }}
            aria-hidden="true"
          >
            <HeartHandshake size={28} />
          </span>
          <RichText
            text={t(content, locale)}
            paragraphClassName={`font-serif text-[18px] md:text-[22px] leading-[1.6] text-[#1C1917] ${
              isHi ? "font-hi" : ""
            }`}
          />
        </div>
      </div>
    </section>
  );
}

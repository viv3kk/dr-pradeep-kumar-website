"use client";

import { useLocale, useTranslations } from "next-intl";
import { Heart } from "lucide-react";
import { t, type Bilingual } from "@/lib/specialties-data";
import type { Locale } from "@/i18n/routing";

interface Props {
  content: Bilingual;
}

export function CaregiverSection({ content }: Props) {
  const locale = useLocale() as Locale;
  const tPage = useTranslations("page");
  const isHi = locale === "hi";

  if (!t(content, locale)) return null;

  return (
    <section className="py-20 md:py-24 bg-[#FEF0EB]" aria-labelledby="caregivers-heading">
      <div className="max-w-[760px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-5">
          <span
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white"
            aria-hidden="true"
          >
            <Heart size={22} className="text-[#E8714A]" fill="#E8714A" />
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8714A]">
            {isHi ? "देखभाल करने वालों के लिए" : "For caregivers"}
          </span>
        </div>

        <h2
          id="caregivers-heading"
          className={`font-serif text-[clamp(26px,3.6vw,38px)] font-bold text-[#1C1917] leading-tight mb-6 ${
            isHi ? "font-hi" : ""
          }`}
          style={{
            fontFamily: isHi
              ? "var(--font-noto-hi)"
              : "var(--font-fraunces, 'Fraunces', serif)",
          }}
        >
          {tPage("forCaregivers")}
        </h2>

        <p
          className={`text-[17px] md:text-[18px] leading-[1.85] text-[#3F3A36] ${
            isHi ? "font-hi lang-hi" : ""
          }`}
        >
          {t(content, locale)}
        </p>
      </div>
    </section>
  );
}

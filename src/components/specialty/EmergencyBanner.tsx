"use client";

import { useLocale } from "next-intl";
import { AlertTriangle } from "lucide-react";
import { t, type Bilingual } from "@/lib/specialties-data";
import type { Locale } from "@/i18n/routing";
import { RichText } from "./RichText";

interface Props {
  content?: Bilingual;
}

/* Emergency banner — always red, regardless of specialty colour.
   Sits directly after the hero for ER conditions (stroke, neuro infections).
   Strips the leading "⚠️ " from the content (we render our own icon). */
export function EmergencyBanner({ content }: Props) {
  const locale = useLocale() as Locale;
  const isHi = locale === "hi";

  if (!content || !t(content, locale)) return null;

  const text = t(content, locale).replace(/^⚠️\s*/, "");

  return (
    <section className="bg-[#FEF2F2] border-y border-[#FCA5A5]" aria-label="Emergency information">
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 py-8 md:py-10">
        <div className="flex items-start gap-4">
          <span
            className="flex-shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#DC2626] text-white"
            aria-hidden="true"
          >
            <AlertTriangle size={22} />
          </span>
          <RichText
            text={text}
            className="flex-1"
            paragraphClassName={`text-[15px] md:text-[16px] leading-[1.7] text-[#7F1D1D] ${
              isHi ? "font-hi lang-hi" : ""
            }`}
          />
        </div>
      </div>
    </section>
  );
}

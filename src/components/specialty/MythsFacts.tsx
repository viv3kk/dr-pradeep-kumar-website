"use client";

import { useLocale } from "next-intl";
import { X, Check } from "lucide-react";
import { t, type MythFact } from "@/lib/specialties-data";
import { COLORS } from "@/lib/specialty-colors";
import type { SpecialtyColor } from "@/lib/specialties-data";
import type { Locale } from "@/i18n/routing";

interface Props {
  myths?: MythFact[];
  color: SpecialtyColor;
}

export function MythsFacts({ myths, color }: Props) {
  const locale = useLocale() as Locale;
  const c = COLORS[color];
  const isHi = locale === "hi";

  if (!myths || myths.length === 0) return null;

  return (
    <section className="py-20 md:py-24 bg-[#FAF8F5]" aria-labelledby="myths-heading">
      <div className="max-w-[1120px] mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: c.tag }}
          >
            {isHi ? "भ्रांतियाँ बनाम सच्चाई" : "Myths & Facts"}
          </span>
          <h2
            id="myths-heading"
            className={`font-serif text-[clamp(26px,3.8vw,40px)] font-bold text-[#1C1917] leading-tight ${
              isHi ? "font-hi" : ""
            }`}
            style={{
              fontFamily: isHi
                ? "var(--font-noto-hi)"
                : "var(--font-fraunces, 'Fraunces', serif)",
            }}
          >
            {isHi ? "जो आपने सुना — और जो सच है।" : "What you've heard — and what's true."}
          </h2>
        </div>

        <ul className="grid md:grid-cols-2 gap-5 max-w-[980px] mx-auto">
          {myths.map((m, idx) => (
            <li
              key={idx}
              className="rounded-3xl border bg-white p-7 flex flex-col gap-4"
              style={{ borderColor: c.border }}
            >
              {/* Myth */}
              <div className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#FEE2E2] text-[#DC2626]"
                  aria-hidden="true"
                >
                  <X size={16} />
                </span>
                <p
                  className={`text-[15px] md:text-[16px] font-semibold text-[#78716C] leading-snug ${
                    isHi ? "font-hi lang-hi" : ""
                  }`}
                >
                  <span className="text-[#DC2626]">
                    {isHi ? "भ्रांति: " : "Myth: "}
                  </span>
                  {t(m.myth, locale)}
                </p>
              </div>
              {/* Fact */}
              <div className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full"
                  style={{ backgroundColor: c.bg, color: c.tag }}
                  aria-hidden="true"
                >
                  <Check size={16} />
                </span>
                <p
                  className={`text-[15px] md:text-[16px] text-[#3F3A36] leading-[1.7] ${
                    isHi ? "font-hi lang-hi" : ""
                  }`}
                >
                  <span className="font-semibold" style={{ color: c.tag }}>
                    {isHi ? "सच: " : "Fact: "}
                  </span>
                  {t(m.fact, locale)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

"use client";

import { useLocale, useTranslations } from "next-intl";
import { t, type Bilingual } from "@/lib/specialties-data";
import { COLORS } from "@/lib/specialty-colors";
import type { SpecialtyColor } from "@/lib/specialties-data";
import type { Locale } from "@/i18n/routing";
import { DOCTOR } from "@/lib/doctor-data";

interface Props {
  content: Bilingual;
  color: SpecialtyColor;
}

export function DrKumarsApproach({ content, color }: Props) {
  const locale = useLocale() as Locale;
  const tPage = useTranslations("page");
  const c = COLORS[color];
  const isHi = locale === "hi";

  if (!t(content, locale)) return null;

  return (
    <section
      className="py-20 md:py-24"
      style={{ backgroundColor: c.bg }}
      aria-labelledby="approach-heading"
    >
      <div className="max-w-[860px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
          <div>
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: c.tag }}
            >
              {isHi ? "डॉ. कुमार का तरीक़ा" : "Dr. Kumar's approach"}
            </span>
            <h2
              id="approach-heading"
              className={`font-serif text-[clamp(26px,3.8vw,40px)] font-bold text-[#1C1917] leading-tight mb-6 ${
                isHi ? "font-hi" : ""
              }`}
              style={{
                fontFamily: isHi
                  ? "var(--font-noto-hi)"
                  : "var(--font-fraunces, 'Fraunces', serif)",
              }}
            >
              {tPage("drKumarsApproach")}
            </h2>
            <p
              className={`text-[17px] md:text-[18px] leading-[1.85] text-[#3F3A36] ${
                isHi ? "font-hi lang-hi" : ""
              }`}
            >
              {t(content, locale)}
            </p>
          </div>

          {/* Compact doctor card */}
          <aside
            className="bg-white rounded-3xl border p-6 w-full md:w-[260px] flex-shrink-0"
            style={{ borderColor: c.border }}
            aria-label="About Dr. Kumar"
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-14 h-14 rounded-full flex items-center justify-center text-3xl flex-shrink-0"
                style={{ backgroundColor: c.bg }}
                aria-hidden="true"
              >
                👨‍⚕️
              </span>
              <div>
                <p
                  className="font-serif font-bold text-base text-[#1C1917] leading-tight"
                  style={{
                    fontFamily: "var(--font-fraunces, 'Fraunces', serif)",
                  }}
                >
                  Dr. Pradeep Kumar
                </p>
                <p className="text-[11px] text-[#A8A29E] leading-tight mt-0.5">
                  {DOCTOR.title}
                </p>
              </div>
            </div>
            <dl className="grid grid-cols-2 gap-3 text-center">
              {[
                {
                  v: DOCTOR.experience,
                  l: isHi ? "साल अनुभव" : "yrs exp.",
                },
                {
                  v: DOCTOR.patients,
                  l: isHi ? "मरीज़" : "patients",
                },
                {
                  v: DOCTOR.rating,
                  l: isHi ? "रेटिंग" : "rating",
                },
                {
                  v: DOCTOR.recommendationScore,
                  l: isHi ? "सिफ़ारिश" : "recommend",
                },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-xl py-2.5"
                  style={{ backgroundColor: c.bg }}
                >
                  <dt className="sr-only">{s.l}</dt>
                  <dd
                    className="font-serif font-bold text-base text-[#1C1917] leading-none"
                    style={{
                      fontFamily: "var(--font-fraunces, 'Fraunces', serif)",
                    }}
                  >
                    {s.v}
                  </dd>
                  <p className="text-[10px] text-[#A8A29E] mt-0.5">{s.l}</p>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

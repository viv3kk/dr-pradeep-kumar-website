"use client";

import { useLocale, useTranslations } from "next-intl";
import { CalendarDays, Phone } from "lucide-react";
import { DOCTOR } from "@/lib/doctor-data";
import { COLORS } from "@/lib/specialty-colors";
import type { SpecialtyColor } from "@/lib/specialties-data";
import type { Locale } from "@/i18n/routing";

interface Props {
  color: SpecialtyColor;
}

/* Soft mid-page CTA — empathetic, not pushy. Sits between topics
   and the caregiver section. */
export function SpecialtyMidCTA({ color }: Props) {
  const locale = useLocale() as Locale;
  const tPage = useTranslations("page");
  const tNav = useTranslations("nav");
  const tCta = useTranslations("cta");
  const c = COLORS[color];
  const isHi = locale === "hi";

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[760px] mx-auto px-6 md:px-10">
        <div
          className="rounded-3xl border p-8 md:p-10 text-center"
          style={{ backgroundColor: c.bg, borderColor: c.border }}
        >
          <h3
            className={`font-serif text-[24px] md:text-[28px] font-bold text-[#1C1917] leading-tight mb-3 ${
              isHi ? "font-hi" : ""
            }`}
            style={{
              fontFamily: isHi
                ? "var(--font-noto-hi)"
                : "var(--font-fraunces, 'Fraunces', serif)",
            }}
          >
            {tPage("bookCta")}
          </h3>
          <p
            className={`text-[16px] text-[#57534E] leading-relaxed max-w-[520px] mx-auto mb-7 ${
              isHi ? "font-hi lang-hi" : ""
            }`}
          >
            {tPage("bookCtaSub")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              onClick={scrollToContact}
              className="flex items-center justify-center gap-2 text-white font-semibold px-6 py-3 rounded-full cursor-pointer transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: c.tag,
                boxShadow: `0 6px 20px ${c.tag}55`,
              }}
            >
              <CalendarDays size={16} />
              {tNav("bookVisit")}
            </button>
            <a
              href={`tel:${DOCTOR.clinic.phone}`}
              className="flex items-center justify-center gap-2 text-[#1C1917] font-semibold px-6 py-3 rounded-full bg-white border border-[#E7E5E4] hover:border-[#1C1917] transition-colors"
            >
              <Phone size={16} />
              {tCta("callNow")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

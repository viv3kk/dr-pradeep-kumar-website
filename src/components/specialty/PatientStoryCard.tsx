"use client";

import { useLocale, useTranslations } from "next-intl";
import { Quote, Star } from "lucide-react";
import { t, type PatientStory } from "@/lib/specialties-data";
import { COLORS } from "@/lib/specialty-colors";
import type { SpecialtyColor } from "@/lib/specialties-data";
import type { Locale } from "@/i18n/routing";

interface Props {
  story: PatientStory;
  color: SpecialtyColor;
}

export function PatientStoryCard({ story, color }: Props) {
  const locale = useLocale() as Locale;
  const tPage = useTranslations("page");
  const c = COLORS[color];
  const isHi = locale === "hi";

  if (!t(story.text, locale)) return null;

  return (
    <section
      className="py-20 md:py-24 bg-white"
      aria-labelledby="story-heading"
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-10">
        <h2
          id="story-heading"
          className={`font-serif text-[clamp(26px,3.6vw,38px)] font-bold text-[#1C1917] leading-tight mb-10 text-center ${
            isHi ? "font-hi" : ""
          }`}
          style={{
            fontFamily: isHi
              ? "var(--font-noto-hi)"
              : "var(--font-fraunces, 'Fraunces', serif)",
          }}
        >
          {tPage("patientStory")}
        </h2>

        <figure
          className="relative rounded-3xl p-8 md:p-12 border"
          style={{ backgroundColor: c.bg, borderColor: c.border }}
        >
          <Quote
            className="absolute -top-4 left-8 text-white rounded-full p-1"
            size={40}
            style={{ backgroundColor: c.tag }}
            fill={c.tag}
            aria-hidden="true"
          />

          <blockquote
            className={`text-[17px] md:text-[19px] leading-[1.8] text-[#3F3A36] mb-6 ${
              isHi ? "font-hi lang-hi" : ""
            }`}
            style={{ fontStyle: isHi ? "normal" : "italic" }}
          >
            “{t(story.text, locale)}”
          </blockquote>

          <figcaption className="flex items-center gap-4 pt-5 border-t border-white/60">
            <span
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
              style={{ backgroundColor: c.tag }}
              aria-hidden="true"
            >
              {story.initials}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <p className="font-semibold text-[#1C1917]">
                  — {story.name}
                </p>
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                    isHi ? "font-hi" : ""
                  }`}
                  style={{ backgroundColor: c.tag, color: "white" }}
                >
                  {t(story.condition, locale)}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex" aria-label="5-star review">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className="fill-[#F59E0B] text-[#F59E0B]"
                    />
                  ))}
                </div>
                {story.sourceLabel && (
                  <p
                    className={`text-xs text-[#57534E] ${
                      isHi ? "font-hi" : ""
                    }`}
                  >
                    {t(story.sourceLabel, locale)}
                  </p>
                )}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

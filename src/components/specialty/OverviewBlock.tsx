"use client";

import { useLocale } from "next-intl";
import { ArrowDown } from "lucide-react";
import { t, type Specialty } from "@/lib/specialties-data";
import { COLORS } from "@/lib/specialty-colors";
import { LotusDivider } from "./LotusDivider";
import type { Locale } from "@/i18n/routing";

export function OverviewBlock({ specialty }: { specialty: Specialty }) {
  const locale = useLocale() as Locale;
  const c = COLORS[specialty.color];
  const isHi = locale === "hi";

  return (
    <section
      id="overview"
      className="py-20 md:py-28 bg-white relative overflow-hidden"
      aria-labelledby="overview-heading"
    >
      {/* Subtle backdrop tint corner */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ backgroundColor: `${c.tag}10` }}
      />

      <div className="relative max-w-[1120px] mx-auto px-6 md:px-10">
        {/* Section label with accent rule */}
        <div className="flex items-center gap-3 mb-5">
          <span
            className="h-px w-10"
            style={{ backgroundColor: c.tag }}
            aria-hidden="true"
          />
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: c.tag }}
          >
            {isHi ? "अवलोकन" : "Overview"}
          </span>
        </div>

        {/* Heading */}
        <h2
          id="overview-heading"
          className={`font-serif text-[clamp(32px,4.8vw,52px)] font-bold text-[#1C1917] mb-4 leading-[1.05] tracking-tight ${
            isHi ? "font-hi" : ""
          }`}
          style={{
            fontFamily: isHi
              ? "var(--font-noto-hi)"
              : "var(--font-fraunces, 'Fraunces', serif)",
          }}
        >
          {isHi ? (
            <>
              {t(specialty.name, locale)} —{" "}
              <em
                className="text-[color:var(--accent)]"
                style={{
                  fontStyle: "normal",
                  color: c.tag,
                  // @ts-expect-error CSS var
                  "--accent": c.tag,
                }}
              >
                इस क्षेत्र के बारे में।
              </em>
            </>
          ) : (
            <>
              About{" "}
              <em
                className="italic"
                style={{ fontStyle: "italic", color: c.tag }}
              >
                this field.
              </em>
            </>
          )}
        </h2>

        {/* Body paragraph — large, easy to read */}
        <p
          className={`text-[18px] md:text-[20px] leading-[1.7] text-[#3F3A36] mb-10 max-w-[720px] ${
            isHi ? "font-hi lang-hi" : ""
          }`}
        >
          {t(specialty.overview, locale)}
        </p>

        {/* Lotus ornament */}
        <LotusDivider color={c.tag} className="mb-10" />

        {/* Topic chip cards — larger, richer than text pills */}
        {specialty.topics.length > 0 && (
          <>
            <p
              className={`text-xs font-bold uppercase tracking-widest text-[#A8A29E] mb-4 ${
                isHi ? "font-hi" : ""
              }`}
            >
              {isHi ? "इस पन्ने पर" : "On this page"}
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {specialty.topics.map((tp) => (
                <a
                  key={tp.slug}
                  href={`#${tp.slug}`}
                  className={`group flex items-center justify-between gap-4 rounded-2xl border bg-white p-4 transition-all hover:-translate-y-0.5 ${
                    isHi ? "font-hi" : ""
                  }`}
                  style={{
                    borderColor: c.border,
                    boxShadow: `0 2px 12px ${c.tag}10`,
                  }}
                >
                  <span className="flex flex-col">
                    <span
                      className="text-[15px] font-semibold text-[#1C1917] leading-tight"
                      style={{
                        fontFamily: isHi
                          ? "var(--font-noto-hi)"
                          : "var(--font-fraunces, 'Fraunces', serif)",
                      }}
                    >
                      {t(tp.name, locale)}
                    </span>
                    <span className="text-xs text-[#57534E] mt-0.5">
                      {isHi ? "जाएँ →" : "Jump to section"}
                    </span>
                  </span>
                  <span
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full transition-transform group-hover:translate-y-0.5"
                    style={{ backgroundColor: c.bg, color: c.tag }}
                  >
                    <ArrowDown size={16} />
                  </span>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

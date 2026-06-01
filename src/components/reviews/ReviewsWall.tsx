"use client";

import { useMemo, useState } from "react";
import { useLocale } from "next-intl";
import { REVIEWS } from "@/lib/reviews-data";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import type { Locale } from "@/i18n/routing";

/* Dedicated reviews page body: a tag filter over the full review set,
   laid out as a CSS-columns masonry so variable-length quotes pack
   tightly. Server-rendered hero handles the headline + aggregate stats. */
export function ReviewsWall() {
  const locale = useLocale() as Locale;
  const isHi = locale === "hi";
  const [active, setActive] = useState<string | null>(null);

  /* Unique tags in first-seen order, so the chip row mirrors the data. */
  const tags = useMemo(() => {
    const seen: string[] = [];
    for (const r of REVIEWS) {
      if (r.tag && !seen.includes(r.tag)) seen.push(r.tag);
    }
    return seen;
  }, []);

  const filtered = useMemo(
    () => (active ? REVIEWS.filter((r) => r.tag === active) : REVIEWS),
    [active]
  );

  return (
    <section className="bg-[#FAF8F5] py-14 md:py-20" aria-label="All patient reviews">
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        {/* Tag filter */}
        <div
          className="mb-10 flex flex-wrap items-center justify-center gap-2"
          role="group"
          aria-label={isHi ? "विषय के अनुसार छाँटें" : "Filter by topic"}
        >
          <FilterChip
            label={isHi ? "सभी" : "All"}
            isActive={active === null}
            onClick={() => setActive(null)}
            isHi={isHi}
          />
          {tags.map((tag) => (
            <FilterChip
              key={tag}
              label={tag}
              isActive={active === tag}
              onClick={() => setActive(tag)}
              isHi={isHi}
            />
          ))}
        </div>

        {/* Count line */}
        <p
          className={`mb-8 text-center text-sm text-[#A8A29E] ${
            isHi ? "font-hi" : ""
          }`}
          aria-live="polite"
        >
          {isHi
            ? `${filtered.length} समीक्षाएँ दिख रही हैं`
            : `Showing ${filtered.length} ${
                filtered.length === 1 ? "review" : "reviews"
              }`}
        </p>

        {/* Masonry wall — CSS columns keep variable-height cards tight. */}
        <div className="[column-fill:_balance] gap-5 sm:columns-2 lg:columns-3">
          {filtered.map((review, i) => (
            <ReviewCard
              key={`${review.name}-${i}`}
              review={review}
              index={i}
              className="mb-5 break-inside-avoid"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FilterChip({
  label,
  isActive,
  onClick,
  isHi,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
  isHi: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
        isActive
          ? "border-[#E8714A] bg-[#E8714A] text-white shadow-[0_2px_10px_rgba(232,113,74,0.28)]"
          : "border-[#E7E5E4] bg-white text-[#57534E] hover:border-[#E8714A] hover:text-[#E8714A]"
      } ${isHi ? "font-hi" : ""}`}
    >
      {label}
    </button>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { useLocale } from "next-intl";
import { REVIEWS, REVIEW_STATS, type Review } from "@/lib/reviews-data";
import { ReviewCard, GoogleG } from "@/components/reviews/ReviewCard";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";

const PROFILE_LINK =
  "https://www.google.com/search?q=dr+pradeep+kumar+neurologist";

/* One vertically-scrolling marquee column (content duplicated for a seamless loop). */
function MarqueeColumn({
  items,
  startIndex,
  durationS,
  reverse = false,
}: {
  items: Review[];
  startIndex: number;
  durationS: number;
  reverse?: boolean;
}) {
  return (
    <div className="overflow-hidden">
      <div
        className={cn(
          reverse ? "marquee-col-rev" : "marquee-col",
          "group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        )}
        style={{ animationDuration: `${durationS}s` }}
      >
        {items.map((r, i) => (
          <ReviewCard
            key={`a-${i}`}
            review={r}
            index={startIndex + i}
            className="mb-5"
          />
        ))}
        {items.map((r, i) => (
          <ReviewCard
            key={`b-${i}`}
            review={r}
            index={startIndex + i}
            className="mb-5"
            ariaHidden
          />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const locale = useLocale() as Locale;
  const isHi = locale === "hi";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("in"), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Distribute reviews round-robin across three columns.
  const columns: Review[][] = [[], [], []];
  REVIEWS.forEach((r, i) => columns[i % 3].push(r));
  const colDurations = [46, 60, 52];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 md:py-32 bg-white"
      aria-label="Patient testimonials"
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="reveal text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#E8714A] mb-4">
            Patient Stories
          </span>
          <h2
            className="font-serif text-[clamp(32px,5vw,52px)] font-bold text-[#1C1917] leading-tight max-w-[520px] mx-auto"
            style={{ fontFamily: "var(--font-fraunces, 'Fraunces', serif)" }}
          >
            Real people,
            <br />
            <em style={{ fontStyle: "italic" }} className="text-[#E8714A]">
              real recoveries.
            </em>
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <div
              className="flex"
              aria-label={`${REVIEW_STATS.rating} out of 5 stars`}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="fill-[#FBBF24] text-[#FBBF24]"
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-[#1C1917]">
              {REVIEW_STATS.rating}
            </span>
            <span className="text-sm text-[#A8A29E]">
              from {REVIEW_STATS.count} verified
            </span>
            <span className="inline-flex items-center gap-1 text-sm text-[#A8A29E]">
              <GoogleG size={14} /> Google reviews
            </span>
          </div>
        </div>

        {/* Desktop / tablet — animated marquee wall */}
        <div
          className="group relative hidden md:block"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, #000 9%, #000 91%, transparent)",
            maskImage:
              "linear-gradient(to bottom, transparent, #000 9%, #000 91%, transparent)",
          }}
        >
          <div className="grid grid-cols-3 gap-5 h-[600px]">
            {columns.map((col, ci) => (
              <MarqueeColumn
                key={ci}
                items={col}
                startIndex={ci * 8}
                durationS={colDurations[ci]}
                reverse={ci === 1}
              />
            ))}
          </div>
        </div>

        {/* Mobile — static stack of the first reviews */}
        <div className="md:hidden space-y-4">
          {REVIEWS.slice(0, 6).map((r, i) => (
            <ReviewCard key={i} review={r} index={i} />
          ))}
        </div>

        {/* Trust note */}
        <div className="reveal text-center mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/reviews"
            className={`inline-flex items-center gap-2 rounded-full bg-[#E8714A] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(232,113,74,0.28)] hover:bg-[#D45E38] transition-colors ${
              isHi ? "font-hi" : ""
            }`}
          >
            {isHi
              ? `सभी ${REVIEW_STATS.count} मरीज़ समीक्षाएँ देखें`
              : `Read all ${REVIEW_STATS.count} patient reviews`}
            →
          </Link>
          <a
            href={PROFILE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-medium text-[#57534E] hover:text-[#E8714A] transition-colors ${
              isHi ? "font-hi" : ""
            }`}
          >
            <GoogleG size={15} />
            {isHi ? "Google पर देखें" : "View on Google"} →
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Star } from "lucide-react";
import { type Review } from "@/lib/reviews-data";
import { cn } from "@/lib/utils";

/* Soft avatar tints, assigned deterministically per card. */
export const AVATAR_TINTS = [
  { bg: "#FEF0EB", fg: "#C2410C" },
  { bg: "#E6F4F1", fg: "#0F766E" },
  { bg: "#EAF2FB", fg: "#1D4ED8" },
  { bg: "#F3EEFB", fg: "#7C3AED" },
  { bg: "#FDF3E3", fg: "#B45309" },
  { bg: "#EAF5FA", fg: "#0369A1" },
];

/* The official 4-colour Google "G". */
export function GoogleG({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34A21.99 21.99 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}

export function ReviewCard({
  review,
  index,
  className,
  ariaHidden = false,
}: {
  review: Review;
  index: number;
  className?: string;
  ariaHidden?: boolean;
}) {
  const tint = AVATAR_TINTS[index % AVATAR_TINTS.length];
  return (
    <article
      aria-hidden={ariaHidden || undefined}
      className={cn(
        "rounded-2xl border border-[#ECE7E1] bg-white p-5 shadow-[0_1px_3px_rgba(28,25,23,0.04)]",
        className
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <span
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-[13px] font-bold"
            style={{ backgroundColor: tint.bg, color: tint.fg }}
            aria-hidden="true"
          >
            {review.initials}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-[#1C1917] leading-tight">
              {review.name}
            </p>
            <p className="text-[11px] text-[#A8A29E] leading-tight">
              {review.date}
            </p>
          </div>
        </div>
        <GoogleG />
      </div>

      <div className="mt-3 flex" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, si) => (
          <Star
            key={si}
            size={13}
            className={
              si < review.rating
                ? "fill-[#FBBF24] text-[#FBBF24]"
                : "fill-[#E7E5E4] text-[#E7E5E4]"
            }
          />
        ))}
      </div>

      <blockquote className="mt-2.5 text-[13.5px] leading-relaxed text-[#57534E]">
        &ldquo;{review.text}&rdquo;
      </blockquote>

      {review.tag && (
        <span className="mt-3 inline-block rounded-full border border-[#F0E0D8] bg-[#FDF6F2] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#C2410C]">
          {review.tag}
        </span>
      )}
    </article>
  );
}

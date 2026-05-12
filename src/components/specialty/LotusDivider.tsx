"use client";

/* ── Lotus-flanked thin rule, used between headline and body in hero
   and as a section ornament in OverviewBlock. ──────────────────── */
interface Props {
  color: string;
  width?: number; // max width in px
  className?: string;
}

export function LotusDivider({ color, width = 280, className = "" }: Props) {
  return (
    <div
      className={`flex items-center gap-3 ${className}`}
      style={{ maxWidth: width }}
      aria-hidden="true"
    >
      <span
        className="h-px flex-1"
        style={{ backgroundColor: color, opacity: 0.35 }}
      />
      <svg
        width="22"
        height="16"
        viewBox="0 0 28 18"
        fill="none"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* 3-petal stylised lotus */}
        <path d="M14 16 C7 16 4 9 8 4 C11 6 12 10 13 14" />
        <path d="M14 16 C21 16 24 9 20 4 C17 6 16 10 15 14" />
        <path d="M14 16 V6" />
        <path d="M14 16 L9 16" opacity="0.6" />
        <path d="M14 16 L19 16" opacity="0.6" />
      </svg>
      <span
        className="h-px flex-1"
        style={{ backgroundColor: color, opacity: 0.35 }}
      />
    </div>
  );
}

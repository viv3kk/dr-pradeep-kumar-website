"use client";

import type { SVGProps } from "react";
import type { TrustIconKey } from "@/lib/specialties-data";

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "viewBox" | "fill"> {
  size?: number;
}

const base = (size: number) =>
  ({
    width: size,
    height: size,
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  }) as const;

/* ─── India outline (simplified subcontinent + capital dot) ──── */
export function TrustIndiaIcon({ size = 28, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M10 4 C13 3 17 3 21 4 C23 5 23 7 22 9 C21 11 22 13 23 14 C24 16 23 18 22 19 L20 20 L19 23 L17 26 L15 28 L13 25 L12 22 C9 21 8 18 9 16 C9 13 8 11 9 8 C9 6 9 5 10 4 Z" />
      {/* Capital marker (Delhi area) */}
      <circle cx="14" cy="9" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ─── Lotus (5-petal front view) ─────────────────────────────── */
export function TrustLotusIcon({ size = 28, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      {/* Outer-left petal */}
      <path d="M16 26 Q8 23 5 14 Q9 12 13 17 Q15 21 16 25" />
      {/* Outer-right petal */}
      <path d="M16 26 Q24 23 27 14 Q23 12 19 17 Q17 21 16 25" />
      {/* Inner-left petal */}
      <path d="M16 26 Q11 21 10 10 Q14 11 15 17 Q16 21 16 25" />
      {/* Inner-right petal */}
      <path d="M16 26 Q21 21 22 10 Q18 11 17 17 Q16 21 16 25" />
      {/* Center upright petal */}
      <path d="M16 26 Q14 19 16 8 Q18 19 16 26 Z" />
      {/* Subtle base line */}
      <path d="M7 26 H25" opacity="0.4" strokeWidth="1.2" />
    </svg>
  );
}

/* ─── Side-profile head with subtle brain pattern ────────────── */
export function TrustBrainCareIcon({ size = 28, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      {/* Side-profile head outline, facing left */}
      <path
        d="M23 12 Q23 6 17 5 Q12 5 10 7 Q9 9 9 11
           L9 13 Q7 14 8 16 L9 17 L9 19
           Q8 21 10 22 L10 25 Q11 26 13 26
           L17 26 L17 22 Q22 22 23 18 Q24 15 23 12 Z"
      />
      {/* Eye */}
      <circle cx="13" cy="13" r="0.9" fill="currentColor" stroke="none" />
      {/* Brain swirl inside skull */}
      <path
        d="M17 11 Q20 11 20 13 Q20 15 18 15 Q20 16 20 18 Q20 20 17 20"
        opacity="0.55"
        strokeWidth="1.3"
      />
    </svg>
  );
}

/* ─── Smiley face (compassion) ───────────────────────────────── */
export function TrustCompassionIcon({ size = 28, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      {/* Face */}
      <circle cx="16" cy="16" r="11" />
      {/* Eyes */}
      <circle cx="12.5" cy="14" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="19.5" cy="14" r="0.9" fill="currentColor" stroke="none" />
      {/* Warm smile */}
      <path d="M11 19 Q16 23 21 19" strokeWidth="1.6" />
    </svg>
  );
}

/* ─── Dispatcher ─────────────────────────────────────────────── */
export function TrustIcon({
  iconKey,
  size = 28,
  ...rest
}: IconProps & { iconKey: TrustIconKey }) {
  switch (iconKey) {
    case "india":
      return <TrustIndiaIcon size={size} {...rest} />;
    case "lotus":
      return <TrustLotusIcon size={size} {...rest} />;
    case "brain-care":
      return <TrustBrainCareIcon size={size} {...rest} />;
    case "compassion":
      return <TrustCompassionIcon size={size} {...rest} />;
  }
}

"use client";

import type { SVGProps } from "react";

/* ─────────────────────────────────────────────────────────────
   Custom medical UI icons — line-art, single-colour via
   `currentColor`. Matches the visual language of the specialty
   icons in `components/specialty/icons/SpecialtyIcons.tsx`.
   Use these instead of lucide where the clinical context matters
   (clinic info, phone, hours, location).
───────────────────────────────────────────────────────────── */

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "viewBox" | "fill"> {
  size?: number;
}

const base = (size: number) =>
  ({
    width: size,
    height: size,
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  }) as const;

/* ─── Clinic (pitched-roof building + medical cross window) ──── */
export function ClinicIcon({ size = 32, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      {/* Building outline */}
      <path d="M14 54 V26 L32 14 L50 26 V54 Z" />
      {/* Baseline */}
      <path d="M10 54 H54" />
      {/* Medical cross window */}
      <path d="M32 22 V36" strokeWidth="2.6" />
      <path d="M25 29 H39" strokeWidth="2.6" />
      {/* Door */}
      <path d="M28 54 V44 H36 V54" />
    </svg>
  );
}

/* ─── Map pin (teardrop + inner dot) ─────────────────────────── */
export function MapPinIcon({ size = 32, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M32 8 C22 8 14 16 14 26 C14 38 32 56 32 56 C32 56 50 38 50 26 C50 16 42 8 32 8 Z" />
      <circle cx="32" cy="26" r="5" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ─── Clock (round face + 12-3-6-9 markers + hands) ──────────── */
export function ClockIcon({ size = 32, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      {/* Face */}
      <circle cx="32" cy="32" r="22" />
      {/* Quarter markers */}
      <path d="M32 12 V14" strokeWidth="2.2" />
      <path d="M52 32 H50" strokeWidth="2.2" />
      <path d="M32 52 V50" strokeWidth="2.2" />
      <path d="M14 32 H12" strokeWidth="2.2" />
      {/* Hands — hour to 10, minute to 2 */}
      <path d="M32 32 L24 24" strokeWidth="2.4" />
      <path d="M32 32 L40 26" strokeWidth="2.4" />
      {/* Centre */}
      <circle cx="32" cy="32" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ─── Phone (classic curved handset) ─────────────────────────── */
export function PhoneIcon({ size = 32, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path
        d="M22 10 L30 10 L34 22 L28 28
           C28 28 30 36 36 42 C42 48 50 50 50 50 L56 44 L56 52
           C56 54 54 56 52 56 C30 56 8 34 8 12
           C8 10 10 8 12 8 L22 10 Z"
      />
    </svg>
  );
}

/* ─── Calendar (refined month grid, day-of-week marker) ──────── */
export function CalendarIcon({ size = 32, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      {/* Body */}
      <rect x="10" y="14" width="44" height="42" rx="4" />
      {/* Header band */}
      <path d="M10 24 H54" />
      {/* Binding posts */}
      <path d="M22 8 V18" strokeWidth="2.4" />
      <path d="M42 8 V18" strokeWidth="2.4" />
      {/* Today marker (filled dot) */}
      <circle cx="32" cy="40" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ─── Video / telehealth (camera body + lens) ────────────────── */
export function VideoIcon({ size = 32, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      {/* Camera body */}
      <rect x="10" y="20" width="32" height="24" rx="4" />
      {/* Lens corner — represents inset speaker */}
      <circle cx="20" cy="32" r="3" />
      {/* Side cone (lens projection) */}
      <path d="M42 28 L56 22 V42 L42 36 Z" />
    </svg>
  );
}

/* ─── Warning (soft-rounded triangle + exclamation) ─────────────
   Replaces lucide AlertCircle and the ⚠️ emoji wherever a red-flag
   indicator is needed. Designed in the same line-art family as the
   other medical icons — round line joins keep the corners soft so
   it reads as "be aware" rather than aggressive road-sign warning. */
export function WarningIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      {/* Triangle with soft rounded corners */}
      <path d="M32 12 L53 46 Q55 51 50 51 L14 51 Q9 51 11 46 L32 12 Z" />
      {/* Exclamation stem */}
      <path d="M32 26 V38" strokeWidth="3" />
      {/* Exclamation dot */}
      <circle cx="32" cy="44.5" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

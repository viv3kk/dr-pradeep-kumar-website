"use client";

import type { SVGProps } from "react";

/* ─────────────────────────────────────────────────────────────
   Custom specialty icons — anatomical, line-based, single-color.
   Each accepts `size` (default 56px) and inherits its colour from
   the parent via `currentColor`. Pass color via inline style or
   className text-* to tint per specialty palette.
   viewBox is uniform 64×64 so they sit consistently in any grid.
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

/* ─── 1. Headache & Vertigo ────────────────────────────────────
   Stylised brain (top view) with central sulcus, two pain-wave
   arcs radiating from the right temple. */
export function HeadacheVertigoIcon({ size = 56, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      {/* Brain outline */}
      <path d="M32 12C22 12 14 18 14 26C14 30 16 32 14 34C14 38 16 40 14 42C14 50 22 52 32 52C42 52 50 50 50 42C50 40 48 38 50 34C48 32 50 30 50 26C50 18 42 12 32 12Z" />
      {/* Central sulcus */}
      <path d="M32 14V50" opacity="0.4" />
      {/* Pain waves radiating right (headache) */}
      <path d="M53 23 Q57 27 53 31" opacity="0.85" />
      <path d="M57 18 Q63 27 57 36" opacity="0.5" />
    </svg>
  );
}

/* ─── 2. Stroke ────────────────────────────────────────────────
   Brain with a single curved artery passing through and a filled
   dot marking the occlusion. */
export function StrokeIcon({ size = 56, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      {/* Brain outline */}
      <path d="M32 12C22 12 14 18 14 26C14 30 16 32 14 34C14 38 16 40 14 42C14 50 22 52 32 52C42 52 50 50 50 42C50 40 48 38 50 34C48 32 50 30 50 26C50 18 42 12 32 12Z" />
      {/* Sulcus */}
      <path d="M32 14V50" opacity="0.35" />
      {/* Artery passing through */}
      <path
        d="M18 22 Q26 28 32 32 T46 42"
        strokeWidth="2.3"
        opacity="0.95"
      />
      {/* Occlusion marker */}
      <circle cx="32" cy="32" r="2.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ─── 3. Parkinson's & Movement Disorders ──────────────────────
   Tremor waveform — irregular oscillation, building then easing.
   Top and bottom rails frame it like a chart. */
export function MovementDisorderIcon({ size = 56, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      {/* Top rail */}
      <path d="M8 18 H56" opacity="0.22" strokeWidth="1.5" />
      {/* Tremor waveform */}
      <path
        d="M8 32 L13 28 L17 36 L21 26 L25 38 L29 22 L33 42 L37 24 L41 38 L45 28 L49 34 L56 32"
        strokeWidth="2.2"
      />
      {/* Bottom rail */}
      <path d="M8 48 H56" opacity="0.22" strokeWidth="1.5" />
    </svg>
  );
}

/* ─── 4. Dementia & Memory ─────────────────────────────────────
   Inward spiral — solid outer, lighter middle, dashed innermost.
   Suggests memory drifting away. */
export function DementiaIcon({ size = 56, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      {/* Outer turn — solid */}
      <path
        d="M32 12 C44 12 52 20 52 32 C52 44 44 52 32 52 C20 52 12 44 12 32 C12 22 19 16 26 16"
        strokeWidth="2.2"
      />
      {/* Middle turn — softer */}
      <path
        d="M26 16 C34 16 42 23 42 32 C42 40 35 45 28 45 C22 45 18 41 18 34"
        strokeWidth="2"
        opacity="0.6"
      />
      {/* Innermost turn — dashed, faint */}
      <path
        d="M18 34 C18 30 22 26 28 28 C32 29 33 33 30 36"
        strokeWidth="2"
        opacity="0.35"
        strokeDasharray="1.5 2.5"
      />
    </svg>
  );
}

/* ─── 5. Epilepsy & Attacks ────────────────────────────────────
   EEG trace — baseline, ictal spike-and-wave, baseline.
   Anatomically literal: this is what an actual seizure trace
   looks like. Two faint axes frame the recording. */
export function EpilepsyIcon({ size = 56, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      {/* Top axis */}
      <path d="M8 18 H56" opacity="0.18" strokeWidth="1.5" />
      {/* EEG trace */}
      <path
        d="M8 36 L11 36 L13 34 L15 36 L17 34 L19 36 L21 36
           L23 26 L25 44 L27 26 L29 44 L31 26 L33 44 L35 26 L37 44
           L39 36 L41 36 L43 34 L45 36 L47 34 L49 36 L56 36"
        strokeWidth="2.2"
      />
      {/* Bottom axis */}
      <path d="M8 48 H56" opacity="0.18" strokeWidth="1.5" />
    </svg>
  );
}

/* ─── 6. Neuropathic Pain ──────────────────────────────────────
   A single neuron — cell body, dendrites, axon, branching
   terminals, with pulse dots indicating an active pain signal. */
export function NeuropathicPainIcon({ size = 56, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      {/* Cell body */}
      <circle cx="17" cy="32" r="6" />
      {/* Dendrites */}
      <path d="M13 27 L8 22" />
      <path d="M11 32 H6" />
      <path d="M13 37 L8 42" />
      <path d="M16 26 L13 20" />
      <path d="M16 38 L13 44" />
      {/* Axon */}
      <path d="M23 32 H42" strokeWidth="2.3" />
      {/* Terminal branches */}
      <path d="M42 32 L52 24" />
      <path d="M42 32 L54 32" />
      <path d="M42 32 L52 40" />
      {/* Active-signal pulse dots near terminals */}
      <circle cx="54" cy="22" r="1.6" fill="currentColor" stroke="none" opacity="0.75" />
      <circle cx="57" cy="32" r="1.6" fill="currentColor" stroke="none" opacity="0.75" />
      <circle cx="54" cy="42" r="1.6" fill="currentColor" stroke="none" opacity="0.75" />
    </svg>
  );
}

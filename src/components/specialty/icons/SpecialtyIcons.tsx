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

/* ─── 7. Vertigo ───────────────────────────────────────────────
   Concentric rotation arcs + arrowhead suggesting spin/dizziness,
   with a centre anchor dot (inner ear vestibular reference). */
export function VertigoIcon({ size = 56, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      {/* Outer rotation arc */}
      <path d="M52 32 A20 20 0 1 1 42 13" strokeWidth="2.2" />
      <path d="M42 13 L38 10 M42 13 L45 9" strokeWidth="1.8" />
      {/* Middle arc */}
      <path d="M46 32 A14 14 0 1 1 38 20" strokeWidth="1.8" opacity="0.55" />
      {/* Inner anchor */}
      <circle cx="32" cy="32" r="3.5" />
      <circle cx="32" cy="32" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ─── 8. Neuro Infections ──────────────────────────────────────
   Brain outline with small pathogen circles and radiating spikes
   inside, suggesting CNS infection. */
export function NeuroInfectionsIcon({ size = 56, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      {/* Brain outline */}
      <path d="M32 13C22 13 15 19 15 27C15 31 17 33 15 35C15 39 17 41 15 43C15 50 22 52 32 52C42 52 49 50 49 43C49 41 47 39 49 35C47 33 49 31 49 27C49 19 42 13 32 13Z" />
      {/* Pathogen body */}
      <circle cx="24" cy="30" r="4.5" strokeWidth="1.8" />
      {/* Pathogen spikes */}
      <path d="M24 24 V21" strokeWidth="1.4" />
      <path d="M29 26 L31 24" strokeWidth="1.4" />
      <path d="M29 34 L31 36" strokeWidth="1.4" />
      <path d="M24 36 V39" strokeWidth="1.4" />
      <path d="M19 34 L17 36" strokeWidth="1.4" />
      <path d="M19 26 L17 24" strokeWidth="1.4" />
      {/* Second smaller pathogen */}
      <circle cx="41" cy="37" r="3" strokeWidth="1.6" opacity="0.65" />
      <path d="M41 33 V31 M44 35 L46 33 M44 39 L46 41 M41 41 V43 M38 39 L36 41 M38 35 L36 33" strokeWidth="1.2" opacity="0.55" />
    </svg>
  );
}

/* ─── 9. Neuro Rehabilitation ──────────────────────────────────
   Stylised walking figure (stick) ascending steps, conveying
   recovery and progressive improvement. */
export function NeuroRehabilitationIcon({ size = 56, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      {/* Head */}
      <circle cx="24" cy="11" r="5" />
      {/* Torso */}
      <path d="M24 16 L24 30" />
      {/* Arms — one forward, one back */}
      <path d="M24 22 L14 26 M24 22 L34 18" />
      {/* Legs — stride */}
      <path d="M24 30 L16 44 M24 30 L33 42" />
      {/* Steps (ascending left to right) */}
      <path d="M38 50 H52 V40 H52" strokeWidth="1.8" opacity="0.5" />
      <path d="M38 40 H46 V30" strokeWidth="1.8" opacity="0.5" />
      {/* Upward arrow */}
      <path d="M52 28 V14 M52 14 L48 18 M52 14 L56 18" strokeWidth="1.8" opacity="0.7" />
    </svg>
  );
}

/* ─── 10. Back Pain ────────────────────────────────────────────
   Lumbar spine column (stacked vertebrae) with pain-wave arcs
   radiating from the lower lumbar region. */
export function BackPainIcon({ size = 56, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      {/* Vertebrae stack */}
      <rect x="24" y="8"  width="14" height="7" rx="2" />
      <rect x="24" y="18" width="14" height="7" rx="2" />
      <rect x="24" y="28" width="14" height="7" rx="2" />
      <rect x="24" y="38" width="14" height="7" rx="2" />
      <rect x="24" y="48" width="14" height="7" rx="2" />
      {/* Pain arcs at lumbar (3rd–4th) */}
      <path d="M39 33 Q46 32 43 38" strokeWidth="1.8" opacity="0.85" />
      <path d="M39 36 Q49 32 46 43" strokeWidth="1.6" opacity="0.5" />
    </svg>
  );
}

/* ─── 11. Cervical & Neck Pain ─────────────────────────────────
   Skull base + cervical vertebrae (C1–C4) with pain arcs
   radiating from the upper cervical region. */
export function CervicalNeckPainIcon({ size = 56, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      {/* Skull base */}
      <path d="M20 20 C20 9 44 9 44 20 C44 27 39 29 32 29 C25 29 20 27 20 20Z" />
      {/* Cervical vertebrae C1–C4 */}
      <rect x="25" y="31" width="14" height="6" rx="1.5" />
      <rect x="25" y="40" width="14" height="6" rx="1.5" />
      <rect x="25" y="49" width="14" height="6" rx="1.5" />
      {/* Pain arcs at upper cervical */}
      <path d="M40 34 Q47 33 44 39" strokeWidth="1.8" opacity="0.85" />
      <path d="M40 37 Q50 33 47 43" strokeWidth="1.6" opacity="0.5" />
    </svg>
  );
}

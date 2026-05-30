"use client";

import {
  HeadacheVertigoIcon,
  StrokeIcon,
  MovementDisorderIcon,
  DementiaIcon,
  EpilepsyIcon,
  NeuropathicPainIcon,
  VertigoIcon,
  NeuroInfectionsIcon,
  NeuroRehabilitationIcon,
  BackPainIcon,
  CervicalNeckPainIcon,
} from "./icons/SpecialtyIcons";

/* ── Map from specialty slug → custom icon component ─────────── */
const REGISTRY: Record<string, React.ComponentType<{ size?: number }>> = {
  "headache-disorders": HeadacheVertigoIcon,
  vertigo: VertigoIcon,
  stroke: StrokeIcon,
  "epilepsy-and-seizures": EpilepsyIcon,
  "parkinsonism-and-movement-disorders": MovementDisorderIcon,
  "dementia-and-alzheimers": DementiaIcon,
  neuropathy: NeuropathicPainIcon,
  "neuro-infections": NeuroInfectionsIcon,
  "neuro-rehabilitation": NeuroRehabilitationIcon,
  "back-pain": BackPainIcon,
  "cervical-and-neck-pain": CervicalNeckPainIcon,
};

interface Props {
  slug: string;
  size?: number;
  color?: string;
  className?: string;
}

/* Renders the correct custom SVG icon for a given specialty.
   Pass `color` to tint via inline CSS color (the SVGs use
   `currentColor` for strokes & fills). */
export function SpecialtyIcon({ slug, size = 48, color, className }: Props) {
  const Icon = REGISTRY[slug];
  if (!Icon) return null;
  return (
    <span
      aria-hidden="true"
      className={className}
      style={color ? { color, display: "inline-flex" } : { display: "inline-flex" }}
    >
      <Icon size={size} />
    </span>
  );
}

"use client";

import {
  HeadacheVertigoIcon,
  StrokeIcon,
  MovementDisorderIcon,
  DementiaIcon,
  EpilepsyIcon,
  NeuropathicPainIcon,
} from "./icons/SpecialtyIcons";

/* ── Map from specialty slug → custom icon component ─────────── */
const REGISTRY: Record<string, React.ComponentType<{ size?: number }>> = {
  "headache-and-vertigo": HeadacheVertigoIcon,
  stroke: StrokeIcon,
  "parkinsons-and-movement-disorders": MovementDisorderIcon,
  "dementia-and-memory-dysfunction": DementiaIcon,
  "epilepsy-and-attacks": EpilepsyIcon,
  "neuropathic-pain": NeuropathicPainIcon,
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

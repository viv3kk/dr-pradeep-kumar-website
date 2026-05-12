import type { SpecialtyColor } from "./specialties-data";

/* ── Color palettes per specialty ───────────────────────────── */
export interface ColorPalette {
  bg: string; // soft tinted background
  border: string; // border on cards
  tag: string; // strong accent (text / chip background)
  dot: string; // marker / bullet
  ink: string; // dark text on tinted bg (a11y)
  bgDeep: string; // deeper tint for hero section
}

export const COLORS: Record<SpecialtyColor, ColorPalette> = {
  coral: {
    bg: "#FFF4EE",
    bgDeep: "#FFE8DC",
    border: "#F5C4B3",
    tag: "#E8714A",
    dot: "#E8714A",
    ink: "#7A2E15",
  },
  teal: {
    bg: "#EDFAF6",
    bgDeep: "#D7F3E8",
    border: "#A7E8D8",
    tag: "#16907A",
    dot: "#16907A",
    ink: "#0F4D40",
  },
  navy: {
    bg: "#EEF2FF",
    bgDeep: "#DDE5FF",
    border: "#C7D2FE",
    tag: "#4F46E5",
    dot: "#4F46E5",
    ink: "#2A2270",
  },
  gold: {
    bg: "#FFFBEB",
    bgDeep: "#FEF3C7",
    border: "#FDE68A",
    tag: "#D97706",
    dot: "#D97706",
    ink: "#7A3F02",
  },
  purple: {
    bg: "#F5F3FF",
    bgDeep: "#E9E2FF",
    border: "#DDD6FE",
    tag: "#7C3AED",
    dot: "#7C3AED",
    ink: "#3F1D8C",
  },
  sky: {
    bg: "#F0F9FF",
    bgDeep: "#DDF0FF",
    border: "#BAE6FD",
    tag: "#0284C7",
    dot: "#0284C7",
    ink: "#0A4373",
  },
};

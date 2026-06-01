import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** Diameter of the circular photo mark, in px. */
  markSize?: number;
  /** Show the "Dr. Pradeep Kumar" wordmark beside the mark. */
  showWordmark?: boolean;
  /** Show the "Neurologist" tagline under the wordmark. */
  showTagline?: boolean;
  /** Use light text — for placement on dark backgrounds (e.g. footer). */
  light?: boolean;
  /** Render the brand name in the Devanagari font for the Hindi locale. */
  isHi?: boolean;
  /** Reveal a larger (4×) portrait card below the logo on hover. */
  hoverPreview?: boolean;
  className?: string;
}

/** Brand ring geometry — single source of truth for the mark shape. */
const RING_PATH = "M 94.4 38.1 A 46 46 0 1 1 61.9 5.56"; // 300° open ring, gap at ~1:30
const FRAUNCES = "var(--font-fraunces, 'Fraunces', serif)";

/** Doctor portrait framed inside the open brand ring + spark dot. */
function FramedPortrait({
  size,
  interactive = false,
}: {
  size: number;
  /** Apply the group-hover zoom/lift micro-interaction (used by the header mark). */
  interactive?: boolean;
}) {
  return (
    <span
      className={cn(
        "relative inline-block flex-shrink-0",
        interactive &&
          "transition-transform duration-500 ease-out group-hover:scale-105"
      )}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Photo, clipped to a circle and inset to sit within the ring stroke */}
      <span className="absolute inset-[9%] overflow-hidden rounded-full bg-[#EAF2F8]">
        <Image
          src="/images/doctor/DPK_bg_transparent.png"
          alt=""
          fill
          sizes={`${size}px`}
          className={cn(
            "object-cover object-[center_18%] scale-[1.1]",
            interactive &&
              "transition-transform duration-700 ease-out group-hover:scale-[1.28]"
          )}
        />
      </span>
      {/* Open coral ring + spark dot, drawn in CSS/SVG */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <path
          d={RING_PATH}
          stroke="#E8714A"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle
          cx="82.5"
          cy="17.5"
          r="7.2"
          fill="#E8714A"
          className={cn(
            "origin-center",
            interactive &&
              "transition-transform duration-500 ease-out group-hover:scale-[1.18]"
          )}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      </svg>
    </span>
  );
}

/**
 * Brand logo: the doctor's portrait sits inside the brand ring mark
 * (an open coral ring with a "spark" dot), paired with the wordmark +
 * flanked "Neurologist" tagline. Hovering can reveal a larger preview card.
 * Reused in the navbar and footer.
 */
export function Logo({
  markSize = 46,
  showWordmark = true,
  showTagline = true,
  light = false,
  isHi = false,
  hoverPreview = false,
  className,
}: LogoProps) {
  return (
    <span
      className={cn(
        "group relative inline-flex items-center gap-2.5 min-w-0",
        className
      )}
    >
      {/* Header mark — framed portrait with the hover micro-interaction */}
      <FramedPortrait size={markSize} interactive />

      {showWordmark && (
        <span className="flex flex-col items-stretch min-w-0">
          <span
            className={cn(
              "font-serif font-bold leading-none truncate text-center",
              "text-[17px] sm:text-[19px] md:text-[20px]",
              light ? "text-white" : "text-[#1C1917]",
              isHi && "font-hi"
            )}
            style={{ fontFamily: isHi ? "var(--font-noto-hi)" : FRAUNCES }}
          >
            Dr. Pradeep Kumar
          </span>
          {showTagline && (
            <span className="mt-1.5 flex items-center gap-2">
              <span className="h-px flex-1 bg-[#E8714A]/60" />
              <span className="text-[8px] sm:text-[9px] font-semibold uppercase tracking-[0.3em] text-[#E8714A] leading-none whitespace-nowrap">
                {isHi ? "न्यूरोलॉजिस्ट" : "Neurologist"}
              </span>
              <span className="h-px flex-1 bg-[#E8714A]/60" />
            </span>
          )}
        </span>
      )}

      {/* Hover preview — a larger (4×) portrait card that fades + rises in */}
      {hoverPreview && (
        <span
          className="pointer-events-none absolute left-0 top-full z-50 mt-3 origin-top-left
                     -translate-y-1 scale-95 opacity-0
                     transition-all duration-300 ease-out
                     group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100"
          aria-hidden="true"
        >
          <span className="flex flex-col items-center gap-3 rounded-2xl border border-[#F0E6DF] bg-white/95 p-4 shadow-[0_18px_50px_rgba(28,25,23,0.18)] backdrop-blur-sm">
            <FramedPortrait size={markSize * 4} />
            <span className="text-center leading-tight">
              <span
                className="block font-serif text-[15px] font-bold text-[#1C1917]"
                style={{ fontFamily: FRAUNCES }}
              >
                Dr. Pradeep Kumar
              </span>
              <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.28em] text-[#E8714A]">
                {isHi ? "न्यूरोलॉजिस्ट" : "Neurologist"}
              </span>
            </span>
          </span>
        </span>
      )}
    </span>
  );
}

"use client";

import type { ReactNode } from "react";

/* Parses inline **bold** and *italic* within a single line of text. */
function parseInline(text: string): ReactNode[] {
  const segments = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return segments.map((seg, i) => {
    if (seg.startsWith("**") && seg.endsWith("**")) {
      return <strong key={i}>{seg.slice(2, -2)}</strong>;
    }
    if (seg.startsWith("*") && seg.endsWith("*")) {
      return <em key={i} style={{ fontStyle: "italic" }}>{seg.slice(1, -1)}</em>;
    }
    return seg;
  });
}

/* Renders a single line's inline markup, with single \n becoming <br/>. */
function parseLines(block: string): ReactNode[] {
  const lines = block.split("\n");
  return lines.flatMap((line, i) => {
    const parsed = parseInline(line);
    return i < lines.length - 1
      ? [...parsed, <br key={`br-${i}`} />]
      : parsed;
  });
}

interface Props {
  text: string;
  className?: string;
  paragraphClassName?: string;
}

/* Splits text on \n\n into blocks. A block whose every line begins with
   "- " renders as a <ul>; otherwise it renders as a <p> (single \n → <br>).
   Inline **bold** / *italic* is parsed within every line. */
export function RichText({ text, className, paragraphClassName }: Props) {
  const blocks = text.split(/\n\n+/).filter((b) => b.trim().length > 0);

  return (
    <div className={className}>
      {blocks.map((block, i) => {
        const lines = block.split("\n");
        const isList = lines.every((l) => l.trim().startsWith("- "));
        const spacing = i > 0 ? "mt-5" : "";

        if (isList) {
          return (
            <ul
              key={i}
              className={`${paragraphClassName ?? ""} ${spacing} list-disc pl-5 space-y-1.5`.trim()}
            >
              {lines.map((l, j) => (
                <li key={j}>{parseInline(l.trim().replace(/^- /, ""))}</li>
              ))}
            </ul>
          );
        }

        return (
          <p key={i} className={`${paragraphClassName ?? ""} ${spacing}`.trim()}>
            {parseLines(block)}
          </p>
        );
      })}
    </div>
  );
}

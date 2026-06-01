"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";

/**
 * Keeps `<html lang>` and the base font in sync with the active locale during
 * client-side navigation. The root layout owns `<html>` but, sitting above the
 * `[locale]` segment, it is preserved (not re-rendered) on a soft locale switch
 * — so without this, `lang`/font would only update on a full reload.
 */
export function LocaleHtmlSync() {
  const locale = useLocale();

  useEffect(() => {
    const html = document.documentElement;
    html.lang = locale;
    html.style.fontFamily =
      locale === "hi"
        ? "var(--font-noto-hi, 'Noto Sans Devanagari', system-ui, sans-serif)"
        : "var(--font-dm-sans, 'DM Sans', sans-serif)";
  }, [locale]);

  return null;
}

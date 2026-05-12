"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { CalendarDays } from "lucide-react";

/* Floating CTA — only visible after user scrolls past the hero and
   before they reach the contact form at the bottom. */
export function FloatingBookButton() {
  const tCta = useTranslations("cta");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById("contact");
      const contactTop = contact?.getBoundingClientRect().top ?? Infinity;
      // show after 500px scrolled, hide once the contact form is near the viewport
      const shouldShow = window.scrollY > 500 && contactTop > 200;
      setVisible(shouldShow);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToContact}
      aria-label={tCta("bookFloating")}
      className={`fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-[#E8714A] text-white font-semibold text-sm px-5 py-3.5 rounded-full shadow-[0_8px_28px_rgba(232,113,74,0.45)] hover:bg-[#D45E38] transition-all duration-300 cursor-pointer ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <CalendarDays size={16} />
      <span className="hidden sm:inline">{tCta("bookFloating")}</span>
    </button>
  );
}

"use client";

import { useState, useEffect, useRef, useCallback, useTransition } from "react";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  CalendarDays,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { DOCTOR } from "@/lib/doctor-data";
import { SPECIALTIES, t as tBilingual } from "@/lib/specialties-data";
import { COLORS } from "@/lib/specialty-colors";
import { SpecialtyIcon } from "@/components/specialty/SpecialtyIcon";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/utils";
import { usePathname as useRawPathname } from "next/navigation";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [specOpen, setSpecOpen] = useState(false);
  const [mobileSpecOpen, setMobileSpecOpen] = useState(false);
  const specRef = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const locale = useLocale() as Locale;
  const tNav = useTranslations("nav");
  const pathname = usePathname();         // next-intl: locale-stripped path
  const rawPathname = useRawPathname();   // next/navigation: full path e.g. /hi
  const router = useRouter();
  const isHi = locale === "hi";
  const [isPending, startTransition] = useTransition();

  // Derive the active locale directly from the URL — avoids useLocale() lag
  // where the hook stays stale after a client-side locale switch.
  const activeLocale: Locale =
    (routing.locales.find(
      (l) => rawPathname === `/${l}` || rawPathname.startsWith(`/${l}/`)
    ) as Locale) ?? routing.defaultLocale;

  /* ── Scroll detection ─────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Outside click closes desktop dropdown ────────────────── */
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (specRef.current && !specRef.current.contains(e.target as Node)) {
        setSpecOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  /* ── Lock body scroll while mobile drawer is open ─────────── */
  useEffect(() => {
    if (open) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [open]);

  /* ── ESC closes drawer / dropdown ─────────────────────────── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setSpecOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  /* ── Anchor nav works from any page ───────────────────────── */
  const goToSection = useCallback(
    (sectionId: string) => {
      setOpen(false);
      setSpecOpen(false);
      setMobileSpecOpen(false);
      if (pathname === "/") {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        router.push(`/#${sectionId}`);
      }
    },
    [pathname, router]
  );

  const switchLocale = (next: Locale) => {
    if (isPending) return;
    // Defensively strip any locale prefix that usePathname() may not have
    // stripped yet during an in-flight navigation (useLocale lags behind
    // usePathname, causing "/hi" to pass through unstripped → "/hi/hi").
    let safePath: string = pathname;
    for (const l of routing.locales) {
      if (safePath === `/${l}` || safePath.startsWith(`/${l}/`)) {
        safePath = safePath.slice(`/${l}`.length) || "/";
        break;
      }
    }
    startTransition(() => {
      router.replace(safePath as "/", { locale: next });
    });
  };

  /* Hover dropdown with delay so the cursor can travel to it */
  const onSpecEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSpecOpen(true);
  };
  const onSpecLeave = () => {
    closeTimer.current = setTimeout(() => setSpecOpen(false), 180);
  };

  /* Desktop shows a trimmed set; mobile drawer shows everything */
  const DESKTOP_NAV: { label: string; sectionId: string }[] = [
    { label: tNav("howItWorks"), sectionId: "how" },
    { label: tNav("faq"), sectionId: "faq" },
  ];
  const MOBILE_NAV: { label: string; sectionId: string }[] = [
    { label: tNav("howItWorks"), sectionId: "how" },
    { label: tNav("patients"), sectionId: "testimonials" },
    { label: tNav("faq"), sectionId: "faq" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled || open
            ? "bg-[#FAF8F5]/95 backdrop-blur-xl border-b border-[#E7E5E4]/70 shadow-[0_2px_20px_rgba(28,25,23,0.06)]"
            : "bg-transparent"
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-[1120px] mx-auto px-4 md:px-8 lg:px-10 h-[60px] md:h-[68px] flex items-center gap-2 md:gap-3">
          {/* ── Logo ──────────────────────────────────────────── */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center flex-shrink-0 mr-auto min-w-0"
            aria-label="Dr. Pradeep Kumar Neurology — Home"
          >
            <Logo isHi={isHi} markSize={52} hoverPreview />
          </Link>

          {/* ── Desktop links (≥ lg) ──────────────────────────── */}
          <ul
            className="hidden lg:flex items-center gap-0.5 list-none"
            role="list"
          >
            <li>
              <button
                onClick={() => goToSection("about")}
                className={navLinkCls(isHi)}
              >
                {tNav("about")}
              </button>
            </li>

            {/* Specialties dropdown — center of nav for prominence */}
            <li
              ref={specRef}
              className="relative"
              onMouseEnter={onSpecEnter}
              onMouseLeave={onSpecLeave}
            >
              <button
                onClick={() => setSpecOpen((v) => !v)}
                aria-expanded={specOpen}
                aria-haspopup="true"
                className={`${navLinkCls(isHi)} flex items-center gap-1`}
              >
                {tNav("specialties")}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    specOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {specOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl border border-[#E7E5E4] shadow-[0_12px_40px_rgba(28,25,23,0.12)] p-2 z-50"
                  onMouseEnter={onSpecEnter}
                  onMouseLeave={onSpecLeave}
                >
                  <ul role="list" className="grid grid-cols-2 gap-0.5">
                    {SPECIALTIES.map((s) => {
                      const c = COLORS[s.color];
                      return (
                        <li key={s.slug}>
                          <Link
                            href={`/specialties/${s.slug}`}
                            onClick={() => setSpecOpen(false)}
                            className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#FAF8F5] transition-colors ${
                              isHi ? "font-hi" : ""
                            }`}
                          >
                            <span
                              className="inline-flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0 transition-transform group-hover:scale-105"
                              style={{ backgroundColor: c.bg }}
                            >
                              <SpecialtyIcon
                                slug={s.slug}
                                size={22}
                                color={c.tag}
                              />
                            </span>
                            <span className="flex-1 text-sm font-medium text-[#1C1917] leading-tight">
                              {tBilingual(s.shortName, locale)}
                            </span>
                            {s.comingSoon && (
                              <span className="text-[10px] text-[#A8A29E] font-semibold uppercase tracking-widest flex-shrink-0">
                                {isHi ? "जल्द" : "Soon"}
                              </span>
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  <Link
                    href="/specialties"
                    onClick={() => setSpecOpen(false)}
                    className={`block mt-1 pt-3 pb-1 text-sm font-semibold text-center text-[#E8714A] hover:text-[#D45E38] transition-colors border-t border-[#E7E5E4] ${
                      isHi ? "font-hi" : ""
                    }`}
                  >
                    {tNav("allSpecialties")} →
                  </Link>
                </div>
              )}
            </li>

            {DESKTOP_NAV.map((item) => (
              <li key={item.sectionId}>
                <button
                  onClick={() => goToSection(item.sectionId)}
                  className={navLinkCls(isHi)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* ── Right side actions ────────────────────────────── */}
          <div className="flex items-center gap-1.5 md:gap-2 flex-shrink-0">
            {/* Locale toggle — always visible */}
            <LocaleToggle current={activeLocale} onChange={switchLocale} isPending={isPending} />

            {/* Phone — icon-only md→2xl, full number 2xl+ */}
            <a
              href={`tel:${DOCTOR.clinic.phone}`}
              className="hidden md:inline-flex items-center justify-center w-10 h-10 2xl:w-auto 2xl:px-3 rounded-full text-[#57534E] hover:text-[#E8714A] hover:bg-[#E7E5E4]/60 transition-colors whitespace-nowrap"
              aria-label={tNav("callDoctor")}
            >
              <Phone size={16} />
              <span className="hidden 2xl:inline ml-2 text-sm font-medium">
                {DOCTOR.clinic.phone.replace("+91-", "+91 ")}
              </span>
            </a>

            {/* Book button — sm+ (hidden on smallest phones to save space) */}
            <button
              onClick={() => goToSection("contact")}
              className={`hidden sm:inline-flex items-center gap-1.5 bg-[#E8714A] text-white text-xs md:text-sm font-semibold px-3.5 md:px-5 py-2 md:py-2.5 rounded-full whitespace-nowrap hover:bg-[#D45E38] transition-all duration-200 shadow-[0_4px_16px_rgba(232,113,74,0.28)] hover:shadow-[0_6px_24px_rgba(232,113,74,0.40)] hover:-translate-y-0.5 cursor-pointer ${
                isHi ? "font-hi" : ""
              }`}
            >
              <CalendarDays size={14} className="hidden md:inline" />
              {tNav("bookVisit")}
            </button>

            {/* Hamburger — below lg only */}
            <button
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-[#1C1917] rounded-lg hover:bg-[#E7E5E4]/60 active:bg-[#E7E5E4] transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav-drawer"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile drawer backdrop ──────────────────────────────── */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-black/40 backdrop-blur-[2px] lg:hidden transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* ── Mobile drawer ──────────────────────────────────────── */}
      <aside
        id="mobile-nav-drawer"
        className={cn(
          "fixed top-0 right-0 z-40 h-[100dvh] w-[88%] max-w-[400px] bg-[#FAF8F5] border-l border-[#E7E5E4] shadow-[-12px_0_40px_rgba(28,25,23,0.14)] transition-transform duration-300 lg:hidden flex flex-col",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        {/* Drawer header — locale toggle for quick access */}
        <div className="flex items-center justify-between gap-3 px-6 py-4 border-b border-[#E7E5E4] h-[60px] flex-shrink-0">
          <span
            className={`text-xs font-semibold uppercase tracking-widest text-[#A8A29E] ${
              isHi ? "font-hi" : ""
            }`}
          >
            {isHi ? "भाषा" : "Language"}
          </span>
          <LocaleToggle current={activeLocale} onChange={switchLocale} isPending={isPending} />
        </div>

        {/* Scrollable nav body */}
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          <button
            onClick={() => goToSection("about")}
            className={`w-full text-left font-serif text-lg font-semibold text-[#1C1917] py-4 border-b border-[#E7E5E4] hover:text-[#E8714A] transition-colors cursor-pointer ${
              isHi ? "font-hi" : ""
            }`}
            style={{
              fontFamily: isHi
                ? "var(--font-noto-hi)"
                : "var(--font-fraunces, 'Fraunces', serif)",
            }}
          >
            {tNav("about")}
          </button>

          {/* Specialties — custom expandable */}
          <div className="border-b border-[#E7E5E4]">
            <button
              onClick={() => setMobileSpecOpen((v) => !v)}
              aria-expanded={mobileSpecOpen}
              className={`w-full flex items-center justify-between font-serif text-lg font-semibold text-[#1C1917] py-4 hover:text-[#E8714A] transition-colors cursor-pointer ${
                isHi ? "font-hi" : ""
              }`}
              style={{
                fontFamily: isHi
                  ? "var(--font-noto-hi)"
                  : "var(--font-fraunces, 'Fraunces', serif)",
              }}
            >
              {tNav("specialties")}
              <ChevronDown
                size={18}
                className={`text-[#57534E] transition-transform ${
                  mobileSpecOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileSpecOpen && (
              <ul className="pb-3 space-y-0.5" role="list">
                {SPECIALTIES.map((s) => {
                  const c = COLORS[s.color];
                  return (
                    <li key={s.slug}>
                      <Link
                        href={`/specialties/${s.slug}`}
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-3 py-3 px-2 rounded-lg text-[15px] text-[#3F3A36] hover:bg-white transition-colors ${
                          isHi ? "font-hi" : ""
                        }`}
                      >
                        <span
                          className="inline-flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0"
                          style={{ backgroundColor: c.bg }}
                        >
                          <SpecialtyIcon
                            slug={s.slug}
                            size={20}
                            color={c.tag}
                          />
                        </span>
                        <span className="flex-1">
                          {tBilingual(s.shortName, locale)}
                        </span>
                        {s.comingSoon && (
                          <span className="text-[10px] text-[#A8A29E] font-semibold uppercase tracking-widest">
                            {isHi ? "जल्द" : "Soon"}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link
                    href="/specialties"
                    onClick={() => setOpen(false)}
                    className={`block py-3 px-2 text-sm font-semibold text-[#E8714A] ${
                      isHi ? "font-hi" : ""
                    }`}
                  >
                    {tNav("allSpecialties")} →
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {MOBILE_NAV.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => goToSection(item.sectionId)}
              className={`w-full text-left font-serif text-lg font-semibold text-[#1C1917] py-4 border-b border-[#E7E5E4] hover:text-[#E8714A] transition-colors cursor-pointer ${
                isHi ? "font-hi" : ""
              }`}
              style={{
                fontFamily: isHi
                  ? "var(--font-noto-hi)"
                  : "var(--font-fraunces, 'Fraunces', serif)",
              }}
            >
              {item.label}
            </button>
          ))}

          {/* Bottom CTAs */}
          <button
            onClick={() => goToSection("contact")}
            className={`mt-6 w-full flex items-center justify-center gap-2 bg-[#E8714A] text-white font-semibold py-3.5 rounded-full text-base shadow-[0_4px_20px_rgba(232,113,74,0.32)] cursor-pointer ${
              isHi ? "font-hi" : ""
            }`}
          >
            <CalendarDays size={16} />
            {tNav("bookVisit")}
          </button>
          <a
            href={`tel:${DOCTOR.clinic.phone}`}
            className="mt-3 w-full flex items-center justify-center gap-2 py-3 rounded-full border border-[#E7E5E4] text-sm font-medium text-[#1C1917] hover:bg-white transition-colors"
          >
            <Phone size={14} />
            {DOCTOR.clinic.phone}
          </a>
        </div>
      </aside>
    </>
  );
}

/* ── Shared desktop nav-link class ─────────────────────────────── */
const navLinkCls = (isHi: boolean) =>
  `text-sm font-medium text-[#57534E] px-2.5 py-2 rounded-full whitespace-nowrap hover:bg-[#E7E5E4] hover:text-[#1C1917] transition-all duration-200 cursor-pointer ${
    isHi ? "font-hi" : ""
  }`;

/* ── Locale toggle ─────────────────────────────────────────────── */
function LocaleToggle({
  current,
  onChange,
  isPending = false,
}: {
  current: Locale;
  onChange: (next: Locale) => void;
  isPending?: boolean;
}) {
  return (
    <div
      className={`flex items-center bg-[#E7E5E4]/70 rounded-full p-0.5 transition-opacity ${isPending ? "opacity-50 pointer-events-none" : ""}`}
      role="group"
      aria-label="Language switcher"
    >
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => onChange(l)}
          aria-pressed={current === l}
          disabled={isPending}
          className={`text-xs font-bold px-2.5 sm:px-3 py-1.5 rounded-full transition-colors cursor-pointer min-w-[34px] ${
            current === l
              ? "bg-white text-[#1C1917] shadow-sm"
              : "text-[#57534E] hover:text-[#1C1917]"
          } ${l === "hi" ? "font-hi" : ""}`}
        >
          {l === "hi" ? "हिं" : "EN"}
        </button>
      ))}
    </div>
  );
}

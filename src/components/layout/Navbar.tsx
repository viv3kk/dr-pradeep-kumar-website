"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { DOCTOR } from "@/lib/doctor-data";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how" },
  { label: "Patients", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#FAF8F5]/92 backdrop-blur-xl border-b border-[#E7E5E4]/70 shadow-[0_2px_20px_rgba(28,25,23,0.06)]"
            : "bg-transparent"
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-[1120px] mx-auto px-6 md:px-10 h-[68px] flex items-center gap-8">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 flex-shrink-0"
            aria-label="Dr. Pradeep Kumar Neurology — Home"
          >
            <span
              className="w-2.5 h-2.5 rounded-full bg-[#E8714A] breathe"
              aria-hidden="true"
            />
            <span
              className="font-serif text-[20px] font-bold text-[#1C1917] leading-none"
              style={{ fontFamily: "var(--font-fraunces, 'Fraunces', serif)" }}
            >
              Dr. Pradeep Kumar
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1 ml-auto list-none" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-[#57534E] px-4 py-2 rounded-full
                             hover:bg-[#E7E5E4] hover:text-[#1C1917]
                             transition-all duration-200 cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <a
              href={`tel:${DOCTOR.clinic.phone}`}
              className="flex items-center gap-1.5 text-sm font-medium text-[#57534E]
                         hover:text-[#E8714A] transition-colors"
              aria-label="Call Dr. Pradeep Kumar"
            >
              <Phone size={14} />
              <span className="hidden lg:inline">
                {DOCTOR.clinic.phone.replace("+91-", "")}
              </span>
            </a>
            <button
              onClick={() => handleNavClick("#contact")}
              className="bg-[#E8714A] text-white text-sm font-semibold
                         px-5 py-2.5 rounded-full
                         hover:bg-[#D45E38] transition-all duration-200
                         shadow-[0_4px_16px_rgba(232,113,74,0.28)]
                         hover:shadow-[0_6px_24px_rgba(232,113,74,0.40)]
                         hover:-translate-y-0.5 cursor-pointer"
            >
              Book a visit
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="ml-auto md:hidden p-2 text-[#1C1917] rounded-lg
                       hover:bg-[#E7E5E4] transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-[#FAF8F5] pt-[68px] px-6 pb-8 flex flex-col gap-2
                     md:hidden overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="w-full text-left font-serif text-xl font-semibold text-[#1C1917]
                         py-4 border-b border-[#E7E5E4] hover:text-[#E8714A]
                         transition-colors cursor-pointer"
              style={{ fontFamily: "var(--font-fraunces, 'Fraunces', serif)" }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="mt-6 w-full bg-[#E8714A] text-white font-semibold
                       py-4 rounded-full text-base
                       shadow-[0_4px_20px_rgba(232,113,74,0.32)]
                       cursor-pointer"
          >
            Book a visit →
          </button>
          <a
            href={`tel:${DOCTOR.clinic.phone}`}
            className="flex items-center justify-center gap-2 text-sm
                       text-[#57534E] mt-3"
          >
            <Phone size={14} />
            {DOCTOR.clinic.phone}
          </a>
        </div>
      )}
    </>
  );
}

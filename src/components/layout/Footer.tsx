"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { DOCTOR } from "@/lib/doctor-data";
import { SPECIALTIES, t as tBilingual } from "@/lib/specialties-data";
import type { Locale } from "@/i18n/routing";

export function Footer() {
  const locale = useLocale() as Locale;
  const isHi = locale === "hi";

  const PRACTICE_LINKS = [
    {
      label: isHi ? "डॉ. कुमार के बारे में" : "About Dr. Kumar",
      href: "/#about",
    },
    {
      label: isHi ? "टेलीहेल्थ" : "Telehealth",
      href: "/#how",
    },
    {
      label: isHi ? "मरीज़ों की समीक्षाएँ" : "Patient reviews",
      href: "/reviews",
    },
    {
      label: isHi ? "मरीज़ों की कहानियाँ" : "Success stories",
      href: "/success-stories",
    },
    {
      label: isHi ? "सामान्य प्रश्न" : "FAQ",
      href: "/#faq",
    },
  ];

  const LEGAL_LINKS = [
    isHi ? "गोपनीयता नीति" : "Privacy Policy",
    isHi ? "नियम और शर्तें" : "Terms of Use",
    isHi ? "अभिगम्यता" : "Accessibility",
  ];

  return (
    <footer
      className="bg-[#FAF8F5] border-t border-[#E7E5E4]"
      role="contentinfo"
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <span
                className="w-2 h-2 rounded-full bg-[#E8714A]"
                aria-hidden="true"
              />
              <span
                className={`font-serif text-xl font-bold text-[#1C1917] ${
                  isHi ? "font-hi" : ""
                }`}
                style={{
                  fontFamily: isHi
                    ? "var(--font-noto-hi)"
                    : "var(--font-fraunces, 'Fraunces', serif)",
                }}
              >
                Dr. Pradeep Kumar
              </span>
            </div>
            <p className="text-sm text-[#A8A29E] leading-relaxed mb-1">
              {DOCTOR.title}
            </p>
            <p
              className={`text-sm text-[#A8A29E] leading-relaxed mb-6 ${
                isHi ? "font-hi" : ""
              }`}
            >
              {isHi
                ? "लखनऊ और कानपुर में सहानुभूतिपूर्ण न्यूरोलॉजी देखभाल।"
                : "Compassionate neurology care across Lucknow & Kanpur."}
            </p>

            <div className="space-y-2">
              <p
                className={`text-xs font-semibold text-[#57534E] uppercase tracking-wider ${
                  isHi ? "font-hi" : ""
                }`}
              >
                {isHi ? "संपर्क" : "Contact"}
              </p>
              <a
                href={`tel:${DOCTOR.clinic.phone}`}
                className="block text-sm text-[#57534E] hover:text-[#E8714A] transition-colors"
              >
                {DOCTOR.clinic.phone}
              </a>
              <a
                href={`mailto:${DOCTOR.clinic.email}`}
                className="block text-sm text-[#57534E] hover:text-[#E8714A] transition-colors"
              >
                {DOCTOR.clinic.email}
              </a>
              <p className="text-sm text-[#A8A29E]">{DOCTOR.clinic.timings}</p>
            </div>
          </div>

          {/* Specialties — wired to real pages */}
          <div>
            <h5
              className={`text-xs font-bold uppercase tracking-widest text-[#A8A29E] mb-5 ${
                isHi ? "font-hi" : ""
              }`}
            >
              {isHi ? "विशेषज्ञताएँ" : "Specialties"}
            </h5>
            <ul className="space-y-3" role="list">
              {SPECIALTIES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/specialties/${s.slug}`}
                    className={`text-sm text-[#57534E] hover:text-[#E8714A] transition-colors ${
                      isHi ? "font-hi" : ""
                    }`}
                  >
                    {tBilingual(s.shortName, locale)}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/specialties"
                  className={`text-sm font-semibold text-[#E8714A] hover:text-[#D45E38] transition-colors ${
                    isHi ? "font-hi" : ""
                  }`}
                >
                  {isHi ? "सभी विशेषज्ञताएँ →" : "All specialties →"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice */}
          <div>
            <h5
              className={`text-xs font-bold uppercase tracking-widest text-[#A8A29E] mb-5 ${
                isHi ? "font-hi" : ""
              }`}
            >
              {isHi ? "क्लिनिक" : "Practice"}
            </h5>
            <ul className="space-y-3" role="list">
              {PRACTICE_LINKS.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className={`text-sm text-[#57534E] hover:text-[#E8714A] transition-colors ${
                      isHi ? "font-hi" : ""
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5
              className={`text-xs font-bold uppercase tracking-widest text-[#A8A29E] mb-5 ${
                isHi ? "font-hi" : ""
              }`}
            >
              {isHi ? "क़ानूनी" : "Legal"}
            </h5>
            <ul className="space-y-3" role="list">
              {LEGAL_LINKS.map((label) => (
                <li key={label}>
                  <span
                    className={`text-sm text-[#57534E] cursor-default ${
                      isHi ? "font-hi" : ""
                    }`}
                  >
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#E7E5E4] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className={`text-xs text-[#A8A29E] ${isHi ? "font-hi" : ""}`}>
            © {new Date().getFullYear()} Dr. Pradeep Kumar Neurology.{" "}
            {isHi ? "सभी अधिकार सुरक्षित।" : "All rights reserved."}
          </p>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {[
              { en: "🔒 HIPAA Compliant", hi: "🔒 HIPAA अनुपालित" },
              { en: "♿ WCAG 2.1 AA", hi: "♿ WCAG 2.1 AA" },
              { en: "🏆 Paras Health Verified", hi: "🏆 पारस हेल्थ सत्यापित" },
            ].map((chip) => (
              <span
                key={chip.en}
                className={`text-[11px] font-semibold text-[#A8A29E] bg-white border border-[#E7E5E4] px-3 py-1 rounded-full ${
                  isHi ? "font-hi" : ""
                }`}
              >
                {isHi ? chip.hi : chip.en}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useLocale } from "next-intl";
import { Hourglass } from "lucide-react";
import type { Locale } from "@/i18n/routing";

/* Banner for stub specialties that aren't fully written yet.
   Always points the visitor to the contact form. */
export function ComingSoonBanner() {
  const locale = useLocale() as Locale;
  const isHi = locale === "hi";

  return (
    <section className="py-16 md:py-20 bg-[#FAF8F5]">
      <div className="max-w-[640px] mx-auto px-6 md:px-10 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white border border-[#E7E5E4] mb-5">
          <Hourglass className="text-[#E8714A]" size={22} />
        </div>
        <h2
          className={`font-serif text-[26px] md:text-[32px] font-bold text-[#1C1917] leading-tight mb-4 ${
            isHi ? "font-hi" : ""
          }`}
          style={{
            fontFamily: isHi
              ? "var(--font-noto-hi)"
              : "var(--font-fraunces, 'Fraunces', serif)",
          }}
        >
          {isHi
            ? "इस क्षेत्र के लिए पन्ना जल्द आ रहा है"
            : "This page is on its way"}
        </h2>
        <p
          className={`text-[16px] text-[#57534E] leading-relaxed ${
            isHi ? "font-hi lang-hi" : ""
          }`}
        >
          {isHi
            ? "हम इस हिस्से को सावधानी से लिख रहे हैं ताकि यह सच में मरीज़ों और उनके परिवार के काम आ सके। तब तक, डॉ. कुमार इस बीमारी के मरीज़ क्लिनिक में पहले से देख रहे हैं — कृपया नीचे दिए फ़ॉर्म से अपॉइंटमेंट बुक करें।"
            : "We're writing this section carefully so it actually helps patients and families. In the meantime, Dr. Kumar already treats this condition in clinic — please book a consultation using the form below."}
        </p>
      </div>
    </section>
  );
}

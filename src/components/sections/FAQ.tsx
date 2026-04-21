"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { DOCTOR } from "@/lib/doctor-data";
import { cn } from "@/lib/utils";

function FAQItem({
  q, a, isOpen, onToggle, index,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "reveal border rounded-2xl overflow-hidden transition-all duration-200",
        isOpen
          ? "border-[#E8714A] bg-[#FFF4EE] shadow-[0_4px_16px_rgba(232,113,74,0.08)]"
          : "border-[#E7E5E4] bg-white hover:border-[#E8714A]/50"
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span className="text-sm font-semibold text-[#1C1917] leading-snug">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={cn(
            "text-[#E8714A] flex-shrink-0 transition-transform duration-300",
            isOpen ? "rotate-180" : ""
          )}
          aria-hidden="true"
        />
      </button>

      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        ref={contentRef}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight + "px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <p className="px-6 pb-5 text-sm text-[#57534E] leading-relaxed">
          {a}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("in"), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#FAF8F5]"
      aria-label="Frequently asked questions"
    >
      <div className="max-w-[760px] mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="reveal text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest
                           text-[#E8714A] mb-4">
            FAQ
          </span>
          <h2
            className="font-serif text-[clamp(32px,5vw,52px)] font-bold text-[#1C1917] leading-tight"
            style={{ fontFamily: "var(--font-fraunces, 'Fraunces', serif)" }}
          >
            Questions you&apos;re<br/>
            probably thinking.
          </h2>
          <p className="mt-4 text-[17px] text-[#57534E] max-w-[380px] mx-auto leading-relaxed">
            Can&apos;t find what you&apos;re looking for? Call us directly — we&apos;re here to help.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {DOCTOR.faqs.map((faq, i) => (
            <FAQItem
              key={i}
              index={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* CTA strip */}
        <div className="reveal mt-10 bg-white rounded-3xl border border-[#E7E5E4] p-6 text-center">
          <p className="text-sm font-semibold text-[#1C1917] mb-1">
            Still have questions?
          </p>
          <p className="text-sm text-[#A8A29E] mb-4">
            Our team is available Mon–Sat, 10 AM – 7 PM
          </p>
          <a
            href={`tel:${DOCTOR.clinic.phone}`}
            className="inline-flex items-center gap-2 bg-[#E8714A] text-white
                       font-semibold text-sm px-6 py-3 rounded-full
                       hover:bg-[#D45E38] transition-colors shadow-sm"
          >
            📞 {DOCTOR.clinic.phone}
          </a>
        </div>

      </div>
    </section>
  );
}

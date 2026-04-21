"use client";

import { useEffect, useRef } from "react";
import { CalendarDays, Stethoscope, HeartHandshake } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: <CalendarDays size={28} />,
    title: "Book your visit",
    body: "Choose in-person at Apollomedics Lucknow (₹700) or a video consultation (₹1,000). Most patients get an appointment within the same week.",
    color: "#E8714A",
    bg: "#FFF4EE",
  },
  {
    number: "02",
    icon: <Stethoscope size={28} />,
    title: "Meet Dr. Kumar",
    body: "Expect a thorough, unhurried consultation — in Hindi or English. Dr. Kumar reviews your history, orders the right investigations, and explains everything clearly.",
    color: "#16907A",
    bg: "#EDFAF6",
  },
  {
    number: "03",
    icon: <HeartHandshake size={28} />,
    title: "Heal with a plan",
    body: "You leave with a personalised treatment plan, follow-up schedule, and direct access to our team for any questions between visits.",
    color: "#4F46E5",
    bg: "#EEF2FF",
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("in"), i * 100);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="how"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#FAF8F5]"
      aria-label="How it works"
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest
                           text-[#E8714A] mb-4">
            Your Journey
          </span>
          <h2
            className="font-serif text-[clamp(32px,5vw,52px)] font-bold text-[#1C1917]
                       leading-tight max-w-[460px] mx-auto"
            style={{ fontFamily: "var(--font-fraunces, 'Fraunces', serif)" }}
          >
            Simple steps to<br/>
            <em style={{ fontStyle: "italic" }} className="text-[#E8714A]">better brain health.</em>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden md:block absolute top-[56px] left-[calc(16.67%+24px)]
                       right-[calc(16.67%+24px)] h-0.5 bg-[#E7E5E4]"
            aria-hidden="true"
          />

          {STEPS.map((step, i) => (
            <div
              key={i}
              className="reveal relative flex flex-col gap-5 rounded-3xl border border-[#E7E5E4]
                         bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Step number bubble */}
              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-1"
                  style={{ background: step.bg }}
                >
                  <span style={{ color: step.color }}>{step.icon}</span>
                </div>
                <span
                  className="absolute -top-1 -right-1 text-[10px] font-black
                             w-5 h-5 rounded-full flex items-center justify-center text-white"
                  style={{ background: step.color }}
                >
                  {step.number}
                </span>
              </div>

              <div>
                <h3
                  className="font-serif text-xl font-bold text-[#1C1917] mb-2"
                  style={{ fontFamily: "var(--font-fraunces, 'Fraunces', serif)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-[#57534E] leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center mt-12">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-[#E8714A] text-white
                       font-semibold text-base px-8 py-4 rounded-full
                       shadow-[0_4px_20px_rgba(232,113,74,0.32)]
                       hover:bg-[#D45E38] hover:-translate-y-0.5
                       hover:shadow-[0_8px_28px_rgba(232,113,74,0.42)]
                       transition-all duration-200 cursor-pointer"
          >
            <CalendarDays size={18} />
            Start with step 1 — Book now
          </button>
        </div>

      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";

const PROMISES = [
  {
    emoji: "🕐",
    title: "Time for you",
    body: "Dr. Kumar never rushes a consultation. Every patient gets the time and attention they deserve — questions are always welcome.",
  },
  {
    emoji: "🗣️",
    title: "Plain-language care",
    body: "Complex neurology, explained simply — in Hindi or English. You'll always understand your diagnosis, your options, and your next steps.",
  },
  {
    emoji: "🤝",
    title: "Partnership, not prescription",
    body: "Treatment plans are built together. Your lifestyle, preferences, and goals shape the care you receive — not just the textbook.",
  },
];

export function Promise() {
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

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-to-br from-[#E8714A] to-[#D45E38] overflow-hidden relative"
      aria-label="Our promise to patients"
    >
      {/* Background orb */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full
                   bg-white/10 blur-[80px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full
                   bg-black/10 blur-[80px] pointer-events-none"
      />

      <div className="max-w-[1120px] mx-auto px-6 md:px-10 relative z-10">

        <div className="reveal text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest
                           text-white/70 mb-4">
            Our Promise
          </span>
          <h2
            className="font-serif text-[clamp(32px,5vw,52px)] font-bold text-white
                       leading-tight"
            style={{ fontFamily: "var(--font-fraunces, 'Fraunces', serif)" }}
          >
            You deserve care that<br/>
            <em style={{ fontStyle: "italic" }}>actually listens.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROMISES.map((promise, i) => (
            <div
              key={i}
              className="reveal bg-white/15 backdrop-blur-sm rounded-3xl p-8
                         border border-white/20 hover:bg-white/20 transition-colors"
            >
              <span className="text-5xl block mb-5" role="img" aria-label={promise.title}>
                {promise.emoji}
              </span>
              <h3
                className="font-serif text-xl font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-fraunces, 'Fraunces', serif)" }}
              >
                {promise.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {promise.body}
              </p>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="reveal mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "93%", label: "Patients recommend" },
            { value: "4.9★", label: "Average rating" },
            { value: "5,000+", label: "Lives touched" },
            { value: "< 7 days", label: "Time to first appt." },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p
                className="font-serif text-3xl font-bold text-white leading-none mb-1"
                style={{ fontFamily: "var(--font-fraunces, 'Fraunces', serif)" }}
              >
                {value}
              </p>
              <p className="text-xs text-white/70 font-medium">{label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

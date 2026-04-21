"use client";

import { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { DOCTOR } from "@/lib/doctor-data";

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      id="testimonials"
      ref={sectionRef}
      className="py-24 md:py-32 bg-white"
      aria-label="Patient testimonials"
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="reveal text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest
                           text-[#E8714A] mb-4">
            Patient Stories
          </span>
          <h2
            className="font-serif text-[clamp(32px,5vw,52px)] font-bold text-[#1C1917]
                       leading-tight max-w-[520px] mx-auto"
            style={{ fontFamily: "var(--font-fraunces, 'Fraunces', serif)" }}
          >
            Real people,<br/>
            <em style={{ fontStyle: "italic" }} className="text-[#E8714A]">real recoveries.</em>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex" aria-label={`${DOCTOR.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-[#F59E0B] text-[#F59E0B]"/>
              ))}
            </div>
            <span className="text-sm font-semibold text-[#1C1917]">{DOCTOR.rating}</span>
            <span className="text-sm text-[#A8A29E]">
              from {DOCTOR.ratingCount} verified reviews · {DOCTOR.recommendationScore} recommend
            </span>
          </div>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DOCTOR.testimonials.map((t, i) => (
            <article
              key={i}
              className="reveal bg-[#FAF8F5] rounded-3xl border border-[#E7E5E4]
                         p-7 flex flex-col gap-5 hover:shadow-md transition-shadow
                         hover:-translate-y-0.5 duration-200"
            >
              {/* Stars */}
              <div className="flex" aria-label={`${t.rating} stars`}>
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={13} className="fill-[#F59E0B] text-[#F59E0B]"/>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-[#57534E] leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Condition tag */}
              <span className="inline-block self-start text-[11px] font-semibold
                               text-[#E8714A] bg-[#FEF0EB] border border-[#F5C4B3]
                               px-3 py-1 rounded-full">
                {t.condition}
              </span>

              {/* Patient */}
              <div className="flex items-center gap-3 border-t border-[#E7E5E4] pt-4">
                <span
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFD6C4] to-[#FFA585]
                             flex items-center justify-center text-lg border-2 border-white shadow-sm"
                  role="img"
                  aria-label={t.name}
                >
                  {t.avatar}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#1C1917] leading-tight">{t.name}</p>
                  <p className="text-[11px] text-[#A8A29E]">{t.date}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Trust note */}
        <div className="reveal text-center mt-10">
          <p className="text-sm text-[#A8A29E]">
            Reviews sourced from Apollo 247 and HexaHealth · Verified patients only
          </p>
        </div>

      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import { DOCTOR } from "@/lib/doctor-data";

const SERVICE_COLORS: Record<string, { bg: string; border: string; tag: string; dot: string }> = {
  coral:  { bg: "#FFF4EE", border: "#F5C4B3", tag: "#E8714A", dot: "#E8714A" },
  teal:   { bg: "#EDFAF6", border: "#A7E8D8", tag: "#16907A", dot: "#16907A" },
  navy:   { bg: "#EEF2FF", border: "#C7D2FE", tag: "#4F46E5", dot: "#4F46E5" },
  gold:   { bg: "#FFFBEB", border: "#FDE68A", tag: "#D97706", dot: "#D97706" },
  purple: { bg: "#F5F3FF", border: "#DDD6FE", tag: "#7C3AED", dot: "#7C3AED" },
  sky:    { bg: "#F0F9FF", border: "#BAE6FD", tag: "#0284C7", dot: "#0284C7" },
};

export function Services() {
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

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 md:py-32 bg-white"
      aria-label="Services and treatments"
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="reveal text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest
                           text-[#E8714A] mb-4">
            Services & Treatments
          </span>
          <h2
            className="font-serif text-[clamp(32px,5vw,52px)] font-bold text-[#1C1917]
                       leading-tight max-w-[520px] mx-auto"
            style={{ fontFamily: "var(--font-fraunces, 'Fraunces', serif)" }}
          >
            Conditions we treat<br/>
            <em style={{ fontStyle: "italic" }} className="text-[#E8714A]">with care.</em>
          </h2>
          <p className="mt-4 text-[17px] text-[#57534E] max-w-[460px] mx-auto leading-relaxed">
            Dr. Kumar offers expert management for the full spectrum of neurological conditions,
            from everyday headaches to complex movement disorders.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DOCTOR.services.map((service) => {
            const colors = SERVICE_COLORS[service.color] ?? SERVICE_COLORS.coral;
            return (
              <article
                key={service.id}
                className="reveal group rounded-3xl border p-7 flex flex-col gap-5
                           transition-all duration-300 hover:-translate-y-1
                           hover:shadow-[0_12px_40px_rgba(28,25,23,0.10)]"
                style={{ background: colors.bg, borderColor: colors.border }}
              >
                {/* Icon + name */}
                <div className="flex items-start justify-between gap-4">
                  <span className="text-4xl leading-none" role="img" aria-label={service.name}>
                    {service.icon}
                  </span>
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest
                               px-2.5 py-1 rounded-full text-white flex-shrink-0"
                    style={{ background: colors.tag }}
                  >
                    Expert Care
                  </span>
                </div>

                <div>
                  <h3
                    className="font-serif text-[20px] font-bold text-[#1C1917] leading-tight mb-1"
                    style={{ fontFamily: "var(--font-fraunces, 'Fraunces', serif)" }}
                  >
                    {service.name}
                  </h3>
                  <p className="text-sm font-medium italic" style={{ color: colors.tag }}>
                    {service.tagline}
                  </p>
                </div>

                <p className="text-sm text-[#57534E] leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Condition tags */}
                <div className="flex flex-wrap gap-1.5">
                  {service.conditions.map((cond) => (
                    <span
                      key={cond}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full
                                 bg-white border"
                      style={{ borderColor: colors.border, color: "#57534E" }}
                    >
                      {cond}
                    </span>
                  ))}
                </div>

                {/* Book CTA */}
                <button
                  onClick={scrollToContact}
                  className="mt-auto flex items-center gap-1.5 text-sm font-semibold
                             transition-colors group-hover:gap-2.5 cursor-pointer"
                  style={{ color: colors.tag }}
                  aria-label={`Book appointment for ${service.name}`}
                >
                  Book a consultation
                  <ChevronRight size={15} className="transition-transform group-hover:translate-x-0.5"/>
                </button>
              </article>
            );
          })}
        </div>

        {/* Procedures strip */}
        <div className="reveal mt-12 bg-[#FAF8F5] rounded-3xl border border-[#E7E5E4] p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#A8A29E] mb-5 text-center">
            Procedures & Diagnostics
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {DOCTOR.procedures.map((proc) => (
              <span
                key={proc}
                className="text-sm font-medium text-[#57534E] bg-white
                           border border-[#E7E5E4] px-4 py-2 rounded-full shadow-sm"
              >
                {proc}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

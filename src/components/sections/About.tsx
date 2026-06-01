"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { DOCTOR } from "@/lib/doctor-data";
import { GraduationCap, Award, Languages } from "lucide-react";

const COLOR_MAP: Record<string, string> = {
  coral: "#E8714A",
  teal: "#16907A",
  navy: "#1C4ED8",
  gold: "#D97706",
};

export function About() {
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
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#FAF8F5]"
      aria-label="About Dr. Pradeep Kumar"
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-10">

        {/* Section header */}
        <div className="reveal text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest
                           text-[#E8714A] mb-4">
            About the Doctor
          </span>
          <h2
            className="font-serif text-[clamp(32px,5vw,52px)] font-bold text-[#1C1917]
                       leading-tight max-w-[520px] mx-auto"
            style={{ fontFamily: "var(--font-fraunces, 'Fraunces', serif)" }}
          >
            Healing brains,<br/>
            <em style={{ fontStyle: "italic" }} className="text-[#E8714A]">touching</em> lives.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — illustration + quick facts */}
          <div className="reveal flex flex-col items-center gap-8">
            <div className="relative aspect-square w-full max-w-[360px]">
              <Image
                src="/images/doctor/DPK_bg_transparent.png"
                alt="Dr. Pradeep Kumar"
                fill
                sizes="(max-width: 768px) 90vw, 360px"
                className="rounded-3xl object-cover bg-[#FFF8F4] shadow-sm"
              />
            </div>

            {/* Quick facts chips */}
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { icon: <Award size={14}/>, text: "15+ Years Experience" },
                { icon: <GraduationCap size={14}/>, text: "DM Neurology" },
                { icon: <Languages size={14}/>, text: "Hindi & English" },
              ].map(({ icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold
                             text-[#57534E] bg-white border border-[#E7E5E4]
                             px-3.5 py-2 rounded-full shadow-sm"
                >
                  <span className="text-[#E8714A]">{icon}</span>
                  {text}
                </span>
              ))}
            </div>

            {/* Specialisations list */}
            <div className="w-full bg-white rounded-3xl border border-[#E7E5E4] p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#A8A29E] mb-4">
                Specialisations
              </p>
              <div className="flex flex-wrap gap-2">
                {DOCTOR.specialisations.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-medium text-[#57534E] bg-[#FAF8F5]
                               border border-[#E7E5E4] px-3 py-1.5 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — bio + education timeline */}
          <div className="flex flex-col gap-10">

            {/* Bio */}
            <div className="reveal">
              <p className="text-[17px] text-[#57534E] leading-relaxed mb-4">
                Dr. Pradeep Kumar is a Consultant Neurologist based in Lucknow and Kanpur
                with over <strong className="text-[#1C1917]">15 years of clinical experience</strong>.
                A proud alumnus of King George's Medical University (KGMU) and RMLIMS, he
                specialises in the full spectrum of neurological disorders — from epilepsy and
                migraine to stroke and Parkinson's.
              </p>
              <p className="text-[17px] text-[#57534E] leading-relaxed">
                Dr. Kumar is known for his patient-first approach: he explains complex
                neurological conditions in plain language, listens deeply, and builds
                treatment plans tailored to each patient's life — not just their diagnosis.
              </p>
            </div>

            {/* Education timeline */}
            <div className="reveal">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#A8A29E] mb-6">
                Education & Career Journey
              </p>
              <ol className="relative border-l-2 border-[#E7E5E4] ml-3 space-y-0" role="list">
                {DOCTOR.timeline.map((item, i) => (
                  <li key={i} className="relative pl-8 pb-8 last:pb-0">
                    {/* Dot */}
                    <span
                      className="absolute -left-[9px] top-0.5 w-4 h-4 rounded-full
                                 border-2 border-[#E8714A] bg-white"
                      aria-hidden="true"
                    />
                    <span className="text-xs font-bold text-[#E8714A] block mb-0.5">
                      {item.year}
                    </span>
                    <p className="text-sm font-semibold text-[#1C1917] leading-tight">
                      {item.title}
                    </p>
                    <p className="text-sm text-[#A8A29E] leading-snug mt-0.5">{item.body}</p>
                  </li>
                ))}
              </ol>
            </div>

          </div>
        </div>

        {/* Credentials — full-width row below the intro grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {/* Academic & community work */}
          <div className="reveal bg-gradient-to-br from-[#FFF4EE] to-[#FEF0EB] rounded-3xl border border-[#F5C4B3] p-6 md:p-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#A8A29E] mb-4">
              Academic & Community Work
            </p>
            <ul className="space-y-2.5" role="list">
              {DOCTOR.research.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#57534E]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8714A] mt-2 flex-shrink-0" aria-hidden="true"/>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Professional memberships */}
          <div className="reveal bg-white rounded-3xl border border-[#E7E5E4] p-6 md:p-7 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#A8A29E] mb-4">
              Professional Memberships
            </p>
            <ul className="space-y-2.5" role="list">
              {DOCTOR.memberships.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#57534E]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16907A] mt-2 flex-shrink-0" aria-hidden="true"/>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

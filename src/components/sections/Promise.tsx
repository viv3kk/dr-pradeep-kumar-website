"use client";

import { useEffect, useRef } from "react";

const TEAM = [
  { emoji: "👨‍⚕️", role: "Dr. Pradeep Kumar", sub: "Senior Neurologist" },
  { emoji: "🩺", role: "Junior Doctor", sub: "Neurology Support" },
  { emoji: "🏃", role: "Physiotherapist", sub: "Neuro-Rehabilitation" },
  { emoji: "💊", role: "Pharmacist", sub: "Medication Management" },
  { emoji: "🔬", role: "Lab Technician", sub: "Diagnostics" },
  { emoji: "🧠", role: "Psychologist", sub: "Mental Health Support" },
  { emoji: "📡", role: "Neurotech Specialist", sub: "EEG & NCS" },
  { emoji: "💬", role: "Counselor", sub: "Patient Guidance" },
  { emoji: "🤍", role: "Nursing Team", sub: "Bedside Care" },
  { emoji: "🏠", role: "Home Care", sub: "Care at Your Doorstep" },
];

export function Promise() {
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
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-to-br from-[#E8714A] to-[#D45E38] overflow-hidden relative"
      aria-label="Our dedicated team"
    >
      {/* Background orbs */}
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

        {/* Header */}
        <div className="reveal text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest
                           text-white/70 mb-4">
            Our Dedicated Team
          </span>
          <h2
            className="font-serif text-[clamp(32px,5vw,52px)] font-bold text-white
                       leading-tight"
            style={{ fontFamily: "var(--font-fraunces, 'Fraunces', serif)" }}
          >
            A full team, caring<br/>
            <em style={{ fontStyle: "italic" }}>for you.</em>
          </h2>
          <p className="mt-5 text-white/80 text-[17px] max-w-[480px] mx-auto leading-relaxed">
            Dr. Kumar is backed by a multidisciplinary team committed to whole-person neurological care.
          </p>

          {/* Tagline badges */}
          <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
            <span className="inline-flex items-center gap-2 bg-white/20 border border-white/30
                             text-white text-sm font-semibold px-4 py-2 rounded-full backdrop-blur-sm">
              <span aria-hidden="true">🏠</span> Care at your doorstep
            </span>
            <span className="inline-flex items-center gap-2 bg-white/20 border border-white/30
                             text-white text-sm font-semibold px-4 py-2 rounded-full backdrop-blur-sm">
              <span aria-hidden="true">🕐</span> 24×7 Support
            </span>
          </div>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {TEAM.map((member, i) => (
            <div
              key={i}
              className="reveal bg-white/15 backdrop-blur-sm rounded-2xl p-5
                         border border-white/20 hover:bg-white/22 transition-colors
                         flex flex-col items-center text-center gap-3"
            >
              <span className="text-4xl" role="img" aria-label={member.role}>
                {member.emoji}
              </span>
              <div>
                <p className="text-sm font-bold text-white leading-tight">
                  {member.role}
                </p>
                <p className="text-xs text-white/70 mt-0.5 leading-snug">
                  {member.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="reveal mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "93%", label: "Patients recommend" },
            { value: "4.9★", label: "Average rating" },
            { value: "25,000+", label: "Lives touched" },
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

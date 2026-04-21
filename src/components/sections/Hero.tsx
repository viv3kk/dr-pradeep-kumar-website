"use client";

import { useEffect, useRef } from "react";
import { CalendarDays, ChevronRight, Star } from "lucide-react";
import { DOCTOR } from "@/lib/doctor-data";

/* ── Blob SVG doctor illustration (Headspace-inspired) ─────── */
function DoctorIllustration() {
  return (
    <svg
      width="220" height="280"
      viewBox="0 0 220 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="block mx-auto float-anim"
    >
      {/* White coat body */}
      <ellipse cx="110" cy="240" rx="72" ry="60" fill="#F5F0EA" />
      <path d="M50 218 Q46 265 54 278 L166 278 Q174 265 170 218 Q148 202 110 202 Q72 202 50 218Z"
        fill="white" stroke="#E7E5E4" strokeWidth="1.5"/>
      <path d="M96 206 L110 228 L124 206" fill="#FFF4EE" stroke="#F5C4B3" strokeWidth="1"/>
      {/* Pocket */}
      <rect x="122" y="228" width="26" height="20" rx="5" fill="#FEF0EB" stroke="#E8714A" strokeWidth="1.2"/>
      <rect x="128" y="222" width="4" height="12" rx="2" fill="#E8714A"/>
      <rect x="134" y="222" width="4" height="14" rx="2" fill="#16907A"/>
      {/* Stethoscope */}
      <path d="M85 220 Q72 235 76 250 Q80 262 92 262 Q104 262 104 250 Q104 243 99 241"
        stroke="#E8714A" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      <circle cx="99" cy="240" r="6" fill="#E8714A"/>
      {/* Head */}
      <ellipse cx="110" cy="128" rx="54" ry="58" fill="#F5DCC8"/>
      {/* Hair */}
      <ellipse cx="110" cy="82" rx="54" ry="30" fill="#2D1A0A"/>
      <ellipse cx="70" cy="100" rx="19" ry="26" fill="#2D1A0A"/>
      <ellipse cx="150" cy="100" rx="19" ry="26" fill="#2D1A0A"/>
      {/* Ears */}
      <ellipse cx="58" cy="128" rx="7" ry="10" fill="#F5DCC8"/>
      <ellipse cx="162" cy="128" rx="7" ry="10" fill="#F5DCC8"/>
      {/* Eyes */}
      <ellipse cx="93" cy="126" rx="9" ry="10" fill="white"/>
      <ellipse cx="127" cy="126" rx="9" ry="10" fill="white"/>
      <ellipse cx="94" cy="127" rx="5.5" ry="6.5" fill="#2D1A0A"/>
      <ellipse cx="128" cy="127" rx="5.5" ry="6.5" fill="#2D1A0A"/>
      <circle cx="96" cy="125" r="2" fill="white"/>
      <circle cx="130" cy="125" r="2" fill="white"/>
      {/* Eyebrows */}
      <path d="M83 113 Q93 108 103 112" stroke="#2D1A0A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M117 112 Q127 108 137 113" stroke="#2D1A0A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Smile */}
      <path d="M95 146 Q110 158 125 146" stroke="#BF7060" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Cheeks */}
      <ellipse cx="82" cy="143" rx="11" ry="7" fill="#F7B4A0" opacity="0.45"/>
      <ellipse cx="138" cy="143" rx="11" ry="7" fill="#F7B4A0" opacity="0.45"/>
      {/* Clipboard */}
      <rect x="144" y="228" width="38" height="46" rx="7" fill="#FFF4EE" stroke="#E8714A" strokeWidth="1.5"/>
      <line x1="152" y1="242" x2="174" y2="242" stroke="#E8714A" strokeWidth="2" strokeLinecap="round"/>
      <line x1="152" y1="251" x2="174" y2="251" stroke="#E8714A" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <line x1="152" y1="259" x2="166" y2="259" stroke="#E8714A" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

/* ── Patient illustration ──────────────────────────────────── */
function PatientIllustration() {
  return (
    <svg
      width="160" height="240"
      viewBox="0 0 160 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="block mx-auto float-anim float-anim-2"
    >
      <ellipse cx="80" cy="200" rx="54" ry="52" fill="#FEF0EB"/>
      <path d="M36 185 Q32 228 40 240 L120 240 Q128 228 124 185 Q106 170 80 170 Q54 170 36 185Z"
        fill="#E4FAF5" stroke="#A7E8D8" strokeWidth="1.5"/>
      <ellipse cx="80" cy="110" rx="42" ry="46" fill="#F5DCC8"/>
      <ellipse cx="80" cy="74" rx="42" ry="24" fill="#1A0A00"/>
      <ellipse cx="48" cy="90" rx="15" ry="20" fill="#1A0A00"/>
      <ellipse cx="68" cy="110" rx="7" ry="8" fill="white"/>
      <ellipse cx="92" cy="110" rx="7" ry="8" fill="white"/>
      <ellipse cx="69" cy="111" rx="4.5" ry="5" fill="#1A0A00"/>
      <ellipse cx="93" cy="111" rx="4.5" ry="5" fill="#1A0A00"/>
      <circle cx="71" cy="109" r="1.5" fill="white"/>
      <circle cx="95" cy="109" r="1.5" fill="white"/>
      <path d="M70 126 Q80 134 90 126" stroke="#BF7060" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="60" cy="123" rx="8" ry="5" fill="#F7B4A0" opacity="0.45"/>
      <ellipse cx="100" cy="123" rx="8" ry="5" fill="#F7B4A0" opacity="0.45"/>
      {/* Floating heart */}
      <path d="M80 50 C80 50 72 43 72 37 C72 33 75 30 80 33 C85 30 88 33 88 37 C88 43 80 50 80 50Z"
        fill="#E8714A" opacity="0.75">
        <animateTransform attributeName="transform" type="scale"
          values="1;1.25;1" dur="2s" repeatCount="indefinite"
          additive="sum" origin="80 40"/>
      </path>
    </svg>
  );
}

/* ── Floating badge ────────────────────────────────────────── */
function FloatingBadge({
  children, className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`absolute bg-white rounded-2xl px-4 py-3 shadow-[0_6px_24px_rgba(28,25,23,0.12)]
                     border border-[#E7E5E4] flex items-center gap-2.5 float-anim ${className}`}>
      {children}
    </div>
  );
}

/* ── Main Hero Component ───────────────────────────────────── */
export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  /* Reveal on mount */
  useEffect(() => {
    const els = heroRef.current?.querySelectorAll(".reveal");
    const timer = setTimeout(() => {
      els?.forEach((el, i) => {
        setTimeout(() => el.classList.add("in"), i * 120);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col overflow-hidden
                 bg-gradient-to-b from-[#FFF4EE] via-[#FAF8F5] to-[#FAF8F5]
                 pt-[68px]"
      aria-label="Dr. Pradeep Kumar — Neurologist"
    >
      {/* Ambient orbs */}
      <div aria-hidden="true"
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full
                   bg-[#E8714A]/10 blur-[100px] pointer-events-none
                   animate-[driftOrb_14s_ease-in-out_infinite_alternate]"/>
      <div aria-hidden="true"
        className="absolute top-0 -right-24 w-[500px] h-[500px] rounded-full
                   bg-[#16907A]/08 blur-[80px] pointer-events-none
                   animate-[driftOrb_18s_ease-in-out_infinite_alternate-reverse]"/>

      {/* ── Text content (centered) ─────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center text-center
                      max-w-[780px] mx-auto px-6 pt-16 md:pt-24">

        {/* Eyebrow tag */}
        <div className="reveal mb-7">
          <span className="inline-flex items-center gap-2 bg-[#FEF0EB] text-[#E8714A]
                           border border-[#F5C4B3] rounded-full px-5 py-2
                           text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8714A] breathe" aria-hidden="true"/>
            Neurologist · Lucknow &amp; Kanpur · 11+ Years
          </span>
        </div>

        {/* Headline */}
        <h1
          className="reveal font-serif text-[clamp(42px,7vw,76px)] font-bold leading-[1.07]
                     text-[#1C1917] mb-6 tracking-tight"
          style={{ fontFamily: "var(--font-fraunces, 'Fraunces', serif)" }}
        >
          Your brain health<br/>
          deserves{" "}
          <em className="italic text-[#E8714A] not-italic" style={{ fontStyle: "italic" }}>
            gentle
          </em>
          ,{" "}
          <br className="hidden sm:block"/>
          expert care.
        </h1>

        {/* Sub */}
        <p className="reveal text-[17px] md:text-[19px] text-[#57534E] max-w-[480px]
                      leading-relaxed mb-10">
          {DOCTOR.subTagline}
        </p>

        {/* CTAs */}
        <div className="reveal flex flex-col sm:flex-row gap-3 mb-10">
          <button
            onClick={() => scrollTo("contact")}
            className="flex items-center justify-center gap-2 bg-[#E8714A] text-white
                       font-semibold text-base px-8 py-4 rounded-full
                       shadow-[0_4px_20px_rgba(232,113,74,0.32)]
                       hover:bg-[#D45E38] hover:-translate-y-0.5
                       hover:shadow-[0_8px_28px_rgba(232,113,74,0.42)]
                       transition-all duration-200 cursor-pointer"
          >
            <CalendarDays size={18}/>
            Book a free consultation
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="flex items-center justify-center gap-2 text-[#1C1917] font-semibold
                       text-base px-8 py-4 rounded-full
                       border-2 border-[#E7E5E4]
                       hover:border-[#E8714A] hover:text-[#E8714A]
                       transition-all duration-200 cursor-pointer"
          >
            Meet Dr. Kumar
            <ChevronRight size={16}/>
          </button>
        </div>

        {/* Social proof pill */}
        <div className="reveal flex items-center gap-3 bg-white rounded-full
                        px-4 py-2.5 shadow-[0_2px_16px_rgba(28,25,23,0.07)]
                        border border-[#E7E5E4] mb-16">
          <div className="flex" aria-hidden="true">
            {["😊", "🧑", "👩", "👴"].map((e, i) => (
              <span key={i}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFD6C4] to-[#FFA585]
                           flex items-center justify-center text-sm border-2 border-white
                           shadow-sm -ml-2 first:ml-0"
                aria-hidden="true"
              >{e}</span>
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex" aria-label="4.9 star rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} className="fill-[#F59E0B] text-[#F59E0B]"/>
              ))}
            </div>
            <span className="text-sm text-[#57534E]">
              <strong className="text-[#1C1917]">{DOCTOR.patients} patients</strong>
              {" "}· {DOCTOR.rating} rating · {DOCTOR.recommendationScore} recommend
            </span>
          </div>
        </div>
      </div>

      {/* ── Illustration scene ──────────────────────────────── */}
      <div className="reveal relative z-10 max-w-[860px] mx-auto w-full px-6 pb-0">
        <div className="relative bg-gradient-to-b from-[#FFF0E8] to-[#FFF8F4]
                        rounded-t-[40px] pt-12 pb-0 min-h-[320px] md:min-h-[380px]
                        flex items-end justify-center gap-8 md:gap-16 overflow-hidden
                        shadow-[0_-4px_40px_rgba(232,113,74,0.08)]">

          {/* Badge 1 */}
          <FloatingBadge className="top-6 left-6 md:left-12 float-anim">
            <span className="text-2xl" aria-hidden="true">🏥</span>
            <div>
              <p className="text-xs font-bold text-[#1C1917] leading-tight">Apollomedics</p>
              <p className="text-[10px] text-[#A8A29E]">Super Speciality, Lucknow</p>
            </div>
          </FloatingBadge>

          {/* Badge 2 */}
          <FloatingBadge className="top-6 right-6 md:right-12 float-anim float-anim-2">
            <span className="text-2xl" aria-hidden="true">🎓</span>
            <div>
              <p className="text-xs font-bold text-[#1C1917] leading-tight">KGMU &amp; RMLIMS</p>
              <p className="text-[10px] text-[#A8A29E]">MD &amp; DM Neurology</p>
            </div>
          </FloatingBadge>

          {/* Doctor + Patient illustrations */}
          <DoctorIllustration/>
          <PatientIllustration/>

          {/* Stats strip inside scene */}
          <div className="absolute bottom-0 inset-x-0 bg-white/80 backdrop-blur-sm
                          border-t border-[#E7E5E4] grid grid-cols-4 divide-x divide-[#E7E5E4]">
            {DOCTOR.stats.map((stat) => (
              <div key={stat.label} className="px-4 py-3 text-center">
                <p className="font-serif font-bold text-xl text-[#1C1917] leading-none"
                   style={{ fontFamily: "var(--font-fraunces, 'Fraunces', serif)" }}>
                  {stat.value}
                </p>
                <p className="text-[10px] text-[#A8A29E] mt-0.5 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

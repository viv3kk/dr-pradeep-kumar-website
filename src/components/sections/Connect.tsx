"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarDays, ExternalLink } from "lucide-react";
import { DOCTOR } from "@/lib/doctor-data";
import {
  ClinicIcon,
  MapPinIcon,
  ClockIcon,
  PhoneIcon,
  CalendarIcon,
} from "@/components/icons/MedicalIcons";

export function Connect() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [activeClinic, setActiveClinic] = useState(0);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    condition: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production this would POST to an API route
    setSubmitted(true);
  };

  const clinic = DOCTOR.clinics[activeClinic];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="pt-24 md:pt-32 pb-16 md:pb-20 bg-[#FAF8F5]"
      aria-label="Book an appointment"
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="reveal text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#E8714A] mb-4">
            Book an Appointment
          </span>
          <h2
            className="font-serif text-[clamp(32px,5vw,52px)] font-bold text-[#1C1917] leading-tight max-w-[500px] mx-auto"
            style={{ fontFamily: "var(--font-fraunces, 'Fraunces', serif)" }}
          >
            Let&apos;s take the<br />
            <em style={{ fontStyle: "italic" }} className="text-[#E8714A]">
              first step together.
            </em>
          </h2>
        </div>

        {/* Weekly schedule ribbon — full width */}
        <div className="reveal bg-white rounded-3xl border border-[#E7E5E4] p-4 mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#A8A29E] mb-3 px-2">
            Where Dr. Kumar is this week
          </p>
          <div className="grid grid-cols-7 gap-1.5">
            {DOCTOR.weeklySchedule.map((d) => {
              const isAvailable = d.location === "Available";
              return (
                <div
                  key={d.day}
                  className={`rounded-xl py-2.5 px-1 text-center ${
                    d.location === "Kanpur"
                      ? "bg-[#EEF2FF] border border-[#C7D2FE]"
                      : d.location === "Lucknow"
                        ? "bg-[#FFF4EE] border border-[#F5C4B3]"
                        : isAvailable
                          ? "bg-[#EDFAF6] border border-[#A7E8D8]"
                          : "bg-[#FAF8F5] border border-[#E7E5E4]"
                  }`}
                >
                  <p className="text-[10px] font-bold uppercase text-[#A8A29E] tracking-widest">
                    {d.day}
                  </p>
                  <p
                    className={`text-[11px] font-semibold mt-0.5 ${
                      d.location === "Kanpur"
                        ? "text-[#4F46E5]"
                        : d.location === "Lucknow"
                          ? "text-[#E8714A]"
                          : isAvailable
                            ? "text-[#16907A]"
                            : "text-[#A8A29E]"
                    }`}
                  >
                    {isAvailable ? "Avail." : d.location}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* ─── Left — booking form ────────────────────────────── */}
          <div className="reveal bg-white rounded-3xl border border-[#E7E5E4] p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center gap-5 py-10 text-center">
                <span className="text-6xl" role="img" aria-label="Success">
                  🎉
                </span>
                <h3
                  className="font-serif text-2xl font-bold text-[#1C1917]"
                  style={{ fontFamily: "var(--font-fraunces, 'Fraunces', serif)" }}
                >
                  Request received!
                </h3>
                <p className="text-sm text-[#57534E] max-w-[280px] leading-relaxed">
                  Our team will call you within 24 hours to confirm your appointment with Dr. Kumar.
                  You can also call directly at{" "}
                  <a
                    href={`tel:${DOCTOR.clinic.phone}`}
                    className="font-semibold text-[#E8714A]"
                  >
                    {DOCTOR.clinic.phone}
                  </a>
                  .
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", phone: "", condition: "", message: "" });
                  }}
                  className="text-sm font-medium text-[#E8714A] underline underline-offset-2 cursor-pointer"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                {/* Fee info */}
                <div className="rounded-2xl bg-[#FFF4EE] border border-[#F5C4B3] px-4 py-3 flex items-center gap-3">
                  <ClinicIcon size={18} className="text-[#E8714A] flex-shrink-0" />
                  <p className="text-sm text-[#57534E]">
                    In-person consultation ·{" "}
                    <span className="font-semibold text-[#1C1917]">
                      {DOCTOR.fees.currency}{DOCTOR.fees.inPerson}
                    </span>
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#57534E] mb-2"
                  >
                    Full name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full text-sm px-4 py-3 rounded-xl border border-[#E7E5E4] bg-[#FAF8F5] text-[#1C1917] placeholder:text-[#C7C3BF] focus:outline-none focus:border-[#E8714A] focus:ring-2 focus:ring-[#E8714A]/10 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-[#57534E] mb-2"
                  >
                    Mobile number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full text-sm px-4 py-3 rounded-xl border border-[#E7E5E4] bg-[#FAF8F5] text-[#1C1917] placeholder:text-[#C7C3BF] focus:outline-none focus:border-[#E8714A] focus:ring-2 focus:ring-[#E8714A]/10 transition-colors"
                  />
                </div>

                {/* Condition */}
                <div>
                  <label
                    htmlFor="condition"
                    className="block text-sm font-semibold text-[#57534E] mb-2"
                  >
                    Reason for visit
                  </label>
                  <select
                    id="condition"
                    value={form.condition}
                    onChange={(e) => setForm({ ...form, condition: e.target.value })}
                    className="w-full text-sm px-4 py-3 rounded-xl border border-[#E7E5E4] bg-[#FAF8F5] text-[#1C1917] focus:outline-none focus:border-[#E8714A] focus:ring-2 focus:ring-[#E8714A]/10 transition-colors cursor-pointer"
                  >
                    <option value="">Select a condition (optional)</option>
                    {DOCTOR.specialisations.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                    <option value="Other">Other / Not sure</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[#57534E] mb-2"
                  >
                    Brief description
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us briefly about your symptoms or concerns…"
                    className="w-full text-sm px-4 py-3 rounded-xl border border-[#E7E5E4] bg-[#FAF8F5] text-[#1C1917] placeholder:text-[#C7C3BF] focus:outline-none focus:border-[#E8714A] focus:ring-2 focus:ring-[#E8714A]/10 transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#E8714A] text-white font-semibold text-base py-4 rounded-full shadow-[0_4px_20px_rgba(232,113,74,0.32)] hover:bg-[#D45E38] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(232,113,74,0.42)] transition-all duration-200 cursor-pointer"
                >
                  <CalendarDays size={18} />
                  Request appointment
                </button>

                <p className="text-[11px] text-[#A8A29E] text-center">
                  We&apos;ll call to confirm within 24 hours. No spam, ever.
                </p>
              </form>
            )}
          </div>

          {/* ─── Right — clinics + map ──────────────────────────── */}
          <div className="flex flex-col gap-5">
            {/* Clinic selector cards (tabs) */}
            <div className="reveal grid grid-cols-3 gap-2.5">
              {DOCTOR.clinics.map((c, i) => {
                const active = activeClinic === i;
                const isKanpur = c.city === "Kanpur";
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setActiveClinic(i)}
                    aria-pressed={active}
                    className={`group text-left rounded-2xl border-2 p-3.5 transition-all cursor-pointer ${
                      active
                        ? isKanpur
                          ? "bg-[#EEF2FF] border-[#4F46E5] shadow-[0_4px_16px_rgba(79,70,229,0.15)]"
                          : "bg-[#FFF4EE] border-[#E8714A] shadow-[0_4px_16px_rgba(232,113,74,0.18)]"
                        : "bg-white border-[#E7E5E4] hover:border-[#A8A29E]"
                    }`}
                  >
                    <ClinicIcon
                      size={20}
                      className="mb-2"
                      style={{
                        color: active
                          ? isKanpur
                            ? "#4F46E5"
                            : "#E8714A"
                          : "#A8A29E",
                      }}
                    />
                    <p className="text-[11px] font-semibold text-[#1C1917] leading-tight">
                      {c.shortName}
                    </p>
                    <p className="text-[10px] text-[#57534E] mt-1 leading-snug">
                      {c.daysSummary}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Map of selected clinic */}
            <div className="reveal rounded-3xl overflow-hidden border border-[#E7E5E4] shadow-sm">
              <iframe
                key={clinic.id}
                src={clinic.mapEmbed}
                width="100%"
                height="240"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${clinic.name} — map`}
              />
            </div>

            {/* Selected clinic details */}
            <div className="reveal bg-white rounded-3xl border border-[#E7E5E4] p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#E8714A] mt-0.5 flex-shrink-0">
                    <MapPinIcon size={20} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#1C1917] leading-snug">
                      {clinic.name}
                    </p>
                    <p className="text-sm text-[#57534E] leading-snug mt-0.5">
                      {clinic.addressLine1}
                      {clinic.addressLine2 ? `, ${clinic.addressLine2}` : ""}
                    </p>
                    <p className="text-xs text-[#A8A29E] mt-0.5">
                      {clinic.city}, {clinic.state} – {clinic.pin}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[#E8714A] flex-shrink-0">
                    <CalendarIcon size={20} />
                  </span>
                  <p className="text-sm text-[#57534E]">
                    <span className="font-semibold text-[#1C1917]">
                      {clinic.daysSummary}
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[#E8714A] flex-shrink-0">
                    <ClockIcon size={20} />
                  </span>
                  <p className="text-sm text-[#57534E]">{clinic.timings}</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[#E8714A] flex-shrink-0">
                    <PhoneIcon size={20} />
                  </span>
                  <a
                    href={`tel:${clinic.phone}`}
                    className="text-sm font-semibold text-[#57534E] hover:text-[#E8714A] transition-colors"
                  >
                    {clinic.phone}
                  </a>
                </div>
              </div>

              <a
                href={clinic.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#E8714A] hover:text-[#D45E38] transition-colors"
              >
                Open in Google Maps
                <ExternalLink size={14} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

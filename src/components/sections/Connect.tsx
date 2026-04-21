"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarDays, Phone, MapPin, Clock, Video, Building2 } from "lucide-react";
import { DOCTOR } from "@/lib/doctor-data";

type ConsultType = "in-person" | "online";

export function Connect() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [consultType, setConsultType] = useState<ConsultType>("in-person");
  const [submitted, setSubmitted] = useState(false);
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

  const fee = consultType === "in-person" ? DOCTOR.fees.inPerson : DOCTOR.fees.online;
  const feeLabel = consultType === "in-person" ? "In-person at Apollomedics" : "Video consultation";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#FAF8F5]"
      aria-label="Book an appointment"
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="reveal text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest
                           text-[#E8714A] mb-4">
            Book an Appointment
          </span>
          <h2
            className="font-serif text-[clamp(32px,5vw,52px)] font-bold text-[#1C1917]
                       leading-tight max-w-[500px] mx-auto"
            style={{ fontFamily: "var(--font-fraunces, 'Fraunces', serif)" }}
          >
            Let&apos;s take the<br/>
            <em style={{ fontStyle: "italic" }} className="text-[#E8714A]">first step together.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left — booking form */}
          <div className="reveal bg-white rounded-3xl border border-[#E7E5E4] p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center gap-5 py-10 text-center">
                <span className="text-6xl" role="img" aria-label="Success">🎉</span>
                <h3
                  className="font-serif text-2xl font-bold text-[#1C1917]"
                  style={{ fontFamily: "var(--font-fraunces, 'Fraunces', serif)" }}
                >
                  Request received!
                </h3>
                <p className="text-sm text-[#57534E] max-w-[280px] leading-relaxed">
                  Our team will call you within 24 hours to confirm your appointment with Dr. Kumar.
                  You can also call directly at{" "}
                  <a href={`tel:${DOCTOR.clinic.phone}`} className="font-semibold text-[#E8714A]">
                    {DOCTOR.clinic.phone}
                  </a>
                  .
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", condition: "", message: "" }); }}
                  className="text-sm font-medium text-[#E8714A] underline underline-offset-2 cursor-pointer"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>

                {/* Consult type toggle */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest
                                    text-[#A8A29E] mb-3">
                    Consultation type
                  </label>
                  <div className="flex rounded-2xl border border-[#E7E5E4] overflow-hidden p-1 bg-[#FAF8F5]">
                    {(["in-person", "online"] as ConsultType[]).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setConsultType(type)}
                        className={`flex-1 flex items-center justify-center gap-2 text-sm font-semibold
                                    py-3 px-4 rounded-xl transition-all duration-200 cursor-pointer
                                    ${consultType === type
                                      ? "bg-white shadow-sm text-[#1C1917] border border-[#E7E5E4]"
                                      : "text-[#A8A29E] hover:text-[#57534E]"
                                    }`}
                        aria-pressed={consultType === type}
                      >
                        {type === "in-person" ? <Building2 size={15}/> : <Video size={15}/>}
                        {type === "in-person" ? "In-person" : "Online"}
                      </button>
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-[#A8A29E]">
                    {feeLabel} ·{" "}
                    <span className="font-semibold text-[#57534E]">
                      {DOCTOR.fees.currency}{fee}
                    </span>
                    {consultType === "online" && (
                      <span className="text-[#16907A]">
                        {" "}(₹{DOCTOR.fees.cashback} cashback via Apollo 247)
                      </span>
                    )}
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#57534E] mb-2">
                    Full name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full text-sm px-4 py-3 rounded-xl border border-[#E7E5E4]
                               bg-[#FAF8F5] text-[#1C1917] placeholder:text-[#C7C3BF]
                               focus:outline-none focus:border-[#E8714A] focus:ring-2
                               focus:ring-[#E8714A]/10 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#57534E] mb-2">
                    Mobile number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full text-sm px-4 py-3 rounded-xl border border-[#E7E5E4]
                               bg-[#FAF8F5] text-[#1C1917] placeholder:text-[#C7C3BF]
                               focus:outline-none focus:border-[#E8714A] focus:ring-2
                               focus:ring-[#E8714A]/10 transition-colors"
                  />
                </div>

                {/* Condition */}
                <div>
                  <label htmlFor="condition" className="block text-sm font-semibold text-[#57534E] mb-2">
                    Reason for visit
                  </label>
                  <select
                    id="condition"
                    value={form.condition}
                    onChange={(e) => setForm({ ...form, condition: e.target.value })}
                    className="w-full text-sm px-4 py-3 rounded-xl border border-[#E7E5E4]
                               bg-[#FAF8F5] text-[#1C1917]
                               focus:outline-none focus:border-[#E8714A] focus:ring-2
                               focus:ring-[#E8714A]/10 transition-colors cursor-pointer"
                  >
                    <option value="">Select a condition (optional)</option>
                    {DOCTOR.specialisations.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                    <option value="Other">Other / Not sure</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#57534E] mb-2">
                    Brief description
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us briefly about your symptoms or concerns…"
                    className="w-full text-sm px-4 py-3 rounded-xl border border-[#E7E5E4]
                               bg-[#FAF8F5] text-[#1C1917] placeholder:text-[#C7C3BF]
                               focus:outline-none focus:border-[#E8714A] focus:ring-2
                               focus:ring-[#E8714A]/10 transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2
                             bg-[#E8714A] text-white font-semibold text-base
                             py-4 rounded-full shadow-[0_4px_20px_rgba(232,113,74,0.32)]
                             hover:bg-[#D45E38] hover:-translate-y-0.5
                             hover:shadow-[0_8px_28px_rgba(232,113,74,0.42)]
                             transition-all duration-200 cursor-pointer"
                >
                  <CalendarDays size={18}/>
                  Request appointment
                </button>

                <p className="text-[11px] text-[#A8A29E] text-center">
                  We&apos;ll call to confirm within 24 hours. No spam, ever.
                </p>

              </form>
            )}
          </div>

          {/* Right — contact info + map */}
          <div className="flex flex-col gap-6">

            {/* Clinic info */}
            <div className="reveal bg-white rounded-3xl border border-[#E7E5E4] p-7 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#A8A29E] mb-5">
                Clinic Details
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building2 size={16} className="text-[#E8714A] mt-0.5 flex-shrink-0"/>
                  <div>
                    <p className="text-sm font-semibold text-[#1C1917]">{DOCTOR.clinic.name}</p>
                    <p className="text-sm text-[#A8A29E]">{DOCTOR.clinic.address}, {DOCTOR.clinic.city}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-[#E8714A] flex-shrink-0"/>
                  <p className="text-sm text-[#57534E]">{DOCTOR.clinic.timings}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#E8714A] flex-shrink-0"/>
                  <a
                    href={`tel:${DOCTOR.clinic.phone}`}
                    className="text-sm font-semibold text-[#57534E] hover:text-[#E8714A] transition-colors"
                  >
                    {DOCTOR.clinic.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-[#E8714A] flex-shrink-0"/>
                  <p className="text-sm text-[#A8A29E]">
                    {DOCTOR.clinic.city}, {DOCTOR.clinic.state} – {DOCTOR.clinic.pin}
                  </p>
                </div>
              </div>

              {/* Fee cards */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-[#FFF4EE] border border-[#F5C4B3] p-4 text-center">
                  <p className="text-xs text-[#A8A29E] mb-1">In-person</p>
                  <p className="font-serif text-2xl font-bold text-[#E8714A]"
                     style={{ fontFamily: "var(--font-fraunces, 'Fraunces', serif)" }}>
                    {DOCTOR.fees.currency}{DOCTOR.fees.inPerson}
                  </p>
                  <p className="text-[10px] text-[#A8A29E] mt-0.5">Follow-up ₹{DOCTOR.fees.followUp}</p>
                </div>
                <div className="rounded-2xl bg-[#EDFAF6] border border-[#A7E8D8] p-4 text-center">
                  <p className="text-xs text-[#A8A29E] mb-1">Online</p>
                  <p className="font-serif text-2xl font-bold text-[#16907A]"
                     style={{ fontFamily: "var(--font-fraunces, 'Fraunces', serif)" }}>
                    {DOCTOR.fees.currency}{DOCTOR.fees.online}
                  </p>
                  <p className="text-[10px] text-[#16907A] mt-0.5">₹{DOCTOR.fees.cashback} cashback</p>
                </div>
              </div>
            </div>

            {/* Map embed */}
            <div className="reveal rounded-3xl overflow-hidden border border-[#E7E5E4] shadow-sm h-[220px]">
              <iframe
                src="https://maps.google.com/maps?q=Apollomedics+Super+Speciality+Hospital+Lucknow&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Apollomedics Hospital, Lucknow — map"
              />
            </div>

            {/* Paras Kanpur note */}
            <div className="reveal bg-white rounded-3xl border border-[#E7E5E4] p-5 flex items-start gap-4">
              <span className="text-3xl" role="img" aria-label="Kanpur clinic">🏥</span>
              <div>
                <p className="text-sm font-semibold text-[#1C1917]">Also visiting: Paras Hospital, Kanpur</p>
                <p className="text-sm text-[#A8A29E] leading-snug mt-0.5">
                  Dr. Kumar holds clinics in Kanpur. Call to confirm the schedule.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

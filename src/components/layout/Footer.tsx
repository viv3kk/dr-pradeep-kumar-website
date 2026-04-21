import Link from "next/link";
import { DOCTOR } from "@/lib/doctor-data";

const FOOTER_LINKS = {
  Services: [
    "Migraine & Headache",
    "Epilepsy & Seizures",
    "Stroke & TIA",
    "Parkinson's Disease",
    "Multiple Sclerosis",
    "Memory & Dementia",
  ],
  Practice: ["About Dr. Kumar", "Telehealth", "Insurance", "Patient Portal", "Research"],
  Legal: ["Privacy Policy", "HIPAA Notice", "Terms of Use", "Accessibility"],
};

export function Footer() {
  return (
    <footer
      className="bg-[#FAF8F5] border-t border-[#E7E5E4]"
      role="contentinfo"
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 pt-16 pb-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E8714A]" aria-hidden="true" />
              <span
                className="font-serif text-xl font-bold text-[#1C1917]"
                style={{ fontFamily: "var(--font-fraunces, 'Fraunces', serif)" }}
              >
                Dr. Pradeep Kumar
              </span>
            </div>
            <p className="text-sm text-[#A8A29E] leading-relaxed mb-1">
              {DOCTOR.title}
            </p>
            <p className="text-sm text-[#A8A29E] leading-relaxed mb-6">
              Compassionate neurology care across Lucknow & Kanpur.
            </p>

            {/* Contact blurb */}
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[#57534E] uppercase tracking-wider">
                Contact
              </p>
              <a
                href={`tel:${DOCTOR.clinic.phone}`}
                className="block text-sm text-[#57534E] hover:text-[#E8714A] transition-colors"
              >
                {DOCTOR.clinic.phone}
              </a>
              <a
                href={`mailto:${DOCTOR.clinic.email}`}
                className="block text-sm text-[#57534E] hover:text-[#E8714A] transition-colors"
              >
                {DOCTOR.clinic.email}
              </a>
              <p className="text-sm text-[#A8A29E]">{DOCTOR.clinic.timings}</p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([col, links]) => (
            <div key={col}>
              <h5 className="text-xs font-bold uppercase tracking-widest text-[#A8A29E] mb-5">
                {col}
              </h5>
              <ul className="space-y-3" role="list">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-[#57534E] hover:text-[#E8714A] transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#E7E5E4] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#A8A29E]">
            © {new Date().getFullYear()} Dr. Pradeep Kumar Neurology. All rights reserved.
          </p>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {["🔒 HIPAA Compliant", "♿ WCAG 2.1 AA", "🏆 Apollo 247 Verified"].map(
              (chip) => (
                <span
                  key={chip}
                  className="text-[11px] font-semibold text-[#A8A29E] bg-white
                             border border-[#E7E5E4] px-3 py-1 rounded-full"
                >
                  {chip}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

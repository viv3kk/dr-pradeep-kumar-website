import { DOCTOR } from "@/lib/doctor-data";

export function TrustStrip() {
  return (
    <div
      className="bg-white border-b border-[#E7E5E4] py-6"
      role="region"
      aria-label="Hospital affiliations and credentials"
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-10">
        <div className="flex flex-col sm:flex-row items-center gap-6 justify-between flex-wrap">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#A8A29E] flex-shrink-0">
            Affiliated with
          </span>
          <div className="flex items-center gap-6 md:gap-10 flex-wrap justify-center">
            {DOCTOR.trust.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity"
              >
                <span
                  className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E7E5E4]
                             flex items-center justify-center text-sm flex-shrink-0"
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#57534E] leading-tight">{item.name}</p>
                  <p className="text-[10px] text-[#A8A29E]">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

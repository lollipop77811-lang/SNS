"use client";

const MARQUEE_ITEMS = [
  "Civil & Commercial Litigation",
  "Corporate Advisory",
  "Arbitration · Domestic & International",
  "Real Estate, Land & Revenue",
  "Banking, Finance & Insolvency",
  "Constitutional & Administrative",
  "Est. 1990",
  "Patna · New Delhi · Ranchi",
  "Continuing Sinha Advocates",
];

export function Marquee() {
  return (
    <div className="relative border-y border-[var(--ink)]/15 bg-[var(--parchment)] py-4">
      <div className="flex overflow-hidden">
        <div className="marquee-track flex shrink-0 items-center gap-8 pr-8">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="font-display text-lg italic text-[var(--ink)]">
                {item}
              </span>
              <span className="h-1 w-1 rounded-full bg-[var(--oxblood)]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

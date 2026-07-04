"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

type Advocate = {
  id: string;
  name: string;
  role: string;
  enrolled: string;
  education: string[];
  specialisations: string[];
  pullQuote: string;
  bio: string;
  initials: string;
};

const ADVOCATES: Advocate[] = [
  {
    id: "diwakar",
    name: "Diwakar Sinha",
    role: "Founder · Senior Advocate",
    enrolled: "Enrolled · 1985",
    education: ["LL.B. · Campus Law Centre, Delhi", "B.A. (Hons.) · Patna University"],
    specialisations: [
      "Civil & Commercial Litigation",
      "Constitutional & Writ",
      "Arbitration",
    ],
    pullQuote:
      "A file should read like an argument a judge can finish in one sitting. If it does not, the work is not done.",
    bio: "Diwakar Sinha founded Sinha Advocates in 1990 after five years of practice at the Patna High Court. Over thirty-five years he has appeared in civil, commercial, writ, and arbitration matters across Bihar, Jharkhand, and the National Capital Region — and before the Supreme Court of India. He continues to lead the firm's most complex matters and to mentor the next generation of counsel in chambers.",
    initials: "DS",
  },
  {
    id: "advocate-2",
    name: "A. Sahay",
    role: "Partner · Corporate & Commercial",
    enrolled: "Enrolled · 2008",
    education: [
      "LL.M. · University of Cambridge",
      "LL.B. · National Law School of India University",
    ],
    specialisations: [
      "Corporate Advisory",
      "Commercial Contracts",
      "M&A and Joint Ventures",
    ],
    pullQuote:
      "A contract that cannot be read aloud in five minutes is usually a contract that has not been thought through.",
    bio: "A. Sahay leads the corporate and commercial advisory practice, with a particular focus on shareholder arrangements, joint ventures, and commercial contracts for promoter-led businesses. Before joining the firm, Sahay practiced in the corporate team of a tier-one Indian firm and read for an LL.M. at Cambridge.",
    initials: "AS",
  },
  {
    id: "advocate-3",
    name: "R. Sinha",
    role: "Partner · Arbitration & Litigation",
    enrolled: "Enrolled · 2012",
    education: [
      "LL.M. · Columbia Law School",
      "LL.B. · National Law University, Delhi",
    ],
    specialisations: [
      "Domestic & International Arbitration",
      "Commercial Litigation",
      "Insolvency (IBC)",
    ],
    pullQuote:
      "Most matters are won in the documents you draft before the dispute begins, not in the courtroom after it has begun.",
    bio: "R. Sinha leads the arbitration and commercial litigation desk. Sinha reads for an LL.M. at Columbia Law School and practiced in the disputes team of an international firm before returning to chambers. The work spans ad hoc and institutional arbitration, IBC proceedings, and award enforcement.",
    initials: "RS",
  },
];

export function Advocates() {
  return (
    <section
      id="advocates"
      className="relative bg-[var(--parchment)] py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 border-b border-[var(--ink)]/15 pb-12">
          <div className="col-span-12 md:col-span-7">
            <div className="mb-5 flex items-center gap-4">
              <span className="font-mono-label text-[11px] text-[var(--oxblood)]">
                §04 · The Advocates
              </span>
              <span className="h-px w-16 bg-[var(--oxblood)]/40" />
            </div>
            <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
              Counsel, in{" "}
              <span className="italic text-[var(--oxblood)]">chambers.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <p className="text-[15px] leading-relaxed text-[var(--slate)]">
              The firm is its advocates. Each profile below is an editorial
              note — training, specialisation, and the way they approach the
              work — not a marketing card.
            </p>
          </div>
        </div>

        {/* Profiles */}
        <div className="mt-8 flex flex-col gap-24 md:gap-32">
          {ADVOCATES.map((adv, i) => (
            <article
              key={adv.id}
              className="grid grid-cols-12 items-start gap-6 md:gap-10"
            >
              {/* Portrait column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="col-span-12 md:col-span-4"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--cream)]">
                  {/* Editorial portrait placeholder — large initials + monogram */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-[12rem] leading-none text-[var(--ink)]/8">
                      {adv.initials}
                    </span>
                  </div>
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg, transparent 0, transparent 4px, #0B0B0C 4px, #0B0B0C 5px)",
                    }}
                  />
                  {/* Frame */}
                  <div className="absolute inset-3 border border-[var(--ink)]/15" />
                  {/* Footer caption */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-[var(--parchment)] px-3 py-2">
                    <span className="font-mono-label text-[9px] text-[var(--slate)]">
                      Plate {String.fromCharCode(65 + i)}
                    </span>
                    <span className="font-mono-label text-[9px] text-[var(--oxblood)]">
                      {adv.enrolled}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Text column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="col-span-12 md:col-span-7 md:col-start-6"
              >
                {/* Name + role */}
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <h3 className="font-display text-4xl leading-tight tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
                    {adv.name}
                  </h3>
                  <span className="font-mono-label text-[11px] text-[var(--oxblood)]">
                    {adv.role}
                  </span>
                </div>

                {/* Pull quote */}
                <div className="mt-8 border-l-2 border-[var(--oxblood)] pl-5">
                  <Quote className="mb-2 h-4 w-4 text-[var(--oxblood)]/50" />
                  <p className="font-display text-xl italic leading-snug text-[var(--ink)] sm:text-2xl md:text-3xl">
                    {adv.pullQuote}
                  </p>
                </div>

                {/* Bio */}
                <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-[var(--slate)]">
                  {adv.bio}
                </p>

                {/* Metadata */}
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="font-mono-label text-[10px] text-[var(--slate)]">
                      Education
                    </p>
                    <ul className="mt-2 space-y-1">
                      {adv.education.map((e) => (
                        <li
                          key={e}
                          className="text-[14px] text-[var(--ink)]"
                        >
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono-label text-[10px] text-[var(--slate)]">
                      Practice
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {adv.specialisations.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-[var(--ink)]/20 px-3 py-1 text-[12px] text-[var(--ink)]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

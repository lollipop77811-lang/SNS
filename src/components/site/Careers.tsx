"use client";

import { motion } from "framer-motion";
import { SectionDivider } from "./SectionDivider";

export function Careers() {
  return (
    <section className="relative overflow-hidden bg-[var(--cream)] py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {/* Left column — heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
            className="col-span-12 md:col-span-6"
          >
            <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
              We hire
              <br />
              <span className="italic text-[var(--oxblood)]">slowly.</span>
            </h2>
            <p className="drop-cap mt-8 max-w-md text-[15px] leading-relaxed text-[var(--slate)]">
              Chambers practice is apprenticeship. We take on a small number of
              junior advocates each year, with the expectation that they will
              read, draft, and appear alongside senior counsel for several
              years before leading their own matters.
            </p>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[var(--slate)]">
              We do not run a recruitment cycle. If you are interested, write to
              us with a short note on why chambers practice — and a sample of
              your writing.
            </p>

            <div className="mt-10">
              <a
                href="mailto:chambers@sslaw.in"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3 font-mono-label text-[11px] text-[var(--parchment)] transition-colors hover:bg-[var(--oxblood)]"
              >
                Write to chambers@sslaw.in →
              </a>
            </div>
          </motion.div>

          {/* Right column — what we look for */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="col-span-12 md:col-span-5 md:col-start-8"
          >
            <div className="border-l-2 border-[var(--oxblood)] pl-6 md:pl-8">
              <p className="font-mono-label text-[10px] text-[var(--slate)]">
                What we read for
              </p>
              <ul className="mt-4 space-y-5">
                {[
                  {
                    h: "A capacity for plain-language writing",
                    b: "If you cannot explain the point in three sentences, you have not understood it yet. We read for clarity first.",
                  },
                  {
                    h: "Patience with the file",
                    b: "Chambers work is research- and drafting-intensive. The matters that matter rarely resolve in a single hearing.",
                  },
                  {
                    h: "Willingness to appear",
                    b: "Junior counsel appear — in person, regularly. The work is not done from a desk.",
                  },
                  {
                    h: "A long horizon",
                    b: "We expect junior advocates to spend several years in chambers. The training only compounds with time.",
                  },
                ].map((item, i) => (
                  <li key={i} className="border-b border-[var(--ink)]/10 pb-5">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono-label text-[10px] text-[var(--oxblood)]">
                        0{i + 1}
                      </span>
                      <h3 className="font-display text-lg leading-tight text-[var(--ink)]">
                        {item.h}
                      </h3>
                    </div>
                    <p className="mt-2 pl-7 text-[14px] leading-relaxed text-[var(--slate)]">
                      {item.b}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Law-report divider */}
        <div className="mt-16">
          <SectionDivider
            label="An invitation, not a posting"
            compact
          />
        </div>
      </div>
    </section>
  );
}

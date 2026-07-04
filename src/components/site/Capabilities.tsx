"use client";

import { motion } from "framer-motion";

const CAPABILITIES = [
  {
    label: "§I",
    title: "Multi-jurisdictional presence",
    body: "Chambers in Patna, New Delhi, and Ranchi allow the firm to appear before the High Courts of Patna, Delhi, and Jharkhand, the Supreme Court of India, and tribunals across the National Capital Region.",
  },
  {
    label: "§II",
    title: "Two generations of practice",
    body: "A founder with three and a half decades at the Bar, working alongside advocates trained at national law schools and abroad — the lineage and the modern toolkit, in the same chambers.",
  },
  {
    label: "§III",
    title: "Counsel-led, writing-driven",
    body: "Every engagement begins with a written assessment, not an estimate. The firm's working culture treats the written file — pleadings, opinions, briefs — as the primary product.",
  },
  {
    label: "§IV",
    title: "Long client relationships",
    body: "A meaningful share of the firm's work comes from clients who have been with the chambers for over a decade. The structure of the firm is built around that continuity, not around case volume.",
  },
];

const DEPTH_AREAS = [
  "Civil & Commercial Suits",
  "Writ Petitions · Articles 226 & 32",
  "Domestic & International Arbitration",
  "SARFAESI & DRT Proceedings",
  "Insolvency & Bankruptcy (IBC, 2016)",
  "Real Estate, Land & Revenue",
  "Corporate & Commercial Contracts",
  "Joint Ventures & Shareholder Arrangements",
  "RERA Matters",
  "Service & Pension Litigation",
  "Constitutional Challenges",
  "Appeals · Supreme Court & High Courts",
];

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative bg-[var(--cream)] py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 border-b border-[var(--ink)]/15 pb-12">
          <div className="col-span-12 md:col-span-7">
            <div className="mb-5 flex items-center gap-4">
              <span className="font-mono-label text-[11px] text-[var(--oxblood)]">
                §05 · Capabilities
              </span>
              <span className="h-px w-16 bg-[var(--oxblood)]/40" />
            </div>
            <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
              Areas of{" "}
              <span className="italic text-[var(--oxblood)]">depth.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <p className="text-[15px] leading-relaxed text-[var(--slate)]">
              Per the rules of the Bar Council of India, this site does not
              publish case outcomes, client testimonials, or comparisons. What
              follows is a description of the firm's structure and areas of
              working depth — not a record of results.
            </p>
          </div>
        </div>

        {/* Capability cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {CAPABILITIES.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative bg-[var(--parchment)] p-7 transition-colors duration-500 hover:bg-[var(--ink)] md:p-10"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono-label text-[11px] text-[var(--oxblood)] transition-colors group-hover:text-[var(--brass-bright)]">
                  {c.label}
                </span>
                <span className="font-mono-label text-[10px] text-[var(--slate)] transition-colors group-hover:text-[var(--parchment)]/50">
                  0{i + 1} / 04
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl leading-tight tracking-tight text-[var(--ink)] transition-colors group-hover:text-[var(--parchment)] sm:text-3xl">
                {c.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--slate)] transition-colors group-hover:text-[var(--parchment)]/70">
                {c.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Depth index — statute-style list */}
        <div className="mt-20 border-t border-[var(--ink)]/15 pt-12">
          <div className="mb-8 flex items-baseline justify-between">
            <h3 className="font-display text-2xl tracking-tight text-[var(--ink)] sm:text-3xl">
              Index of working depth
            </h3>
            <span className="font-mono-label text-[10px] text-[var(--slate)]">
              {DEPTH_AREAS.length} entries
            </span>
          </div>
          <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {DEPTH_AREAS.map((area, i) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
                className="group flex items-baseline gap-3 border-b border-[var(--ink)]/10 py-3"
              >
                <span className="font-mono-label text-[10px] text-[var(--oxblood)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[14px] text-[var(--ink)] transition-colors group-hover:text-[var(--oxblood)]">
                  {area}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

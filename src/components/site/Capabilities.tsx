"use client";

import { motion } from "framer-motion";
import { CAPABILITIES, DEPTH_AREAS } from "./data";
import { SectionDivider } from "./SectionDivider";
import { PullQuote } from "./PullQuote";

export function Capabilities() {
  return (
    <section className="relative bg-[var(--cream)] py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
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
              <p className="drop-cap mt-4 text-[15px] leading-relaxed text-[var(--slate)] transition-colors group-hover:text-[var(--parchment)]/70">
                {c.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Law-report divider */}
        <div className="mt-8">
          <SectionDivider label="Index of working depth" />
        </div>

        {/* Depth index — statute-style list */}
        <div className="mt-4 border-t border-[var(--ink)]/15 pt-12">
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

      {/* Pull-quote breakout */}
      <PullQuote
        eyebrow="§IV · On continuity"
        attribution="A. Sahay · Partner, Corporate & Consultancy"
      >
        A meaningful share of the firm's work comes from clients who have been
        with the chambers for over a decade. The structure of the firm is built
        around that continuity, not around case volume.
      </PullQuote>
    </section>
  );
}

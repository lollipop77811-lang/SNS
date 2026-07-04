"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ARTICLES = [
  {
    id: "01",
    date: "March 2026",
    reading: "8 min",
    section: "Arbitration",
    title: "On drafting an arbitration clause that survives the dispute.",
    excerpt:
      "Most arbitration clauses are written when the parties are still friends. The clause that matters is the one read when they are not. A note on seat, institution, and the wording that quietly becomes the whole case.",
  },
  {
    id: "02",
    date: "February 2026",
    reading: "5 min",
    section: "Corporate",
    title: "Shareholder agreements for promoter-led companies.",
    excerpt:
      "A short note on the clauses we see litigated most often — tag-along, drag-along, deadlocks, and the cost of an ambiguous valuation mechanism.",
  },
  {
    id: "03",
    date: "January 2026",
    reading: "11 min",
    section: "Insolvency",
    title: "Section 9 IBC: the operational creditor's first move.",
    excerpt:
      "The demand notice under Section 8 is the single most consequential document an operational creditor drafts. A note on the form, the defects, and the recent jurisprudence on existence of dispute.",
  },
];

export function Insights() {
  return (
    <section
      id="insights"
      className="relative bg-[var(--parchment)] py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 border-b border-[var(--ink)]/15 pb-12">
          <div className="col-span-12 md:col-span-7">
            <div className="mb-5 flex items-center gap-4">
              <span className="font-mono-label text-[11px] text-[var(--oxblood)]">
                §06 · Insights
              </span>
              <span className="h-px w-16 bg-[var(--oxblood)]/40" />
            </div>
            <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
              Notes from{" "}
              <span className="italic text-[var(--oxblood)]">chambers.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <p className="text-[15px] leading-relaxed text-[var(--slate)]">
              Short notes on points of law the firm works with — written by our
              advocates, intended for clients and counsel alike. Not legal
              advice; a record of our reading.
            </p>
          </div>
        </div>

        {/* Articles */}
        <div className="mt-2">
          {ARTICLES.map((a, i) => (
            <motion.a
              key={a.id}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group grid grid-cols-12 items-baseline gap-4 border-b border-[var(--ink)]/15 py-8 md:gap-8 md:py-10"
            >
              {/* Date / reading */}
              <div className="col-span-12 md:col-span-2">
                <p className="font-mono-label text-[10px] text-[var(--slate)]">
                  {a.date}
                </p>
                <p className="mt-1 font-mono-label text-[10px] text-[var(--slate)]/60">
                  {a.reading} read
                </p>
              </div>

              {/* Section + title */}
              <div className="col-span-12 md:col-span-7">
                <p className="font-mono-label text-[10px] text-[var(--oxblood)]">
                  §{a.id} · {a.section}
                </p>
                <h3 className="mt-2 font-display text-2xl leading-tight tracking-tight text-[var(--ink)] transition-colors group-hover:text-[var(--oxblood)] sm:text-3xl md:text-4xl">
                  {a.title}
                </h3>
                <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-[var(--slate)]">
                  {a.excerpt}
                </p>
              </div>

              {/* CTA */}
              <div className="col-span-12 flex justify-end md:col-span-3">
                <span className="inline-flex items-center gap-2 font-mono-label text-[11px] text-[var(--ink)] transition-colors group-hover:text-[var(--oxblood)]">
                  Read the note
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer of section */}
        <div className="mt-10 flex items-center justify-between">
          <p className="font-mono-label text-[10px] text-[var(--slate)]">
            Notes are issued periodically. No subscription, no newsletter.
          </p>
          <a
            href="#"
            className="link-reveal font-mono-label text-[11px] text-[var(--oxblood)]"
          >
            View all notes →
          </a>
        </div>
      </div>
    </section>
  );
}

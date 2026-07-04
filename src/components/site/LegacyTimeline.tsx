"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

type Milestone = {
  year: string;
  title: string;
  body: string;
  tag: string;
};

const MILESTONES: Milestone[] = [
  {
    year: "1990",
    title: "Sinha Advocates is founded",
    body: "Diwakar Sinha, Advocate, establishes chambers in Patna with a single clerk, two steel almirahs of precedents, and a commitment to plain-language counsel. Civil and writ practice form the spine of the early years.",
    tag: "Founding",
  },
  {
    year: "1996",
    title: "Expansion into corporate advisory",
    body: "As Bihar's industrial base reorganises, the firm begins advising regional manufacturing and trading houses on contracts, labour compliance, and dispute avoidance — moving beyond pure litigation.",
    tag: "Practice",
  },
  {
    year: "2003",
    title: "Chambers in New Delhi",
    body: "A second chamber opens in New Delhi to appear before the Supreme Court and the High Court of Delhi. The firm begins a steady arbitration practice representing infrastructure and real-estate developers.",
    tag: "Expansion",
  },
  {
    year: "2011",
    title: "Ranchi presence established",
    body: "Following the reorganisation of Jharkhand, a third chamber opens in Ranchi to serve mining, land, and revenue matters before the High Court at Ranchi.",
    tag: "Expansion",
  },
  {
    year: "2018",
    title: "Second generation joins chambers",
    body: "A new generation of advocates — trained in Delhi and abroad — joins the firm, bringing structured corporate, banking, and insolvency work into the practice alongside the legacy litigation base.",
    tag: "Generation",
  },
  {
    year: "2024",
    title: "S & S Law Firm is constituted",
    body: "The practice is reconstituted as S & S Law Firm, carrying forward the Sinha Advocates lineage — the same chambers culture, the same counsel-first ethic, modernised for the matters of the coming decade.",
    tag: "Constitution",
  },
];

export function LegacyTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeYear, setActiveYear] = useState(MILESTONES[0].year);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to active milestone index
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(
      MILESTONES.length - 1,
      Math.floor(v * MILESTONES.length)
    );
    const ms = MILESTONES[idx];
    if (ms && ms.year !== activeYear) setActiveYear(ms.year);
  });

  const progressScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="legacy"
      ref={ref}
      className="relative bg-[var(--parchment)]"
      style={{ height: `${MILESTONES.length * 90}vh` }}
    >
      {/* Sticky pinned panel */}
      <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden">
        {/* Section header */}
        <div className="mx-auto flex w-full max-w-[1400px] items-end justify-between px-6 pt-28 md:px-10 md:pt-32">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <span className="font-mono-label text-[11px] text-[var(--oxblood)]">
                §01 · The Legacy
              </span>
              <span className="h-px w-16 bg-[var(--oxblood)]/40" />
            </div>
            <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
              1990 <span className="italic text-[var(--slate)]">to</span>{" "}
              <span className="text-[var(--oxblood)]">today.</span>
            </h2>
          </div>
          <div className="hidden text-right md:block">
            <p className="font-mono-label text-[10px] text-[var(--slate)]">
              Three and a half decades
            </p>
            <p className="font-mono-label text-[10px] text-[var(--slate)]">
              of chambers practice
            </p>
          </div>
        </div>

        {/* Main timeline area */}
        <div className="mx-auto flex w-full max-w-[1400px] flex-1 items-center px-6 md:px-10">
          <div className="grid w-full grid-cols-12 gap-6 md:gap-10">
            {/* Left: massive year */}
            <div className="col-span-12 md:col-span-5">
              <div className="relative">
                <motion.span
                  key={activeYear}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="block font-display text-[clamp(5rem,18vw,12rem)] leading-[0.85] tracking-[-0.04em] text-[var(--ink)]"
                >
                  {activeYear}
                </motion.span>
                <div className="mt-3 flex items-center gap-3">
                  <span className="h-px w-8 bg-[var(--oxblood)]" />
                  <span className="font-mono-label text-[11px] text-[var(--oxblood)]">
                    {MILESTONES.find((m) => m.year === activeYear)?.tag}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: milestone details */}
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <motion.div
                key={activeYear + "-detail"}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="border-l-2 border-[var(--oxblood)] pl-6 md:pl-8"
              >
                <h3 className="font-display text-2xl leading-tight text-[var(--ink)] sm:text-3xl">
                  {MILESTONES.find((m) => m.year === activeYear)?.title}
                </h3>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[var(--slate)]">
                  {MILESTONES.find((m) => m.year === activeYear)?.body}
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom: year index / progress bar */}
        <div className="mx-auto w-full max-w-[1400px] px-6 pb-10 md:px-10">
          <div className="hairline mb-4" />
          <div className="flex items-center justify-between">
            {MILESTONES.map((m) => (
              <button
                key={m.year}
                onClick={() => {
                  // Scroll to the rough position of this milestone
                  const idx = MILESTONES.indexOf(m);
                  const targetEl = ref.current;
                  if (targetEl) {
                    const target =
                      targetEl.offsetTop +
                      (targetEl.offsetHeight * idx) / MILESTONES.length -
                      window.innerHeight / 2;
                    window.scrollTo({ top: target, behavior: "smooth" });
                  }
                }}
                className="group flex flex-col items-start gap-1"
                aria-label={`Jump to ${m.year}`}
              >
                <span
                  className={`font-mono-label text-[10px] transition-colors ${
                    activeYear === m.year
                      ? "text-[var(--oxblood)]"
                      : "text-[var(--slate)]/50 group-hover:text-[var(--ink)]"
                  }`}
                >
                  {m.year}
                </span>
                <span
                  className={`h-px transition-all duration-500 ${
                    activeYear === m.year
                      ? "w-12 bg-[var(--oxblood)]"
                      : "w-6 bg-[var(--ink)]/20 group-hover:bg-[var(--ink)]/40"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Scroll progress line */}
          <div className="mt-6 h-px w-full bg-[var(--ink)]/10">
            <motion.div
              style={{ width }}
              className="h-px bg-[var(--oxblood)]"
            />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <p className="font-mono-label text-[10px] text-[var(--slate)]">
              Scroll to advance
            </p>
            <p className="font-mono-label text-[10px] text-[var(--slate)]">
              {MILESTONES.findIndex((m) => m.year === activeYear) + 1} /{" "}
              {MILESTONES.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (inView) {
      document.body.setAttribute("data-grain-theme", "dark");
    } else {
      // Only revert if no other dark section is active — for simplicity, revert.
      document.body.removeAttribute("data-grain-theme");
    }
    return () => {
      document.body.removeAttribute("data-grain-theme");
    };
  }, [inView]);

  const words =
    "We do not measure the firm by the matters that made headlines. We measure it by the client who returns, a decade later, with the next question.".split(
      " "
    );

  return (
    <section
      ref={ref}
      id="philosophy"
      className="relative overflow-hidden bg-[var(--ink)] py-28 text-[var(--parchment)] md:py-48"
    >
      {/* Architectural motif: faint column lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0, transparent 120px, #F7F5F0 120px, #F7F5F0 121px)",
        }}
      />

      {/* Top hairline + label */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 flex items-center justify-between md:mb-24">
          <div className="flex items-center gap-4">
            <span className="font-mono-label text-[11px] text-[var(--brass)]">
              §03 · Philosophy
            </span>
            <span className="h-px w-16 bg-[var(--brass)]/40" />
          </div>
          <span className="font-mono-label text-[10px] text-[var(--parchment)]/40">
            On the measure of the firm
          </span>
        </div>

        {/* Statement */}
        <motion.p
          className="font-display text-[clamp(1.75rem,4.5vw,4.5rem)] font-light leading-[1.1] tracking-[-0.02em]"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0.12 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, margin: "-30% 0px -30% 0px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`inline-block ${
                word === "returns," || word === "question."
                  ? "italic text-[var(--brass-bright)]"
                  : ""
              }`}
            >
              {word}{" "}
            </motion.span>
          ))}
        </motion.p>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 flex flex-col gap-4 border-t border-[var(--parchment)]/15 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-baseline gap-4">
            <span className="font-display text-2xl italic text-[var(--brass-bright)]">
              D. Sinha
            </span>
            <span className="font-mono-label text-[10px] text-[var(--parchment)]/50">
              Founder · Sinha Advocates, 1990
            </span>
          </div>
          <p className="max-w-md text-[14px] leading-relaxed text-[var(--parchment)]/60">
            Counsel is a long relationship, not a transaction. The firm is built
            to be available — by letter, by call, by chambers visit — when the
            next question arrives.
          </p>
        </motion.div>
      </div>

      {/* Bottom soft fade */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--oxblood)]/20 to-transparent"
      />
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";

type Props = {
  /**
   * "section" — embedded form, dark inverted band within a longer page.
   * "page"    — full-page dark mode (used on /philosophy).
   */
  variant?: "section" | "page";
  /** Hide the section eyebrow + heading when used as a full-page variant. */
  showHeading?: boolean;
};

export function Manifesto({ variant = "section", showHeading = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    // On the page variant, always dark; on the section variant, only while in view.
    if (variant === "page" || inView) {
      document.body.setAttribute("data-grain-theme", "dark");
    } else {
      document.body.removeAttribute("data-grain-theme");
    }
    return () => {
      document.body.removeAttribute("data-grain-theme");
    };
  }, [inView, variant]);

  const words =
    "We do not measure the firm by the matters that made headlines. We measure it by the client who returns, a decade later, with the next question.".split(
      " "
    );

  const isPage = variant === "page";

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden bg-[var(--ink)] text-[var(--parchment)] ${
        isPage ? "py-32 md:py-48" : "py-28 md:py-48"
      }`}
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
          className={`font-light leading-[1.1] tracking-[-0.02em] ${
            isPage
              ? "text-[clamp(1.75rem,4.5vw,4.5rem)]"
              : "text-[clamp(1.75rem,4.5vw,4.5rem)]"
          }`}
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

        {/* Extended philosophy (page variant only) */}
        {isPage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.8 }}
            className="mt-32 grid gap-10 border-t border-[var(--parchment)]/15 pt-16 md:grid-cols-12"
          >
            <div className="md:col-span-4">
              <p className="font-mono-label text-[10px] text-[var(--brass)]">
                §I · On the file
              </p>
              <h3 className="mt-3 font-display text-2xl text-[var(--parchment)] sm:text-3xl">
                The written file is the primary product.
              </h3>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="text-[15px] leading-relaxed text-[var(--parchment)]/75">
                Every engagement begins with a written assessment. We treat
                pleadings, opinions, and briefs as the primary work — not as
                paperwork around a court appearance. A matter that is fully
                briefed in writing is, more often than not, a matter that
                settles on terms the client understood in advance. A matter
                that is not, is a matter that surprises someone.
              </p>
            </div>

            <div className="md:col-span-4 md:col-start-1">
              <p className="font-mono-label text-[10px] text-[var(--brass)]">
                §II · On time
              </p>
              <h3 className="mt-3 font-display text-2xl text-[var(--parchment)] sm:text-3xl">
                Counsel moves at the speed of the matter.
              </h3>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="text-[15px] leading-relaxed text-[var(--parchment)]/75">
                Some matters demand action within hours. Others — succession,
                governance, long-running commercial disputes — unfold across
                years. We do not confuse urgency with importance. The firm's
                structure is built to be available when speed matters, and to
                be patient when patience does.
              </p>
            </div>

            <div className="md:col-span-4 md:col-start-1">
              <p className="font-mono-label text-[10px] text-[var(--brass)]">
                §III · On the client
              </p>
              <h3 className="mt-3 font-display text-2xl text-[var(--parchment)] sm:text-3xl">
                We work for the person, not the file.
              </h3>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="text-[15px] leading-relaxed text-[var(--parchment)]/75">
                Clients are not files. They are companies, families, and
                individuals who carry the consequences of every decision long
                after the matter has closed. We draft, advise, and appear with
                that horizon in mind. The point of the engagement is not the
                engagement — it is what the client does next.
              </p>
            </div>
          </motion.div>
        )}

        {/* Bottom CTA — page variant */}
        {isPage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.7 }}
            className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-[var(--parchment)]/15 pt-10 sm:flex-row sm:items-center"
          >
            <p className="font-display text-2xl italic text-[var(--brass-bright)]">
              The next question.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--parchment)]/30 px-6 py-3 font-mono-label text-[11px] text-[var(--parchment)] transition-colors hover:border-[var(--brass)] hover:bg-[var(--brass)] hover:text-[var(--ink)]"
            >
              Bring it to chambers →
            </Link>
          </motion.div>
        )}
      </div>

      {/* Bottom soft fade */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--oxblood)]/20 to-transparent"
      />
    </section>
  );
}

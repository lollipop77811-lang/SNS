"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type PullQuoteProps = {
  /** The quote text. */
  children: ReactNode;
  /** Attribution line — small mono label beneath the quote. */
  attribution?: string;
  /** Use the light variant on dark backgrounds. */
  light?: boolean;
  /** Optional brass eyebrow above the quote. */
  eyebrow?: string;
};

/**
 * Large editorial pull-quote, set between sections to add visual rhythm.
 * Fraunces italic, oxblood accent rules above and below.
 */
export function PullQuote({
  children,
  attribution,
  light = false,
  eyebrow,
}: PullQuoteProps) {
  const accent = light ? "var(--brass)" : "var(--oxblood)";
  const textColor = light ? "var(--parchment)" : "var(--ink)";
  const attributionColor = light
    ? "var(--parchment)"
    : "var(--slate)";
  const bg = light ? "transparent" : "var(--parchment)";

  return (
    <section
      className="py-20 md:py-32"
      style={{ backgroundColor: bg }}
    >
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          {/* Top accent rule with mark */}
          <div
            className="mx-auto mb-12 flex items-center justify-center gap-4"
            aria-hidden
          >
            <span
              className="h-px w-16"
              style={{ backgroundColor: accent, opacity: 0.5 }}
            />
            <span
              className="font-display text-xl italic"
              style={{ color: accent }}
            >
              §
            </span>
            <span
              className="h-px w-16"
              style={{ backgroundColor: accent, opacity: 0.5 }}
            />
          </div>

          {eyebrow && (
            <p
              className="font-mono-label text-[10px] mb-8"
              style={{ color: accent }}
            >
              {eyebrow}
            </p>
          )}

          <blockquote
            className="font-display text-[clamp(1.5rem,4vw,3rem)] font-light italic leading-[1.2] tracking-[-0.01em]"
            style={{ color: textColor }}
          >
            {children}
          </blockquote>

          {attribution && (
            <p
              className="mt-10 font-mono-label text-[11px]"
              style={{ color: attributionColor }}
            >
              — {attribution}
            </p>
          )}

          {/* Bottom accent rule */}
          <div
            className="mx-auto mt-12 h-px w-24"
            style={{ backgroundColor: accent, opacity: 0.4 }}
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  );
}

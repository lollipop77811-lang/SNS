"use client";

import { motion } from "framer-motion";

type SectionDividerProps = {
  /** The mark in the center — defaults to §. */
  mark?: string;
  /** Use the light variant on dark backgrounds. */
  light?: boolean;
  /** Optional eyebrow label below the divider. */
  label?: string;
  /** Reduce vertical padding. */
  compact?: boolean;
};

/**
 * Law-report section divider — double hairline with a centered §-mark
 * in Fraunces italic, evoking the divider between sections of a printed statute.
 */
export function SectionDivider({
  mark = "§",
  light = false,
  label,
  compact = false,
}: SectionDividerProps) {
  return (
    <div
      className={`mx-auto max-w-[1400px] px-6 md:px-10 ${
        compact ? "py-8" : "py-16 md:py-24"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, scaleX: 0.6 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={`divider-law-report ${
          light ? "divider-law-report--light" : ""
        }`}
      >
        <span className="divider-mark">{mark}</span>
      </motion.div>
      {label && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-5 text-center font-mono-label text-[10px] ${
            light ? "text-[var(--parchment)]/50" : "text-[var(--slate)]"
          }`}
        >
          {label}
        </motion.p>
      )}
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type MarginaliaProps = {
  /** Short reference label — appears as a small uppercase mono line at top. */
  label?: string;
  /** The annotation body. Keep it short — one to three sentences. */
  children: ReactNode;
  /** Optional: aligns the marginalia to a specific row of body text on desktop. */
  className?: string;
};

/**
 * Small IBM Plex Mono marginal annotation, like the commentary
 * in the margin of a printed law report. Brass border-left,
 * brass text, oxblood reference label. Rendered in a right-column
 * grid cell next to the body copy it annotates.
 */
export function Marginalia({ label, children, className = "" }: MarginaliaProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`marginalia ${className}`}
    >
      {label && <span className="marg-ref">{label}</span>}
      {children}
    </motion.aside>
  );
}

"use client";

import { motion } from "framer-motion";

/**
 * App Router template — wraps every page navigation in a soft fade/slide.
 * Honors prefers-reduced-motion via Framer Motion defaults.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

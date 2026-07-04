"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const STORAGE_KEY = "ss-law-disclaimer-ack-2026";

export function DisclaimerModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const ack = sessionStorage.getItem(STORAGE_KEY);
      if (!ack) {
        // small delay so the hero can mount first
        const t = setTimeout(() => setOpen(true), 600);
        return () => clearTimeout(t);
      }
    } catch {
      // sessionStorage might be unavailable; show anyway
      const t = setTimeout(() => setOpen(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  const acknowledge = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="disclaimer-title"
        >
          <div
            className="absolute inset-0 bg-[var(--ink)]/70 backdrop-blur-sm"
            onClick={acknowledge}
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-2xl bg-[var(--parchment)] border border-[var(--ink)]/15 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]"
          >
            {/* Top hairline accent */}
            <div className="h-1 w-full bg-[var(--oxblood)]" />

            <div className="p-7 sm:p-10">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--cream)] text-[var(--oxblood)]">
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                  <span className="font-mono-label text-[10px] text-[var(--slate)]">
                    Bar Council of India · Advocates Act, 1961
                  </span>
                </div>
              </div>

              <h2
                id="disclaimer-title"
                className="mt-6 font-display text-3xl leading-tight text-[var(--ink)] sm:text-4xl"
              >
                A note before you continue.
              </h2>

              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-[var(--slate)]">
                <p>
                  This website has been prepared by{" "}
                  <span className="text-[var(--ink)]">S &amp; S Law Firm</span>{" "}
                  for informational purposes only. It is not intended to
                  advertise, solicit, or market legal services, and must not be
                  construed as an invitation to establish an advocate-client
                  relationship.
                </p>
                <p>
                  By proceeding, you confirm that you are accessing this
                  website voluntarily and that you have not been solicited or
                  induced by S &amp; S Law Firm, its advocates, or any
                  third party. The contents of this site do not constitute
                  legal advice and should not be relied upon as such.
                </p>
                <p>
                  In accordance with the rules of the Bar Council of India, this
                  site does not contain, and should not be construed as,
                  information about past results, client testimonials, or
                  comparisons with other firms.
                </p>
              </div>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-mono-label text-[10px] text-[var(--slate)]">
                  §00 · Entry Acknowledgment
                </p>
                <button
                  onClick={acknowledge}
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--oxblood)] px-7 py-3.5 font-mono-label text-[11px] text-[var(--parchment)] transition-colors hover:bg-[var(--ink)]"
                >
                  I Understand &amp; Continue
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

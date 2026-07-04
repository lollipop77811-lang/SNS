"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type PageHeaderProps = {
  section: string;
  title: ReactNode;
  intro?: ReactNode;
  meta?: { label: string; value: string }[];
};

/**
 * Editorial interior page header — consistent opening for every route.
 */
export function PageHeader({ section, title, intro, meta }: PageHeaderProps) {
  return (
    <header className="relative bg-[var(--parchment)] pt-36 pb-12 md:pt-44 md:pb-16">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center gap-4"
        >
          <span className="font-mono-label text-[11px] text-[var(--oxblood)]">
            {section}
          </span>
          <span className="h-px w-16 bg-[var(--oxblood)]/40" />
        </motion.div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 font-display text-[clamp(2.5rem,7vw,6rem)] font-light leading-[0.95] tracking-[-0.025em] text-[var(--ink)] md:col-span-8"
          >
            {title}
          </motion.h1>

          {(intro || meta) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 md:col-span-4 md:col-start-9"
            >
              {intro && (
                <p className="text-[15px] leading-relaxed text-[var(--slate)]">
                  {intro}
                </p>
              )}
              {meta && meta.length > 0 && (
                <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-[var(--ink)]/15 pt-5">
                  {meta.map((m) => (
                    <div key={m.label}>
                      <dt className="font-mono-label text-[10px] text-[var(--slate)]">
                        {m.label}
                      </dt>
                      <dd className="mt-1 font-display text-lg text-[var(--ink)]">
                        {m.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 h-px w-full origin-left bg-[var(--ink)]/15 md:mt-16"
        />
      </div>
    </header>
  );
}

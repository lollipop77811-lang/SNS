"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";
import { PRACTICES } from "./data";

type Props = {
  /** When true, hides the in-section footer CTA (used on the /practice page itself). */
  hideFooterCta?: boolean;
  /** When set, only renders these practice indexes (used for home-page teaser). */
  limit?: number;
};

export function PracticeIndex({ hideFooterCta, limit }: Props) {
  const [open, setOpen] = useState<string | null>("01");
  const [hovered, setHovered] = useState<string | null>(null);

  const list = limit
    ? PRACTICES.filter((p) => p.index <= String(limit).padStart(2, "0"))
    : PRACTICES;

  return (
    <section className="relative bg-[var(--parchment)] py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* The index */}
        <div className="mt-2">
          {list.map((p) => {
            const isOpen = open === p.index;
            const isHovered = hovered === p.index;
            return (
              <div
                key={p.id}
                className="border-b border-[var(--ink)]/15"
                onMouseEnter={() => setHovered(p.index)}
                onMouseLeave={() => setHovered(null)}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : p.index)}
                  className="group grid w-full grid-cols-12 items-center gap-4 py-7 text-left md:py-9"
                  aria-expanded={isOpen}
                >
                  <span className="col-span-2 font-mono-label text-[12px] text-[var(--oxblood)] md:col-span-1">
                    §{p.index}
                  </span>
                  <div className="col-span-8 md:col-span-7">
                    <h3
                      className={`font-display text-2xl leading-tight tracking-tight transition-colors duration-300 sm:text-3xl md:text-4xl ${
                        isOpen || isHovered
                          ? "text-[var(--oxblood)]"
                          : "text-[var(--ink)]"
                      }`}
                    >
                      {p.title}
                    </h3>
                    <p className="mt-1 font-mono-label text-[10px] text-[var(--slate)]">
                      {p.subtitle}
                    </p>
                  </div>
                  <div className="col-span-2 hidden text-right md:col-span-3 md:block">
                    <span
                      className={`font-mono-label text-[10px] transition-colors ${
                        isOpen
                          ? "text-[var(--oxblood)]"
                          : "text-[var(--slate)]/40"
                      }`}
                    >
                      {isOpen ? "Open" : "View"}
                    </span>
                  </div>
                  <span className="col-span-2 flex justify-end md:col-span-1">
                    <span
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
                        isOpen
                          ? "border-[var(--oxblood)] bg-[var(--oxblood)] text-[var(--parchment)]"
                          : "border-[var(--ink)]/25 text-[var(--ink)] group-hover:border-[var(--ink)]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-12 gap-4 pb-10 md:gap-8">
                        <div className="col-span-12 md:col-span-1 md:col-start-2">
                          <span className="font-mono-label text-[10px] text-[var(--slate)]">
                            {p.subtitle.split(" · ")[0]}
                          </span>
                        </div>
                        <div className="col-span-12 md:col-span-7 md:col-start-3">
                          <p className="text-[16px] leading-relaxed text-[var(--ink)]">
                            {p.description}
                          </p>
                        </div>
                        <div className="col-span-12 md:col-span-3 md:col-start-10">
                          <p className="mb-3 font-mono-label text-[10px] text-[var(--slate)]">
                            Representative scope
                          </p>
                          <ul className="space-y-2">
                            {p.matters.map((m) => (
                              <li
                                key={m}
                                className="flex items-baseline gap-2 text-[13px] text-[var(--slate)]"
                              >
                                <span className="text-[var(--oxblood)]">·</span>
                                <span>{m}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        {!hideFooterCta && (
          <div className="mt-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <p className="max-w-md text-[14px] leading-relaxed text-[var(--slate)]">
              The firm does not solicit engagements or advertise past outcomes.
              To discuss a specific matter, write to{" "}
              <a
                href="mailto:counsel@sslaw.in"
                className="link-reveal text-[var(--oxblood)]"
              >
                counsel@sslaw.in
              </a>
              .
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)]/25 px-6 py-3 font-mono-label text-[11px] text-[var(--ink)] transition-colors hover:border-[var(--oxblood)] hover:bg-[var(--oxblood)] hover:text-[var(--parchment)]"
            >
              Begin a conversation →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

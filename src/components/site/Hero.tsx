"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-[var(--parchment)] pb-12 pt-32 sm:pb-20"
    >
      {/* Subtle architectural backdrop — abstract vertical column lines suggesting a chamber / library */}
      <motion.div
        style={{ y: bgY }}
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent 0, transparent 96px, #0B0B0C 96px, #0B0B0C 97px)",
          }}
        />
        {/* Architectural arches silhouette */}
        <svg
          className="absolute bottom-0 left-1/2 w-[140%] -translate-x-1/2 text-[var(--ink)]"
          style={{ opacity: 0.05 }}
          viewBox="0 0 1200 400"
          fill="none"
          preserveAspectRatio="xMidYMax slice"
        >
          <g stroke="currentColor" strokeWidth="1.2">
            <path d="M0 400 V200 Q100 60 200 200 V400" />
            <path d="M180 400 V220 Q280 80 380 220 V400" />
            <path d="M360 400 V240 Q460 100 560 240 V400" />
            <path d="M540 400 V240 Q640 100 740 240 V400" />
            <path d="M720 400 V220 Q820 80 920 220 V400" />
            <path d="M900 400 V200 Q1000 60 1100 200 V400" />
            <path d="M1080 400 V180 Q1180 40 1280 180 V400" />
          </g>
          <line x1="0" y1="400" x2="1280" y2="400" stroke="currentColor" strokeWidth="1.5" />
          <line x1="0" y1="280" x2="1280" y2="280" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
        </svg>
      </motion.div>

      {/* Top-left meta */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute left-6 top-28 hidden font-mono-label text-[10px] text-[var(--slate)] md:block md:left-10 md:top-32"
      >
        <p>§00 · The Firm</p>
        <p className="mt-1">New Delhi · Patna · Ranchi</p>
      </motion.div>

      {/* Top-right meta */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute right-6 top-28 hidden text-right font-mono-label text-[10px] text-[var(--slate)] md:block md:right-10 md:top-32"
      >
        <p>Vol. XXXV · Est. 1990</p>
        <p className="mt-1">Continuing Sinha Advocates</p>
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex items-center gap-4"
        >
          <span className="h-px w-12 bg-[var(--oxblood)]" />
          <span className="font-mono-label text-[11px] text-[var(--oxblood)]">
            An Established Legacy, Modernized
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          style={{ y: titleY, opacity }}
          className="font-display text-[clamp(3rem,11vw,11rem)] font-light leading-[0.92] tracking-[-0.03em] text-[var(--ink)]"
        >
          <motion.span
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            Continuing
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="block italic text-[var(--oxblood)]"
          >
            a Legacy
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            <span className="font-mono-label align-top text-[clamp(0.875rem,1.5vw,1.25rem)] tracking-widest text-[var(--slate)]">
              Since{" "}
            </span>
            <span className="text-[var(--ink)]">1990</span>
            <span className="text-[var(--brass)]">.</span>
          </motion.span>
        </motion.h1>

        {/* Subhead / founder line */}
        <motion.div
          style={{ y: subtitleY, opacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid gap-8 border-t border-[var(--ink)]/15 pt-8 md:grid-cols-12"
        >
          <div className="md:col-span-6">
            <p className="font-display text-xl leading-relaxed text-[var(--ink)] sm:text-2xl">
              S &amp; S Law Firm carries forward the thirty-five year practice of{" "}
              <span className="italic text-[var(--oxblood)]">
                Sinha Advocates
              </span>
              , founded in 1990 by{" "}
              <span className="text-[var(--ink)]">Diwakar Sinha</span>, Advocate.
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-[15px] leading-relaxed text-[var(--slate)]">
              A full-service Indian law firm serving companies, consultants,
              high-net-worth families, and institutions. Counsel grounded in
              three and a half decades of chambers practice — and built for the
              matters of today.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#practice"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--oxblood)] px-6 py-3 font-mono-label text-[11px] text-[var(--parchment)] transition-colors hover:bg-[var(--ink)]"
              >
                Explore the Practice →
              </a>
              <a
                href="#legacy"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)]/25 px-6 py-3 font-mono-label text-[11px] text-[var(--ink)] transition-colors hover:border-[var(--ink)]"
              >
                Read the Legacy
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="font-mono-label text-[10px] text-[var(--slate)]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="block h-8 w-px bg-[var(--ink)]/40"
        />
      </motion.div>
    </section>
  );
}

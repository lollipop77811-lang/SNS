"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative bg-[var(--ink)] text-[var(--parchment)]">
      {/* Top hairline accent */}
      <div className="h-1 w-full bg-[var(--oxblood)]" />

      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        {/* Top — masthead-style */}
        <div className="grid grid-cols-12 gap-8 border-b border-[var(--parchment)]/15 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="col-span-12 md:col-span-5"
          >
            <div className="flex items-baseline gap-3">
              <Link href="/" className="font-display text-5xl">
                S <span className="text-[var(--brass)]">&amp;</span> S
              </Link>
              <span className="font-mono-label text-[10px] text-[var(--parchment)]/60">
                Law Firm
              </span>
            </div>
            <p className="mt-6 max-w-md font-display text-xl leading-relaxed text-[var(--parchment)]/90">
              Continuing Sinha Advocates. Counsel grounded in thirty-five years
              of chambers practice.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-12 bg-[var(--brass)]" />
              <span className="font-mono-label text-[11px] text-[var(--brass-bright)]">
                Est. 1990 · Diwakar Sinha, Advocate
              </span>
            </div>
          </motion.div>

          {/* Navigation columns */}
          <div className="col-span-6 md:col-span-2 md:col-start-7">
            <p className="font-mono-label text-[10px] text-[var(--parchment)]/50">
              The Firm
            </p>
            <ul className="mt-4 space-y-2">
              {[
                ["/legacy", "Legacy"],
                ["/advocates", "Advocates"],
                ["/capabilities", "Capabilities"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="link-reveal text-[14px] text-[var(--parchment)]/80 hover:text-[var(--brass-bright)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <p className="font-mono-label text-[10px] text-[var(--parchment)]/50">
              Practice
            </p>
            <ul className="mt-4 space-y-2">
              {[
                ["/practice", "Practice Index"],
                ["/insights", "Insights"],
                ["/careers", "Careers"],
                ["/contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="link-reveal text-[14px] text-[var(--parchment)]/80 hover:text-[var(--brass-bright)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-2">
            <p className="font-mono-label text-[10px] text-[var(--parchment)]/50">
              Chambers
            </p>
            <ul className="mt-4 space-y-2 text-[14px] text-[var(--parchment)]/80">
              <li>Raipur</li>
              <li>Bilaspur</li>
            </ul>
            <a
              href="mailto:counsel@sslaw.in"
              className="mt-4 inline-block font-mono text-[12px] text-[var(--brass-bright)] hover:text-[var(--parchment)]"
            >
              counsel@sslaw.in
            </a>
          </div>
        </div>

        {/* Compliance block */}
        <div className="mt-10 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="font-mono-label text-[10px] text-[var(--brass)]">
              Bar Council of India · Compliance Notice
            </p>
            <p className="mt-3 max-w-2xl text-[12px] leading-relaxed text-[var(--parchment)]/55">
              In accordance with the rules of the Bar Council of India, this
              website is published by S &amp; S Law Firm for informational
              purposes only and does not constitute solicitation, advertising,
              or an invitation to establish an advocate-client relationship. The
              firm does not advertise, solicit, or tout for work in any form.
              The contents of this site should not be construed as legal advice.
              Visitor acknowledges having accessed this site voluntarily. The
              firm does not display, and the visitor should not construe, any
              information on this site as past results, client testimonials, or
              comparisons with other firms.
            </p>
          </div>
          <div className="md:col-span-4">
            <p className="font-mono-label text-[10px] text-[var(--brass)]">
              Colophon
            </p>
            <p className="mt-3 text-[12px] leading-relaxed text-[var(--parchment)]/55">
              Set in Fraunces and Inter, with IBM Plex Mono for metadata. Built
              as a multi-page editorial composition. No analytics, no
              third-party trackers.
            </p>
          </div>
        </div>

        {/* Signature motif — bottom */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-[var(--parchment)]/15 pt-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            {/* Wax-seal-style SVG motif */}
            <svg
              viewBox="0 0 64 64"
              className="h-12 w-12 text-[var(--oxblood)]"
              aria-hidden
            >
              <circle
                cx="32"
                cy="32"
                r="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <circle
                cx="32"
                cy="32"
                r="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
                opacity="0.6"
              />
              <text
                x="32"
                y="38"
                textAnchor="middle"
                fontFamily="serif"
                fontSize="14"
                fill="currentColor"
              >
                S&amp;S
              </text>
            </svg>
            <div>
              <p className="font-display text-lg italic text-[var(--parchment)]">
                Sinha &amp; Sinha
              </p>
              <p className="font-mono-label text-[10px] text-[var(--parchment)]/50">
                Est. 1990 · Raipur — Bilaspur · Chhattisgarh
              </p>
            </div>
          </div>
          <p className="font-mono-label text-[10px] text-[var(--parchment)]/40">
            © {new Date().getFullYear()} S &amp; S Law Firm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

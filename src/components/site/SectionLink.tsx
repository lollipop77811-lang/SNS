"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/**
 * A "section-link card" — large editorial link block used to point
 * from the home page to the deeper interior pages.
 */
type SectionLinkProps = {
  href: string;
  section: string;
  title: string;
  body: string;
  cta?: string;
};

export function SectionLink({
  href,
  section,
  title,
  body,
  cta = "Read more",
}: SectionLinkProps) {
  return (
    <Link
      href={href}
      className="group block border-b border-[var(--ink)]/15 py-8 transition-colors first:border-t md:py-10"
    >
      <div className="grid grid-cols-12 items-baseline gap-4 md:gap-8">
        <div className="col-span-12 md:col-span-2">
          <span className="font-mono-label text-[11px] text-[var(--oxblood)]">
            {section}
          </span>
        </div>
        <div className="col-span-12 md:col-span-7">
          <h3 className="font-display text-2xl leading-tight tracking-tight text-[var(--ink)] transition-colors group-hover:text-[var(--oxblood)] sm:text-3xl md:text-4xl">
            {title}
          </h3>
          <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-[var(--slate)]">
            {body}
          </p>
        </div>
        <div className="col-span-12 flex items-center justify-end md:col-span-3">
          <span className="inline-flex items-center gap-2 font-mono-label text-[11px] text-[var(--ink)] transition-colors group-hover:text-[var(--oxblood)]">
            {cta}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}

/**
 * A larger feature block — used for the legacy teaser on the home page.
 */
export function FeatureLink({
  href,
  section,
  title,
  body,
  year,
  cta = "Enter the timeline",
}: SectionLinkProps & { year?: string }) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden bg-[var(--ink)] p-8 text-[var(--parchment)] transition-colors hover:bg-[var(--oxblood)] md:p-12"
    >
      <div className="flex items-center gap-4">
        <span className="font-mono-label text-[11px] text-[var(--brass-bright)]">
          {section}
        </span>
        <span className="h-px w-12 bg-[var(--brass)]/50" />
      </div>
      <div className="mt-8 grid grid-cols-12 items-end gap-6">
        <div className="col-span-12 md:col-span-8">
          <h3 className="font-display text-3xl leading-[0.95] tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h3>
          <p className="mt-5 max-w-md text-[14px] leading-relaxed text-[var(--parchment)]/70">
            {body}
          </p>
        </div>
        {year && (
          <div className="col-span-12 text-right md:col-span-4">
            <span className="font-display text-6xl leading-none text-[var(--brass-bright)] md:text-8xl">
              {year}
            </span>
          </div>
        )}
      </div>
      <div className="mt-10 flex items-center gap-3">
        <span className="font-mono-label text-[11px] text-[var(--parchment)]">
          {cta}
        </span>
        <span className="inline-block transition-transform group-hover:translate-x-2">
          →
        </span>
      </div>
    </Link>
  );
}

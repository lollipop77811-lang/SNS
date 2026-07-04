"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ARTICLES } from "./data";
import { PullQuote } from "./PullQuote";

type Props = {
  /** When set, only renders that many articles (used for home-page teaser). */
  limit?: number;
  /** When true, hides the "View all notes" footer (used on the /insights page itself). */
  hideFooterLink?: boolean;
};

export function Insights({ limit, hideFooterLink }: Props) {
  const list = limit ? ARTICLES.slice(0, limit) : ARTICLES;

  return (
    <section className="relative bg-[var(--parchment)] py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Articles */}
        <div className="mt-2">
          {list.map((a, i) => (
            <motion.a
              key={a.id}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group grid grid-cols-12 items-baseline gap-4 border-b border-[var(--ink)]/15 py-8 md:gap-8 md:py-10"
            >
              {/* Date / reading */}
              <div className="col-span-12 md:col-span-2">
                <p className="font-mono-label text-[10px] text-[var(--slate)]">
                  {a.date}
                </p>
                <p className="mt-1 font-mono-label text-[10px] text-[var(--slate)]/60">
                  {a.reading} read
                </p>
              </div>

              {/* Section + title + excerpt */}
              <div className="col-span-12 md:col-span-7">
                <p className="font-mono-label text-[10px] text-[var(--oxblood)]">
                  §{a.id} · {a.section}
                </p>
                <h3 className="mt-2 font-display text-2xl leading-tight tracking-tight text-[var(--ink)] transition-colors group-hover:text-[var(--oxblood)] sm:text-3xl md:text-4xl">
                  {a.title}
                </h3>
                <p className="drop-cap mt-3 max-w-2xl text-[14px] leading-relaxed text-[var(--slate)]">
                  {a.excerpt}
                </p>
              </div>

              {/* CTA */}
              <div className="col-span-12 flex justify-end md:col-span-3">
                <span className="inline-flex items-center gap-2 font-mono-label text-[11px] text-[var(--ink)] transition-colors group-hover:text-[var(--oxblood)]">
                  Read the note
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer of section */}
        {!hideFooterLink && (
          <div className="mt-10 flex items-center justify-between">
            <p className="font-mono-label text-[10px] text-[var(--slate)]">
              Notes are issued periodically. No subscription, no newsletter.
            </p>
            <a
              href="#"
              className="link-reveal font-mono-label text-[11px] text-[var(--oxblood)]"
            >
              View all notes →
            </a>
          </div>
        )}
      </div>

      {/* Pull-quote breakout */}
      {!limit && (
        <PullQuote
          eyebrow="§06 · On the demand notice"
          attribution="R. Sinha · Partner, Dispute Resolution"
        >
          The demand notice under Section 8 is the single most consequential
          document an operational creditor drafts. The form, the defects, and
          the recent jurisprudence on existence of dispute — all of it turns on
          what is written here.
        </PullQuote>
      )}
    </section>
  );
}

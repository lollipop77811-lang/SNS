"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { ADVOCATES } from "./data";
import { DuotoneMedia } from "./DuotoneMedia";

type Props = {
  /** When set, only renders that many advocates (used for home-page teaser). */
  limit?: number;
};

export function Advocates({ limit }: Props) {
  const list = limit ? ADVOCATES.slice(0, limit) : ADVOCATES;

  return (
    <section className="relative bg-[var(--parchment)] py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Profiles */}
        <div className="mt-8 flex flex-col gap-24 md:gap-32">
          {list.map((adv, i) => (
            <article
              key={adv.id}
              className="grid grid-cols-12 items-start gap-6 md:gap-10"
            >
              {/* Portrait column — duotone photo */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="col-span-12 md:col-span-4"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--ink)]">
                  {/* Duotone-treated media (video or photo) */}
                  <div className="duotone absolute inset-0">
                    <DuotoneMedia
                      src={adv.photo}
                      alt={`Portrait of ${adv.name}, ${adv.role}`}
                      priority={i === 0}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  {/* Inner frame */}
                  <div className="absolute inset-3 border border-[var(--parchment)]/20 z-10 pointer-events-none" />
                  {/* Footer caption */}
                  <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between bg-[var(--parchment)] px-3 py-2">
                    <span className="font-mono-label text-[9px] text-[var(--slate)]">
                      Plate {String.fromCharCode(65 + i)}
                    </span>
                    <span className="font-mono-label text-[9px] text-[var(--oxblood)]">
                      {adv.enrolled}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Text column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="col-span-12 md:col-span-7 md:col-start-6"
              >
                {/* Name + role */}
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <h3 className="font-display text-4xl leading-tight tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
                    {adv.name}
                  </h3>
                  <span className="font-mono-label text-[11px] text-[var(--oxblood)]">
                    {adv.role}
                  </span>
                </div>

                {/* Pull quote */}
                <div className="mt-8 border-l-2 border-[var(--oxblood)] pl-5">
                  <Quote className="mb-2 h-4 w-4 text-[var(--oxblood)]/50" />
                  <p className="font-display text-xl italic leading-snug text-[var(--ink)] sm:text-2xl md:text-3xl">
                    {adv.pullQuote}
                  </p>
                </div>

                {/* Bio */}
                <p className="drop-cap mt-8 max-w-2xl text-[15px] leading-relaxed text-[var(--slate)]">
                  {adv.bio}
                </p>

                {/* Metadata */}
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="font-mono-label text-[10px] text-[var(--slate)]">
                      Education
                    </p>
                    <ul className="mt-2 space-y-1">
                      {adv.education.map((e) => (
                        <li
                          key={e}
                          className="text-[14px] text-[var(--ink)]"
                        >
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono-label text-[10px] text-[var(--slate)]">
                      Practice
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {adv.specialisations.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-[var(--ink)]/20 px-3 py-1 text-[12px] text-[var(--ink)]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

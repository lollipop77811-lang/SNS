"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionDivider } from "./SectionDivider";
import { PullQuote } from "./PullQuote";
import { Marginalia } from "./Marginalia";
import { ScrollReveal } from "./ScrollReveal";
import { ADVOCATES, MILESTONES } from "./data";

export function AboutUs() {
  const founder = ADVOCATES[0];
  const foundingMilestone = MILESTONES[0];

  return (
    <>
      {/* Opening statement */}
      <section className="bg-[var(--parchment)] py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <ScrollReveal className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-7">
              <p className="drop-cap font-display text-2xl leading-relaxed text-[var(--ink)] sm:text-3xl">
                S &amp; S Law Firm is the continuation of Sinha Advocates, a
                chambers practice founded in{" "}
                <span className="italic text-[var(--oxblood)]">
                  {foundingMilestone.year}
                </span>{" "}
                by {founder.name}, Advocate, in Raipur, Chhattisgarh. For
                thirty-five years, the firm has built its work on a single
                conviction — that counsel is a long relationship, not a
                transaction.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <Marginalia label="On the name">
                The “S &amp; S” carries forward the Sinha name and signals the
                second generation now in chambers — the same lineage, the same
                ethic, readied for the next decade.
              </Marginalia>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Chambers library photo strip — full-bleed */}
      <section className="relative bg-[var(--ink)]">
        <div className="duotone relative h-[55vh] min-h-[420px] w-full">
          <Image
            src="/photography/chambers-library.png"
            alt="The chambers library — dark wood bookshelves, a tall arched window, a leather reading chair."
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[var(--ink)]/70 to-transparent">
          <div className="mx-auto w-full max-w-[1400px] px-6 pb-10 md:px-10 md:pb-16">
            <p className="font-mono-label text-[10px] text-[var(--brass-bright)]">
              Plate I · The Chambers, Raipur
            </p>
            <p className="mt-3 max-w-xl font-display text-2xl italic leading-snug text-[var(--parchment)] sm:text-3xl">
              The work of the firm is done in rooms like this — quietly, with
              the file open, by counsel who know it.
            </p>
          </div>
        </div>
      </section>

      {/* The story — three movements */}
      <section className="bg-[var(--parchment)] py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          {/* Movement I */}
          <ScrollReveal className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-4">
              <p className="font-mono-label text-[11px] text-[var(--oxblood)]">
                §I · The founding
              </p>
              <h3 className="mt-4 font-display text-3xl leading-tight tracking-tight text-[var(--ink)] sm:text-4xl">
                A single chamber, two steel almirahs.
              </h3>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-6">
              <p className="drop-cap text-[16px] leading-relaxed text-[var(--slate)]">
                {foundingMilestone.body} The early years were civil and writ
                practice before the High Court of Chhattisgarh — research-heavy,
                writing-driven, and built on the patience of the file. The
                ethic of those years is still the firm's working culture: every
                engagement begins with a written assessment, not an estimate.
              </p>
            </div>
            <div className="col-span-12 md:col-span-2 md:col-start-11">
              <Marginalia label="Est. 1990">
                Raipur, Chhattisgarh. The same chambers culture holds today.
              </Marginalia>
            </div>
          </ScrollReveal>

          <div className="my-16 md:my-24">
            <SectionDivider compact />
          </div>

          {/* Movement II */}
          <ScrollReveal className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-4">
              <p className="font-mono-label text-[11px] text-[var(--oxblood)]">
                §II · The practice
              </p>
              <h3 className="mt-4 font-display text-3xl leading-tight tracking-tight text-[var(--ink)] sm:text-4xl">
                From litigation to counsel.
              </h3>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-6">
              <p className="drop-cap text-[16px] leading-relaxed text-[var(--slate)]">
                Over three decades, the firm grew from a litigation chambers
                into a full-service practice — corporate and business law,
                matrimonial and family law, criminal defence, consultancy and
                drafting, dispute resolution and arbitration, and standing
                legal consultancy. The growth was never pursued for its own
                sake; each area entered because a client needed it and the firm
                intended to serve it well. Today the same chambers handle a
                mining company's contract review in the morning and a family's
                succession matter in the afternoon.
              </p>
            </div>
            <div className="col-span-12 md:col-span-2 md:col-start-11">
              <Marginalia label="Six desks">
                Corporate · Matrimonial · Criminal · Drafting · Disputes ·
                Consultancy.
              </Marginalia>
            </div>
          </ScrollReveal>

          <div className="my-16 md:my-24">
            <SectionDivider compact />
          </div>

          {/* Movement III */}
          <ScrollReveal className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-4">
              <p className="font-mono-label text-[11px] text-[var(--oxblood)]">
                §III · The reconstitution
              </p>
              <h3 className="mt-4 font-display text-3xl leading-tight tracking-tight text-[var(--ink)] sm:text-4xl">
                Sinha Advocates, readied for the next decade.
              </h3>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-6">
              <p className="drop-cap text-[16px] leading-relaxed text-[var(--slate)]">
                In 2024, the practice was reconstituted as S &amp; S Law Firm —
                carrying forward the Sinha Advocates lineage under a name that
                also signals the second generation now in chambers. The
                reconstitution was not a break; it was a deliberate act of
                continuity. The same founder still leads the most complex
                matters. The same counsel-first ethic governs every
                engagement. The toolkit, however, is current — and the firm is
                built to be available when the next question arrives.
              </p>
            </div>
            <div className="col-span-12 md:col-span-2 md:col-start-11">
              <Marginalia label="2024">
                Reconstituted as S &amp; S Law Firm. Same lineage, modernised.
              </Marginalia>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pull-quote breakout */}
      <PullQuote
        eyebrow="On the measure of the firm"
        attribution={`${founder.name} · Founder, 1990`}
      >
        We do not measure the firm by the matters that made headlines. We
        measure it by the client who returns, a decade later, with the next
        question.
      </PullQuote>

      {/* How we work — three short principles */}
      <section className="bg-[var(--cream)] py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <ScrollReveal className="mb-12 grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-7">
              <div className="mb-5 flex items-center gap-4">
                <span className="font-mono-label text-[11px] text-[var(--oxblood)]">
                  How we work
                </span>
                <span className="h-px w-16 bg-[var(--oxblood)]/40" />
              </div>
              <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
                Three principles,
                <br />
                <span className="italic text-[var(--oxblood)]">held closely.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {[
              {
                label: "§I",
                title: "The written file is the primary product.",
                body: "Every engagement begins with a written assessment. Pleadings, opinions, and briefs are the work — not paperwork around a court appearance. A matter fully briefed in writing is, more often than not, a matter that settles on terms the client understood in advance.",
              },
              {
                label: "§II",
                title: "Counsel moves at the speed of the matter.",
                body: "Some matters demand action within hours. Others — succession, governance, long-running commercial disputes — unfold across years. We do not confuse urgency with importance. The firm is built to be available when speed matters, and patient when patience does.",
              },
              {
                label: "§III",
                title: "We work for the person, not the file.",
                body: "Clients are not files. They are companies, families, and individuals who carry the consequences of every decision long after the matter has closed. We draft, advise, and appear with that horizon in mind. The point of the engagement is what the client does next.",
              },
            ].map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[var(--parchment)] p-7 md:p-8"
              >
                <span className="font-mono-label text-[11px] text-[var(--oxblood)]">
                  {p.label}
                </span>
                <h3 className="mt-5 font-display text-xl leading-tight tracking-tight text-[var(--ink)]">
                  {p.title}
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-[var(--slate)]">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing — by the numbers */}
      <section className="bg-[var(--parchment)] py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <ScrollReveal className="mb-12">
            <div className="mb-5 flex items-center gap-4">
              <span className="font-mono-label text-[11px] text-[var(--oxblood)]">
                By the record
              </span>
              <span className="h-px w-16 bg-[var(--oxblood)]/40" />
            </div>
            <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
              The firm,{" "}
              <span className="italic text-[var(--oxblood)]">in numbers.</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {[
              { value: "1990", label: "Founded · Raipur, Chhattisgarh" },
              { value: "35", label: "Years of chambers practice" },
              { value: "06", label: "Working practice areas" },
              { value: "02", label: "Chambers · Raipur & Bilaspur" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-[var(--ink)]/15 pt-5"
              >
                <p className="font-display text-5xl tracking-tight text-[var(--oxblood)] md:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-3 font-mono-label text-[10px] text-[var(--slate)]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

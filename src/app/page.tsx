import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Manifesto } from "@/components/site/Manifesto";
import { SectionLink, FeatureLink } from "@/components/site/SectionLink";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import Link from "next/link";
import { ADVOCATES, ARTICLES } from "@/components/site/data";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  const leadAdvocate = ADVOCATES[0];
  const latestArticle = ARTICLES[0];

  return (
    <>
      <Hero />
      <Marquee />

      {/* Intro — "an established legacy, modernized" */}
      <section className="bg-[var(--parchment)] py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <ScrollReveal className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-7">
              <div className="mb-6 flex items-center gap-4">
                <span className="font-mono-label text-[11px] text-[var(--oxblood)]">
                  §00 · The Firm
                </span>
                <span className="h-px w-16 bg-[var(--oxblood)]/40" />
              </div>
              <h2 className="font-display text-4xl leading-[1.0] tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
                An established legacy,{" "}
                <span className="italic text-[var(--oxblood)]">modernized.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <p className="text-[15px] leading-relaxed text-[var(--slate)]">
                S &amp; S Law Firm carries forward the thirty-five year
                practice of <em>Sinha Advocates</em>, founded in 1990 by Diwakar
                Sinha, Advocate. The chambers culture is unchanged — the
                toolkit is current.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--slate)]">
                We serve companies, consultants, high-net-worth families, and
                institutions across civil, corporate, arbitration, real-estate,
                banking, and constitutional practice.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/capabilities"
                  className="link-reveal font-mono-label text-[11px] text-[var(--oxblood)]"
                >
                  See the capabilities →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Legacy feature */}
      <section className="bg-[var(--parchment)] pb-24 md:pb-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <ScrollReveal>
            <FeatureLink
              href="/legacy"
              section="§01 · The Legacy"
              title="Thirty-five years, six milestones, one practice."
              body="From a single chamber in Patna in 1990 to chambers in New Delhi and Ranchi today. An interactive timeline — the centerpiece of the firm's record."
              year="1990"
              cta="Enter the timeline"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Manifesto teaser (section variant — dark band) */}
      <Manifesto variant="section" />

      {/* Practice teaser — list of all six with link to /practice */}
      <section className="bg-[var(--parchment)] py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <ScrollReveal className="grid grid-cols-12 gap-6 border-b border-[var(--ink)]/15 pb-10">
            <div className="col-span-12 md:col-span-7">
              <div className="mb-5 flex items-center gap-4">
                <span className="font-mono-label text-[11px] text-[var(--oxblood)]">
                  §02 · Practice Areas
                </span>
                <span className="h-px w-16 bg-[var(--oxblood)]/40" />
              </div>
              <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
                The work of the chambers,
                <br />
                <span className="italic text-[var(--oxblood)]">as an index.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <p className="text-[15px] leading-relaxed text-[var(--slate)]">
                Six working practice areas, each a real desk at the firm — not a
                marketing line. The full index lives on its own page.
              </p>
            </div>
          </ScrollReveal>

          <SectionLink
            href="/practice"
            section="§01 → §06"
            title="Civil, Corporate, Arbitration, Real Estate, Banking, Constitutional."
            body="An interactive statute-style index. Tap any entry to read how the work is structured and what it typically involves."
            cta="Open the full index"
          />
        </div>
      </section>

      {/* Advocate preview — lead advocate only */}
      <section className="bg-[var(--cream)] py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <ScrollReveal className="grid grid-cols-12 gap-6 border-b border-[var(--ink)]/15 pb-10">
            <div className="col-span-12 md:col-span-7">
              <div className="mb-5 flex items-center gap-4">
                <span className="font-mono-label text-[11px] text-[var(--oxblood)]">
                  §04 · The Advocates
                </span>
                <span className="h-px w-16 bg-[var(--oxblood)]/40" />
              </div>
              <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
                Counsel, in{" "}
                <span className="italic text-[var(--oxblood)]">chambers.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <p className="text-[15px] leading-relaxed text-[var(--slate)]">
                The firm is its advocates. A founder with three and a half
                decades at the Bar, working alongside partners trained at
                national law schools and abroad.
              </p>
            </div>
          </ScrollReveal>

          {/* Lead advocate preview */}
          <ScrollReveal className="mt-12 grid grid-cols-12 items-start gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-4">
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--parchment)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-[12rem] leading-none text-[var(--ink)]/8">
                    {leadAdvocate.initials}
                  </span>
                </div>
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent 0, transparent 4px, #0B0B0C 4px, #0B0B0C 5px)",
                  }}
                />
                <div className="absolute inset-3 border border-[var(--ink)]/15" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-[var(--parchment)] px-3 py-2">
                  <span className="font-mono-label text-[9px] text-[var(--slate)]">
                    Plate A
                  </span>
                  <span className="font-mono-label text-[9px] text-[var(--oxblood)]">
                    {leadAdvocate.enrolled}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <h3 className="font-display text-4xl leading-tight tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
                  {leadAdvocate.name}
                </h3>
                <span className="font-mono-label text-[11px] text-[var(--oxblood)]">
                  {leadAdvocate.role}
                </span>
              </div>
              <div className="mt-8 border-l-2 border-[var(--oxblood)] pl-5">
                <p className="font-display text-xl italic leading-snug text-[var(--ink)] sm:text-2xl md:text-3xl">
                  {leadAdvocate.pullQuote}
                </p>
              </div>
              <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-[var(--slate)]">
                {leadAdvocate.bio}
              </p>
              <div className="mt-8">
                <Link
                  href="/advocates"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)]/25 px-6 py-3 font-mono-label text-[11px] text-[var(--ink)] transition-colors hover:border-[var(--oxblood)] hover:bg-[var(--oxblood)] hover:text-[var(--parchment)]"
                >
                  Meet all the advocates →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Latest from chambers — single article */}
      <section className="bg-[var(--parchment)] py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <ScrollReveal className="grid grid-cols-12 gap-6 border-b border-[var(--ink)]/15 pb-10">
            <div className="col-span-12 md:col-span-7">
              <div className="mb-5 flex items-center gap-4">
                <span className="font-mono-label text-[11px] text-[var(--oxblood)]">
                  §06 · Insights
                </span>
                <span className="h-px w-16 bg-[var(--oxblood)]/40" />
              </div>
              <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
                Notes from{" "}
                <span className="italic text-[var(--oxblood)]">chambers.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <p className="text-[15px] leading-relaxed text-[var(--slate)]">
                Short notes on points of law the firm works with — written by
                our advocates, for clients and counsel alike. Not legal advice;
                a record of our reading.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <Link
              href="/insights"
              className="group grid grid-cols-12 items-baseline gap-4 border-b border-[var(--ink)]/15 py-8 md:gap-8 md:py-10"
            >
              <div className="col-span-12 md:col-span-2">
                <p className="font-mono-label text-[10px] text-[var(--slate)]">
                  {latestArticle.date}
                </p>
                <p className="mt-1 font-mono-label text-[10px] text-[var(--slate)]/60">
                  {latestArticle.reading} read
                </p>
              </div>
              <div className="col-span-12 md:col-span-7">
                <p className="font-mono-label text-[10px] text-[var(--oxblood)]">
                  §{latestArticle.id} · {latestArticle.section}
                </p>
                <h3 className="mt-2 font-display text-2xl leading-tight tracking-tight text-[var(--ink)] transition-colors group-hover:text-[var(--oxblood)] sm:text-3xl md:text-4xl">
                  {latestArticle.title}
                </h3>
                <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-[var(--slate)]">
                  {latestArticle.excerpt}
                </p>
              </div>
              <div className="col-span-12 flex justify-end md:col-span-3">
                <span className="inline-flex items-center gap-2 font-mono-label text-[11px] text-[var(--ink)] transition-colors group-hover:text-[var(--oxblood)]">
                  Read the note
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </ScrollReveal>

          <div className="mt-10">
            <Link
              href="/insights"
              className="link-reveal font-mono-label text-[11px] text-[var(--oxblood)]"
            >
              View all notes →
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA band */}
      <section className="bg-[var(--oxblood)] py-24 text-[var(--parchment)] md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <ScrollReveal className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-8">
              <span className="font-mono-label text-[11px] text-[var(--brass-bright)]">
                §08 · Contact
              </span>
              <h2 className="mt-6 font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
                Begin a{" "}
                <span className="italic text-[var(--brass-bright)]">conversation.</span>
              </h2>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[var(--parchment)]/80">
                The firm does not accept engagements through advertising or
                solicitation. If you have arrived here of your own accord, write
                to us — a brief note on the matter is sufficient.
              </p>
            </div>
            <div className="col-span-12 flex items-end justify-start md:col-span-4 md:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--parchment)] px-7 py-3.5 font-mono-label text-[11px] text-[var(--oxblood)] transition-colors hover:bg-[var(--ink)] hover:text-[var(--parchment)]"
              >
                Engage the firm →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

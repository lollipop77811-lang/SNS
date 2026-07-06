import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { SectionLink, FeatureLink } from "@/components/site/SectionLink";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { PullQuote } from "@/components/site/PullQuote";
import { Marginalia } from "@/components/site/Marginalia";
import { SectionDivider } from "@/components/site/SectionDivider";
import Link from "next/link";
import Image from "next/image";
import { ADVOCATES } from "@/components/site/data";
import { DuotoneMedia } from "@/components/site/DuotoneMedia";

export default function Home() {
  const leadAdvocate = ADVOCATES[0];

  return (
    <>
      <Hero />
      <Marquee />

      {/* Intro — "an established legacy, modernized" with marginalia */}
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
              <p className="drop-cap text-[15px] leading-relaxed text-[var(--slate)]">
                S &amp; S Law Firm carries forward the thirty-five year
                practice of <em>Sinha Advocates</em>, founded in 1990 by Diwakar
                Sinha, Advocate. The chambers culture is unchanged — the
                toolkit is current.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--slate)]">
                We serve companies, consultants, high-net-worth families, and
                institutions across corporate, matrimonial, criminal, drafting,
                dispute resolution, and legal consultancy practice.
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

          {/* Marginalia row — appears under the intro, right-aligned to the margin */}
          <ScrollReveal className="mt-12 grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <Marginalia label="Note · 1990">
                The chambers were established in Raipur, Chhattisgarh in 1990 with a single
                clerk and two steel almirahs of precedents. The same ethic of
                written preparation holds today.
              </Marginalia>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Law-report divider */}
      <SectionDivider label="I · The Legacy" />

      {/* Legacy feature */}
      <section className="bg-[var(--parchment)] pb-24 md:pb-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <ScrollReveal>
            <FeatureLink
              href="/legacy"
              section="§01 · The Legacy"
              title="Thirty-five years, six milestones, one practice."
              body="From a single chamber in Raipur in 1990 to a second chamber in Bilaspur today. An interactive timeline — the centerpiece of the firm's record."
              year="1990"
              cta="Enter the timeline"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Chambers library photo strip — full-bleed duotone */}
      <section className="relative bg-[var(--ink)]">
        <div className="duotone relative h-[50vh] min-h-[400px] w-full">
          <Image
            src="/photography/chambers-library.png"
            alt="The chambers library — dark wood bookshelves, a tall arched window, a leather reading chair."
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[var(--ink)]/60 to-transparent">
          <div className="mx-auto w-full max-w-[1400px] px-6 pb-10 md:px-10 md:pb-16">
            <p className="font-mono-label text-[10px] text-[var(--brass-bright)]">
              Plate I · The Chambers
            </p>
            <p className="mt-3 max-w-xl font-display text-2xl italic leading-snug text-[var(--parchment)] sm:text-3xl">
              The work of the firm is done in rooms like this — quietly, with
              the file open, by counsel who know it.
            </p>
          </div>
        </div>
      </section>

      {/* Law-report divider */}
      <SectionDivider label="II · The Practice" />

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
              <p className="drop-cap text-[15px] leading-relaxed text-[var(--slate)]">
                Six working practice areas, each a real desk at the firm — not
                a marketing line. The full index lives on its own page.
              </p>
            </div>
          </ScrollReveal>

          <SectionLink
            href="/practice"
            section="§01 → §06"
            title="Corporate, Matrimonial, Criminal, Drafting, Dispute Resolution, Legal Consultancy."
            body="An interactive statute-style index. Tap any entry to read how the work is structured and what it typically involves."
            cta="Open the full index"
          />
        </div>
      </section>

      {/* Law-report divider */}
      <SectionDivider label="III · The Advocates" />

      {/* Advocate preview — lead advocate only */}
      <section className="bg-[var(--cream)] py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <ScrollReveal className="grid grid-cols-12 gap-6 border-b border-[var(--ink)]/15 pb-10">
            <div className="col-span-12 md:col-span-7">
              <div className="mb-5 flex items-center gap-4">
                <span className="font-mono-label text-[11px] text-[var(--oxblood)]">
                  §03 · The Advocates
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

          {/* Lead advocate preview — with duotone media (video or photo) */}
          <ScrollReveal className="mt-12 grid grid-cols-12 items-start gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-4">
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--ink)]">
                <div className="duotone absolute inset-0">
                  <DuotoneMedia
                    src={leadAdvocate.photo}
                    alt={`Portrait of ${leadAdvocate.name}`}
                    priority
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="absolute inset-3 border border-[var(--parchment)]/20 z-10 pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between bg-[var(--parchment)] px-3 py-2">
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
              <p className="drop-cap mt-8 max-w-2xl text-[15px] leading-relaxed text-[var(--slate)]">
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

      {/* Pull-quote breakout — before About */}
      <PullQuote
        eyebrow="§05 · On the measure of the firm"
        attribution={`${ADVOCATES[0].name} · Founder, 1990`}
      >
        We do not measure the firm by the matters that made headlines. We
        measure it by the client who returns, a decade later, with the next
        question.
      </PullQuote>

      {/* About teaser */}
      <section className="bg-[var(--parchment)] py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <ScrollReveal className="grid grid-cols-12 gap-6 border-b border-[var(--ink)]/15 pb-10">
            <div className="col-span-12 md:col-span-7">
              <div className="mb-5 flex items-center gap-4">
                <span className="font-mono-label text-[11px] text-[var(--oxblood)]">
                  §05 · About the Firm
                </span>
                <span className="h-px w-16 bg-[var(--oxblood)]/40" />
              </div>
              <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
                An established legacy,
                <br />
                <span className="italic text-[var(--oxblood)]">modernized.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <p className="drop-cap text-[15px] leading-relaxed text-[var(--slate)]">
                S &amp; S Law Firm carries forward the thirty-five year practice
                of Sinha Advocates, founded in 1990 in Raipur, Chhattisgarh.
                The chambers culture is unchanged — the toolkit is current.
              </p>
            </div>
          </ScrollReveal>

          <SectionLink
            href="/about"
            section="§05 · About"
            title="The founding, the practice, the reconstitution — and three principles held closely."
            body="A short record of the firm: how it began in 1990, how it grew from a litigation chambers into a full-service practice, and how it was reconstituted in 2024 as S & S Law Firm."
            cta="Read the firm's story"
          />
        </div>
      </section>

      {/* Closing CTA band */}
      <section className="bg-[var(--oxblood)] py-24 text-[var(--parchment)] md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <ScrollReveal className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-8">
              <span className="font-mono-label text-[11px] text-[var(--brass-bright)]">
                §07 · Contact
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

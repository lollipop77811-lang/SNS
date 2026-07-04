"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type Practice = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  matters: string[];
};

const PRACTICES: Practice[] = [
  {
    id: "civil",
    index: "01",
    title: "Civil & Commercial Litigation",
    subtitle: "Suits · Writs · Appeals",
    description:
      "The spine of the practice since 1990. We appear in civil courts, High Courts, and the Supreme Court on contractual disputes, property and title matters, declaratory and injunctive relief, and complex commercial suits. Our approach favours early assessment, structured evidence, and a clear written theory of the case — most matters settle because the preparation leaves little doubt.",
    matters: [
      "Contractual & commercial disputes",
      "Property, title & tenancy",
      "Declaratory & injunctive relief",
      "Appeals & revisions",
      "Writ petitions",
    ],
  },
  {
    id: "corporate",
    index: "02",
    title: "Corporate & Commercial Advisory",
    subtitle: "Formation · Governance · Transactions",
    description:
      "We advise companies, promoters, and family-owned businesses on the legal architecture of running and growing an enterprise — from incorporation and shareholder arrangements to commercial contracts, joint ventures, and governance review. Counsel is delivered in plain language, in writing, and on a timeline that respects commercial urgency.",
    matters: [
      "Incorporation & structuring",
      "Shareholder & joint-venture agreements",
      "Commercial contracts",
      "Corporate governance",
      "Regulatory compliance",
    ],
  },
  {
    id: "arbitration",
    index: "03",
    title: "Arbitration & ADR",
    subtitle: "Domestic · International · Enforcement",
    description:
      "An increasing share of commercial disputes in India is resolved outside the courtroom. We act as counsel in ad hoc and institutional arbitrations, advise on the drafting of arbitration clauses, and represent parties in court on the appointment, challenge, and enforcement of arbitral awards under the Arbitration and Conciliation Act, 1996.",
    matters: [
      "Domestic & international arbitration",
      "Arbitration clause drafting",
      "Section 11 appointment proceedings",
      "Award challenge & enforcement",
      "Mediation & conciliation",
    ],
  },
  {
    id: "real-estate",
    index: "04",
    title: "Real Estate, Land & Revenue",
    subtitle: "Title · Acquisition · Development",
    description:
      "Land in India carries a documentary history that often predates living memory. We conduct due diligence on title and encumbrance, advise on acquisition and development structures, and represent parties in land acquisition, revenue, and RERA matters — particularly in Bihar, Jharkhand, and the National Capital Region.",
    matters: [
      "Title due diligence",
      "Land acquisition & RERA",
      "Development & joint-development agreements",
      "Revenue & tenancy matters",
      "Lease & licence structuring",
    ],
  },
  {
    id: "banking",
    index: "05",
    title: "Banking, Finance & Insolvency",
    subtitle: "Lending · Recovery · IBC",
    description:
      "We act for lenders and borrowers on documentation, enforcement, and recovery — including proceedings under the SARFAESI Act, the Recovery of Debts Act, and the Insolvency and Bankruptcy Code, 2016. The work demands a steady hand and an early read on whether a matter is best resolved through negotiation, structured restructuring, or formal proceedings.",
    matters: [
      "Loan & facility documentation",
      "SARFAESI & DRT proceedings",
      "Insolvency & bankruptcy (IBC)",
      "Restructuring & workouts",
      "Enforcement of security",
    ],
  },
  {
    id: "constitutional",
    index: "06",
    title: "Constitutional & Administrative",
    subtitle: "Writs · Public Law · Judicial Review",
    description:
      "A continuation of the firm's writ practice since the early 1990s. We appear in High Courts and the Supreme Court on habeas corpus, mandamus, certiorari, prohibition, and quo warranto — and on challenges to administrative and quasi-judicial action. The work is research-intensive and typically turns on the written pleadings.",
    matters: [
      "Writ jurisdiction (Art. 226 / 32)",
      "Judicial review of administrative action",
      "Service & pension matters",
      "Quasi-judicial challenges",
      "Public interest litigation",
    ],
  },
];

export function PracticeIndex() {
  const [open, setOpen] = useState<string | null>("01");
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="practice"
      className="relative bg-[var(--parchment)] py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 border-b border-[var(--ink)]/15 pb-12">
          <div className="col-span-12 md:col-span-7">
            <div className="mb-5 flex items-center gap-4">
              <span className="font-mono-label text-[11px] text-[var(--oxblood)]">
                §02 · Practice Areas
              </span>
              <span className="h-px w-16 bg-[var(--oxblood)]/40" />
            </div>
            <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
              The work of the
              <br />
              chambers, as{" "}
              <span className="italic text-[var(--oxblood)]">an index.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <p className="text-[15px] leading-relaxed text-[var(--slate)]">
              Each area below is a working practice, not a marketing line. Tap
              any entry to read how the work is structured, what it typically
              involves, and where the firm's depth lies.
            </p>
          </div>
        </div>

        {/* The index */}
        <div className="mt-2">
          {PRACTICES.map((p) => {
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
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)]/25 px-6 py-3 font-mono-label text-[11px] text-[var(--ink)] transition-colors hover:border-[var(--oxblood)] hover:bg-[var(--oxblood)] hover:text-[var(--parchment)]"
          >
            Begin a conversation →
          </a>
        </div>
      </div>
    </section>
  );
}

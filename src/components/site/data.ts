/**
 * Shared content for S & S Law Firm — single source of truth
 * so that the home page teasers and the interior pages stay in sync.
 */

export type Milestone = {
  year: string;
  title: string;
  body: string;
  tag: string;
};

export const MILESTONES: Milestone[] = [
  {
    year: "1990",
    title: "Sinha Advocates is founded",
    body: "Diwakar Sinha, Advocate, establishes chambers in Patna with a single clerk, two steel almirahs of precedents, and a commitment to plain-language counsel. Civil and writ practice form the spine of the early years.",
    tag: "Founding",
  },
  {
    year: "1996",
    title: "Expansion into corporate advisory",
    body: "As Bihar's industrial base reorganises, the firm begins advising regional manufacturing and trading houses on contracts, labour compliance, and dispute avoidance — moving beyond pure litigation.",
    tag: "Practice",
  },
  {
    year: "2003",
    title: "Chambers in New Delhi",
    body: "A second chamber opens in New Delhi to appear before the Supreme Court and the High Court of Delhi. The firm begins a steady arbitration practice representing infrastructure and real-estate developers.",
    tag: "Expansion",
  },
  {
    year: "2011",
    title: "Ranchi presence established",
    body: "Following the reorganisation of Jharkhand, a third chamber opens in Ranchi to serve mining, land, and revenue matters before the High Court at Ranchi.",
    tag: "Expansion",
  },
  {
    year: "2018",
    title: "Second generation joins chambers",
    body: "A new generation of advocates — trained in Delhi and abroad — joins the firm, bringing structured corporate, banking, and insolvency work into the practice alongside the legacy litigation base.",
    tag: "Generation",
  },
  {
    year: "2024",
    title: "S & S Law Firm is constituted",
    body: "The practice is reconstituted as S & S Law Firm, carrying forward the Sinha Advocates lineage — the same chambers culture, the same counsel-first ethic, modernised for the matters of the coming decade.",
    tag: "Constitution",
  },
];

export type Practice = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  matters: string[];
};

export const PRACTICES: Practice[] = [
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

export type Advocate = {
  id: string;
  name: string;
  role: string;
  enrolled: string;
  education: string[];
  specialisations: string[];
  pullQuote: string;
  bio: string;
  initials: string;
};

export const ADVOCATES: Advocate[] = [
  {
    id: "diwakar",
    name: "Diwakar Sinha",
    role: "Founder · Senior Advocate",
    enrolled: "Enrolled · 1985",
    education: ["LL.B. · Campus Law Centre, Delhi", "B.A. (Hons.) · Patna University"],
    specialisations: [
      "Civil & Commercial Litigation",
      "Constitutional & Writ",
      "Arbitration",
    ],
    pullQuote:
      "A file should read like an argument a judge can finish in one sitting. If it does not, the work is not done.",
    bio: "Diwakar Sinha founded Sinha Advocates in 1990 after five years of practice at the Patna High Court. Over thirty-five years he has appeared in civil, commercial, writ, and arbitration matters across Bihar, Jharkhand, and the National Capital Region — and before the Supreme Court of India. He continues to lead the firm's most complex matters and to mentor the next generation of counsel in chambers.",
    initials: "DS",
  },
  {
    id: "advocate-2",
    name: "A. Sahay",
    role: "Partner · Corporate & Commercial",
    enrolled: "Enrolled · 2008",
    education: [
      "LL.M. · University of Cambridge",
      "LL.B. · National Law School of India University",
    ],
    specialisations: [
      "Corporate Advisory",
      "Commercial Contracts",
      "M&A and Joint Ventures",
    ],
    pullQuote:
      "A contract that cannot be read aloud in five minutes is usually a contract that has not been thought through.",
    bio: "A. Sahay leads the corporate and commercial advisory practice, with a particular focus on shareholder arrangements, joint ventures, and commercial contracts for promoter-led businesses. Before joining the firm, Sahay practiced in the corporate team of a tier-one Indian firm and read for an LL.M. at Cambridge.",
    initials: "AS",
  },
  {
    id: "advocate-3",
    name: "R. Sinha",
    role: "Partner · Arbitration & Litigation",
    enrolled: "Enrolled · 2012",
    education: [
      "LL.M. · Columbia Law School",
      "LL.B. · National Law University, Delhi",
    ],
    specialisations: [
      "Domestic & International Arbitration",
      "Commercial Litigation",
      "Insolvency (IBC)",
    ],
    pullQuote:
      "Most matters are won in the documents you draft before the dispute begins, not in the courtroom after it has begun.",
    bio: "R. Sinha leads the arbitration and commercial litigation desk. Sinha reads for an LL.M. at Columbia Law School and practiced in the disputes team of an international firm before returning to chambers. The work spans ad hoc and institutional arbitration, IBC proceedings, and award enforcement.",
    initials: "RS",
  },
];

export type Article = {
  id: string;
  date: string;
  reading: string;
  section: string;
  title: string;
  excerpt: string;
};

export const ARTICLES: Article[] = [
  {
    id: "01",
    date: "March 2026",
    reading: "8 min",
    section: "Arbitration",
    title: "On drafting an arbitration clause that survives the dispute.",
    excerpt:
      "Most arbitration clauses are written when the parties are still friends. The clause that matters is the one read when they are not. A note on seat, institution, and the wording that quietly becomes the whole case.",
  },
  {
    id: "02",
    date: "February 2026",
    reading: "5 min",
    section: "Corporate",
    title: "Shareholder agreements for promoter-led companies.",
    excerpt:
      "A short note on the clauses we see litigated most often — tag-along, drag-along, deadlocks, and the cost of an ambiguous valuation mechanism.",
  },
  {
    id: "03",
    date: "January 2026",
    reading: "11 min",
    section: "Insolvency",
    title: "Section 9 IBC: the operational creditor's first move.",
    excerpt:
      "The demand notice under Section 8 is the single most consequential document an operational creditor drafts. A note on the form, the defects, and the recent jurisprudence on existence of dispute.",
  },
];

export type Capability = {
  label: string;
  title: string;
  body: string;
};

export const CAPABILITIES: Capability[] = [
  {
    label: "§I",
    title: "Multi-jurisdictional presence",
    body: "Chambers in Patna, New Delhi, and Ranchi allow the firm to appear before the High Courts of Patna, Delhi, and Jharkhand, the Supreme Court of India, and tribunals across the National Capital Region.",
  },
  {
    label: "§II",
    title: "Two generations of practice",
    body: "A founder with three and a half decades at the Bar, working alongside advocates trained at national law schools and abroad — the lineage and the modern toolkit, in the same chambers.",
  },
  {
    label: "§III",
    title: "Counsel-led, writing-driven",
    body: "Every engagement begins with a written assessment, not an estimate. The firm's working culture treats the written file — pleadings, opinions, briefs — as the primary product.",
  },
  {
    label: "§IV",
    title: "Long client relationships",
    body: "A meaningful share of the firm's work comes from clients who have been with the chambers for over a decade. The structure of the firm is built around that continuity, not around case volume.",
  },
];

export const DEPTH_AREAS = [
  "Civil & Commercial Suits",
  "Writ Petitions · Articles 226 & 32",
  "Domestic & International Arbitration",
  "SARFAESI & DRT Proceedings",
  "Insolvency & Bankruptcy (IBC, 2016)",
  "Real Estate, Land & Revenue",
  "Corporate & Commercial Contracts",
  "Joint Ventures & Shareholder Arrangements",
  "RERA Matters",
  "Service & Pension Litigation",
  "Constitutional Challenges",
  "Appeals · Supreme Court & High Courts",
];

export const CHAMBERS = [
  {
    city: "New Delhi",
    role: "Registered Office",
    address: "Chambers No. 14, Lawyers' Chambers\nSupreme Court of India\nNew Delhi — 110001",
    phone: "+91 11 2338 XXXX",
  },
  {
    city: "Patna",
    role: "Founding Chambers",
    address: "Sinha Advocates Building\nBeerchand Patel Path\nPatna — 800001",
    phone: "+91 612 220 XXXX",
  },
  {
    city: "Ranchi",
    role: "Jharkhand Chambers",
    address: "Advocates' Chambers\nHigh Court of Jharkhand\nRanchi — 834001",
    phone: "+91 651 249 XXXX",
  },
];

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
    id: "corporate",
    index: "01",
    title: "Corporate & Business Law",
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
    id: "matrimonial",
    index: "02",
    title: "Matrimonial & Family Law",
    subtitle: "Marriage · Maintenance · Custody",
    description:
      "Family matters demand a steadier hand than commercial disputes. We advise on marriage, separation, divorce, maintenance, and child custody — under the Hindu Marriage Act, the Special Marriage Act, the Muslim Personal Law, and the family law provisions of the Code of Criminal Procedure. The first conversation is always private, and the first written note is always an assessment of whether the matter is best resolved through negotiation or through the family courts.",
    matters: [
      "Divorce — mutual consent & contested",
      "Maintenance & alimony",
      "Child custody & guardianship",
      "Separation & settlement agreements",
      "Annulment & restitution of conjugal rights",
    ],
  },
  {
    id: "criminal",
    index: "03",
    title: "Criminal Law",
    subtitle: "Defence · Bail · Trials · Appeals",
    description:
      "Criminal work is the firm's oldest standing practice — a continuation of the chambers' early years at the Patna High Court. We appear for the defence in trials, appeals, and revisions, and regularly move bail applications before the Magistrates, Sessions Courts, and High Courts. The work demands an early read on the charge, a careful reading of the case diary, and a written theory of the defence — not a reliance on cross-examination alone.",
    matters: [
      "Bail — anticipatory & regular",
      "Trials before Magistrates & Sessions",
      "Appeals & revisions in High Court",
      "Quashing petitions under §482 Cr.P.C.",
      "White-collar & economic offences",
    ],
  },
  {
    id: "consultancy-drafting",
    index: "04",
    title: "Consultancy & Drafting",
    subtitle: "Opinions · Agreements · Deeds",
    description:
      "A meaningful share of the firm's work never reaches a courtroom. We draft and revise agreements, deeds, wills, trusts, and opinions for companies, families, and individuals — and we advise, in writing, on the legal architecture of a transaction before it is signed. The drafting practice is built on the belief that a document that cannot be read aloud in five minutes is usually a document that has not been thought through.",
    matters: [
      "Commercial & business agreements",
      "Wills, trusts & succession planning",
      "Property deeds & transfers",
      "Legal opinions & due diligence",
      "Policy & compliance documents",
    ],
  },
  {
    id: "dispute-resolution",
    index: "05",
    title: "Dispute Resolution & Arbitration",
    subtitle: "Litigation · Arbitration · Mediation",
    description:
      "When a dispute cannot be avoided, the question is rarely whether to fight — it is where, how, and on what timeline. We appear as counsel in civil and commercial litigation before courts and tribunals, and in ad hoc and institutional arbitrations under the Arbitration and Conciliation Act, 1996. Our approach favours early written assessment, structured evidence, and a clear theory of the case; most matters settle because the preparation leaves little doubt.",
    matters: [
      "Civil & commercial litigation",
      "Domestic & international arbitration",
      "Arbitration clause drafting",
      "Award challenge & enforcement",
      "Mediation & conciliation",
    ],
  },
  {
    id: "legal-consultancy",
    index: "06",
    title: "Legal Consultancy",
    subtitle: "Advisory · Strategy · Opinion",
    description:
      "For clients who do not need a matter filed, but who do need a steady legal voice — companies seeking a retained counsel, families managing succession, individuals navigating a regulatory question. We act as standing legal consultants, advise on strategy across practice areas, and issue written opinions that the client can act on. The work is quiet, ongoing, and built around long relationships rather than transactions.",
    matters: [
      "Standing legal counsel for companies",
      "Strategic advisory across practice areas",
      "Written legal opinions",
      "Regulatory & compliance advisory",
      "Risk assessment & legal audit",
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
  photo: string;
};

export const ADVOCATES: Advocate[] = [
  {
    id: "diwakar",
    name: "Diwakar Sinha",
    role: "Founder · Senior Advocate",
    enrolled: "Enrolled · 1985",
    education: ["LL.B. · Campus Law Centre, Delhi", "B.A. (Hons.) · Patna University"],
    specialisations: [
      "Criminal Law",
      "Dispute Resolution & Arbitration",
      "Matrimonial & Family Law",
    ],
    pullQuote:
      "A file should read like an argument a judge can finish in one sitting. If it does not, the work is not done.",
    bio: "Diwakar Sinha founded Sinha Advocates in 1990 after five years of practice at the Patna High Court. Over thirty-five years he has appeared in criminal, civil, family, and arbitration matters across Bihar, Jharkhand, and the National Capital Region — and before the Supreme Court of India. He continues to lead the firm's most complex matters and to mentor the next generation of counsel in chambers.",
    initials: "DS",
    photo: "/photography/advocate-portrait.mp4",
  },
  {
    id: "advocate-2",
    name: "A. Sahay",
    role: "Partner · Corporate & Consultancy",
    enrolled: "Enrolled · 2008",
    education: [
      "LL.M. · University of Cambridge",
      "LL.B. · National Law School of India University",
    ],
    specialisations: [
      "Corporate & Business Law",
      "Consultancy & Drafting",
      "Legal Consultancy",
    ],
    pullQuote:
      "A contract that cannot be read aloud in five minutes is usually a contract that has not been thought through.",
    bio: "A. Sahay leads the corporate and commercial advisory practice, with a particular focus on shareholder arrangements, joint ventures, and commercial contracts for promoter-led businesses. Before joining the firm, Sahay practiced in the corporate team of a tier-one Indian firm and read for an LL.M. at Cambridge.",
    initials: "AS",
    photo: "/photography/advocate-portrait.mp4",
  },
  {
    id: "advocate-3",
    name: "R. Sinha",
    role: "Partner · Dispute Resolution & Family Law",
    enrolled: "Enrolled · 2012",
    education: [
      "LL.M. · Columbia Law School",
      "LL.B. · National Law University, Delhi",
    ],
    specialisations: [
      "Dispute Resolution & Arbitration",
      "Matrimonial & Family Law",
      "Consultancy & Drafting",
    ],
    pullQuote:
      "Most matters are won in the documents you draft before the dispute begins, not in the courtroom after it has begun.",
    bio: "R. Sinha leads the dispute resolution desk and shares the family law practice. Sinha read for an LL.M. at Columbia Law School and practiced in the disputes team of an international firm before returning to chambers. The work spans civil and commercial litigation, arbitration, and family court matters.",
    initials: "RS",
    photo: "/photography/advocate-portrait.mp4",
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
  "Corporate & Business Structuring",
  "Shareholder & Joint-Venture Agreements",
  "Divorce · Mutual Consent & Contested",
  "Maintenance, Alimony & Custody",
  "Bail — Anticipatory & Regular",
  "Criminal Trials & Appeals",
  "Commercial & Business Agreements",
  "Wills, Trusts & Succession Planning",
  "Civil & Commercial Litigation",
  "Domestic & International Arbitration",
  "Mediation & Conciliation",
  "Standing Legal Counsel & Opinions",
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

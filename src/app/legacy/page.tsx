import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { LegacyTimeline } from "@/components/site/LegacyTimeline";

export const metadata: Metadata = {
  title: "The Legacy — 1990 to Today",
  description:
    "Thirty-five years of chambers practice — from the founding of Sinha Advocates in Raipur, Chhattisgarh in 1990 to the constitution of S & S Law Firm today. An interactive timeline.",
};

export default function LegacyPage() {
  return (
    <>
      <PageHeader
        section="§01 · The Legacy"
        title={
          <>
            1990 <span className="italic text-[var(--slate)]">to</span>{" "}
            <span className="text-[var(--oxblood)]">today.</span>
          </>
        }
        intro="Three and a half decades of chambers practice, traced through six milestones — from the founding of Sinha Advocates in Raipur to the constitution of S & S Law Firm. Scroll to advance through the years."
        meta={[
          { label: "Founded", value: "1990" },
          { label: "Milestones", value: "06" },
          { label: "Chambers", value: "02" },
        ]}
      />

      <LegacyTimeline />
    </>
  );
}

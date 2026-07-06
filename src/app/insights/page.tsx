import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { Insights } from "@/components/site/Insights";

export const metadata: Metadata = {
  title: "Insights — Notes from Chambers",
  description:
    "Short notes on points of law the firm works with — written by our advocates, intended for clients and counsel alike. Not legal advice; a record of our reading.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        section="§05 · Insights"
        title={
          <>
            Notes from{" "}
            <span className="italic text-[var(--oxblood)]">chambers.</span>
          </>
        }
        intro="Short notes on points of law the firm works with — written by our advocates, intended for clients and counsel alike. Not legal advice; a record of our reading."
        meta={[
          { label: "Notes", value: "03" },
          { label: "Cadence", value: "Periodic" },
        ]}
      />

      <Insights hideFooterLink />
    </>
  );
}

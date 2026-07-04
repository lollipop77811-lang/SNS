import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { PracticeIndex } from "@/components/site/PracticeIndex";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Six working practice areas of S & S Law Firm — civil and commercial litigation, corporate advisory, arbitration, real estate, banking and insolvency, and constitutional law. An interactive statute-style index.",
};

export default function PracticePage() {
  return (
    <>
      <PageHeader
        section="§02 · Practice Areas"
        title={
          <>
            The work of the chambers,
            <br />
            <span className="italic text-[var(--oxblood)]">as an index.</span>
          </>
        }
        intro="Each area below is a working practice, not a marketing line. Tap any entry to read how the work is structured, what it typically involves, and where the firm's depth lies."
        meta={[
          { label: "Practice Areas", value: "06" },
          { label: "Index Style", value: "Statute" },
        ]}
      />

      <PracticeIndex hideFooterCta />
    </>
  );
}

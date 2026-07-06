import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { Advocates } from "@/components/site/Advocates";

export const metadata: Metadata = {
  title: "The Advocates",
  description:
    "The advocates of S & S Law Firm — editorial profiles of the founder and partners, with training, specialisation, and a personal pull-quote from each.",
};

export default function AdvocatesPage() {
  return (
    <>
      <PageHeader
        section="§03 · The Advocates"
        title={
          <>
            Counsel, in{" "}
            <span className="italic text-[var(--oxblood)]">chambers.</span>
          </>
        }
        intro="The firm is its advocates. Each profile below is an editorial note — training, specialisation, and the way they approach the work — not a marketing card."
        meta={[
          { label: "Senior Advocate", value: "01" },
          { label: "Partners", value: "02" },
        ]}
      />

      <Advocates />
    </>
  );
}

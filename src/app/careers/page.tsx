import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { Careers } from "@/components/site/Careers";

export const metadata: Metadata = {
  title: "Careers — Join the Chambers",
  description:
    "We hire slowly. Chambers practice is apprenticeship. If you are interested in joining S & S Law Firm, write to us with a short note and a sample of your writing.",
};

export default function CareersPage() {
  return (
    <>
      <PageHeader
        section="§07 · Join the Chambers"
        title={
          <>
            We hire
            <br />
            <span className="italic text-[var(--oxblood)]">slowly.</span>
          </>
        }
        intro="Chambers practice is apprenticeship. We take on a small number of junior advocates each year, with the expectation that they will read, draft, and appear alongside senior counsel for several years before leading their own matters."
        meta={[
          { label: "Cycle", value: "None" },
          { label: "Apply", value: "By letter" },
        ]}
      />

      <Careers />
    </>
  );
}

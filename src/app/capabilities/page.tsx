import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { Capabilities } from "@/components/site/Capabilities";

export const metadata: Metadata = {
  title: "Capabilities & Areas of Depth",
  description:
    "The capabilities of S & S Law Firm — multi-jurisdictional presence, two generations of practice, counsel-led writing, and long client relationships. An index of working depth.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHeader
        section="§04 · Capabilities"
        title={
          <>
            Areas of{" "}
            <span className="italic text-[var(--oxblood)]">depth.</span>
          </>
        }
        intro="Per the rules of the Bar Council of India, this site does not publish case outcomes, client testimonials, or comparisons. What follows is a description of the firm's structure and areas of working depth — not a record of results."
        meta={[
          { label: "Capabilities", value: "04" },
          { label: "Depth Entries", value: "12" },
        ]}
      />

      <Capabilities />
    </>
  );
}

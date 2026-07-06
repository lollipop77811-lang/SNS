import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { AboutUs } from "@/components/site/AboutUs";

export const metadata: Metadata = {
  title: "About the Firm",
  description:
    "S & S Law Firm is the continuation of Sinha Advocates, founded in 1990 in Raipur, Chhattisgarh. Thirty-five years of chambers practice — the same counsel-first ethic, modernised for the matters of today.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        section="§05 · About the Firm"
        title={
          <>
            An established legacy,
            <br />
            <span className="italic text-[var(--oxblood)]">modernized.</span>
          </>
        }
        intro="S & S Law Firm carries forward the thirty-five year practice of Sinha Advocates. The chambers culture is unchanged — the toolkit is current."
        meta={[
          { label: "Founded", value: "1990" },
          { label: "Based", value: "Raipur, CG" },
          { label: "Practice Areas", value: "06" },
        ]}
      />

      <AboutUs />
    </>
  );
}

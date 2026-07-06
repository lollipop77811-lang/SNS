import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { Contact } from "@/components/site/Contact";

export const metadata: Metadata = {
  title: "Contact — Begin a Conversation",
  description:
    "Write to S & S Law Firm. The firm does not accept engagements through advertising or solicitation. If you have arrived here of your own accord, a brief note on the matter is sufficient.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        section="§07 · Contact"
        title={
          <>
            Begin a{" "}
            <span className="italic text-[var(--oxblood)]">conversation.</span>
          </>
        }
        intro="The firm does not accept engagements through advertising or solicitation. If you have arrived here of your own accord, write to us — a brief note on the matter is sufficient."
        meta={[
          { label: "Chambers", value: "02" },
          { label: "Hours", value: "Mon–Fri" },
        ]}
      />

      <Contact />
    </>
  );
}

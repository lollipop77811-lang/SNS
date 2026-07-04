import type { Metadata } from "next";
import { Manifesto } from "@/components/site/Manifesto";

export const metadata: Metadata = {
  title: "Philosophy — On the Measure of the Firm",
  description:
    "We do not measure the firm by the matters that made headlines. We measure it by the client who returns, a decade later, with the next question.",
};

export default function PhilosophyPage() {
  return <Manifesto variant="page" />;
}

import type { Metadata } from "next";
import { DevelopmentJourney } from "@/components/about/DevelopmentJourney";

export const metadata: Metadata = {
  title: "Game Development Journey",
  description:
    "My journey learning game development, connecting gameplay systems, collaborating on game jams, and building playable projects.",
};

export default function GameJourneyPage() {
  return (
    <main className="py-12 sm:py-16">
      <DevelopmentJourney />
    </main>
  );
}

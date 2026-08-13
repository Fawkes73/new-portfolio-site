import type { Metadata } from "next";
import { getAllProjects } from "@/lib/projects";
import { Section } from "@/components/ui/Section";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export const metadata: Metadata = {
  title: "Work",
  description: "Real projects, filterable by category, each with a full case study.",
};

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <Section eyebrow="Work" title="Projects" description="Filter by category, or open any project for the full write-up.">
      <ProjectGrid projects={projects} />
    </Section>
  );
}

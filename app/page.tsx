import { getFeaturedProjects } from "@/lib/projects";
import { Hero } from "@/components/hero/Hero";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/projects/ProjectCard";

export default function Home() {
  const featured = getFeaturedProjects(3);
  const [heroProject, ...restFeatured] = featured;

  return (
    <>
      <Hero featuredProject={heroProject} />
      {restFeatured.length > 0 && (
        <Section eyebrow="Work" title="More projects">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {restFeatured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}

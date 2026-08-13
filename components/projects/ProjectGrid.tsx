"use client";

import { useMemo, useState } from "react";
import { siteConfig } from "@/config/site";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import type { Project } from "@/types";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((project) => project.category === active)),
    [projects, active]
  );

  return (
    <div>
      <ProjectFilter categories={siteConfig.categories} active={active} onChange={setActive} />

      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-sm text-muted">No projects in this category yet — check back soon.</p>
      )}
    </div>
  );
}

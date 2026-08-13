import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProjectCardMedia } from "@/components/projects/ProjectCardMedia";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex h-full flex-col">
      <ProjectCardMedia
        images={project.images ?? [project.cover]}
        alt={project.title}
        href={`/work/${project.slug}`}
      />

      <div className="flex flex-1 flex-col gap-3 p-5 pt-2">
        <div className="flex items-center justify-between gap-2">
          <Badge>{project.category}</Badge>
          {project.status && <span className="text-xs font-medium text-muted">{project.status}</span>}
        </div>

        <Link href={`/work/${project.slug}`}>
          <h3 className="font-display text-lg font-semibold text-foreground transition-colors group-hover:text-accent-hover">
            {project.title}
          </h3>
        </Link>

        <p className="line-clamp-2 text-sm text-muted">{project.description}</p>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} className="border-transparent bg-background/60">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-1">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-accent-hover"
          >
            Read case study <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="ml-auto text-muted hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}

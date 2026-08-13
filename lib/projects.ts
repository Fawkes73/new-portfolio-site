import { getSlugs, parseFrontmatter, readRaw } from "@/lib/mdx";
import type { Project, ProjectFrontmatter } from "@/types";

const DIR = "projects";

export function getAllProjects(): Project[] {
  return getSlugs(DIR)
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is Project => project !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getProjectBySlug(slug: string): Project | null {
  const raw = readRaw(DIR, slug);
  if (!raw) return null;
  const { frontmatter, content } = parseFrontmatter<ProjectFrontmatter>(raw);
  return { ...frontmatter, slug, content };
}

export function getFeaturedProjects(limit = 3): Project[] {
  const featured = getAllProjects().filter((project) => project.featured);
  return (featured.length > 0 ? featured : getAllProjects()).slice(0, limit);
}

export function getProjectSlugs(): string[] {
  return getSlugs(DIR);
}

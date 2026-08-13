import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { getProjectSlugs, getProjectBySlug } from "@/lib/projects";
import { readRaw, mdxOptions } from "@/lib/mdx";
import { mdxComponents } from "@/components/mdx";
import { Badge } from "@/components/ui/Badge";
import { ImageCarousel } from "@/components/projects/ImageCarousel";
import { formatDate } from "@/lib/utils";
import type { ProjectFrontmatter } from "@/types";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.cover }],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const raw = readRaw("projects", slug);

  if (!project || !raw) {
    notFound();
  }

  const { content } = await compileMDX<ProjectFrontmatter>({
    source: raw,
    options: mdxOptions,
    components: mdxComponents,
  });

  return (
    <article className="container-page py-16 sm:py-24">
      <Link href="/work" className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground">
        <ArrowLeft className="h-3.5 w-3.5" /> Back to work
      </Link>

      <div className="flex flex-wrap items-center gap-2">
        <Badge active>{project.category}</Badge>
        {project.status && <span className="text-xs font-medium text-muted">{project.status}</span>}
      </div>

      <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {project.title}
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">{project.description}</p>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
        <span>{formatDate(project.date)}</span>
        {project.github && (
          <Link href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
            <Github className="h-4 w-4" /> GitHub
          </Link>
        )}
        {project.live && (
          <Link href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
            Live demo <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>

      <div className="mt-10">
        <ImageCarousel images={project.images ?? [project.cover]} alt={project.title} priority />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <div className="mt-4 max-w-3xl">{content}</div>
    </article>
  );
}

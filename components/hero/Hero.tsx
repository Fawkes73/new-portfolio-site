import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail, Youtube, Globe2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/motion/Reveal";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { ImageCarousel } from "@/components/projects/ImageCarousel";
import { SkillsGrid } from "@/components/about/SkillsGrid";
import { RunawayAvatar } from "@/components/hero/RunawayAvatar";
import portrait from "@/public/images/hero/portrait.png";
import type { Project } from "@/types";

const socials = [
  { href: siteConfig.links.github, icon: Github, label: "GitHub" },
  { href: siteConfig.links.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: siteConfig.links.youtube, icon: Youtube, label: "YouTube" },
  { href: siteConfig.links.email ? `mailto:${siteConfig.links.email}` : "", icon: Mail, label: "Email" },
].filter((social) => social.href);

export function Hero({ featuredProject }: { featuredProject?: Project }) {
  return (
    <div className="relative overflow-hidden pb-20 pt-24 sm:pb-28 sm:pt-32">
      <HeroBackground />

      <div className="container-page relative grid gap-10 lg:grid-cols-[220px_1fr]">
        <Reveal>
          <div className="flex flex-row items-start gap-4 lg:flex-col">
            <RunawayAvatar
              src={portrait}
              alt={siteConfig.name}
              className="h-20 w-20 shrink-0 lg:h-40 lg:w-40"
            />
            <div className="flex flex-row flex-wrap gap-2 lg:flex-col lg:items-start">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted">
                <Globe2 className="h-3.5 w-3.5" /> {siteConfig.location}
              </span>
              <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs text-muted">
                English
              </span>
            </div>
          </div>
        </Reveal>

        <div className="max-w-2xl">
          <Reveal delay={80}>
            <h1 className="w-fit cursor-default text-balance bg-gradient-to-r from-foreground via-foreground to-foreground bg-clip-text font-display text-5xl font-semibold leading-[1.05] tracking-tight text-transparent transition-[background-image] duration-500 hover:from-accent hover:via-accent-2 hover:to-accent-hover sm:text-6xl">
              {siteConfig.name}
            </h1>
          </Reveal>

          {siteConfig.title && (
            <Reveal delay={140}>
              <p className="mt-2 text-lg text-muted">{siteConfig.title}</p>
            </Reveal>
          )}

          {socials.length > 0 && (
            <Reveal delay={200}>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {socials.map(({ href, icon: Icon, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-sm text-muted transition-colors duration-200 hover:border-accent-hover/60 hover:text-accent-hover"
                  >
                    <Icon className="h-4 w-4" /> {label}
                  </Link>
                ))}
              </div>
            </Reveal>
          )}

          <Reveal delay={260}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{siteConfig.description}</p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/work">
                View Work <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button href="/about" variant="secondary">
                About me
              </Button>
            </div>
          </Reveal>

          {siteConfig.workExperience.length > 0 && (
            <Reveal delay={380}>
              <section className="mt-12">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                  Work Experience
                </h2>
                <div className="mt-6 space-y-8">
                  {siteConfig.workExperience.map((job) => (
                    <div key={`${job.company}-${job.timeframe}`}>
                      <div className="flex items-baseline justify-between gap-4">
                        <p className="font-medium text-foreground">{job.company}</p>
                        <p className="shrink-0 text-sm text-muted">{job.timeframe}</p>
                      </div>
                      <p className="text-sm text-accent-hover">{job.role}</p>
                      {job.achievements.length > 0 && (
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                          {job.achievements.map((achievement) => (
                            <li key={achievement}>{achievement}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>
          )}
        </div>
      </div>

      <Reveal delay={400} className="mt-16">
        <div className="container-page">
          <h2 className="mb-6 font-display text-2xl font-semibold tracking-tight text-foreground">Skills</h2>
          <SkillsGrid />
        </div>
      </Reveal>

      {featuredProject && (
        <Reveal delay={440} className="mt-16">
          <div className="container-page">
            <Link
              href={`/work/${featuredProject.slug}`}
              className="group mx-auto block max-w-2xl overflow-hidden rounded-[28px] border border-border bg-surface/90 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent-hover/50"
            >
              <ImageCarousel
                images={featuredProject.images ?? [featuredProject.cover]}
                alt={featuredProject.title}
                className="rounded-none"
              />
              <div className="flex flex-wrap items-center justify-between gap-3 p-5">
                <div>
                  <Badge active className="mb-2">
                    Featured project
                  </Badge>
                  <h2 className="font-display text-lg font-semibold text-foreground">{featuredProject.title}</h2>
                  <p className="mt-1 line-clamp-1 text-sm text-muted">{featuredProject.description}</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-foreground group-hover:text-accent-hover">
                  Read case study <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </div>
        </Reveal>
      )}
    </div>
  );
}

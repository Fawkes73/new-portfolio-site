import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const gameJams = [
  {
    title: "LaunchBox",
    jam: "Brackeys Game Jam",
    href: "https://sogidev.itch.io/launchbox",
    projectHref: "/work/launchbox",
    image: "/images/Game/LaunchBox_gameplay.png",
    imageAlt: "LaunchBox gameplay showing the space station and NPCs",
    aspect: "aspect-[980/620]",
    description:
      "Collaborated with a team of eight across time zones, working day and night to brainstorm ideas and build the game together. My contribution focused on implementing the NPC system.",
  },
  {
    title: "Crab Soup Chao Slicer3",
    jam: "Bros Game Jam",
    href: "https://surve-mandar.itch.io/crab-soup-chao-slicer3",
    projectHref: "/work/crab-soup-chao-slicer3",
    image: "/images/Game/CrabSoupChaos_GamePlayeScreen.png",
    imageAlt: "Crab Soup Chao Slicer3 gameplay screen",
    aspect: "aspect-video",
    description:
      "I handled the game development and slicing mechanics, collaborating with one 2D artist. I created the blade VFX, applying techniques from my VFX internship to this independent game-jam project.",
  },
];

export function GameJamSection() {
  return (
    <section className="mt-12">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">Game Jam 2026</h2>
      <div className="mt-6 space-y-8">
        {gameJams.map((game) => (
          <article key={game.title} className="overflow-hidden rounded-3xl border border-border bg-surface">
            <div className={`relative ${game.aspect} bg-black`}>
              <Image
                src={game.image}
                alt={game.imageAlt}
                fill
                sizes="(min-width: 1024px) 800px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-foreground">{game.title}</h3>
                <span className="text-sm text-muted">{game.jam} · 2026</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{game.description}</p>
              <Link
                href={game.projectHref}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-accent-hover"
              >
                Project details <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <span className="mx-2 text-muted" aria-hidden="true">·</span>
              <Link
                href={game.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent-hover/60 hover:text-accent-hover"
              >
                Open game on itch.io <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

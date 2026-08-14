import { skillGroups } from "@/lib/skills";

export function SkillsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group) => (
        <div
          key={group.category}
          className="rounded-[28px] border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-hover/60 hover:shadow-[0_12px_32px_-12px_var(--accent-hover)]"
        >
          <p className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-accent to-accent-2" />
            {group.category}
          </p>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill.name}
                className="rounded-full border border-border bg-background/40 px-3 py-1.5 text-sm text-muted transition-colors duration-200 hover:border-accent-hover/60 hover:text-accent-hover"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

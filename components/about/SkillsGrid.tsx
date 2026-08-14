import { skillGroups } from "@/lib/skills";

export function SkillsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group) => (
        <div key={group.category} className="rounded-[28px] border border-border bg-surface p-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-accent">{group.category}</p>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill.name}
                className="rounded-full border border-border px-3 py-1.5 text-sm text-muted"
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

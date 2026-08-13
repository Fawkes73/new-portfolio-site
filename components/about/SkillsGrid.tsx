import { skillGroups } from "@/lib/skills";
import { SkillBar } from "@/components/about/SkillBar";

export function SkillsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group) => (
        <div key={group.category} className="rounded-[18px] border border-border bg-surface p-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-accent">{group.category}</p>
          <div className="space-y-4">
            {group.skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

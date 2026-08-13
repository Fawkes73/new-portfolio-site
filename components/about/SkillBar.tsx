"use client";

import { useEffect, useRef, useState } from "react";
import type { Skill } from "@/types";

export function SkillBar({ skill }: { skill: Skill }) {
  const ref = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilled(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="mb-2 flex items-center justify-between text-sm font-medium">
        <span className="text-foreground">{skill.name}</span>
        <span className="text-muted">{skill.level}%</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-border/60">
        <span
          className="block h-full rounded-full bg-gradient-to-r from-accent via-accent-2 to-accent-hover transition-[width] duration-[1500ms] ease-out"
          style={{ width: filled ? `${skill.level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

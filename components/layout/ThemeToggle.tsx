"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";

const order = ["light", "dark", "system"] as const;
const icons = { light: Sun, dark: Moon, system: Monitor } as const;
const labels = { light: "Light theme", dark: "Dark theme", system: "System theme" } as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const current = mounted ? (theme as (typeof order)[number]) ?? "system" : "system";
  const Icon = icons[current] ?? Monitor;

  function cycle() {
    const next = order[(order.indexOf(current) + 1) % order.length];
    setTheme(next);
  }

  return (
    <button
      type="button"
      aria-label={`Theme: ${labels[current]}. Click to change.`}
      onClick={cycle}
      className="rounded-full border border-border p-1.5 text-muted transition-colors duration-200 hover:border-accent-hover/60 hover:text-accent-hover"
    >
      <Icon className="h-3.5 w-3.5" />
    </button>
  );
}

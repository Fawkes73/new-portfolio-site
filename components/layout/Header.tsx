"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, LayoutGrid, Image as ImageIcon } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Clock } from "@/components/layout/Clock";
import { cn } from "@/lib/utils";

const icons: Record<string, typeof Home> = {
  "/": Home,
  "/about": User,
  "/work": LayoutGrid,
  "/gallery": ImageIcon,
};

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-4 z-50 px-4">
      <div className="container-page">
        <div className="flex items-center justify-between gap-3 rounded-full border border-border bg-surface/80 py-2 pl-4 pr-2 shadow-[0_8px_30px_-14px_rgba(0,0,0,0.4)] backdrop-blur-md">
          <span className="hidden shrink-0 text-xs text-muted md:block">{siteConfig.location}</span>

          <nav className="flex items-center gap-1">
            {siteConfig.navigation.map((item) => {
              const Icon = icons[item.href] ?? Home;
              const active = pathname === item.href;
              const isHome = item.href === "/";
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-label={isHome ? item.label : undefined}
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-200",
                    active ? "bg-background text-foreground" : "text-muted hover:text-accent-hover"
                  )}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                  {!isHome && <span className="hidden sm:inline">{item.label}</span>}
                </Link>
              );
            })}
            <ThemeToggle />
          </nav>

          <Clock />
        </div>
      </div>
    </header>
  );
}

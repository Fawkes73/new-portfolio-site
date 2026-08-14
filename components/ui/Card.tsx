import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "group overflow-hidden rounded-[32px] border border-border bg-surface shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-accent-hover/60 hover:shadow-[0_12px_32px_-12px_var(--accent-hover)]",
        className
      )}
    >
      {children}
    </div>
  );
}

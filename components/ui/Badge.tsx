import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
  as?: "span" | "button";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Badge({ children, className, active, as = "span", ...props }: BadgeProps) {
  const Comp = as as "span";
  return (
    <Comp
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide transition-colors duration-200",
        active
          ? "border-accent bg-accent/10 text-accent"
          : "border-border text-muted hover:border-accent-hover/60 hover:text-accent-hover",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

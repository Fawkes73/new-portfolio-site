import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  id?: string;
};

export function Section({ children, className, eyebrow, title, description, id }: SectionProps) {
  return (
    <section id={id} className={cn("container-page py-16 sm:py-24", className)}>
      {(eyebrow || title || description) && (
        <div className="mb-10 max-w-2xl">
          {eyebrow && <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">{eyebrow}</p>}
          {title && (
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
          )}
          {description && <p className="mt-4 text-base text-muted">{description}</p>}
        </div>
      )}
      {children}
    </section>
  );
}

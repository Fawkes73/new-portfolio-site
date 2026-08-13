import { Button } from "@/components/ui/Button";

export default function ProjectNotFound() {
  return (
    <div className="container-page flex min-h-[50vh] flex-col items-center justify-center py-24 text-center">
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">404</p>
      <h1 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        Can&apos;t find that project.
      </h1>
      <p className="mt-4 max-w-md text-muted">It may have been renamed or removed.</p>
      <div className="mt-8">
        <Button href="/work">See all work</Button>
      </div>
    </div>
  );
}

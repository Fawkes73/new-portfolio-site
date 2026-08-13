import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="mb-3 font-display text-7xl font-semibold tracking-tight text-accent">404</p>
      <h1 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-muted">The page you&apos;re looking for was moved, renamed, or never existed.</p>
      <div className="mt-8 flex gap-3">
        <Button href="/">Back home</Button>
        <Button href="/work" variant="secondary">
          See my work
        </Button>
      </div>
    </div>
  );
}

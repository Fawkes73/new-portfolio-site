export function SkeletonCard() {
  return (
    <div className="animate-pulse overflow-hidden rounded-[32px] border border-border bg-surface">
      <div className="aspect-[16/10] bg-border/60" />
      <div className="space-y-3 p-6">
        <div className="h-4 w-2/3 rounded-full bg-border/60" />
        <div className="h-3 w-full rounded-full bg-border/60" />
        <div className="h-3 w-4/5 rounded-full bg-border/60" />
      </div>
    </div>
  );
}

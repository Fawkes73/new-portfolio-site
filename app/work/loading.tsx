import { SkeletonCard } from "@/components/ui/SkeletonCard";

export default function WorkLoading() {
  return (
    <div className="container-page py-16 sm:py-24">
      <div className="mb-10 h-4 w-24 animate-pulse rounded-full bg-surface" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="container-page py-24">
      <div className="animate-pulse space-y-6">
        <div className="h-4 w-32 rounded-full bg-surface" />
        <div className="h-10 w-2/3 rounded-full bg-surface" />
        <div className="h-4 w-full max-w-md rounded-full bg-surface" />
      </div>
    </div>
  );
}

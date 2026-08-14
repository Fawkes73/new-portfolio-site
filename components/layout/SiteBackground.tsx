export function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* single subtle glow, top-right corner only — background should read as black, not a color wash */}
      <div
        className="absolute -right-32 -top-40 h-[26rem] w-[26rem] rounded-full blur-[130px]"
        style={{
          opacity: "var(--glow-opacity)",
          background: "radial-gradient(circle, var(--accent), var(--accent-2) 60%, transparent 75%)",
        }}
      />
    </div>
  );
}

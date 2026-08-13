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

      {/* starfield */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20px 30px, var(--foreground) 50%, transparent 50%), radial-gradient(1px 1px at 90px 140px, var(--foreground) 50%, transparent 50%), radial-gradient(1.5px 1.5px at 160px 60px, var(--foreground) 50%, transparent 50%), radial-gradient(1px 1px at 210px 190px, var(--foreground) 50%, transparent 50%), radial-gradient(1px 1px at 260px 20px, var(--foreground) 50%, transparent 50%), radial-gradient(1.5px 1.5px at 320px 120px, var(--foreground) 50%, transparent 50%)",
          backgroundSize: "360px 220px",
          opacity: 0.12,
        }}
      />
      {/* fine grid lines, right side */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to left, black, transparent)",
          WebkitMaskImage: "linear-gradient(to left, black, transparent)",
        }}
      />
    </div>
  );
}

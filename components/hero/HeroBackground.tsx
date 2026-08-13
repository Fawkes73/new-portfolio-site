"use client";

import { useEffect, useMemo, useRef } from "react";

const BAND_STAR_COUNT = 90;
const AMBIENT_STAR_COUNT = 40;

function makeRng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function seededStars() {
  const rand = makeRng(42);
  const stars: { id: number; top: number; left: number; size: number; delay: number; duration: number; opacity: number }[] = [];

  // Milky Way band: a diagonal swath of dense, mostly-dim stars with a few bright ones.
  for (let i = 0; i < BAND_STAR_COUNT; i++) {
    const left = rand() * 100;
    // gaussian-ish spread around a diagonal line running top-left -> bottom-right
    const spread = (rand() + rand() + rand() - 1.5) * 20;
    const top = Math.min(100, Math.max(0, left * 0.55 + 10 + spread));
    const bright = rand() < 0.12;
    stars.push({
      id: i,
      top,
      left,
      size: bright ? 2 + rand() * 1.5 : 0.6 + rand() * 1,
      opacity: bright ? 0.85 + rand() * 0.15 : 0.3 + rand() * 0.35,
      delay: rand() * 5,
      duration: 2.5 + rand() * 3,
    });
  }

  // scattered ambient stars across the rest of the sky, sparser
  for (let i = 0; i < AMBIENT_STAR_COUNT; i++) {
    stars.push({
      id: BAND_STAR_COUNT + i,
      top: rand() * 100,
      left: rand() * 100,
      size: 0.8 + rand() * 1.4,
      opacity: 0.35 + rand() * 0.35,
      delay: rand() * 5,
      duration: 2.5 + rand() * 3,
    });
  }

  return stars;
}

export function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const stars = useMemo(() => seededStars(), []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    function handleMove(event: MouseEvent) {
      const rect = node!.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      node!.style.setProperty("--mx", `${x}%`);
      node!.style.setProperty("--my", `${y}%`);
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* dot grid, fades toward the bottom so it blends into the page below rather than cutting off */}
      <div
        className="absolute inset-0 animate-fade-in opacity-[0.3]"
        style={{
          backgroundImage: "radial-gradient(var(--border) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
        }}
      />

      {/* Milky Way haze band, same diagonal as the star cluster below */}
      <div
        className="absolute inset-[-20%] animate-fade-in opacity-40"
        style={{
          background:
            "linear-gradient(118deg, transparent 38%, color-mix(in srgb, var(--accent-hover) 18%, transparent) 48%, color-mix(in srgb, var(--foreground) 12%, transparent) 52%, color-mix(in srgb, var(--accent-2) 16%, transparent) 56%, transparent 66%)",
          filter: "blur(24px)",
        }}
      />

      {/* twinkling stars */}
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-foreground"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}

      {/* cursor-follow glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(500px circle at var(--mx, 70%) var(--my, 10%), color-mix(in srgb, var(--accent-2) 22%, transparent), transparent 70%)",
        }}
      />
    </div>
  );
}

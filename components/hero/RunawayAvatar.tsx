"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

type RunState = "idle" | "leaving" | "fled";

const STORAGE_KEY = "portrait-fled";

export function RunawayAvatar({
  src,
  alt,
  className,
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
}) {
  const [state, setState] = useState<RunState>("idle");

  useEffect(() => {
    if (window.localStorage.getItem(STORAGE_KEY) === "true") {
      setState("fled");
    }
  }, []);

  function handleContextMenu(event: React.MouseEvent) {
    event.preventDefault();
    if (state !== "idle") return;
    setState("leaving");
  }

  if (state === "fled") {
    return (
      <div
        className={cn(
          "group relative flex items-center justify-center overflow-hidden rounded-full border border-dashed border-border bg-surface p-3 text-center",
          className
        )}
      >
        <ImageOff className="h-6 w-6 shrink-0 text-muted transition-opacity duration-200 group-hover:opacity-0" />
        <span className="pointer-events-none absolute px-4 text-[11px] font-medium leading-tight text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          Image not available
        </span>
      </div>
    );
  }

  return (
    <div className={cn("group relative", className)} onContextMenu={handleContextMenu}>
      {/* silhouette left behind, always present underneath the real photo */}
      <div className="absolute inset-0 overflow-hidden rounded-full border border-border">
        <Image src={src} alt="" fill sizes="160px" className="object-cover" style={{ filter: "brightness(0)" }} />
      </div>

      {/* speed lines, flash briefly on departure */}
      {state === "leaving" && (
        <div className="pointer-events-none absolute inset-y-1/2 left-0 h-px w-full origin-left animate-speed-lines">
          <span className="absolute -top-3 h-px w-full bg-foreground/60" />
          <span className="absolute top-0 h-px w-full bg-foreground/40" />
          <span className="absolute top-3 h-px w-full bg-foreground/50" />
        </div>
      )}

      <div
        className={cn(
          "absolute inset-0 overflow-hidden rounded-full border border-border transition-all duration-300",
          "group-hover:border-accent-hover/60 group-hover:shadow-[0_0_28px_-4px_var(--accent-hover)]",
          state === "leaving" && "animate-cartoon-dash-out"
        )}
        onAnimationEnd={() => {
          if (state === "leaving") {
            window.localStorage.setItem(STORAGE_KEY, "true");
            setState("fled");
          }
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="160px"
          draggable={false}
          priority
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    </div>
  );
}

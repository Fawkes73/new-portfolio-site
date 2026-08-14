"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 2800;

function useCarousel(length: number) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  function goTo(index: number) {
    setActive(((index % length) + length) % length);
  }

  useEffect(() => {
    if (length <= 1 || paused) return;
    const id = setInterval(() => setActive((prev) => (prev + 1) % length), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [length, paused]);

  return { active, goTo, setPaused };
}

type StackProps = {
  images: string[];
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  active: number;
  onHoverChange?: (hovering: boolean) => void;
};

function CarouselStack({
  images,
  alt,
  priority,
  sizes = "(min-width: 1024px) 800px, 100vw",
  className,
  active,
  onHoverChange,
}: StackProps) {
  return (
    <div
      onMouseEnter={() => onHoverChange?.(true)}
      onMouseLeave={() => onHoverChange?.(false)}
      className={cn("relative aspect-[16/10] overflow-hidden rounded-4xl bg-surface", className)}
    >
      {images.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0 transition-[clip-path,opacity] duration-[1100ms] ease-in-out"
          style={{
            clipPath: index === active ? "circle(105% at 50% 50%)" : "circle(0% at 50% 50%)",
            opacity: index === active ? 1 : 0,
          }}
        >
          <Image
            src={src}
            alt={images.length > 1 ? `${alt} — screen ${index + 1}` : alt}
            fill
            sizes={sizes}
            className="object-cover"
            priority={priority && index === 0}
          />
        </div>
      ))}
    </div>
  );
}

function CarouselDots({
  count,
  active,
  onSelect,
  className,
}: {
  count: number;
  active: number;
  onSelect: (index: number) => void;
  className?: string;
}) {
  if (count <= 1) return null;

  return (
    <div className={cn("mt-3 flex items-center justify-center gap-1.5", className)}>
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Show image ${index + 1}`}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            onSelect(index);
          }}
          className={cn(
            "h-1.5 rounded-full transition-all duration-300",
            index === active ? "w-5 bg-accent" : "w-1.5 bg-border"
          )}
        />
      ))}
    </div>
  );
}

/** Self-contained carousel: image stack + dots, circular-reveal auto-play, pauses on hover. */
export function ImageCarousel(props: Omit<StackProps, "active" | "onHoverChange">) {
  const { active, goTo, setPaused } = useCarousel(props.images.length);
  return (
    <div>
      <CarouselStack {...props} active={active} onHoverChange={setPaused} />
      <CarouselDots count={props.images.length} active={active} onSelect={goTo} />
    </div>
  );
}

/** Split version: lets the caller place the image stack inside a Link while keeping dots outside it. */
export function useSplitCarousel(images: string[]) {
  const { active, goTo, setPaused } = useCarousel(images.length);
  return {
    Track: (props: Omit<StackProps, "active" | "images" | "onHoverChange">) => (
      <CarouselStack {...props} images={images} active={active} onHoverChange={setPaused} />
    ),
    Dots: (props: { className?: string }) => (
      <CarouselDots count={images.length} active={active} onSelect={goTo} {...props} />
    ),
  };
}

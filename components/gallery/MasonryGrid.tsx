"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox } from "@/components/gallery/Lightbox";
import type { GalleryItem } from "@/types";

export function MasonryGrid({ images }: { images: GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>button]:mb-4">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group block w-full overflow-hidden rounded-[28px] bg-surface transition-colors duration-200"
            style={{ breakInside: "avoid" }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox images={images} index={activeIndex} onClose={() => setActiveIndex(null)} onNavigate={setActiveIndex} />
      )}
    </>
  );
}

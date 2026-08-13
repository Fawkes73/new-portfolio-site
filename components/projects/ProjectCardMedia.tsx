"use client";

import Link from "next/link";
import { useSplitCarousel } from "@/components/projects/ImageCarousel";

export function ProjectCardMedia({ images, alt, href }: { images: string[]; alt: string; href: string }) {
  const { Track, Dots } = useSplitCarousel(images);

  return (
    <div>
      <Link href={href} className="block">
        <Track alt={alt} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="rounded-none" />
      </Link>
      <Dots className="mt-3 px-5" />
    </div>
  );
}

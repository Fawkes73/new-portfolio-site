import type { Metadata } from "next";
import { galleryImages } from "@/lib/gallery";
import { Section } from "@/components/ui/Section";
import { MasonryGrid } from "@/components/gallery/MasonryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Screenshots from real projects.",
};

export default function GalleryPage() {
  return (
    <Section eyebrow="Gallery" title="Screens" description="Click any image to open the lightbox.">
      <MasonryGrid images={galleryImages} />
    </Section>
  );
}

import { ImageResponse } from "next/og";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";
import { siteConfig } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#08080d",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(236,79,170,0.55), transparent 55%), radial-gradient(circle at 15% 85%, rgba(168,85,247,0.35), transparent 55%)",
          color: "#f3f4fb",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#ec4faa",
            marginBottom: 24,
          }}
        >
          {project?.category ?? "Project"}
        </div>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 700, lineHeight: 1.1, maxWidth: 980 }}>
          {project?.title ?? siteConfig.name}
        </div>
        {project?.description && (
          <div style={{ display: "flex", fontSize: 28, color: "#ab9bc0", marginTop: 28, maxWidth: 900 }}>
            {project.description}
          </div>
        )}
      </div>
    ),
    size
  );
}

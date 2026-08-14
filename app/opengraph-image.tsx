import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#ec4faa",
            marginBottom: 28,
          }}
        >
          {siteConfig.location}
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>{siteConfig.name}</div>
        <div style={{ display: "flex", fontSize: 32, color: "#ab9bc0", marginTop: 24, maxWidth: 900 }}>
          {siteConfig.title}
        </div>
      </div>
    ),
    size
  );
}

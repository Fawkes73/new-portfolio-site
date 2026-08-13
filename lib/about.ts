import fs from "node:fs";
import path from "node:path";

export function getAboutRaw(): string | null {
  const filePath = path.join(process.cwd(), "content", "about.mdx");
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, "utf8");
}

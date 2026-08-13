import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import { compileMDX } from "next-mdx-remote/rsc";

type MDXRemoteOptions = NonNullable<Parameters<typeof compileMDX>[0]["options"]>;

const CONTENT_DIR = path.join(process.cwd(), "content");

export function getSlugs(dir: string): string[] {
  const fullDir = path.join(CONTENT_DIR, dir);
  if (!fs.existsSync(fullDir)) return [];
  return fs
    .readdirSync(fullDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function readRaw(dir: string, slug: string): string | null {
  const filePath = path.join(CONTENT_DIR, dir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, "utf8");
}

export function parseFrontmatter<T>(raw: string): { frontmatter: T; content: string } {
  const { data, content } = matter(raw);
  return { frontmatter: data as T, content };
}

export const mdxOptions: MDXRemoteOptions = {
  parseFrontmatter: true,
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "append", properties: { className: "no-underline" } }],
      [rehypePrettyCode, { theme: "github-dark", keepBackground: false }],
    ],
  },
};

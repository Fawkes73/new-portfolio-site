import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import { siteConfig } from "@/config/site";
import { getAboutRaw } from "@/lib/about";
import { mdxOptions } from "@/lib/mdx";
import { mdxComponents } from "@/components/mdx";
import { getHeadings } from "@/lib/toc";
import { TableOfContents } from "@/components/about/TableOfContents";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name}`,
};

export default async function AboutPage() {
  const raw = getAboutRaw();
  const compiled = raw
    ? await compileMDX({ source: raw, options: { mdxOptions: mdxOptions.mdxOptions }, components: mdxComponents })
    : null;
  const headings = raw ? getHeadings(raw) : [];

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-8 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
        {headings.length > 0 && (
          <aside className="hidden lg:sticky lg:top-24 lg:block lg:max-h-[calc(100vh-8rem)] lg:self-start lg:overflow-y-auto">
            <TableOfContents items={headings} />
          </aside>
        )}

        <div className="max-w-2xl">
          {compiled ? (
            <div>{compiled.content}</div>
          ) : (
            <p className="text-lg leading-relaxed text-muted">
              More about my background and how I work is coming soon — in the meantime, the code speaks for itself.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

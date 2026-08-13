export type TocItem = {
  depth: 2 | 3;
  text: string;
  slug: string;
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s/g, "-");
}

/** Extracts H2/H3 headings from raw markdown, generating slugs that match rehype-slug's output. */
export function getHeadings(raw: string): TocItem[] {
  const seen = new Map<string, number>();
  const items: TocItem[] = [];

  for (const line of raw.split("\n")) {
    const match = /^(#{2,3})\s+(.+)$/.exec(line.trim());
    if (!match) continue;

    const depth = match[1].length as 2 | 3;
    const text = match[2].replace(/\*\*/g, "").trim();
    let slug = slugify(text);

    const count = seen.get(slug) ?? 0;
    seen.set(slug, count + 1);
    if (count > 0) slug = `${slug}-${count}`;

    items.push({ depth, text, slug });
  }

  return items;
}

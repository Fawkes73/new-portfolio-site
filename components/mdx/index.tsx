import Link from "next/link";
import Image from "next/image";
import type { MDXComponents } from "mdx/types";
import { cn } from "@/lib/utils";

export const mdxComponents: MDXComponents = {
  h1: ({ className, ...props }) => (
    <h1 className={cn("mt-12 font-display text-3xl font-semibold tracking-tight text-foreground", className)} {...props} />
  ),
  h2: ({ className, ...props }) => (
    <h2 className={cn("mt-10 font-display text-2xl font-semibold tracking-tight text-foreground", className)} {...props} />
  ),
  h3: ({ className, ...props }) => (
    <h3 className={cn("mt-8 font-display text-xl font-semibold tracking-tight text-foreground", className)} {...props} />
  ),
  p: ({ className, ...props }) => <p className={cn("mt-5 leading-relaxed text-muted", className)} {...props} />,
  a: ({ className, href = "", ...props }) => (
    <Link href={href} className={cn("font-medium text-accent underline underline-offset-4 hover:text-accent-hover", className)} {...props} />
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn("mt-5 list-disc space-y-2 pl-6 text-muted", className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn("mt-5 list-decimal space-y-2 pl-6 text-muted", className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote className={cn("mt-6 border-l-2 border-accent pl-4 italic text-muted", className)} {...props} />
  ),
  code: ({ className, ...props }) => (
    <code className={cn("rounded-full bg-surface px-2.5 py-0.5 font-mono text-[0.85em] text-foreground", className)} {...props} />
  ),
  pre: ({ className, ...props }) => (
    <pre className={cn("mt-6 overflow-x-auto rounded-3xl bg-[#0c0a09] p-5 text-sm", className)} {...props} />
  ),
  img: ({ src, alt = "" }) => (
    <span className="mt-6 block overflow-hidden rounded-[28px] bg-surface">
      <Image src={typeof src === "string" ? src : ""} alt={alt} width={1200} height={675} className="h-auto w-full" />
    </span>
  ),
  hr: ({ className, ...props }) => <hr className={cn("my-10 border-border", className)} {...props} />,
};

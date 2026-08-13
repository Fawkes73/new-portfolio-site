import type { NavItem, WorkExperience } from "@/types";

/**
 * Single source of truth for personal info, links, and nav.
 * Deliberately minimal right now — only real, verified data.
 */
export const siteConfig = {
  name: "Mandar Surve",
  title: "Full-Stack Developer & Indie Builder",
  description:
    "Software Developer and Independent Builder with hands-on experience across web, mobile, desktop, game, backend, database, blockchain, and application development. Comfortable moving across technologies and domains, learning new tools quickly, and using AI-assisted development to accelerate prototyping, implementation, and iteration from idea to deployment.",
  location: "India",

  // TODO: set your production domain
  url: "https://TODO-yourdomain.com",

  links: {
    github: "https://github.com/Fawkes73",
    linkedin: "", // TODO
    twitter: "", // TODO
    youtube: "", // TODO
    email: "", // TODO
    resume: "", // TODO
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Gallery", href: "/gallery" },
  ] satisfies NavItem[],

  categories: ["All", "Frontend", "Full-Stack", "Mobile", "SaaS", "Games", "Other"] as const,

  // No traditional employer history — as an independent builder, "work experience"
  // is the shipped project record itself. TODO: replace/extend with real employer
  // entries if that ever applies, using the same shape.
  workExperience: [
    {
      company: "Developer Hub",
      role: "Independent Developer",
      timeframe: "2025",
      achievements: [
        "Built a full workspace dashboard — projects, docs, snippets, API explorer, tools, bookmarks — each with real content",
        "Shipped resizable panel layout and full light/dark theming with next-themes",
      ],
    },
    {
      company: "YouTube Channel Dashboard",
      role: "Independent Developer",
      timeframe: "2025",
      achievements: [
        "Built channel analytics computed live from underlying video/comment data, not hardcoded",
        "Shipped a live-stream view with match stats, an event feed, and a paginated video library",
      ],
    },
    {
      company: "Modern Login Page Template",
      role: "Independent Developer",
      timeframe: "2025",
      achievements: [
        "Designed a reusable split-screen sign-in template with a CSS gradient/dot-grid panel — no stock photography to license",
        "Shipped full light/dark theming across the entire layout, including the decorative panel",
      ],
    },
  ] satisfies WorkExperience[],
} as const;

export type SiteConfig = typeof siteConfig;

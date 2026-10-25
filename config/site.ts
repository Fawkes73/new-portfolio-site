import type { NavItem, WorkExperience } from "@/types";

/**
 * Single source of truth for personal info, links, and nav.
 * Deliberately minimal right now — only real, verified data.
 */
export const siteConfig = {
  name: "Mandar Surve",
  title: "Software Developer | Product Builder | Indie Game Developer",
  description:
    "Software Developer and Independent Builder with hands-on experience across web, mobile, desktop, game, backend, database, blockchain, and application development. Comfortable moving across technologies and domains, learning new tools quickly, and using AI-assisted development to accelerate prototyping, implementation, and iteration from idea to deployment.",
  location: "India",

  url: "https://mandar-surve-portfolio-2026.vercel.app",

  links: {
    github: "https://github.com/Fawkes73",
    linkedin: "https://www.linkedin.com/in/mandar-surve-409828212", // TODO
    twitter: "", // TODO
    youtube: "https://www.youtube.com/@codingmarathiyt", // TODO
    blog: "codingmarathi.com", // TODO
    resume: "", // TODO
    email: "", // TODO
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "Journey", href: "/game-journey" },
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Gallery", href: "/gallery" },
  ] satisfies NavItem[],

  categories: ["All", "Frontend", "Full-Stack", "Mobile", "SaaS", "Games", "VFX", "Other"] as const,

  workExperience: [
    {
      company: "Epiko Studio",
      role: "VFX Artist Intern",
      timeframe: "September 1st 2026 - Present",
      achievements: [
        "Built real-time visual effects in Unity, developing practical skills in particle systems, shaders, materials, and VFX asset creation from the ground up.",
        "Designed and refined particle systems, visual shaders, textures, and masks to create and enhance real-time visual effects.",
        "Created custom textures and masks in Krita and generated procedural masks using Material Maker to support VFX workflows.",
        "Configured shaders and materials by combining textures and masks to achieve the desired visual results.",
        "Modified shader code to adapt HDRP shaders for URP as the project transitioned pipelines, updating effects to meet the new GDD requirements."
      ],
    },
    {
      company: "Aerus Infotech, Airoli",
      role: "Java Developer Intern",
      timeframe: "2019",
      achievements: [
        "Built a movie ticket booking website using Java and MySQL, implementing the DAO (Data Access Object) pattern for database access.",
        "Developed database operations for managing movie and booking-related data.",
        "Applied object-oriented programming and structured application architecture to build a maintainable web application.",
      ],
    },
    {
      company: "5CentCDN Inc, Mumbai",
      role: "Next.js Frontend Developer",
      timeframe: "2025",
      achievements: [
        "Built internal developer tooling — multi-section dashboards, workspace utilities, and admin interfaces — end to end with Next.js, TypeScript, and Tailwind CSS",
        "Built data-driven analytics dashboards with live, real-time-computed metrics and interactive charts, not static/hardcoded numbers",
        "Implemented authentication and sign-in flows with full light/dark theming across every surface",
        "Delivered all of the above end to end — UI, state, and integration — within a one-month engagement",
      ],
    },
  ] satisfies WorkExperience[],
} as const;

export type SiteConfig = typeof siteConfig;

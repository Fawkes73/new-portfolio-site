export type NavItem = {
  label: string;
  href: string;
};

export type ProjectCategory = "Frontend" | "Full-Stack" | "Mobile" | "SaaS" | "Games" | "Other";

export type ProjectStatus = "Live" | "In Progress" | "Shipped" | "Archived";

export type ProjectFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  category: ProjectCategory;
  status?: ProjectStatus;
  cover: string;
  images?: string[];
  github?: string;
  live?: string;
  featured?: boolean;
};

export type Project = ProjectFrontmatter & {
  slug: string;
  content: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type WorkExperience = {
  company: string;
  role: string;
  timeframe: string;
  achievements: string[];
};

export type Skill = {
  name: string;
  level: number;
};

export type SkillGroup = {
  category: string;
  skills: Skill[];
};

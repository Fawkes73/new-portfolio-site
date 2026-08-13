import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, Youtube } from "lucide-react";
import { siteConfig } from "@/config/site";

const socials = [
  { href: siteConfig.links.github, icon: Github, label: "GitHub" },
  { href: siteConfig.links.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: siteConfig.links.youtube, icon: Youtube, label: "YouTube" },
  { href: siteConfig.links.twitter, icon: Twitter, label: "Twitter" },
  { href: siteConfig.links.email ? `mailto:${siteConfig.links.email}` : "", icon: Mail, label: "Email" },
].filter((social) => social.href);

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col items-center gap-6 py-12 sm:flex-row sm:justify-between">
        <p className="font-display text-sm font-semibold text-foreground">{siteConfig.name}</p>

        <div className="flex items-center gap-1">
          {socials.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-full p-2.5 text-muted transition-colors duration-200 hover:bg-surface hover:text-accent-hover"
            >
              <Icon className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>

      <div className="container-page pb-8 text-center text-xs text-muted/70 sm:text-left">
        © {new Date().getFullYear()} {siteConfig.name}
      </div>
    </footer>
  );
}

import { GitHubIcon, LinkedInIcon } from "./Icons";
import { portfolio } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href={portfolio.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-accent">
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a href={portfolio.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-accent">
            <LinkedInIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
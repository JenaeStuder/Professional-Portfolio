import { site } from "@/lib/content";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#professional-work", label: "Professional work" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 px-6 py-3">
        <a href="#top" className="order-1 font-bold tracking-tight">
          {site.name}
        </a>
        <nav aria-label="Primary" className="order-3 -mx-2.5 w-full sm:order-2 sm:mx-0 sm:w-auto">
          <ul className="flex flex-wrap gap-0.5 sm:gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-md px-2.5 py-2 text-sm font-medium text-muted underline-offset-4 hover:text-accent hover:underline sm:px-3"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

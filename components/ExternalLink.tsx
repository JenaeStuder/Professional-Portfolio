import type { ReactNode } from "react";

// The one body-link style for the whole site: periwinkle at rest, fading to the coral accent (its
// complement in the palette) on hover. Header links are styled separately (Header.tsx).
export const linkStyle =
  "font-semibold text-accent underline underline-offset-4 decoration-2 transition-colors duration-300 ease-out hover:text-accent2 active:text-accent2";

// Every link that leaves the page: opens in a new tab and says so to screen readers.
export function ExternalLink({
  href,
  className = linkStyle,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

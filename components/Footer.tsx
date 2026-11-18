import { site } from "@/lib/content";
import { CurrentYear } from "./CurrentYear";

export function Footer() {
  return (
    <footer className="border-t border-line py-8 text-sm text-muted">
      <div className="mx-auto max-w-6xl px-6">
        © <CurrentYear buildYear={new Date().getFullYear()} /> {site.name}. Built with Next.js and
        Tailwind CSS.
      </div>
    </footer>
  );
}

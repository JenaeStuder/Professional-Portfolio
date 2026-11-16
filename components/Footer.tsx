import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line py-8 text-sm text-muted">
      <div className="mx-auto max-w-5xl px-6">
        © {new Date().getFullYear()} {site.name}. Built with Next.js and Tailwind CSS.
      </div>
    </footer>
  );
}

import { projects } from "@/lib/content";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" title="Selected work">
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <li key={p.title}>
            <article
              aria-labelledby={`project-${i}`}
              className="flex h-full flex-col rounded-lg border border-line bg-surface p-6"
            >
              <h3 id={`project-${i}`} className="text-lg font-semibold">
                {p.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{p.summary}</p>
              <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-2 text-sm">
                {p.tags.map((t) => (
                  <li key={t} className="rounded bg-bg px-2 py-1 text-muted ring-1 ring-line">
                    {t}
                  </li>
                ))}
              </ul>
              {p.links && (
                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {p.links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        className="font-semibold text-accent underline underline-offset-4"
                      >
                        {l.label}
                        <span className="sr-only"> for {p.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-muted">
        Most of my client work is under NDA, so these are described rather than linked. More of my
        code is on{" "}
        <a
          href="https://github.com/JenaeStuder"
          className="font-semibold text-accent underline underline-offset-4"
        >
          GitHub
        </a>
        .
      </p>
    </Section>
  );
}

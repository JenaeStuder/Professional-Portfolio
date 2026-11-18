import { projects } from "@/lib/content";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" eyebrow="02 / code" title="Selected projects">
      <ul className="grid gap-3 sm:gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <li key={p.title}>
            <article
              aria-labelledby={`project-${i}`}
              className="flex h-full flex-col rounded-2xl border border-l-4 border-line border-l-accent2 bg-surface p-5 focus-within:border-accent hover:border-accent motion-safe:transition motion-safe:focus-within:-translate-y-1 motion-safe:hover:-translate-y-1 sm:p-8"
            >
              <h3
                id={`project-${i}`}
                className="text-[1.35rem] font-bold tracking-tight sm:text-2xl"
              >
                {p.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{p.summary}</p>
              <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2 font-mono text-xs">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-md border border-line px-2.5 py-1 text-muted">
                    {t}
                  </li>
                ))}
              </ul>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {p.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="font-semibold text-accent underline decoration-2 underline-offset-4"
                    >
                      {l.label}
                      <span aria-hidden="true"> →</span>
                      <span className="sr-only"> for {p.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-muted sm:mt-10">
        More of my code is on{" "}
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

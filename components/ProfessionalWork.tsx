import { professionalWork } from "@/lib/content";
import { Section } from "./Section";

// Deliberately quieter than the Projects cards: smaller, flat, no hover motion,
// because this work can't be linked or inspected.
export function ProfessionalWork() {
  return (
    <Section id="professional-work" eyebrow="03 / shipped" title="Professional work">
      <p className="mb-4 max-w-2xl text-muted sm:mb-8">
        Much of my professional work is proprietary, so it&apos;s described rather than linked.
      </p>
      <ul className="grid gap-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {professionalWork.map((w, i) => (
          <li key={w.title}>
            <article
              aria-labelledby={`work-${i}`}
              className="h-full rounded-lg border border-line p-5"
            >
              <h3 id={`work-${i}`} className="text-base font-semibold">
                {w.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{w.summary}</p>
              <p className="mt-3 font-mono text-xs text-muted">
                <span className="sr-only">Technologies: </span>
                {w.tags.join(" · ")}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}

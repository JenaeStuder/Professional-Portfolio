import { existsSync } from "node:fs";
import { join } from "node:path";
import { credentials, resumeFile, story } from "@/lib/content";
import { Section } from "./Section";

// Static export, so this runs at build time: the link only renders if the PDF
// has actually been added to /public (no broken link on the live site).
const hasResume = existsSync(join(process.cwd(), "public", resumeFile));
const resumeHref = `${process.env.BASE_PATH ?? ""}/${resumeFile}`;

export function Experience() {
  return (
    <Section id="experience" eyebrow="03 / experience" title="Seven years, one team, growing scope">
      <p className="max-w-3xl text-xl leading-relaxed text-muted sm:text-2xl">{story.lead}</p>

      <div className="mt-14 divide-y divide-line border-y border-line">
        {story.sections.map((s) => (
          <div key={s.title} className="grid gap-4 py-10 md:grid-cols-[1fr_2fr] md:gap-12">
            <h3 className="text-xl font-bold tracking-tight">{s.title}</h3>
            <p className="max-w-2xl text-lg leading-relaxed text-muted">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-6">
        {hasResume && (
          <a
            href={resumeHref}
            download
            className="rounded-lg bg-accent px-6 py-3.5 font-semibold text-on-accent shadow-lg shadow-accent/20 motion-safe:transition motion-safe:hover:-translate-y-0.5 hover:opacity-90"
          >
            Download my resume<span className="sr-only"> (PDF)</span>
          </a>
        )}
        <div>
          <h3 className="mb-2 font-mono text-sm font-medium text-accent">
            Education &amp; certifications
          </h3>
          <ul className="space-y-1 text-sm text-muted">
            {credentials.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

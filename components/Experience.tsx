import { story } from "@/lib/content";
import { resume } from "@/lib/resume";
import { Section } from "./Section";

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
        {resume.available && (
          <a
            href={resume.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View my resume<span className="sr-only"> (PDF, opens in a new tab)</span>
          </a>
        )}
      </div>
    </Section>
  );
}

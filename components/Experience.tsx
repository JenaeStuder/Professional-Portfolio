import { story } from "@/lib/content";
import { yearsInWords, yearsOfExperience } from "@/lib/experience";
import { resume } from "@/lib/resume";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="01 / experience"
      title={`${yearsInWords(yearsOfExperience())} years, one team, growing scope`}
    >
      <p className="max-w-3xl text-lg leading-relaxed text-muted sm:text-2xl">{story.lead}</p>

      <div className="mt-7 divide-y divide-line border-y border-line sm:mt-14">
        {story.sections.map((s) => (
          <div
            key={s.title}
            className="grid gap-2 py-5 sm:gap-4 sm:py-10 md:grid-cols-[1fr_2fr] md:gap-12"
          >
            <h3 className="text-lg font-bold tracking-tight sm:text-xl">{s.title}</h3>
            <p className="max-w-2xl text-lg leading-relaxed text-muted">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-6 sm:mt-12">
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

import { coreSkills, skills } from "@/lib/content";
import { Section } from "./Section";

// Two tiers, deliberately unlike the rest of the page (no rows, no pills, no cards):
// a big-type statement of the core toolkit, then plain columns for the supporting skills.
export function Skills() {
  return (
    <Section id="skills" eyebrow="04 / skills" title="What I work with">
      <h3 className="font-mono text-sm font-medium text-accent">Core toolkit</h3>
      <ul className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[1.35rem] font-bold leading-tight tracking-tight sm:text-3xl">
        {coreSkills.map((skill, i) => (
          <li key={skill}>
            {skill}
            {i < coreSkills.length - 1 && (
              <span aria-hidden="true" className="ml-4 font-light text-accent2">
                /
              </span>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-8 grid gap-x-10 gap-y-6 sm:mt-16 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3">
        {skills.map((group) => {
          const items = group.items.filter((item) => !coreSkills.includes(item));
          if (items.length === 0) return null;
          return (
            <div key={group.label}>
              <span aria-hidden="true" className="mb-4 block h-0.5 w-8 bg-accent2" />
              <h3 className="font-mono text-sm font-medium text-accent2">{group.label}</h3>
              <ul className="mt-4 space-y-2 text-muted">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

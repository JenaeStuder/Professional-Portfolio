import { skills } from "@/lib/content";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="about" title="Skills">
      <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.label}>
            <dt className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              {group.label}
            </dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line bg-surface px-3 py-1.5 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

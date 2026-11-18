import { intro } from "@/lib/content";
import { Section } from "./Section";

// A deliberate breather between the professional sections and Contact:
// short, quiet, and not a card, row or list so it reads differently from everything above.
export function Personal() {
  return (
    <Section id="beyond-the-code" eyebrow="05 / off the clock" title="Beyond the code">
      <p className="max-w-3xl text-lg leading-relaxed text-muted sm:text-2xl">{intro.personal}</p>
      <p className="mt-3 max-w-4xl text-lg leading-relaxed text-muted sm:mt-6">
        My love for reading is also how the{" "}
        <a href="#projects" className="font-semibold text-accent underline underline-offset-4">
          book recommender
        </a>{" "}
        started: I built it to find my own next read.
      </p>
    </Section>
  );
}

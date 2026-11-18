import { site } from "@/lib/content";
import { resume } from "@/lib/resume";
import { EmailActions } from "./EmailActions";
import { Section } from "./Section";

const link = "font-semibold text-accent underline underline-offset-4";

export function Contact() {
  return (
    <Section id="contact" eyebrow="06 / contact" title="Let's talk">
      <div className="rounded-3xl border border-line bg-surface p-6 sm:p-12">
        <p className="max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          I&apos;m open to senior frontend roles, especially work built on Next.js and design
          systems, or leading a team of developers. Tell me a little about the role or project
          and I&apos;ll get back to you, or start with my resume.
        </p>

        <h3 className="mb-3 mt-6 text-center font-mono text-sm font-medium text-accent sm:mb-4 sm:mt-10 sm:text-left">
          Send a message
        </h3>
        <EmailActions />
        <noscript>
          <p className="mt-3 text-sm text-muted">
            The email buttons need JavaScript. You can also reach me on LinkedIn.
          </p>
        </noscript>

        <ul className="mt-6 flex flex-col items-center gap-4 border-t border-line pt-6 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:pt-8">
          {resume.available && (
            <li>
              <a
                href={resume.href}
                download
                className="btn btn-outline"
              >
                Download my resume<span className="sr-only"> (PDF)</span>
              </a>
            </li>
          )}
          <li>
            <a href={site.linkedin} className={link} target="_blank" rel="noopener noreferrer">
              LinkedIn<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a href={site.github} className={link} target="_blank" rel="noopener noreferrer">
              GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </div>
    </Section>
  );
}

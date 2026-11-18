import { site } from "@/lib/content";
import { resume } from "@/lib/resume";
import { EmailActions } from "./EmailActions";
import { Section } from "./Section";

const link = "font-semibold text-accent underline underline-offset-4";

export function Contact() {
  return (
    <Section id="contact" eyebrow="05 / contact" title="Let's talk">
      <div className="rounded-3xl border border-line bg-surface p-8 sm:p-12">
        <p className="max-w-2xl text-xl leading-relaxed text-muted">
          I&apos;m open to frontend engineering roles, especially work built on Next.js and design
          systems. Tell me a little about the role or project and
          I&apos;ll get back to you, or start with my resume.
        </p>

        <h3 className="mb-4 mt-10 font-mono text-sm font-medium text-accent">Send a message</h3>
        <EmailActions />
        <noscript>
          <p className="mt-3 text-sm text-muted">
            The email buttons need JavaScript. You can also reach me on LinkedIn.
          </p>
        </noscript>

        <ul className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-line pt-8">
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
            <a href={site.linkedin} className={link} target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={site.github} className={link} target="_blank">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </Section>
  );
}

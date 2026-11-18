import { site } from "@/lib/content";
import { resume } from "@/lib/resume";
import { EmailActions } from "./EmailActions";
import { ExternalLink } from "./ExternalLink";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contact" eyebrow="06 / contact" title="Let's talk">
      <div className="rounded-3xl border border-line bg-surface p-6 sm:p-12">
        <p className="max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          I&apos;m open to senior frontend roles, especially work built on Next.js and design
          systems. Tell me a little about the role or project and I&apos;ll get back to you, or
          start with my resume.
        </p>

        <h3 className="mt-6 mb-3 text-center font-mono text-sm font-medium text-accent sm:mt-10 sm:mb-4 sm:text-left">
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
              <a href={resume.href} download className="btn btn-outline">
                Download my resume<span className="sr-only"> (PDF)</span>
              </a>
            </li>
          )}
          <li>
            <ExternalLink href={site.linkedin}>LinkedIn</ExternalLink>
          </li>
          <li>
            <ExternalLink href={site.github}>GitHub</ExternalLink>
          </li>
        </ul>
      </div>
    </Section>
  );
}

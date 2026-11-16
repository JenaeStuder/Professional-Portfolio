import { site } from "@/lib/content";
import { CopyEmail } from "./CopyEmail";
import { Section } from "./Section";

const subject = "Hello from your portfolio";
const body = "Hi Jenae,\n\n";

// Plain links, no backend: works on static hosting and with JavaScript off.
const enc = encodeURIComponent;
const mailto = `mailto:${site.email}?subject=${enc(subject)}&body=${enc(body)}`;
const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${enc(site.email)}&su=${enc(subject)}&body=${enc(body)}`;
const outlook = `https://outlook.live.com/mail/0/deeplink/compose?to=${enc(site.email)}&subject=${enc(subject)}&body=${enc(body)}`;

const secondary =
  "rounded-md border border-ui px-4 py-2.5 font-semibold hover:bg-surface";

export function Contact() {
  return (
    <Section id="contact" title="Get in touch">
      <p className="max-w-2xl text-lg leading-relaxed text-muted">
        I&apos;m open to frontend engineering roles, especially accessibility-focused work. Send
        me a message at{" "}
        <a href={mailto} className="font-semibold text-fg underline underline-offset-4">
          {site.email}
        </a>
        .
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={mailto}
          className="rounded-md bg-accent px-5 py-2.5 font-semibold text-on-accent hover:opacity-90"
        >
          Email me
        </a>
        <a href={gmail} target="_blank" rel="noopener noreferrer" className={secondary}>
          Compose in Gmail<span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a href={outlook} target="_blank" rel="noopener noreferrer" className={secondary}>
          Compose in Outlook<span className="sr-only"> (opens in a new tab)</span>
        </a>
        <CopyEmail email={site.email} />
      </div>
      <ul className="mt-10 flex flex-wrap gap-6">
        <li>
          <a href={site.linkedin} className="font-semibold text-accent underline underline-offset-4">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={site.github} className="font-semibold text-accent underline underline-offset-4">
            GitHub
          </a>
        </li>
      </ul>
    </Section>
  );
}

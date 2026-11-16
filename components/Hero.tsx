import { intro, site } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="py-20 sm:py-28">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
        {site.title} · {site.location}
      </p>
      <h1 id="hero-heading" className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
        {intro.headline}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{intro.summary}</p>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{intro.now}</p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#contact"
          className="rounded-md bg-accent px-5 py-3 font-semibold text-on-accent hover:opacity-90"
        >
          Get in touch
        </a>
        <a
          href="#projects"
          className="rounded-md border border-ui px-5 py-3 font-semibold hover:bg-surface"
        >
          See my work
        </a>
      </div>
    </section>
  );
}

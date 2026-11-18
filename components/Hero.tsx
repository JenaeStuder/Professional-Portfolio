import { facts, intro, site } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="pt-16 sm:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="rise font-mono text-sm font-medium text-accent">
            {site.title} · {site.location}
          </p>
          <h1
            id="hero-heading"
            className="rise rise-2 mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl"
          >
            I build scalable <span className="gradient-text">Next.js</span> applications and
            design systems.
          </h1>
          <p className="rise rise-3 mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {intro.summary}
          </p>
          <p className="rise rise-3 mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {intro.personal}
          </p>
          <div className="rise rise-3 mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="btn btn-primary"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="btn btn-outline"
            >
              See my work
            </a>
          </div>
        </div>

        <aside
          aria-label="At a glance"
          className="rise rise-3 relative overflow-hidden rounded-2xl border border-line bg-surface p-6 pt-9 shadow-xl shadow-accent/5"
        >
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-accent to-accent2"
          />
          <dl className="space-y-4 font-mono text-sm">
            {facts.map((f) => (
              <div key={f.term}>
                <dt className="text-accent2">{f.term}</dt>
                <dd className="mt-0.5 text-fg">{f.detail}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      {/* Stats strip, hidden for now. To restore: uncomment this block and add `stats` back to the import above.
      <ul
        aria-label="Highlights"
        className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4"
      >
        {stats.map((s) => (
          <li key={s.label} className="bg-surface p-6">
            <p className="text-4xl font-extrabold tracking-tight text-accent">{s.value}</p>
            <p className="mt-2 text-sm leading-snug text-muted">{s.label}</p>
          </li>
        ))}
      </ul> */}
    </section>
  );
}

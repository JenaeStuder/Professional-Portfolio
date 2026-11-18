export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="py-20">
      <p className="font-mono text-sm font-medium text-accent">{eyebrow}</p>
      <h2
        id={`${id}-heading`}
        className="mb-10 mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

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
    <section id={id} aria-labelledby={`${id}-heading`} className="py-10 sm:py-20">
      <p className="font-mono text-sm font-medium text-accent">{eyebrow}</p>
      <h2
        id={`${id}-heading`}
        className="mb-5 mt-2 text-[1.6875rem] font-bold tracking-tight sm:mb-10 sm:text-4xl"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

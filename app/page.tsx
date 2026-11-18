import { site } from "@/lib/content";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProfessionalWork } from "@/components/ProfessionalWork";
import { Personal } from "@/components/Personal";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

// Structured data so search engines and AI tools can read who this site is about.
const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  url: site.url,
  sameAs: [site.github, site.linkedin],
  knowsAbout: ["Next.js", "React", "TypeScript", "Design systems", "Web accessibility"],
};

export default function Home() {
  return (
    <div className="relative">
      <script
        type="application/ld+json"
        // "<" is escaped so the JSON can never close the script tag early.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
      />
      {/* Decorative spotlights, fixed to the viewport so they stay behind every section as
          you scroll (and behind the header). inset-0 means they can never overflow the screen. */}
      <div aria-hidden="true" className="glow pointer-events-none fixed inset-0 -z-10" />
      <Header />
      <main id="main" className="mx-auto max-w-6xl px-6">
        <Hero />
        <Experience />
        <Projects />
        <ProfessionalWork />
        <Skills />
        <Personal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

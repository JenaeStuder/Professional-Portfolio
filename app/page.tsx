import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProfessionalWork } from "@/components/ProfessionalWork";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <div className="relative">
      {/* Full-width decorative glow; inset-x-0 means it can never overflow the viewport. */}
      <div
        aria-hidden="true"
        className="glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-[44rem]"
      />
      <Header />
      <main id="main" className="mx-auto max-w-6xl px-6">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <ProfessionalWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

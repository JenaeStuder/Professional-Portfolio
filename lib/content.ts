import { yearsOfExperience } from "./experience";

// All site copy lives here so it can be edited without touching components.
// Source: Frontend Engineer resume (Nov 2026).

// Computed when the site is built (see lib/experience.ts and the scheduled rebuild in deploy.yml).
const years = yearsOfExperience();

export const site = {
  name: "Jenae Studer-Hart",
  title: "Senior Frontend Developer",
  url: "https://jenaestuder.com",
  // Non-breaking spaces keep "Gilbert, AZ" (and the dot after it) together when the line wraps.
  location: "Gilbert,\u00A0AZ\u00A0· open to remote",
  github: "https://github.com/JenaeStuder",
  linkedin: "https://www.linkedin.com/in/jenae-studer-a8a7029a/",
  description: `Senior frontend developer with ${years} years of experience building scalable React, Next.js and TypeScript applications and design systems.`,
};

export const intro = {
  summary: `Senior frontend developer with ${years} years of experience in React, Next.js and TypeScript, building accessible interfaces and the reusable components behind them.`,
  personal:
    "When I'm not keeping up with a field that reinvents itself every year, I can be found reading, catching a musical or a concert, drinking coffee, playing cozy video games, coloring with alcohol markers, or experimenting with cocktail recipes.",
};

type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "CSS"],
  },
  {
    label: "Frameworks & UI",
    items: [
      "React",
      "Next.js",
      "Astro",
      "Node.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "React Hook Form",
    ],
  },
  {
    label: "Accessibility & quality",
    items: ["WCAG 2.2", "ARIA", "axe DevTools", "Lighthouse", "WAVE"],
  },
  {
    label: "Tooling & infrastructure",
    items: ["Claude Code", "GitHub Actions", "AWS (CDK, S3)"],
  },
  {
    label: "Practices",
    items: ["Design systems", "Core Web Vitals"],
  },
];

export const bookRecommenderUrl = "https://jenaestuder.github.io/recommendations-nextjs/";

// Selected projects: only work with public code, so every card links to GitHub.
// Shown as large type at the top of the Skills section, and left out of the
// category lists below so nothing appears twice. Each must match a skill item exactly.
export const coreSkills = ["TypeScript", "React", "Next.js", "Tailwind CSS"];

type Project = {
  title: string;
  summary: string;
  tags: string[];
  links: { href: string; label: string }[];
};

export const projects: Project[] = [
  {
    title: "Your next TBR",
    summary:
      "An interaction-rich app that I built to help me find new books to read. It asks a few questions about your taste, then turns Open Library data into personalized picks you can swipe through, save to shelves and share by URL. Runs entirely in the browser with no backend, with accessible keyboard and reduced-motion support.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Motion",
      "Vitest",
    ],
    links: [
      {
        href: bookRecommenderUrl,
        label: "Live site",
      },
      {
        href: "https://github.com/JenaeStuder/recommendations-nextjs",
        label: "Source on GitHub",
      },
    ],
  },
  {
    title: "This portfolio",
    summary:
      "A statically exported Next.js site with Tailwind CSS, built to meet WCAG AAA contrast and keyboard requirements, rebuilt from my original 2019 Create React App.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    links: [
      {
        href: "https://github.com/JenaeStuder/Professional-Portfolio",
        label: "Source on GitHub",
      },
    ],
  },
];

// Professional work: real, shipped, but proprietary, so described rather than linked.
type WorkItem = {
  title: string;
  summary: string;
  tags: string[];
};

export const professionalWork: WorkItem[] = [
  {
    title: "Accessibility program",
    summary:
      "Built the audit workflow and remediation standards (ARIA, focus order, color contrast) that took production sites from no formal accessibility process to WCAG 2.2 AA, with AAA criteria met where required.",
    tags: ["WCAG 2.2", "ARIA", "axe", "Lighthouse"],
  },
  {
    title: "Reusable design system",
    summary:
      "A component library on shadcn/ui and Tailwind, customized and extended with new components designed for reuse across many sites.",
    tags: ["shadcn/ui", "Tailwind CSS", "React", "TypeScript"],
  },
  {
    title: "Shared component libraries",
    summary:
      "Designed, led and contributed to component libraries shared across three platforms, so a component is built once, documented once and reused everywhere instead of being rebuilt for each site.",
    tags: ["React", "Component architecture", "Design systems"],
  },
];

export const facts = [
  { term: "Now", detail: "Senior frontend developer" },
  { term: "Focus", detail: "Next.js, design systems, accessibility" },
  { term: "Exploring", detail: "AI-assisted development with Claude Code" },
];

// The experience section is a short narrative, not a resume. Employer names are
// deliberately left off the site; the downloadable resume carries those details.
export const story = {
  lead: "The constant through all of it: shipping on time, within scope, and accessible to everyone.",
  sections: [
    {
      title: "Next.js applications, from design to production",
      body: "I build and ship Next.js, React and TypeScript sites, using the App Router, Server Components and SSR/SSG, and carry every feature from Figma to production through GitHub Actions CI/CD. I helped plan the migration from a legacy in-house framework to Next.js and Astro, then evaluated Astro for future products and documented how the team should adopt it. Performance and technical SEO are built in from the start.",
    },
    {
      title: "Component libraries that scale",
      body: "I build components once and reuse them everywhere. That includes a design system on shadcn/ui and Tailwind, and I've designed, led and contributed to component libraries shared across three platforms. I've also led a full rewrite of a product's codebase around reusable, component-based architecture, so builds stay consistent as the number of sites and developers grows.",
    },
    {
      title: "Team leadership",
      body: "I grew a team from four developers to eight, handling the hiring, training, code reviews and documentation and setting the code standards. I stayed close to design, QA and back-end engineers so delivery stayed on schedule and within scope. These days I'm helping my team adopt AI-assisted development responsibly.",
    },
    {
      title: "Accessibility as a standard",
      body: "Accessibility is part of how I build, not a late-stage fix. I led the move from no formal accessibility process to WCAG 2.2 AA conformance across production sites, meeting AAA criteria where required, with an audit workflow built on axe, Lighthouse, WAVE and manual keyboard testing, and remediation standards agreed with design, UX and QA.",
    },
  ],
};

// Path inside /public. If the file is missing the download buttons simply don't render,
// so a broken link can never ship.
export const resumeFile = "pdf/Jenae-Studer-Hart-Resume-Web.pdf";

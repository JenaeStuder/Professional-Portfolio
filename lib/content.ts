// All site copy lives here so it can be edited without touching components.
// Source: Frontend Engineer resume (Nov 2026).

export const site = {
  name: "Jenae Studer-Hart",
  title: "Frontend Engineer",
  url: "https://jenaestuder.com",
  location: "Gilbert, AZ · open to remote",
  email: "jenaestuder11518@gmail.com",
  github: "https://github.com/JenaeStuder",
  linkedin: "https://www.linkedin.com/in/jenae-studer-a8a7029a/",
  description:
    "Frontend engineer with 7 years of experience building accessible, responsive web applications in React, Next.js and TypeScript.",
};

export const intro = {
  headline: "I build accessible, responsive web applications.",
  summary:
    "Frontend engineer with 7 years of experience in React, Next.js and TypeScript, mostly for global pharmaceutical brands. I led our move from no formal accessibility process to WCAG 2.2 AAA conformance, built design systems and component libraries across several platforms, and have grown and led a team of developers.",
  now: "Right now I'm helping my Agile team adopt AI-assisted development with Claude Code.",
};

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Semantic HTML", "CSS", "Sass"],
  },
  {
    label: "Frameworks & UI",
    items: [
      "React",
      "Next.js (App Router, RSC, SSR/SSG)",
      "Astro",
      "Node.js",
      "Tailwind CSS",
      "shadcn/ui",
      "GSAP",
      "Framer Motion",
      "React Hook Form",
    ],
  },
  {
    label: "Accessibility & quality",
    items: [
      "WCAG 2.2 AAA",
      "ARIA",
      "axe DevTools",
      "Lighthouse",
      "WAVE",
      "Keyboard testing",
      "Cross-browser testing",
    ],
  },
  {
    label: "Tooling & infrastructure",
    items: [
      "Git & GitHub",
      "GitHub Actions",
      "Docker",
      "Vite",
      "AWS (CDK, S3)",
      "REST APIs",
      "GA4 & GTM",
      "Claude Code",
    ],
  },
  {
    label: "Practices",
    items: [
      "Design systems",
      "Responsive design",
      "Core Web Vitals",
      "Technical SEO",
      "Code review",
      "Agile",
    ],
  },
  {
    label: "CMS & platforms",
    items: ["Drupal (Site Studio, Twig)", "AEM", "WordPress"],
  },
];

export type Project = {
  title: string;
  summary: string;
  tags: string[];
  links?: { href: string; label: string }[];
};

export const projects: Project[] = [
  {
    title: "Book recommender",
    summary:
      "An interaction-rich app that asks a few questions about your taste, then turns Open Library data into personalized picks you can swipe through, save to shelves and share by URL. Runs entirely in the browser with no backend, with accessible keyboard and reduced-motion support.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "TanStack Query", "Zustand", "Motion", "Vitest"],
    links: [
      {
        href: "https://jenaestuder.github.io/recommendations-nextjs/",
        label: "Live site",
      },
      {
        href: "https://github.com/JenaeStuder/recommendations-nextjs",
        label: "Source on GitHub",
      },
    ],
  },
  {
    title: "WCAG 2.2 AAA accessibility program",
    summary:
      "Took pharmaceutical client sites from no formal accessibility process to WCAG 2.2 AAA conformance. Built the team's audit workflow and set remediation standards for ARIA, focus order and color contrast with design and UX.",
    tags: ["WCAG 2.2", "ARIA", "axe", "Lighthouse"],
  },
  {
    title: "Reusable design system",
    summary:
      "A component library on shadcn/ui and Tailwind, customized and extended with new components designed for reuse across client sites.",
    tags: ["shadcn/ui", "Tailwind CSS", "React", "TypeScript"],
  },
  {
    title: "Cross-platform component libraries",
    summary:
      "Architected global libraries across three platforms: React components embedded in Drupal, Drupal Site Studio / Twig, and an AEM library for email development.",
    tags: ["React", "Drupal", "AEM", "Twig"],
  },
  {
    title: "Email platform rewrite",
    summary:
      "Led a full rewrite of a product's codebase, replacing hand-coded tables with a component-based MJML + AEM system, and grew the team from 4 to 8 developers along the way.",
    tags: ["MJML", "AEM", "Node.js", "TypeScript"],
  },
  {
    title: "Motion and conference kiosks",
    summary:
      "Interactive effects with GSAP and Framer Motion, including SVG displacement-map animations, plus large-format touchscreen kiosk applications for international medical conferences.",
    tags: ["GSAP", "Framer Motion", "SVG"],
  },
  {
    title: "This portfolio",
    summary:
      "Rebuilt from a 2019 Create React App as a statically exported Next.js site with Tailwind CSS, built to meet WCAG AAA contrast and keyboard requirements.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    links: [
      {
        href: "https://github.com/JenaeStuder/Professional-Portfolio",
        label: "Source on GitHub",
      },
    ],
  },
];

export const experience = [
  {
    role: "Frontend Web Developer (Lead)",
    org: "Inizio Evoke (formerly meltmedia)",
    dates: "2019 – Present",
    note: "Intern → Email developer → Email team tech lead → Web developer → Lead developer",
  },
];

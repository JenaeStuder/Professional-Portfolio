// All site copy lives here so it can be edited without touching components.
// Source: Frontend Engineer resume (Nov 2026).

export const site = {
  name: "Jenae Studer-Hart",
  title: "Senior Frontend Developer",
  url: "https://jenaestuder.com",
  location: "Gilbert, AZ · open to remote",
  github: "https://github.com/JenaeStuder",
  linkedin: "https://www.linkedin.com/in/jenae-studer-a8a7029a/",
  description:
    "Senior frontend developer with 7 years of experience building scalable React, Next.js and TypeScript applications and design systems.",
};

export const intro = {
  headline: "I build scalable Next.js applications and design systems.",
  summary:
    "Senior frontend developer specializing in Next.js, with 7 years of experience building React and TypeScript applications. I architect component libraries and design systems across platforms, lead a team of developers, and drove our move to WCAG 2.2 AAA accessibility.",
  personal:
    "When I'm not keeping up with a field that reinvents itself every year, I can be found reading, catching a musical or a concert, or experimenting with new coffee drinks or cocktails.",
  now: "Right now I'm helping my Agile team adopt AI-assisted development with Claude Code.",
};

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Semantic HTML", "CSS"],
  },
  {
    label: "Frameworks & UI",
    items: [
      "React",
      "Next.js",
      "Next.js App Router, SSR & SSG",
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
      "AWS (CDK, S3)",
      "Claude Code",
    ],
  },
  {
    label: "Practices",
    items: [
      "Design systems",
      "Responsive design",
      "Core Web Vitals",
      "Code review",
    ],
  },
];

// Selected projects: only work with public code, so every card links to GitHub.
// Shown as large type at the top of the Skills section, and left out of the
// category lists below so nothing appears twice. Each must match a skill item exactly.
export const coreSkills = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
];

export type Project = {
  title: string;
  summary: string;
  tags: string[];
  links: { href: string; label: string }[];
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

// Professional work: real, shipped, but proprietary, so described rather than linked.
export type WorkItem = {
  title: string;
  summary: string;
  tags: string[];
};

export const professionalWork: WorkItem[] = [
  {
    title: "WCAG 2.2 AAA accessibility program",
    summary:
      "Took production sites from no formal accessibility process to WCAG 2.2 AAA conformance. Built the team's audit workflow and set remediation standards for ARIA, focus order and color contrast with design and UX.",
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
      "Architected component libraries shared across three platforms, so a component is built once, documented once and reused everywhere instead of being rebuilt for each site.",
    tags: ["React", "Component architecture", "Design systems"],
  },
];


export const stats = [
  { value: "7", label: "years building accessible web apps" },
  { value: "AAA", label: "WCAG 2.2 conformance I drove across production sites" },
  { value: "4 → 8", label: "developers on the team I grew and led" },
  { value: "3", label: "platforms running my component libraries" },
];

export const facts = [
  { term: "Now", detail: "Frontend developer" },
  { term: "Focus", detail: "Next.js architecture, design systems, accessibility" },
  { term: "Stack", detail: "TypeScript · React · Tailwind CSS" },
  { term: "Exploring", detail: "AI-assisted development with Claude Code" },
];

// The experience section is a short narrative, not a resume. Employer names are
// deliberately left off the site; the downloadable resume carries those details.
export const story = {
  lead: "I'm a lead developer who builds Next.js applications, the component libraries underneath them, and the teams that ship them: on time, within scope, and accessible to everyone.",
  sections: [
    {
      title: "Next.js applications, from design to production",
      body: "I'm the lead developer on Next.js, React and TypeScript sites, using the App Router, Server Components and SSR/SSG, and owning architecture, state management and accessible forms with React Hook Form. I take work from Figma to production through GitHub Actions CI/CD, and I helped plan our migration off a legacy in-house framework to Next.js and Astro so new work starts on a modern foundation. I optimize for Core Web Vitals and build in technical SEO and analytics from the start.",
    },
    {
      title: "Component libraries that scale",
      body: "I build components once and reuse them everywhere. That includes a design system on shadcn/ui and Tailwind, and component libraries I architected to be shared across three platforms. I've also led a full rewrite of a product's codebase around reusable, component-based architecture, so builds stay consistent as the number of sites and developers grows.",
    },
    {
      title: "Leading developers",
      body: "I've grown a team from four developers to eight, hiring, training and managing them, setting code standards and running code reviews. I write the documentation and train developers on CI/CD deploys, Git workflows and component development, and I stay close to design, QA and back-end engineers so delivery stays on schedule and within scope. I'm also working with my team to adopt AI-assisted development responsibly.",
    },
    {
      title: "Accessibility as a standard",
      body: "Accessibility is part of how I build, not a late-stage fix. I led our move from no formal accessibility process to WCAG 2.2 AAA conformance, with an audit workflow built on axe, Lighthouse, WAVE and manual keyboard testing, and remediation standards agreed with design, UX and QA.",
    },
  ],
};

// Path inside /public. If the file is missing the download buttons simply don't render,
// so a broken link can never ship.
export const resumeFile = "pdf/Jenae-Studer-Hart-Resume-Web.pdf";

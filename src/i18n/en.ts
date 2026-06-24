export const en = {
  nav: {
    about: "About",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
  },
  hero: {
    name: "Alexander Laicovsky",
    location: "Uruguay · Open to Remote",
    title: "Full Stack Developer",
    stack: ["React", "Python", "Node.js", "PHP", "C#"],
    cta_work: "View my work",
    cta_cv: "Download CV",
  },
  about: {
    label: "01 · About",
    text: `I'm a full-stack developer from Uruguay who ships production systems across fintech, publishing,\nand AI — always as a contractor who moves fast and builds with care. I write clean code, communicate\nclearly, and treat every product I touch as if it's my own. Open to remote opportunities where the\nwork is interesting and the team is small and serious.`,
  },
projects: {
  label: "02 · Projects",
  knowMore: "Know more",
  items: [
    {
      name: "Iriscope",
      role: "Contractor",
      stack: ["React", "Node.js"],
      tag: "Full-stack · Data Integration",
      description:
        "Internal dashboard an advertising client's team uses daily. The hard part was turning several mismatched data sources into one view they could actually trust in real time.",
      more: "Data comes from multiple platform APIs and Google Drive, each with its own schema and OAuth token lifecycle to keep alive. I normalised it in a Node.js backend and made the daily cron idempotent, so a failed run can retry without duplicating records — the difference between a dashboard the team trusts and one they quietly stop using.",
    },
    {
      name: "Filmly",
      role: "Academic Project",
      stack: ["C#", "React Native", "OpenAI"],
      tag: "AI · Mobile",
      description:
        "AI movie recommendation app. I built the recommendation engine and the cross-platform mobile app, using OpenAI to turn a few swipes into suggestions that actually fit each user's taste.",
      more: "I chose a C# backend for the recommendation logic — based on the user's history, it builds a prompt for the OpenAI API. The React Native app uses a tinder-style swipe to capture taste signals fast, then sends them to the engine, with one consistent experience across iOS and Android — the process runs in parallel, so the user never stops swiping and receiving new recommendations.",
    },
    {
       name: "Static Websites",
        role: "Independent Contractor",
        stack: ["Astro.js", "Tailwind CSS"],
        tag: "Web · Performance",
        description:
          "Fast, maintainable static web presence for international clients. Built with Astro.js (like this portfolio).",
    },
  ],
},
  experience: {
    label: "03 · Experience",
    items: [
      {
        company: "ECOM Center",
        title: "Systems Analyst",
        period: "2025 — Present",
        current: true,
        description:
          "Designing and building cloud-based microservices for international clients. In Python with FastAPI and React.js, I've contributed to biometric data validation systems, third-party API integrations, and data processing pipelines.",
        stack: ["Python", "FastAPI", "React.js", "Microservices", "REST APIs"],
      },
      {
        company: "Credifama",
        title: "Fullstack Developer",
        period: "2024 — 2025",
        current: false,
        description:
          "Built large-scale PHP automations that significantly cut manual workload and accelerated administrative workflows for the internal team. Turned hours of repetitive work into reliable automated pipelines. I also designed and implemented the app's first paid feature, a premium option for users who want deeper insight into their credit profile.",
        stack: ["PHP", "MySQL", "JavaScript", "Process Automation"],
      },
    ],
  },
  skills: {
    label: "04 · Skills",
    groups: [
      { category: "Frontend", items: ["React.js", "React Native", "Astro.js", "Tailwind CSS", "Figma"] },
      { category: "Backend", items: ["Python", "Node.js", "PHP", "C#"] },
      { category: "Infrastructure", items: ["AWS", "Vercel", "Docker", "Railway"] },
      { category: "Database", items: ["MySQL", "PostgreSQL"] },
    ],
  },
  contact: {
    label: "05 · Contact",
    heading_1: "Let's build",
    heading_2: "something good.",
    note: "Available for remote roles worldwide.\nBest reach: email.",
    email_label: "Email",
    linkedin_label: "LinkedIn",
    github_label: "GitHub",
  },
  footer: {
    copy: "Built with Astro · Deployed on Vercel",
    back_top: "↑ Back to top",
  },
  file: "/cv_en_alexander.pdf",
} as const;

export type Translations = typeof en;

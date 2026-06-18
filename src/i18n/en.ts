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
    items: [
      {
        name: "Static Website",
        role: "ECOM Center",
        stack: ["Astro.js"],
        tag: "Web · Performance",
        description:
          "Delivered a fast, maintainable static web presence for an international client. Shipped on time, optimised for load performance, and built to be handed off cleanly.",
        more: "Built with Astro.js, leveraging its static site generation capabilities to create a performant and SEO-friendly website. The project involved designing a clean architecture that allows for easy content updates and scalability as the client's needs grow.",
      },
      {
        name: "Iriscope Dashboard",
        role: "Contractor",
        stack: ["React", "Node.js"],
        tag: "Internal Tools",
        description:
          "Internal dashboard for a publishing client's editorial workflow. Designed the data architecture and built the interactive UI that their team uses daily to manage operations.",
        more: "Data is pulled from multiple platform APIs and Google Drive — authenticated via OAuth — processed in a Node.js backend in a daily cron job, and surfaced through a React frontend. The result is a real-time dashboard with clear visualizations that the editorial team relies on daily to manage their publishing workflow.",
      },
      {
        name: "Filmly",
        role: "Academic Project",
        stack: ["C#", "React Native", "OpenAI"],
        tag: "AI · Mobile",
        description:
          "AI-powered movie recommendation app. Built the recommendation engine and cross-platform mobile interface, integrating OpenAI to surface personalised suggestions at scale.",
        more: "The app leverages OpenAI's language model to analyze user preferences and viewing history, using a tinder-style interface to generate highly personalised movie recommendations. The cross-platform mobile interface ensures a consistent user experience across both iOS and Android devices.",
      },
    ],
  }, 
  experience: {
    label: "03 · Experience",
    badge_now: "Now",
    items: [
      {
        company: "ECOM Center",
        title: "Systems Analyst",
        period: "2025 — Present",
        current: true,
        description:
          "Designing and building cloud-based microservices for international clients. I own the full delivery lifecycle — from architecture to deployment — working in Python FastAPI and React.js across multiple concurrent projects.",
        stack: ["Python", "FastAPI", "React.js", "Microservices", "REST APIs"],
      },
      {
        company: "Credifama",
        title: "Fullstack Developer",
        period: "2024 — 2025",
        current: false,
        description:
          "Built large-scale PHP automations that significantly cut manual workload and accelerated administrative workflows for the company's internal teams. Turned hours of daily repetitive work into reliable automated pipelines.",
        stack: ["PHP", "MySQL", "Process Automation"],
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

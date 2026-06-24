import type { Translations } from './en';

export const es: Translations = {
  nav: {
    about: "Sobre mí",
    projects: "Proyectos",
    experience: "Experiencia",
    contact: "Contacto",
  },
  hero: {
    name: "Alexander Laicovsky",
    location: "Uruguay · Disponible Remoto",
    title: "Desarrollador Full Stack",
    stack: ["React", "Python", "Node.js", "PHP", "C#"],
    cta_work: "Ver mis proyectos",
    cta_cv: "Descargar CV",
  },
  about: {
    label: "01 · Sobre mí",
    text: `Soy un desarrollador full stack de Uruguay que entrega sistemas de producción confiables, apasionado por generar features end-to-end.  
    Avanzo rápido y construyo con cuidado. Me comunico con claridad y considero el buen trabajo en equipo tan importante como la proactividad y autonomia que requiere trabajar solo. 
    Disponible para oportunidades híbridas en Montevideo y remotas en todo el mundo, donde el trabajo es interesante y el equipo es amigable y serio.`,
  },
  projects: {
    label: "02 · Proyectos",
    knowMore: "Saber más",
    items: [
      {
        name: "Iriscope",
        role: "Contratista Independiente",
        stack: ["React", "Node.js"],
        tag: "Full-stack · Integración de Datos",
        description:
          "Dashboard interno que el equipo de un cliente publicitario usa a diario. La parte difícil fue convertir varias fuentes de datos dispares en una única vista en la que realmente pudieran confiar en tiempo real.",
        more: "Los datos vienen de múltiples APIs de plataformas y Google Drive, cada una con su propio esquema y ciclo de vida de tokens OAuth que mantener activo. Los normalicé en un backend de Node.js e hice el cron diario idempotente, para que una ejecución fallida pueda reintentarse sin duplicar registros, la diferencia entre un dashboard en el que el equipo confía y uno que terminan dejando de usar.",
      },
      {
        name: "Filmly",
        role: "Proyecto académico",
        stack: ["C#", "React Native", "OpenAI"],
        tag: "IA · Mobile",
        description:
          "App de recomendación de películas con IA. Construí el motor de recomendaciones y la app móvil multiplataforma, usando OpenAI para convertir unos pocos swipes en sugerencias que realmente se ajustan al gusto de cada usuario.",
        more: "Elegí un backend en C# para la lógica de recomendaciones, basado en el historial del usuario, se buildea un prompt a la API de OpenAI. La app en React Native usa un swipe estilo Tinder para capturar señales de gusto rápidamente y luego las envía al motor, con una experiencia consistente en iOS y Android, el proceso funciona en paralelo por lo que el usuario nunca deja de swipear y recibir nuevas recomendaciones.",
      },
      {
        name: "Webs Estáticas",
        role: "Contratista Independiente",
        stack: ["Astro.js", "Tailwind CSS"],
        tag: "Web · Performance",
        description:
          "Presencia web estática rápida y mantenible para clientes internacionales. Construido con Astro.js (como este portfolio).",
      },
    ],
  },
  experience: {
    label: "03 · Experiencia",
    items: [
      {
        company: "ECOM Center",
        title: "Analista de Sistemas",
        period: "2025 — Presente",
        current: true,
        description:
          "Diseño y construyo microservicios en la nube para clientes internacionales. En Python con FastAPI y React.js, he constribuido en sistemas de validación de datos biomètricos, integraciones con APIs de terceros y pipelines de procesamiento de datos. ",
        stack: ["Python", "FastAPI", "React.js", "Microservicios", "REST APIs"],
      },
      {
        company: "Credifama",
        title: "Desarrollador Fullstack",
        period: "2024 — 2025",
        current: false,
        description:
          "Construí automatizaciones PHP a gran escala que redujeron significativamente la carga manual y aceleraron los flujos administrativos del equipo interno. Convertí horas de trabajo repetitivo en pipelines automatizados y confiables. A su vez diseñé e implementé la primer funcionalidad paga de la app, una opción premium para aquellos usuarios que requieran mayor conocimiento sobre su perfil crediticio.",
        stack: ["PHP", "MySQL", "JavaScript", "Automatización de Procesos"],
      },
    ],
  },
  skills: {
    label: "04 · Habilidades",
    groups: [
      { category: "Frontend", items: ["React.js", "React Native", "Astro.js", "Tailwind CSS", "Figma"] },
      { category: "Backend", items: ["Python", "Node.js", "PHP", "C#"] },
      { category: "Infrastructure", items: ["AWS", "Vercel", "Docker", "Railway"] },
      { category: "Database", items: ["MySQL", "PostgreSQL"] },
    ],
  },
  contact: {
    label: "05 · Contacto",
    heading_1: "Construyamos",
    heading_2: "juntos.",
    note: "Mejor contacto: email.",
    email_label: "Email",
    linkedin_label: "LinkedIn",
    github_label: "GitHub",
  },
  footer: {
    copy: "Construido con Astro · Desplegado en Railway",
    back_top: "↑ Volver arriba",
  },
  file: "cv_alexander_laicovsky.pdf",
};

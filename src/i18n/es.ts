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
    text: `Soy un desarrollador full stack de Uruguay que entrega sistemas de producción en fintech, publishing e IA.  
    Avanzo rápido y construyo con cuidado. Me comunico con claridad y considero el buen trabajo en equipo tan importante como la proactividad y autonomia que requiere trabajar solo. 
    Disponible para oportunidades remotas donde el trabajo es interesante y el equipo es serio.`,
  },
  projects: {
    label: "02 · Proyectos",
    items: [
      {
        name: "Sitio Estático",
        role: "Ecom Center",
        stack: ["Astro.js"],
        tag: "Web · Rendimiento",
        description:
          "Entregué una presencia web estática rápida y mantenible para un cliente internacional. Entregado a tiempo, optimizado para rendimiento y construido para una transición limpia.",
        more: "Construido con Astro.js, aprovechando sus capacidades de generación de sitios estáticos para crear un sitio web de alto rendimiento y optimizado para SEO. El proyecto involucró diseñar una arquitectura limpia que permite actualizaciones de contenido fáciles y escalabilidad a medida que crecen las necesidades del cliente.",
      },
      {
        name: "Dashboard Iriscope",
        role: "Contratista Independiente",
        stack: ["React", "Node.js"],
        tag: "Herramientas Internas",
        description:
          "Dashboard interno para el flujo editorial de un cliente de publicación. Diseñé la arquitectura de datos y construí la UI interactiva que su equipo usa diariamente para gestionar operaciones.",
        more: "Los datos se extraen tanto de las APIs de plataformas como de archivos de Drive sincronizados con Google OAuth en cron diario, se procesan en un backend de Node.js y se muestran en un frontend de React. El dashboard cuenta con actualizaciones en tiempo real, visualizaciones de datos intuitivas y una interfaz fácil de usar que ha mejorado significativamente la eficiencia del flujo editorial del cliente.",
      },
      {
        name: "Filmly",
        role: "Proyecto académico",
        stack: ["C#", "React Native", "OpenAI"],
        tag: "IA · Mobile",
        description:
          "App de recomendación de películas con IA. Construí el motor de recomendaciones y la interfaz móvil multiplataforma, integrando OpenAI para sugerencias personalizadas a escala.",
        more: "La app aprovecha el modelo de lenguaje de OpenAI para analizar las preferencias del usuario e historial de visualización, utilizando una interfaz estilo Tinder para generar recomendaciones de películas altamente personalizadas. La interfaz móvil multiplataforma garantiza una experiencia de usuario consistente tanto en dispositivos iOS como Android.",
      },
    ],
  },
  experience: {
    label: "03 · Experiencia",
    badge_now: "Ahora",
    items: [
      {
        company: "ECOM Center",
        title: "Analista de Sistemas",
        period: "2025 — Presente",
        current: true,
        description:
          "Diseño y construyo microservicios en la nube para clientes internacionales. Gestiono el ciclo completo de entrega — desde la arquitectura hasta el despliegue — en Python FastAPI y React.js.",
        stack: ["Python", "FastAPI", "React.js", "Microservicios", "REST APIs"],
      },
      {
        company: "Credifama",
        title: "Desarrollador Fullstack",
        period: "2024 — 2025",
        current: false,
        description:
          "Construí automatizaciones PHP a gran escala que redujeron significativamente la carga manual y aceleraron los flujos administrativos del equipo interno. Convertí horas de trabajo repetitivo en pipelines automatizados y confiables.",
        stack: ["PHP", "MySQL", "Automatización de Procesos"],
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
    heading_2: "algo bueno.",
    note: "Disponible para roles remotos en todo el mundo.\nMejor contacto: email.",
    email_label: "Email",
    linkedin_label: "LinkedIn",
    github_label: "GitHub",
  },
  footer: {
    copy: "Construido con Astro · Desplegado en Vercel",
    back_top: "↑ Volver arriba",
  },
  file: "/cv_es_alexander.pdf",
};

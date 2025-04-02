import type { SectionProps } from "../components/Section.astro";

export type Home = {
  layout: {
    title: string;
    description: string;
  };
  hero: SectionProps;
  services: SectionProps;
  technologies: SectionProps;
  aidd: SectionProps;
};

export const HOME: Home = {
  layout: {
    title: "Alberto Basalo",
    description:
      "La programación evoluciona como nunca. Ayudo a empresas y profesionales a estar al día	.",
  },
  hero: {
    title: "Alberto Basalo",
    subtitle: "Consultoría y formación para programadores profesionales.",
    cards: [],
    cta: {
      text: "Contacta con Alberto Basalo",
      link: "https://www.linkedin.com/in/albertobasalo/",
    },
  },
  services: {
    title: "¿En qué te puedo ayudar?",
    subtitle: "Servicios para empresas, departamentos IT, academias y profesionales",
    cards: [
      {
        title: "Consultoría",
        description:
          "Arquitectura de software, migraciones, refactoring, buenas prácticas, testing e IA.",
      },
      {
        title: "Formación",
        description:
          "Cursos a medida, formación en directo, o en video. Bonificada para empresas.",
      },
    ],
    cta: {
      text: "Conecta con mi perfil de LinkedIn",
      link: "https://www.linkedin.com/in/albertobasalo/",
    },
  },
  technologies: {
    title: "Tecnologías que utilizo",
    subtitle: "Puedo ayudarte o formar a tu equipo en las tecnologías que te interesen.",
    cards: [
      {
        title: "Angular",
        description: "Migraciones, gestión de estado, micro frontends, testing, etc.",
      },
      {
        title: "Express",
        description: "APIS, rendimiento, seguridad, alternativas a express y a Node.js",
      },
      {
        title: "Cypress",
        description: "Si aún no haces pruebas, empieza por aquí. Fácil y agradable, sin excusas.",
      },
      {
        title: "Playwright",
        description: "Rapidez y versatilidad, muy integrable con herramientas de IA",
      },
    ],
    cta: {
      text: "Conecta con mi perfil de LinkedIn",
      link: "https://www.linkedin.com/in/albertobasalo/",
    },
  },
  aidd: {
    title: "AI-Driven Development",
    subtitle: "Aplica los principios AI-DD para desarrollar profesionalmente con IA",
    cards: [
      {
        title: "Human in the Loop",
        description: "El humano es estratega, colaborador y responsable.",
      },
      {
        title: "Rules over Tools",
        description: "Las herramientas se someten a metodologías de desarrollo.",
      },
      {
        title: "A.I. Quality code",
        description: "El desarrollo es productivo, mantenible y de calidad..",
      }
    ],
    cta: {
      text: "Conecta con mi perfil de LinkedIn",
      link: "https://www.linkedin.com/in/albertobasalo/",
    },
  },
};

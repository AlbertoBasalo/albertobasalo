import type { SectionProps } from "../components/Section.astro";

export type Home = {
  layout: {
    title: string;
    description: string;
  };
  hero: SectionProps;
  projects: SectionProps;
};

export const HOME: Home = {
  layout: {
    title: "Alberto Basalo",
    description:
      "La programación evoluciona como nunca. Ayudo a empresas y profesionales a estar al día	.",
  },
  hero: {
    title: "Alberto Basalo",
    subtitle: "Consultoría y formación para programadores profesionales",
    cards: [],
    cta: {
      text: "Contacta con Alberto Basalo",
      link: "https://www.linkedin.com/in/albertobasalo/",
    },
  },
  projects: {
    title: "¿En qué te puedo ayudar?",
    subtitle: "Proyectos de Alberto Basalo",
    cards: [
      {
        title: "Consultoría",
        description:
          "Arquitectura de software, migración Angular, implantación IA",
      },
      {
        title: "Formación",
        description:
          "Cursos de código limpio, testing, Angular y desarrollo con Inteligencia Artificial",
      },
    ],
    cta: {
      text: "Conecta con mi perfil de LinkedIn",
      link: "https://www.linkedin.com/in/albertobasalo/",
    },
  },
};

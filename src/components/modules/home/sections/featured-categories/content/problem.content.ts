import type { ProblemContent } from "../types/problem.types";

export const problemContent = {
  en: {
    eyebrow: "The current situation",

    heading:
      "Many businesses have great potential, but few tools to take advantage of it.",

    summary:
      "The lack of a clear digital presence often leads to slower processes, fewer business opportunities, and an inconsistent experience for customers.",

    consequences: [
      {
        title: "Lower visibility",
        description:
          "Potential customers struggle to find you or understand what you offer.",
      },
      {
        title: "Slower processes",
        description:
          "Manual tasks consume time that could be spent on business growth.",
      },
      {
        title: "Lost opportunities",
        description:
          "Inquiries and prospects are lost due to lack of follow-up or adequate tools.",
      },
    ],
  },

  es: {
    eyebrow: "La situación actual",

    heading:
      "Muchos negocios tienen un gran potencial, pero pocas herramientas para aprovecharlo.",

    summary:
      "La falta de una presencia digital clara suele generar procesos más lentos, menos oportunidades comerciales y una experiencia inconsistente para los clientes.",

    consequences: [
      {
        title: "Menor visibilidad",
        description:
          "Los clientes potenciales tienen dificultades para encontrarte o comprender lo que ofreces.",
      },
      {
        title: "Procesos más lentos",
        description:
          "Las tareas manuales consumen tiempo que podría dedicarse al crecimiento del negocio.",
      },
      {
        title: "Pérdida de oportunidades",
        description:
          "Las consultas y prospectos se pierden por falta de seguimiento o herramientas adecuadas.",
      },
    ],
  },

  pt: {
    eyebrow: "A situação atual",

    heading:
      "Muitos negócios têm grande potencial, mas poucas ferramentas para aproveitá-lo.",

    summary:
      "A falta de uma presença digital clara costuma gerar processos mais lentos, menos oportunidades de negócio e uma experiência inconsistente para os clientes.",

    consequences: [
      {
        title: "Menor visibilidade",
        description:
          "Clientes em potencial têm dificuldade em encontrá-lo ou entender o que você oferece.",
      },
      {
        title: "Processos mais lentos",
        description:
          "Tarefas manuais consomem tempo que poderia ser dedicado ao crescimento do negócio.",
      },
      {
        title: "Perda de oportunidades",
        description:
          "Consultas e prospects são perdidos por falta de acompanhamento ou ferramentas adequadas.",
      },
    ],
  },
} as const satisfies Record<string, ProblemContent>;
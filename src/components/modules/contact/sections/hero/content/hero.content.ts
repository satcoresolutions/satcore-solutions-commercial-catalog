import type { HeroContent } from "../types/hero.types";

export const heroContent = {
  en: {
    badge: "Professional Web Development",

    title: "Your business deserves a digital presence that converts.",

    description:
      "We create optimized landing pages to capture leads, validate ideas, and launch campaigns. Fast, elegant, and results-driven.",

    features: [
      "Fast delivery",
      "Responsive design",
      "Support included",
    ],
  },

  es: {
    badge: "Desarrollo Web Profesional",

    title: "Tu negocio merece una presencia digital que convierta.",

    description:
      "Creamos landing pages optimizadas para captar leads, validar ideas y lanzar campañas. Rápido, elegante y enfocado en resultados.",

    features: [
      "Entrega rápida",
      "Diseño responsive",
      "Soporte incluido",
    ],
  },

  pt: {
    badge: "Desenvolvimento Web Profissional",

    title: "Seu negócio merece uma presença digital que converte.",

    description:
      "Criamos landing pages otimizadas para captar leads, validar ideias e lançar campanhas. Rápido, elegante e focado em resultados.",

    features: [
      "Entrega rápida",
      "Design responsivo",
      "Suporte incluído",
    ],
  },
} as const satisfies Record<string, HeroContent>;
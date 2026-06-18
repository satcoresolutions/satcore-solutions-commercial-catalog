import type {
  ProductData,
} from "@/types/product.types";

export const roseQuartzBracelet: ProductData = {
  id:
    "rose-quartz-bracelet",

  image:
    "/images/products/002/002.png",

  href:
    "/products/rose-quartz-bracelet",

  price:
    "$90.000",

  translations: {
    en: {
      title:
        "Rose Quartz Bracelet",

      category:
        "Natural Stones",

      description:
        "Handcrafted bracelet made with carefully selected rose quartz beads, known for their soft pink tones and elegant appearance.",

      imageAlt:
        "Rose quartz bracelet",
    },

    es: {
      title:
        "Pulsera de Cuarzo Rosa",

      category:
        "Piedras Naturales",

      description:
        "Pulsera confeccionada con cuentas de cuarzo rosa cuidadosamente seleccionadas, reconocidas por sus delicados tonos rosados y su belleza natural.",

      imageAlt:
        "Pulsera de cuarzo rosa",
    },

    pt: {
      title:
        "Pulseira de Quartzo Rosa",

      category:
        "Pedras Naturais",

      description:
        "Pulseira produzida com contas de quartzo rosa cuidadosamente selecionadas, conhecidas por seus delicados tons rosados e sua beleza natural.",

      imageAlt:
        "Pulseira de quartzo rosa",
    },
  },

  features: [
    "Natural Rose Quartz",
    "Handmade",
    "Soft Pink Tones",
    "Elegant Design",
    "Lightweight",
  ],

  specifications: [
    {
      label:
        "Material",

      value:
        "Rose Quartz",
    },

    {
      label:
        "Diameter",

      value:
        "18 cm",
    },

    {
      label:
        "Weight",

      value:
        "28 g",
    },

    {
      label:
        "Origin",

      value:
        "Colombia",
    },
  ],
};
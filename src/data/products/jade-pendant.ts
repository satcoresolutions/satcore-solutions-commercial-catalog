import type {
  ProductData,
} from "@/types/product.types";

export const jadePendant: ProductData = {
  id:
    "jade-pendant",

  image:
    "/images/products/007/007.png",

  href:
    "/products/jade-pendant",

  price:
    "$110.000",

  translations: {
    en: {
      title:
        "Jade Pendant",

      category:
        "Jewelry",

      description:
        "Handcrafted pendant made from natural jade, carefully polished to highlight its unique color and texture while preserving its artisanal character.",

      imageAlt:
        "Natural jade pendant",
    },

    es: {
      title:
        "Dije de Jade",

      category:
        "Joyería",

      description:
        "Dije elaborado con jade natural y acabado artesanal, cuidadosamente pulido para resaltar la belleza, el color y la textura propia de la piedra.",

      imageAlt:
        "Dije de jade natural",
    },

    pt: {
      title:
        "Pingente de Jade",

      category:
        "Joias",

      description:
        "Pingente produzido com jade natural e acabamento artesanal, cuidadosamente polido para destacar a beleza, a cor e a textura características da pedra.",

      imageAlt:
        "Pingente de jade natural",
    },
  },

  features: [
    "Natural Jade",
    "Handmade",
    "Polished Finish",
    "Unique Stone",
    "Elegant Design",
  ],

  specifications: [
    {
      label:
        "Material",

      value:
        "Natural Jade",
    },

    {
      label:
        "Height",

      value:
        "4 cm",
    },

    {
      label:
        "Weight",

      value:
        "35 g",
    },

    {
      label:
        "Origin",

      value:
        "Colombia",
    },
  ],
};
import type {
  ProductData,
} from "@/types/product.types";

export const ceramicVase: ProductData = {
  id:
    "ceramic-vase",

  image:
    "/images/products/009/009.png",

  href:
    "/products/ceramic-vase",

  price:
    "$145.000",

  translations: {
    en: {
      title:
        "Ceramic Vase",

      category:
        "Home Decor",

      description:
        "Handcrafted ceramic vase featuring a rustic finish and timeless design, created to bring warmth, texture, and artisanal character to any interior space.",

      imageAlt:
        "Handcrafted ceramic vase",
    },

    es: {
      title:
        "Jarrón Cerámico",

      category:
        "Decoración",

      description:
        "Jarrón artesanal elaborado en cerámica con acabado rústico y diseño atemporal, ideal para aportar calidez, textura y personalidad a cualquier espacio.",

      imageAlt:
        "Jarrón cerámico artesanal",
    },

    pt: {
      title:
        "Vaso Cerâmico",

      category:
        "Decoração",

      description:
        "Vaso artesanal produzido em cerâmica com acabamento rústico e design atemporal, perfeito para adicionar aconchego, textura e personalidade a qualquer ambiente.",

      imageAlt:
        "Vaso cerâmico artesanal",
    },
  },

  features: [
    "Handmade",
    "Ceramic Craftsmanship",
    "Rustic Finish",
    "Decorative Piece",
    "Unique Design",
  ],

  specifications: [
    {
      label:
        "Material",

      value:
        "Ceramic",
    },

    {
      label:
        "Height",

      value:
        "30 cm",
    },

    {
      label:
        "Weight",

      value:
        "850 g",
    },

    {
      label:
        "Origin",

      value:
        "Colombia",
    },
  ],
};
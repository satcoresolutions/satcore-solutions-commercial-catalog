import type {
  ProductData,
} from "@/types/product.types";

export const amethystNecklace: ProductData = {
  id:
    "amethyst-necklace",

  image:
    "/images/products/003/003.png",

  href:
    "/products/amethyst-necklace",

  price:
    "$135.000",

  translations: {
    en: {
      title:
        "Amethyst Necklace",

      category:
        "Jewelry",

      description:
        "Handcrafted necklace featuring natural amethyst stones with beautiful violet tones, carefully assembled to create an elegant and timeless accessory.",

      imageAlt:
        "Natural amethyst necklace",
    },

    es: {
      title:
        "Collar de Amatista",

      category:
        "Joyería",

      description:
        "Collar artesanal elaborado con amatistas naturales de intensos tonos violetas, diseñado para aportar elegancia y un estilo único a cualquier ocasión.",

      imageAlt:
        "Collar de amatista natural",
    },

    pt: {
      title:
        "Colar de Ametista",

      category:
        "Joias",

      description:
        "Colar artesanal produzido com ametistas naturais de tons violetas marcantes, criado para oferecer elegância e um estilo único para qualquer ocasião.",

      imageAlt:
        "Colar de ametista natural",
    },
  },

  features: [
    "Natural Amethyst",
    "Handmade",
    "Elegant Design",
    "Unique Stone Patterns",
    "Lightweight",
  ],

  specifications: [
    {
      label:
        "Material",

      value:
        "Natural Amethyst",
    },

    {
      label:
        "Length",

      value:
        "50 cm",
    },

    {
      label:
        "Weight",

      value:
        "140 g",
    },

    {
      label:
        "Origin",

      value:
        "Colombia",
    },
  ],
};
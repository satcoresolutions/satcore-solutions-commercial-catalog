import type {
  ProductData,
} from "@/types/product.types";

export const woodenBowl: ProductData = {
  id:
    "wooden-bowl",

  image:
    "/images/products/005/005.png",

  href:
    "/products/wooden-bowl",

  price:
    "$130.000",

  translations: {
    en: {
      title:
        "Handcrafted Wooden Bowl",

      category:
        "Home Decor",

      description:
        "Hand-carved wooden bowl crafted from natural wood, combining functionality and artisan design to create a timeless decorative piece.",

      imageAlt:
        "Handcrafted wooden bowl",
    },

    es: {
      title:
        "Cuenco Artesanal de Madera",

      category:
        "Decoración",

      description:
        "Cuenco tallado a mano utilizando madera natural, diseñado para combinar funcionalidad, belleza y el encanto único del trabajo artesanal.",

      imageAlt:
        "Cuenco artesanal de madera",
    },

    pt: {
      title:
        "Tigela Artesanal de Madeira",

      category:
        "Decoração",

      description:
        "Tigela esculpida à mão em madeira natural, combinando funcionalidade, beleza e o charme único do artesanato tradicional.",

      imageAlt:
        "Tigela artesanal de madeira",
    },
  },

  features: [
    "Hand Carved",
    "Natural Wood",
    "Artisan Crafted",
    "Decorative Piece",
    "Unique Grain Patterns",
  ],

  specifications: [
    {
      label:
        "Material",

      value:
        "Natural Wood",
    },

    {
      label:
        "Diameter",

      value:
        "25 cm",
    },

    {
      label:
        "Height",

      value:
        "10 cm",
    },

    {
      label:
        "Origin",

      value:
        "Colombia",
    },
  ],
};
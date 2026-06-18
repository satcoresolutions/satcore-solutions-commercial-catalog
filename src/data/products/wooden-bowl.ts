import type {
  ProductData,
} from "@/types/product.types";

export const woodenBowl: ProductData = {
  id:
    "wooden-bowl",

  image:
    "/images/products/005/005.png",

  images: [
    "/images/products/005/005.png",
    "/images/products/001/001.png",
    "/images/products/003/003.png",
    "/images/products/002/002.png",
    "/images/products/010/010.png",
    "/images/products/009/009.png",
    "/images/products/008/008.png",
    "/images/products/004/004.png",
    "/images/products/006/006.png",
    "/images/products/007/007.png",
  ],

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

      features: [
        "Hand Carved",
        "Natural Wood",
        "Artisan Crafted",
        "Decorative Piece",
        "Unique Grain Patterns",
      ],

      specifications: [
        {
          label: "Material",
          value: "Natural Wood",
        },
        {
          label: "Diameter",
          value: "25 cm",
        },
        {
          label: "Height",
          value: "10 cm",
        },
        {
          label: "Origin",
          value: "Colombia",
        },
      ],
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

      features: [
        "Tallado a mano",
        "Madera natural",
        "Elaboración artesanal",
        "Pieza decorativa",
        "Vetas únicas",
      ],

      specifications: [
        {
          label: "Material",
          value: "Madera natural",
        },
        {
          label: "Diámetro",
          value: "25 cm",
        },
        {
          label: "Altura",
          value: "10 cm",
        },
        {
          label: "Origen",
          value: "Colombia",
        },
      ],
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

      features: [
        "Esculpida à mão",
        "Madeira natural",
        "Artesanato refinado",
        "Peça decorativa",
        "Veios exclusivos",
      ],

      specifications: [
        {
          label: "Material",
          value: "Madeira natural",
        },
        {
          label: "Diâmetro",
          value: "25 cm",
        },
        {
          label: "Altura",
          value: "10 cm",
        },
        {
          label: "Origem",
          value: "Colômbia",
        },
      ],
    },
  },
};
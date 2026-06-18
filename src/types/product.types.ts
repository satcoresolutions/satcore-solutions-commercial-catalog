export interface ProductData {
  id: string;

  image: string;

  images: string[];

  href: string;

  price?: string;

  translations: {
    en: {
      title: string;
      category: string;
      description: string;
      imageAlt: string;

      features: string[];

      specifications: {
        label: string;
        value: string;
      }[];
    };

    es: {
      title: string;
      category: string;
      description: string;
      imageAlt: string;

      features: string[];

      specifications: {
        label: string;
        value: string;
      }[];
    };

    pt: {
      title: string;
      category: string;
      description: string;
      imageAlt: string;

      features: string[];

      specifications: {
        label: string;
        value: string;
      }[];
    };
  };
}
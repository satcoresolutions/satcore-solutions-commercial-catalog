"use client";

import { useLanguage } from "@/hooks/use-language";

import type {
  ProductData,
} from "@/types/product.types";

interface DetailsFeaturesProps {
  product: ProductData;
}

export default function DetailsFeatures({
  product,
}: DetailsFeaturesProps) {
  const lang = useLanguage();

  const content =
    product.translations[lang];

  return (
    <div className="flex justify-center">
      <div
        className="
          flex
          flex-wrap
          justify-center
          gap-3
        "
      >
        {content.features.map((feature) => (
          <span
            key={feature}
            className="
              rounded-full
              px-4
              py-2
              text-sm
              text-center
            "
            style={{
              background:
                "var(--color-surface)",
              border:
                "1px solid var(--color-border)",
            }}
          >
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
}
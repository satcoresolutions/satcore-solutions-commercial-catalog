"use client";

import Card
  from "@/components/ui/card";

import {
  useLanguage,
} from "@/hooks/use-language";

import type {
  ProductData,
} from "@/types/product.types";

interface DetailsSpecificationsProps {
  product: ProductData;
}

export default function DetailsSpecifications({
  product,
}: DetailsSpecificationsProps) {
  const lang =
    useLanguage();

  const content =
    product.translations[lang];

  return (
    <Card
      variant="outlined"
      className="
        p-6
      "
    >
      <div
        className="
          flex
          flex-col
        "
      >
        {content.specifications.map(
          (specification) => (
            <div
              key={
                specification.label
              }
              className="
                flex
                items-center
                justify-between
                gap-4
                py-4
                border-b
                last:border-b-0
              "
              style={{
                borderColor:
                  "var(--color-border)",
              }}
            >
              <span
                className="
                  text-sm
                "
                style={{
                  color:
                    "var(--color-text-muted)",
                }}
              >
                {
                  specification.label
                }
              </span>

              <span
                className="
                  text-sm
                  font-medium
                  text-right
                "
              >
                {
                  specification.value
                }
              </span>
            </div>
          )
        )}
      </div>
    </Card>
  );
}
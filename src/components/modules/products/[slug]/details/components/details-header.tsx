"use client";

import Card
  from "@/components/ui/card";

import {
  useLanguage,
} from "@/hooks/use-language";

import type {
  ProductData,
} from "@/types/product.types";

interface DetailsHeaderProps {
  product: ProductData;
}

export default function DetailsHeader({
  product,
}: DetailsHeaderProps) {
  const lang =
    useLanguage();

  const content =
    product.translations[lang];

  return (
    <Card
      variant="outlined"
      className="
        p-8
        md:p-10
      "
    >
      <div
        className="
          flex
          flex-col
          gap-6
        "
      >
        <span
          className="
            inline-flex
            w-fit
            rounded-full
            px-4
            py-2
            text-xs
            font-medium
            uppercase
            tracking-[0.12em]
          "
          style={{
            background:
              "color-mix(in srgb, var(--accent) 10%, transparent)",

            color:
              "var(--primary)",
          }}
        >
          {content.category}
        </span>

        <h1
          className="
            text-balance
          "
        >
          {content.title}
        </h1>

        {product.price && (
          <p
            className="
              text-3xl
              font-bold
            "
            style={{
              color:
                "var(--primary)",
            }}
          >
            {product.price}
          </p>
        )}

        <p
          className="
            text-balance
          "
          style={{
            color:
              "var(--color-text-muted)",
          }}
        >
          {content.description}
        </p>
      </div>
    </Card>
  );
}
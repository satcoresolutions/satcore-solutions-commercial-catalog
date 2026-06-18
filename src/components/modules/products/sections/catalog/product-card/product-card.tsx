"use client";

import Image
  from "next/image";

import Link
  from "next/link";

import Card
  from "@/components/ui/card";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  productCardContent,
} from "./content/product-card.content";

import type {
  ProductCardProps,
} from "./types/product-card.types";

export default function ProductCard({
  product,
}: ProductCardProps) {
  const lang =
    useLanguage();

  const content =
    productCardContent[lang];

  const translation =
    product.translations[lang];

  return (
    <Card
      variant="outlined"
      className="
        overflow-hidden
        transition-all
        duration-300

        hover:-translate-y-1
      "
    >
      <div
        className="
          relative
          aspect-square
          overflow-hidden
        "
      >
        <Image
          fill
          src={product.image}
          alt={translation.imageAlt}
          className="
            object-cover
            transition-transform
            duration-500

            hover:scale-105
          "
        />
      </div>

      <div
        className="
          p-5
        "
      >
        <span
          className="
            text-xs
            uppercase
            tracking-wide
          "
          style={{
            color:
              "var(--color-text-muted)",
          }}
        >
          {translation.category}
        </span>

        <h3
          className="
            mt-2
            text-lg
            font-semibold
          "
        >
          {translation.title}
        </h3>

        <p
          className="
            mt-3
            line-clamp-2
            text-sm
          "
          style={{
            color:
              "var(--color-text-muted)",
          }}
        >
          {translation.description}
        </p>

        {product.price && (
          <p
            className="
              mt-4
              text-base
              font-semibold
            "
          >
            {product.price}
          </p>
        )}

        <Link
          href={product.href}
          className="
            mt-5
            inline-flex
            text-sm
            font-medium
          "
        >
          {content.viewDetails}
        </Link>
      </div>
    </Card>
  );
}
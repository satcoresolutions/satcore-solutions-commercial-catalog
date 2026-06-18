"use client";

import DetailsHeader
  from "./components/details-header";

import DetailsFeatures
  from "./components/details-features";

import DetailsSpecifications
  from "./components/details-specifications";

import DetailsCTA 
  from "./components/details-cta";

import type {
  ProductData,
} from "@/types/product.types";

interface ProductDetailsProps {
  product: ProductData;
}

export default function ProductDetails({
  product,
}: ProductDetailsProps) {
  return (
    <div
      className="
        flex
        flex-col
        gap-8
        p-10
      "
    >
      <DetailsHeader
        product={product}
      />

      <DetailsFeatures
        product={product}
      />

      <DetailsSpecifications
        product={product}
      />

      <DetailsCTA product={product} />
    </div>
  );
}
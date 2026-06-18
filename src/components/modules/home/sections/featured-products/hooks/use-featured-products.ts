"use client";

import useProducts
  from "@/hooks/use-products";

export default function useFeaturedProducts(
  limit = 4,
) {
  const products =
    useProducts();

  return products.slice(
    0,
    limit,
  );
}
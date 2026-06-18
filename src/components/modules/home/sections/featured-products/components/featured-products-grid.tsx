"use client";

import ProductCard
  from "@/components/modules/products/sections/catalog/product-card";

import useFeaturedProducts
  from "../hooks/use-featured-products";

export default function FeaturedProductsGrid() {
  const products =
    useFeaturedProducts();

  return (
    <div
      className="
        mt-10
        grid
        gap-6

        sm:grid-cols-2

        lg:grid-cols-4
      "
    >
      {products.map(
        (product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ),
      )}
    </div>
  );
}
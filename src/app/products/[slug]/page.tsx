import ProductHero
  from "@/components/modules/products/[slug]/hero";

import ProductDetails
  from "@/components/modules/products/[slug]/details";

import type {
  ProductData,
} from "@/types/product.types";

// aquí normalmente vendría getProductBySlug(slug)
import { agateNecklace } from "@/data/products/agate-necklace";

export default function ProductPage() {
  const product: ProductData =
    agateNecklace;

  return (
    <main
      className="
        container
        py-20
      "
    >
      <div
        className="
          grid
          lg:grid-cols-[600px_1fr]
          lg:items-start
        "
      >
        <ProductHero
          product={product}
        />

        <ProductDetails
          product={product}
        />
      </div>
    </main>
  );
}
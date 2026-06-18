"use client";

import { useState } from "react";

import HeroImage from "./components/hero-image";
import HeroGallery from "./components/hero-gallery";

import type { ProductData } from "@/types/product.types";

interface ProductHeroProps {
  product: ProductData;
}

export default function ProductHero({
  product,
}: ProductHeroProps) {
  const [activeImage, setActiveImage] =
    useState(product.image);

  return (
    <section
      className="
        container
        p-10
      "
    >
      <div
        className="
          flex
          flex-col
          items-center
          gap-8
        "
      >
        {/* MAIN IMAGE */}
        <div className="w-full max-w-xl">
          <HeroImage
            src={activeImage}
            alt={product.translations.en.imageAlt}
          />
        </div>

        {/* GALLERY */}
        <HeroGallery
          images={product.images}
          activeImage={activeImage}
          onSelect={setActiveImage}
        />
      </div>
    </section>
  );
}
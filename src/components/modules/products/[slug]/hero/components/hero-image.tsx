"use client";

import Image from "@/components/ui/image";

interface HeroImageProps {
  src: string;
  alt: string;
}

export default function HeroImage({
  src,
  alt,
}: HeroImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      variant="product"
      priority
    />
  );
}
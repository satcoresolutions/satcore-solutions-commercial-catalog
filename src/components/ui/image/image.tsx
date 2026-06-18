import NextImage
  from "next/image";

import type {
  ImageProps,
} from "./image.types";

import {
  imageVariants,
} from "./image.variants";

export default function Image({
  src,
  alt,

  variant = "default",

  priority = false,

  className = "",

  style,

  width = 1200,

  height = 1200,
}: ImageProps) {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      style={{
        width: "100%",
        height: "auto",

        ...imageVariants[
          variant
        ],

        ...style,
      }}
    />
  );
}
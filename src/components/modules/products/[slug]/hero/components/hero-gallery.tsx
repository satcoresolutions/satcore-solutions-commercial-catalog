"use client";

interface HeroGalleryProps {
  images: string[];
  activeImage: string;
  onSelect: (src: string) => void;
}

export default function HeroGallery({
  images,
  activeImage,
  onSelect,
}: HeroGalleryProps) {
  return (
    <div
      className="
        flex
        gap-3
        flex-wrap
        justify-center
      "
    >
      {images.map((img) => (
        <button
          key={img}
          onClick={() => onSelect(img)}
          className={`
            relative
            h-16
            w-16
            overflow-hidden
            rounded-lg
            border
            transition
            ${
              activeImage === img
                ? "border-accent"
                : "border-(--color-border)"
            }
          `}
        >
          <img
            src={img}
            alt="thumbnail"
            className="
              h-full
              w-full
              object-cover
            "
          />
        </button>
      ))}
    </div>
  );
}
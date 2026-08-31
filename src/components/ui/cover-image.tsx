import Image from "next/image";
import { cn } from "@/lib/utils";

const gradients = [
  "from-primary/25 via-surface to-accent/20",
  "from-accent/25 via-surface to-primary/15",
  "from-primary/20 via-surface to-primary/5",
  "from-accent/20 via-surface to-accent/5",
];

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

interface CoverImageProps {
  /** Caminho já validado (ex.: via resolveImage()) — undefined exibe a capa ilustrativa. */
  src?: string;
  alt: string;
  category: string;
  seed: string;
  className?: string;
  sizes?: string;
  /** Proporção real (largura / altura) de `src`, ex.: via getImageAspectRatio(). */
  aspectRatio?: number;
}

export function CoverImage({
  src,
  alt,
  category,
  seed,
  className,
  sizes = "(min-width: 1024px) 400px, 100vw",
  aspectRatio,
}: CoverImageProps) {
  const gradient = gradients[hashString(seed) % gradients.length];

  if (src) {
    return (
      <div
        className={cn("relative overflow-hidden bg-surface", className)}
        style={aspectRatio ? { aspectRatio } : undefined}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          quality={100}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized={src.endsWith(".svg")}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br bg-grid-pattern bg-[length:24px_24px]",
        gradient,
        className
      )}
      role="img"
      aria-label={alt}
    >
      <div className="absolute inset-0 bg-background/40" />
    </div>
  );
}

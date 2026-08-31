import Image from "next/image";
import { siteConfig } from "@/data/site";
import { resolveImage } from "@/lib/media";
import { cn } from "@/lib/utils";

/**
 * Retrato da Hero: moldura retangular com borda deslocada (hairline) e um
 * acento geométrico discreto — sem foto circular, sem gradientes pesados.
 * O tom por estação vem só de CSS (--photo-overlay-opacity/--photo-brightness
 * definidos em globals.css), então a mesma foto nunca é alterada de fato.
 */
export function HeroPortrait({ className }: { className?: string }) {
  const src = resolveImage(siteConfig.avatar);

  return (
    <div className={cn("relative mx-auto w-full max-w-[220px] lg:max-w-none", className)}>
      <div
        className="absolute inset-0 hidden translate-x-4 translate-y-4 border border-primary/25 lg:block"
        aria-hidden
      />

      <div className="relative aspect-[4/5] w-full overflow-hidden border border-border bg-surface">
        {src ? (
          <>
            <Image
              src={src}
              alt={siteConfig.fullName}
              fill
              sizes="(min-width: 1024px) 420px, 220px"
              priority
              className="object-cover"
              style={{ filter: "brightness(var(--photo-brightness, 1))" }}
            />
            <div
              className="pointer-events-none absolute inset-0 bg-primary opacity-[var(--photo-overlay-opacity,0.05)] mix-blend-overlay"
              aria-hidden
            />
          </>
        ) : (
          <div className="absolute inset-0 bg-grid-pattern bg-[length:22px_22px]" aria-hidden />
        )}
      </div>

      <div
        className="absolute -left-3 -top-3 hidden h-6 w-6 border-l border-t border-primary/50 lg:block"
        aria-hidden
      />
    </div>
  );
}

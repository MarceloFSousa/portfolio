"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import type { GalleryItem } from "@/types";

/**
 * Grade de imagens com título e descrição opcionais por item, no estilo dos
 * anexos de mídia do LinkedIn. Itens sem arquivo em /public já chegam
 * filtrados por getAllProjects()/getProjectBySlug() (mesma lógica de
 * CoverImage), então este componente sempre recebe imagens válidas.
 *
 * Clicar em uma imagem abre um visualizador em tela cheia, com setas para
 * navegar entre as imagens sem precisar fechar e reabrir.
 */
export function Gallery({
  items,
  title = "Galeria",
}: {
  items: GalleryItem[];
  title?: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length]
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, showPrev, showNext]);

  if (!items.length) return null;

  const active = activeIndex !== null ? items[activeIndex] : undefined;
  const activeRatio = active?.aspectRatio ?? 16 / 9;

  return (
    <div className="mt-12 border-t border-border pt-8">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
        {title}
      </p>
      <div className="mt-6 grid gap-8 sm:grid-cols-2">
        {items.map((item, index) => (
          <figure key={item.src} className="space-y-3">
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Ampliar ${item.title ?? title}`}
              className="group relative block w-full overflow-hidden border border-border bg-surface"
              style={{ aspectRatio: item.aspectRatio ?? 16 / 9 }}
            >
              <Image
                src={item.src}
                alt={item.title ?? title}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                quality={100}
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                unoptimized={item.src.endsWith(".svg")}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-background/0 opacity-0 transition-all duration-200 group-hover:bg-background/50 group-hover:opacity-100">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/90 text-foreground">
                  <Expand size={18} />
                </span>
              </div>
            </button>
            {(item.title || item.description) && (
              <figcaption className="space-y-1">
                {item.title && (
                  <p className="text-sm text-foreground">{item.title}</p>
                )}
                {item.description && (
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                )}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] animate-fade-in overflow-y-auto bg-background/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={active.title ?? title}
          onClick={close}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Fechar"
            className="fixed right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/80 text-foreground transition-colors hover:bg-surface-hover"
          >
            <X size={18} />
          </button>

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                aria-label="Imagem anterior"
                className="fixed left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface/80 text-foreground transition-colors hover:bg-surface-hover sm:left-6"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                aria-label="Próxima imagem"
                className="fixed right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface/80 text-foreground transition-colors hover:bg-surface-hover sm:right-6"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          <div className="flex min-h-full flex-col items-center justify-center gap-4 p-4 sm:p-8">
            <div
              key={active.src}
              className="relative max-h-[75vh] w-full animate-fade-up overflow-hidden border border-border bg-surface"
              style={{
                aspectRatio: activeRatio,
                maxWidth: `min(100%, calc(75vh * ${activeRatio}))`,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={active.src}
                alt={active.title ?? title}
                fill
                sizes="100vw"
                quality={100}
                className="object-contain"
                unoptimized={active.src.endsWith(".svg")}
              />
            </div>

            {(active.title || active.description || items.length > 1) && (
              <div className="max-w-2xl text-center" onClick={(e) => e.stopPropagation()}>
                {items.length > 1 && (
                  <p className="font-mono text-xs text-muted-foreground">
                    {activeIndex! + 1} / {items.length}
                  </p>
                )}
                {active.title && (
                  <p className="mt-1 text-sm text-foreground">{active.title}</p>
                )}
                {active.description && (
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {active.description}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { getYouTubeId, getYouTubeThumbnail } from "@/lib/youtube";

interface YouTubeEmbedProps {
  url: string;
  title: string;
  className?: string;
}

/**
 * Embed leve: mostra só a miniatura e carrega o player do YouTube quando o
 * visitante clica, para não pesar o carregamento da página.
 */
export function YouTubeEmbed({ url, title, className }: YouTubeEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const id = getYouTubeId(url);

  if (!id) return null;

  return (
    <div className={cn("relative aspect-video w-full overflow-hidden bg-black", className)}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Assistir vídeo: ${title}`}
          className="group absolute inset-0 h-full w-full"
        >
          <Image
            src={getYouTubeThumbnail(id)}
            alt={title}
            fill
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-cover"
            priority
          />
          <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform group-hover:scale-110">
            <Play size={28} className="ml-1" fill="currentColor" />
          </span>
        </button>
      )}
    </div>
  );
}

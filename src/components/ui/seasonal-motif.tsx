"use client";

import { useSeason } from "@/components/providers/season-provider";
import { seasonMeta } from "@/lib/season";
import { cn } from "@/lib/utils";
import type { Season } from "@/lib/season";
import type { CSSProperties } from "react";

interface MarkProps {
  className?: string;
  style?: CSSProperties;
}

/**
 * Marcas geométricas abstratas — não ícones literais — que ocupam o espaço
 * negativo do layout. Estáticas por padrão: nada de folhas, neve ou
 * partículas em loop constante, só um detalhe visual discreto por estação.
 */
function SpringMark({ className, style }: MarkProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} style={style} aria-hidden>
      <path d="M16 28V10" stroke="currentColor" strokeWidth="1.2" />
      <path d="M16 14C16 14 10 12 9 6" stroke="currentColor" strokeWidth="1.2" />
      <path d="M16 18C16 18 22 16 23 9" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="16" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function SummerMark({ className, style }: MarkProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} style={style} aria-hidden>
      <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M16 2v4M16 26v4M2 16h4M26 16h4M6 6l3 3M23 23l3 3M26 6l-3 3M9 23l-3 3"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AutumnMark({ className, style }: MarkProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} style={style} aria-hidden>
      <path d="M16 4L27 16L16 28L5 16Z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M16 8V24" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function WinterMark({ className, style }: MarkProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} style={style} aria-hidden>
      <path
        d="M16 3v26M4.4 9.5l23.2 13M4.4 22.5l23.2-13"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path d="M16 3l-3 3M16 3l3 3M16 29l-3-3M16 29l3-3" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

const marks: Record<Season, (props: MarkProps) => JSX.Element> = {
  spring: SpringMark,
  summer: SummerMark,
  autumn: AutumnMark,
  winter: WinterMark,
};

const positions = [
  { top: "9%", left: "4%", size: 26, tone: "primary" },
  { top: "14%", right: "5%", size: 20, tone: "accent" },
  { bottom: "12%", left: "6%", size: 18, tone: "accent-secondary" },
  { bottom: "16%", right: "4%", size: 24, tone: "primary" },
] as const;

const toneClass = {
  primary: "text-primary",
  accent: "text-accent",
  "accent-secondary": "text-accent-secondary",
} as const;

export function SeasonalMotif({ className }: { className?: string }) {
  const { season } = useSeason();
  const Mark = marks[season];
  const intensity = seasonMeta[season].motifIntensity;

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 hidden overflow-hidden lg:block", className)}
      style={{ opacity: intensity }}
      aria-hidden="true"
    >
      {positions.map((pos, i) => (
        <Mark
          key={i}
          className={cn("absolute opacity-[0.16]", toneClass[pos.tone])}
          style={
            {
              top: "top" in pos ? pos.top : undefined,
              bottom: "bottom" in pos ? pos.bottom : undefined,
              left: "left" in pos ? pos.left : undefined,
              right: "right" in pos ? pos.right : undefined,
              width: pos.size,
              height: pos.size,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

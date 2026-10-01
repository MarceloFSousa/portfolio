import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

// Etiqueta técnica: texto mono em caixa alta com borda fina e cantos retos,
// no mesmo tom dos rótulos de seção do site (sem pílula nem fundo colorido).
const variants = {
  default: "text-muted-foreground border-border",
  primary: "text-primary border-primary/50",
  accent: "text-accent border-accent/50",
};

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof variants;
}

export function Badge({ variant = "default", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border px-2 py-1 font-mono text-[11px] uppercase leading-none tracking-[0.12em]",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

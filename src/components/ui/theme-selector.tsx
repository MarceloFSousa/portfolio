"use client";

import { useEffect, useRef, useState } from "react";
import { Clock3, Shuffle } from "lucide-react";
import { useSeason } from "@/components/providers/season-provider";
import { SEASONS, seasonMeta } from "@/lib/season";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

export function ThemeSelector({ className }: { className?: string }) {
  const { season, seasonMode, setSeasonMode, randomizeSeason } = useSeason();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Marca como montado só depois do primeiro paint no cliente, para o ícone
  // sazonal (que depende de localStorage, indisponível no servidor) nunca
  // divergir entre o HTML do servidor e a primeira renderização do cliente.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  if (!mounted) {
    return <div className={cn("h-9 w-9", className)} aria-hidden />;
  }

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Escolher tema sazonal"
        aria-expanded={open}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground transition-colors hover:bg-surface-hover hover:text-foreground"
      >
        <Icon name={seasonMeta[season].icon} size={18} />
      </button>

      {open && (
        <div className="absolute right-0 top-11 z-50 w-56 rounded-xl border border-border bg-surface p-2 shadow-xl shadow-black/20">
          {SEASONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => {
                setSeasonMode(s);
                setOpen(false);
              }}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-surface-hover",
                seasonMode === s ? "text-primary" : "text-foreground"
              )}
            >
              <Icon name={seasonMeta[s].icon} size={16} />
              <span className="flex-1">{seasonMeta[s].label}</span>
              <span className="text-xs text-muted-foreground">{seasonMeta[s].description}</span>
            </button>
          ))}

          <div className="my-2 border-t border-border" />

          <button
            type="button"
            onClick={() => {
              randomizeSeason();
              setOpen(false);
            }}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-foreground transition-colors hover:bg-surface-hover"
          >
            <Shuffle size={16} />
            <span className="flex-1">Aleatório</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setSeasonMode("auto");
              setOpen(false);
            }}
            className={cn(
              "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-surface-hover",
              seasonMode === "auto" ? "text-primary" : "text-foreground"
            )}
          >
            <Clock3 size={16} />
            <span className="flex-1">Automático</span>
            <span className="text-xs text-muted-foreground">Pela estação atual</span>
          </button>
        </div>
      )}
    </div>
  );
}

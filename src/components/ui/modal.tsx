"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Modal({ open, onClose, title, children, className }: ModalProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-5"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="absolute inset-0 animate-fade-in bg-background/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      <div
        className={cn(
          "relative w-full max-w-sm animate-fade-up overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-2xl shadow-black/30",
          className
        )}
      >
        <div aria-hidden className="h-1 w-full bg-gradient-to-r from-primary via-accent to-accent-secondary" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-glow-primary opacity-60"
        />

        <div className="relative p-6">
          <div className="flex items-center justify-between gap-4">
            {title && (
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {title}
              </p>
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar"
              className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-surface-hover hover:text-foreground"
            >
              <X size={16} />
            </button>
          </div>

          <div className="mt-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

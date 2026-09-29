"use client";

import { useEffect, useState } from "react";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { cn } from "@/lib/utils";

interface StickyBuyBarProps {
  name: string;
  price: string;
  message: string;
  /** id do elemento com os botões principais; a barra aparece quando ele sai da tela. */
  watchId: string;
}

/** Barra fixa de compra no rodapé, só no mobile. */
export function StickyBuyBar({ name, price, message, watchId }: StickyBuyBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById(watchId);
    if (!target) return;

    const observer = new IntersectionObserver(([entry]) => {
      // Só mostra depois que o visitante rolou para além dos botões (não antes deles).
      setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, [watchId]);

  return (
    <>
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur transition-transform duration-300 lg:hidden",
          visible ? "translate-y-0" : "translate-y-full"
        )}
        aria-hidden={!visible}
      >
        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <div className="min-w-0">
            <p className="truncate text-sm text-foreground">{name}</p>
            <p className="font-mono text-base font-semibold text-foreground">{price}</p>
          </div>
          <WhatsAppButton message={message} label="Comprar" size="sm" className="shrink-0" />
        </div>
      </div>
      {/* Espaço para a barra não cobrir o fim da página no mobile */}
      <div className="h-20 lg:hidden" />
    </>
  );
}

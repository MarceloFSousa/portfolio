"use client";

import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";

interface GithubLinkButtonProps {
  /** Dicionário nome do repositório → URL (ex.: { Backend: "...", Frontend: "..." }). */
  github?: Record<string, string>;
}

export function GithubLinkButton({ github }: GithubLinkButtonProps) {
  const [open, setOpen] = useState(false);
  const entries = Object.entries(github ?? {});

  if (entries.length === 0) {
    return (
      <span className="inline-flex h-11 cursor-not-allowed items-center gap-2 rounded-lg border border-border px-6 text-sm text-muted-foreground">
        <Github size={18} />
        Código não disponível
      </span>
    );
  }

  if (entries.length === 1) {
    return (
      <Button href={entries[0][1]} variant="secondary">
        <Github size={18} />
        Ver código no GitHub
      </Button>
    );
  }

  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        <Github size={18} />
        Ver código no GitHub
      </Button>

      <Modal open={open} onClose={() => setOpen(false)} title="Repositórios">
        <h3 className="font-display text-xl font-light text-foreground">
          Escolha um repositório
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          O código deste projeto está dividido em partes separadas.
        </p>

        <div className="mt-5 flex flex-col gap-3">
          {entries.map(([label, url]) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-all duration-200 hover:border-primary/40 hover:bg-surface-hover"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Github size={18} />
              </span>
              <span className="flex-1">
                <span className="block text-sm font-medium text-foreground">{label}</span>
                <span className="block text-xs text-muted-foreground">
                  Ver repositório no GitHub
                </span>
              </span>
              <ArrowUpRight
                size={16}
                className="shrink-0 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
              />
            </a>
          ))}
        </div>
      </Modal>
    </>
  );
}

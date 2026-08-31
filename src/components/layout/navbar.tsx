"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Github, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { ThemeSelector } from "@/components/ui/theme-selector";

const navLinks = [
  { label: "Sobre", href: "/sobre" },
  { label: "Projetos", href: "/projetos" },
  { label: "Tecnologias", href: "/#tecnologias" },
  { label: "Mercado Financeiro", href: "/mercado-financeiro" },
  { label: "Contato", href: "/contato" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href !== "/#tecnologias" && pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="font-display text-base font-medium text-foreground"
        >
          {siteConfig.handle}
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                isActive(link.href) && "text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`https://github.com/${siteConfig.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github size={18} />
          </a>
          <ThemeSelector />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeSelector />
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-foreground"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "grid overflow-hidden border-b border-border bg-background/95 backdrop-blur-lg transition-all duration-300 lg:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="min-h-0">
          <div className="flex flex-col gap-1 px-5 pb-6 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-surface-hover hover:text-foreground",
                  isActive(link.href) && "bg-surface-hover text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`https://github.com/${siteConfig.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-md px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-surface-hover hover:text-foreground"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

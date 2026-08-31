import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";

const links = [
  { label: "Sobre", href: "/sobre" },
  { label: "Projetos", href: "/projetos" },
  { label: "Mercado Financeiro", href: "/mercado-financeiro" },
  { label: "Contato", href: "/contato" },
  { label: "GitHub", href: `https://github.com/${siteConfig.githubUsername}` },
  { label: "LinkedIn", href: siteConfig.linkedin },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-base text-foreground">
          {siteConfig.handle}
        </p>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => {
            const external = link.href.startsWith("http");
            return (
              <Link
                key={link.label}
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </Container>

      <div className="border-t border-border py-5">
        <Container>
          <p className="text-xs text-muted-foreground">
            © {year} {siteConfig.handle}
          </p>
        </Container>
      </div>
    </footer>
  );
}

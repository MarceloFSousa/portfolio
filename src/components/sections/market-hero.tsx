import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function MarketHero() {
  const { title, subtitle, ctaPrimary, ctaSecondary } = siteConfig.marketHero;

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10 bg-grid-pattern bg-[length:44px_44px] [mask-image:radial-gradient(ellipse_60%_60%_at_0%_0%,black_15%,transparent_65%)]" />

      <Container className="py-20 sm:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          Mercado financeiro
        </p>
        <h1 className="font-display mt-5 max-w-2xl text-4xl font-light tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="#produtos" size="lg">
            {ctaPrimary}
            <ArrowRight size={18} />
          </Button>
          <Button href="#automacao" variant="secondary" size="lg">
            {ctaSecondary}
          </Button>
        </div>
      </Container>
    </section>
  );
}

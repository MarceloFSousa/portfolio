import { ArrowRight, Download, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SeasonalMotif } from "@/components/ui/seasonal-motif";
import { HeroPortrait } from "@/components/sections/hero-portrait";
import { siteConfig } from "@/data/site";
import { hasPublicImage } from "@/lib/media";

export function Hero() {
  const hasCv = hasPublicImage(siteConfig.cvPath);

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10 bg-grid-pattern bg-[length:44px_44px] [mask-image:radial-gradient(ellipse_70%_70%_at_100%_0%,black_15%,transparent_70%)]" />
      <div className="absolute -right-32 top-0 -z-10 h-[460px] w-[460px] bg-glow-primary" />
      <SeasonalMotif className="-z-10" />

      <Container className="py-20 sm:py-28">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-7">
            <div className="animate-fade-up inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              {siteConfig.hero.badge}
            </div>

            <h1
              className="animate-fade-up mt-6 font-display text-4xl font-light tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "80ms" }}
            >
              {siteConfig.fullName}
            </h1>

            <p
              className="animate-fade-up mt-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground sm:text-sm"
              style={{ animationDelay: "140ms" }}
            >
              {siteConfig.role}
            </p>

            <ul
              className="animate-fade-up mt-5 flex flex-wrap gap-2"
              style={{ animationDelay: "180ms" }}
            >
              {siteConfig.hero.facts.map((fact) => (
                <li
                  key={fact}
                  className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-foreground"
                >
                  {fact}
                </li>
              ))}
            </ul>

            <p
              className="animate-fade-up mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
              style={{ animationDelay: "220ms" }}
            >
              {siteConfig.tagline}
            </p>

            <div
              className="animate-fade-up mt-10 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "300ms" }}
            >
              <Button href="/projetos" size="lg">
                {siteConfig.hero.ctaPrimary}
                <ArrowRight size={18} />
              </Button>
              {hasCv ? (
                <Button href={siteConfig.cvPath} variant="secondary" size="lg" external download>
                  <Download size={18} />
                  {siteConfig.hero.ctaCv}
                </Button>
              ) : (
                <Button href={siteConfig.linkedin} variant="secondary" size="lg">
                  <Linkedin size={18} />
                  {siteConfig.hero.ctaLinkedin}
                </Button>
              )}
            </div>
          </div>

          <div
            className="animate-fade-up hidden lg:col-span-5 lg:block"
            style={{ animationDelay: "160ms" }}
          >
            <HeroPortrait />
          </div>
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { Briefcase, Download, Linkedin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { hasPublicImage } from "@/lib/media";
import { getInitials } from "@/lib/utils";

export function AboutFull() {
  const hasAvatar = hasPublicImage(siteConfig.avatar);
  const hasCv = hasPublicImage(siteConfig.cvPath);

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div>
            <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden border border-border bg-surface lg:mx-0">
              {hasAvatar ? (
                <Image
                  src={siteConfig.avatar}
                  alt={siteConfig.fullName}
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 via-surface to-accent/15 bg-grid-pattern bg-[length:24px_24px]">
                  <span className="font-mono text-6xl font-semibold text-foreground/80">
                    {getInitials(siteConfig.fullName)}
                  </span>
                </div>
              )}
            </div>

            <div className="mt-8 space-y-2">
              <h1 className="font-display text-2xl font-light text-foreground">
                {siteConfig.fullName}
              </h1>
              <p className="text-sm text-muted-foreground">{siteConfig.role}</p>
              <p className="text-sm text-muted-foreground">{siteConfig.location} · Remoto</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {hasCv && (
                <Button href={siteConfig.cvPath} size="sm" external download>
                  <Download size={16} />
                  {siteConfig.hero.ctaCv}
                </Button>
              )}
              <Button href={siteConfig.linkedin} variant="secondary" size="sm">
                <Linkedin size={16} />
                {siteConfig.hero.ctaLinkedin}
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {siteConfig.interests.map((interest) => (
                <Badge key={interest}>{interest}</Badge>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Sobre mim" title="Minha história e forma de trabalhar" />

            <div className="mt-6 space-y-4 text-muted-foreground">
              {siteConfig.bio.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <Briefcase size={18} className="text-primary" />
                Experiência
              </h3>
              <ol className="mt-6 space-y-8 border-l border-border pl-6">
                {siteConfig.experience.map((item) => (
                  <li key={item.title} className="relative">
                    <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-background bg-primary" />
                    <p className="font-mono text-xs uppercase tracking-wider text-primary">
                      {item.period}
                    </p>
                    <p className="mt-1 font-medium text-foreground">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

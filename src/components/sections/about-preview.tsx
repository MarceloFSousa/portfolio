import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function AboutPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <SectionHeading eyebrow="Sobre" title="Quem escreve o código" />
          <div className="mt-6 max-w-xl space-y-4 text-muted-foreground">
            <p className="leading-relaxed">{siteConfig.bio[0]}</p>
            <p className="leading-relaxed">{siteConfig.bio[1]}</p>
          </div>
          <Button href="/sobre" variant="outline" className="mt-8">
            Minha trajetória
            <ArrowRight size={16} />
          </Button>
        </div>

        <div className="border-t border-border pt-6 lg:col-span-4 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Interesses
          </p>
          <ul className="mt-4 space-y-2">
            {siteConfig.interests.map((interest) => (
              <li key={interest} className="text-sm text-foreground/90">
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

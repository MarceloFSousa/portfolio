import { ArrowRight, Download, Linkedin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { hasPublicImage } from "@/lib/media";

export function ContactCta() {
  const hasCv = hasPublicImage(siteConfig.cvPath);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="border-t border-border py-14 text-center">
          <h2 className="font-display mx-auto max-w-xl text-3xl font-light tracking-tight text-foreground sm:text-4xl">
            {siteConfig.contactCtaTitle}
          </h2>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={siteConfig.linkedin} size="lg">
              <Linkedin size={18} />
              Falar no LinkedIn
            </Button>
            {hasCv && (
              <Button href={siteConfig.cvPath} variant="secondary" size="lg" external download>
                <Download size={18} />
                {siteConfig.hero.ctaCv}
              </Button>
            )}
            <Button href="/contato" variant="outline" size="lg">
              Ver todos os contatos
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

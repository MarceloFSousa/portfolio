import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function ContactCta() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="border-t border-border py-14 text-center">
          <h2 className="font-display mx-auto max-w-xl text-3xl font-light tracking-tight text-foreground sm:text-4xl">
            Vamos conversar sobre o seu próximo projeto
          </h2>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href={createWhatsAppLink(siteConfig.whatsapp, siteConfig.whatsappDefaultMessage)}
              size="lg"
            >
              Falar no WhatsApp
            </Button>
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

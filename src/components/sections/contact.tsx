import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { socialLinks, siteConfig } from "@/data/site";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function Contact() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Contato"
          title="Vamos conversar"
          description="Escolha o canal que preferir. Respondo o mais rápido possível."
        />

        <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {siteConfig.recruiterNote}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {socialLinks.map((link) => {
            const href =
              link.href === "whatsapp"
                ? createWhatsAppLink(siteConfig.whatsapp, siteConfig.whatsappDefaultMessage)
                : link.href;

            return (
              <a
                key={link.id}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-start gap-4 border border-border p-6 transition-colors hover:bg-surface-hover"
              >
                <Icon name={link.icon} size={18} className="mt-0.5 shrink-0 text-muted-foreground" />
                <div className="min-w-0">
                  <p className="text-foreground">{link.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{link.description}</p>
                  <p className="mt-2 truncate text-sm text-primary">{link.value}</p>
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

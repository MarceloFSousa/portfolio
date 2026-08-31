import { Container } from "@/components/ui/container";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { siteConfig } from "@/data/site";

export function AutomationService() {
  const { title, description, steps, cta } = siteConfig.automationService;

  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
              Desenvolvimento sob demanda
            </p>
            <h2 className="font-display mt-4 text-3xl font-light tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              {description}
            </p>
            <div className="mt-8">
              <WhatsAppButton message={siteConfig.whatsappAutomationMessage} label={cta} />
            </div>
          </div>

          <ol className="lg:col-span-7">
            {steps.map((step) => (
              <li
                key={step.number}
                className="flex gap-6 border-t border-border py-5 first:border-t-0 lg:first:border-t"
              >
                <span className="font-mono text-sm text-muted-foreground">{step.number}</span>
                <div>
                  <p className="text-foreground">{step.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

import { CheckCircle2, ListChecks, ShieldCheck, Youtube } from "lucide-react";
import type { Product } from "@/types";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CoverImage } from "@/components/ui/cover-image";
import { Gallery } from "@/components/ui/gallery";
import { Icon } from "@/components/ui/icon";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { getTechnologiesByIds } from "@/lib/utils";
import { createProductTrialMessage } from "@/lib/whatsapp";

const statusVariant: Record<Product["status"], "primary" | "default" | "accent"> = {
  Disponível: "primary",
  "Em breve": "accent",
  Descontinuado: "default",
};

export function ProductDetails({ product }: { product: Product }) {
  const techs = getTechnologiesByIds(product.technologies);

  return (
    <article>
      <section className="border-b border-border py-14 sm:py-20">
        <Container>
          {product.isExample && (
            <Badge variant="accent" className="mb-6">
              Produto de exemplo
            </Badge>
          )}
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="primary">{product.category}</Badge>
            <Badge variant={statusVariant[product.status]}>{product.status}</Badge>
            <Badge>{product.platform}</Badge>
          </div>

          <h1 className="font-display mt-6 max-w-3xl text-3xl font-light tracking-tight text-foreground sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {product.shortDescription}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <p className="font-mono text-2xl text-foreground">{product.price}</p>
            <span className="text-sm text-muted-foreground">{product.licenseType}</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton
              message={createProductTrialMessage(product.name)}
              label="Solicitar teste pelo WhatsApp"
            />
            {product.videoUrl && (
              <Button
                href={product.videoUrl}
                variant="secondary"
                className="border-red-600 bg-red-600 text-white hover:bg-red-700 hover:opacity-100"
              >
                <Youtube size={18} />
                Veja o vídeo
              </Button>
            )}
          </div>
        </Container>
      </section>

      <Container className="py-14 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div>
            <CoverImage
              src={product.image}
              alt={product.name}
              category={product.category}
              seed={product.id}
              className="aspect-video w-full border border-border"
              sizes="(min-width: 1024px) 800px, 100vw"
              aspectRatio={product.imageAspectRatio}
            />

            <div className="mt-12 space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Descrição
              </p>
              <p className="leading-relaxed text-foreground/90">{product.fullDescription}</p>
            </div>

            {product.howItWorks && (
              <div className="mt-12 space-y-4 border-t border-border pt-8">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Como funciona
                </p>
                <p className="leading-relaxed text-foreground/90">{product.howItWorks}</p>
              </div>
            )}

            {product.features && product.features.length > 0 && (
              <div className="mt-12 border-t border-border pt-8">
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  <ListChecks size={14} />
                  Funcionalidades
                </p>
                <ul className="mt-4 space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-foreground/90">
                      <CheckCircle2 size={16} className="mt-1 shrink-0 text-primary" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.requirements && product.requirements.length > 0 && (
              <div className="mt-12 border-t border-border pt-8">
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  <ShieldCheck size={14} />
                  Requisitos
                </p>
                <ul className="mt-4 space-y-2">
                  {product.requirements.map((req) => (
                    <li key={req} className="text-foreground/90 leading-relaxed">
                      • {req}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.faq && product.faq.length > 0 && (
              <div className="mt-12 border-t border-border pt-8">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Perguntas frequentes
                </p>
                <div className="mt-4 divide-y divide-border">
                  {product.faq.map((item) => (
                    <div key={item.question} className="py-5 first:pt-0">
                      <p className="text-foreground">{item.question}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {product.gallery && <Gallery items={product.gallery} />}
          </div>

          <aside className="h-fit space-y-6 lg:sticky lg:top-24">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Tecnologias
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech.id}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs text-foreground"
                  >
                    <Icon name={tech.icon} size={12} className="text-muted-foreground" />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4 border-t border-border pt-6 text-sm">
              <div>
                <p className="text-muted-foreground">Plataforma</p>
                <p className="mt-1 text-foreground">{product.platform}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Licença</p>
                <p className="mt-1 text-foreground">{product.licenseType}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Status</p>
                <p className="mt-1 text-foreground">{product.status}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Preço</p>
                <p className="mt-1 text-foreground">{product.price}</p>
              </div>
            </div>

            {product.trialInfo && (
              <div className="border-t border-border pt-6">
                <p className="text-sm text-foreground">Sobre o teste</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {product.trialInfo}
                </p>
              </div>
            )}

            <WhatsAppButton
              message={createProductTrialMessage(product.name)}
              label="Solicitar teste"
              className="w-full"
            />
          </aside>
        </div>
      </Container>
    </article>
  );
}

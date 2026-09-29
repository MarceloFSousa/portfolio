import {
  BadgeCheck,
  CheckCircle2,
  KeyRound,
  ListChecks,
  MessageCircle,
  Quote,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { Product } from "@/types";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { CoverImage } from "@/components/ui/cover-image";
import { Gallery } from "@/components/ui/gallery";
import { Icon } from "@/components/ui/icon";
import { RiskDisclaimer } from "@/components/ui/risk-disclaimer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { YouTubeEmbed } from "@/components/ui/youtube-embed";
import { StickyBuyBar } from "@/components/products/sticky-buy-bar";
import { getTechnologiesByIds } from "@/lib/utils";
import { createProductPurchaseMessage, createProductQuestionMessage } from "@/lib/whatsapp";

const statusVariant: Record<Product["status"], "primary" | "default" | "accent"> = {
  Disponível: "primary",
  "Em breve": "accent",
  Descontinuado: "default",
};

const licenseTitle: Record<Product["licenseType"], string> = {
  "Licença única": "Licença única",
  Vitalícia: "Licença vitalícia",
  "Assinatura mensal": "Assinatura mensal",
};

const licenseCaption: Record<Product["licenseType"], string> = {
  "Licença única": "Pagamento único, sem mensalidade.",
  Vitalícia: "Pagamento único, sem mensalidade e sem prazo de validade.",
  "Assinatura mensal": "Cobrança mensal.",
};

/** Ex.: "Licença vitalícia · 4 contas". */
function formatLicense(product: Product): string {
  const accounts = product.licenseAccounts;
  const title = licenseTitle[product.licenseType];
  return accounts ? `${title} · ${accounts} ${accounts === 1 ? "conta" : "contas"}` : title;
}

// Âncora dos botões principais — a barra fixa do mobile aparece quando eles saem da tela.
const CTA_ID = "product-cta";

export function ProductDetails({ product }: { product: Product }) {
  const techs = getTechnologiesByIds(product.technologies);
  const purchaseMessage = createProductPurchaseMessage(product.name);

  // Garantias de compra exibidas logo abaixo dos botões principais.
  const trustItems = [
    product.guaranteeInfo && {
      icon: BadgeCheck,
      title: "Garantia de 7 dias",
      text: "Não gostou, devolvemos 100% do valor.",
    },
    {
      icon: KeyRound,
      title: formatLicense(product),
      text: licenseCaption[product.licenseType],
    },
    {
      icon: MessageCircle,
      title: "Suporte direto",
      text: "Ajuda na instalação e configuração com quem desenvolveu.",
    },
  ].filter((item) => Boolean(item)) as { icon: LucideIcon; title: string; text: string }[];

  const cover = (
    <CoverImage
      src={product.image}
      alt={product.name}
      category={product.category}
      seed={product.id}
      className="aspect-video w-full border border-border"
      sizes="(min-width: 1024px) 800px, 100vw"
      aspectRatio={product.imageAspectRatio}
    />
  );

  return (
    <article>
      <section className="border-b border-border py-14 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
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

              <p className="mt-8 font-mono text-2xl text-foreground">{product.price}</p>

              <div id={CTA_ID} className="mt-8 flex flex-wrap gap-3">
                <WhatsAppButton message={purchaseMessage} label="Comprar pelo WhatsApp" size="lg" />
                <WhatsAppButton
                  message={createProductQuestionMessage(product.name)}
                  label="Tirar dúvidas"
                  variant="secondary"
                  size="lg"
                />
              </div>

              <ul className="mt-10 grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
                {trustItems.map(({ icon: TrustIcon, title, text }) => (
                  <li key={title} className="flex items-start gap-3">
                    <TrustIcon size={18} className="mt-0.5 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm text-foreground">{title}</p>
                      <p className="mt-0.5 text-xs leading-snug text-muted-foreground">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {product.videoUrl ? (
              <YouTubeEmbed
                url={product.videoUrl}
                title={`${product.name}: demonstração`}
                className="border border-border"
              />
            ) : (
              cover
            )}
          </div>
        </Container>
      </section>

      <Container className="py-14 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div>
            <div className="space-y-4">
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

            {product.testimonials && product.testimonials.length > 0 && (
              <div className="mt-12 border-t border-border pt-8">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Quem usa
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {product.testimonials.map((item) => (
                    <figure key={item.author} className="border border-border p-5">
                      <Quote size={16} className="text-primary" />
                      <blockquote className="mt-3 text-sm leading-relaxed text-foreground/90">
                        {item.quote}
                      </blockquote>
                      <figcaption className="mt-4 text-xs text-muted-foreground">
                        {item.author}
                        {item.role && ` · ${item.role}`}
                      </figcaption>
                    </figure>
                  ))}
                </div>
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

            <RiskDisclaimer className="mt-12" />
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
                <p className="mt-1 text-foreground">{formatLicense(product)}</p>
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

            {product.guaranteeInfo && (
              <div className="border-t border-border pt-6">
                <p className="flex items-center gap-2 text-sm text-foreground">
                  <ShieldCheck size={14} className="text-primary" />
                  Garantia
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {product.guaranteeInfo}
                </p>
              </div>
            )}

            <WhatsAppButton message={purchaseMessage} label="Comprar" className="w-full" />
          </aside>
        </div>
      </Container>

      <StickyBuyBar
        name={product.name}
        price={product.price}
        message={purchaseMessage}
        watchId={CTA_ID}
      />
    </article>
  );
}

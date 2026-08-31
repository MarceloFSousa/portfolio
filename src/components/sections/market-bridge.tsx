import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function MarketBridge() {
  return (
    <section className="border-b border-border py-16 sm:py-20">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
            Mercado financeiro
          </p>
          <p className="mt-3 max-w-lg text-lg text-foreground">
            Também desenvolvo e comercializo robôs, indicadores e automações
            para traders, além de desenvolvimento sob demanda.
          </p>
        </div>
        <Button href="/mercado-financeiro" variant="outline" className="shrink-0">
          Explorar soluções
          <ArrowRight size={16} />
        </Button>
      </Container>
    </section>
  );
}

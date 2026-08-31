import { Container } from "@/components/ui/container";

export function ProductsVsServices() {
  return (
    <section className="border-b border-border py-16 sm:py-20">
      <Container>
        <div className="grid divide-y divide-border border-y border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:border-y">
          <div className="py-8 pr-0 sm:pr-10">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Produtos prontos
            </p>
            <p className="mt-3 text-lg text-foreground">Escolha uma solução existente.</p>
          </div>
          <div className="py-8 pl-0 sm:pl-10">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Desenvolvimento sob demanda
            </p>
            <p className="mt-3 text-lg text-foreground">
              Transforme sua estratégia em uma solução personalizada.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

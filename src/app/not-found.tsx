import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-20">
      <Container className="text-center">
        <p className="font-mono text-sm font-medium text-primary">Erro 404</p>
        <h1 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
          Página não encontrada
        </h1>
        <p className="mt-4 text-muted-foreground">
          O conteúdo que você procura não existe ou foi movido.
        </p>
        <Button href="/" className="mt-8">
          Voltar para o início
        </Button>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductGrid } from "@/components/products/product-grid";
import { MarketHero } from "@/components/sections/market-hero";
import { ProductsVsServices } from "@/components/sections/products-vs-services";
import { AutomationService } from "@/components/sections/automation-service";
import { getAllProducts, getProductCategories } from "@/data/products";

export const metadata: Metadata = {
  title: "Mercado Financeiro",
  description:
    "Robôs de trading, indicadores, automações e desenvolvimento personalizado para traders e investidores.",
};

export default function MercadoFinanceiroPage() {
  const products = getAllProducts();
  const categories = getProductCategories();

  return (
    <>
      <MarketHero />
      <ProductsVsServices />

      <section id="produtos" className="scroll-mt-24 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Produtos"
            title="Robôs, indicadores e automações"
            description="Soluções prontas para testar e usar. Solicite um período de teste antes de comprar."
          />

          <div className="mt-12">
            <ProductGrid products={products} categories={categories} />
          </div>
        </Container>
      </section>

      <div id="automacao" className="scroll-mt-24">
        <AutomationService />
      </div>
    </>
  );
}

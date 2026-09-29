import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductGrid } from "@/components/products/product-grid";
import { MarketHero } from "@/components/sections/market-hero";
import { ProductsVsServices } from "@/components/sections/products-vs-services";
import { AutomationService } from "@/components/sections/automation-service";
import { RiskDisclaimer } from "@/components/ui/risk-disclaimer";
import { getAllProducts, getProductCategories } from "@/data/products";

export const metadata: Metadata = {
  title: "Robôs para MetaTrader 5 e Automação de Estratégias",
  description:
    "Robôs de trading para MT5 (gradiente, hedge, rompimento, médias móveis), biblioteca NTSL para migrar do Profit e automação da sua estratégia sob medida.",
  alternates: { canonical: "/mercado-financeiro" },
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
            description="Soluções prontas para usar no MetaTrader 5, todas com garantia incondicional de 7 dias."
          />

          <div className="mt-12">
            <ProductGrid products={products} categories={categories} />
          </div>
        </Container>
      </section>

      <div id="automacao" className="scroll-mt-24">
        <AutomationService />
      </div>

      <Container className="pb-16">
        <RiskDisclaimer />
      </Container>
    </>
  );
}

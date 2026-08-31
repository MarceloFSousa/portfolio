"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/types";
import { ProductCard } from "@/components/products/product-card";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  products: Product[];
  categories: string[];
}

export function ProductGrid({ products, categories }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");

  const filtered = useMemo(() => {
    if (activeCategory === "Todos") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [products, activeCategory]);

  const filters = ["Todos", ...categories];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveCategory(filter)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === filter
                ? "border-primary/40 bg-primary/10 text-primary"
                : "border-border bg-surface text-muted-foreground hover:text-foreground"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-muted-foreground">
          Nenhum produto encontrado nessa categoria.
        </p>
      )}
    </div>
  );
}

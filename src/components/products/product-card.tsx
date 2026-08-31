import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/types";
import { Badge } from "@/components/ui/badge";
import { CoverImage } from "@/components/ui/cover-image";

const statusVariant: Record<Product["status"], "primary" | "default" | "accent"> = {
  Disponível: "primary",
  "Em breve": "accent",
  Descontinuado: "default",
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/mercado-financeiro/${product.slug}`}
      className="group flex flex-col overflow-hidden border border-border transition-colors duration-200 hover:border-primary/40 hover:bg-surface-hover"
    >
      <CoverImage
        src={product.image}
        alt={product.name}
        category={product.category}
        seed={product.id}
        className="aspect-[16/10] w-full"
        aspectRatio={product.imageAspectRatio}
      />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="primary">{product.category}</Badge>
          <Badge variant={statusVariant[product.status]}>{product.status}</Badge>
        </div>

        <h3 className="mt-4 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {product.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5 text-xs text-muted-foreground">
          <span className="rounded-md bg-muted px-2 py-1 font-mono">{product.platform}</span>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
          <span className="font-mono text-base font-semibold text-foreground">
            {product.price}
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
            Ver detalhes
            <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}

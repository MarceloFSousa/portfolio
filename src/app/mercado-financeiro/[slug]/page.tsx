import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetails } from "@/components/products/product-details";
import { JsonLd } from "@/components/seo/json-ld";
import { getAllProducts, getProductBySlug } from "@/data/products";
import { siteConfig } from "@/data/site";
import { productJsonLd } from "@/lib/structured-data";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Produto não encontrado" };
  }

  const title = product.seoTitle ?? product.name;
  const description = product.seoDescription ?? product.shortDescription;
  const url = `/mercado-financeiro/${product.slug}`;
  const images = product.image ? [product.image] : undefined;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: siteConfig.handle,
      url,
      title,
      description,
      images,
    },
    twitter: { card: "summary_large_image", title, description, images },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <JsonLd data={productJsonLd(product)} />
      <ProductDetails product={product} />
    </>
  );
}

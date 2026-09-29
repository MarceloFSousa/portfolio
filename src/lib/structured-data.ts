import type { Product } from "@/types";
import { siteConfig, socialLinks } from "@/data/site";
import { getYouTubeId, getYouTubeThumbnail } from "@/lib/youtube";

/**
 * Dados estruturados (schema.org / JSON-LD) usados pelo Google para exibir
 * preço, FAQ e vídeo direto no resultado de busca.
 */

const absoluteUrl = (path: string) => new URL(path, siteConfig.url).toString();

const availability: Record<Product["status"], string> = {
  Disponível: "https://schema.org/InStock",
  "Em breve": "https://schema.org/PreOrder",
  Descontinuado: "https://schema.org/Discontinued",
};

export function productJsonLd(product: Product) {
  const url = absoluteUrl(`/mercado-financeiro/${product.slug}`);
  const videoId = product.videoUrl ? getYouTubeId(product.videoUrl) : undefined;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Product",
      "@id": `${url}#product`,
      name: product.name,
      description: product.seoDescription ?? product.shortDescription,
      image: product.image ? [absoluteUrl(product.image)] : undefined,
      category: product.category,
      brand: { "@type": "Brand", name: siteConfig.handle },
      offers: {
        "@type": "Offer",
        url,
        price: product.priceValue.toFixed(2),
        priceCurrency: "BRL",
        availability: availability[product.status],
        seller: { "@type": "Person", name: siteConfig.fullName },
        hasMerchantReturnPolicy: {
          "@type": "MerchantReturnPolicy",
          applicableCountry: "BR",
          returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
          merchantReturnDays: 7,
          returnFees: "https://schema.org/FreeReturn",
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: absoluteUrl("/") },
        {
          "@type": "ListItem",
          position: 2,
          name: "Mercado Financeiro",
          item: absoluteUrl("/mercado-financeiro"),
        },
        { "@type": "ListItem", position: 3, name: product.name, item: url },
      ],
    },
  ];

  if (product.faq && product.faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: product.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    });
  }

  // O Google exige a data de publicação para aceitar o vídeo como rich result.
  if (videoId && product.videoUploadDate) {
    graph.push({
      "@type": "VideoObject",
      name: `${product.name}: demonstração`,
      description: product.shortDescription,
      thumbnailUrl: getYouTubeThumbnail(videoId),
      uploadDate: product.videoUploadDate,
      contentUrl: product.videoUrl,
      embedUrl: `https://www.youtube.com/embed/${videoId}`,
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}#person`,
        name: siteConfig.fullName,
        alternateName: siteConfig.handle,
        jobTitle: siteConfig.role,
        url: siteConfig.url,
        image: absoluteUrl(siteConfig.avatar),
        address: { "@type": "PostalAddress", addressLocality: siteConfig.location, addressCountry: "BR" },
        sameAs: socialLinks
          .map((link) => link.href)
          .filter((href) => href.startsWith("https://")),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}#website`,
        url: siteConfig.url,
        name: siteConfig.handle,
        inLanguage: "pt-BR",
        publisher: { "@id": `${siteConfig.url}#person` },
      },
    ],
  };
}

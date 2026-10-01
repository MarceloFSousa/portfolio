import { siteConfig, socialLinks } from "@/data/site";

/** Dados estruturados (schema.org / JSON-LD) lidos pelo Google. */

const absoluteUrl = (path: string) => new URL(path, siteConfig.url).toString();

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

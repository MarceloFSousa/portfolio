import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { getAllProjects } from "@/data/projects";
import { getAllProducts } from "@/data/products";

// Sem lastModified: gerar a data do build faria o Google achar que toda
// página mudou a cada deploy, e ele passa a ignorar o campo.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, priority: 1 },
    { url: `${siteConfig.url}/mercado-financeiro`, priority: 1 },
    { url: `${siteConfig.url}/sobre`, priority: 0.6 },
    { url: `${siteConfig.url}/projetos`, priority: 0.7 },
    { url: `${siteConfig.url}/contato`, priority: 0.5 },
  ];

  const productRoutes = getAllProducts().map((product) => ({
    url: `${siteConfig.url}/mercado-financeiro/${product.slug}`,
    priority: 0.9,
  }));

  const projectRoutes = getAllProjects().map((project) => ({
    url: `${siteConfig.url}/projetos/${project.slug}`,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...projectRoutes];
}

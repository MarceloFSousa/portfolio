import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { getAllProjects } from "@/data/projects";
import { getAllProducts } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/sobre", "/projetos", "/mercado-financeiro", "/contato"].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
    })
  );

  const projectRoutes = getAllProjects().map((project) => ({
    url: `${siteConfig.url}/projetos/${project.slug}`,
    lastModified: new Date(),
  }));

  const productRoutes = getAllProducts().map((product) => ({
    url: `${siteConfig.url}/mercado-financeiro/${product.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes, ...productRoutes];
}

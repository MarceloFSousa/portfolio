import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { getAllProjects } from "@/data/projects";

// Sem lastModified: gerar a data do build faria o Google achar que toda
// página mudou a cada deploy, e ele passa a ignorar o campo.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, priority: 1 },
    { url: `${siteConfig.url}/sobre`, priority: 0.8 },
    { url: `${siteConfig.url}/projetos`, priority: 0.9 },
    { url: `${siteConfig.url}/contato`, priority: 0.5 },
  ];

  const projectRoutes = getAllProjects().map((project) => ({
    url: `${siteConfig.url}/projetos/${project.slug}`,
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}

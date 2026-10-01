export type TechCategory =
  | "Linguagem"
  | "Frontend"
  | "Backend"
  | "Banco de Dados"
  | "DevOps"
  | "Mercado Financeiro"
  | "Ferramenta";

export interface Technology {
  id: string;
  name: string;
  icon: string; // nome do ícone (lucide-react) ou sigla exibida
  category: TechCategory;
  /** Faz parte da stack principal (usada no dia a dia). */
  core?: boolean;
}

export type ProjectCategory =
  | "Software"
  | "Web"
  | "Backend"
  | "Automação"
  | "Mercado Financeiro"
  | "Outros";

export type ProjectStatus = "Concluído" | "Em produção" | "Em desenvolvimento" | "Manutenção";

/**
 * Um item de galeria: imagem com legenda opcional (título) e descrição
 * opcional, no estilo dos anexos de mídia do LinkedIn.
 */
export interface GalleryItem {
  /** Caminho em /public (ex.: "/images/projects/meu-projeto/tela-1.jpg"). */
  src: string;
  title?: string;
  description?: string;
  /** Proporção (largura / altura) real de `src`, resolvida em tempo de execução no servidor. */
  aspectRatio?: number;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  problem?: string;
  solution?: string;
  features?: string[];
  architecture?: string;
  image?: string;
  /** Proporção (largura / altura) real de `image`, resolvida em tempo de execução no servidor. */
  imageAspectRatio?: number;
  gallery?: GalleryItem[];
  technologies: string[]; // ids de Technology
  category: ProjectCategory;
  status: ProjectStatus;
  /**
   * Repositórios do projeto: nome → URL. Use uma entrada só para um
   * repositório único (ex.: { Repositório: "..." }), ou várias quando
   * back-end e front-end são separados (ex.: { Backend: "...", Frontend: "..." }).
   * Omita o campo quando o código não for público.
   */
  github?: Record<string, string>;
  demo?: string;
  featured?: boolean;
  isExample?: boolean;
}

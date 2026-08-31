export type TechCategory =
  | "Linguagem"
  | "Frontend"
  | "Backend"
  | "Banco de Dados"
  | "DevOps"
  | "Mercado Financeiro"
  | "Ferramenta";

export type TechLevel = "Básico" | "Intermediário" | "Avançado";

export interface Technology {
  id: string;
  name: string;
  icon: string; // nome do ícone (lucide-react) ou sigla exibida
  category: TechCategory;
  level?: TechLevel;
}

export type ProjectCategory =
  | "Software"
  | "Web"
  | "Backend"
  | "Automação"
  | "Mercado Financeiro"
  | "Outros";

export type Complexity = "Básica" | "Intermediária" | "Avançada";

export type ProjectStatus = "Concluído" | "Em desenvolvimento" | "Manutenção";

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
  complexity: Complexity;
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

export type ProductCategory =
  | "Robôs de Trading"
  | "Indicadores"
  | "Automações"
  | "Ferramentas"
  | "Bibliotecas";

export type Platform =
  | "MetaTrader 5"
  | "MetaTrader 4"
  | "TradingView"
  | "Profit / NTSL"
  | "Multiplataforma";

export type ProductStatus = "Disponível" | "Em breve" | "Descontinuado";

export type LicenseType = "Licença única" | "Assinatura mensal" | "Vitalícia";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  howItWorks?: string;
  features?: string[];
  requirements?: string[];
  image?: string;
  /** Proporção (largura / altura) real de `image`, resolvida em tempo de execução no servidor. */
  imageAspectRatio?: number;
  gallery?: GalleryItem[];
  /** URL de vídeo de demonstração (YouTube, formato embed), opcional. */
  videoUrl?: string;
  category: ProductCategory;
  platform: Platform;
  technologies: string[]; // ids de Technology
  price: string;
  licenseType: LicenseType;
  status: ProductStatus;
  trialInfo?: string;
  faq?: FAQItem[];
  featured?: boolean;
  isExample?: boolean;
}

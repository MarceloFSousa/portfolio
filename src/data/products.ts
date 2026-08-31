import type { Product } from "@/types";
import { getImageAspectRatio, resolveImage } from "@/lib/media";

/**
 * Produtos de mercado financeiro (robôs, indicadores, automações, etc.).
 *
 * Para adicionar um novo produto:
 * 1. Adicione a imagem em /public/images/products/
 * 2. Adicione um novo objeto neste array com um "slug" único
 * 3. Pronto — o card, a página de detalhes e o botão de WhatsApp
 *    são gerados automaticamente a partir destes dados
 *
 * Os produtos abaixo são EXEMPLOS (isExample: true) para demonstrar o
 * funcionamento do site. Substitua pelos seus produtos reais.
 */
export const products: Product[] = [];/*
  {
    id: "robo-renko-ma200",
    slug: "robo-renko-ma200",
    name: "Robô Renko MA200",
    shortDescription:
      "Robô para operar estratégias baseadas em gráfico Renko com média móvel de 200 períodos.",
    fullDescription:
      "O Robô Renko MA200 foi desenvolvido para operar de forma automática estratégias baseadas em gráfico Renko, utilizando a média móvel de 200 períodos como filtro de tendência. Ideal para operações de tendência em ativos com boa liquidez.",
    howItWorks:
      "O robô monitora a formação dos blocos Renko e cruza a posição do preço com a média móvel de 200 períodos para identificar pontos de entrada e saída, respeitando um gerenciamento de risco configurável.",
    features: [
      "Entradas automáticas baseadas em gráfico Renko",
      "Filtro de tendência com MA200",
      "Gerenciamento de risco configurável (stop e alvo)",
      "Painel de configuração de parâmetros",
      "Compatível com múltiplos ativos",
    ],
    requirements: [
      "MetaTrader 5 instalado",
      "Conta em corretora compatível com EAs",
      "VPS recomendado para operação 24/5",
    ],
    image: "/images/products/robo-renko-ma200.jpg",
    category: "Robôs de Trading",
    platform: "MetaTrader 5",
    technologies: ["mql5"],
    price: "R$ 497,00",
    licenseType: "Licença única",
    status: "Disponível",
    trialInfo:
      "Período de teste de 7 dias em conta demo, mediante solicitação via WhatsApp.",
    faq: [
      {
        question: "O robô funciona em conta demo?",
        answer:
          "Sim, o robô pode ser testado livremente em conta demo antes da compra.",
      },
      {
        question: "Preciso de VPS para rodar o robô?",
        answer:
          "Não é obrigatório, mas é recomendado para manter o robô operando 24/5 sem interrupções.",
      },
    ],
    featured: true,
    isExample: true,
  },
  {
    id: "indicador-fluxo",
    slug: "indicador-fluxo-institucional",
    name: "Indicador de Fluxo Institucional",
    shortDescription:
      "Indicador visual para identificar movimentações de fluxo institucional no gráfico.",
    fullDescription:
      "Indicador desenvolvido para auxiliar na leitura do fluxo de ordens institucionais diretamente no gráfico, destacando regiões de maior interesse comprador ou vendedor.",
    howItWorks:
      "Processa o volume e a movimentação de preço em tempo real, plotando zonas de interesse e alertas visuais diretamente sobre o gráfico.",
    features: [
      "Identificação visual de zonas de fluxo",
      "Alertas sonoros e por push",
      "Configuração de sensibilidade",
    ],
    requirements: ["MetaTrader 5 instalado"],
    image: "/images/products/indicador-fluxo.jpg",
    category: "Indicadores",
    platform: "MetaTrader 5",
    technologies: ["mql5"],
    price: "R$ 197,00",
    licenseType: "Licença única",
    status: "Disponível",
    trialInfo: "Teste de 3 dias disponível mediante solicitação.",
    featured: true,
    isExample: true,
  },
  {
    id: "automacao-relatorios",
    slug: "automacao-de-relatorios-operacionais",
    name: "Automação de Relatórios Operacionais",
    shortDescription:
      "Automação que gera relatórios diários de performance das operações.",
    fullDescription:
      "Ferramenta que se conecta à conta do trader e gera automaticamente relatórios diários de performance, incluindo métricas de resultado, drawdown e taxa de acerto.",
    features: [
      "Geração automática de relatórios diários",
      "Métricas de performance e drawdown",
      "Envio automático por e-mail ou Telegram",
    ],
    requirements: ["MetaTrader 5 ou 4", "Conta de e-mail ou Telegram para envio"],
    image: "/images/products/automacao-relatorios.jpg",
    category: "Automações",
    platform: "MetaTrader 5",
    technologies: ["mql5", "python"],
    price: "R$ 297,00",
    licenseType: "Assinatura mensal",
    status: "Disponível",
    trialInfo: "Teste gratuito de 7 dias.",
    isExample: true,
  },
  {
    id: "biblioteca-metatrader",
    slug: "biblioteca-utilitaria-metatrader",
    name: "Biblioteca Utilitária para MetaTrader",
    shortDescription:
      "Conjunto de funções reutilizáveis em MQL5 para acelerar o desenvolvimento de robôs.",
    fullDescription:
      "Biblioteca com funções utilitárias para gerenciamento de risco, controle de posições e logging, prontas para serem incluídas em qualquer robô MQL5.",
    features: [
      "Funções de gerenciamento de risco",
      "Controle de posições multi-ativo",
      "Sistema de logging padronizado",
    ],
    requirements: ["MetaEditor / MetaTrader 5"],
    image: "/images/products/biblioteca-metatrader.jpg",
    category: "Bibliotecas",
    platform: "MetaTrader 5",
    technologies: ["mql5"],
    price: "R$ 147,00",
    licenseType: "Vitalícia",
    status: "Disponível",
    isExample: true,
  },
  {
    id: "robo-scalper-wdo",
    slug: "robo-scalper-wdo",
    name: "Robô Scalper WDO",
    shortDescription:
      "Robô de scalping para mini dólar com gestão de risco automatizada.",
    fullDescription:
      "Robô voltado para operações de scalping no mini contrato de dólar (WDO), com lógica de entrada baseada em price action e gestão de risco totalmente automatizada.",
    features: [
      "Estratégia de scalping para WDO",
      "Stop e alvo dinâmicos",
      "Controle de horário de operação",
    ],
    requirements: ["Profit Pro", "Assessoria compatível com automação"],
    image: "/images/products/robo-scalper-wdo.jpg",
    category: "Robôs de Trading",
    platform: "Profit / NTSL",
    technologies: ["ntsl"],
    price: "R$ 697,00",
    licenseType: "Licença única",
    status: "Em breve",
    isExample: true,
  },
];
*/

/**
 * Resolve os caminhos de imagem contra /public em tempo de execução no
 * servidor, para que capas ainda não enviadas caiam automaticamente no
 * fallback ilustrativo do CoverImage (evitando imagens quebradas).
 * Chame apenas a partir de Server Components.
 */
function withResolvedImages(product: Product): Product {
  const image = resolveImage(product.image);
  return {
    ...product,
    image,
    imageAspectRatio: getImageAspectRatio(image),
    gallery: product.gallery
      ?.filter((item) => Boolean(resolveImage(item.src)))
      .map((item) => ({ ...item, aspectRatio: getImageAspectRatio(item.src) })),
  };
}

export function getAllProducts(): Product[] {
  return products.map(withResolvedImages);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured).map(withResolvedImages);
}

export function getProductBySlug(slug: string): Product | undefined {
  const product = products.find((p) => p.slug === slug);
  return product ? withResolvedImages(product) : undefined;
}

export function getProductCategories(): string[] {
  return Array.from(new Set(products.map((p) => p.category)));
}

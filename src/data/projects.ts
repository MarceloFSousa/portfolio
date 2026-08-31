import type { Project } from "@/types";
import { getImageAspectRatio, resolveImage } from "@/lib/media";

/**
 * Projetos exibidos na seção/página "Projetos".
 *
 * Para adicionar um novo projeto:
 * 1. Adicione a imagem em /public/images/projects/
 * 2. Adicione um novo objeto neste array com um "slug" único
 * 3. Pronto — o card e a página de detalhes são gerados automaticamente
 *
 * Os projetos abaixo são EXEMPLOS (isExample: true) para demonstrar o
 * funcionamento do site. Substitua pelos seus projetos reais.
 */
export const projects: Project[] = [
  {
    id: "everhedge",
    slug: "everhedge",
    title: "EverHedge",
    summary:
      "SaaS de radar de estruturas de opções, com varredura em tempo real e mais de 860 usuários em produção.",
    description:
      "SaaS de screening de opções financeiras com varredura em tempo real. Nasceu de uma dor real do dia a dia operando opções: encontrar opções longas com liquidez suficiente para montar estruturas era um processo manual, lento e cheio de comparação de strikes. Começou como um script em Python no terminal e evoluiu, em conjunto com o Nelson Ferreira Sobrinho, para uma plataforma web completa que identifica e monta estruturas completas de opções automaticamente.",
    problem:
      "Não existia uma ferramenta que organizasse de forma objetiva a busca por opções longas com liquidez para montar estruturas como TERF: o processo era manual e cheio de comparação de strikes.",
    solution:
      "Um radar que automatiza a busca e montagem de estruturas de opções, hoje cobrindo Call longa, Put longa, THL, TERF, Trava de arranque, Calendar Butterfly, Booster, SBTH sintético e TERF sintética.",
    features: [
      "Radar para Call longa, Put longa, THL, TERF, Trava de arranque, Calendar Butterfly, Booster, SBTH sintético e TERF sintética",
      "Arquitetura multi-serviço containerizada, do zero ao deploy em produção",
      "Em produção com mais de 860 usuários cadastrados",
      "Processamento de 7 tipos de estrutura em varreduras 5 vezes ao dia",
      "Cálculo automatizado de delta, gamma e risco/retorno",
      "Atualização ao vivo via polling e WebSocket",
    ],
    architecture:
      "Backend em Python com a lógica que monta e valida as estruturas, API em .NET, frontend em Next.js, banco via Supabase e deploy em VPS Ubuntu.",
    image: "/images/projects/everhedge.jpg",
    gallery: [
      {
        src: "/images/projects/everhedge/api-dotnet.jpg",
        title: "API",
        description: "API REST com .NET.",
      },
      {
        src: "/images/projects/everhedge/backend-python.jpg",
        title: "Backend Python",
        description: "Parte do radar código em Python.",
      },
      {
        src: "/images/projects/everhedge/tela-login.jpg",
        title: "Tela de Login",
        description: "Tela de login para acessar o site.",
      },
    ],
    technologies: ["python", "csharp", "dotnet", "nextjs", "supabase", "docker", "linux", "nginx"],
    category: "Mercado Financeiro",
    complexity: "Avançada",
    status: "Concluído",
    demo: "https://app.everhedge.com.br",
    featured: true,
  },
  {
    id: "agentflow",
    slug: "agentflow",
    title: "AgentFlow",
    summary:
      "Plataforma de análise de fluxo e execução de ordens em tempo real, com dados de agente da B3 inacessíveis via MQL5 ou NTSL.",
    description:
      "Plataforma que recebe e processa as negociações por agente da B3 em tempo real: um dado que existe no MetaTrader 5 e no ProfitChart, mas não é acessível para tratamento livre via código em MQL5 (só é possível receber os trades, sem o nome do agente) ou NTSL. Além da leitura, o sistema também executa ordens diretamente via ProfitDLL.",
    problem:
      "O dado de negociação por agente da B3 existe no MetaTrader 5 e no ProfitChart, mas não é acessível para tratamento livre via código: no MQL5 só é possível receber os trades sem o nome do agente, e no NTSL o acesso é igualmente limitado.",
    solution:
      "Conexão direta via ProfitDLL para capturar cada negócio do pregão (comprador, vendedor, agressor, preço e quantidade), com execução de ordens embutida e API de sinais para robôs consumirem as decisões.",
    features: [
      "Captura de cada negócio do pregão via ProfitDLL (comprador, vendedor, agressor, preço e quantidade)",
      "Persistência de ticks em PostgreSQL para backtest",
      "Acumuladores em memória com saldo de volume agressivo e passivo por corretora",
      "Snapshots em tempo real transmitidos ao frontend via SSE",
      "Execução de ordens (compra, venda, zeragem, cancelamento) direto pela DLL, com take profit e stop loss automáticos",
      "OCO implementado no backend, já que a DLL não vincula ordens nativamente",
      "API de sinais para robôs no MetaTrader 5, com estratégias de decisão plugáveis via injeção de dependência",
      "Reconstrução de estado após queda de conexão a partir do último snapshot, sem buraco nos dados",
    ],
    architecture:
      "Workers de background que se comunicam por channels: se o banco atrasa, só a persistência espera e a análise segue sem travar. Ticks ao vivo que chegam antes do histórico terminar ficam em buffer e são liberados em ordem depois, evitando corromper o acumulado.",
    image: "/images/projects/agentflow.jpg",
    gallery: [
      {
        src: "/images/projects/agentflow/fluxograma.jpg",
        title: "Fluxograma da arquitetura",
        description:
          "Fluxo de dados desde a DLL até o frontend, passando pelas camadas de domínio, aplicação e web.",
      },
      {
        src: "/images/projects/agentflow/comparacao-valores-profit.jpg",
        title: "Comparação com o Profit",
        description:
          "Saldo por corretora capturado pelo AgentFlow ao lado do ranking de agentes exibido no Profit, validando os números captados via ProfitDLL.",
      },
      {
        src: "/images/projects/agentflow/codigo-back.jpg",
        title: "Código do backend",
        description:
          "Interface ITradeBusiness em C#, com os contratos de conexão, execução de ordens e assinatura de ativos.",
      },
    ],
    technologies: ["csharp", "dotnet", "nextjs", "postgresql", "sse","rest-api"],
    category: "Mercado Financeiro",
    complexity: "Avançada",
    status: "Concluído",
    featured: true,
  },
  {
    id: "do-tog",
    slug: "do-tog",
    title: "Do-Tog",
    summary:
      "App colaborativo de listas compartilhadas em tempo real, com acesso por chave, sem cadastro e sem login.",
    description:
      "O projeto nasceu de um problema relativamente bobo: recomendações de filme e série se perdiam no meio de conversas e, na hora de escolher, ninguém achava nada. Dava pra resolver com Trello ou um grupo no WhatsApp, mas aí não teria graça nem aprendizado, então construí uma aplicação onde é possível montar listas do que fazer com outra pessoa (\"Assistir\", \"Visitar\", \"Experimentar\") e compartilhar usando só uma chave de acesso, sem cadastro e sem login.",
    problem:
      "Indicações trocadas em conversas informais somem no meio do resto, e ferramentas genéricas como Trello resolveriam, mas sem graça nem aprendizado.",
    solution:
      "Listas compartilhadas por uma chave de acesso conhecida só pelos participantes: quem usa a mesma chave acessa a mesma lista. Cada item tem progresso, descrição e prazo, facilitando acompanhar o que já foi feito e o que está pendente.",
    features: [
      "Compartilhamento por chave de acesso, sem cadastro nem login",
      "Progresso, descrição e prazo por item da lista",
      "Sincronização de estado em tempo real entre múltiplos usuários via Supabase Realtime",
      "Backend modular em NestJS (autenticação, listas, sincronização em tempo real)",
    ],
    architecture:
      "Backend em NestJS (Node.js + TypeScript), frontend em Next.js + Tailwind CSS e banco PostgreSQL via Supabase, mapeado com TypeORM.",
    image: "/images/projects/do-tog.jpg",
    gallery: [
      {
        src: "/images/projects/do-tog/api-nest.jpg",
        title: "API",
        description: "API REST com NESTJS.",
      },
      {
        src: "/images/projects/do-tog/codigo-front.jpg",
        title: "Código Frontend",
        description: "Parte do código do front.",
      },
      {
        src: "/images/projects/do-tog/tela-login.jpg",
        title: "Tela de Login",
        description: "Tela de login para acessar o site.",
      },
    ],
    technologies: ["typescript", "nextjs", "nestjs", "supabase","rest-api","vercel"],
    category: "Web",
    complexity: "Intermediária",
    status: "Concluído",
    demo: "https://do-tog.com.br",
    github: {
      Backend: "https://github.com/MarceloFSousa/dotog-back",
      Frontend: "https://github.com/MarceloFSousa/dotog-front",
    },
    featured: true,
  },
];

/**
 * Resolve os caminhos de imagem contra /public em tempo de execução no
 * servidor, para que capas ainda não enviadas caiam automaticamente no
 * fallback ilustrativo do CoverImage (evitando imagens quebradas).
 * Chame apenas a partir de Server Components.
 */
function withResolvedImages(project: Project): Project {
  const image = resolveImage(project.image);
  return {
    ...project,
    image,
    imageAspectRatio: getImageAspectRatio(image),
    gallery: project.gallery
      ?.filter((item) => Boolean(resolveImage(item.src)))
      .map((item) => ({ ...item, aspectRatio: getImageAspectRatio(item.src) })),
  };
}

export function getAllProjects(): Project[] {
  return projects.map(withResolvedImages);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).map(withResolvedImages);
}

export function getProjectBySlug(slug: string): Project | undefined {
  const project = projects.find((p) => p.slug === slug);
  return project ? withResolvedImages(project) : undefined;
}

export function getProjectCategories(): string[] {
  return Array.from(new Set(projects.map((p) => p.category)));
}

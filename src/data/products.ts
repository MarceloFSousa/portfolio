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
export const products: Product[] = [
  {
    id: "gradiente-manual",
    slug: "gradiente-manual",
    name: "Gradiente Manual",
    shortDescription:
      "Você entra pelo atalho de teclado, apregoada ou a mercado, e o robô conduz o gradiente até a meta.",
    fullDescription:
      "O Gradiente Manual junta a leitura do trader com a disciplina do robô. Você envia a ordem por atalho de teclado, apregoada ou a mercado, e ele monta a posição em partes, com entradas escalonadas em níveis de preço, respeitando alvo, stop e meta financeira. É o robô mais usado da loja e serve para qualquer trader que opera no MetaTrader 5, sem precisar programar.",
    howItWorks:
      "Você envia a ordem pelo atalho de teclado, apregoada no preço que escolher ou a mercado. A partir daí o robô distribui as próximas entradas nos níveis de preço definidos nos parâmetros e conduz a saída conforme o alvo, o stop e a meta financeira configurados.",
    features: [
      "Entradas escalonadas em níveis de preço",
      "Alvo e stop configuráveis",
      "Meta financeira",
      "Número mágico configurável para rodar junto com outros robôs",
      "Ordem apregoada ou a mercado por atalho de teclado",
    ],
    requirements: ["MetaTrader 5 instalado", "Conta em corretora com MT5"],
    image: "/images/products/gradiente-manual.png",
    videoUrl: "https://www.youtube.com/watch?v=YDTQ-25rL84",
    category: "Robôs de Trading",
    platform: "MetaTrader 5",
    technologies: ["mql5"],
    price: "R$ 750,00",
    licenseType: "Licença única",
    status: "Disponível",
    trialInfo: "Garantia de 7 dias: não gostou, devolvemos o valor.",
    faq: [
      {
        question: "Preciso saber programar para usar?",
        answer: "Não. Basta instalar no MetaTrader 5 e ajustar os parâmetros.",
      },
      {
        question: "Qual o principal risco da estratégia?",
        answer:
          "Como o gradiente adiciona posições quando o preço anda contra, a exposição aumenta em movimentos longos. Por isso é importante dimensionar bem os níveis e o lote. Teste antes em conta demo.",
      },
    ],
    featured: true,
  },
  {
    id: "gradiente-hedge",
    slug: "gradiente-hedge",
    name: "Gradiente Hedge",
    shortDescription: "Gradiente comprado e vendido ao mesmo tempo, feito para mercado lateral.",
    fullDescription:
      "O Gradiente Hedge usa a mesma base do Gradiente Manual, mas opera nas duas pontas ao mesmo tempo: compra e venda. Em mercado lateral, as duas pontas conseguem realizar lucro nas oscilações, o que faz o resultado ser bem maior que o de um gradiente de uma direção só.",
    howItWorks:
      "O robô monta gradientes de compra e de venda simultaneamente. Cada oscilação dentro da faixa de preço gera oportunidade de saída com lucro em uma das pontas.",
    features: [
      "Gradiente de compra e venda simultâneos",
      "Otimizado para mercado lateral",
      "Alvo e stop configuráveis",
      "Meta financeira",
      "Número mágico configurável",
    ],
    requirements: [
      "MetaTrader 5 instalado",
      "Conta em modo hedge (permite posições compradas e vendidas no mesmo ativo)",
    ],
    image: "/images/products/gradiente-hedge.png",
    videoUrl: "https://www.youtube.com/watch?v=67s8ZkiIq24",
    category: "Robôs de Trading",
    platform: "MetaTrader 5",
    technologies: ["mql5"],
    price: "R$ 500,00",
    licenseType: "Licença única",
    status: "Disponível",
    trialInfo: "Garantia de 7 dias: não gostou, devolvemos o valor.",
    faq: [
      {
        question: "Qual o principal risco?",
        answer:
          "Um movimento forte e direcional, para qualquer lado. Nesse cenário uma das pontas acumula prejuízo. O robô rende mais em lateralidade e sofre em tendência forte.",
      },
      {
        question: "Qual a diferença para o Gradiente Manual?",
        answer:
          "O Gradiente Manual opera uma direção por vez. O Hedge opera as duas ao mesmo tempo, ganhando mais na lateralidade em troca de mais risco em tendência.",
      },
    ],
    featured: false,
  },
  {
    id: "biblioteca-ntsl",
    slug: "biblioteca-ntsl",
    name: "Biblioteca NTSL para MT5",
    shortDescription: "Use as funções do Profit dentro do MetaTrader 5 e migre suas estratégias sem reescrever tudo.",
    fullDescription:
      "Quem vem do Profit já conhece funções como BuyAtMarket, HasPosition e IsBought. A Biblioteca NTSL traz esses mesmos nomes para o MQL5, então a lógica da sua estratégia continua praticamente igual na migração para o MetaTrader 5. Menos código, menos erro e menos tempo reescrevendo do zero.",
    howItWorks:
      "Você importa a biblioteca no seu robô MQL5 e passa a chamar as funções com a mesma sintaxe do NTSL. A biblioteca traduz cada chamada para as operações equivalentes do MT5.",
    features: [
      "Funções com os mesmos nomes do Profit (BuyAtMarket, SellAtMarket, BuyStop, HasPosition, IsBought, SetStopLoss e outras)",
      "Código da estratégia muito mais curto que em MQL5 puro",
      "Migração de estratégias do Profit para o MT5 sem reescrever a lógica",
      "Header de importação pronto para usar",
    ],
    requirements: [
      "MetaTrader 5 instalado",
      "MetaEditor (vem junto com o MT5)",
      "Noções básicas de programação de robôs",
    ],
    image: "/images/products/biblioteca-ntsl.png",
    videoUrl: "https://www.youtube.com/watch?v=W4zK_DMiLYw",
    category: "Bibliotecas",
    platform: "MetaTrader 5",
    technologies: ["mql5", "ntsl"],
    price: "R$ 200,00",
    licenseType: "Licença única",
    status: "Disponível",
    trialInfo: "Garantia de 7 dias: não gostou, devolvemos o valor.",
    faq: [
      {
        question: "Para quem é a biblioteca?",
        answer:
          "Para quem já programa ou tem estratégias no Profit e quer levar para o MetaTrader 5 sem aprender MQL5 do zero.",
      },
      {
        question: "Preciso saber MQL5?",
        answer:
          "Pouco. A estrutura do robô é MQL5, mas a lógica de entrada, saída e posição fica com a sintaxe que você já conhece do Profit.",
      },
    ],
    featured: true,
  },
  {
    id: "notificacao-telegram",
    slug: "notificacao-telegram",
    name: "Notificações no Telegram",
    shortDescription: "Receba no Telegram cada ordem dos seus robôs e o resumo de resultado por estratégia.",
    fullDescription:
      "Acompanhe seus robôs sem ficar olhando o MetaTrader 5. Toda ordem enviada por qualquer robô na conta vira uma mensagem no Telegram. Além disso, você recebe resumos diário, semanal e mensal separados por número mágico, ou seja, o resultado de cada estratégia individualmente.",
    howItWorks:
      "O EA roda em um gráfico do MT5 monitorando a conta. Quando um robô envia uma ordem, ele manda a notificação para o seu bot do Telegram. Nos fechamentos de dia, semana e mês, envia o resumo agrupado por número mágico.",
    features: [
      "Notificação de ordens de qualquer robô da conta, inclusive de terceiros",
      "Resumo diário, semanal e mensal",
      "Resultado separado por número mágico (por estratégia)",
      "Não interfere na operação dos outros robôs",
    ],
    requirements: [
      "MetaTrader 5 instalado",
      "Conta no Telegram e um bot criado pelo BotFather",
      "Permitir WebRequest para api.telegram.org nas opções do MT5",
    ],
    image: "/images/products/notificacao-telegram.png",
    videoUrl: "https://www.youtube.com/watch?v=B6l9ydntGwg",
    category: "Automações",
    platform: "MetaTrader 5",
    technologies: ["mql5", "telegram"],
    price: "R$ 250,00",
    licenseType: "Licença única",
    status: "Disponível",
    trialInfo: "Garantia de 7 dias: não gostou, devolvemos o valor.",
    faq: [
      {
        question: "Funciona com robôs que não são seus?",
        answer: "Sim. Ele monitora as ordens da conta, independente de qual robô enviou.",
      },
      {
        question: "Preciso deixar o MT5 aberto?",
        answer: "Sim. O EA precisa estar rodando para enviar as notificações, como qualquer robô.",
      },
    ],
    featured: false,
  },
  {
    id: "turtle",
    slug: "turtle",
    name: "Turtle",
    shortDescription: "Robô de rompimento baseado na estratégia dos Turtle Traders.",
    fullDescription:
      "O Turtle automatiza a estratégia clássica dos Turtle Traders: entra quando o preço rompe a máxima de um período, buscando pegar o início de uma tendência. Foi testado em backtest em diversos ativos, com os resultados apresentados em vídeo no canal.",
    howItWorks:
      "O robô acompanha a máxima dos últimos candles. Quando o preço rompe esse nível, ele entra a favor do rompimento e conduz a posição conforme os parâmetros de saída.",
    features: [
      "Entrada no rompimento de máxima",
      "Estratégia seguidora de tendência",
      "Backtest em diversos ativos",
      "Número mágico configurável",
    ],
    requirements: ["MetaTrader 5 instalado", "Conta em corretora com MT5"],
    image: "/images/products/turtle.png",
    videoUrl: "https://www.youtube.com/watch?v=rQkV7eOKlBY",
    category: "Robôs de Trading",
    platform: "MetaTrader 5",
    technologies: ["mql5"],
    price: "R$ 400,00",
    licenseType: "Licença única",
    status: "Disponível",
    trialInfo: "Garantia de 7 dias: não gostou, devolvemos o valor.",
    faq: [
      {
        question: "Em que tipo de mercado ele funciona melhor?",
        answer:
          "Em tendência. Para mercado lateral os rompimentos falham com mais frequência, nesse cenário existe o Rabbit, que opera o oposto.",
      },
      {
        question: "Backtest garante resultado?",
        answer:
          "Não. Backtest mostra como a estratégia se comportou no passado e ajuda a entender o risco, mas não garante resultado futuro.",
      },
    ],
    featured: false,
  },
  {
    id: "rabbit",
    slug: "rabbit",
    name: "Rabbit",
    shortDescription: "O oposto do Turtle: opera contra o rompimento, apostando no retorno do preço.",
    fullDescription:
      "O Rabbit nasceu do Turtle, mas opera o contrário. Quando o preço rompe a máxima, em vez de seguir o movimento, ele aposta que o rompimento vai falhar e o preço vai voltar. Rende mais em mercado lateral, justamente onde o Turtle sofre. Também foi testado em backtest em diversos ativos, com vídeo no canal.",
    howItWorks:
      "O robô identifica o mesmo rompimento que o Turtle, mas entra na direção contrária, buscando o retorno do preço para dentro da faixa.",
    features: [
      "Entrada contra o rompimento",
      "Estratégia de reversão para mercado lateral",
      "Backtest em diversos ativos",
      "Complementa o Turtle em outro regime de mercado",
      "Número mágico configurável",
    ],
    requirements: ["MetaTrader 5 instalado", "Conta em corretora com MT5"],
    image: "/images/products/rabbit.png",
    videoUrl: "https://www.youtube.com/watch?v=Zo0k75zjQfM",
    category: "Robôs de Trading",
    platform: "MetaTrader 5",
    technologies: ["mql5"],
    price: "R$ 400,00",
    licenseType: "Licença única",
    status: "Disponível",
    trialInfo: "Garantia de 7 dias: não gostou, devolvemos o valor.",
    faq: [
      {
        question: "Posso rodar junto com o Turtle?",
        answer:
          "Sim. Como cada um rende melhor em um regime de mercado, rodar os dois com números mágicos diferentes ajuda a equilibrar a curva de resultado.",
      },
      {
        question: "Qual o principal risco?",
        answer:
          "Tendência forte. Quando o rompimento se confirma e o preço segue andando, a entrada contrária fica no prejuízo.",
      },
    ],
    featured: false,
  },
  {
    id: "sma",
    slug: "sma",
    name: "SMA",
    shortDescription: "Robô de tendência por médias móveis: acima das médias compra, abaixo vende.",
    fullDescription:
      "O SMA é um seguidor de tendência simples e objetivo. Quando o preço está acima das médias móveis, ele fica comprado. Quando está abaixo, fica vendido. Foi testado em backtest em diversos ativos.",
    howItWorks:
      "O robô compara o preço com as médias móveis configuradas. A posição acompanha o lado em que o preço está em relação às médias.",
    features: [
      "Compra acima das médias e vende abaixo",
      "Períodos das médias configuráveis",
      "Backtest em diversos ativos",
      "Número mágico configurável",
    ],
    requirements: ["MetaTrader 5 instalado", "Conta em corretora com MT5"],
    image: "/images/products/sma.png",
    videoUrl: "https://www.youtube.com/watch?v=_eUF-pMI4Pk",
    category: "Robôs de Trading",
    platform: "MetaTrader 5",
    technologies: ["mql5"],
    price: "R$ 400,00",
    licenseType: "Licença única",
    status: "Disponível",
    trialInfo: "Garantia de 7 dias: não gostou, devolvemos o valor.",
    faq: [
      {
        question: "Em que tipo de mercado ele funciona melhor?",
        answer: "Em tendência. Em mercado lateral o preço cruza as médias com frequência e gera entradas falsas.",
      },
      {
        question: "Backtest garante resultado?",
        answer: "Não. Mostra o comportamento passado e ajuda a entender o risco, mas não garante resultado futuro.",
      },
    ],
    featured: false,
  },
];

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

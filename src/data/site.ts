/**
 * Todas as informações pessoais, de contato e textos institucionais do site
 * ficam centralizadas aqui. Edite este arquivo para atualizar o site inteiro
 * sem tocar em nenhum componente.
 */

export const siteConfig = {
  // Handle usado como identidade pública do site (navbar, Hero, título das
  // páginas, footer) — o mesmo de YouTube, LinkedIn, GitHub e domínio.
  handle: "MarceloFSousa",
  // Nome completo, exibido só na página /sobre.
  fullName: "Marcelo Flores Sousa",
  role: "Desenvolvedor Backend / Full Stack",
  tagline:
    "Desenvolvedor Backend e Full Stack especializado em sistemas de alta performance, tempo real e baixa latência. Da API REST ao robô de trading, construo software que não pode falhar, com a disciplina de engenharia que o mercado financeiro exige.",
  location: "Porto Alegre, RS",

  // URL pública do site (usada em metadata/SEO/Open Graph)
  url: "https://marcelofsousa.com.br",

  // Foto de perfil, usada na Hero e em "Sobre mim". Basta colocar o arquivo
  // em /public/images/profile/ com este nome — nenhum componente precisa mudar.
  avatar: "/images/profile/marcelo.jpg",

  email: "omarcelo.0101@gmail.com",
  phone: "+55 51 99694-6128",

  // Número usado para gerar links do WhatsApp (formato internacional, somente dígitos)
  whatsapp: "5551996946128",

  linkedin: "https://www.linkedin.com/in/marcelofsousa",

  // Username do GitHub — usado na seção GitHub e para consultar a API pública
  githubUsername: "MarceloFSousa",

  // Canal do YouTube — usado na seção de contato e em socialLinks
  youtube: "https://www.youtube.com/@Marcelo_FSousa",

  bio: [
    "Sou desenvolvedor Backend / Full Stack com 4+ anos entregando APIs REST de alta disponibilidade, sistemas em tempo real e produtos SaaS do zero à produção. Stack principal em .NET (C#) e Python no backend, com Next.js e React no frontend.",
    "Provei isso no mercado financeiro, o ambiente mais implacável para software em tempo real, onde milissegundo e integridade de dado não perdoam. Construí a EverHedge, plataforma de radar de opções hoje em produção com mais de 860 usuários, e robôs de trading algorítmico em C#, Python, MQL5 e NTSL que tratam cotações tick a tick com baixa latência de ponta a ponta.",
    "Uno arquitetura sólida (Clean Architecture, SOLID, DDD) com performance real: reduzi uma execução crítica de 8 minutos para 40 segundos e construí um worker que persiste 4,5 milhões de valores por dia sem impactar o backend. Essa disciplina vale em qualquer domínio, não só no mercado financeiro.",
  ],

  experience: [
    {
    period: "Jun/2023 - atual",
    title: "Desenvolvedor Pleno Full Stack na Mandacaru Tech",
    description:
      "Desenvolvo e mantenho APIs REST em C# e ASP.NET Core integrando sistemas internos e externos, com arquitetura desacoplada (SOLID + injeção de dependência): nova integração entra trocando só a implementação, sem alterar regra de negócio. Reduzi uma execução crítica de 8 minutos para 40 segundos com cache em memória e desenvolvi um worker que persiste 4,5 milhões de valores por dia sem impactar o tempo de resposta do backend. Implantei testes automatizados com xUnit e containerizei a aplicação com Docker e Docker Compose.",
  },
    {
  period: "Jun/2022 - atual",
  title: "Desenvolvedor Full Stack, Freelance",
  description:
    "Desenvolvo aplicações web e APIs sob demanda de ponta a ponta, com .NET, Node.js, NestJS e Next.js, da concepção ao deploy em produção. Projetos variam de apps colaborativos em tempo real a integrações e automações. No mercado financeiro, construí robôs de trading algorítmico em C#, Python, MQL5 e NTSL que consomem cotações tick a tick e executam operações com baixa latência de ponta a ponta (117 clientes atendidos em NTSL), além de plataformas de trading em tempo real e pipelines de backtesting com métricas de risco.",
},
  ],

  interests: [
    "Sistemas em Tempo Real",
    "Alta Performance e Baixa Latência",
    "Arquitetura de Software",
    "Mercado Financeiro",
    "Trading Algorítmico",
    "Automação de Processos",
  ],

  // Textos de apoio usados em seções da Home
  hero: {
    badge: "Disponível para novos projetos e oportunidades",
    ctaPrimary: "Ver projetos",
    ctaSecondary: "Falar comigo",
  },

  // Hero da página /mercado-financeiro
  marketHero: {
    title: "Soluções para mercado financeiro",
    subtitle:
      "Robôs, indicadores, automações e desenvolvimento personalizado para transformar estratégias em software.",
    ctaPrimary: "Ver produtos",
    ctaSecondary: "Solicitar automação",
  },

  // Seção "Automação sob demanda"
  automationService: {
    title: "Sua estratégia. Seu sistema.",
    description:
      "Você tem uma estratégia que funciona no manual, mas executar na mão toma tempo e deixa passar oportunidade. Eu transformo essa estratégia em um robô que opera sozinho, seguindo exatamente as suas regras. Já entreguei automação para mais de 100 traders, de robôs de execução a indicadores e ferramentas sob medida.",
    steps: [
      {
        number: "01",
        title: "Entendo sua estratégia",
        description:
          "Conversamos sobre suas regras de entrada, saída e gestão de risco até eu entender a lógica como você opera.",
      },
      {
        number: "02",
        title: "Defino regras e escopo",
        description:
          "Documento cada condição e alinho com você o que o sistema faz antes de escrever a primeira linha.",
      },
      {
        number: "03",
        title: "Desenvolvo",
        description: "Construo o robô ou indicador na sua plataforma, com código limpo e ajustável.",
      },
      {
        number: "04",
        title: "Testo em dados reais",
        description:
          "Valido em histórico e simulação pra garantir que ele faz o que a estratégia manda, sem surpresa.",
      },
      {
        number: "05",
        title: "Entrego e dou suporte",
        description:
          "Você recebe pronto pra usar, com acompanhamento pra ajuste fino depois da entrega.",
      },
    ],
    cta: "Solicitar orçamento",
  },

  recruiterNote:
    "Disponível para vagas de Desenvolvedor Backend ou Full Stack Pleno, remoto (CLT ou PJ). PCD, elegível para cota legal (Lei 8.213/91).",

  whatsappDefaultMessage:
    "Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.",

  whatsappAutomationMessage:
    "Olá! Tenho uma estratégia de trading e gostaria de solicitar um orçamento para desenvolver uma automação personalizada.",
} as const;

export const socialLinks = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    description: "Fale comigo diretamente",
    value: "Entrar em contato",
    href: "whatsapp", // resolvido dinamicamente com createWhatsAppLink()
    icon: "MessageCircle",
  },
  {
    id: "email",
    name: "E-mail",
    description: "Para propostas e contato formal",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: "Mail",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    description: "Minha trajetória profissional",
    value: "Meu perfil",
    href: siteConfig.linkedin,
    icon: "Linkedin",
  },
  {
    id: "github",
    name: "GitHub",
    description: "Meus repositórios e código aberto",
    value: `github.com/${siteConfig.githubUsername}`,
    href: `https://github.com/${siteConfig.githubUsername}`,
    icon: "Github",
  },
  {
    id: "youtube",
    name: "YouTube",
    description: "Vídeos e demonstrações dos produtos",
    value: "Meu canal",
    href: siteConfig.youtube,
    icon: "Youtube",
  },
] as const;

export type SocialLink = (typeof socialLinks)[number];
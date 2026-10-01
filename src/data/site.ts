/**
 * Todas as informações pessoais, de contato e textos institucionais do site
 * ficam centralizadas aqui. Edite este arquivo para atualizar o site inteiro
 * sem tocar em nenhum componente.
 */

export const siteConfig = {
  // Handle usado como identidade pública do site (navbar, Hero, título das
  // páginas, footer) — o mesmo de YouTube, LinkedIn, GitHub e domínio.
  handle: "MarceloFSousa",
  // Nome completo, exibido na Hero e na página /sobre.
  fullName: "Marcelo Flores Sousa",
  role: "Desenvolvedor Backend / Full Stack Pleno",
  tagline:
    "Construo APIs REST de alta disponibilidade, sistemas em tempo real e produtos SaaS do zero à produção, com .NET e Python no backend e Next.js no frontend.",
  location: "Porto Alegre, RS",

  // URL pública do site (usada em metadata/SEO/Open Graph)
  url: "https://marcelofsousa.com.br",

  // Foto de perfil, usada na Hero e em "Sobre mim". Basta colocar o arquivo
  // em /public/images/profile/ com este nome — nenhum componente precisa mudar.
  avatar: "/images/profile/marcelo.jpg",

  // Currículo em PDF. Coloque o arquivo em /public com este nome e os botões
  // "Baixar CV" aparecem sozinhos; sem o arquivo, o botão vira "LinkedIn".
  cvPath: "/cv-marcelo-flores-sousa.pdf",

  email: "omarcelo.0101@gmail.com",
  phone: "+55 51 99694-6128",

  // Número usado para gerar links do WhatsApp (formato internacional, somente dígitos)
  whatsapp: "5551996946128",

  linkedin: "https://www.linkedin.com/in/marcelofsousa",

  telegram: "https://t.me/MarceloFSousa",

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
  title: "Desenvolvedor Full Stack, Freelance (em paralelo)",
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
    badge: "Disponível para vagas · Remoto · CLT ou PJ",
    // Linha de triagem: stack principal, tempo de experiência e modelo de trabalho
    facts: ["C# / .NET", "Python", "Next.js", "4+ anos", "Remoto"],
    ctaPrimary: "Ver projetos",
    ctaCv: "Baixar CV",
    ctaLinkedin: "LinkedIn",
  },

  // Resultados em números, exibidos logo abaixo da Hero
  highlights: [
    { value: "8 min → 40 s", label: "Execução crítica otimizada com cache em memória" },
    { value: "4,5 mi/dia", label: "Valores persistidos por um worker, sem impactar o backend" },
    { value: "860+", label: "Usuários na EverHedge, SaaS em produção" },
    { value: "117", label: "Clientes atendidos com robôs de trading em NTSL" },
  ],

  // Chamada final da Home
  contactCtaTitle: "Procurando um desenvolvedor Backend ou Full Stack? Vamos conversar.",

  recruiterNote:
    "Disponível para vagas de Desenvolvedor Backend ou Full Stack Pleno, remoto (CLT ou PJ). PCD, elegível para cota legal (Lei 8.213/91).",

  whatsappDefaultMessage:
    "Olá, Marcelo! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.",
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
    id: "telegram",
    name: "Telegram",
    description: "Fale comigo diretamente",
    value: "@MarceloFSousa",
    href: siteConfig.telegram,
    icon: "Send",
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
    description: "Vídeos sobre desenvolvimento e trading algorítmico",
    value: "Meu canal",
    href: siteConfig.youtube,
    icon: "Youtube",
  },
] as const;

export type SocialLink = (typeof socialLinks)[number];
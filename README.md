# Portfólio — Marcelo Sousa

Portfólio pessoal + vitrine de soluções para mercado financeiro, construído em
Next.js (App Router) com TypeScript e Tailwind CSS. Este documento explica
**como o projeto está organizado** para que mudanças futuras — trocar textos,
adicionar projetos/produtos, ajustar cores — sejam feitas sem precisar mexer
nos componentes.

---

## Stack

- **Next.js 16** (App Router) + **TypeScript** + **Tailwind CSS**
- **lucide-react** para ícones
- Fontes via `next/font/google`: Inter (UI), Manrope (títulos, peso leve), JetBrains Mono (mono)
- Sem banco de dados/CMS — todo o conteúdo vive em arquivos `.ts` em `src/data/`

---

## Rodando localmente

```bash
npm install
npm run dev       # http://localhost:3000
npm run typecheck # checagem de tipos
npm run lint      # ESLint
npm run build     # build de produção
npm run start     # roda o build de produção
```

---

## Princípio central: dados separados de componentes

**Nenhum componente contém texto, preço, link ou nome "chumbado" no código.**
Tudo isso vive em `src/data/*.ts`. Os componentes só sabem *como exibir* um
projeto/produto/tecnologia — não *quais* existem. Isso significa que, para
90% das mudanças do dia a dia, você só vai editar um objeto em um desses
quatro arquivos:

```
src/data/
├── site.ts          → identidade, contato, textos institucionais
├── projects.ts       → projetos do portfólio
├── products.ts       → robôs/indicadores/automações do mercado financeiro
└── technologies.ts    → lista de tecnologias exibida na seção "Tecnologias"
```

---

## `src/data/site.ts` — identidade e textos

Um único objeto `siteConfig` com tudo que é "sobre você":

| Campo | Onde aparece |
|---|---|
| `name`, `fullName`, `role`, `tagline` | Navbar, Hero, `<title>`, metadata |
| `avatar` | Foto na Hero e em "Sobre mim" (veja seção de imagens abaixo) |
| `email`, `phone`, `linkedin`, `githubUsername`, `youtube` | Footer, seção Contato, link do GitHub/YouTube |
| `whatsapp` | Número usado em **todos** os links de WhatsApp do site |
| `bio[]`, `experience[]`, `interests[]` | Página `/sobre` |
| `hero` | Badge e textos dos botões da Hero |
| `marketHero` | Título/subtítulo/CTAs da Hero de `/mercado-financeiro` |
| `automationService` | Textos e as 5 etapas da seção "Automação sob demanda" |
| `recruiterNote` | Linha "Disponível para oportunidades..." na página de Contato |
| `whatsappDefaultMessage` / `whatsappAutomationMessage` | Mensagens pré-preenchidas do WhatsApp |

`socialLinks[]`, no mesmo arquivo, alimenta a grade de contato — para
adicionar um novo canal (ex.: Instagram), adicione um objeto novo
(`id`, `name`, `description`, `value`, `href`, `icon`) e ele aparece
automaticamente na página `/contato`. O campo `icon` é o **nome de um ícone
do [lucide-react](https://lucide.dev/icons)** (ex.: `"Instagram"`).

---

## Adicionando um projeto

Edite `src/data/projects.ts` e adicione um objeto ao array `projects`. Nada
mais precisa ser criado — a listagem em `/projetos`, o card, os filtros por
categoria e a página `/projetos/[slug]` são todos gerados a partir daí.

```ts
{
  id: "meu-projeto",
  slug: "meu-projeto",              // vira a URL: /projetos/meu-projeto
  title: "Meu Projeto",
  summary: "Uma frase curta para o card.",
  description: "Descrição completa exibida na página do projeto.",
  problem: "Qual problema o projeto resolve (opcional).",
  solution: "Como o projeto resolve (opcional).",
  features: ["Funcionalidade A", "Funcionalidade B"],
  architecture: "Explicação da arquitetura (opcional).",
  image: "/images/projects/meu-projeto.jpg",
  technologies: ["python", "postgresql"],   // ids de technologies.ts
  category: "Backend",              // Software | Web | Backend | Automação | Mercado Financeiro | Outros
  complexity: "Intermediária",       // Básica | Intermediária | Avançada
  status: "Concluído",               // Concluído | Em desenvolvimento | Manutenção
  github: { Repositório: "https://github.com/..." },
  demo: "https://...",               // opcional
  featured: true,                    // aparece na Home
}
```

### O campo `github` (repositórios)

`github` é um **dicionário nome → URL**, não uma string única. Isso cobre os
três casos reais de um portfólio:

```ts
github: undefined                                   // sem repositório público
github: { Repositório: "https://github.com/..." }    // um repositório só
github: {
  Backend: "https://github.com/.../backend",
  Frontend: "https://github.com/.../frontend",
}                                                     // repositórios separados
```

O botão em `/projetos/[slug]` se adapta sozinho (veja
[`github-link-button.tsx`](src/components/projects/github-link-button.tsx)):

- **nenhuma entrada** → botão desabilitado "Código não disponível"
- **uma entrada** → link direto para o repositório
- **duas ou mais** → abre uma modal para escolher qual repositório abrir

Não precisa mexer no componente para adicionar mais um repositório a um
projeto — só adicione outra chave ao dicionário.

---

## Adicionando um produto (robô/indicador/automação)

Mesma lógica, em `src/data/products.ts` → array `products`. Alimenta
`/mercado-financeiro` e `/mercado-financeiro/[slug]`.

```ts
{
  id: "meu-produto",
  slug: "meu-produto",               // vira a URL: /mercado-financeiro/meu-produto
  name: "Nome do Produto",
  shortDescription: "Frase curta para o card.",
  fullDescription: "Descrição completa.",
  howItWorks: "Como funciona (opcional).",
  features: ["..."],
  requirements: ["MetaTrader 5 instalado"],
  image: "/images/products/meu-produto.jpg",
  videoUrl: "https://www.youtube.com/embed/...",   // opcional, demonstração em vídeo
  category: "Robôs de Trading",       // Robôs de Trading | Indicadores | Automações | Ferramentas | Bibliotecas
  platform: "MetaTrader 5",
  technologies: ["mql5"],
  price: "R$ 497,00",
  licenseType: "Licença única",       // Licença única | Assinatura mensal | Vitalícia
  status: "Disponível",               // Disponível | Em breve | Descontinuado
  trialInfo: "Período de teste de 7 dias.",
  faq: [{ question: "...", answer: "..." }],
  featured: true,
}
```

O botão **"Solicitar teste pelo WhatsApp"** é gerado automaticamente — não há
nada para configurar por produto além do `name` (a mensagem usa o nome do
produto, veja abaixo).

---

## WhatsApp — um único helper, nunca duplicado

Todo link de WhatsApp do site passa por
[`src/lib/whatsapp.ts`](src/lib/whatsapp.ts):

```ts
createWhatsAppLink(phone, message)          // monta o link wa.me
createProductTrialMessage(productName)      // "Olá! Tenho interesse em testar..."
createProductPurchaseMessage(productName)   // "Olá! Tenho interesse em adquirir..."
```

O número de telefone vem sempre de `siteConfig.whatsapp`. Para trocar o
número, edite **um lugar só**: `src/data/site.ts`. Para mudar o texto de uma
mensagem específica (ex.: a de orçamento de automação), edite
`siteConfig.whatsappAutomationMessage` ou as funções em `lib/whatsapp.ts`.

---

## Imagens

Cada imagem tem um caminho esperado dentro de `public/images/`:

```
public/images/
├── profile/    → foto de perfil (siteConfig.avatar)
├── projects/   → capas dos projetos
└── products/   → capas dos produtos
```

**Você não precisa fazer nada além de colocar o arquivo na pasta certa.**
[`lib/media.ts`](src/lib/media.ts) verifica em tempo de build se o arquivo
existe: se sim, ele é exibido com `next/image`; se ainda não existe, o
[`CoverImage`](src/components/ui/cover-image.tsx) mostra uma capa ilustrativa
(gradiente + ícone da categoria) automaticamente — nunca uma imagem quebrada.
Isso vale para `avatar`, `image` e `gallery` de projetos/produtos.

### Galeria de imagens (com título e descrição, estilo LinkedIn)

Além da capa (`image`), cada projeto/produto aceita um array `gallery` com
imagens extras exibidas na página de detalhes, cada uma com título e
descrição opcionais:

```ts
gallery: [
  {
    src: "/images/projects/meu-projeto/tela-1.jpg",
    title: "Tela principal",
    description: "Painel com os dados em tempo real.",
  },
  { src: "/images/projects/meu-projeto/tela-2.jpg" }, // sem legenda
]
```

Mesma regra das outras imagens: se o arquivo em `src` não existir em
`public/`, o item some da galeria automaticamente (sem quebrar o layout).
Renderizado por [`Gallery`](src/components/ui/gallery.tsx).

---

## Tecnologias exibidas no site

`src/data/technologies.ts` é a lista usada pela seção "Tecnologias" da Home
(agrupada por `category`) e pelas tags exibidas nos cards/páginas de projeto
e produto (via o array `technologies: [...]`, que referencia os `id`s daqui).

```ts
{ id: "python", name: "Python", icon: "FileCode", category: "Linguagem", level: "Avançado" }
```

Adicionar uma tecnologia nova = adicionar um objeto aqui e usar o `id` dela
em `projects.ts`/`products.ts`.

---

## Sistema de temas sazonais

O site tem **4 temas** (Primavera, Verão, Outono, Inverno), escolhidos
aleatoriamente na primeira visita e persistidos em `localStorage`
(`portfolio-season-mode`). Cada estação tem um **modo de cor fixo**
(Primavera/Inverno = escuro, Verão/Outono = claro) — não é um dark mode
independente.

- **Lógica**: [`src/lib/season.ts`](src/lib/season.ts) — labels, ícones,
  modo claro/escuro e a estação "automática" (calculada pelo mês, hemisfério
  sul).
- **Aplicação sem flash**: [`season-script.tsx`](src/components/providers/season-script.tsx)
  roda antes da hidratação e define `data-season` + a classe `light` no
  `<html>`. [`season-provider.tsx`](src/components/providers/season-provider.tsx)
  assume o controle depois, para o seletor da navbar poder trocar de tema.
- **Cores**: cada estação só redefine **CSS variables** em
  [`globals.css`](src/app/globals.css) (`--background`, `--surface`,
  `--primary`, `--accent`, `--accent-secondary` etc.) dentro de um seletor
  `[data-season="..."]`. **Nenhum componente muda entre temas** — todos usam
  classes Tailwind semânticas (`bg-primary`, `text-accent`...) que apontam
  para essas variáveis.

Para ajustar a paleta de uma estação, edite só o bloco correspondente em
`globals.css` (valores em HSL: `matiz saturação% luminosidade%`). Para trocar
o ícone/label/intensidade dos elementos decorativos, edite `seasonMeta` em
`lib/season.ts`. Os próprios elementos decorativos (formas geométricas por
estação) ficam em
[`seasonal-motif.tsx`](src/components/ui/seasonal-motif.tsx).

---

## Estrutura de componentes

```
src/components/
├── layout/       → Navbar, Footer (usados no layout raiz)
├── sections/     → blocos de página (Hero, About, Technologies, Contact...)
├── projects/     → ProjectCard, ProjectGrid (com filtro), ProjectDetails, GithubLinkButton
├── products/     → ProductCard, ProductGrid (com filtro), ProductDetails
├── providers/    → SeasonProvider/SeasonScript (tema)
└── ui/           → átomos reutilizáveis: Button, Badge, Modal, CoverImage, Icon...
```

Regra geral: uma página em `src/app/**/page.tsx` só busca dados
(`getAllProjects()`, `getProductBySlug()` etc.) e monta seções — a lógica de
exibição fica nos componentes, e o conteúdo fica em `data/`.

---

## Rotas

| Rota | Conteúdo |
|---|---|
| `/` | Hero, Sobre (resumo), Tecnologias, Projetos em destaque, GitHub, ponte para Mercado Financeiro, CTA de contato |
| `/sobre` | Bio completa, experiência |
| `/projetos` | Todos os projetos, com filtro por categoria |
| `/projetos/[slug]` | Página individual do projeto |
| `/mercado-financeiro` | Hero próprio, comparação produtos vs. serviço, grade de produtos, seção de automação sob demanda |
| `/mercado-financeiro/[slug]` | Página individual do produto |
| `/contato` | Todos os canais de contato |

---

## Deploy

`npm run build` gera as páginas estáticas/SSG onde possível
(`generateStaticParams` em `projetos/[slug]` e `mercado-financeiro/[slug]`).
Funciona em qualquer host com suporte a Next.js (Vercel, etc.) — só ajuste
`siteConfig.url` para o domínio final antes de gerar o sitemap/metadata.

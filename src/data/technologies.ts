import type { Technology } from "@/types";

/**
 * Lista de tecnologias exibidas na seção "Tecnologias".
 * Para adicionar uma nova tecnologia, basta incluir um novo objeto no array.
 * `core: true` coloca a tecnologia no bloco "Stack principal"; as demais
 * aparecem em "Também já usei".
 */
export const technologies: Technology[] = [
  // Linguagens
  { id: "csharp", name: "C#", icon: "Hash", category: "Linguagem", core: true },
  { id: "python", name: "Python", icon: "FileCode", category: "Linguagem", core: true },
  { id: "sql", name: "SQL", icon: "Table", category: "Linguagem", core: true },
  { id: "typescript", name: "TypeScript", icon: "FileType", category: "Linguagem" },
  { id: "javascript", name: "JavaScript", icon: "Braces", category: "Linguagem" },
  { id: "java", name: "Java", icon: "Coffee", category: "Linguagem" },

  // Backend
  { id: "dotnet", name: ".NET", icon: "Layers", category: "Backend", core: true },
  { id: "aspnet", name: "ASP.NET Core", icon: "Globe", category: "Backend", core: true },
  { id: "rest-api", name: "REST APIs", icon: "Plug", category: "Backend", core: true },
  { id: "nodejs", name: "Node.js", icon: "Hexagon", category: "Backend" },
  { id: "nestjs", name: "NestJS", icon: "Server", category: "Backend" },
  { id: "springboot", name: "Spring Boot", icon: "Sprout", category: "Backend" },
  { id: "efcore", name: "Entity Framework Core", icon: "Boxes", category: "Backend" },
  { id: "websocket", name: "WebSocket", icon: "Radio", category: "Backend" },
  { id: "sse", name: "SSE", icon: "RadioTower", category: "Backend" },

  // Frontend
  { id: "react", name: "React", icon: "Atom", category: "Frontend", core: true },
  { id: "nextjs", name: "Next.js", icon: "Layers3", category: "Frontend", core: true },
  { id: "tailwind", name: "Tailwind CSS", icon: "Wind", category: "Frontend" },

  // Banco de Dados
  { id: "postgresql", name: "PostgreSQL", icon: "Database", category: "Banco de Dados", core: true },
  { id: "sqlserver", name: "SQL Server", icon: "Database", category: "Banco de Dados", core: true },
  { id: "mongodb", name: "MongoDB", icon: "Leaf", category: "Banco de Dados" },
  { id: "redis", name: "Redis", icon: "Zap", category: "Banco de Dados" },
  { id: "supabase", name: "Supabase", icon: "Bolt", category: "Banco de Dados" },

  // DevOps
  { id: "docker", name: "Docker", icon: "Container", category: "DevOps", core: true },
  { id: "docker-compose", name: "Docker Compose", icon: "SquareStack", category: "DevOps" },
  { id: "nginx", name: "NGINX", icon: "Network", category: "DevOps" },
  { id: "vercel", name: "Vercel", icon: "Triangle", category: "DevOps" },
  { id: "linux", name: "Linux", icon: "Terminal", category: "DevOps" },

  // Ferramentas
  { id: "git", name: "Git", icon: "GitBranch", category: "Ferramenta" },
  { id: "xunit", name: "xUnit", icon: "FlaskConical", category: "Ferramenta" },
  { id: "jest", name: "Jest", icon: "Beaker", category: "Ferramenta" },

  // Mercado Financeiro
  { id: "mql5", name: "MQL5", icon: "TrendingUp", category: "Mercado Financeiro" },
  { id: "ntsl", name: "NTSL", icon: "LineChart", category: "Mercado Financeiro" },
];
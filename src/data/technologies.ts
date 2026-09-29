import type { Technology } from "@/types";

/**
 * Lista de tecnologias exibidas na seção "Tecnologias".
 * Para adicionar uma nova tecnologia, basta incluir um novo objeto no array.
 */
export const technologies: Technology[] = [
  // Linguagens
  { id: "csharp", name: "C#", icon: "Hash", category: "Linguagem", level: "Avançado" },
  { id: "python", name: "Python", icon: "FileCode", category: "Linguagem", level: "Avançado" },
  { id: "sql", name: "SQL", icon: "Table", category: "Linguagem", level: "Avançado" },
  { id: "typescript", name: "TypeScript", icon: "FileType", category: "Linguagem", level: "Intermediário" },
  { id: "javascript", name: "JavaScript", icon: "Braces", category: "Linguagem", level: "Intermediário" },
  { id: "java", name: "Java", icon: "Coffee", category: "Linguagem", level: "Intermediário" },

  // Backend
  { id: "dotnet", name: ".NET", icon: "Layers", category: "Backend", level: "Avançado" },
  { id: "aspnet", name: "ASP.NET Core", icon: "Globe", category: "Backend", level: "Avançado" },
  { id: "rest-api", name: "REST APIs", icon: "Plug", category: "Backend", level: "Avançado" },
  { id: "nodejs", name: "Node.js", icon: "Hexagon", category: "Backend", level: "Intermediário" },
  { id: "nestjs", name: "NestJS", icon: "Server", category: "Backend", level: "Intermediário" },
  { id: "springboot", name: "Spring Boot", icon: "Sprout", category: "Backend", level: "Intermediário" },
  { id: "efcore", name: "Entity Framework Core", icon: "Boxes", category: "Backend", level: "Intermediário" },
  { id: "websocket", name: "WebSocket", icon: "Radio", category: "Backend", level: "Intermediário" },
  { id: "sse", name: "SSE", icon: "RadioTower", category: "Backend", level: "Intermediário" },
  { id: "jwt", name: "JWT", icon: "KeyRound", category: "Backend", level: "Intermediário" },

  // Frontend
  { id: "react", name: "React", icon: "Atom", category: "Frontend", level: "Intermediário" },
  { id: "nextjs", name: "Next.js", icon: "Layers3", category: "Frontend", level: "Intermediário" },
  { id: "tailwind", name: "Tailwind CSS", icon: "Wind", category: "Frontend", level: "Intermediário" },
  { id: "html", name: "HTML", icon: "Code2", category: "Frontend", level: "Avançado" },
  { id: "css", name: "CSS", icon: "Palette", category: "Frontend", level: "Intermediário" },

  // Banco de Dados
  { id: "postgresql", name: "PostgreSQL", icon: "Database", category: "Banco de Dados", level: "Avançado" },
  { id: "sqlserver", name: "SQL Server", icon: "Database", category: "Banco de Dados", level: "Avançado" },
  { id: "mongodb", name: "MongoDB", icon: "Leaf", category: "Banco de Dados", level: "Intermediário" },
  { id: "redis", name: "Redis", icon: "Zap", category: "Banco de Dados", level: "Intermediário" },
  { id: "supabase", name: "Supabase", icon: "Bolt", category: "Banco de Dados", level: "Intermediário" },

  // DevOps
  { id: "docker", name: "Docker", icon: "Container", category: "DevOps", level: "Intermediário" },
  { id: "docker-compose", name: "Docker Compose", icon: "SquareStack", category: "DevOps", level: "Intermediário" },
  { id: "nginx", name: "NGINX", icon: "Network", category: "DevOps", level: "Intermediário" },
  { id: "vercel", name: "Vercel", icon: "Triangle", category: "DevOps", level: "Intermediário" },
  { id: "linux", name: "Linux", icon: "Terminal", category: "DevOps", level: "Intermediário" },

  // Ferramentas
  { id: "git", name: "Git", icon: "GitBranch", category: "Ferramenta", level: "Avançado" },
  { id: "xunit", name: "xUnit", icon: "FlaskConical", category: "Ferramenta", level: "Intermediário" },
  { id: "nunit", name: "NUnit", icon: "TestTube", category: "Ferramenta", level: "Intermediário" },
  { id: "jest", name: "Jest", icon: "Beaker", category: "Ferramenta", level: "Intermediário" },
  { id: "telegram", name: "Telegram", icon: "Send", category: "Ferramenta", level: "Intermediário" },

  // Mercado Financeiro
  { id: "mql5", name: "MQL5", icon: "TrendingUp", category: "Mercado Financeiro", level: "Avançado" },
  { id: "ntsl", name: "NTSL", icon: "LineChart", category: "Mercado Financeiro", level: "Avançado" },
  { id: "mql4", name: "MQL4", icon: "TrendingUp", category: "Mercado Financeiro", level: "Intermediário" },
];
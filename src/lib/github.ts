export interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  html_url: string;
  bio: string | null;
}

/**
 * Busca estatísticas públicas do GitHub via API pública (sem autenticação).
 * Retorna null silenciosamente caso o usuário não exista ou a API esteja
 * indisponível/rate-limited, para que a seção continue funcionando mesmo
 * sem dados reais (ex.: enquanto o username configurado for um placeholder).
 */
export async function getGitHubStats(username: string): Promise<GitHubStats | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github+json" },
    });

    if (!res.ok) return null;

    return (await res.json()) as GitHubStats;
  } catch {
    return null;
  }
}

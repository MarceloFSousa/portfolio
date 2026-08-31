import { ArrowUpRight, Github } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";
import { getGitHubStats } from "@/lib/github";

export async function GithubSection() {
  const stats = await getGitHubStats(siteConfig.githubUsername);

  return (
    <section id="github" className="scroll-mt-24 border-b border-border py-16 sm:py-20">
      <Container>
        <a
          href={`https://github.com/${siteConfig.githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"
        >
          <div className="flex items-center gap-4">
            <Github size={20} className="shrink-0 text-muted-foreground" />
            <div>
              <p className="text-sm text-foreground">
                Open source em{" "}
                <span className="font-medium">@{siteConfig.githubUsername}</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stats?.bio ?? "Repositórios públicos de automação, backend e mercado financeiro."}
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
            Ver GitHub
            <ArrowUpRight size={14} />
          </span>
        </a>
      </Container>
    </section>
  );
}

import { CheckCircle2, ExternalLink, Layers } from "lucide-react";
import type { Project } from "@/types";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CoverImage } from "@/components/ui/cover-image";
import { Gallery } from "@/components/ui/gallery";
import { Icon } from "@/components/ui/icon";
import { GithubLinkButton } from "@/components/projects/github-link-button";
import { getTechnologiesByIds } from "@/lib/utils";

export function ProjectDetails({ project }: { project: Project }) {
  const techs = getTechnologiesByIds(project.technologies);

  return (
    <article>
      <section className="border-b border-border py-14 sm:py-20">
        <Container>
          {project.isExample && (
            <Badge variant="accent" className="mb-6">
              Projeto de exemplo
            </Badge>
          )}
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="primary">{project.category}</Badge>
            <Badge>{project.complexity}</Badge>
            <Badge>{project.status}</Badge>
          </div>

          <h1 className="font-display mt-6 max-w-3xl text-3xl font-light tracking-tight text-foreground sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {project.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <GithubLinkButton github={project.github} />
            {project.demo && (
              <Button href={project.demo} variant="outline">
                <ExternalLink size={18} />
                Ver ao vivo
              </Button>
            )}
          </div>
        </Container>
      </section>

      <Container className="py-14 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div>
            <CoverImage
              src={project.image}
              alt={project.title}
              category={project.category}
              seed={project.id}
              className="aspect-video w-full border border-border"
              sizes="(min-width: 1024px) 800px, 100vw"
              aspectRatio={project.imageAspectRatio}
            />

            <div className="mt-12 space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Sobre o projeto
              </p>
              <p className="leading-relaxed text-foreground/90">{project.description}</p>
            </div>

            {(project.problem || project.solution) && (
              <div className="mt-12 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
                {project.problem && (
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      Problema
                    </p>
                    <p className="mt-3 leading-relaxed text-foreground/90">{project.problem}</p>
                  </div>
                )}
                {project.solution && (
                  <div className="sm:border-l sm:border-border sm:pl-8">
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      Solução
                    </p>
                    <p className="mt-3 leading-relaxed text-foreground/90">{project.solution}</p>
                  </div>
                )}
              </div>
            )}

            {project.features && project.features.length > 0 && (
              <div className="mt-12 border-t border-border pt-8">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Funcionalidades
                </p>
                <ul className="mt-4 space-y-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-foreground/90">
                      <CheckCircle2 size={16} className="mt-1 shrink-0 text-primary" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.architecture && (
              <div className="mt-12 border-t border-border pt-8">
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  <Layers size={14} />
                  Arquitetura
                </p>
                <p className="mt-4 leading-relaxed text-foreground/90">{project.architecture}</p>
              </div>
            )}

            {project.gallery && <Gallery items={project.gallery} />}
          </div>

          <aside className="h-fit space-y-6 lg:sticky lg:top-24">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Tecnologias
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech.id}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs text-foreground"
                  >
                    <Icon name={tech.icon} size={12} className="text-muted-foreground" />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4 border-t border-border pt-6 text-sm">
              <div>
                <p className="text-muted-foreground">Categoria</p>
                <p className="mt-1 text-foreground">{project.category}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Complexidade</p>
                <p className="mt-1 text-foreground">{project.complexity}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Status</p>
                <p className="mt-1 text-foreground">{project.status}</p>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </article>
  );
}

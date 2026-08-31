import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/projects/project-card";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Projetos"
            title="Projetos selecionados"
            description="Sistemas, automações e ferramentas que desenvolvi, apresentados como cases, com contexto e decisões técnicas."
          />
          <Button href="/projetos" variant="outline" className="shrink-0">
            Ver todos
            <ArrowRight size={16} />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

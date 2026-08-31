import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectGrid } from "@/components/projects/project-grid";
import { getAllProjects, getProjectCategories } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Sistemas, automações, APIs e ferramentas que desenvolvi em software e mercado financeiro.",
};

export default function ProjetosPage() {
  const projects = getAllProjects();
  const categories = getProjectCategories();

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Portfólio"
          title="Projetos selecionados"
          description="Sistemas, automações e ferramentas que já desenvolvi, com contexto, problema e solução."
        />

        <div className="mt-12">
          <ProjectGrid projects={projects} categories={categories} />
        </div>
      </Container>
    </section>
  );
}

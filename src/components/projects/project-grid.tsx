"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/types";
import { ProjectCard } from "@/components/projects/project-card";
import { cn } from "@/lib/utils";

interface ProjectGridProps {
  projects: Project[];
  categories: string[];
}

export function ProjectGrid({ projects, categories }: ProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");

  const filtered = useMemo(() => {
    if (activeCategory === "Todos") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [projects, activeCategory]);

  const filters = ["Todos", ...categories];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveCategory(filter)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === filter
                ? "border-primary/40 bg-primary/10 text-primary"
                : "border-border bg-surface text-muted-foreground hover:text-foreground"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-muted-foreground">
          Nenhum projeto encontrado nessa categoria.
        </p>
      )}
    </div>
  );
}

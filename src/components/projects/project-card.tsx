import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { CoverImage } from "@/components/ui/cover-image";
import { Icon } from "@/components/ui/icon";
import { getTechnologiesByIds } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  const techs = getTechnologiesByIds(project.technologies);
  const hasGithub = Object.keys(project.github ?? {}).length > 0;

  return (
    <Link
      href={`/projetos/${project.slug}`}
      className="group flex flex-col overflow-hidden border border-border transition-colors duration-200 hover:border-primary/40 hover:bg-surface-hover"
    >
      <CoverImage
        src={project.image}
        alt={project.title}
        category={project.category}
        seed={project.id}
        className="aspect-[16/10] w-full"
        aspectRatio={project.imageAspectRatio}
      />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="primary">{project.category}</Badge>
        </div>

        <h3 className="mt-4 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {techs.slice(0, 4).map((tech) => (
            <span
              key={tech.id}
              className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-1 font-mono text-[11px] text-muted-foreground"
            >
              <Icon name={tech.icon} size={12} />
              {tech.name}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
          <span className="text-xs font-medium text-muted-foreground">
            {project.status}
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
            Ver detalhes
            {hasGithub ? <Github size={14} /> : <ArrowUpRight size={14} />}
          </span>
        </div>
      </div>
    </Link>
  );
}

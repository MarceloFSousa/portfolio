import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { technologies } from "@/data/technologies";
import type { TechCategory } from "@/types";

const categoryOrder: TechCategory[] = [
  "Linguagem",
  "Frontend",
  "Backend",
  "Banco de Dados",
  "Mercado Financeiro",
  "DevOps",
  "Ferramenta",
];

export function Technologies() {
  const grouped = categoryOrder
    .map((category) => ({
      category,
      items: technologies.filter((t) => t.category === category),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <section id="tecnologias" className="scroll-mt-24 border-y border-border py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Stack"
          title="Tecnologias"
          description="Ferramentas e linguagens que uso no dia a dia."
        />

        <div className="mt-12 space-y-8">
          {grouped.map((group) => (
            <div
              key={group.category}
              className="grid gap-3 border-t border-border pt-6 sm:grid-cols-[160px_minmax(0,1fr)] sm:items-baseline sm:gap-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <span
                    key={tech.id}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm text-foreground"
                  >
                    <Icon name={tech.icon} size={14} className="text-muted-foreground" />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

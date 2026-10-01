import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export function Highlights() {
  return (
    <section className="border-b border-border">
      <Container>
        <dl className="grid grid-cols-2 gap-x-6 lg:grid-cols-4">
          {siteConfig.highlights.map((item) => (
            <div key={item.label} className="flex flex-col-reverse justify-end py-8">
              <dt className="mt-2 text-sm leading-snug text-muted-foreground">{item.label}</dt>
              <dd className="font-mono text-2xl text-foreground sm:text-3xl">{item.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

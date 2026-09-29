/**
 * Renderiza dados estruturados (schema.org) para o Google. Escapa "<" para
 * que nenhum texto dos dados consiga fechar a tag <script>.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

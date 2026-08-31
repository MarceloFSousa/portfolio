import * as icons from "lucide-react";
import { HelpCircle, type LucideProps } from "lucide-react";

interface IconProps extends LucideProps {
  name: string;
}

/**
 * Renderiza um ícone do lucide-react a partir do nome (string), permitindo
 * que os arquivos de dados (technologies.ts, site.ts) referenciem ícones
 * sem importar componentes React diretamente.
 */
export function Icon({ name, ...props }: IconProps) {
  const LucideIcon = (icons as unknown as Record<string, icons.LucideIcon>)[
    name
  ];

  if (!LucideIcon) {
    return <HelpCircle {...props} />;
  }

  return <LucideIcon {...props} />;
}

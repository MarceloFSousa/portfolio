export const SEASONS = ["spring", "summer", "autumn", "winter"] as const;
export type Season = (typeof SEASONS)[number];
export type SeasonMode = Season | "auto";

export const SEASON_STORAGE_KEY = "portfolio-season-mode";

/**
 * Cada estação tem um modo claro/escuro fixo — não é uma variação
 * independente do dark mode, é parte da identidade da própria estação.
 */
export interface SeasonMeta {
  label: string;
  icon: string;
  description: string;
  mode: "light" | "dark";
  /** Opacidade relativa dos elementos decorativos (0–1, quanto menor mais sutil). */
  motifIntensity: number;
}

export const seasonMeta: Record<Season, SeasonMeta> = {
  spring: {
    label: "Primavera",
    icon: "Flower2",
    description: "Verde profundo, sensação de renovação",
    mode: "dark",
    motifIntensity: 0.55,
  },
  summer: {
    label: "Verão",
    icon: "Sun",
    description: "Amarelo, laranja e azul claro",
    mode: "light",
    motifIntensity: 1,
  },
  autumn: {
    label: "Outono",
    icon: "Leaf",
    description: "Laranja, marrom e folhas secas",
    mode: "light",
    motifIntensity: 1,
  },
  winter: {
    label: "Inverno",
    icon: "Snowflake",
    description: "Azul, azul acinzentado e branco",
    mode: "dark",
    motifIntensity: 0.45,
  },
};

/**
 * Mapeia o mês atual para a estação meteorológica no Hemisfério Sul (Brasil).
 * Para uso no Hemisfério Norte, inverta os pares (dez-fev vira inverno, etc.).
 *
 * IMPORTANTE: mantenha esta lógica sincronizada com o script inline em
 * src/components/providers/season-script.tsx, que roda antes da hidratação
 * e não pode importar este módulo.
 */
export function getCalendarSeason(date: Date = new Date()): Season {
  const month = date.getMonth() + 1;
  if (month === 12 || month <= 2) return "summer";
  if (month <= 5) return "autumn";
  if (month <= 8) return "winter";
  return "spring";
}

export function getRandomSeason(exclude?: Season): Season {
  const options = exclude ? SEASONS.filter((s) => s !== exclude) : SEASONS;
  return options[Math.floor(Math.random() * options.length)];
}

export function resolveSeason(mode: SeasonMode): Season {
  return mode === "auto" ? getCalendarSeason() : mode;
}

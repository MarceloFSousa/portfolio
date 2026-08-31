"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Season, SeasonMode } from "@/lib/season";
import { SEASON_STORAGE_KEY, getRandomSeason, resolveSeason, seasonMeta } from "@/lib/season";

interface SeasonContextValue {
  /** Estação visual atualmente aplicada (já resolvida, nunca "auto"). */
  season: Season;
  /** Modo selecionado pelo usuário: uma estação fixa ou "auto". */
  seasonMode: SeasonMode;
  /** Define o modo (estação fixa ou "auto") e persiste a escolha. */
  setSeasonMode: (mode: SeasonMode) => void;
  /** Sorteia uma nova estação (diferente da atual) e persiste como escolha fixa. */
  randomizeSeason: () => void;
}

const SeasonContext = createContext<SeasonContextValue | undefined>(undefined);

// Estado inicial fixo (idêntico no servidor e no primeiro paint do cliente)
// para nunca gerar mismatch de hidratação. A leitura real do localStorage
// (já definida pelo script inline em SeasonScript, sem flash de cor —
// isso é puramente sobre o texto/ícone renderizado por React) acontece
// em um efeito, que atualiza o estado logo após a montagem.
const INITIAL_MODE: SeasonMode = "winter";

export function SeasonProvider({ children }: { children: React.ReactNode }) {
  const [seasonMode, setSeasonModeState] = useState<SeasonMode>(INITIAL_MODE);
  const [season, setSeason] = useState<Season>(resolveSeason(INITIAL_MODE));

  useEffect(() => {
    // localStorage não existe no servidor, então a única forma de sincronizar
    // o modo real sem gerar mismatch de hidratação é ler e aplicar aqui, uma
    // vez, logo após a montagem (veja o comentário de INITIAL_MODE acima).
    /* eslint-disable react-hooks/set-state-in-effect */
    const stored = window.localStorage.getItem(SEASON_STORAGE_KEY) as SeasonMode | null;
    const mode = stored ?? INITIAL_MODE;
    setSeasonModeState(mode);
    setSeason(resolveSeason(mode));
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(() => {
    // O modo claro/escuro é parte da identidade de cada estação (não é um
    // eixo independente), então aplicamos os dois em conjunto aqui.
    document.documentElement.setAttribute("data-season", season);
    document.documentElement.classList.toggle("light", seasonMeta[season].mode === "light");
  }, [season]);

  const setSeasonMode = (mode: SeasonMode) => {
    setSeasonModeState(mode);
    setSeason(resolveSeason(mode));
    window.localStorage.setItem(SEASON_STORAGE_KEY, mode);
  };

  const randomizeSeason = () => {
    const next = getRandomSeason(season);
    setSeasonMode(next);
  };

  return (
    <SeasonContext.Provider value={{ season, seasonMode, setSeasonMode, randomizeSeason }}>
      {children}
    </SeasonContext.Provider>
  );
}

export function useSeason(): SeasonContextValue {
  const ctx = useContext(SeasonContext);
  if (!ctx) {
    throw new Error("useSeason deve ser usado dentro de <SeasonProvider>");
  }
  return ctx;
}

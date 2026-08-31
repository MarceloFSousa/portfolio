/**
 * Script inline executado antes da hidratação para aplicar o atributo
 * data-season (e o modo claro/escuro correspondente) no <html> sem flash
 * de tema errado (mesma técnica usada por bibliotecas como next-themes).
 * Não pode importar módulos, pois roda como uma string JS pura no navegador.
 *
 * Mantenha a lógica de estação e o mapa de modo sincronizados com
 * src/lib/season.ts (Hemisfério Sul: dez–fev verão, mar–mai outono,
 * jun–ago inverno, set–nov primavera; primavera/inverno = escuro,
 * verão/outono = claro).
 */
const SEASON_INIT_SCRIPT = `
(function() {
  try {
    var KEY = "portfolio-season-mode";
    var seasons = ["spring", "summer", "autumn", "winter"];
    var seasonModes = { spring: "dark", summer: "light", autumn: "light", winter: "dark" };
    function calendarSeason() {
      var m = new Date().getMonth() + 1;
      if (m === 12 || m <= 2) return "summer";
      if (m <= 5) return "autumn";
      if (m <= 8) return "winter";
      return "spring";
    }
    var mode = localStorage.getItem(KEY);
    if (!mode) {
      mode = seasons[Math.floor(Math.random() * seasons.length)];
      localStorage.setItem(KEY, mode);
    }
    var resolved = mode === "auto" ? calendarSeason() : mode;
    document.documentElement.setAttribute("data-season", resolved);
    document.documentElement.classList.toggle("light", seasonModes[resolved] === "light");
  } catch (e) {}
})();
`;

export function SeasonScript() {
  return <script dangerouslySetInnerHTML={{ __html: SEASON_INIT_SCRIPT }} />;
}

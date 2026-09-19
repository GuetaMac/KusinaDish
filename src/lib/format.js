// Ginagawang "1½" o "¾" ang mga numero para madaling basahin sa ingredients
export function formatAmount(n) {
  if (n == null) return "";
  const q = Math.round(n * 4) / 4; // pinakamalapit na kalahati/kapat
  if (q === 0) return "¼";
  const whole = Math.floor(q);
  const frac = { 0: "", 0.25: "¼", 0.5: "½", 0.75: "¾" }[q - whole];
  return `${whole || ""}${frac}`;
}

// Kulay ng tile at pill ayon sa category
const TONES = {
  Ulam: "bg-sili text-white",
  Sabaw: "bg-calamansi text-toyo",
  Merienda: "bg-dahon text-calamansi",
};
export const categoryTone = (category) =>
  TONES[category] ?? "bg-toyo text-calamansi";

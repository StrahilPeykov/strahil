// Curated subset of the Odysseus theme set. `paper` is the light option.
export const themes = [
  { id: "dark", label: "dark" },
  { id: "paper", label: "paper" },
  { id: "ocean", label: "ocean" },
  { id: "copper", label: "copper" },
  { id: "terminal", label: "terminal" },
  { id: "claude", label: "claude" },
] as const;

export type ThemeId = (typeof themes)[number]["id"];
export const DEFAULT_THEME: ThemeId = "dark";
export const THEME_IDS = themes.map((t) => t.id);

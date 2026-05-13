export const UI_PRESET_STORAGE_KEY = "corporate-landing-ui-preset";

export const UI_PRESETS = {
  traditional: {
    label: "Traditional",
    hint: "Paper tone · serif titles · formal grid",
  },
  "minimal-dark": {
    label: "Minimal · Dark",
    hint: "Zinc surface · sans type · wide hero",
  },
  "minimal-light": {
    label: "Minimal · Light",
    hint: "White field · airy type · single column",
  },
} as const;

export type UiPreset = keyof typeof UI_PRESETS;

export function isUiPreset(value: string): value is UiPreset {
  return value in UI_PRESETS;
}

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";
import {
  isUiPreset,
  type UiPreset,
  UI_PRESET_STORAGE_KEY,
  UI_PRESETS,
} from "@/lib/ui-preset";

type UiPresetContextValue = {
  preset: UiPreset;
  setPreset: (next: UiPreset) => void;
  presets: typeof UI_PRESETS;
};

const UiPresetContext = createContext<UiPresetContextValue | null>(null);

const PRESET_EVENT = "corporate-landing-ui-preset";

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};
  const onStorage = (e: StorageEvent) => {
    if (e.key === UI_PRESET_STORAGE_KEY || e.key === null) onStoreChange();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(PRESET_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(PRESET_EVENT, onStoreChange);
  };
}

function readPreset(): UiPreset {
  if (typeof document === "undefined") return "traditional";
  const fromDom = document.documentElement.getAttribute("data-ui-preset");
  if (fromDom && isUiPreset(fromDom)) return fromDom;
  try {
    const raw = window.localStorage.getItem(UI_PRESET_STORAGE_KEY);
    if (raw && isUiPreset(raw)) return raw;
  } catch {
    /* ignore */
  }
  return "traditional";
}

function getSnapshot(): UiPreset {
  return readPreset();
}

function getServerSnapshot(): UiPreset {
  return "traditional";
}

export function UiPresetProvider({ children }: { children: React.ReactNode }) {
  const preset = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setPreset = useCallback((next: UiPreset) => {
    try {
      window.localStorage.setItem(UI_PRESET_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    document.documentElement.setAttribute("data-ui-preset", next);
    window.dispatchEvent(new Event(PRESET_EVENT));
  }, []);

  const value = useMemo(
    () => ({ preset, setPreset, presets: UI_PRESETS }),
    [preset, setPreset],
  );

  return (
    <UiPresetContext.Provider value={value}>
      {children}
    </UiPresetContext.Provider>
  );
}

export function useUiPreset() {
  const ctx = useContext(UiPresetContext);
  if (!ctx) {
    throw new Error("useUiPreset must be used within UiPresetProvider");
  }
  return ctx;
}

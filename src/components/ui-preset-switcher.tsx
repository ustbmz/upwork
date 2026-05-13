"use client";

import { useEffect, useId, useRef, useState } from "react";
import { isUiPreset, type UiPreset, UI_PRESETS } from "@/lib/ui-preset";
import { useUiPreset } from "./ui-preset-provider";

const ORDER: UiPreset[] = ["traditional", "minimal-dark", "minimal-light"];

export function UiPresetSwitcher() {
  const { preset, setPreset } = useUiPreset();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    function onDocMouseDown(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
        className="ui-switcher-trigger flex h-9 max-w-[11rem] items-center gap-2 rounded-[var(--ui-radius-control)] border px-2.5 text-left text-xs font-medium transition sm:max-w-[13rem] sm:px-3 sm:text-sm"
      >
        <span className="min-w-0 flex-1 truncate">
          {UI_PRESETS[preset].label}
        </span>
        <span className="text-[10px] opacity-70 sm:text-xs" aria-hidden>
          {open ? "▴" : "▾"}
        </span>
      </button>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-label="Page style and layout"
          className="ui-switcher-panel absolute right-0 z-[60] mt-2 w-[min(18rem,calc(100vw-2rem))] rounded-[var(--ui-radius-panel)] border py-1 shadow-lg"
        >
          {ORDER.map((key) => {
            const item = UI_PRESETS[key];
            const selected = key === preset;
            return (
              <li key={key} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  className="flex w-full flex-col gap-0.5 px-3 py-2.5 text-left text-sm transition ui-switcher-option"
                  data-selected={selected ? "true" : undefined}
                  onClick={() => {
                    if (isUiPreset(key)) setPreset(key);
                    setOpen(false);
                  }}
                >
                  <span className="font-medium">{item.label}</span>
                  <span className="text-xs leading-snug opacity-80">
                    {item.hint}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

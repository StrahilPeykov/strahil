"use client";

import { useEffect, useState } from "react";
import { themes, DEFAULT_THEME, type ThemeId } from "@/lib/themes";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeId>(DEFAULT_THEME);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme") as ThemeId | null;
    if (current) setTheme(current);
  }, []);

  function pick(id: ThemeId) {
    setTheme(id);
    setOpen(false);
    document.documentElement.setAttribute("data-theme", id);
    try {
      localStorage.setItem("theme", id);
    } catch {}
  }

  return (
    <div className="relative font-mono text-sm">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1 border border-border px-2 py-1 text-muted hover:text-fg"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {theme} <span aria-hidden>▾</span>
      </button>

      {open && (
        <>
          {/* click-away backdrop */}
          <button
            type="button"
            aria-hidden
            tabIndex={-1}
            className="fixed inset-0 z-10 cursor-default"
            onClick={() => setOpen(false)}
          />
          <ul
            role="listbox"
            className="absolute right-0 z-20 mt-1 min-w-[8rem] border border-border bg-panel py-1"
          >
            {themes.map((t) => (
              <li key={t.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={t.id === theme}
                  onClick={() => pick(t.id)}
                  className="flex w-full items-center gap-2 px-3 py-1 text-left hover:text-accent"
                >
                  <span aria-hidden>{t.id === theme ? "●" : "○"}</span>
                  {t.label}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

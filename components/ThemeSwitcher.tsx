"use client";

import { useEffect, useId, useRef, useState } from "react";
import { themes, DEFAULT_THEME, type ThemeId } from "@/lib/themes";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeId>(DEFAULT_THEME);
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const options = useRef<(HTMLButtonElement | null)[]>([]);
  const listId = useId();

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme") as ThemeId | null;
    if (current) setTheme(current);
  }, []);

  useEffect(() => {
    if (open) options.current[themes.findIndex((t) => t.id === theme)]?.focus();
  }, [open, theme]);

  function pick(id: ThemeId) {
    setTheme(id);
    setOpen(false);
    document.documentElement.setAttribute("data-theme", id);
    try {
      localStorage.setItem("theme", id);
    } catch {}
    trigger.current?.focus();
  }

  return (
    <div
      className="relative font-mono text-sm"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setOpen(false);
          trigger.current?.focus();
        }
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={trigger}
        type="button"
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className="inline-flex items-center gap-1 border border-border px-2 py-1 text-muted hover:text-fg"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        aria-label={`Theme: ${theme}. Change theme`}
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
            id={listId}
            role="listbox"
            aria-label="Colour theme"
            className="absolute right-0 z-20 mt-1 min-w-[8rem] border border-border bg-panel py-1"
          >
            {themes.map((t, index) => (
              <li key={t.id} role="presentation">
                <button
                  ref={(node) => { options.current[index] = node; }}
                  type="button"
                  role="option"
                  aria-selected={t.id === theme}
                  tabIndex={t.id === theme ? 0 : -1}
                  onKeyDown={(e) => {
                    let next = index;
                    if (e.key === "ArrowDown") next = (index + 1) % themes.length;
                    else if (e.key === "ArrowUp") next = (index - 1 + themes.length) % themes.length;
                    else if (e.key === "Home") next = 0;
                    else if (e.key === "End") next = themes.length - 1;
                    else return;
                    e.preventDefault();
                    options.current[next]?.focus();
                  }}
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

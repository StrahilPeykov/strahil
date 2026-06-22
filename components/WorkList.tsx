import Link from "next/link";
import type { Doc } from "@/lib/content";

// Work entries rendered as a numbered "index": editor-style accent line numbers
// in the gutter, dotted leaders running out to the year. Used on the home page
// and /work so they stay consistent.
export function WorkList({ items }: { items: Doc[] }) {
  return (
    <ul className="border-t border-border">
      {items.map((w, i) => (
        <li key={w.slug} className="border-b border-border">
          <Link href={`/work/${w.slug}`} className="group block py-3.5">
            <div className="flex items-baseline gap-3 font-mono">
              <span className="text-sm tabular-nums text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="group-hover:text-accent">{w.title}</span>
              <span
                aria-hidden
                className="mx-1 flex-1 translate-y-[-3px] self-center border-b border-dotted border-border"
              />
              {w.year && <span className="text-xs text-muted">{w.year}</span>}
            </div>
            {w.summary && (
              <p className="mt-1 max-w-2xl pl-8 text-sm text-muted">{w.summary}</p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}

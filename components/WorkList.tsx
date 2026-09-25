import Link from "next/link";
import type { Doc } from "@/lib/content";

export function WorkList({ items }: { items: Doc[] }) {
  return (
    <ul className="entry-list">
      {items.map((w) => (
        <li key={w.slug}>
          <Link href={`/work/${w.slug}`} className="entry-link">
            <span className="entry-title">{w.title}</span>
            {w.year && <span className="entry-date">{w.year}</span>}
            {w.summary && (
              <p className="entry-summary">{w.summary}</p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}

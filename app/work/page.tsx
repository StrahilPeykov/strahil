import Link from "next/link";
import { getWork } from "@/lib/content";

export const metadata = {
  title: "Work",
  description: "Selected work by Strahil Peykov.",
  alternates: { canonical: "/work" },
};

export default function WorkIndex() {
  const work = getWork();

  return (
    <div className="space-y-6">
      <h1 className="font-mono text-xl">Work</h1>
      {work.length === 0 ? (
        <p className="text-muted">Nothing here yet.</p>
      ) : (
        <ul className="border-y border-border">
          {work.map((w) => (
            <li key={w.slug} className="border-b border-border last:border-b-0">
              <Link href={`/work/${w.slug}`} className="group block py-4">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono group-hover:text-accent">{w.title}</span>
                  {w.year && <span className="font-mono text-xs text-muted">{w.year}</span>}
                </div>
                {w.summary && <p className="mt-1 max-w-2xl text-sm text-muted">{w.summary}</p>}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

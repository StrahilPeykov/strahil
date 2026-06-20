import Link from "next/link";
import { getWriting } from "@/lib/content";

export const metadata = {
  title: "Writing",
  description: "Writing by Strahil Peykov.",
  alternates: { canonical: "/writing" },
};

export default function WritingIndex() {
  const posts = getWriting();

  return (
    <div className="space-y-6">
      <h1 className="font-mono text-xl">Writing</h1>
      {posts.length === 0 ? (
        <p className="text-muted">Nothing published yet.</p>
      ) : (
        <ul className="border-y border-border">
          {posts.map((p) => (
            <li key={p.slug} className="border-b border-border last:border-b-0">
              <Link
                href={`/writing/${p.slug}`}
                className="group flex items-baseline justify-between gap-4 py-4"
              >
                <span className="font-mono group-hover:text-accent">
                  {p.title}
                  {p.draft && (
                    <span className="ml-2 border border-border px-1 text-xs text-muted">draft</span>
                  )}
                </span>
                {p.date && <span className="font-mono text-xs text-muted">{p.date}</span>}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

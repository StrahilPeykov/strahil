import { getWork } from "@/lib/content";
import { WorkList } from "@/components/WorkList";

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
        <WorkList items={work} />
      )}
    </div>
  );
}

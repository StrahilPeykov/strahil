import { ogImage, OG_SIZE } from "@/lib/og";
import { getWriting, getDoc } from "@/lib/content";
import { site } from "@/lib/site";

export const alt = "Writing";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return getWriting().map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDoc("writing", slug);
  return ogImage(doc?.title ?? "Writing", site.name);
}

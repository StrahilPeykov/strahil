import { ogImage, OG_SIZE } from "@/lib/og";
import { site } from "@/lib/site";

export const alt = `${site.name}, ${site.role}`;
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OpengraphImage() {
  return ogImage(site.name, `${site.role}, ${site.location}`);
}

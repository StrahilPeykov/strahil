import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const OG_SIZE = { width: 1200, height: 630 };

// Vendored Fira Code (TTF) so the share card renders in the site's actual
// monospace, Satori has no built-in mono and would otherwise fall back to sans.
async function firaCode() {
  const dir = join(process.cwd(), "assets/fonts");
  const [regular, semibold] = await Promise.all([
    readFile(join(dir, "FiraCode-Regular.ttf")),
    readFile(join(dir, "FiraCode-SemiBold.ttf")),
  ]);
  return [
    { name: "Fira Code", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Fira Code", data: semibold, weight: 600 as const, style: "normal" as const },
  ];
}

// Shared social-share card. Dark theme, off-white title, coral accent rule.
export async function ogImage(title: string, subtitle: string) {
  const fonts = await firaCode();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#282c34",
          color: "#d8e0e8",
          fontFamily: "Fira Code",
          padding: "80px",
        }}
      >
        <div style={{ width: 64, height: 6, background: "#e06c75", marginBottom: 40 }} />
        <div style={{ fontSize: 64, fontWeight: 600, letterSpacing: -2, lineHeight: 1.15 }}>
          {title}
        </div>
        <div style={{ fontSize: 32, fontWeight: 400, color: "#9aa6b2", marginTop: 24 }}>
          {subtitle}
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts },
  );
}

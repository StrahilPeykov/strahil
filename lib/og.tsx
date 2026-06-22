import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

// Shared social-share card. Dark theme, off-white title, coral accent rule.
export function ogImage(title: string, subtitle: string) {
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
          fontFamily: "monospace",
          padding: "80px",
        }}
      >
        <div style={{ width: 64, height: 6, background: "#e06c75", marginBottom: 40 }} />
        <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -2, lineHeight: 1.15 }}>
          {title}
        </div>
        <div style={{ fontSize: 32, color: "#9aa6b2", marginTop: 24 }}>{subtitle}</div>
      </div>
    ),
    { ...OG_SIZE },
  );
}

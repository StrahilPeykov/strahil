import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded social-share card, generated at build time. Matches the dark theme:
// off-white text on the bg colour, with a coral accent rule.
export default function OpengraphImage() {
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
        <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>{site.name}</div>
        <div style={{ fontSize: 38, color: "#9aa6b2", marginTop: 16 }}>
          {`${site.role}, ${site.location}`}
        </div>
      </div>
    ),
    { ...size },
  );
}

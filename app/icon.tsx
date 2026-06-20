import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Generated favicon: a coral "S" on the dark theme background.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#282c34",
          color: "#e06c75",
          fontSize: 24,
          fontWeight: 700,
          fontFamily: "monospace",
        }}
      >
        S
      </div>
    ),
    { ...size },
  );
}

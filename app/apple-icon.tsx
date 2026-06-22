import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Home-screen / bookmark icon for iOS: a coral "S" on the dark theme background.
export default function AppleIcon() {
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
          fontSize: 120,
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

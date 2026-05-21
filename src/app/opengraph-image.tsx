import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "linear-gradient(135deg, #6B21A8 0%, #7C3AED 60%, #A855F7 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "-2px",
            display: "flex",
          }}
        >
          <span>DokiDoki</span>
          <span style={{ color: "#FF9800" }}>Tools</span>
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#E9D5FF",
            marginTop: 20,
            fontWeight: 700,
          }}
        >
          Free Online Utility Tools
        </div>
        <div style={{ fontSize: 18, color: "#C4B5FD", marginTop: 12 }}>
          No login · Works in your browser
        </div>
      </div>
    )
  );
}

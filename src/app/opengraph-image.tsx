import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Md Tameem Rahman | Portfolio";

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
          padding: 80,
          background: "#0c0a09",
          color: "#fafaf9",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#fb923c" }}>
          Portfolio
        </div>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 700, marginTop: 16 }}>
          Md Tameem Rahman
        </div>
        <div style={{ display: "flex", fontSize: 40, color: "#a8a29e", marginTop: 16 }}>
          Machine Learning & Full-Stack Developer
        </div>
        <div
          style={{
            display: "flex",
            width: 120,
            height: 8,
            marginTop: 40,
            borderRadius: 4,
            background: "#fb923c",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
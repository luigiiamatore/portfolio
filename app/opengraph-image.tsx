import { ImageResponse } from "next/og";
import { SITE } from "@/lib/content";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 20,
          background: "#ffffff",
          color: "#0a0a0a",
          padding: "90px",
          borderTop: "10px solid #c91f1f",
        }}
      >
        <span style={{ fontSize: 26, fontWeight: 700, color: "#c91f1f" }}>01</span>
        <span style={{ fontSize: 92, fontWeight: 800, letterSpacing: -2 }}>
          {SITE.name}
        </span>
        <span
          style={{
            fontSize: 26,
            textTransform: "uppercase",
            letterSpacing: 2,
            color: "#595959",
          }}
        >
          {SITE.title} &mdash; Milan, open to Europe
        </span>
      </div>
    ),
    { ...size }
  );
}

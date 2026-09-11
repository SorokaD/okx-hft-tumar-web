import { ImageResponse } from "next/og";

export const alt = "Tumar — Data, ML & Engineering Research";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f6f6f3",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.32em",
            color: "#171717",
          }}
        >
          TUMAR
        </div>
        <div
          style={{
            fontSize: 48,
            marginTop: 28,
            color: "#171717",
            lineHeight: 1.2,
            maxWidth: 840,
          }}
        >
          Data, ML & Engineering Research
        </div>
        <div
          style={{
            fontSize: 24,
            marginTop: 24,
            color: "#5f5f5a",
            maxWidth: 760,
            lineHeight: 1.4,
          }}
        >
          Personal research and engineering projects in data, machine learning
          and realtime systems.
        </div>
      </div>
    ),
    { ...size },
  );
}

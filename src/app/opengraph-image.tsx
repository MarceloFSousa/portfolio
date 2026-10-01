import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

// Imagem padrão de compartilhamento (WhatsApp, Facebook, Telegram, LinkedIn)
// para páginas sem imagem própria. Projetos usam a própria capa.
export const alt = `${siteConfig.handle}: ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#080c16",
          color: "#f8fafc",
          backgroundImage:
            "radial-gradient(circle at 0% 0%, rgba(16,185,129,0.22), transparent 55%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#10b981", letterSpacing: 4 }}>
          {siteConfig.handle.toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 68, lineHeight: 1.1, maxWidth: 980 }}>
            Sistemas de alta performance, tempo real e baixa latência
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#94a3b8" }}>
            {siteConfig.role} · {siteConfig.location}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#94a3b8" }}>
          {siteConfig.url.replace("https://", "")}
        </div>
      </div>
    ),
    size
  );
}

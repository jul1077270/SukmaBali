"use client";

import { useLightbox } from "@/components/LightboxProvider";

export default function PhotoPanel({ src, alt, wide = false }) {
  const { openLightbox } = useLightbox();

  return (
    <div className={`photo-panel ${wide ? "wide" : ""}`}>
      <img
        src={src}
        alt={alt}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        onClick={() => openLightbox([{ src, alt }], 0)}
      />
    </div>
  );
}

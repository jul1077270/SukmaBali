"use client";

import { useRef, useState } from "react";
import { useLightbox } from "@/components/LightboxProvider";

export default function Carousel({ images }) {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);
  const { openLightbox } = useLightbox();

  const goTo = (i) => setIndex((i + images.length) % images.length);

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
        onTouchStart={(e) => (startX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          const diff = e.changedTouches[0].clientX - startX.current;
          if (diff > 40) goTo(index - 1);
          else if (diff < -40) goTo(index + 1);
        }}
      >
        {images.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            onClick={() => openLightbox(images, i)}
          />
        ))}
      </div>
      <button className="carousel-btn carousel-prev" aria-label="Photo précédente" onClick={() => goTo(index - 1)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
      </button>
      <button className="carousel-btn carousel-next" aria-label="Photo suivante" onClick={() => goTo(index + 1)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
      </button>
      <span className="zoom-hint">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="10" cy="10" r="6" /><path d="M14.5 14.5L20 20M8 10h4M10 8v4" />
        </svg>
      </span>
      <div className="carousel-dots">
        {images.map((img, i) => (
          <span
            key={img.src}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}

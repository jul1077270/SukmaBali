"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

const LightboxContext = createContext(null);

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within LightboxProvider");
  return ctx;
}

export function LightboxProvider({ children }) {
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const openLightbox = useCallback((newSlides, startIndex) => {
    setSlides(newSlides);
    setIndex(startIndex);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  const goTo = useCallback(
    (i) => setIndex((prev) => (slides.length ? (i + slides.length) % slides.length : 0)),
    [slides.length]
  );

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    function onKey(e) {
      if (!open) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goTo(index - 1);
      if (e.key === "ArrowRight") goTo(index + 1);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, index, close, goTo]);

  const current = slides[index];

  return (
    <LightboxContext.Provider value={{ openLightbox }}>
      {children}

      <div
        className={`lightbox ${open ? "open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <button className="lightbox-close" aria-label="Fermer" onClick={close}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        {current && (
          <>
            <button
              className="carousel-btn carousel-prev"
              aria-label="Photo précédente"
              onClick={() => goTo(index - 1)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <img src={current.src} alt={current.alt || ""} />
            <button
              className="carousel-btn carousel-next"
              aria-label="Photo suivante"
              onClick={() => goTo(index + 1)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
            <span className="lightbox-counter">
              {slides.length > 1 ? `${index + 1} / ${slides.length}` : ""}
            </span>
          </>
        )}
      </div>
    </LightboxContext.Provider>
  );
}

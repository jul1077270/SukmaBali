"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#histoire", label: "L'appartement" },
  { href: "#espaces", label: "Les espaces" },
  { href: "#prestations", label: "Prestations" },
  { href: "#plaisirs", label: "Petits plaisirs" },
  { href: "#quartier", label: "Quartier" },
  { href: "#avis", label: "Avis" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <nav id="nav" className={scrolled ? "scrolled" : ""}>
      <div className="logo">
        <img src="/images/logo.jpg" alt="Logo Sukma Bali Suite and Spa" className="nav-logo-img" />
      </div>
      <div className={`nav-links ${open ? "open" : ""}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>
            {l.label}
          </a>
        ))}
      </div>
      <div
        className={`nav-burger ${open ? "open" : ""}`}
        role="button"
        aria-label="Menu"
        onClick={toggle}
      >
        <span></span><span></span><span></span>
      </div>
      <div className={`nav-scrim ${open ? "open" : ""}`} onClick={close}></div>
      <a href="#reserver" className="btn">Réserver</a>
    </nav>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function NavMultilingual() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#histoire", label: t.nav.story },
    { href: "#espaces", label: t.nav.spaces },
    { href: "#prestations", label: t.nav.amenities },
    { href: "#plaisirs", label: t.nav.pleasures },
    { href: "#quartier", label: t.nav.location },
    { href: "#avis", label: t.nav.reviews },
    { href: "#contact", label: t.nav.contact },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`sukma-nav ${scrolled ? "sukma-nav--scrolled" : ""}`}>
        <div className="sukma-nav__inner">

          {/* LOGO */}
          <a href="#top" className="sukma-nav__brand">
            <span className="sukma-nav__brand-main">
              SUKMA BALI
            </span>
            <span className="sukma-nav__brand-sub">
              Suite & SPA
            </span>
          </a>

          {/* NAVIGATION DESKTOP */}
          <nav className="sukma-nav__links">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="sukma-nav__link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="sukma-nav__actions">

            <LanguageSwitcher />

            <a
              href="#reserver"
              className="sukma-nav__booking"
            >
              <span>{t.nav.book}</span>
              <span className="sukma-nav__booking-arrow">↗</span>
            </a>

            {/* BURGER MOBILE */}
            <button
              className={`sukma-nav__burger ${
                menuOpen ? "is-open" : ""
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* MENU MOBILE */}
        <div
          className={`sukma-nav__mobile ${
            menuOpen ? "is-open" : ""
          }`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="sukma-nav__mobile-link"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#reserver"
            className="sukma-nav__mobile-booking"
            onClick={handleLinkClick}
          >
            {t.nav.book}
            <span>↗</span>
          </a>
        </div>
      </header>

      <style jsx>{`
        .sukma-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 900;
          padding: 18px 32px;
          background: transparent;
          transition:
            background 0.35s ease,
            padding 0.35s ease,
            box-shadow 0.35s ease;
        }

        .sukma-nav--scrolled {
          padding: 11px 32px;
          background: rgba(22, 20, 17, 0.92);
          backdrop-filter: blur(16px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        .sukma-nav__inner {
          width: 100%;
          max-width: 1500px;
          margin: 0 auto;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        /* LOGO */

        .sukma-nav__brand {
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: white;
          line-height: 1;
          min-width: 145px;
        }

        .sukma-nav__brand-main {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 18px;
          letter-spacing: 0.18em;
          font-weight: 500;
        }

        .sukma-nav__brand-sub {
          margin-top: 6px;
          font-size: 8px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          opacity: 0.7;
          padding-left: 2px;
        }

        /* LIENS */

        .sukma-nav__links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(14px, 1.8vw, 30px);
          flex: 1;
        }

        .sukma-nav__link {
          position: relative;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;

          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;

          white-space: nowrap;
          padding: 8px 0;

          transition:
            color 0.25s ease,
            opacity 0.25s ease;
        }

        .sukma-nav__link::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;

          width: 0;
          height: 1px;

          background: var(--gold, #b8935b);

          transform: translateX(-50%);
          transition: width 0.3s ease;
        }

        .sukma-nav__link:hover {
          color: white;
        }

        .sukma-nav__link:hover::after {
          width: 100%;
        }

        /* ACTIONS */

        .sukma-nav__actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        /*
          Le LanguageSwitcher existant est volontairement
          rendu plus discret ici.
        */

        .sukma-nav__actions :global(.language-switcher) {
          position: static !important;
          display: flex;
          padding: 2px;
          gap: 1px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: none;
          backdrop-filter: blur(10px);
        }

        .sukma-nav__actions :global(.language-switcher button) {
          color: rgba(255, 255, 255, 0.8);
          padding: 5px 7px;
          font-size: 10px;
        }

        .sukma-nav__actions :global(.language-switcher button.active) {
          background: var(--gold, #b8935b);
          color: white;
        }

        /* BOUTON RESERVER */

        .sukma-nav__booking {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          padding: 11px 16px;

          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 2px;

          color: white;
          text-decoration: none;

          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;

          transition:
            background 0.3s ease,
            border-color 0.3s ease,
            color 0.3s ease;
        }

        .sukma-nav__booking:hover {
          background: var(--gold, #b8935b);
          border-color: var(--gold, #b8935b);
          color: white;
        }

        .sukma-nav__booking-arrow {
          font-size: 14px;
          line-height: 1;
          transition: transform 0.3s ease;
        }

        .sukma-nav__booking:hover .sukma-nav__booking-arrow {
          transform: translate(2px, -2px);
        }

        /* BURGER */

        .sukma-nav__burger {
          display: none;
          width: 40px;
          height: 40px;
          border: 0;
          background: transparent;
          padding: 8px;
          cursor: pointer;
        }

        .sukma-nav__burger span {
          display: block;
          width: 24px;
          height: 1px;
          margin: 5px auto;
          background: white;
          transition: 0.3s ease;
        }

        .sukma-nav__burger.is-open span:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }

        .sukma-nav__burger.is-open span:nth-child(2) {
          opacity: 0;
        }

        .sukma-nav__burger.is-open span:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
        }

        /* MOBILE */

        .sukma-nav__mobile {
          display: none;
        }

        @media (max-width: 1150px) {
          .sukma-nav__links {
            gap: 14px;
          }

          .sukma-nav__link {
            font-size: 9px;
          }

          .sukma-nav__booking {
            padding: 9px 12px;
          }
        }

        @media (max-width: 950px) {
          .sukma-nav {
            padding: 12px 18px;
          }

          .sukma-nav__links {
            display: none;
          }

          .sukma-nav__booking {
            display: none;
          }

          .sukma-nav__burger {
            display: block;
          }

          .sukma-nav__actions {
            gap: 8px;
          }

          .sukma-nav__mobile {
            display: flex;
            position: absolute;
            top: 100%;
            left: 12px;
            right: 12px;

            flex-direction: column;
            gap: 0;

            padding: 10px 0;

            background: rgba(22, 20, 17, 0.97);
            backdrop-filter: blur(18px);

            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 3px;

            opacity: 0;
            visibility: hidden;
            transform: translateY(-8px);

            transition:
              opacity 0.25s ease,
              visibility 0.25s ease,
              transform 0.25s ease;
          }

          .sukma-nav__mobile.is-open {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          .sukma-nav__mobile-link {
            padding: 14px 22px;

            color: rgba(255, 255, 255, 0.9);
            text-decoration: none;

            font-size: 11px;
            letter-spacing: 0.12em;
            text-transform: uppercase;

            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          }

          .sukma-nav__mobile-link:hover {
            color: var(--gold, #b8935b);
          }

          .sukma-nav__mobile-booking {
            margin: 14px 18px 8px;
            padding: 13px;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;

            color: white;
            background: var(--gold, #b8935b);

            text-decoration: none;

            font-size: 10px;
            letter-spacing: 0.14em;
            text-transform: uppercase;
          }
        }

        @media (max-width: 500px) {
          .sukma-nav__brand-main {
            font-size: 15px;
          }

          .sukma-nav__brand-sub {
            font-size: 7px;
          }

          .sukma-nav__actions :global(.language-switcher button span) {
            display: none;
          }

          .sukma-nav__actions :global(.language-switcher button) {
            padding: 6px;
          }
        }
      `}</style>
    </>
  );
}

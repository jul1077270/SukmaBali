/* Navigation SUKMA BALI — version robuste
   - liens de navigation natifs (aucun preventDefault)
   - changement de langue via le LanguageContext
   - sélecteur de langue unique
   - bouton Réserver natif
*/
"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageContext";

export default function NavMultilingual() {
  const { t, lang, setLang, languages } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    ["#histoire", t.nav.story],
    ["#espaces", t.nav.spaces],
    ["#prestations", t.nav.amenities],
    ["#plaisirs", t.nav.pleasures],
    ["#quartier", t.nav.location],
    ["#avis", t.nav.reviews],
    ["#contact", t.nav.contact],
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sukma-nav">
      <div className="sukma-nav-inner">
        <a href="#top" className="sukma-nav-logo" onClick={closeMenu}>
          <span>SUKMA BALI</span>
          <small>Suite &amp; SPA</small>
        </a>

        <nav className="sukma-nav-links" aria-label="Navigation principale">
          {items.map(([href, label]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>

        <div className="sukma-nav-actions">
          <div className="sukma-languages" aria-label="Choisir la langue">
            {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                className={`sukma-language-btn ${lang === language.code ? "active" : ""}`}
                onClick={() => {
                  setLang(language.code);
                  setMenuOpen(false);
                }}
                aria-label={`Changer la langue : ${language.label}`}
                title={language.label}
              >
                <span className="flag" aria-hidden="true">{language.flag}</span>
                <span className="code">{language.code.toUpperCase()}</span>
              </button>
            ))}
          </div>

          <a href="#reserver" className="sukma-nav-book" onClick={closeMenu}>
            {t.nav.book}
            <span aria-hidden="true">↗</span>
          </a>

          <button
            type="button"
            className={`sukma-nav-burger ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <i /><i /><i />
          </button>
        </div>
      </div>

      <div className={`sukma-nav-mobile ${menuOpen ? "is-open" : ""}`}>
        {items.map(([href, label]) => (
          <a key={href} href={href} onClick={closeMenu}>
            {label}
          </a>
        ))}
        <a href="#reserver" className="mobile-book" onClick={closeMenu}>
          {t.nav.book} <span aria-hidden="true">↗</span>
        </a>
      </div>

      <style jsx>{`
        .sukma-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 99999;
          padding: 18px 30px;
          background: linear-gradient(to bottom, rgba(0,0,0,.52), transparent);
          pointer-events: auto;
        }

        .sukma-nav-inner {
          width: 100%;
          max-width: 1500px;
          min-height: 48px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .sukma-nav-logo,
        .sukma-nav-links a,
        .sukma-nav-book,
        .sukma-nav-mobile a {
          pointer-events: auto;
        }

        .sukma-nav-logo {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          color: #fff;
          text-decoration: none;
          line-height: 1;
          text-shadow: 0 1px 8px rgba(0,0,0,.3);
        }

        .sukma-nav-logo span {
          font-family: Georgia, serif;
          font-size: 17px;
          letter-spacing: .18em;
        }

        .sukma-nav-logo small {
          margin-top: 6px;
          font-size: 8px;
          letter-spacing: .3em;
          text-transform: uppercase;
          opacity: .82;
        }

        .sukma-nav-links {
          flex: 1 1 auto;
          min-width: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(10px, 1.4vw, 24px);
        }

        .sukma-nav-links a {
          position: relative;
          color: rgba(255,255,255,.94);
          text-decoration: none;
          font-size: 10px;
          letter-spacing: .07em;
          text-transform: uppercase;
          white-space: nowrap;
          padding: 9px 0;
        }

        .sukma-nav-links a::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 2px;
          width: 0;
          height: 1px;
          background: var(--gold, #b8935b);
          transform: translateX(-50%);
          transition: width .2s ease;
        }

        .sukma-nav-links a:hover::after {
          width: 100%;
        }

        .sukma-nav-actions {
          flex: 0 0 auto;
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 9px;
          position: relative;
          z-index: 100000;
          pointer-events: auto;
        }

        .sukma-languages {
          display: flex;
          align-items: center;
          gap: 1px;
          padding: 3px;
          border: 1px solid rgba(255,255,255,.32);
          border-radius: 999px;
          background: rgba(20,18,15,.55);
          box-shadow: 0 3px 12px rgba(0,0,0,.18);
          backdrop-filter: blur(9px);
          pointer-events: auto;
        }

        .sukma-languages button.sukma-language-btn {
          appearance: none;
          -webkit-appearance: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3px;
          min-width: 34px;
          border: 0;
          border-radius: 999px;
          padding: 6px 7px;
          margin: 0;
          background: transparent;
          color: rgba(255,255,255,.86);
          cursor: pointer;
          font: inherit;
          line-height: 1;
          pointer-events: auto;
          touch-action: manipulation;
        }

        .sukma-languages button.sukma-language-btn:hover {
          background: rgba(255,255,255,.14);
          color: #fff;
        }

        .sukma-languages button.sukma-language-btn.active {
          background: var(--gold, #b8935b);
          color: #fff;
        }

        .sukma-languages .flag { font-size: 13px; }
        .sukma-languages .code {
          font-size: 8px;
          font-weight: 700;
          letter-spacing: .05em;
        }

        .sukma-nav-book {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 10px 14px;
          border: 1px solid rgba(255,255,255,.65);
          border-radius: 2px;
          color: #fff;
          text-decoration: none;
          font-size: 9px;
          letter-spacing: .12em;
          text-transform: uppercase;
          white-space: nowrap;
          background: rgba(0,0,0,.12);
          cursor: pointer;
          touch-action: manipulation;
        }

        .sukma-nav-book:hover {
          background: var(--gold, #b8935b);
          border-color: var(--gold, #b8935b);
        }

        .sukma-nav-burger,
        .sukma-nav-mobile {
          display: none;
        }

        @media (max-width: 1050px) {
          .sukma-nav-links { gap: 10px; }
          .sukma-nav-links a { font-size: 8px; }
        }

        @media (max-width: 900px) {
          .sukma-nav {
            padding: 11px 15px;
            background: rgba(18,16,14,.84);
            backdrop-filter: blur(12px);
          }

          .sukma-nav-links,
          .sukma-nav-book {
            display: none;
          }

          .sukma-nav-inner {
            justify-content: space-between;
          }

          .sukma-nav-actions {
            margin-left: 0;
          }

          .sukma-nav-burger {
            display: flex;
            width: 40px;
            height: 40px;
            padding: 7px;
            flex-direction: column;
            justify-content: center;
            gap: 5px;
            border: 0;
            background: transparent;
            cursor: pointer;
            pointer-events: auto;
            touch-action: manipulation;
          }

          .sukma-nav-burger i {
            display: block;
            width: 23px;
            height: 1px;
            background: #fff;
            transition: .2s ease;
          }

          .sukma-nav-burger.is-open i:nth-child(1) {
            transform: translateY(6px) rotate(45deg);
          }

          .sukma-nav-burger.is-open i:nth-child(2) {
            opacity: 0;
          }

          .sukma-nav-burger.is-open i:nth-child(3) {
            transform: translateY(-6px) rotate(-45deg);
          }

          .sukma-nav-mobile {
            display: flex;
            position: absolute;
            top: 100%;
            left: 12px;
            right: 12px;
            flex-direction: column;
            padding: 8px 0;
            background: rgba(20,18,15,.98);
            border: 1px solid rgba(255,255,255,.12);
            border-radius: 3px;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-8px);
            transition: .2s ease;
            pointer-events: none;
          }

          .sukma-nav-mobile.is-open {
            opacity: 1;
            visibility: visible;
            transform: none;
            pointer-events: auto;
            z-index: 100001;
          }

          .sukma-nav-mobile a {
            padding: 13px 20px;
            color: #fff;
            text-decoration: none;
            font-size: 10px;
            letter-spacing: .12em;
            text-transform: uppercase;
            border-bottom: 1px solid rgba(255,255,255,.07);
          }

          .sukma-nav-mobile .mobile-book {
            margin: 10px 15px 5px;
            text-align: center;
            background: var(--gold, #b8935b);
            border: 0;
          }
        }

        @media (max-width: 500px) {
          .sukma-languages .code { display: none; }
          .sukma-languages button.sukma-language-btn {
            min-width: 30px;
            padding: 6px;
          }
          .sukma-nav-logo span { font-size: 15px; }
        }
      `}</style>
    </header>
  );
}

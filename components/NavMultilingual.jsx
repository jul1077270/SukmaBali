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

  const goTo = (href) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sukma-nav">
      <div className="sukma-nav-inner">
        <a
          href="#top"
          className="sukma-nav-logo"
          onClick={(e) => { e.preventDefault(); goTo("#top"); }}
        >
          <span>SUKMA BALI</span>
          <small>Suite &amp; SPA</small>
        </a>

        <nav className="sukma-nav-links" aria-label="Navigation principale">
          {items.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={(e) => { e.preventDefault(); goTo(href); }}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="sukma-nav-actions">
          {/* Sélecteur de langue intégré directement dans la navigation */}
          <div className="sukma-languages" aria-label="Choisir la langue">
            {languages.map(({ code, label, flag }) => (
              <button
                key={code}
                type="button"
                className={lang === code ? "active" : ""}
                onClick={() => setLang(code)}
                aria-label={label}
                title={label}
              >
                <span className="flag">{flag}</span>
                <span className="code">{code.toUpperCase()}</span>
              </button>
            ))}
          </div>

          <a
            href="#reserver"
            className="sukma-nav-book"
            onClick={(e) => { e.preventDefault(); goTo("#reserver"); }}
          >
            {t.nav.book}
            <span>↗</span>
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
          <a key={href} href={href} onClick={(e) => { e.preventDefault(); goTo(href); }}>
            {label}
          </a>
        ))}
        <a
          href="#reserver"
          className="mobile-book"
          onClick={(e) => { e.preventDefault(); goTo("#reserver"); }}
        >
          {t.nav.book} <span>↗</span>
        </a>
      </div>

      <style jsx>{`
        .sukma-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 900;
          padding: 18px 30px;
          background: linear-gradient(to bottom, rgba(0,0,0,.48), transparent);
        }

        .sukma-nav-inner {
          max-width: 1500px;
          margin: 0 auto;
          min-height: 48px;
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .sukma-nav-logo {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          color: #fff;
          text-decoration: none;
          line-height: 1;
          text-shadow: 0 1px 8px rgba(0,0,0,.25);
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
          opacity: .8;
        }

        .sukma-nav-links {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(12px, 1.55vw, 26px);
        }

        .sukma-nav-links a {
          position: relative;
          color: rgba(255,255,255,.92);
          text-decoration: none;
          font-size: 10px;
          letter-spacing: .08em;
          text-transform: uppercase;
          white-space: nowrap;
          padding: 8px 0;
          text-shadow: 0 1px 7px rgba(0,0,0,.25);
        }

        .sukma-nav-links a::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 1px;
          width: 0;
          height: 1px;
          background: var(--gold, #b8935b);
          transform: translateX(-50%);
          transition: width .25s ease;
        }

        .sukma-nav-links a:hover::after { width: 100%; }

        .sukma-nav-actions {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .sukma-languages {
          display: flex;
          align-items: center;
          gap: 1px;
          padding: 3px;
          border: 1px solid rgba(255,255,255,.28);
          border-radius: 999px;
          background: rgba(20,18,15,.38);
          box-shadow: 0 3px 12px rgba(0,0,0,.12);
          backdrop-filter: blur(9px);
        }

        .sukma-languages button {
          display: flex;
          align-items: center;
          gap: 3px;
          border: 0;
          border-radius: 999px;
          padding: 5px 7px;
          background: transparent;
          color: rgba(255,255,255,.82);
          cursor: pointer;
          font: inherit;
          line-height: 1;
          transition: background .2s ease, color .2s ease;
        }

        .sukma-languages button:hover {
          background: rgba(255,255,255,.12);
          color: #fff;
        }

        .sukma-languages button.active {
          background: var(--gold, #b8935b);
          color: #fff;
        }

        .sukma-languages .flag { font-size: 12px; }
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
          border: 1px solid rgba(255,255,255,.58);
          border-radius: 2px;
          color: #fff;
          text-decoration: none;
          font-size: 9px;
          letter-spacing: .12em;
          text-transform: uppercase;
          white-space: nowrap;
          background: rgba(0,0,0,.08);
          transition: background .2s ease, border-color .2s ease;
        }

        .sukma-nav-book:hover {
          background: var(--gold, #b8935b);
          border-color: var(--gold, #b8935b);
        }

        .sukma-nav-book span { font-size: 13px; }
        .sukma-nav-burger { display: none; }
        .sukma-nav-mobile { display: none; }

        @media (max-width: 1050px) {
          .sukma-nav-links { gap: 12px; }
          .sukma-nav-links a { font-size: 9px; }
        }

        @media (max-width: 900px) {
          .sukma-nav {
            padding: 11px 15px;
            background: rgba(18,16,14,.78);
            backdrop-filter: blur(12px);
          }

          .sukma-nav-links, .sukma-nav-book { display: none; }
          .sukma-nav-inner { justify-content: space-between; }

          .sukma-nav-burger {
            display: flex;
            width: 38px;
            height: 38px;
            padding: 7px;
            flex-direction: column;
            justify-content: center;
            gap: 5px;
            border: 0;
            background: transparent;
            cursor: pointer;
          }

          .sukma-nav-burger i {
            display:block;
            width:23px;
            height:1px;
            background:#fff;
            transition:.2s ease;
          }

          .sukma-nav-burger.is-open i:nth-child(1) { transform: translateY(6px) rotate(45deg); }
          .sukma-nav-burger.is-open i:nth-child(2) { opacity:0; }
          .sukma-nav-burger.is-open i:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

          .sukma-nav-mobile {
            display: flex;
            position: absolute;
            top: 100%;
            left: 12px;
            right: 12px;
            flex-direction: column;
            padding: 8px 0;
            background: rgba(20,18,15,.97);
            border: 1px solid rgba(255,255,255,.1);
            border-radius: 3px;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-8px);
            transition: .2s ease;
            pointer-events: none;
          }

          .sukma-nav-mobile.is-open {
            opacity:1;
            visibility:visible;
            transform:none;
            pointer-events:auto;
          }

          .sukma-nav-mobile a {
            padding: 13px 20px;
            color:#fff;
            text-decoration:none;
            font-size:10px;
            letter-spacing:.12em;
            text-transform:uppercase;
            border-bottom:1px solid rgba(255,255,255,.07);
          }

          .sukma-nav-mobile .mobile-book {
            margin:10px 15px 5px;
            text-align:center;
            background:var(--gold,#b8935b);
            border:0;
          }
        }

        @media (max-width: 500px) {
          .sukma-languages .code { display:none; }
          .sukma-languages button { padding:6px; }
          .sukma-nav-logo span { font-size:15px; }
        }
      `}</style>
    </header>
  );
}

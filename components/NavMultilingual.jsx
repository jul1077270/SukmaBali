"use client";
import { useLanguage } from "./LanguageContext";
export default function NavMultilingual() {
  const { t } = useLanguage();
  const items = [["#histoire", t.nav.story], ["#espaces", t.nav.spaces], ["#prestations", t.nav.amenities], ["#plaisirs", t.nav.pleasures], ["#quartier", t.nav.location], ["#avis", t.nav.reviews], ["#contact", t.nav.contact]];
  return <nav className="site-nav">
    <a href="#top" className="site-nav-logo">Sukma Bali <small>Suite &amp; Spa</small></a>
    <div className="site-nav-links">{items.map(([href, label]) => <a key={href} href={href}>{label}</a>)}<a href="#reserver" className="btn solid">{t.nav.book}</a></div>
  </nav>;
}

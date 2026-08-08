import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Carousel from "@/components/Carousel";
import PhotoPanel from "@/components/PhotoPanel";
import BackToTop from "@/components/BackToTop";

const coconImages = [
  { src: "/images/cocon-1-verriere.jpg", alt: "Vue à travers la verrière sur la chambre baldaquin et le coin repas" },
  { src: "/images/cocon-2-ambiance.jpg", alt: "Ambiance tamisée de la salle de bain balnéo avec plantes suspendues" },
  { src: "/images/cocon-3-tete-de-lit.jpg", alt: "Tête de lit avec cadre végétal et coussins tressés" },
  { src: "/images/cocon-5-peignoirs.jpg", alt: "Peignoirs et linge de bain pliés sur le lit avec feuilles tropicales" },
];

const cuisineImages = [
  { src: "/images/cuisine-1-plan-travail.jpg", alt: "Plan de travail et coin cuisson, crédence carreaux de ciment colorés" },
  { src: "/images/cuisine-2-evier.jpg", alt: "Évier, plaque de cuisson et rangements de la cuisine" },
  { src: "/images/cuisine-3-machine-cafe.jpg", alt: "Machine à café et bouilloire sur le plan de travail" },
  { src: "/images/cuisine-4-plateau-the.jpg", alt: "Service à thé et carafe posés sur un plateau en bois" },
];

const salleEauImages = [
  { src: "/images/salle-eau-1-douche.jpg", alt: "Douche à l'italienne, robinetterie dorée et crédence en carreaux mosaïque" },
  { src: "/images/salle-eau-2-vasque.jpg", alt: "Vasque et miroir de la salle d'eau, ambiance dorée et carrelage mosaïque" },
  { src: "/images/salle-eau-3-ensemble.jpg", alt: "Vasque, miroir et porte de la salle d'eau vue d'ensemble" },
  { src: "/images/salle-eau-4-paroi.jpg", alt: "Douche à l'italienne, paroi vitrée et robinetterie dorée" },
];

const rooms = [
  {
    tag: "01 — Vivre & dormir",
    name: "Suite bien-être",
    images: coconImages,
    text: "Un espace signature où la détente se vit à 360° : lit douillet aux tons terracotta, chaises en rotin cannées façon bar de nuit, sauna privatif et baignoire balnéo à jets réunis dans un seul cocon baigné de lumière.",
  },
  {
    tag: "02 — Les papilles",
    name: "Cuisine ouverte sur l'envie",
    images: cuisineImages,
    text: "Que ce soit pour préparer un petit-déjeuner à deux, savourer un dîner intimiste ou simplement partager un verre après un moment de détente au spa, la cuisine offre un espace convivial où chaque instant devient un plaisir. Fonctionnelle et parfaitement équipée, elle complète l'expérience unique de votre séjour.",
  },
  {
    tag: "03 — La parenthèse",
    name: "Bulle d'eau tropicale",
    images: salleEauImages,
    text: "Douche à l'italienne tout en verre, robinetterie dorée façon rain shower et crédence en mosaïque colorée : une bulle d'eau chic qui prolonge l'ambiance spa balinaise, à quelques pas du cocon.",
  },
];

const amenities = [
  {
    title: "Sauna privatif",
    text: "Un sauna intégré à la pièce de vie, accessible à toute heure du séjour.",
    icon: "M4 21h16M6 21V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12M9 7V5a3 3 0 0 1 6 0v2",
  },
  {
    title: "Baignoire balnéo",
    text: "Une baignoire à bulles pour prolonger la détente, sans sortir de la pièce principale.",
    icon: "M3 13a9 9 0 0 0 18 0M3 13h18M6 13V7a3 3 0 0 1 3-3M17 9c1-1 1-2 0-3",
  },
  {
    title: "Wifi fibre",
    text: "Connexion haut débit stable dans tout l'appartement, idéale télétravail.",
    icon: "M2 8c6-6 14-6 20 0M6 12c4-4 8-4 12 0M10 16c1.5-1.5 2.5-1.5 4 0M12 20h.01",
  },
  {
    title: "Conciergerie",
    text: "Arrivée autonome ou accueil personnalisé, disponible pour toute question.",
    icon: "M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
    rect: true,
  },
  {
    title: "Arrivée flexible",
    text: "Check-in dès 17h, check-out à 11h, aménageable sur demande.",
    icon: "M12 7v5l3 3",
    circle: true,
  },
  {
    title: "Cuisine équipée",
    text: "Tout le nécessaire pour cuisiner comme à la maison, café et thé offerts.",
    icon: "M5 17h14l-2-9H7l-2 9zM8 17v2M16 17v2M8 8V5M16 8V5",
  },
];

const plaisirs = [
  { label: "Petit déjeuner", price: "15€" },
  { label: "Coffret coquin", price: "50€" },
  { label: "Heure supplémentaire", price: "20€" },
  { label: "Carte cadeau séjour", price: "dès 150€" },
];

const locItems = [
  { label: "Disneyland Paris", value: "20 min en voiture" },
  { label: "Paris (Gare de l'Est)", value: "30 min en RER P" },
  { label: "Aéroport Paris-CDG", value: "25 min en voiture" },
  { label: "Cathédrale & vieux Meaux", value: "8 min à pied" },
  { label: "Bords de Marne & canal", value: "1 min à pied" },
  { label: "Gare de Meaux", value: "7 min à pied" },
];

const avis = [
  {
    quote: "On s'est cru transportés à Bali sans quitter la ville. Chaque détail est pensé.",
    who: "Camille — séjour de 1 nuit",
  },
  {
    quote: "La déco est magnifique, très propre, et l'emplacement est parfait pour tout visiter à pied.",
    who: "Vincent — séjour d'affaires",
  },
  {
    quote: "Un vrai cocon. On a eu l'impression d'être en vacances dès la porte franchie.",
    who: "Sofia — week-end en couple",
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      <section className="hero">
        <div className="hero-photo" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} />
        <div className="hero-overlay" />
        <svg className="hero-pattern" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="frang" width="140" height="140" patternUnits="userSpaceOnUse">
              <g stroke="#B8935B" strokeWidth="0.7" fill="none" opacity="0.8">
                <path d="M70 30 C 85 45, 85 65, 70 80 C 55 65, 55 45, 70 30 Z" />
                <path d="M40 55 C 55 55, 65 65, 70 80 C 55 82, 42 75, 40 55 Z" />
                <path d="M100 55 C 85 55, 75 65, 70 80 C 85 82, 98 75, 100 55 Z" />
                <circle cx="70" cy="80" r="4" />
              </g>
            </pattern>
          </defs>
          <rect width="800" height="800" fill="url(#frang)" />
        </svg>
        <div className="wrap hero-inner">
          <span className="eyebrow">Appartement entier · Meaux, à 30 min de Paris</span>
          <h1>
            Un refuge <em>balinais</em>
            <br />
            aux portes de Paris.
          </h1>
          <p className="sub">
            Bienvenue à <strong>SUKMA BALI Suite &amp; SPA</strong>, une invitation au voyage où
            l&apos;élégance balinaise, le bien-être et le romantisme se rencontrent.
            <br />
            <br />
            Offrez-vous une parenthèse hors du temps dans une suite d&apos;exception pensée pour
            éveiller les sens et créer des souvenirs inoubliables.
          </p>
          <div className="hero-cta">
            <a href="#reserver" className="btn solid">Réserver mon séjour</a>
            <a href="#espaces" className="btn">Découvrir les espaces</a>
          </div>
        </div>
        <div className="scroll-cue">
          <span>Défiler</span>
          <span className="line" />
        </div>
      </section>

      <section id="histoire">
        <Reveal as="div" className="wrap story">
          <PhotoPanel
            src="/images/esprit-des-lieux.jpg"
            alt="Chambre bohème avec baignoire balnéo, bar en rotin et lit à baldaquin voilé"
          />
          <div className="story-text">
            <span className="eyebrow">L&apos;esprit des lieux</span>
            <p>
              Plus qu&apos;une suite, <strong>SUKMA BALI Suite &amp; SPA</strong> est une
              invitation à ralentir, à se retrouver et à vivre une expérience inspirée de l&apos;art
              de vivre balinais.
            </p>
            <p>
              Chaque détail a été imaginé pour créer une atmosphère chaleureuse et apaisante : les
              essences de bois naturel, le rotin, les matières nobles et les lumières tamisées
              s&apos;unissent pour offrir un véritable havre de sérénité.
            </p>
            <p>
              Le spa privatif, le sauna et les espaces de détente prolongent cette parenthèse hors
              du temps, où le bien-être devient une évidence et où chaque instant invite à la
              déconnexion.
            </p>
            <p>
              Nichée à Meaux, à seulement quelques kilomètres de Paris et de Disneyland® Paris, la
              suite vous offre l&apos;évasion d&apos;un voyage à Bali, sans quitter l&apos;Île-de-France.
            </p>
          </div>
        </Reveal>
      </section>

      <section id="espaces" className="espaces">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Plan des lieux</span>
            <h2>Les espaces</h2>
            <p>
              35 m² conçus comme une suite balinaise : un cocon à vivre, une cuisine à soi, une
              bulle d&apos;eau pour se ressourcer.
            </p>
          </Reveal>
          <div className="room-list">
            {rooms.map((room) => (
              <Reveal as="div" className="room" key={room.name}>
                <Carousel images={room.images} />
                <div>
                  <div className="room-name">
                    <span>{room.tag}</span>
                    {room.name}
                  </div>
                </div>
                <p>{room.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="prestations">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Carte de bienvenue</span>
            <h2>Prestations</h2>
            <p>Le confort d&apos;un hôtel haut de gamme, la discrétion d&apos;un chez-soi.</p>
          </Reveal>
          <Reveal as="div" className="amenities-grid">
            {amenities.map((a) => (
              <div className="amenity" key={a.title}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  {a.rect && <rect x="3" y="7" width="18" height="13" rx="1" />}
                  {a.circle && <circle cx="12" cy="12" r="9" />}
                  <path d={a.icon} />
                </svg>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="plaisirs" style={{ background: "var(--ivory-2)" }}>
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Sur demande</span>
            <h2>Les petits plaisirs</h2>
          </Reveal>
          <Reveal as="div" className="plaisirs-intro">
            <p>
              Parce qu&apos;un séjour se savoure aussi dans les détails, notre collection de
              petits plaisirs vient prolonger la douceur de votre passage à Sukma Bali.
            </p>
            <p>
              Chaque attention devient une <em>respiration en plus</em> — une gourmandise, un
              parfum, une lumière tamisée — pensée pour envelopper votre séjour d&apos;un
              supplément de calme.
            </p>
          </Reveal>
          <Reveal as="div" className="chip-grid">
            {plaisirs.map((p) => (
              <div className="chip" key={p.label}>
                {p.label} <span className="price">{p.price}</span>
              </div>
            ))}
          </Reveal>

          <Reveal as="div" className="plaisirs-feature reverse">
            <div>
              <h3>Douceur, liberté et souvenirs</h3>
              <p>
                Prolongez l&apos;instant grâce à <strong>une heure supplémentaire</strong>,
                offrez une parenthèse avec nos <strong>cartes cadeaux valables un an</strong>, et
                laissez-vous porter : chaque option est pensée pour que le temps devienne un
                allié, et votre séjour, un souvenir à partager.
              </p>
            </div>
            <PhotoPanel
              src="/images/plaisir-carte-cadeau.jpg"
              alt="Carte cadeau bien-être avec bougies, huiles essentielles et fleurs séchées"
            />
          </Reveal>
        </div>
      </section>

      <section id="quartier">
        <Reveal as="div" className="wrap location">
          <div>
            <span className="eyebrow">Où poser ses valises</span>
            <h2>Meaux, le meilleur des deux mondes</h2>
            <p style={{ marginTop: 18, color: "#5c5346", fontSize: 16, lineHeight: 1.7 }}>
              Ville d&apos;art et d&apos;histoire au bord de la Marne, réputée pour sa cathédrale,
              son marché et son brie — Meaux offre le calme d&apos;une ville à taille humaine tout
              en gardant Paris et Disneyland Paris à portée de main.
            </p>
            <div className="loc-list">
              {locItems.map((l) => (
                <div className="loc-item" key={l.label}>
                  <span>{l.label}</span>
                  <span>{l.value}</span>
                </div>
              ))}
            </div>
          </div>
          <PhotoPanel
            wide
            src="/images/carte-quartier.jpg"
            alt="Carte du quartier de Sukma Bali à Meaux avec la cathédrale, la gare et le marché"
          />
        </Reveal>

        <div className="wrap">
          <Reveal as="div" className="highlight-grid">
            <div className="highlight-card">
              <PhotoPanel
                src="/images/cathedrale-meaux.jpg"
                alt="Cathédrale Saint-Étienne de Meaux, carte postale ancienne"
              />
              <h4>Cathédrale de Meaux</h4>
              <p>8 min à pied</p>
            </div>

            <div className="highlight-card">
              <PhotoPanel
                src="/images/tour-eiffel-seine.jpg"
                alt="Tour Eiffel illuminée de nuit vue depuis la Seine"
              />
              <h4>Disneyland Paris</h4>
              <p>15 min en voiture</p>
            </div>

            <div className="highlight-card">
              <PhotoPanel
                src="/images/tour-eiffel-trocadero.jpg"
                alt="Tour Eiffel de nuit vue depuis le Trocadéro"
              />
              <h4>Tour Eiffel, Paris</h4>
              <p>30 min en RER P</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="avis" style={{ background: "var(--ivory-2)" }}>
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Ils ont posé leurs valises ici</span>
            <h2>Avis des voyageurs</h2>
          </Reveal>
          <Reveal as="div" className="avis-grid">
            {avis.map((a) => (
              <div className="avis-card" key={a.who}>
                <p className="quote">{a.quote}</p>
                <div className="who">{a.who}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="reserver" className="cta-band">
        <Reveal as="div" className="wrap">
          <span className="eyebrow" style={{ color: "var(--gold-soft)" }}>
            Prêt pour l&apos;évasion
          </span>
          <h2>Réservez votre parenthèse balinaise</h2>
          <p>
            Disponibilités en temps réel, confirmation immédiate. Ajoutez vos dates et laissez la
            ville s&apos;effacer.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginTop: 8 }}>
            <a
              href="https://www.airbnb.fr/rooms/1727460335718231556"
              target="_blank"
              rel="noopener noreferrer"
              className="btn solid"
            >
              Voir les disponibilités sur Airbnb
            </a>
            <a
              href="https://www.booking.com/hotel/fr/suite-balneo-sauna-couple-vue-marne-15mn-disney.fr.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ borderColor: "var(--cream)", color: "var(--cream)" }}
            >
              Réserver sur Booking.com
            </a>
          </div>
        </Reveal>
      </section>

      <footer>
        <div className="wrap">
          <div className="foot-top">
            <div>
              <div className="logo">
                <span className="brandmark" style={{ fontSize: 30, color: "var(--gold-soft)" }}>
                  Sukma Bali
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-plexmono), monospace",
                    fontSize: 10,
                    letterSpacing: "0.25em",
                    color: "var(--moss)",
                    textTransform: "uppercase",
                    marginLeft: 2,
                  }}
                >
                  Suite &amp; Spa
                </span>
              </div>
              <p>
                Un appartement entier à Meaux, à 30 min de Paris et 20 min de Disneyland Paris,
                habillé de teck et de rotin comme une villa balinaise miniature.
              </p>
            </div>
            <div className="foot-cols">
              <div className="foot-col">
                <h4>Contact</h4>
                <a href="mailto:sukmabali-suite@gmail.com">sukmabali-suite@gmail.com</a>
                <a href="tel:+33750244250">07 50 24 42 50</a>
              </div>
              <div className="foot-col">
                <h4>Suivre</h4>
                <a
                  href="https://www.instagram.com/sukmabali_suiteandspa?igsh=dHMyNjU5YWJsdTQ1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/share/1FNQ4Bsod2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                <a
                  href="https://www.airbnb.fr/rooms/1727460335718231556"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Airbnb
                </a>
                <a
                  href="https://www.booking.com/hotel/fr/suite-balneo-sauna-couple-vue-marne-15mn-disney.fr.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Booking.com
                </a>
              </div>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 Sukma Bali Suite &amp; Spa. Tous droits réservés.</span>
            <span>Meaux, France</span>
          </div>
        </div>
      </footer>
      <BackToTop />
    </>
  );
}

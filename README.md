# Sukma Bali Suite & Spa — Next.js

Conversion du site statique en application React / Next.js (App Router), avec toutes vos photos actuelles.

## Installation

```bash
npm install
```

## Lancer en développement

```bash
npm run dev
```

Puis ouvrir http://localhost:3000

## Build production

```bash
npm run build
npm run start
```

## Structure

- `app/layout.jsx` — polices + metadata + fournisseur de lightbox
- `app/page.jsx` — toutes les sections de la page
- `app/globals.css` — styles globaux
- `components/Nav.jsx`, `Reveal.jsx`, `Carousel.jsx`, `PhotoPanel.jsx`, `LightboxProvider.jsx`
- `public/images/` — toutes vos photos actuelles

## À noter

Dans la section "Où poser ses valises", la carte "Disneyland Paris" utilise actuellement la photo
de la Tour Eiffel vue depuis la Seine (`tour-eiffel-seine.jpg`), et la carte "Tour Eiffel, Paris"
utilise la photo vue depuis le Trocadéro (`tour-eiffel-trocadero.jpg`). Si ce n'est pas voulu,
remplacez `tour-eiffel-seine.jpg` par une photo adaptée à Disneyland (voir la remarque sur les
droits d'auteur/marque déposée pour le château Disney).

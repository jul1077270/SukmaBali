import { Fraunces, Work_Sans, IBM_Plex_Mono, Italianno } from "next/font/google";
import "./globals.css";
import { LightboxProvider } from "@/components/LightboxProvider";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-worksans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plexmono",
  display: "swap",
});

const italianno = Italianno({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-italianno",
  display: "swap",
});

export const metadata = {
  title: "Sukma Bali Suite & Spa — Refuge balinais aux portes de Paris",
  description:
    "Suite entière à Meaux, à 30 min de Paris et 20 min de Disneyland Paris. Décoration balinaise, sauna privatif et baignoire balnéo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${fraunces.variable} ${workSans.variable} ${plexMono.variable} ${italianno.variable}`}
      >
        <LightboxProvider>{children}</LightboxProvider>
      </body>
    </html>
  );
}

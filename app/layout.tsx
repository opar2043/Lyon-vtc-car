import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Lyon VTC Premium | Chauffeur Privé à Lyon",
  description: "Votre chauffeur privé à Lyon — Confort, ponctualité et discrétion garantis. Transferts aéroport, gare, et mise à disposition.",
  openGraph: {
    title: "Lyon VTC Premium",
    description: "Votre chauffeur privé à Lyon — Confort, ponctualité et discrétion garantis.",
    url: "https://lyonvtcpremium.fr",
    siteName: "Lyon VTC Premium",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${cormorant.variable} ${montserrat.variable} font-sans bg-brand-black text-brand-white antialiased`}>
        {children}
      </body>
    </html>
  );
}

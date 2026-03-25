import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Signora - Ristorante Boutique",
  description: "Restaurante italiano em Santa Maria de Lamas com pizzas artesanais, massas frescas e experiências gastronómicas únicas.",
  keywords: ["restaurante italiano", "pizzaria", "Santa Maria de Lamas", "La Signora", "massas frescas", "pizzas artesanais", "gastronomia italiana"],
  authors: [{ name: "La Signora Boutique" }],
  openGraph: {
    title: "La Signora - Ristorante Boutique",
    description: "Restaurante italiano em Santa Maria de Lamas com pizzas artesanais, massas frescas e experiências gastronómicas únicas.",
    url: "https://lasignora.pt",
    siteName: "La Signora Boutique",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "La Signora Logo",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Signora - Ristorante Boutique",
    description: "Restaurante italiano em Santa Maria de Lamas com pizzas artesanais, massas frescas e experiências gastronómicas únicas.",
    images: ["/images/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${inter.variable} ${playfair.variable} scroll-smooth antialiased`}
    >
      <body className="font-sans font-light min-h-screen flex flex-col">{children}</body>
    </html>
  );
}

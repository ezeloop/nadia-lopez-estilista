import type { Metadata } from "next";
import "./globals.css";
import { LoadingScreen } from "@/components/LoadingScreen";

export const metadata: Metadata = {
  metadataBase: new URL("https://nadia-lopez-estilista.vercel.app"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  title: "Nadia López | Estilista Profesional – Córdoba",
  description:
    "Estilista profesional en Córdoba Capital. Diseño de color, balayage, tratamientos capilares, peinados para eventos y más. Atención personalizada a domicilio y presencial.",
  keywords: [
    "estilista córdoba",
    "balayage córdoba",
    "diseño de color córdoba",
    "peinados para casamientos córdoba",
    "alisado sin formol córdoba",
    "peluquería a domicilio córdoba",
  ],
  authors: [{ name: "Nadia López" }],
  creator: "Nadia López",
  openGraph: {
    title: "Nadia López | Estilista Profesional – Córdoba",
    description:
      "Diseño de color, balayage, tratamientos capilares y peinados para eventos en Córdoba Capital.",
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: "/estilista-nadia-lopez/nadia-lopez-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Nadia López – Estilista Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nadia López | Estilista Profesional – Córdoba",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain-overlay antialiased">
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}

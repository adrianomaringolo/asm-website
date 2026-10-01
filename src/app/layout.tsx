import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = "https://asmmktdigital.com.br";
const title = "ASM Marketing Digital | Consultoria e Gestão de Redes Sociais";
const description =
  "Consultoria de marketing digital com Anelita Massucate: gestão de Instagram, identidade visual, tráfego pago e sites para empresas e profissionais autônomos.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | ASM Marketing Digital",
  },
  description,
  applicationName: "ASM Marketing Digital",
  keywords: [
    "marketing digital",
    "consultoria de marketing digital",
    "gestão de redes sociais",
    "social media",
    "gestão de Instagram",
    "tráfego pago",
    "identidade visual",
    "criação de sites",
    "mentoria de marketing",
    "Anelita Massucate",
    "ASM Marketing Digital",
  ],
  authors: [{ name: "Anelita Massucate", url: siteUrl }],
  creator: "Anelita Massucate",
  publisher: "ASM Marketing Digital",
  category: "marketing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "ASM Marketing Digital",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#52382A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR' className={`${cormorant.variable} ${manrope.variable}`}>
      <body className='font-sans'>{children}</body>
    </html>
  );
}

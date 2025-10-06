import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title:
    "ASM Marketing Digital - Anelita Massucate | Consultoria e Gestão de Redes Sociais",
  description:
    "Transforme sua presença digital com estratégias personalizadas de marketing. Gestão de Instagram, tráfego pago, automação e criação de sites profissionais. +5 anos de experiência, +30 clientes atendidos.",
  keywords: [
    "marketing digital",
    "gestão de redes sociais",
    "Instagram para negócios",
    "tráfego pago",
    "automação WhatsApp",
    "criação de sites",
    "consultoria digital",
    "Anelita Massucate",
    "ASM Marketing",
    "social media",
    "design gráfico",
    "identidade visual",
    "estratégias digitais",
    "pequenos negócios",
    "profissionais autônomos",
  ],
  authors: [{ name: "Anelita Massucate" }],
  creator: "Anelita Massucate",
  publisher: "ASM Marketing Digital",
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
    title:
      "ASM Marketing Digital - Anelita Massucate | Consultoria e Gestão de Redes Sociais",
    description:
      "Transforme sua presença digital com estratégias personalizadas. Gestão de Instagram, tráfego pago, automação e criação de sites. +5 anos de experiência.",
    url: "https://asmmktdigital.com.br",
    siteName: "ASM Marketing Digital",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ASM Marketing Digital - Anelita Massucate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASM Marketing Digital - Anelita Massucate",
    description:
      "Transforme sua presença digital com estratégias personalizadas de marketing digital.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://asmmktdigital.com.br",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR' className={inter.variable}>
      <body className='font-sans'>{children}</body>
    </html>
  );
}

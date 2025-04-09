import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "ASM Marketing Digital - Anelita Massucate",
  description:
    "Transforme sua presença digital com estratégias personalizadas de marketing.",
  keywords: [
    "marketing digital",
    "estratégias digitais",
    "Instagram para negócios",
  ],
  openGraph: {
    title: "ASM Marketing Digital",
    description:
      "Consultoria e serviços de marketing para pequenos negócios e autônomos.",
    url: "https://seusite.com",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}

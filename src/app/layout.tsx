import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Libre_Franklin } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { getLocalBusinessSchema } from "@/lib/seo/schemas";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
  weight: ["700", "900"],
});

export const metadata: Metadata = {
  title: "Salão Juliana Moura | Especialista em Cabelo, Manicure e Pedicure",
  description: "O melhor cuidado para sua beleza em São Paulo. Cortes, escovas, manicure e pedicure com a excelência de Juliana Moura.",
  keywords: ["salão de beleza", "Juliana Moura", "corte de cabelo", "escova", "manicure", "pedicure", "São Paulo"],
  alternates: {
    canonical: "https://julianamoura.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = getLocalBusinessSchema();

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${libreFranklin.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

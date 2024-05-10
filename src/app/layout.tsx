import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './global.css'

const inter = Inter({ 
  subsets: ["latin"], 
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "Desafio ToDo List",
  description: "Desafio 01 - Praticando os conceitos do ReactJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

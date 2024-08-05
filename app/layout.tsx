import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projeto Culinaria",
  applicationName: "Projeto Culinaria",
  description: "Sistema web para busca de receitas criado com NextJS",
  generator: "Next.js",
  keywords: ["Next.js", "React", "JavaScript", "Culinaria"],
  authors: [{ name: "Adelson Junior", url: "" },{ name: "Matheus Tavares", url: "" }],
  publisher: "UFSJ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ptBR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Caveat, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
});

export const metadata: Metadata = {
  title: "Jornal do Pré-2",
  description:
    "Uma homepage editorial e afetiva para acompanhar as memórias mais preciosas da turma do Pré-2.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${playfair.variable} ${manrope.variable} ${caveat.variable} bg-[var(--background)] font-[family-name:var(--font-body)] text-[var(--ink)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
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
        className={`${fraunces.variable} ${manrope.variable} bg-[var(--background)] font-[family-name:var(--font-body)] text-[var(--foreground)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

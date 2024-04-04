import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/shared/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Delivery app",
  description: "Aplicacion de delivery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

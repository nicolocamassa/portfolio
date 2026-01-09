import type { Metadata } from "next";
import { Parkinsans, Fustat } from "next/font/google";
import "./globals.css";

const ParkinSans = Parkinsans({
  variable: "--font-parkinsans-sans",
  subsets: ["latin"],
});

const FustatMono = Fustat({
  variable: "--font-fustat-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Nicolò Camassa",
  description: "Il mio portfolio personale dove mostro le mie competenze",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ParkinSans.variable} ${FustatMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

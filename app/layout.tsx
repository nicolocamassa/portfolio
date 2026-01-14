import type { Metadata } from "next";
import { Parkinsans, Fustat } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/Footer";

const ParkinSans = Parkinsans({
  variable: "--font-parkinsans-sans",
  subsets: ["latin"],
  fallback: ["system-ui", "Arial"],
});

const FustatMono = Fustat({
  variable: "--font-fustat-mono",
  subsets: ["latin"],
  fallback: ["system-ui", "Arial"],
});

export const metadata: Metadata = {
  title: "Portfolio - Nicolò Camassa",
  description: "Il mio portfolio personale dove mostro le mie competenze",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${ParkinSans.variable} ${FustatMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

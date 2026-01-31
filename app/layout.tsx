import type { Metadata } from "next";
import "./globals.css";
import { Parkinsans, Fustat } from "next/font/google";
import { Footer, Header } from "@/_components/layout";


const ParkinSans = Parkinsans({ 
  variable: "--font-parkinsans-sans",
  subsets: ["latin"], 
  display: "swap",
  fallback: ["system-ui", "Arial"], });

const FustatMono = Fustat({
  variable: "--font-fustat-mono",
  subsets: ["latin"],
  fallback: ["system-ui", "Arial"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Il mio portfolio personale dove mostro le mie competenze",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={FustatMono.className} data-scroll-behavior="smooth">
      <body className={`${ParkinSans.variable} ${FustatMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

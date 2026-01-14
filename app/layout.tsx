import type { Metadata } from "next";
import { Parkinsans, Fustat } from "next/font/google";
import "./globals.css";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import ProjectSection from "./components/ProjectSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";




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

      <Header></Header>

      <main>
        <HeroSection></HeroSection>
        <ProjectSection></ProjectSection>
        <AboutSection></AboutSection>
      </main>

      <Footer></Footer>
        
      </body>
    </html>
  );
}

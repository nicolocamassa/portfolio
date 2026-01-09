import type { Metadata } from "next";
import { Parkinsans, Fustat } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import PageContent from "./components/PageContent";
import MainContent from "./components/MainContent";
import Footer from "./components/footer";


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
        
        <PageContent>
          <MainContent>
            Main
          </MainContent>

          <Footer></Footer>
        </PageContent>

        
      </body>
    </html>
  );
}

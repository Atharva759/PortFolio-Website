import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Home/Navbar/Navbar";

const font = Inter({
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "Atharva PortFolio",
  description: "This portfolio website is in development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-[#0d0d1f]`}
      >
        <Navbar/>
        {children}
        
      </body>
    </html>
  );
}

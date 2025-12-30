import type { Metadata } from "next";
import { Figtree, Martian_Mono } from "next/font/google";
import "./globals.css";
// import LightRays from

const figTree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-Martian-Mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WhatsDev",
  description: "Know about all the most iconic dev events around",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figTree.variable} ${martianMono.variable} min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

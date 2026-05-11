import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "Horizon — Digital Solutions Agency",
  description: "We build digital products that matter. Strategy, design, and development for ambitious companies.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import SessionProviderFunction from "@/services/SessionProviderFunction";
import Navbar from "@/components/Navigation/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Retire-Me!",
  description: "Calculadora de Liberdade Financeira, Financiamento e rebalanceador de portfólio!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 font-body min-h-screen">
        <SessionProviderFunction>
          <Navbar />
          {children}
        </SessionProviderFunction>
      </body>
    </html>
  );
}

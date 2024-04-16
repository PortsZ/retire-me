import type { Metadata } from "next";
import SessionProviderFunction from "@/services/SessionProviderFunction";
import Navbar from "@/components/Navigation/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
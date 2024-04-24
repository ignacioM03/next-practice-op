import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { NextUIProvider } from "@nextui-org/react";
import { AuthProvider } from "@/context/UseAuth";
import { Footer } from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Openix",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <AuthProvider>
            <Navbar />
            <main className="">{children}</main>
            <Footer />
          </AuthProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}

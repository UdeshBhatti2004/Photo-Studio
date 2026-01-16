import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navabar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

import {
  Inter,
  Playfair_Display,
  Cormorant_Garamond,
  Work_Sans,
} from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"] });
export const cormorant = Cormorant_Garamond({ subsets: ["latin"], style: ["italic"] });
export const workSans = Work_Sans({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "PhotoStudio",
  description: "Modern photography studio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"  className={`${inter.className}`}>
      <body className="bg-white text-black">
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
          <Toaster position="top-center" />
        </main>
        <Footer />
      </body>
    </html>
  );
}

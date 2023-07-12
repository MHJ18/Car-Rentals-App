import './globals.css'
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Cars Rentals",
  description: "Buy or Rent affordable cars",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={"relative"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

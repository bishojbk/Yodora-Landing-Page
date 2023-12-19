import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LayoutProps } from "@/app/@types/common";

const inter = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yodora",
  description: "A simple Yodora Landing Page Design",
};

export default function RootLayout(props: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{props.children}</body>
    </html>
  );
}

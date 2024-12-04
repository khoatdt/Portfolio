import type { Metadata } from "next";
import "./globals.css";
import { jetbrainsMono } from "@/components/ui/font";
import Navbar from "@/components/Header";

export const metadata: Metadata = {
  title: "Khoa Portfolio",
  description: "Discover my projects in web development and UI/UX design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.className} antialiased`}>
        <Navbar />

        <div className="h-[51rem] w-full dark:bg-black bg-seashell  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black  "></div>
          {children}
        </div>
      </body>
    </html>
  );
}

// ! bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] làm mờ background cho container
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Book Finder",
  description: "Book Finder by Eftakhar Jaman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
          <footer className="bg-gray-800 text-white text-center py-4">
            <p>© 2024 Book List App by Eftakhar Jaman. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import '@/sass/globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Schedule for Aliah CSE 5th semester",
  icons: "/images/icon-512x512.png",
  description: "Hi 👋",
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: "https://aliahcse.vercel.app",
    title: "Time Table",
    description: "An app to show time table for Aliah CSE semster 5 students",
    siteName: "Schedule for CSE",
    images: [{
      url: "https://aliahcse.vercel.app/images/sc-desktop.png",
    }],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

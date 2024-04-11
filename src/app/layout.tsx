import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DaBanda | OSS",
  description: "DaBanda Open Source",
  authors: {
    name: "Manuel Bento",
    url: "https://github.com/manuelbento19/"
  },
  metadataBase: new URL("https://dabanda-oss.vercel.app/"),
  openGraph: {
    title: "DaBanda | OSS",
    description: "DaBanda Open Source",
    url: "https://dabanda-oss.vercel.app/",
    siteName: "DaBanda",
    locale: "pt_PT",
    type: "website",
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

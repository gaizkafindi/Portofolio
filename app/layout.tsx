import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { profile } from "./data/profile";
export const metadata: Metadata = {
  title: `${profile.name} - ${profile.role}`,
  description: profile.tagline,
  keywords: [
    "Editor",
    
  ],
  authors: [{ name: profile.name, url: profile.social.github }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://Gaizka Findi Satria.com",
    title: `${profile.name} - ${profile.role}`,
    description: profile.tagline,
    siteName: `${profile.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} - ${profile.role}`,
    description: profile.tagline,
    creator: "@Gaizka Findi Satria",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-grow mt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
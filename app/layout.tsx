import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apex Surveying - Hybrid Cinematic Homepage",
  description: "Non lasciare che la burocrazia blocchi il tuo futuro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${spaceGrotesk.variable} antialiased bg-background-dark text-white font-display overflow-x-hidden selection:bg-primary selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}

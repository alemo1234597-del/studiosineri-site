import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

// 👇 1. THIS IS THE MAGIC LOCK FOR ANDROID BROWSERS 👇
export const viewport: Viewport = {
  themeColor: "#0B0C15",
  colorScheme: "dark",
};

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
    // 👇 2. ADDED `className="dark"` AND inline colorScheme for extra safety 👇
    <html lang="it" className="dark" style={{ colorScheme: 'dark' }}>
      <body
        className={`${spaceGrotesk.variable} antialiased bg-background-dark text-white font-display overflow-x-hidden selection:bg-[#ec4213]/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
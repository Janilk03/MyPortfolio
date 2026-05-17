import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ContactExperience } from "@/components/sections/ContactExperience";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "UX Engineer Portfolio",
  description: "Bridging UX strategy and front-end engineering to craft immersive digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-matte-black text-off-white selection:bg-electric-blue selection:text-white`}>
        <div className="noise-overlay" />
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
          <ContactExperience />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

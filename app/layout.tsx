import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

const satoshi = localFont({
  src: [
    { path: "../public/fonts/satoshi/Satoshi-Light.otf", weight: "300", style: "normal" },
    { path: "../public/fonts/satoshi/Satoshi-LightItalic.otf", weight: "300", style: "italic" },
    { path: "../public/fonts/satoshi/Satoshi-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/satoshi/Satoshi-Italic.otf", weight: "400", style: "italic" },
    { path: "../public/fonts/satoshi/Satoshi-Medium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/satoshi/Satoshi-MediumItalic.otf", weight: "500", style: "italic" },
    { path: "../public/fonts/satoshi/Satoshi-Bold.otf", weight: "700", style: "normal" },
    { path: "../public/fonts/satoshi/Satoshi-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "../public/fonts/satoshi/Satoshi-Black.otf", weight: "900", style: "normal" },
    { path: "../public/fonts/satoshi/Satoshi-BlackItalic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Debopam | Full Stack Developer",
  description: "Full stack developer portfolio showcasing projects, skills, and experience.",
  keywords: ["Debopam", "full stack developer", "portfolio", "software developer"],
  authors: [{ name: "Debopam" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} ${satoshi.variable} antialiased`}
      >
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              border: "2px solid #000",
              borderRadius: "2px",
              padding: "12px 16px",
              fontFamily: "var(--font-satoshi)",
              fontSize: "14px",
              fontWeight: 500,
              boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
            },
            success: {
              style: {
                background: "#000",
                color: "#fff",
              },
              iconTheme: {
                primary: "#fff",
                secondary: "#000",
              },
            },
            error: {
              style: {
                background: "#fff",
                color: "#000",
              },
              iconTheme: {
                primary: "#000",
                secondary: "#fff",
              },
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}

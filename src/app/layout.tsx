import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PropertyXpert - Your Trusted Partner in Buying Property",
  description: "PropertyXpert is a professional real estate brokerage firm helping buyers find verified flats, plots, villas, and commercial spaces across India. Founded by an IITian entrepreneur.",
  keywords: ["real estate", "property", "flats", "plots", "villas", "commercial spaces", "property buying", "India"],
  authors: [{ name: "PropertyXpert" }],
  openGraph: {
    title: "PropertyXpert - Your Trusted Partner in Buying Property",
    description: "Professional real estate brokerage firm helping buyers find verified properties across India.",
    type: "website",
    locale: "en_IN",
    siteName: "PropertyXpert",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "A Definition of AGI",
  description: "A quantifiable framework for defining Artificial General Intelligence based on Cattell-Horn-Carroll theory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Google Analytics */}
        <Script
          // src="https://www.googletagmanager.com/gtag/js?id=G-Z4X7BT6T6B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z4X7BT6T6B');
          `}
        </Script>
        
        <div className="flex min-h-screen">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}

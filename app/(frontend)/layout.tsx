import type { Metadata } from "next";
import { Prompt, Nunito } from "next/font/google";

const prompt = Prompt({
  variable: "--heading-font",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const nunito = Nunito({
  variable: "--body-font",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

import "bootstrap/dist/css/bootstrap.min.css";
import "@/public/icons/css/font-awesome.css";
import "@/public/scss/app.scss";

export const metadata: Metadata = {
  title: "Mongolian Outdoors",
  description: "Travel & Tour Booking NextJS Template",
  keywords: ["booking", "tour", "travel", "travel agency", "trip", "vacation"],
  authors: [
    {
      name: "Tecursive",
      url: "https://themeforest.net/user/tecursive",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${prompt.variable} ${nunito.variable}`}
        suppressHydrationWarning
      >
        {/* Satoshi (Fontshare) — heavy display face for the hero headline */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500&display=swap"
        />
        {children}
      </body>
    </html>
  );
}

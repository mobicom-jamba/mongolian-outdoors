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
    <html lang="en">
      <body className={`${prompt.variable} ${nunito.variable}`}>
        {children}
      </body>
    </html>
  );
}

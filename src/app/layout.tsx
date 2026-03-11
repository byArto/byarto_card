import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Inter, Unbounded } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const unbounded = Unbounded({
  variable: "--font-heading-ru",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "byArto — AI-Powered Fullstack Developer & Web3 Creator",
  description:
    "5 лет экспертизы в Web3. Создаю веб-приложения, Telegram Mini Apps, ботов, парсеры и SaaS-решения с помощью AI — от идеи до продукта.",
  openGraph: {
    title: "byArto — AI-Powered Fullstack Developer & Web3 Creator",
    description:
      "Crypto-native builder. Shipping AI-powered products from idea to launch.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${unbounded.variable} ${jetbrainsMono.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StructuredData } from "@/components/StructuredData";
import ThemeRegistry from "@/components/ThemeRegistry";
import "./globals.css";

const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AI Paraphrasing Tool - Transform Your Text Instantly",
  description:
    "Transform your writing from good to great with our AI-powered paraphraser tool. Free online text paraphrasing with OpenAI and Gemini. Instant results, easy to use.",
  keywords: [
    "AI paraphraser",
    "text paraphrasing",
    "rewrite text",
    "paraphrase tool",
    "AI writing assistant",
    "OpenAI paraphraser",
    "Gemini AI",
    "free paraphrasing tool",
  ],
  authors: [{ name: "AI Paraphrasing Tool" }],
  creator: "AI Paraphrasing Tool",
  publisher: "AI Paraphrasing Tool",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ai-paraphraser.onrender.com",
    title: "AI Paraphrasing Tool - Transform Your Text Instantly",
    description:
      "Transform your writing from good to great with our AI-powered paraphraser tool. Free online text paraphrasing with OpenAI and Gemini. Instant results, easy to use.",
    siteName: "AI Paraphrasing Tool",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Paraphrasing Tool - Transform Your Text Instantly",
    description:
      "Transform your writing from good to great with our AI-powered paraphraser tool. Free online text paraphrasing with instant results.",
    creator: "@aiparaphraser",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  alternates: {
    canonical: "https://ai-paraphraser.onrender.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StructuredData />
        <AppRouterCacheProvider options={{ key: "mui", enableCssLayer: true }}>
          <ThemeRegistry>{children}</ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

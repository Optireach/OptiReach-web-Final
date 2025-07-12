import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "OptiReach - Social Media Agency | Strategy, Growth & Results",
    template: "%s | OptiReach",
  },
  description:
    "Transform your brand with OptiReach's expert social media strategies. 1:1 consulting, AI-powered insights, and scroll-stopping content that drives real results.",
  keywords:
    "social media agency, digital marketing, social media strategy, content creation, brand growth, social media management, AI marketing, consultation",
  authors: [{ name: "OptiReach" }],
  creator: "OptiReach",
  publisher: "OptiReach",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://optireach.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://optireach.com",
    title: "OptiReach - Social Media Agency | Strategy, Growth & Results",
    description: "Transform your brand with expert social media strategies and AI-powered insights.",
    siteName: "OptiReach",
    images: [
      {
        url: "/images/optireach-logo.png",
        width: 1200,
        height: 630,
        alt: "OptiReach - Social Media Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OptiReach - Social Media Agency",
    description: "Transform your brand with expert social media strategies and AI-powered insights.",
    images: ["/images/optireach-logo.png"],
  },
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
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </ThemeProvider>
      </body>
    </html>
  )
}

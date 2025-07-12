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
    default: "OptiReach - Top Digital Marketing Agency in Indore | Social Media & SEO Services",
    template: "%s | OptiReach - Digital Marketing Agency",
  },
  description:
    "OptiReach is a leading digital marketing agency in Indore, offering expert social media marketing, SEO, content creation, and strategic consulting to accelerate your business growth. Get tailored digital marketing services for real results.",
  keywords:
    "digital marketing agency Indore, social media marketing Indore, SEO services Indore, content marketing Indore, digital marketing services, social media strategy, online marketing agency, local SEO Indore, business growth Indore, OptiReach",
  authors: [{ name: "OptiReach" }],
  creator: "OptiReach",
  publisher: "OptiReach",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://optireach.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://optireach.com", // Replace with your actual domain
    title: "OptiReach - Top Digital Marketing Agency in Indore | Social Media & SEO Services",
    description: "OptiReach is a leading digital marketing agency in Indore, offering expert social media marketing, SEO, content creation, and strategic consulting to accelerate your business growth.",
    siteName: "OptiReach",
    images: [
      {
        url: "/images/optireach-logo.png", // Ensure this path is correct and image is optimized
        width: 1200,
        height: 630,
        alt: "OptiReach - Digital Marketing Agency in Indore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OptiReach - Top Digital Marketing Agency in Indore",
    description: "OptiReach is a leading digital marketing agency in Indore, offering expert social media marketing, SEO, content creation, and strategic consulting.",
    images: ["/images/optireach-logo.png"], // Ensure this path is correct and image is optimized
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
    google: "your-google-verification-code", // Replace with your Google Search Console verification code
  },
  generator: 'Next.js', // More accurate generator
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "OptiReach",
  "url": "https://optireach.com", // Replace with your actual domain
  "logo": "https://optireach.com/images/optireach-logo.png", // Replace with your actual domain
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-XXXXXXXXXX", // Replace with your actual phone number
    "contactType": "customer service",
    "email": "sonaliguha1812@gmail.com"
  },
  "sameAs": [
    "https://www.instagram.com/optireach_/", // Your Instagram profile
    // Add other social media profiles here
  ]
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "OptiReach - Digital Marketing Agency in Indore",
  "image": "https://optireach.com/images/optireach-logo.png", // Replace with your actual domain
  "url": "https://optireach.com", // Replace with your actual domain
  "telephone": "+91-XXXXXXXXXX", // Replace with your actual phone number
  "email": "sonaliguha1812@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address", // Replace with your actual street address
    "addressLocality": "Indore",
    "addressRegion": "MP",
    "postalCode": "452001", // Replace with your actual postal code
    "addressCountry": "IN"
  },
  "priceRange": "$$", // Example: Adjust based on your pricing
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Marketing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Social Media Management"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Content Marketing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Marketing Strategy Consulting"
        }
      }
    ]
  }
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
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

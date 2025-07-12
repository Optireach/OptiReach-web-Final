import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import ConsultationSection from "@/components/consultation-section"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: "OptiReach - Top Digital Marketing Agency in Indore | Social Media & SEO Services",
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
    description: "OptiReach is a leading digital marketing agency in Indore, offering expert social media strategies and AI-powered insights.",
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
    description: "OptiReach is a leading digital marketing agency in Indore, offering expert social media strategies and AI-powered insights.",
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

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ConsultationSection />
      <FAQSection />
      <ContactSection />
    </main>
  )
}

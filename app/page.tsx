import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import ConsultationSection from "@/components/consultation-section"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: "OptiReach - Social Media Agency | Strategy, Growth & Results",
  description:
    "Transform your brand with OptiReach's expert social media strategies. 1:1 consulting, AI-powered insights, and scroll-stopping content that drives real results.",
  keywords:
    "social media agency, digital marketing, social media strategy, content creation, brand growth, social media management",
  openGraph: {
    title: "OptiReach - Social Media Agency | Strategy, Growth & Results",
    description: "Transform your brand with expert social media strategies and AI-powered insights.",
    images: ["/images/optireach-logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OptiReach - Social Media Agency",
    description: "Transform your brand with expert social media strategies and AI-powered insights.",
    images: ["/images/optireach-logo.png"],
  },
}

import { StaggeredFadeIn } from "@/components/staggered-fade-in";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <StaggeredFadeIn>
        <HeroSection />
      </StaggeredFadeIn>
      <StaggeredFadeIn>
        <ServicesSection />
      </StaggeredFadeIn>
      <StaggeredFadeIn>
        <AboutSection />
      </StaggeredFadeIn>
      <StaggeredFadeIn>
        <ConsultationSection />
      </StaggeredFadeIn>
      <StaggeredFadeIn>
        <FAQSection />
      </StaggeredFadeIn>
      <StaggeredFadeIn>
        <ContactSection />
      </StaggeredFadeIn>
    </main>
  )
}

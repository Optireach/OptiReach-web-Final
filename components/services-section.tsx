"use client"

import { useState } from "react"
import { BarChart3, Megaphone, MessageSquare, Palette, PenTool, Globe, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: MessageSquare,
    title: "Social Media Management",
    description:
      "Complete social media management across all platforms with consistent, engaging content that builds your community and boosts online presence.",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing Strategies",
    description:
      "Data-driven digital marketing strategies tailored to your brand goals, audience insights, and market positioning for maximum impact and ROI.",
  },
  {
    icon: Megaphone,
    title: "Paid Advertising Campaigns",
    description:
      "Targeted paid advertising campaigns (Google Ads, Social Media Ads) that convert. We optimize every dollar for maximum ROI and lead generation.",
  },
  {
    icon: MessageSquare,
    title: "1:1 Digital Marketing Consultation",
    description:
      "Personalized 1:1 digital marketing strategy sessions to unlock clarity, direction, and results. Expert guidance for accelerated business growth.",
  },
  {
    icon: PenTool,
    title: "SEO-Optimized Content Creation",
    description:
      "Scroll-stopping, SEO-optimized content that drives action, not just likes. Every piece crafted to align with your brand voice and search engine visibility.",
  },
  {
    icon: Palette,
    title: "Brand-Centric Graphic Designing",
    description:
      "Visual storytelling that captures attention and communicates your brand message with stunning, professional designs for all digital platforms.",
  },
  {
    icon: Globe,
    title: "High-Converting Website Designing",
    description:
      "Modern, responsive websites that convert visitors into customers. Built for performance, user experience, and search engine ranking.",
  },
]

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(services.length / 3))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(services.length / 3)) % Math.ceil(services.length / 3))
  }

  const getVisibleServices = () => {
    const startIndex = currentIndex * 3
    return services.slice(startIndex, startIndex + 3)
  }

  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">What We Do</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital marketing services designed to elevate your brand and drive measurable results across
            all platforms.
          </p>
        </div>

        <div className="relative">
          <div
            className="grid md:grid-cols-3 gap-8 transition-all duration-500 ease-in-out"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {getVisibleServices().map((service, index) => (
              <Card
                key={currentIndex * 3 + index}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${
                  !isPaused ? "animate-pulse" : ""
                }`}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center mb-4 group-hover:from-yellow-500/30 group-hover:to-orange-500/30 transition-all duration-300 group-hover:rotate-6">
                    <service.icon className="h-6 w-6 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-yellow-500 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center items-center space-x-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full hover:bg-yellow-500 hover:text-black transition-colors duration-300 bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(services.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-yellow-500 scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full hover:bg-yellow-500 hover:text-black transition-colors duration-300 bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

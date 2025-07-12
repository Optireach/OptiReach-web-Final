"use client"

import Link from "next/link"
import { Calendar, Clock, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ConsultationSection() {
  return (
    <section id="consultation" className="py-20 lg:py-32 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                1:1 Digital Marketing Strategy Consulting to <span className="text-yellow-500">Accelerate Business Growth</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Unlock clarity, direction, and results with expert-led digital marketing strategy sessions tailored to your brand.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-base leading-relaxed">
                I help businesses craft high-converting digital marketing strategies, elevate their digital presence, and drive
                measurable growth—one focused session at a time.
              </p>
              <p className="text-base leading-relaxed font-semibold">Let's turn digital marketing insight into action.</p>
            </div>

            <div className="space-y-4">
              <Card className="p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-4 w-4 text-yellow-500" />
                    <span className="font-medium">Free Initial Consultation</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">60-Minute Strategy Sessions</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3">
                    <Star className="h-4 w-4 text-green-500" />
                    <span className="font-medium">Personalized Action Plan</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button size="lg" asChild className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <Link href="#contact">
                Book Your Session Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-8 hover:shadow-2xl transition-all duration-500">
              <div className="h-full w-full rounded-xl bg-background/80 backdrop-blur-sm border flex flex-col items-center justify-center space-y-6 p-8">
                <div className="text-6xl animate-pulse">📊</div>
                <h3 className="text-xl font-bold text-center">Strategy Session Preview</h3>
                <p className="text-muted-foreground text-center leading-relaxed text-sm">
                  Get a personalized roadmap for your brand's growth with actionable insights and proven strategies.
                </p>
                <div className="grid grid-cols-2 gap-2 w-full">
                  <div className="text-center p-2 bg-yellow-500/10 rounded-lg">
                    <div className="text-xl font-bold text-yellow-500">60min</div>
                    <div className="text-xs text-muted-foreground">Session</div>
                  </div>
                  <div className="text-center p-2 bg-blue-500/10 rounded-lg">
                    <div className="text-xl font-bold text-blue-500">1:1</div>
                    <div className="text-xs text-muted-foreground">Personal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

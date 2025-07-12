import Link from "next/link"
import { ArrowRight, Lightbulb, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 py-20 lg:py-32">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm animate-bounce">
                <Lightbulb className="mr-2 h-4 w-4 text-yellow-500" />
                Social Media Agency
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Is your brand's voice as <span className="text-yellow-500 animate-pulse">sharp</span> as your image?
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                If not, you're missing the impact your brand deserves. Let's align your voice with your vision and turn
                brand presence into powerful results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="bg-yellow-500 hover:bg-yellow-600 text-black hover:scale-105 transition-all duration-300"
              >
                <Link href="#consultation">
                  Book Your Power Session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Link href="#services">View Our Services</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-yellow-500 animate-bounce" />
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-muted-foreground">Brands Grown</div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4 text-center">
                  <Users className="h-8 w-8 mx-auto mb-2 text-yellow-500 animate-bounce" />
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4 text-center">
                  <Lightbulb className="h-8 w-8 mx-auto mb-2 text-yellow-500 animate-bounce" />
                  <div className="text-2xl font-bold">3x</div>
                  <div className="text-sm text-muted-foreground">Average Growth</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="h-full w-full rounded-xl bg-background/50 backdrop-blur-sm border flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl animate-pulse">📈</div>
                  <h3 className="text-2xl font-bold">Strategy Meets Growth</h3>
                  <p className="text-muted-foreground">Data-driven strategies that deliver real results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

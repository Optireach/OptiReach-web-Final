import Link from "next/link"
import { CheckCircle, Target, Zap, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                This Is Where Strategy Meets <span className="text-yellow-500 animate-pulse">Real Growth</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                You don't need more content. You need a strategy that actually works.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                At OptiReach, we help ambitious brands grow through 1:1 strategy consulting, AI-powered insights, and
                scroll-stopping organic content that drives action, not just likes.
              </p>
              <p className="text-lg leading-relaxed">
                Every plan we create is tailored to your goals, backed by data, and designed to build real traction
                across platforms. Whether you're stuck on what to post, how to scale, or why you're not converting—we
                fix that.
              </p>
              <p className="text-lg leading-relaxed font-semibold">
                This isn't a plug-and-play service. It's a partnership built for impact, clarity, and no-regret results.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Tailored strategies backed by data",
                "AI-powered insights for maximum impact",
                "Focus on conversion, not just engagement",
                "Partnership approach for long-term success",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300"
                >
                  <CheckCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 animate-pulse" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              asChild
              className="bg-yellow-500 hover:bg-yellow-600 text-black hover:scale-105 transition-all duration-300"
            >
              <Link href="#consultation">
                Start Your Growth Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0 hover:rotate-12 transition-transform duration-300">
                    <Target className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Strategic Focus</h3>
                    <p className="text-muted-foreground">
                      We blend creativity with strategy to grow brands that lead, not follow. Smart, scalable, and built
                      to last.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 hover:rotate-12 transition-transform duration-300">
                    <Zap className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">AI-Powered Results</h3>
                    <p className="text-muted-foreground">
                      Leveraging cutting-edge AI tools and insights to optimize your content strategy and maximize
                      engagement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

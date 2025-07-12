"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What's the difference between organic growth and paid social media ads?",
    answer:
      "Organic growth builds long-term visibility and trust without ad spend through consistent, valuable content and community engagement. Paid ads can offer quicker reach and targeted exposure but often lack sustainability unless backed by strong content and strategy. We recommend a balanced approach that uses organic content as the foundation and paid ads to amplify your best-performing content.",
  },
  {
    question: "Is hiring a social media strategist worth it for small businesses or personal brands?",
    answer:
      "Small businesses and personal brands often benefit the most from professional strategy because they have limited time and resources. A strategist helps you avoid common mistakes, focus on what actually works, and accelerate your growth timeline. The ROI typically shows within 3-6 months through increased engagement, leads, and conversions.",
  },
  {
    question: "What should I look for before choosing a social media consultant or agency?",
    answer:
      "Look for proven results with case studies, a clear understanding of your industry, transparent communication, and a strategic approach rather than just content creation. Ask about their process, how they measure success, and request examples of their work. Most importantly, ensure they focus on your business goals, not just vanity metrics like followers.",
  },
  {
    question: "How do I get started with social media marketing for my business?",
    answer:
      "Start by defining your goals and target audience, then choose 1-2 platforms where your audience is most active. Create a content strategy that provides value to your audience, maintain consistency, and engage authentically with your community. Consider starting with a strategy consultation to avoid common pitfalls and accelerate your progress.",
  },
  {
    question: "How can I grow on social media without running paid ads?",
    answer:
      "Focus on creating valuable, shareable content that resonates with your target audience. Engage consistently with your community, use relevant hashtags strategically, collaborate with others in your industry, and optimize your posting times. Consistency and authenticity are key to organic growth, along with understanding platform algorithms and trends.",
  },
  {
    question: "What role does AI play in modern digital marketing?",
    answer:
      "AI helps with content optimization, audience insights, performance analytics, and personalization at scale. We use AI tools for content ideation, hashtag research, optimal posting times, and performance analysis. However, AI enhances human creativity and strategy—it doesn't replace the need for authentic brand voice and strategic thinking.",
  },
  {
    question: "How do I make my own website from scratch for my brand or business?",
    answer:
      "While you can use website builders, a professional website requires strategic planning, user experience design, SEO optimization, and technical implementation. We recommend starting with your goals, target audience, and desired user journey, then either learning web development or working with professionals to ensure your site converts visitors into customers.",
  },
  {
    question: "How do I know if my current social media strategy is working?",
    answer:
      "Track metrics that align with your business goals: engagement rates, website traffic from social media, lead generation, and conversions. Look beyond follower count to meaningful interactions, saves, shares, and comments. If you're not seeing growth in these areas after 3 months of consistent effort, it's time to reassess your strategy.",
  },
]

export default function FAQSection() {
  return (
    <section id="faqs" className="py-20 lg:py-32">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to the most common questions about social media marketing and our services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 hover:text-yellow-500 transition-colors duration-300">
                  <span className="text-lg font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center pt-8">
            <Button
              size="lg"
              asChild
              className="bg-yellow-500 hover:bg-yellow-600 text-black hover:scale-105 transition-all duration-300"
            >
              <Link href="#contact">
                Still Have Questions? Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

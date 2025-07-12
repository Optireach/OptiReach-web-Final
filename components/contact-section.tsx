"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Mail, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      business_name: formData.get("business_name"),
      email: formData.get("email"),
      query: formData.get("query"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We'll get back to you soon.",
        });
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit");
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Your Digital Marketing Growth Starts Here — Let's Chat
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your brand's digital presence? Get in touch with OptiReach, your trusted digital marketing agency in Indore, and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                      <p className="text-muted-foreground text-sm mb-1">Get in touch via email</p>
                      <a href="mailto:sonaliguha1812@gmail.com" className="text-yellow-500 hover:underline font-medium text-sm">
                        sonaliguha1812@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                      <Instagram className="h-5 w-5 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Follow Us</h3>
                      <p className="text-muted-foreground text-sm mb-1">Stay updated with our latest content</p>
                      <a
                        href="https://www.instagram.com/optireach_/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline font-medium text-sm">
                        @optireach_
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="p-4 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20">
              <h3 className="text-lg font-semibold mb-2">At OptiReach, we blend creativity with strategy</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                We grow brands that lead, not follow. Smart, scalable, and built to last. Let's create something amazing
                together.
              </p>
            </div>
          </div>

          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6" ref={formRef}>
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Name *</Label>
                  <Input id="contact-name" name="name" placeholder="Your full name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-business">Business Name</Label>
                  <Input id="contact-business" name="business_name" placeholder="Your business name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email ID *</Label>
                  <Input id="contact-email" name="email" type="email" placeholder="your@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-query">Query</Label>
                  <Textarea
                    id="contact-query"
                    name="query"
                    placeholder="Tell us about your project or questions..."
                    rows={5}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

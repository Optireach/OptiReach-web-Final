import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/optireach-logo.png"
                alt="OptiReach Logo"
                width={150}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-muted-foreground">
              At OptiReach, we blend creativity with strategy to grow brands that lead, not follow. Smart, scalable, and
              built to last.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/optireach_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-pink-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:sonaliguha1812@gmail.com"
                className="text-muted-foreground hover:text-yellow-500 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#consultation" className="text-muted-foreground hover:text-foreground transition-colors">
                  Why Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground">Social Media Management</span>
              </li>
              <li>
                <span className="text-muted-foreground">Strategy Consulting</span>
              </li>
              <li>
                <span className="text-muted-foreground">Content Creation</span>
              </li>
              <li>
                <span className="text-muted-foreground">Graphic Design</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:sonaliguha1812@gmail.com"
                  className="text-muted-foreground hover:text-yellow-500 transition-colors"
                >
                  sonaliguha1812@gmail.com
                </a>
              </li>
              <li>
                <Link href="#faqs" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} OptiReach. All rights reserved. Built with strategy and creativity.
          </p>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo size="lg" />
            <p className="mt-4 text-muted-foreground">
              Connecting travelers with local guides for authentic experiences across Pakistan.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-emerald-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-emerald-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-emerald-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">For Travelers</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/destinations" className="text-muted-foreground hover:text-emerald-600">
                  Explore Destinations
                </Link>
              </li>
              <li>
                <Link href="/local-guides" className="text-muted-foreground hover:text-emerald-600">
                  Find Local Guides
                </Link>
              </li>
              <li>
                <Link href="/traveler-pairing" className="text-muted-foreground hover:text-emerald-600">
                  Traveler Pairing
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-muted-foreground hover:text-emerald-600">
                  Book Experiences
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">For Guides</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/vendor/signup" className="text-muted-foreground hover:text-emerald-600">
                  Join as Guide
                </Link>
              </li>
              <li>
                <Link href="/vendor/dashboard" className="text-muted-foreground hover:text-emerald-600">
                  Guide Dashboard
                </Link>
              </li>
              <li>
                <Link href="/vendor/subscription" className="text-muted-foreground hover:text-emerald-600">
                  Subscription Plans
                </Link>
              </li>
              <li>
                <Link href="/vendor/resources" className="text-muted-foreground hover:text-emerald-600">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-emerald-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-emerald-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-emerald-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-emerald-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-emerald-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Traveler Companion Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

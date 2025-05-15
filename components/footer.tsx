import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4">Shop Amour</h3>
            <p className="text-muted-foreground mb-4">
              Your one-stop platform for buying and selling products with ease.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0 -6 0"></path>
                  <path d="M19.5 4.65c-2.03 -1.06 -3.42 -1.28 -7.5 -1.28s-5.47 .22 -7.5 1.28c-2.2 1.14 -3 2.5 -3 8.45c0 5.95 .8 7.32 3 8.45c2.03 1.06 3.42 1.28 7.5 1.28s5.47 -.22 7.5 -1.28c2.2 -1.14 3 -2.5 3 -8.45c0 -5.95 -.8 -7.32 -3 -8.45z"></path>
                  <path d="M15 12v-3"></path>
                </svg>
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary">
                  Browse Products
                </Link>
              </li>
              <li>
                <Link href="/sell" className="text-muted-foreground hover:text-primary">
                  Sell
                </Link>
              </li>
              <li>
                <Link href="/settings" className="text-muted-foreground hover:text-primary">
                  Settings
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-primary">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-primary">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/refunds" className="text-muted-foreground hover:text-primary">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Subscribe to Newsletter</h3>
            <p className="text-muted-foreground mb-4">Stay updated with our latest offers and announcements.</p>
            <div className="flex gap-2">
              <Input placeholder="Your email" type="email" className="max-w-[220px]" />
              <Button asChild>
                <Link href="/subscribe">Subscribe</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="mb-6">
            <h4 className="font-medium mb-3">We Accept Payments</h4>
            <div className="flex flex-wrap gap-4">
              <div className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded">Visa</div>
              <div className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded">Mastercard</div>
              <div className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded">PayPal</div>
              <div className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded">Stripe</div>
              <div className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded">Apple Pay</div>
              <div className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded">Google Pay</div>
              <div className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded">Verve</div>
              <div className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded">Flutterwave</div>
              <div className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded">Paystack</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-muted p-1 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <span className="text-xs text-muted-foreground">Secure & Encrypted Checkout</span>
            </div>

            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Shop Amour. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { LiveChat } from "@/components/live-chat"

// FAQ data
const faqData = [
  {
    question: "How do I create an account?",
    answer:
      'To create an account, click on the "Sign Up" button in the top right corner of the page. Fill in your details including your name, email address, and password. Once you\'ve completed the form, click "Sign Up" to create your account.',
  },
  {
    question: "How do I reset my password?",
    answer:
      'If you\'ve forgotten your password, click on the "Sign In" button, then select "Forgot Password". Enter your email address and we\'ll send you a link to reset your password. Follow the instructions in the email to create a new password.',
  },
  {
    question: "How do I list an item for sale?",
    answer:
      'To list an item for sale, go to the "Sell" page from the navigation menu. Fill in the product details including name, description, price, and upload photos. Once you\'ve completed all required fields, click "List Product" to publish your listing.',
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept various payment methods including credit/debit cards (Visa, Mastercard), PayPal, Stripe, Apple Pay, Google Pay, Verve, Flutterwave, and Paystack. You can select your preferred payment method during checkout.",
  },
  {
    question: "How do I track my order?",
    answer:
      'You can track your order by going to your account dashboard and selecting "Order History". Click on the specific order to view its current status and tracking information. You\'ll also receive email updates about your order status.',
  },
  {
    question: "What is your return policy?",
    answer:
      'We offer a 30-day return policy for most items. If you\'re not satisfied with your purchase, you can initiate a return from your account dashboard under "Order History". Please note that items must be in their original condition with tags attached.',
  },
]

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<typeof faqData>([])
  const [showChat, setShowChat] = useState(false)

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      return
    }

    const query = searchQuery.toLowerCase()
    const results = faqData.filter(
      (item) => item.question.toLowerCase().includes(query) || item.answer.toLowerCase().includes(query),
    )

    setSearchResults(results)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Help Center</h1>
        <p className="text-muted-foreground">Find answers to your questions and get support</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Search for help</CardTitle>
              <CardDescription>Find answers to your questions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input
                  placeholder="Search for help articles..."
                  className="flex-1"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <Button onClick={handleSearch}>Search</Button>
              </div>

              {searchResults.length > 0 && (
                <div className="mt-4 space-y-4">
                  <h3 className="font-medium">Search Results</h3>
                  <ul className="space-y-2">
                    {searchResults.map((result, index) => (
                      <li key={index} className="p-3 bg-muted rounded-md">
                        <h4 className="font-medium">{result.question}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{result.answer}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I create an account?</AccordionTrigger>
                <AccordionContent>
                  To create an account, click on the "Sign Up" button in the top right corner of the page. Fill in your
                  details including your name, email address, and password. Once you've completed the form, click "Sign
                  Up" to create your account.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                <AccordionContent>
                  If you've forgotten your password, click on the "Sign In" button, then select "Forgot Password". Enter
                  your email address and we'll send you a link to reset your password. Follow the instructions in the
                  email to create a new password.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>How do I list an item for sale?</AccordionTrigger>
                <AccordionContent>
                  To list an item for sale, go to the "Sell" page from the navigation menu. Fill in the product details
                  including name, description, price, and upload photos. Once you've completed all required fields,
                  click "List Product" to publish your listing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>What payment methods are accepted?</AccordionTrigger>
                <AccordionContent>
                  We accept various payment methods including credit/debit cards (Visa, Mastercard), PayPal, Stripe,
                  Apple Pay, Google Pay, Verve, Flutterwave, and Paystack. You can select your preferred payment method
                  during checkout.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>How do I track my order?</AccordionTrigger>
                <AccordionContent>
                  You can track your order by going to your account dashboard and selecting "Order History". Click on
                  the specific order to view its current status and tracking information. You'll also receive email
                  updates about your order status.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>What is your return policy?</AccordionTrigger>
                <AccordionContent>
                  We offer a 30-day return policy for most items. If you're not satisfied with your purchase, you can
                  initiate a return from your account dashboard under "Order History". Please note that items must be in
                  their original condition with tags attached.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Get in touch with our support team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Email Support</h3>
                <p className="text-sm text-muted-foreground">support@shopamour.com</p>
              </div>

              <div>
                <h3 className="font-medium mb-1">Phone Support</h3>
                <p className="text-sm text-muted-foreground">+1 (800) 123-4567</p>
                <p className="text-sm text-muted-foreground">Available Mon-Fri, 9am-5pm EST</p>
              </div>

              <div>
                <h3 className="font-medium mb-1">Live Chat</h3>
                <p className="text-sm text-muted-foreground">Available 24/7</p>
                <Button className="w-full mt-2" onClick={() => setShowChat(true)}>
                  Start Chat
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Help Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    Account & Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    Orders & Shipping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    Returns & Refunds
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    Payment Methods
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    Selling on Shop Amour
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Live Chat Panel */}
      {showChat && <LiveChat onClose={() => setShowChat(false)} />}
    </div>
  )
}

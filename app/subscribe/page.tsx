"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Mail, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function SubscribePage() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [preferences, setPreferences] = useState({
    newArrivals: true,
    promotions: true,
    trending: false,
    exclusive: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handlePreferenceChange = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validate email
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
      })
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">Stay in the Loop</h1>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter and be the first to know about new arrivals, exclusive offers, and fashion
              tips.
            </p>

            <div className="relative h-80 w-full rounded-lg overflow-hidden mb-6">
              <Image
                src="/box-market-electronic-ordering-shop-basket_1421-567.avif?height=600&width=800"
                alt="Newsletter subscription"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-medium mb-2">Why Subscribe?</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Early access to new collections</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Exclusive subscriber-only discounts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Fashion tips and styling advice</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Personalized product recommendations</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            {isSuccess ? (
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-300" />
                  </div>
                  <CardTitle>Subscription Confirmed!</CardTitle>
                  <CardDescription>
                    Thank you for subscribing to our newsletter. We've sent a confirmation email to {email}.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="mb-6">
                    You'll now receive updates based on your preferences. You can unsubscribe at any time by clicking
                    the unsubscribe link in our emails.
                  </p>
                  <div className="relative h-40 w-full rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Subscription confirmed"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <CardTitle>Subscribe to Our Newsletter</CardTitle>
                  </div>
                  <CardDescription>Get the latest updates on new products, sales, and more.</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-3">
                      <Label>Newsletter Preferences</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="new-arrivals"
                            checked={preferences.newArrivals}
                            onCheckedChange={() => handlePreferenceChange("newArrivals")}
                          />
                          <Label htmlFor="new-arrivals" className="cursor-pointer">
                            New Arrivals
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="promotions"
                            checked={preferences.promotions}
                            onCheckedChange={() => handlePreferenceChange("promotions")}
                          />
                          <Label htmlFor="promotions" className="cursor-pointer">
                            Sales & Promotions
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="trending"
                            checked={preferences.trending}
                            onCheckedChange={() => handlePreferenceChange("trending")}
                          />
                          <Label htmlFor="trending" className="cursor-pointer">
                            Trending Products
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="exclusive"
                            checked={preferences.exclusive}
                            onCheckedChange={() => handlePreferenceChange("exclusive")}
                          />
                          <Label htmlFor="exclusive" className="cursor-pointer">
                            Exclusive Content
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted p-3 rounded-md text-sm">
                      <p>
                        By subscribing, you agree to receive marketing communications from us. You can unsubscribe at
                        any time. See our{" "}
                        <a href="#" className="text-primary hover:underline">
                          Privacy Policy
                        </a>{" "}
                        for more information.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Subscribing..." : "Subscribe"}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

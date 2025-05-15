"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Truck, Package, CheckCircle, AlertCircle, HelpCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface OrderItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

interface OrderDetails {
  id: string
  date: Date
  status: "Processing" | "Shipped" | "Delivered" | "Cancelled"
  items: OrderItem[]
  shippingAddress: {
    name: string
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  paymentMethod: string
  subtotal: number
  shipping: number
  tax: number
  total: number
  trackingNumber?: string
  estimatedDelivery?: Date
}

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch this data from an API
  const [order] = useState<OrderDetails>({
    id: params.id,
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    status: "Shipped",
    items: [
      {
        id: "item-1",
        name: "Classic White T-Shirt",
        price: 29.99,
        quantity: 2,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: "item-2",
        name: "Slim Fit Jeans",
        price: 79.99,
        quantity: 1,
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    shippingAddress: {
      name: "Sarah Johnson",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States",
    },
    paymentMethod: "Credit Card (ending in 4242)",
    subtotal: 139.97,
    shipping: 0,
    tax: 13.99,
    total: 153.96,
    trackingNumber: "TRK12345678",
    estimatedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
  })

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Processing":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Shipped":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
      case "Delivered":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Processing":
        return <Package className="h-5 w-5" />
      case "Shipped":
        return <Truck className="h-5 w-5" />
      case "Delivered":
        return <CheckCircle className="h-5 w-5" />
      case "Cancelled":
        return <AlertCircle className="h-5 w-5" />
      default:
        return <HelpCircle className="h-5 w-5" />
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/dashboard?tab=orders">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Orders
          </Link>
        </Button>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Order #{order.id}</h1>
            <p className="text-muted-foreground">Placed on {formatDate(order.date)}</p>
          </div>
          <Badge className={`${getStatusColor(order.status)} flex items-center gap-1 px-3 py-1 text-sm`}>
            {getStatusIcon(order.status)}
            <span>{order.status}</span>
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-start gap-4">
                    <div className="relative h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${item.price.toFixed(2)}</p>
                      <p className="text-sm text-muted-foreground">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {order.status === "Shipped" && (
            <Card>
              <CardHeader>
                <CardTitle>Shipping Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium">Your order is on the way</span>
                </div>

                <div className="bg-muted p-4 rounded-md">
                  <p className="font-medium mb-1">Tracking Number</p>
                  <p className="text-sm mb-3">{order.trackingNumber}</p>
                  <p className="font-medium mb-1">Estimated Delivery</p>
                  <p className="text-sm">{formatDate(order.estimatedDelivery!)}</p>
                </div>

                <div className="relative h-40 w-full rounded-md overflow-hidden">
                  <Image src="/placeholder.svg?height=300&width=600" alt="Delivery map" fill className="object-cover" />
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${order.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{order.shipping === 0 ? "Free" : `$${order.shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${order.tax.toFixed(2)}</span>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>${order.total.toFixed(2)}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shipping Address</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">{order.shippingAddress.name}</p>
              <p>{order.shippingAddress.street}</p>
              <p>
                {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
              </p>
              <p>{order.shippingAddress.country}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{order.paymentMethod}</p>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-2">
            <Button variant="outline" asChild>
              <Link href="#">Need Help?</Link>
            </Button>
            {order.status !== "Cancelled" && (
              <Button variant="outline" className="text-destructive hover:text-destructive">
                Request Return
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

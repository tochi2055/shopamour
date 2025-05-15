"use client"

import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { formatDate } from "@/lib/utils"
import Link from "next/link"

export function OrderHistory() {
  const { user } = useAuth()

  // Mock order data - would be fetched from API in a real app
  const orders = [
    {
      id: "ORD-1234",
      date: new Date(2023, 3, 15),
      status: "Delivered",
      total: 129.99,
      items: [
        { name: "Classic White T-Shirt", quantity: 1, price: 29.99 },
        { name: "Slim Fit Jeans", quantity: 1, price: 79.99 },
        { name: "Canvas Belt", quantity: 1, price: 19.99 },
      ],
    },
    {
      id: "ORD-5678",
      date: new Date(2023, 2, 28),
      status: "Delivered",
      total: 89.99,
      items: [{ name: "Leather Sneakers", quantity: 1, price: 89.99 }],
    },
  ]

  if (orders.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium mb-2">No orders yet</h3>
        <p className="text-muted-foreground mb-6">When you place orders, they will appear here.</p>
        <Button asChild>
          <a href="/products">Start Shopping</a>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <div key={order.id} className="rounded-lg border overflow-hidden">
          <div className="bg-muted p-4 flex flex-wrap justify-between gap-4">
            <div>
              <div className="font-medium">Order #{order.id}</div>
              <div className="text-sm text-muted-foreground">Placed on {formatDate(order.date)}</div>
            </div>
            <div className="text-right">
              <div className="font-medium">${order.total.toFixed(2)}</div>
              <div className="text-sm text-green-600">Status: {order.status}</div>
            </div>
          </div>
          <div className="p-4">
            <h4 className="font-medium mb-2">Items</h4>
            <ul className="space-y-2">
              {order.items.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>
                    {item.quantity} x {item.name}
                  </span>
                  <span>${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-end">
              <Button variant="outline" size="sm" asChild>
                <Link href={`/order/${order.id}`}>View Details</Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

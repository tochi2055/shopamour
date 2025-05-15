"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { CartItem } from "@/components/cart-item"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function CartDrawer({ children }: { children: React.ReactNode }) {
  const { items, totalPrice } = useCart()

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle>Your Cart ({items.length})</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-lg font-medium mb-2">Your cart is empty</p>
            <p className="text-muted-foreground mb-6">Add items to get started</p>
            <SheetTrigger asChild>
              <Button asChild>
                <Link href="/products">Browse Products</Link>
              </Button>
            </SheetTrigger>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto py-4">
              <div className="space-y-4">
                {items.map((item) => (
                  <CartItem key={`${item.id}-${item.size}`} item={item} />
                ))}
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between font-medium mb-4">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="grid gap-2">
                <SheetTrigger asChild>
                  <Button asChild>
                    <Link href="/cart">View Cart</Link>
                  </Button>
                </SheetTrigger>
                <SheetTrigger asChild>
                  <Button asChild variant="outline">
                    <Link href="/checkout">Checkout</Link>
                  </Button>
                </SheetTrigger>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}

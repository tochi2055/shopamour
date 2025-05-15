"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import type { CartItem as CartItemType } from "@/lib/types"
import { Minus, Plus, Trash2 } from "lucide-react"

interface CartItemProps {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const { updateItemQuantity, removeItem } = useCart()

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      updateItemQuantity(item.id, item.quantity - 1, item.size)
    } else {
      removeItem(item.id, item.size)
    }
  }

  const increaseQuantity = () => {
    updateItemQuantity(item.id, item.quantity + 1, item.size)
  }

  return (
    <div className="flex items-start space-x-4 py-4 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden flex-shrink-0">
        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-medium">{item.name}</h3>
        {item.size && <p className="text-sm text-muted-foreground">Size: {item.size}</p>}
        <p className="font-medium mt-1">${item.price.toFixed(2)}</p>

        <div className="flex items-center mt-2">
          <Button variant="outline" size="icon" className="h-8 w-8" onClick={decreaseQuantity}>
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-8 text-center">{item.quantity}</span>
          <Button variant="outline" size="icon" className="h-8 w-8" onClick={increaseQuantity}>
            <Plus className="h-3 w-3" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 ml-2" onClick={() => removeItem(item.id, item.size)}>
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Remove</span>
          </Button>
        </div>
      </div>

      <div className="text-right">
        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
      </div>
    </div>
  )
}

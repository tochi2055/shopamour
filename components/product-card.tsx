"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/lib/types"
import { useState } from "react"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const { toast } = useToast()
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted)

    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
    })
  }

  return (
    <div className="group relative rounded-lg border bg-background p-2 transition-all hover:shadow-md">
      <div className="relative aspect-square overflow-hidden rounded-md">
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 bg-white/80 backdrop-blur-sm hover:bg-white/90 dark:bg-black/80 dark:hover:bg-black/90"
          onClick={toggleWishlist}
        >
          <Heart className={`h-5 w-5 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
          <span className="sr-only">Add to wishlist</span>
        </Button>
      </div>
      <div className="pt-3">
        <Link href={`/products/${product.slug}`} className="block">
          <h3 className="font-medium">{product.name}</h3>
          <p className="text-sm text-muted-foreground">{product.category}</p>
        </Link>
        <div className="mt-2 flex items-center justify-between">
          <p className="font-medium">${product.price.toFixed(2)}</p>
          <Button size="sm" onClick={handleAddToCart}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  )
}

"use client"

import { ProductCard } from "@/components/product-card"
import { getProducts } from "@/lib/products"
import { useSearchParams } from "next/navigation"

export function ProductGrid() {
  const searchParams = useSearchParams()
  const category = searchParams.get("category")
  const minPrice = searchParams.get("minPrice")
  const maxPrice = searchParams.get("maxPrice")

  let products = getProducts()

  // Filter by category
  if (category) {
    products = products.filter((product) => product.category.toLowerCase() === category.toLowerCase())
  }

  // Filter by price range
  if (minPrice) {
    products = products.filter((product) => product.price >= Number(minPrice))
  }

  if (maxPrice) {
    products = products.filter((product) => product.price <= Number(maxPrice))
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

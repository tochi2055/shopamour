import type { Product } from "@/lib/types"

// Mock product data
const products: Product[] = [
  {
    id: "1",
    name: "Classic White T-Shirt",
    slug: "classic-white-t-shirt",
    description: "A timeless white t-shirt made from premium cotton for everyday comfort and style.",
    price: 29.99,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    category: "Clothing",
    featured: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    features: ["100% premium cotton", "Regular fit", "Crew neck", "Machine washable"],
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    slug: "slim-fit-jeans",
    description: "Modern slim fit jeans with a comfortable stretch for a sleek silhouette.",
    price: 79.99,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    category: "Clothing",
    featured: true,
    sizes: ["28", "30", "32", "34", "36"],
    features: ["98% cotton, 2% elastane", "Slim fit", "Five-pocket styling", "Machine washable"],
  },
  {
    id: "3",
    name: "Leather Sneakers",
    slug: "leather-sneakers",
    description: "Minimalist leather sneakers crafted from premium materials for lasting comfort and style.",
    price: 89.99,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    category: "Footwear",
    featured: true,
    sizes: ["7", "8", "9", "10", "11", "12"],
    features: ["Premium leather upper", "Rubber outsole", "Cushioned insole", "Breathable lining"],
  },
  {
    id: "4",
    name: "Canvas Belt",
    slug: "canvas-belt",
    description: "Durable canvas belt with a sleek metal buckle for a casual yet polished look.",
    price: 19.99,
    images: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
    category: "Accessories",
    featured: false,
    sizes: ["S", "M", "L"],
    features: ["100% cotton canvas", "Metal buckle", "Adjustable length", "Width: 1.5 inches"],
  },
  {
    id: "5",
    name: "Wool Beanie",
    slug: "wool-beanie",
    description: "Soft and warm wool beanie perfect for cold weather days.",
    price: 24.99,
    images: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
    category: "Accessories",
    featured: false,
    sizes: ["One Size"],
    features: ["100% merino wool", "Ribbed knit", "Hand wash only", "Unisex design"],
  },
  {
    id: "6",
    name: "Leather Wallet",
    slug: "leather-wallet",
    description: "Slim leather wallet with multiple card slots and a bill compartment.",
    price: 39.99,
    images: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
    category: "Accessories",
    featured: true,
    features: ["Genuine leather", "6 card slots", "Bill compartment", "RFID blocking technology"],
  },
  {
    id: "7",
    name: "Denim Jacket",
    slug: "denim-jacket",
    description: "Classic denim jacket with a modern fit, perfect for layering in any season.",
    price: 89.99,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    category: "Clothing",
    featured: false,
    sizes: ["S", "M", "L", "XL"],
    features: ["100% cotton denim", "Button front closure", "Chest and side pockets", "Machine washable"],
  },
  {
    id: "8",
    name: "Aviator Sunglasses",
    slug: "aviator-sunglasses",
    description: "Timeless aviator sunglasses with UV protection and polarized lenses.",
    price: 59.99,
    images: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
    category: "Accessories",
    featured: false,
    features: ["Metal frame", "Polarized lenses", "100% UV protection", "Includes protective case"],
  },
]

export function getProducts(): Product[] {
  return products
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getRelatedProducts(currentProductId: string): Product[] {
  const currentProduct = products.find((product) => product.id === currentProductId)

  if (!currentProduct) {
    return []
  }

  return products
    .filter((product) => product.id !== currentProductId && product.category === currentProduct.category)
    .slice(0, 4)
}

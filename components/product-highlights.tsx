import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export function ProductHighlights() {
  // Mock product data
  const products = [
    {
      id: 1,
      name: "Premium Leather Backpack",
      price: 89.99,
      image: "/beautiful-men-fashion-with-leather-messenger-bag_1203-7607.avif?height=300&width=300",
      category: "Accessories",
      rating: 4.8,
      reviews: 124,
      isNew: true,
    },
    {
      id: 2,
      name: "Wireless Noise-Cancelling Earbuds",
      price: 129.99,
      image: "/wireless-earbuds-with-neon-cyberpunk-style-lighting_23-2151074305.avif?height=300&width=300",
      category: "Electronics",
      rating: 4.6,
      reviews: 89,
      isNew: false,
    },
    {
      id: 3,
      name: "Organic Cotton T-Shirt",
      price: 29.99,
      image: "/african-american-woman-brown-t-shirt-dress-apparel-shoot_53876-102316.avif?height=300&width=300",
      category: "Clothing",
      rating: 4.5,
      reviews: 210,
      isNew: false,
    },
    {
      id: 4,
      name: "Stainless Steel Water Bottle",
      price: 24.99,
      image: "/arrangement-different-colored-tumblers_23-2149029189.avif?height=300&width=300",
      category: "Home",
      rating: 4.9,
      reviews: 156,
      isNew: true,
    },
    {
      id: 5,
      name: "Handcrafted Ceramic Mug",
      price: 19.99,
      image: "/handmade-cup-books-closeup-wooden-surface_169016-45121.avif?height=300&width=300",
      category: "Home",
      rating: 4.7,
      reviews: 78,
      isNew: false,
    },
    {
      id: 6,
      name: "Fitness Resistance Bands Set",
      price: 34.99,
      image: "/full-shot-woman-training-with-elastic-band_23-2149240459.avif?height=300&width=300",
      category: "Sports",
      rating: 4.4,
      reviews: 92,
      isNew: false,
    },
  ]

  return (
    <section className="my-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Popular Products</h2>
        <Link href="#" className="text-primary hover:underline">
          View all
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-square relative">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                {product.isNew && <Badge className="absolute top-2 left-2">New</Badge>}
              </div>
              <div className="p-4">
                <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
                <h3 className="font-medium mb-1">{product.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1">{product.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
                </div>
                <div className="text-lg font-bold">${product.price.toFixed(2)}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function FlashSales() {
  // Mock flash sale products
  const flashSaleProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      originalPrice: 199.99,
      salePrice: 129.99,
      image: "/placeholder.svg?height=200&width=200",
      timeLeft: "2:15:30",
    },
    {
      id: 2,
      name: "Smart Watch",
      originalPrice: 299.99,
      salePrice: 199.99,
      image: "/placeholder.svg?height=200&width=200",
      timeLeft: "1:45:10",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      originalPrice: 149.99,
      salePrice: 89.99,
      image: "/placeholder.svg?height=200&width=200",
      timeLeft: "3:30:45",
    },
    {
      id: 4,
      name: "Fitness Tracker",
      originalPrice: 99.99,
      salePrice: 59.99,
      image: "/placeholder.svg?height=200&width=200",
      timeLeft: "0:59:59",
    },
  ]

  return (
    <section className="my-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">⚡ Flash Sales</h2>
        <Link href="#" className="text-primary hover:underline">
          View all
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {flashSaleProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <div className="aspect-square relative">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100)}% OFF
                </div>
                <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  Ends in: {product.timeLeft}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-1">{product.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold">${product.salePrice.toFixed(2)}</span>
                  <span className="text-sm text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                </div>
                <Button className="w-full">Add to Cart</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    name: "Clothing",
    image: "/placeholder.svg?height=600&width=600",
    slug: "clothing",
  },
  {
    name: "Accessories",
    image: "/placeholder.svg?height=600&width=600",
    slug: "accessories",
  },
  {
    name: "Footwear",
    image: "/placeholder.svg?height=600&width=600",
    slug: "footwear",
  },
]

export function CategorySection() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/products?category=${category.slug}`}
            className="group relative overflow-hidden rounded-lg"
          >
            <div className="aspect-square relative">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                <h3 className="text-white text-2xl font-bold">{category.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

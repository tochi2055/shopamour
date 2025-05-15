import { ProductCard } from "@/components/product-card"
import { getFeaturedProducts } from "@/lib/products"

export function FeaturedProducts() {
  const products = getFeaturedProducts()

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

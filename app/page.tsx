import { AdsBanner } from "@/components/ads-banner"
import { FlashSales } from "@/components/flash-sales"
import { ProductHighlights } from "@/components/product-highlights"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6">
      <AdsBanner />

      <section className="mt-8 mb-12">
        <div className="rounded-lg bg-primary/10 p-8">
          <h1 className="text-3xl font-bold mb-4">Welcome back, Sarah!</h1>
          <p className="text-muted-foreground mb-6">Discover today's personalized recommendations just for you.</p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/sell">Start Selling</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <FlashSales />
      <ProductHighlights />
    </div>
  )
}

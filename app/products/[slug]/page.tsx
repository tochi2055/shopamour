import { ProductGallery } from "@/components/product-gallery"
import { ProductInfo } from "@/components/product-info"
import { RelatedProducts } from "@/components/related-products"
import { getProductBySlug } from "@/lib/products"
import { notFound } from "next/navigation"

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <ProductGallery product={product} />
        <ProductInfo product={product} />
      </div>
      <RelatedProducts currentProductId={product.id} />
    </div>
  )
}

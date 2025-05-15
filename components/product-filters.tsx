"use client"

import { useState, useTransition } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

const categories = [
  { id: "clothing", name: "Clothing" },
  { id: "accessories", name: "Accessories" },
  { id: "footwear", name: "Footwear" },
]

export function ProductFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const [priceRange, setPriceRange] = useState([0, 500])

  const currentCategory = searchParams.get("category") || ""

  const createQueryString = (params: Record<string, string | null>) => {
    const newSearchParams = new URLSearchParams(searchParams.toString())

    Object.entries(params).forEach(([key, value]) => {
      if (value === null) {
        newSearchParams.delete(key)
      } else {
        newSearchParams.set(key, value)
      }
    })

    return newSearchParams.toString()
  }

  const handleCategoryChange = (categoryId: string) => {
    startTransition(() => {
      router.push(
        `/products?${createQueryString({
          category: categoryId === currentCategory ? null : categoryId,
        })}`,
      )
    })
  }

  const handlePriceChange = () => {
    startTransition(() => {
      router.push(
        `/products?${createQueryString({
          minPrice: priceRange[0].toString(),
          maxPrice: priceRange[1].toString(),
        })}`,
      )
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category.id}`}
                checked={currentCategory === category.id}
                onCheckedChange={() => handleCategoryChange(category.id)}
              />
              <Label htmlFor={`category-${category.id}`}>{category.name}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Price Range</h3>
        <div className="space-y-4">
          <Slider defaultValue={[0, 500]} max={1000} step={10} value={priceRange} onValueChange={setPriceRange} />
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Label>Min:</Label>
              <Input
                type="number"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="w-20"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Label>Max:</Label>
              <Input
                type="number"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-20"
              />
            </div>
          </div>
          <Button onClick={handlePriceChange} disabled={isPending}>
            Apply
          </Button>
        </div>
      </div>
    </div>
  )
}

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  images: string[]
  category: string
  featured?: boolean
  sizes?: string[]
  features?: string[]
}

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  size?: string
}

export interface User {
  id: string
  name: string
  email: string
}

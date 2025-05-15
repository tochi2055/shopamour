"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import type { CartItem } from "@/lib/types"

interface CartContextType {
  items: CartItem[]
  totalPrice: number
  addItem: (item: CartItem) => void
  updateItemQuantity: (id: string, quantity: number, size?: string) => void
  removeItem: (id: string, size?: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [totalPrice, setTotalPrice] = useState(0)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        setItems(parsedCart)
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error)
      }
    }
  }, [])

  // Update localStorage and calculate total price when items change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items))

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    setTotalPrice(total)
  }, [items])

  const addItem = (newItem: CartItem) => {
    setItems((prevItems) => {
      // Check if item already exists with the same ID and size
      const existingItemIndex = prevItems.findIndex((item) => item.id === newItem.id && item.size === newItem.size)

      if (existingItemIndex !== -1) {
        // Update quantity of existing item
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex].quantity += newItem.quantity
        return updatedItems
      } else {
        // Add new item
        return [...prevItems, newItem]
      }
    })
  }

  const updateItemQuantity = (id: string, quantity: number, size?: string) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id && item.size === size ? { ...item, quantity } : item)),
    )
  }

  const removeItem = (id: string, size?: string) => {
    setItems((prevItems) => prevItems.filter((item) => !(item.id === id && item.size === size)))
  }

  const clearCart = () => {
    setItems([])
  }

  return (
    <CartContext.Provider
      value={{
        items,
        totalPrice,
        addItem,
        updateItemQuantity,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

"use client"

import { useState } from "react"
import { X } from "lucide-react"

export function AdsBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) {
    return null
  }

  return (
    <div className="relative bg-primary/10 rounded-lg p-4 text-center">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
        aria-label="Close banner"
      >
        <X className="h-4 w-4" />
      </button>
      <p className="font-medium">
        🎉 Special offer: Get 20% off your first purchase with code <span className="font-bold">WELCOME20</span>
      </p>
    </div>
  )
}

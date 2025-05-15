"use client"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-9xl font-bold text-primary mb-4">500</h1>
      <h2 className="text-3xl font-bold mb-4">Something went wrong</h2>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        We apologize for the inconvenience. Please try again later or contact support if the problem persists.
      </p>
      <Button onClick={reset}>Try Again</Button>
    </div>
  )
}

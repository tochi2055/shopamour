"use client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LogOut } from "lucide-react"
import { useEffect, useState } from "react"

export default function LogoutPage() {
  const router = useRouter()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = () => {
    setIsLoggingOut(true)

    // Clear any stored user data
    localStorage.removeItem("user")

    // Redirect to auth page after logout
    setTimeout(() => {
      router.push("/auth")
    }, 1500)
  }

  const handleCancel = () => {
    router.back()
  }

  // Auto-redirect if already logged out
  useEffect(() => {
    const user = localStorage.getItem("user")
    if (!user && !isLoggingOut) {
      router.push("/auth")
    }
  }, [router, isLoggingOut])

  return (
    <div className="container mx-auto px-4 py-16 flex justify-center items-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <LogOut className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <CardTitle className="text-2xl">Log Out</CardTitle>
          <CardDescription>Are you sure you want to log out of Shop Amour?</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            You will need to log in again to access your account, orders, and saved items.
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleLogout} disabled={isLoggingOut}>
            {isLoggingOut ? "Logging out..." : "Log Out"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

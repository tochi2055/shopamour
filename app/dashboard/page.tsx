"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { OrderHistory } from "@/components/order-history"
import { UserProfile } from "@/components/user-profile"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  const { user, isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // Redirect to login if not authenticated (after checking loading state)
    if (!isLoading && !isAuthenticated) {
      router.push("/auth/login")
    }
  }, [isLoading, isAuthenticated, router])

  // Optionally show a loading spinner while authentication is loading
  if (isLoading) {
    return <p className="text-center py-8">Loading...</p>
  }

  // If not authenticated (but no longer loading), prevent rendering
  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>

      <Tabs defaultValue="orders">
        <TabsList className="mb-8">
          <TabsTrigger value="orders">Order History</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="orders">
          <OrderHistory />
        </TabsContent>

        <TabsContent value="profile">
          <UserProfile user={user} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

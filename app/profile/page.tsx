"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { PencilIcon } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  const { toast } = useToast()
  const [isEditing, setIsEditing] = useState(false)

  // Mock user data
  const [userData, setUserData] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    bio: "Fashion enthusiast and vintage collector. I love finding unique pieces and giving them a new home.",
    location: "New York, NY",
    joinDate: "January 2023",
  })

  // Mock order history
  const orders = [
    {
      id: "ORD-12345",
      date: "April 15, 2023",
      total: 129.99,
      status: "Delivered",
      items: 3,
    },
    {
      id: "ORD-12346",
      date: "March 28, 2023",
      total: 79.5,
      status: "Delivered",
      items: 2,
    },
    {
      id: "ORD-12347",
      date: "February 10, 2023",
      total: 45.99,
      status: "Delivered",
      items: 1,
    },
  ]

  // Mock listings
  const listings = [
    {
      id: "LST-7890",
      title: "Vintage Leather Jacket",
      price: 89.99,
      status: "Active",
      views: 124,
      date: "March 10, 2023",
    },
    {
      id: "LST-7891",
      title: "Designer Sunglasses",
      price: 45.0,
      status: "Sold",
      views: 87,
      date: "February 25, 2023",
    },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setUserData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    setIsEditing(false)
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully.",
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="text-muted-foreground">Manage your account information and view your activity</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder-user.jpg" alt="Profile" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <Button size="icon" variant="outline" className="absolute bottom-0 right-0 rounded-full h-8 w-8">
                    <PencilIcon className="h-4 w-4" />
                    <span className="sr-only">Change avatar</span>
                  </Button>
                </div>
                <h2 className="text-xl font-bold mt-4">{userData.name}</h2>
                <p className="text-muted-foreground text-sm">Member since {userData.joinDate}</p>

                <div className="w-full mt-6 space-y-4">
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">{userData.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">{userData.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">{userData.location}</p>
                  </div>
                </div>

                {!isEditing && (
                  <Button variant="outline" className="mt-6 w-full" onClick={() => setIsEditing(true)}>
                    Edit Profile
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs defaultValue="profile">
            <TabsList className="mb-6">
              <TabsTrigger value="profile">Profile Info</TabsTrigger>
              <TabsTrigger value="orders">Order History</TabsTrigger>
              <TabsTrigger value="listings">My Listings</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              {isEditing ? (
                <Card>
                  <CardHeader>
                    <CardTitle>Edit Profile</CardTitle>
                    <CardDescription>Update your personal information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" name="name" value={userData.name} onChange={handleChange} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" name="email" type="email" value={userData.email} onChange={handleChange} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" name="phone" value={userData.phone} onChange={handleChange} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location">Location</Label>
                          <Input id="location" name="location" value={userData.location} onChange={handleChange} />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea id="bio" name="bio" value={userData.bio} onChange={handleChange} rows={4} />
                      </div>

                      <div className="flex gap-2 justify-end">
                        <Button variant="outline" onClick={() => setIsEditing(false)}>
                          Cancel
                        </Button>
                        <Button onClick={handleSave}>Save Changes</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Your personal details and bio</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium">About Me</h3>
                        <p className="text-muted-foreground mt-1">{userData.bio}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium">Account Statistics</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                          <div className="bg-muted rounded-lg p-4 text-center">
                            <p className="text-2xl font-bold">5</p>
                            <p className="text-sm text-muted-foreground">Orders Placed</p>
                          </div>
                          <div className="bg-muted rounded-lg p-4 text-center">
                            <p className="text-2xl font-bold">2</p>
                            <p className="text-sm text-muted-foreground">Items Sold</p>
                          </div>
                          <div className="bg-muted rounded-lg p-4 text-center">
                            <p className="text-2xl font-bold">4.9</p>
                            <p className="text-sm text-muted-foreground">Rating</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                  <CardDescription>View your past purchases</CardDescription>
                </CardHeader>
                <CardContent>
                  {orders.length > 0 ? (
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div key={order.id} className="flex flex-col md:flex-row justify-between p-4 border rounded-lg">
                          <div>
                            <p className="font-medium">{order.id}</p>
                            <p className="text-sm text-muted-foreground">{order.date}</p>
                            <p className="text-sm">{order.items} items</p>
                          </div>
                          <div className="mt-2 md:mt-0 md:text-right">
                            <p className="font-medium">${order.total.toFixed(2)}</p>
                            <p className="text-sm text-green-600">{order.status}</p>
                            <Button variant="link" className="p-0 h-auto" asChild>
                              <Link href={`/order/${order.id}`}>View Details</Link>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">You haven't placed any orders yet.</p>
                      <Button className="mt-4" asChild>
                        <a href="/">Start Shopping</a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="listings">
              <Card>
                <CardHeader>
                  <CardTitle>My Listings</CardTitle>
                  <CardDescription>Manage your product listings</CardDescription>
                </CardHeader>
                <CardContent>
                  {listings.length > 0 ? (
                    <div className="space-y-4">
                      {listings.map((listing) => (
                        <div
                          key={listing.id}
                          className="flex flex-col md:flex-row justify-between p-4 border rounded-lg"
                        >
                          <div>
                            <p className="font-medium">{listing.title}</p>
                            <p className="text-sm text-muted-foreground">Listed on {listing.date}</p>
                            <p className="text-sm">{listing.views} views</p>
                          </div>
                          <div className="mt-2 md:mt-0 md:text-right">
                            <p className="font-medium">${listing.price.toFixed(2)}</p>
                            <p
                              className={`text-sm ${listing.status === "Active" ? "text-green-600" : "text-blue-600"}`}
                            >
                              {listing.status}
                            </p>
                            <Button variant="link" className="p-0 h-auto" asChild>
                              <Link href={`/sell/edit/${listing.id}`}>Edit Listing</Link>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">You haven't created any listings yet.</p>
                      <Button className="mt-4" asChild>
                        <a href="/sell">Create Listing</a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

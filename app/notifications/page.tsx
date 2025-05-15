"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Bell, ShoppingBag, Heart, MessageCircle, DollarSign, Settings } from "lucide-react"

export default function NotificationsPage() {
  // Mock notifications data
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "order",
      title: "Order Shipped",
      message: "Your order #ORD-12345 has been shipped and is on its way.",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      type: "like",
      title: "New Like",
      message: "Someone liked your Vintage Leather Jacket listing.",
      time: "Yesterday",
      read: false,
    },
    {
      id: 3,
      type: "message",
      title: "New Message",
      message: "You have a new message from Alex regarding your listing.",
      time: "2 days ago",
      read: true,
    },
    {
      id: 4,
      type: "sale",
      title: "Item Sold",
      message: "Congratulations! Your Designer Sunglasses have been sold for $45.00.",
      time: "1 week ago",
      read: true,
    },
    {
      id: 5,
      type: "system",
      title: "Account Update",
      message: "Your account information has been successfully updated.",
      time: "2 weeks ago",
      read: true,
    },
  ])

  const markAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, read: true })))
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "order":
        return <ShoppingBag className="h-5 w-5" />
      case "like":
        return <Heart className="h-5 w-5" />
      case "message":
        return <MessageCircle className="h-5 w-5" />
      case "sale":
        return <DollarSign className="h-5 w-5" />
      case "system":
        return <Settings className="h-5 w-5" />
      default:
        return <Bell className="h-5 w-5" />
    }
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Notifications</h1>
          <p className="text-muted-foreground">Stay updated with your account activity</p>
        </div>
        {unreadCount > 0 && (
          <Button variant="outline" onClick={markAllAsRead}>
            Mark all as read
          </Button>
        )}
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">
            All
            {unreadCount > 0 && (
              <Badge variant="secondary" className="ml-2">
                {unreadCount}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="unread">Unread</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Notifications</CardTitle>
              <CardDescription>View all your recent notifications</CardDescription>
            </CardHeader>
            <CardContent>
              {notifications.length > 0 ? (
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`flex items-start p-4 rounded-lg ${notification.read ? "bg-background" : "bg-primary/10"}`}
                    >
                      <div className="mr-4 mt-0.5">{getNotificationIcon(notification.type)}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{notification.title}</h3>
                          <span className="text-xs text-muted-foreground">{notification.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Bell className="mx-auto h-12 w-12 text-muted-foreground" />
                  <p className="mt-4 text-muted-foreground">You don't have any notifications yet.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="unread">
          <Card>
            <CardHeader>
              <CardTitle>Unread Notifications</CardTitle>
              <CardDescription>View your unread notifications</CardDescription>
            </CardHeader>
            <CardContent>
              {notifications.filter((n) => !n.read).length > 0 ? (
                <div className="space-y-4">
                  {notifications
                    .filter((n) => !n.read)
                    .map((notification) => (
                      <div key={notification.id} className="flex items-start p-4 rounded-lg bg-primary/10">
                        <div className="mr-4 mt-0.5">{getNotificationIcon(notification.type)}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">{notification.title}</h3>
                            <span className="text-xs text-muted-foreground">{notification.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">You don't have any unread notifications.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Order Notifications</CardTitle>
              <CardDescription>Updates about your orders</CardDescription>
            </CardHeader>
            <CardContent>
              {notifications.filter((n) => n.type === "order").length > 0 ? (
                <div className="space-y-4">
                  {notifications
                    .filter((n) => n.type === "order")
                    .map((notification) => (
                      <div
                        key={notification.id}
                        className={`flex items-start p-4 rounded-lg ${notification.read ? "bg-background" : "bg-primary/10"}`}
                      >
                        <div className="mr-4 mt-0.5">
                          <ShoppingBag className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">{notification.title}</h3>
                            <span className="text-xs text-muted-foreground">{notification.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">You don't have any order notifications.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages">
          <Card>
            <CardHeader>
              <CardTitle>Message Notifications</CardTitle>
              <CardDescription>Updates about your messages</CardDescription>
            </CardHeader>
            <CardContent>
              {notifications.filter((n) => n.type === "message").length > 0 ? (
                <div className="space-y-4">
                  {notifications
                    .filter((n) => n.type === "message")
                    .map((notification) => (
                      <div
                        key={notification.id}
                        className={`flex items-start p-4 rounded-lg ${notification.read ? "bg-background" : "bg-primary/10"}`}
                      >
                        <div className="mr-4 mt-0.5">
                          <MessageCircle className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">{notification.title}</h3>
                            <span className="text-xs text-muted-foreground">{notification.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">You don't have any message notifications.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

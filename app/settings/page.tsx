"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SettingsPage() {
  const { toast } = useToast()
  const [appearanceSettings, setAppearanceSettings] = useState({
    theme: "light",
    fontSize: "medium",
    reducedMotion: false,
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    marketingEmails: false,
    activitySummary: true,
  })

  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: "public",
    activityVisibility: "friends",
    dataSharing: false,
    locationSharing: false,
  })

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedAppearance = localStorage.getItem("appearanceSettings")
    if (savedAppearance) {
      try {
        setAppearanceSettings(JSON.parse(savedAppearance))
      } catch (error) {
        console.error("Failed to parse appearance settings:", error)
      }
    }
  }, [])

  // Apply font size when it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-font-size", appearanceSettings.fontSize)

    // Apply reduced motion setting
    if (appearanceSettings.reducedMotion) {
      document.documentElement.classList.add("reduce-motion")
    } else {
      document.documentElement.classList.remove("reduce-motion")
    }

    // Save to localStorage
    localStorage.setItem("appearanceSettings", JSON.stringify(appearanceSettings))
  }, [appearanceSettings])

  const handleAppearanceChange = (key: string, value: any) => {
    setAppearanceSettings((prev) => ({ ...prev, [key]: value }))
  }

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotificationSettings((prev) => ({ ...prev, [key]: value }))
  }

  const handlePrivacyChange = (key: string, value: any) => {
    setPrivacySettings((prev) => ({ ...prev, [key]: value }))
  }

  const saveSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences and settings</p>
      </div>

      <Tabs defaultValue="appearance" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 md:w-auto">
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
        </TabsList>

        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>Customize how the platform looks and feels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="theme">Theme</Label>
                  <Select
                    value={appearanceSettings.theme}
                    onValueChange={(value) => handleAppearanceChange("theme", value)}
                  >
                    <SelectTrigger id="theme" className="w-full md:w-[240px]">
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="fontSize">Font Size</Label>
                  <Select
                    value={appearanceSettings.fontSize}
                    onValueChange={(value) => handleAppearanceChange("fontSize", value)}
                  >
                    <SelectTrigger id="fontSize" className="w-full md:w-[240px]">
                      <SelectValue placeholder="Select font size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="large">Large</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="reducedMotion"
                    checked={appearanceSettings.reducedMotion}
                    onCheckedChange={(checked) => handleAppearanceChange("reducedMotion", checked)}
                  />
                  <Label htmlFor="reducedMotion">Reduce motion</Label>
                </div>
              </div>

              <Button onClick={saveSettings}>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Control how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="emailNotifications" className="block mb-1">
                      Email Notifications
                    </Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                  <Switch
                    id="emailNotifications"
                    checked={notificationSettings.emailNotifications}
                    onCheckedChange={(checked) => handleNotificationChange("emailNotifications", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="pushNotifications" className="block mb-1">
                      Push Notifications
                    </Label>
                    <p className="text-sm text-muted-foreground">Receive notifications on your device</p>
                  </div>
                  <Switch
                    id="pushNotifications"
                    checked={notificationSettings.pushNotifications}
                    onCheckedChange={(checked) => handleNotificationChange("pushNotifications", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="marketingEmails" className="block mb-1">
                      Marketing Emails
                    </Label>
                    <p className="text-sm text-muted-foreground">Receive promotional emails and offers</p>
                  </div>
                  <Switch
                    id="marketingEmails"
                    checked={notificationSettings.marketingEmails}
                    onCheckedChange={(checked) => handleNotificationChange("marketingEmails", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="activitySummary" className="block mb-1">
                      Activity Summary
                    </Label>
                    <p className="text-sm text-muted-foreground">Receive weekly activity reports</p>
                  </div>
                  <Switch
                    id="activitySummary"
                    checked={notificationSettings.activitySummary}
                    onCheckedChange={(checked) => handleNotificationChange("activitySummary", checked)}
                  />
                </div>
              </div>

              <Button onClick={saveSettings}>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy">
          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>Manage your privacy and data sharing preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="profileVisibility">Profile Visibility</Label>
                  <Select
                    value={privacySettings.profileVisibility}
                    onValueChange={(value) => handlePrivacyChange("profileVisibility", value)}
                  >
                    <SelectTrigger id="profileVisibility" className="w-full md:w-[240px]">
                      <SelectValue placeholder="Select visibility" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="friends">Friends Only</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="activityVisibility">Activity Visibility</Label>
                  <Select
                    value={privacySettings.activityVisibility}
                    onValueChange={(value) => handlePrivacyChange("activityVisibility", value)}
                  >
                    <SelectTrigger id="activityVisibility" className="w-full md:w-[240px]">
                      <SelectValue placeholder="Select visibility" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="friends">Friends Only</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="dataSharing" className="block mb-1">
                      Data Sharing
                    </Label>
                    <p className="text-sm text-muted-foreground">Allow sharing data with third parties</p>
                  </div>
                  <Switch
                    id="dataSharing"
                    checked={privacySettings.dataSharing}
                    onCheckedChange={(checked) => handlePrivacyChange("dataSharing", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="locationSharing" className="block mb-1">
                      Location Sharing
                    </Label>
                    <p className="text-sm text-muted-foreground">Allow access to your location</p>
                  </div>
                  <Switch
                    id="locationSharing"
                    checked={privacySettings.locationSharing}
                    onCheckedChange={(checked) => handlePrivacyChange("locationSharing", checked)}
                  />
                </div>
              </div>

              <Button onClick={saveSettings}>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

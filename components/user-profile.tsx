"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import type { User } from "@/lib/types"

interface UserProfileProps {
  user: User | null
}

export function UserProfile({ user }: UserProfileProps) {
  const { toast } = useToast()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name,
    email: user?.email,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulate API call to update profile
    setTimeout(() => {
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      })
      setIsEditing(false)
    }, 500)
  }

  return (
    <div className="space-y-6">
      <div className="rounded-lg border overflow-hidden">
        <div className="bg-muted p-4">
          <h3 className="font-medium">Personal Information</h3>
        </div>
        <div className="p-4">
          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
                <Button type="submit">Save Changes</Button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="grid gap-1">
                <div className="text-sm text-muted-foreground">Full Name</div>
                <div>{user?.name}</div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm text-muted-foreground">Email</div>
                <div>{user?.email}</div>
              </div>
              <div className="flex justify-end">
                <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="rounded-lg border overflow-hidden">
        <div className="bg-muted p-4">
          <h3 className="font-medium">Password</h3>
        </div>
        <div className="p-4">
          <Button variant="outline">Change Password</Button>
        </div>
      </div>
    </div>
  )
}

"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import { auth } from "@/lib/firebase"


export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setError("")

  try {
    await signInWithEmailAndPassword(auth, email, password)

    // Save session locally if you want
    localStorage.setItem("user", JSON.stringify({ email }))

    // Redirect to dashboard
    router.push("/dashboard")
  } catch (err) {
    console.error(err)
    setError("Invalid email or password")
  }
}


    try {
     import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/lib/firebase"

// ...

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setError("")

  try {
    await signInWithEmailAndPassword(auth, email, password)

    // Save session locally if needed
    localStorage.setItem("user", JSON.stringify({ email }))

    // Redirect to dashboard
    router.push("/dashboard")
  } catch (err) {
    console.error(err)
    setError("Invalid email or password")
  }
}

      // Save session locally if you want (e.g., localStorage)
      localStorage.setItem("user", JSON.stringify({ email }))

      // Redirect to dashboard
      router.push("/dashboard")
    } catch (err) {
      setError("Invalid email or password")
    }
  }

  return (
    <div className="container mx-auto px-4 py-16 flex justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-8 text-center">Login to your account</h1>

        {error && <div className="bg-red-50 text-red-500 p-4 rounded-md mb-6">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
              </Button>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/auth/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
// This code is a simple login page using React and Next.js.
// It includes a form for email and password input, with error handling and password visibility toggle.
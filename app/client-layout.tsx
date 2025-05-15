"use client"

import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { CartProvider } from "@/lib/cart-context"
import { usePathname } from "next/navigation"

// Helper function to check if we should hide the footer
function shouldHideFooter(pathname: string): boolean {
  return pathname === "/auth"
}

export function ClientRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <CartProvider>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <FooterWrapper />
          <Sidebar />
          <Toaster />
        </div>
      </CartProvider>
    </ThemeProvider>
  )
}

// Client component to conditionally render the footer
function FooterWrapper() {
  const pathname = usePathname()

  if (shouldHideFooter(pathname)) {
    return null
  }

  return <Footer />
}

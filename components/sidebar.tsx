"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { MessageSquare, PenSquare, ChevronUp, ShoppingCart, Bot, ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/cart-context"
import { LiveChat } from "@/components/live-chat"
import { Chatbot } from "@/components/chatbot"

export default function Sidebar() {
  const pathname = usePathname()
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isHiddenPage, setIsHiddenPage] = useState(false)
  const [showLiveChat, setShowLiveChat] = useState(false)
  const [showChatbot, setShowChatbot] = useState(false)
  const [collapsed, setCollapsed] = useState(true)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const sidebarRef = useRef<HTMLDivElement>(null)
  const { items } = useCart()
  const cartItemCount = items.length

  useEffect(() => {
    setIsHiddenPage(
      pathname === "/signup" || pathname === "/checkout" || pathname === "/payment" || pathname === "/auth",
    )
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Load sidebar state and position from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem("sidebar-collapsed")
    if (savedState !== null) {
      setCollapsed(savedState === "true")
    }

    const savedPosition = localStorage.getItem("sidebar-position")
    if (savedPosition) {
      try {
        setPosition(JSON.parse(savedPosition))
      } catch (e) {
        console.error("Failed to parse sidebar position", e)
      }
    }
  }, [])

  // Save sidebar state to localStorage
  const toggleCollapsed = () => {
    const newState = !collapsed
    setCollapsed(newState)
    localStorage.setItem("sidebar-collapsed", String(newState))
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (collapsed) return

    setIsDragging(true)
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return

    const newX = e.clientX - dragStart.x
    const newY = e.clientY - dragStart.y

    // Constrain to viewport
    const maxX = window.innerWidth - (sidebarRef.current?.offsetWidth || 0)
    const maxY = window.innerHeight - (sidebarRef.current?.offsetHeight || 0)

    const constrainedX = Math.max(0, Math.min(newX, maxX))
    const constrainedY = Math.max(0, Math.min(newY, maxY))

    setPosition({
      x: constrainedX,
      y: constrainedY,
    })
  }

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false)
      localStorage.setItem("sidebar-position", JSON.stringify(position))
    }
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, dragStart])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (isHiddenPage) {
    return null
  }

  return (
    <>
      <div
        ref={sidebarRef}
        className={`fixed z-40 transition-all duration-300 ${collapsed ? "right-0" : ""}`}
        style={{
          transform: collapsed ? "translateX(calc(100% - 24px))" : "translateX(0)",
          top: position.y,
          right: position.x,
          cursor: isDragging ? "grabbing" : collapsed ? "default" : "grab",
        }}
      >
        <div className="bg-background rounded-l-lg shadow-lg p-3 relative" onMouseDown={handleMouseDown}>
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full bg-background p-1 rounded-l-md shadow-md cursor-pointer"
            onClick={toggleCollapsed}
          >
            <ChevronRight className={`h-4 w-4 transition-transform ${collapsed ? "" : "rotate-180"}`} />
          </div>

          <div className="flex flex-col items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => {
                setShowLiveChat(true)
                setShowChatbot(false)
              }}
            >
              <MessageSquare className="h-5 w-5" />
              <span className="sr-only">Live Chat</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => {
                setShowChatbot(true)
                setShowLiveChat(false)
              }}
            >
              <Bot className="h-5 w-5" />
              <span className="sr-only">Chatbot</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <Link href="/sell">
                <PenSquare className="h-5 w-5" />
                <span className="sr-only">Create Listing</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full relative" asChild>
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 text-[10px]">
                    {cartItemCount}
                  </Badge>
                )}
                <span className="sr-only">Cart</span>
              </Link>
            </Button>
          </div>

          {showScrollTop && (
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full shadow-lg flex items-center justify-center w-10 h-10 mt-4"
              onClick={scrollToTop}
            >
              <ChevronUp className="h-5 w-5" />
              <span className="sr-only">Back to top</span>
            </Button>
          )}
        </div>
      </div>

      {/* Live Chat Panel */}
      {showLiveChat && <LiveChat onClose={() => setShowLiveChat(false)} />}

      {/* Chatbot Panel */}
      {showChatbot && <Chatbot onClose={() => setShowChatbot(false)} />}
    </>
  )
}

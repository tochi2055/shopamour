"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Send, Bot } from "lucide-react"

interface Message {
  id: string
  sender: "user" | "bot"
  text: string
  timestamp: Date
}

interface ChatbotProps {
  onClose: () => void
}

export function Chatbot({ onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Hi there! I'm ShopBot, your AI shopping assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: inputValue,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate bot typing
    setIsTyping(true)

    // Generate bot response based on user input
    setTimeout(() => {
      const userText = inputValue.toLowerCase()
      let botResponse = ""

      if (userText.includes("hello") || userText.includes("hi") || userText.includes("hey")) {
        botResponse = "Hey there! 👋 I'm ShopBot for shopAmour, your personal shopping companion. Whether you're browsing for gifts, comparing prices, or checking order status—I’ve got you covered.";
      }

      else if (userText.includes("product") || userText.includes("item") || userText.includes("catalog")) {
        botResponse = "Sure!  we offer everything from electronics, fashion, and home appliances to books and beauty products. What kind of items are you browsing for today?";
      }

      else if (userText.includes("price") || userText.includes("cost") || userText.includes("how much")) {
        botResponse = "Prices vary based on brand, model, and features—similar to how Amazon lists multiple sellers. Let me know which product you're interested in, and I’ll fetch its price range.";
      }

      else if (userText.includes("compare") || userText.includes("which is better") || userText.includes("vs")) {
        botResponse = "Product comparison is my specialty! 🔍  I can highlight the key differences in features, ratings, and pricing. Which two products are you deciding between?";
      }

      else if (userText.includes("shipping") || userText.includes("delivery") || userText.includes("how long")) {
        botResponse = "We offer free shipping on most orders over $50. Standard delivery typically takes 3–5 business days, while express options are also available. Would you like to check the shipping time for your area?";
      }

      else if (userText.includes("return") || userText.includes("refund") || userText.includes("exchange")) {
        botResponse = "No worries! We offer a 30-day return window—just like Amazon. If your item is unused and in its original packaging, you can request a refund or exchange hassle-free.";
      }

      else if (userText.includes("track") || userText.includes("order status")) {
        botResponse = "To track your order, simply go to your Orders page. I can also help if you provide your Order ID.";
      }

      else if (userText.includes("discount") || userText.includes("coupon") || userText.includes("promo")) {
        botResponse = "You can use the promo code **WELCOME20** at checkout for 20% off your first order. Keep an eye on our homepage banners for seasonal deals—just like Amazon Lightning Deals!";
      }

      else if (userText.includes("gift") || userText.includes("birthday") || userText.includes("recommend")) {
        botResponse = "Looking for a gift? I can help you find the perfect item based on age, interests, and budget—just like Amazon Gift Finder. Who are you shopping for today?";
      }

      else if (userText.includes("payment") || userText.includes("card") || userText.includes("checkout")) {
        botResponse = "We support debit/credit cards, PayPal, and ShopNow PayLater. All transactions are secured. Let me know if you had a payment issue or need help checking out.";
      }

      else if (userText.includes("account") || userText.includes("profile") || userText.includes("login")) {
        botResponse = "You can access your account settings through the top-right corner menu. If you're having trouble logging in, I can walk you through password recovery.";
      }

      else if (userText.includes("support") || userText.includes("help") || userText.includes("agent")) {
        botResponse = "I'm always here to assist! If you'd prefer to chat with a human agent, just say 'Talk to support' and I'll connect you right away.";
      }

      else if (userText.includes("thank") || userText.includes("thanks") || userText.includes("appreciate")) {
        botResponse = "You're very welcome! 😊 I'm here whenever you need help—shopping made easy!";
      }

      else if (userText.includes("bye") || userText.includes("goodbye") || userText.includes("see you")) {
        botResponse = "It was great assisting you today! Happy shopping, and I hope to see you back soon!";
      }

      else {
        // fallback if input is unclear
        botResponse = "That’s a great question! I’m still learning and may not have all the answers yet. You can try rephrasing, or I can connect you with a live support agent for better assistance."
          ;
      }


      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: botResponse,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <Card className="fixed bottom-20 right-20 w-80 h-96 z-50 shadow-xl flex flex-col">
      <CardHeader className="bg-primary/20 py-3 px-4 flex flex-row items-center justify-between space-y-0">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-bot.jpg" alt="ShopBot" />
            <AvatarFallback>
              <Bot className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-sm">ShopBot Assistant</CardTitle>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>

      <CardContent className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-lg px-3 py-2 ${message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className="text-xs opacity-70 mt-1 text-right">{formatTime(message.timestamp)}</p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-lg px-3 py-2 bg-muted">
              <div className="flex space-x-1">
                <div
                  className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </CardContent>

      <CardFooter className="p-2 border-t">
        <div className="flex w-full items-center space-x-2">
          <Input
            placeholder="Ask ShopBot..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1"
          />
          <Button size="icon" onClick={handleSendMessage} disabled={!inputValue.trim()} className="shrink-0">
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

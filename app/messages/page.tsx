"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Send, Paperclip, MoreVertical, Phone, Video } from "lucide-react"
import Image from "next/image"

interface Message {
  id: string
  sender: "user" | "other"
  text: string
  timestamp: Date
  read: boolean
}

interface Contact {
  id: string
  name: string
  avatar: string
  lastMessage: string
  lastMessageTime: Date
  unreadCount: number
  online: boolean
}

export default function MessagesPage() {
  const [activeContact, setActiveContact] = useState<Contact | null>(null)
  const [inputValue, setInputValue] = useState("")
  const [searchValue, setSearchValue] = useState("")
  const [messages, setMessages] = useState<Record<string, Message[]>>({
    "contact-1": [
      {
        id: "1",
        sender: "other",
        text: "Hi there! I'm interested in the leather jacket you posted. Is it still available?",
        timestamp: new Date(Date.now() - 3600000), // 1 hour ago
        read: true,
      },
      {
        id: "2",
        sender: "user",
        text: "Yes, it's still available! Are you interested in purchasing it?",
        timestamp: new Date(Date.now() - 3000000), // 50 minutes ago
        read: true,
      },
      {
        id: "3",
        sender: "other",
        text: "Great! Could you tell me more about the condition? Any scratches or wear?",
        timestamp: new Date(Date.now() - 2400000), // 40 minutes ago
        read: true,
      },
    ],
    "contact-2": [
      {
        id: "1",
        sender: "other",
        text: "Hello! Do you ship internationally?",
        timestamp: new Date(Date.now() - 86400000), // 1 day ago
        read: true,
      },
      {
        id: "2",
        sender: "user",
        text: "Hi! Yes, we do ship internationally, but shipping costs vary by country.",
        timestamp: new Date(Date.now() - 82800000), // 23 hours ago
        read: true,
      },
      {
        id: "3",
        sender: "other",
        text: "Perfect! I'm in Canada. Could you check the shipping cost for me?",
        timestamp: new Date(Date.now() - 79200000), // 22 hours ago
   const messages = {
  "contact-3": [
    {
      id: "0",
      sender: "other",
      text: "Checking in again.",
      timestamp: new Date(Date.now() - 79200000), // 22 hours ago
      read: false,
    },
    {
      id: "1",
      sender: "other",
      text: "Hey! I just received my order. The shoes are amazing, thank you!",
      timestamp: new Date(Date.now() - 172800000), // 2 days ago
      read: true,
    },
    {
      id: "2",
      sender: "user",
      text: "That's great to hear! I'm glad you like them.",
      timestamp: new Date(Date.now() - 169200000), // 47 hours ago
      read: true,
    },
  ],
};
      id: "2",
      sender: "user",
      text: "That's great to hear! I'm glad you like them.",
      timestamp: new Date(Date.now() - 169200000), // 47 hours ago
      read: true,
    },
  ],
};


  const contacts: Contact[] = [
    {
      id: "contact-1",
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Great! Could you tell me more about the condition? Any scratches or wear?",
      lastMessageTime: new Date(Date.now() - 2400000),
      unreadCount: 0,
      online: true,
    },
    {
      id: "contact-2",
      name: "Maria Garcia",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Perfect! I'm in Canada. Could you check the shipping cost for me?",
      lastMessageTime: new Date(Date.now() - 79200000),
      unreadCount: 1,
      online: false,
    },
    {
      id: "contact-3",
      name: "James Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "That's great to hear! I'm glad you like them.",
      lastMessageTime: new Date(Date.now() - 169200000),
      unreadCount: 0,
      online: true,
    },
  ]

  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searchValue.toLowerCase()))

  const handleSendMessage = () => {
    if (!inputValue.trim() || !activeContact) return

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: inputValue,
      timestamp: new Date(),
      read: true,
    }

    setMessages((prev) => ({
      ...prev,
      [activeContact.id]: [...(prev[activeContact.id] || []), newMessage],
    }))

    setInputValue("")

    // Simulate reply after a delay
    setTimeout(() => {
      const replies = [
        "Thanks for the information!",
        "That sounds good to me.",
        "I'll get back to you on that.",
        "Perfect, thank you!",
        "I appreciate your help.",
      ]

      const randomReply = replies[Math.floor(Math.random() * replies.length)]

      const replyMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "other",
        text: randomReply,
        timestamp: new Date(),
        read: false,
      }

      setMessages((prev) => ({
        ...prev,
        [activeContact.id]: [...(prev[activeContact.id] || []), replyMessage],
      }))
    }, 2000)
  }

  const formatTime = (date: Date) => {
    const now = new Date()
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))

    if (diffDays === 0) {
      return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    } else if (diffDays === 1) {
      return "Yesterday"
    } else if (diffDays < 7) {
      return date.toLocaleDateString([], { weekday: "short" })
    } else {
      return date.toLocaleDateString([], { month: "short", day: "numeric" })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Messages</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[70vh]">
        {/* Contacts List */}
        <Card className="md:col-span-1 flex flex-col h-full">
          <CardHeader className="pb-2">
            <CardTitle>Conversations</CardTitle>
            <div className="relative mt-2">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search messages..."
                className="pl-8"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto">
            <div className="space-y-2">
              {filteredContacts.map((contact) => (
                <div
                  key={contact.id}
                  className={`flex items-center gap-3 p-2 rounded-md cursor-pointer ${
                    activeContact?.id === contact.id ? "bg-primary/10" : "hover:bg-muted"
                  }`}
                  onClick={() => setActiveContact(contact)}
                >
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
                      <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {contact.online && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium truncate">{contact.name}</h3>
                      <span className="text-xs text-muted-foreground">{formatTime(contact.lastMessageTime)}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{contact.lastMessage}</p>
                  </div>
                  {contact.unreadCount > 0 && (
                    <div className="bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {contact.unreadCount}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="md:col-span-2 flex flex-col h-full">
          {activeContact ? (
            <>
              <CardHeader className="pb-2 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={activeContact.avatar || "/placeholder.svg"} alt={activeContact.name} />
                      <AvatarFallback>{activeContact.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">{activeContact.name}</CardTitle>
                      <p className="text-xs text-muted-foreground">{activeContact.online ? "Online" : "Offline"}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 overflow-auto p-4 space-y-4">
                {messages[activeContact.id]?.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.sender === "other" && (
                      <Avatar className="mr-2 h-8 w-8">
                        <AvatarImage src={activeContact.avatar || "/placeholder.svg"} alt={activeContact.name} />
                        <AvatarFallback>{activeContact.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`max-w-[70%] rounded-lg px-3 py-2 ${
                        message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1 text-right">{formatTime(message.timestamp)}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
              <div className="p-3 border-t">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Input
                    placeholder="Type a message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        handleSendMessage()
                      }
                    }}
                  />
                  <Button size="icon" onClick={handleSendMessage} disabled={!inputValue.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-4">
              <div className="relative h-40 w-40 mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Select a conversation"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">Select a Conversation</h3>
              <p className="text-muted-foreground text-center max-w-md">
                Choose a contact from the list to start messaging or continue a conversation.
              </p>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}

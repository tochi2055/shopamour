"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { createContext, useContext, useState, useEffect } from "react"

type ThemeColor = "default" | "rose" | "green" | "blue" | "purple" | "orange"

interface ColorThemeContextType {
  themeColor: ThemeColor
  setThemeColor: (color: ThemeColor) => void
  timeBasedTheme: boolean
  setTimeBasedTheme: (enabled: boolean) => void
}

const ColorThemeContext = createContext<ColorThemeContextType | undefined>(undefined)

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [themeColor, setThemeColor] = useState<ThemeColor>("default")
  const [timeBasedTheme, setTimeBasedTheme] = useState<boolean>(false)

  // Apply theme color to document root
  useEffect(() => {
    document.documentElement.setAttribute("data-theme-color", themeColor)
  }, [themeColor])

  // Time-based theme
  useEffect(() => {
    if (!timeBasedTheme) return

    const setTimeTheme = () => {
      const hour = new Date().getHours()
      if (hour >= 6 && hour < 12) {
        // Morning: Blue theme
        setThemeColor("blue")
      } else if (hour >= 12 && hour < 18) {
        // Afternoon: Orange theme
        setThemeColor("orange")
      } else if (hour >= 18 && hour < 22) {
        // Evening: Purple theme
        setThemeColor("purple")
      } else {
        // Night: Default theme
        setThemeColor("default")
      }
    }

    setTimeTheme()
    const interval = setInterval(setTimeTheme, 60 * 1000) // Check every minute

    return () => clearInterval(interval)
  }, [timeBasedTheme])

  return (
    <ColorThemeContext.Provider value={{ themeColor, setThemeColor, timeBasedTheme, setTimeBasedTheme }}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </ColorThemeContext.Provider>
  )
}

export const useColorTheme = () => {
  const context = useContext(ColorThemeContext)
  if (context === undefined) {
    throw new Error("useColorTheme must be used within a ThemeProvider")
  }
  return context
}

"use client"

import { Moon, Sun, Palette } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useColorTheme } from "@/components/theme-provider"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const { themeColor, setThemeColor, timeBasedTheme, setTimeBasedTheme } = useColorTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Palette className="mr-2 h-4 w-4" />
            <span>Color Theme</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem onClick={() => setThemeColor("default")}>
              <div className="mr-2 h-4 w-4 rounded-full bg-primary" />
              <span>Default</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setThemeColor("rose")}>
              <div className="mr-2 h-4 w-4 rounded-full bg-rose-200 dark:bg-rose-900" />
              <span>Rose</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setThemeColor("green")}>
              <div className="mr-2 h-4 w-4 rounded-full bg-green-200 dark:bg-green-900" />
              <span>Green</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setThemeColor("blue")}>
              <div className="mr-2 h-4 w-4 rounded-full bg-blue-200 dark:bg-blue-900" />
              <span>Blue</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setThemeColor("purple")}>
              <div className="mr-2 h-4 w-4 rounded-full bg-purple-200 dark:bg-purple-900" />
              <span>Purple</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setThemeColor("orange")}>
              <div className="mr-2 h-4 w-4 rounded-full bg-orange-200 dark:bg-orange-900" />
              <span>Orange</span>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        <DropdownMenuCheckboxItem checked={timeBasedTheme} onCheckedChange={setTimeBasedTheme}>
          Time-based themes
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

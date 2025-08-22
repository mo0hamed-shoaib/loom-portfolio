"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useScrollSpy } from "@/hooks/use-scroll-spy"
import { Code, Award, Briefcase, FolderOpen, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

interface NavigationSection {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const sections: NavigationSection[] = [
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "tech-stack", label: "Tech Stack", icon: Code },
  { id: "milestones", label: "Milestones", icon: Award },
  { id: "experience", label: "Experience", icon: Briefcase },
]

export function NavigationDock() {
  const activeSection = useScrollSpy(sections.map((s) => s.id))
  const { theme, setTheme } = useTheme()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Account for fixed header/spacing
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <>
      {/* Desktop Navigation Dock - Fixed on right side */}
      <div className="hidden lg:block fixed right-6 top-1/2 -translate-y-1/2 z-50">
        <div className="flex flex-col gap-2 bg-card/80 backdrop-blur-sm border rounded-full p-2 shadow-lg">
          {sections.map((section) => {
            const Icon = section.icon
            const isActive = activeSection === section.id

            return (
              <Button
                key={section.id}
                variant={isActive ? "default" : "ghost"}
                size="icon"
                onClick={() => scrollToSection(section.id)}
                className="w-10 h-10 rounded-full relative group"
                title={section.label}
              >
                <Icon className="w-4 h-4" />

                {/* Tooltip */}
                <div className="absolute right-full mr-3 px-2 py-1 bg-popover text-popover-foreground text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {section.label}
                </div>
              </Button>
            )
          })}

          {/* Theme Toggle */}
          <div className="border-t border-border my-1" />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full relative group"
            title="Toggle theme"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <div className="absolute right-full mr-3 px-2 py-1 bg-popover text-popover-foreground text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Toggle theme
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Dock - Fixed at bottom */}
      <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-1 bg-card/90 backdrop-blur-sm border rounded-full p-1 shadow-lg">
          {sections.map((section) => {
            const Icon = section.icon
            const isActive = activeSection === section.id

            return (
              <Button
                key={section.id}
                variant={isActive ? "default" : "ghost"}
                size="icon"
                onClick={() => scrollToSection(section.id)}
                className="w-9 h-9 rounded-full"
              >
                <Icon className="w-3.5 h-3.5" />
              </Button>
            )
          })}

          {/* Theme Toggle */}
          <div className="w-px h-6 bg-border mx-1" />
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="w-9 h-9 rounded-full">
            <Sun className="h-3.5 w-3.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-3.5 w-3.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>

      {/* Tablet Navigation Dock - Fixed at bottom right */}
      <div className="hidden md:block lg:hidden fixed bottom-6 right-6 z-50">
        <div className="flex flex-col gap-2 bg-card/80 backdrop-blur-sm border rounded-full p-2 shadow-lg">
          {sections.map((section) => {
            const Icon = section.icon
            const isActive = activeSection === section.id

            return (
              <Button
                key={section.id}
                variant={isActive ? "default" : "ghost"}
                size="icon"
                onClick={() => scrollToSection(section.id)}
                className="w-9 h-9 rounded-full"
              >
                <Icon className="w-4 h-4" />
              </Button>
            )
          })}

          {/* Theme Toggle */}
          <div className="border-t border-border my-1" />
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="w-9 h-9 rounded-full">
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>
    </>
  )
}

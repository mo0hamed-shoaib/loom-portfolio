"use client"

import { useEffect, useState } from "react"

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset

      // Find the section that is currently in view
      let currentActive = ""
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i])
        if (section) {
          // Check if the section is actually visible (not hidden by CSS)
          const rect = section.getBoundingClientRect()
          const isVisible = rect.width > 0 && rect.height > 0
          
          if (isVisible) {
            const sectionTop = section.offsetTop
            if (scrollPosition >= sectionTop) {
              currentActive = sectionIds[i]
              break
            }
          }
        }
      }

      // Only update if the active section has changed
      if (currentActive !== activeSection) {
        setActiveSection(currentActive)
      }
    }

    // Set initial active section
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sectionIds, offset, activeSection])

  return activeSection
}

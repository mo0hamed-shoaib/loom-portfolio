"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

interface TechIconProps {
  name: string
  icon?: string
  size?: "sm" | "md" | "lg"
  className?: string
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
}

// Tech icon mappings with theme-aware variants
const techIcons: Record<string, { light: string; dark?: string }> = {
  // Programming Languages
  javascript: { 
    light: "/icons/programming-languages/javascript.svg",
    dark: "/icons/programming-languages/javascript.svg"
  },
  typescript: { 
    light: "/icons/programming-languages/typescript.svg",
    dark: "/icons/programming-languages/typescript.svg"
  },

  // Frontend
  react: { 
    light: "/icons/frontend/react.svg",
    dark: "/icons/frontend/react.svg"
  },
  nextjs: { 
    light: "/icons/frontend/nextjs-dark.svg",
    dark: "/icons/frontend/nextjs-light.svg"
  },
  angular: { 
    light: "/icons/frontend/angular.svg",
    dark: "/icons/frontend/angular.svg"
  },
  redux: { 
    light: "/icons/frontend/redux.svg",
    dark: "/icons/frontend/redux.svg"
  },
  html: { 
    light: "/icons/frontend/html.svg",
    dark: "/icons/frontend/html.svg"
  },
  css: { 
    light: "/icons/frontend/css.svg",
    dark: "/icons/frontend/css.svg"
  },
  tailwind: { 
    light: "/icons/frontend/tailwind.svg",
    dark: "/icons/frontend/tailwind.svg"
  },
  bootstrap: { 
    light: "/icons/frontend/bootstrap.svg",
    dark: "/icons/frontend/bootstrap.svg"
  },

  // Backend
  nodejs: { 
    light: "/icons/backend/nodejs.svg",
    dark: "/icons/backend/nodejs.svg"
  },
  express: { 
    light: "/icons/backend/express-dark.svg",
    dark: "/icons/backend/express-light.svg"
  },
  api: { 
    light: "/icons/backend/api.svg",
    dark: "/icons/backend/api.svg"
  },
  jwt: { 
    light: "/icons/backend/jwt-dark.svg",
    dark: "/icons/backend/jwt-light.svg"
  },

  // Database
  mongodb: { 
    light: "/icons/database/mongodb.svg",
    dark: "/icons/database/mongodb.svg"
  },
  mongoose: { 
    light: "/icons/database/mongoose.svg",
    dark: "/icons/database/mongoose.svg"
  },
  supabase: { 
    light: "/icons/database/supabase.svg",
    dark: "/icons/database/supabase.svg"
  },

  // Tools & Workflow
  git: { 
    light: "/icons/tools/git.svg",
    dark: "/icons/tools/git.svg"
  },
  github: { 
    light: "/icons/tools/github-dark.svg",
    dark: "/icons/tools/github-light.svg"
  },
  postman: { 
    light: "/icons/tools/postman.svg",
    dark: "/icons/tools/postman.svg"
  },
  npm: { 
    light: "/icons/tools/npm.svg",
    dark: "/icons/tools/npm.svg"
  },

  // Soft Skills (using generic icons)
  communication: { 
    light: "/icons/soft-skills/communication.svg",
    dark: "/icons/soft-skills/communication.svg"
  },
  teamwork: { 
    light: "/icons/soft-skills/teamwork-dark.svg",
    dark: "/icons/soft-skills/teamwork-light.svg"
  },
  "problem-solving": { 
    light: "/icons/soft-skills/problem-solving.svg",
    dark: "/icons/soft-skills/problem-solving.svg"
  },
  "time-management": { 
    light: "/icons/soft-skills/time-management.svg",
    dark: "/icons/soft-skills/time-management.svg"
  },

  // Concepts (using generic icons)
  "data-structures": { 
    light: "/icons/concepts/data-structures.svg",
    dark: "/icons/concepts/data-structures.svg"
  },
  algorithms: { 
    light: "/icons/concepts/algorithms.svg",
    dark: "/icons/concepts/algorithms.svg"
  },
  oop: { 
    light: "/icons/concepts/oop.svg",
    dark: "/icons/concepts/oop.svg"
  },
  "software-engineering": { 
    light: "/icons/concepts/software-engineering.svg",
    dark: "/icons/concepts/software-engineering.svg"
  },
  "clean-code": { 
    light: "/icons/concepts/clean-code.svg",
    dark: "/icons/concepts/clean-code.svg"
  },
}

export function TechIcon({ name, icon, size = "md", className = "" }: TechIconProps) {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [imageError, setImageError] = useState(false)
  const iconKey = icon?.toLowerCase() || name.toLowerCase()
  const iconConfig = techIcons[iconKey]

  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render theme-dependent content until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className={`${sizeClasses[size]} ${className} bg-muted rounded animate-pulse`} />
    )
  }

  // If we have a specific icon configuration and no image error
  if (iconConfig && !imageError) {
    const currentTheme = resolvedTheme || theme || 'light'
    const iconUrl = currentTheme === 'dark' && iconConfig.dark ? iconConfig.dark : iconConfig.light
    
    return (
      <img 
        src={iconUrl}
        alt={`${name} icon`}
        className={`${sizeClasses[size]} ${className}`}
        style={{ 
          width: size === "sm" ? "16px" : size === "md" ? "24px" : "32px",
          height: size === "sm" ? "16px" : size === "md" ? "24px" : "32px",
          display: "block"
        }}
        onError={() => setImageError(true)}
      />
    )
  }

  // Fallback: use a generic code icon
  return (
    <div className={`${sizeClasses[size]} ${className} bg-muted rounded flex items-center justify-center`}>
      <span className="text-xs font-mono text-muted-foreground">
        {name.charAt(0).toUpperCase()}
      </span>
    </div>
  )
}


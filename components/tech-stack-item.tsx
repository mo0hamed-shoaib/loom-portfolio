"use client"

import { TechIcon } from "@/components/tech-icons"

interface TechStackItemProps {
  name: string
  icon?: string
  className?: string
}

export function TechStackItem({ name, icon, className = "" }: TechStackItemProps) {
  return (
    <div className={`flex items-center gap-3 px-4 py-3 bg-card border border-border/50 rounded-lg hover:border-border hover:shadow-sm transition-all duration-200 cursor-pointer group ${className}`}>
      <div className="p-1.5 rounded-md bg-muted/50 group-hover:bg-muted transition-colors flex-shrink-0">
        <TechIcon 
          name={name} 
          icon={icon} 
          size="md" 
          className="text-foreground"
        />
      </div>
      <span className="font-medium text-sm sm:text-base whitespace-nowrap group-hover:text-primary transition-colors">
        {name}
      </span>
    </div>
  )
}

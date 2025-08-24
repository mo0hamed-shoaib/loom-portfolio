"use client"

import { TechIcon } from "@/components/tech-icons"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

interface TechStackItemProps {
  name: string
  icon?: string
  className?: string
}

export function TechStackItem({ name, icon, className = "" }: TechStackItemProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className={`flex items-center gap-3 px-4 py-3 bg-card border border-border/50 rounded-lg hover:border-border hover:shadow-sm transition-all duration-200 cursor-pointer group w-fit flex-shrink-0 ${className}`}>
          <div className="p-1.5 rounded-md bg-muted/50 group-hover:bg-muted transition-colors flex-shrink-0">
            <TechIcon 
              name={name} 
              icon={icon} 
              size="md" 
              className="text-foreground"
            />
          </div>
          <span className="font-mono-technical font-medium typography-small whitespace-nowrap group-hover:text-primary transition-colors">{name}</span>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="typography-h4">{name}</h4>
            <p className="typography-muted">
              {getTechDescription(name)}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <TechIcon 
              name={name} 
              icon={icon} 
              size="lg" 
              className="text-foreground"
            />
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

// Helper function to get tech descriptions
function getTechDescription(techName: string): string {
  const descriptions: Record<string, string> = {
    javascript: "Dynamic programming language for web development",
    typescript: "Typed superset of JavaScript for better development experience",
    react: "JavaScript library for building user interfaces",
    nextjs: "React framework for production with server-side rendering",
    angular: "Platform for building mobile and desktop web applications",
    redux: "Predictable state container for JavaScript apps",
    html: "Markup language for creating web pages",
    css: "Styling language for web documents",
    tailwind: "Utility-first CSS framework for rapid UI development",
    bootstrap: "CSS framework for responsive web design",
    nodejs: "JavaScript runtime for server-side development",
    express: "Fast, unopinionated web framework for Node.js",
    api: "Application Programming Interface for data exchange",
    jwt: "JSON Web Tokens for secure authentication",
    mongodb: "NoSQL document database for modern applications",
    supabase: "Open source Firebase alternative with PostgreSQL",
    git: "Distributed version control system",
    github: "Platform for version control and collaboration",
    postman: "API development and testing platform",
    npm: "Package manager for JavaScript",
    communication: "Effective verbal and written communication skills",
    teamwork: "Collaborative work in team environments",
    "problem-solving": "Analytical thinking and solution development",
    "time-management": "Efficient planning and task prioritization",
    "data-structures": "Understanding of fundamental data organization",
    algorithms: "Problem-solving strategies and computational thinking",
    oop: "Object-oriented programming principles and patterns",
    "software-engineering": "Systematic approach to software development",
    "clean-code": "Writing maintainable and readable code"
  }
  
  return descriptions[techName.toLowerCase()] || "Technology and tool for development"
}

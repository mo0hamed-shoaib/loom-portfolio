"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TechIcon } from "@/components/tech-icons"

interface TechStackCardProps {
  name: string
  icon?: string
  category: string
}

export function TechStackCard({ name, icon, category }: TechStackCardProps) {
  return (
    <Card className="group hover:shadow-md transition-all duration-200 cursor-pointer border-border/50 hover:border-border">
      <CardContent className="p-4 sm:p-6">
        {/* Icon and Name */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-muted/50 group-hover:bg-muted transition-colors">
            <TechIcon 
              name={name} 
              icon={icon} 
              size="lg" 
              className="text-foreground"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm sm:text-base 3xl:text-lg leading-tight group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground capitalize">
              {category}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

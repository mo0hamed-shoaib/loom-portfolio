"use client"

import { Badge } from "@/components/ui/badge"
import { profile } from "@/data/profile"

export function TechStackSection() {
  const categories = Array.from(new Set(profile.techStack.map((tech) => tech.category)))

  return (
    <section className="space-y-6 3xl:space-y-8">
      {/* Section Header */}
      <div className="text-center space-y-2 3xl:space-y-3">
        <h2 className="text-3xl 3xl:text-4xl font-bold tracking-tight">Tech Stack</h2>
        <p className="text-muted-foreground 3xl:text-lg">Technologies and tools I work with</p>
      </div>

      {/* Tech Stack by Category */}
      <div className="space-y-4">
        {categories.map((category) => {
          const categoryTechs = profile.techStack.filter((tech) => tech.category === category)

          return (
            <div key={category} className="space-y-2">
              <h3 className="text-base font-semibold text-muted-foreground">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {categoryTechs.map((tech) => (
                  <Badge
                    key={tech.name}
                    variant="secondary"
                    className="px-3 py-1 text-sm font-medium hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

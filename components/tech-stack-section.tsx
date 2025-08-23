"use client"

import { TechStackCard } from "@/components/tech-stack-card"
import { profile } from "@/data/profile"

export function TechStackSection() {
  const categories = Array.from(new Set(profile.techStack.map((tech) => tech.category)))

  return (
    <section className="space-y-8 3xl:space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-2 3xl:space-y-3">
        <h2 className="text-3xl 3xl:text-4xl font-bold tracking-tight">Tech Stack</h2>
        <p className="text-sm sm:text-base 3xl:text-lg text-muted-foreground">
          Technologies and tools I work with
        </p>
      </div>

      {/* Tech Stack by Category */}
      <div className="space-y-8 3xl:space-y-12">
        {categories.map((category) => {
          const categoryTechs = profile.techStack.filter((tech) => tech.category === category)

          return (
            <div key={category} className="space-y-4 3xl:space-y-6">
              <div className="flex items-center gap-3">
                <h3 className="text-lg sm:text-xl 3xl:text-2xl font-semibold text-foreground">
                  {category}
                </h3>
                <div className="flex-1 h-px bg-border" />
                <span className="text-sm text-muted-foreground">
                  {categoryTechs.length} {categoryTechs.length === 1 ? 'technology' : 'technologies'}
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 3xl:gap-6">
                {categoryTechs.map((tech) => (
                                   <TechStackCard
                   key={tech.name}
                   name={tech.name}
                   icon={tech.icon}
                   category={tech.category}
                 />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

"use client"

import { InfiniteCarousel } from "@/components/infinite-carousel"
import { TechStackItem } from "@/components/tech-stack-item"
import { profile } from "@/data/profile"

export function TechStackSection() {
  const categories = Array.from(new Set(profile.techStack.map((tech) => tech.category)))

  // Different speeds and directions for visual variety
  const carouselConfigs = [
    { speed: "slow" as const, direction: "left" as const },
    { speed: "normal" as const, direction: "right" as const },
    { speed: "fast" as const, direction: "left" as const },
    { speed: "normal" as const, direction: "right" as const },
  ]

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
        {categories.map((category, index) => {
          const categoryTechs = profile.techStack.filter((tech) => tech.category === category)
          const config = carouselConfigs[index % carouselConfigs.length]

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
              
              {categoryTechs.length >= 4 ? (
                <InfiniteCarousel
                  speed={config.speed}
                  direction={config.direction}
                  className="py-2"
                >
                  {categoryTechs.map((tech) => (
                    <TechStackItem
                      key={tech.name}
                      name={tech.name}
                      icon={tech.icon}
                    />
                  ))}
                </InfiniteCarousel>
              ) : (
                <div className="flex gap-4 py-2 overflow-x-auto">
                  {categoryTechs.map((tech) => (
                    <TechStackItem
                      key={tech.name}
                      name={tech.name}
                      icon={tech.icon}
                    />
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

"use client"

import { InfiniteCarousel } from "@/components/infinite-carousel"
import { TechStackItem } from "@/components/tech-stack-item"
import { profile } from "@/data/profile"

export function TechStackSection() {
  const categories = Array.from(new Set(profile.techStack.map((tech) => tech.category)))

  // Balanced speeds and directions for visual variety
  const carouselConfigs = [
    { speed: "slow" as const, direction: "left" as const },
    { speed: "normal" as const, direction: "right" as const },
    { speed: "slow" as const, direction: "left" as const },
    { speed: "normal" as const, direction: "right" as const },
  ]

  return (
    <section className="space-y-8 3xl:space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-2 3xl:space-y-3">
        <h2 className="typography-h2">Tech Stack</h2>
        <p className="typography-lead">
          Technologies and tools I work with
        </p>
      </div>

      {/* Tech Stack by Category */}
      <div className="space-y-8 3xl:space-y-12">
        {categories.map((category) => {
          const categoryTechs = profile.techStack.filter((tech) => tech.category === category)
          const carouselConfig = carouselConfigs[categories.indexOf(category) % carouselConfigs.length]

          return (
            <div key={category} className="space-y-4 3xl:space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="typography-h3">{category}</h3>
                <span className="typography-muted">{categoryTechs.length} technologies</span>
              </div>
              
              {/* Use carousel only if there are enough items, otherwise show static layout */}
              {categoryTechs.length >= 4 ? (
                <InfiniteCarousel
                  speed={carouselConfig.speed}
                  direction={carouselConfig.direction}
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

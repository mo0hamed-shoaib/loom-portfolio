"use client";

import { InfiniteCarousel } from "@/components/infinite-carousel";
import { TechStackItem } from "@/components/tech-stack-item";
import { profile } from "@/data/profile";

export function TechStackSection() {
  // Map certain source categories to a single display category while keeping
  // the original data untouched. This keeps "Backend" and "Database"
  // distinct in code but shows them together in the UI.
  const displayCategory = (c: string) => {
    // Group backend and database together under a clear label for the UI
    if (c === "Backend" || c === "Database") return "Backend Familiarity";
    // Group programming languages and frontend together under a single label
    if (c === "Programming Languages" || c === "Frontend")
      return "Languages & Frontend";
    return c;
  };

  // Build grouped map and preserve display category order based on first
  // appearance in the tech stack array.
  const grouped = profile.techStack.reduce((map, tech) => {
    const cat = displayCategory(tech.category);
    const list = map.get(cat) ?? [];
    list.push(tech);
    map.set(cat, list);
    return map;
  }, new Map<string, typeof profile.techStack>());

  const categories = Array.from(grouped.keys());

  // Balanced speeds and directions for visual variety
  const carouselConfigs = [
    { speed: "slow" as const, direction: "left" as const },
    { speed: "normal" as const, direction: "right" as const },
    { speed: "slow" as const, direction: "left" as const },
    { speed: "normal" as const, direction: "right" as const },
  ];

  return (
    <section className="space-y-8 3xl:space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-2 3xl:space-y-3">
        <h2 className="typography-h2">Tech Stack</h2>
        <p className="text-xl text-secondary-foreground">
          Technologies and tools I work with
        </p>
      </div>

      {/* Tech Stack by Category */}
      <div className="space-y-8 3xl:space-y-12">
        {categories.map((category) => {
          const categoryTechs = grouped.get(category) ?? [];
          const carouselConfig =
            carouselConfigs[
              categories.indexOf(category) % carouselConfigs.length
            ];

          return (
            <div key={category} className="space-y-4 3xl:space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="typography-h3">{category}</h3>
                <span className="typography-muted">
                  {categoryTechs.length} technologies
                </span>
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
          );
        })}
      </div>
    </section>
  );
}

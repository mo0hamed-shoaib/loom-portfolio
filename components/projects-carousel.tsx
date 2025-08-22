"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/data/projects"

export function ProjectsCarousel() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  if (projects.length === 0) {
    return (
      <section className="space-y-6 3xl:space-y-8">
        <div className="text-center space-y-2 3xl:space-y-3">
          <h2 className="text-3xl 3xl:text-4xl font-bold tracking-tight">Featured Projects</h2>
          <p className="text-muted-foreground 3xl:text-lg">No projects available</p>
        </div>
      </section>
    )
  }

  return (
    <section className="space-y-6 3xl:space-y-8">
      {/* Section Header */}
      <div className="text-center space-y-2 3xl:space-y-3">
        <h2 className="text-3xl 3xl:text-4xl font-bold tracking-tight">Featured Projects</h2>
        <p className="text-muted-foreground 3xl:text-lg">Showcasing some of my recent work and technical achievements</p>
      </div>

      {/* Project Navigation with Progress Bar */}
      <div className="flex items-center justify-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevProject}
          disabled={projects.length <= 1}
          className="w-10 h-10 3xl:w-12 3xl:h-12 bg-transparent transition-transform hover:scale-105"
        >
          <ChevronLeft className="w-4 h-4 3xl:w-5 3xl:h-5" />
        </Button>

        <div className="flex items-center gap-3 3xl:gap-4">
          <span className="text-sm 3xl:text-base text-muted-foreground whitespace-nowrap">
            {currentProjectIndex + 1} of {projects.length}
          </span>
          {projects.length > 1 && (
            <div className="w-32 3xl:w-40 h-1 3xl:h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
                style={{
                  width: `${((currentProjectIndex + 1) / projects.length) * 100}%`,
                }}
              />
            </div>
          )}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextProject}
          disabled={projects.length <= 1}
          className="w-10 h-10 3xl:w-12 3xl:h-12 bg-transparent transition-transform hover:scale-105"
        >
          <ChevronRight className="w-4 h-4 3xl:w-5 3xl:h-5" />
        </Button>
      </div>

      {/* Current Project */}
      <div className="w-full transform transition-all duration-300 ease-out">
        <ProjectCard project={projects[currentProjectIndex]} />
      </div>
    </section>
  )
}

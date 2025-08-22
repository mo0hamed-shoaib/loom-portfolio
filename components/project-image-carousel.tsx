"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Project } from "@/lib/schemas"

interface ProjectImageCarouselProps {
  project: Project
}

export function ProjectImageCarousel({ project }: ProjectImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.media.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.media.length) % project.media.length)
  }

  if (project.media.length === 0) {
    return (
      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">No images available</p>
      </div>
    )
  }

  return (
    <div className="relative group">
      <div className="aspect-video relative overflow-hidden rounded-lg bg-muted">
        <Image
          src={project.media[currentImageIndex].src || "/placeholder.svg"}
          alt={project.media[currentImageIndex].alt || `${project.title} screenshot ${currentImageIndex + 1}`}
          fill
          className="object-cover transition-all duration-300 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Navigation arrows - only show if more than 1 image */}
      {project.media.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-background/80 backdrop-blur-sm hover:scale-105"
            onClick={prevImage}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-background/80 backdrop-blur-sm hover:scale-105"
            onClick={nextImage}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="text-xs text-muted-foreground">
              {currentImageIndex + 1}/{project.media.length}
            </span>
            <div className="w-16 h-1 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
                style={{
                  width: `${((currentImageIndex + 1) / project.media.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Project } from "@/lib/schemas"

interface ProjectImageCarouselProps {
  project: Project
}

export function ProjectImageCarousel({ project }: ProjectImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Reset currentImageIndex when project changes
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [project.slug])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.media.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.media.length) % project.media.length)
  }

  // Touch/Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
    setCurrentX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    setCurrentX(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!isDragging) return
    
    const diff = startX - currentX
    const threshold = 50 // Minimum swipe distance

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swiped left - next image
        nextImage()
      } else {
        // Swiped right - previous image
        prevImage()
      }
    }

    setIsDragging(false)
    setStartX(0)
    setCurrentX(0)
  }

  if (project.media.length === 0) {
    return (
      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
        <p className="text-secondary-foreground">No images available</p>
      </div>
    )
  }

  // Ensure currentImageIndex is within bounds
  const safeImageIndex = Math.min(currentImageIndex, project.media.length - 1)
  const currentImage = project.media[safeImageIndex]

  // If somehow we still don't have a valid image, show placeholder
  if (!currentImage) {
    return (
      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
        <p className="text-secondary-foreground">Image not available</p>
      </div>
    )
  }

  return (
    <div className="relative group" ref={carouselRef}>
      <div 
        className="aspect-video relative overflow-hidden rounded-lg bg-muted cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={currentImage.src || "/placeholder.svg"}
          alt={currentImage.alt || `${project.title} screenshot ${safeImageIndex + 1}`}
          fill
          className="object-cover transition-all duration-300 ease-out select-none"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, (max-width: 1920px) 33vw, 25vw"
          priority={safeImageIndex === 0}
          loading={safeImageIndex === 0 ? "eager" : "lazy"}
          quality={85}
          draggable={false}
        />
        
        {/* Preload next image for better UX */}
        {project.media.length > 1 && (
          <Image
            src={project.media[(safeImageIndex + 1) % project.media.length].src}
            alt=""
            fill
            className="hidden"
            sizes="1px"
            priority={false}
            loading="lazy"
            draggable={false}
          />
        )}
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
            <span className="text-xs text-secondary-foreground">
              {safeImageIndex + 1}/{project.media.length}
            </span>
            <Progress 
              value={((safeImageIndex + 1) / project.media.length) * 100} 
              className="w-16 h-1" 
            />
          </div>
        </>
      )}
    </div>
  )
}

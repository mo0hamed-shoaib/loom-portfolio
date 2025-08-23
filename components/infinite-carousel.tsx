"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface InfiniteCarouselProps {
  children: React.ReactNode
  className?: string
  speed?: "slow" | "normal" | "fast"
  direction?: "left" | "right"
  pauseOnHover?: boolean
}

const speedClasses = {
  slow: "animate-scroll-slow",
  normal: "animate-scroll",
  fast: "animate-scroll-fast",
}

export function InfiniteCarousel({
  children,
  className,
  speed = "normal",
  direction = "left",
  pauseOnHover = true,
}: InfiniteCarouselProps) {
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    if (pauseOnHover) setIsPaused(true)
  }

  const handleMouseLeave = () => {
    if (pauseOnHover) setIsPaused(false)
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn(
          "flex gap-4",
          speedClasses[speed],
          direction === "right" && "animate-scroll-reverse",
          isPaused && "animation-paused"
        )}
      >
        {/* First set of items */}
        <div className="flex gap-4">
          {children}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex gap-4">
          {children}
        </div>
        {/* Third set to ensure smooth transition */}
        <div className="flex gap-4">
          {children}
        </div>
      </div>
    </div>
  )
}

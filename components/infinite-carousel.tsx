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

const speeds = {
  slow: 60,
  normal: 40,
  fast: 25,
}

export function InfiniteCarousel({
  children,
  className,
  speed = "normal",
  direction = "left",
  pauseOnHover = true,
}: InfiniteCarouselProps) {
  const [isPaused, setIsPaused] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  
  const [animationName, setAnimationName] = useState("")
  const [animationDuration, setAnimationDuration] = useState("0s")
  const [numCopies, setNumCopies] = useState(2) // Default to 2 copies

  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      const contentWidth = contentRef.current.offsetWidth

      if (contentWidth > 0) {
        // Calculate how many copies are needed to fill the container + 1 for seamless loop
        const requiredCopies = Math.ceil(containerWidth / contentWidth) + 1
        setNumCopies(Math.max(2, requiredCopies)) // Ensure at least 2 copies

        // Dynamically create animation
        const newAnimationName = `scroll-${Math.random().toString(36).substring(7)}`
        const pixelSpeed = speeds[speed]
        const duration = contentWidth / pixelSpeed
        setAnimationDuration(`${duration}s`)

        const styleSheet = document.styleSheets[0]
        
        const keyframes = `
          @keyframes ${newAnimationName} {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-${contentWidth}px - 1rem)); /* 1rem is the gap */
            }
          }
        `
        
        const reverseKeyframes = `
          @keyframes ${newAnimationName}-reverse {
            0% {
              transform: translateX(calc(-${contentWidth}px - 1rem)); /* 1rem is the gap */
            }
            100% {
              transform: translateX(0);
            }
          }
        `

        try {
          styleSheet.insertRule(keyframes, styleSheet.cssRules.length)
          styleSheet.insertRule(reverseKeyframes, styleSheet.cssRules.length)
          setAnimationName(newAnimationName)
        } catch (e) {
          console.error("Failed to insert keyframes:", e)
        }
      }
    }
  }, [children, speed, direction])

  // Handle visibility change to restart animation when tab becomes visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden)
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  const handleMouseEnter = () => {
    if (pauseOnHover) setIsPaused(true)
  }

  const handleMouseLeave = () => {
    if (pauseOnHover) setIsPaused(false)
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn("flex gap-4")}
        style={{
          animationName: animationName ? (direction === 'left' ? animationName : `${animationName}-reverse`) : 'none',
          animationDuration: animationDuration,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationPlayState: (isPaused || !isVisible) ? 'paused' : 'running',
        }}
      >
        {Array.from({ length: numCopies }).map((_, i) => (
          <div
            key={i}
            ref={i === 0 ? contentRef : null}
            className="flex flex-shrink-0 gap-4"
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  )
}

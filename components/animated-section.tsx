"use client";

import type React from "react";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right";
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  animation = "fade-up",
}: AnimatedSectionProps) {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "-50px",
  });

  const animationClasses = {
    "fade-up": "translate-y-8 opacity-0",
    "fade-in": "opacity-0",
    "slide-left": "translate-x-8 opacity-0",
    "slide-right": "-translate-x-8 opacity-0",
  };

  return (
    <section
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100",
        !hasIntersected && animationClasses[animation],
        hasIntersected && "translate-y-0 translate-x-0 opacity-100",
        className
      )}
      style={{
        transitionDelay: hasIntersected ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </section>
  );
}
